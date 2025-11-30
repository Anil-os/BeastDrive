import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { amount, currency = 'INR', receipt } = body;

        if (!amount || amount <= 0) {
            return NextResponse.json(
                { 
                    success: false,
                    error: 'Invalid amount',
                    message: 'Amount must be greater than 0' 
                },
                { status: 400 }
            );
        }

        // Dynamic import of Razorpay for Next.js compatibility
        const Razorpay = (await import('razorpay')).default;

        const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_RlfVBHrunRCNTP';
        const key_secret = process.env.RAZORPAY_KEY_SECRET || 'BX7EJS4BOWozxKc1B82IVCPp';

        const razorpay = new Razorpay({
            key_id: key_id,
            key_secret: key_secret,
        });

        const order = await razorpay.orders.create({
            amount: amount * 100, // Razorpay expects amount in paise
            currency,
            receipt,
        });

        return NextResponse.json({ 
            success: true,
            orderId: order.id, 
            amount: order.amount,
            currency: order.currency 
        });
    } catch (error: any) {
        console.error('Error creating Razorpay order:', error);
        return NextResponse.json(
            { 
                success: false,
                error: 'Failed to create order',
                message: error.message || 'An error occurred' 
            },
            { status: 500 }
        );
    }
}
