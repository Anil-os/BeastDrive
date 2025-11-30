# Razorpay Payment Integration Setup

## Step 1: Create Razorpay Account
1. Go to https://razorpay.com
2. Click **Sign Up** (it's FREE for testing)
3. Complete the registration with your email
4. Verify your email

## Step 2: Get API Keys
1. After logging in, go to **Settings** (gear icon)
2. Click **API Keys** in the left sidebar
3. Click **Generate Test Keys** (or use existing keys)
4. You'll see:
   - **Key ID**: `rzp_test_xxxxx`
   - **Key Secret**: Click "Show" to reveal

## Step 3: Add Keys to .env.local
Open your `.env.local` file and replace:
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
```

With your actual keys:
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=your_actual_secret_key
```

## Step 4: Test Payment
1. Restart your dev server: `npm run dev`
2. Go to Events page
3. Click "Register Now" on any event
4. Fill the form and proceed to payment
5. Use test card: **4111 1111 1111 1111**
   - CVV: Any 3 digits
   - Expiry: Any future date

## Test Mode vs Live Mode
- **Test Mode**: Use test keys (rzp_test_xxx) - No real money charged
- **Live Mode**: After KYC verification, use live keys (rzp_live_xxx) - Real payments

## Important Notes
✅ Test mode is FREE - no charges apply
✅ You need to complete KYC for live/production payments
✅ Test payments appear in your Razorpay dashboard but aren't real
✅ Payment of ₹5,999 will be processed securely

## Support
- Razorpay Docs: https://razorpay.com/docs
- Support: support@razorpay.com
