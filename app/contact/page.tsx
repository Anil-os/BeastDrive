"use client";

import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiUser, FiTruck } from "react-icons/fi";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Contact() {
    const [formType, setFormType] = useState<"contact" | "registration">("contact");
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState<"success" | "error">("success");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        vehicle: "",
        vehicleModel: "",
        event: "",
        message: "",
        consent: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const tableName = formType === "contact" ? "enquiries" : "registrations";
            
            // Prepare data based on form type
            const dataToInsert = formType === "contact" 
                ? {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    message: formData.message || null,
                    created_at: new Date().toISOString(),
                }
                : {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    vehicle: formData.vehicle || null,
                    vehicle_model: formData.vehicleModel || null,
                    event: formData.event || null,
                    message: formData.message || null,
                    created_at: new Date().toISOString(),
                };
            
            const { data, error } = await supabase
                .from(tableName)
                .insert([dataToInsert]);

            if (error) throw error;

            // Show success toast
            setToastMessage(formType === "contact"
                ? "Message sent successfully! We&apos;ll get back to you soon."
                : "Registration submitted successfully! Welcome to the tribe.");
            setToastType("success");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 4000);

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                city: "",
                vehicle: "",
                vehicleModel: "",
                event: "",
                message: "",
                consent: false,
            });
        } catch (error: any) {
            console.error("Error submitting form:", error?.message || error);
            setToastMessage("Something went wrong. Please try again or contact support@beastdrive.in");
            setToastType("error");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 4000);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    return (
        <main className="min-h-screen pt-16 bg-black relative">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-black/80 z-10"></div>
                <img 
                    src="/images/hero-offroad.jpg" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-24 right-4 z-50 animate-slide-in">
                    <div className={`px-6 py-4 rounded-lg shadow-2xl border ${
                        toastType === "success" 
                            ? "bg-gradient-to-r from-green-500/90 to-emerald-600/90 border-green-400" 
                            : "bg-gradient-to-r from-red-500/90 to-rose-600/90 border-red-400"
                    } backdrop-blur-sm`}>
                        <div className="flex items-center space-x-3">
                            {toastType === "success" ? (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                            <p className="text-white font-semibold">{toastMessage}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-neutral-900/50 to-black/50 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        <span className="bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        Ready to start your adventure? We&apos;re here to help.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-transparent relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 font-display">
                                    Contact Information
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-orange rounded-full flex items-center justify-center flex-shrink-0">
                                            <FiMail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">Email</h3>
                                            <p className="text-gray-400">support@beastdrive.in</p>
                                            <p className="text-gray-400">sponsor@beastdrive.in</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-accent-yellow rounded-full flex items-center justify-center flex-shrink-0">
                                            <FiPhone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">Phone</h3>
                                            <p className="text-gray-400">+91-7996664656</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-accent-yellow to-primary rounded-full flex items-center justify-center flex-shrink-0">
                                            <FiMapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold mb-1">Office</h3>
                                            <p className="text-gray-400">
                                                Sector 2, HSR Layout,<br />
                                                Bengaluru, Karnataka 560102
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <h3 className="text-white font-semibold mb-3">Office Hours</h3>
                                <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-gray-400 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                                <p className="text-gray-400 text-sm">Sunday: Closed</p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            {/* Form Type Toggle */}
                            <div className="flex gap-4 mb-8">
                                <button
                                    onClick={() => setFormType("contact")}
                                    className={`flex-1 py-3 rounded-full font-semibold transition-all duration-300 ${formType === "contact"
                                        ? "bg-gradient-to-r from-primary to-accent-orange text-white"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                                        }`}
                                >
                                    Contact / Enquiry
                                </button>
                                <button
                                    onClick={() => setFormType("registration")}
                                    className={`flex-1 py-3 rounded-full font-semibold transition-all duration-300 ${formType === "registration"
                                        ? "bg-gradient-to-r from-primary to-accent-orange text-white"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                                        }`}
                                >
                                    Event Registration
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="New Delhi"
                                        />
                                    </div>
                                </div>

                                {formType === "registration" && (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white font-medium mb-2">Vehicle Type *</label>
                                                <select
                                                    name="vehicle"
                                                    value={formData.vehicle}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                                >
                                                    <option value="" className="bg-neutral-900 text-white">Select vehicle type</option>
                                                    <option value="suv" className="bg-neutral-900 text-white">SUV</option>
                                                    <option value="4x4" className="bg-neutral-900 text-white">4x4</option>
                                                    <option value="crossover" className="bg-neutral-900 text-white">Crossover</option>
                                                    <option value="other" className="bg-neutral-900 text-white">Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-white font-medium mb-2">Vehicle Model *</label>
                                                <input
                                                    type="text"
                                                    name="vehicleModel"
                                                    value={formData.vehicleModel}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                                    placeholder="e.g., Mahindra Thar 2023"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2">Select Event *</label>
                                            <select
                                                name="event"
                                                value={formData.event}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                            >
                                                <option value="" className="bg-neutral-900 text-white">Choose an event</option>
                                                <option value="himalayan" className="bg-neutral-900 text-white">Himalayan Thunder Run</option>
                                                <option value="desert" className="bg-neutral-900 text-white">Desert Storm Challenge</option>
                                                <option value="coastal" className="bg-neutral-900 text-white">Coastal Fury Drive</option>
                                                <option value="northeast" className="bg-neutral-900 text-white">Northeast Explorer</option>
                                            </select>
                                        </div>
                                    </>
                                )}

                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        {formType === "contact" ? "Message" : "Additional Information"}
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder={formType === "contact" ? "How can we help you?" : "Any special requirements or questions?"}
                                    ></textarea>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 mr-3"
                                    />
                                    <label className="text-gray-400 text-sm">
                                        I agree to the terms and conditions and consent to BeastDrive contacting me regarding events,
                                        updates, and promotional offers. I understand my data will be processed according to the privacy policy.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-primary to-accent-orange text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Processing..." : (formType === "contact" ? "Send Message" : "Submit Registration")}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
