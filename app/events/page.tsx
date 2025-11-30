"use client";

import React, { useState } from "react";
import { FiCalendar, FiMapPin, FiDollarSign, FiClock } from "react-icons/fi";

// Declare Razorpay type
declare global {
    interface Window {
        Razorpay: any;
    }
}

interface Event {
    id: number;
    name: string;
    description: string;
    date: string;
    route: string;
    distance: string;
    duration: string;
    fee: string;
    status: "upcoming" | "registration-open" | "sold-out";
    image: string;
}

const events: Event[] = [
    {
        id: 1,
        name: "Himalayan Thunder Run",
        description: "Conquer the mighty Himalayas in this epic 7-day survival run through mountain passes and challenging terrains.",
        date: "March 15-22, 2026",
        route: "Delhi → Manali → Leh → Srinagar",
        distance: "2,500 KM",
        duration: "7 Days",
        fee: "₹5,999",
        status: "registration-open",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Desert Storm Challenge",
        description: "Navigate through the golden sands of Rajasthan in this intense 5-day desert survival adventure.",
        date: "April 10-15, 2026",
        route: "Jaipur → Jaisalmer → Bikaner → Jodhpur",
        distance: "1,800 KM",
        duration: "5 Days",
        fee: "₹5,999",
        status: "registration-open",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2676&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Coastal Fury Drive",
        description: "Experience the thrill of driving along India&apos;s stunning coastline with beach camping and water sports.",
        date: "May 5-11, 2026",
        route: "Mumbai → Goa → Mangalore → Kochi",
        distance: "2,200 KM",
        duration: "6 Days",
        fee: "₹5,999",
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Northeast Explorer",
        description: "Discover the hidden gems of Northeast India through winding roads, lush forests, and vibrant cultures.",
        date: "June 1-10, 2026",
        route: "Guwahati → Shillong → Tawang → Kaziranga",
        distance: "3,000 KM",
        duration: "9 Days",
        fee: "₹5,999",
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function Events() {
    const [filter, setFilter] = useState<"all" | "upcoming" | "registration-open">("all");
    const [loading, setLoading] = useState(false);

    const filteredEvents = filter === "all"
        ? events
        : events.filter(event => event.status === filter);

    const handlePayment = async (event: Event) => {
        if (event.status !== "registration-open") return;

        setLoading(true);
        try {
            // Load Razorpay script
            const loadScript = () => {
                return new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                    script.onload = () => resolve(true);
                    script.onerror = () => resolve(false);
                    document.body.appendChild(script);
                });
            };

            const scriptLoaded = await loadScript();
            if (!scriptLoaded) {
                alert('Failed to load payment gateway. Please check your internet connection.');
                setLoading(false);
                return;
            }

            // Extract numeric amount from fee string (e.g., "₹5,999" -> 5999)
            const numericAmount = parseInt(event.fee.replace(/[^0-9]/g, ''));

            // Create order
            const response = await fetch('/api/razorpay', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: numericAmount,
                    currency: 'INR',
                    receipt: `receipt_${event.id}_${Date.now()}`,
                }),
            });

            const data = await response.json();
            
            console.log('API Response:', data);
            
            if (!response.ok || !data.success) {
                const errorMsg = data?.message || data?.error || 'Failed to create payment order';
                console.error('Payment API Error:', errorMsg);
                throw new Error(errorMsg);
            }
            
            if (!data.orderId) {
                throw new Error('No order ID received from payment gateway');
            }

            const options = {
                key: 'rzp_test_RlfVBHrunRCNTP',
                amount: numericAmount * 100, // Convert to paise
                currency: 'INR',
                name: 'BeastDrive',
                description: event.name,
                order_id: data.orderId,
                handler: function (response: any) {
                    alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                    window.location.href = '/contact?payment=success';
                },
                prefill: {
                    name: '',
                    email: '',
                    contact: '',
                },
                theme: {
                    color: '#FF6B35',
                },
                modal: {
                    ondismiss: function() {
                        setLoading(false);
                    }
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
            setLoading(false);
        } catch (error: any) {
            console.error('Payment error:', error);
            alert(error.message || 'Payment failed. Please try again.');
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen pt-16 bg-black">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        <span className="bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                            Upcoming Events
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        Choose your next adventure. Limited slots available for each event.
                    </p>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="py-8 bg-black border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === "all"
                                    ? "bg-gradient-to-r from-primary to-accent-orange text-white"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            All Events
                        </button>
                        <button
                            onClick={() => setFilter("registration-open")}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === "registration-open"
                                    ? "bg-gradient-to-r from-primary to-accent-orange text-white"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            Registration Open
                        </button>
                        <button
                            onClick={() => setFilter("upcoming")}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === "upcoming"
                                    ? "bg-gradient-to-r from-primary to-accent-orange text-white"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            Coming Soon
                        </button>
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
                            >
                                {/* Event Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${event.image})` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        {event.status === "registration-open" && (
                                            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                Registration Open
                                            </span>
                                        )}
                                        {event.status === "upcoming" && (
                                            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                Coming Soon
                                            </span>
                                        )}
                                        {event.status === "sold-out" && (
                                            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                Sold Out
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {event.name}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {event.description}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-gray-300">
                                            <FiCalendar className="w-5 h-5 mr-3 text-primary" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <FiMapPin className="w-5 h-5 mr-3 text-accent-orange" />
                                            <span>{event.route}</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <FiClock className="w-5 h-5 mr-3 text-accent-yellow" />
                                            <span>{event.distance} • {event.duration}</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <FiDollarSign className="w-5 h-5 mr-3 text-green-400" />
                                            <span className="text-xl font-bold text-white">{event.fee}</span>
                                        </div>
                                    </div>

                                    {/* Register Button */}
                                    <a
                                        href="/contact"
                                        className={`block w-full text-center py-4 rounded-full font-semibold transition-all duration-300 ${event.status === "registration-open"
                                                ? "bg-gradient-to-r from-primary to-accent-orange text-white hover:shadow-lg hover:shadow-primary/50"
                                                : "bg-white/10 text-gray-400 cursor-not-allowed"
                                            }`}
                                    >
                                        {event.status === "registration-open" ? "Register Now" : "Notify Me"}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
