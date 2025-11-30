"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqs: FAQItem[] = [
    {
        category: "Registration",
        question: "How do I register for an event?",
        answer: "You can register by visiting our Contact page and filling out the registration form. Select your desired event, provide your details, and our team will get in touch with you within 24 hours to confirm your registration and payment details.",
    },
    {
        category: "Registration",
        question: "What is the registration deadline?",
        answer: "Registration typically closes 2 weeks before the event start date or when all slots are filled, whichever comes first. We recommend registering early as our events often sell out quickly.",
    },
    {
        category: "Registration",
        question: "Can I cancel my registration?",
        answer: "Yes, cancellations are allowed up to 30 days before the event with a 50% refund. Cancellations within 30 days are non-refundable, but you can transfer your registration to another participant or future event.",
    },
    {
        category: "Eligibility",
        question: "What is the minimum age requirement?",
        answer: "Participants must be at least 21 years old and hold a valid driving license for a minimum of 2 years. For passengers, the minimum age is 18 years with parental consent if under 21.",
    },
    {
        category: "Eligibility",
        question: "Do I need prior off-road driving experience?",
        answer: "While prior experience is beneficial, it's not mandatory. We provide a comprehensive briefing before each event and have support vehicles throughout the journey. However, you should be comfortable with long-distance driving and basic vehicle maintenance.",
    },
    {
        category: "Vehicles",
        question: "What type of vehicle do I need?",
        answer: "We recommend SUVs or 4x4 vehicles in good condition. Your vehicle should have proper ground clearance (minimum 200mm), working 4WD system, and be mechanically sound. Sedans and hatchbacks are not suitable for our events.",
    },
    {
        category: "Vehicles",
        question: "What if my vehicle breaks down during the event?",
        answer: "We have support vehicles and mechanics accompanying every event. Minor repairs can be done on-site. For major breakdowns, we'll arrange towing to the nearest service center. However, participants are responsible for their vehicle repair costs.",
    },
    {
        category: "Vehicles",
        question: "Do I need to modify my vehicle?",
        answer: "Basic modifications like all-terrain tires, roof carriers, and auxiliary lights are recommended but not mandatory. We'll provide a detailed vehicle preparation checklist upon registration.",
    },
    {
        category: "Fees",
        question: "What does the registration fee include?",
        answer: "The fee covers accommodation, meals, support vehicles, mechanical assistance, event merchandise, permits, and insurance. It does not include fuel, personal expenses, or vehicle modifications.",
    },
    {
        category: "Fees",
        question: "Are there any additional costs?",
        answer: "Yes, you'll need to budget for fuel (approximately ₹15,000-25,000 depending on the event), personal expenses, and any optional activities. We recommend carrying extra cash for emergencies.",
    },
    {
        category: "Safety",
        question: "What safety measures are in place?",
        answer: "We have medical support, satellite communication, GPS tracking on all vehicles, comprehensive insurance, and experienced guides. All participants receive safety briefings and emergency contact numbers.",
    },
    {
        category: "Safety",
        question: "What should I bring?",
        answer: "Essential items include valid ID, driving license, medical prescriptions, personal toiletries, warm clothing, sunscreen, and a first-aid kit. We'll provide a detailed packing list upon registration.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

    const filteredFAQs = selectedCategory === "All"
        ? faqs
        : faqs.filter(faq => faq.category === selectedCategory);

    return (
        <main className="min-h-screen pt-16 bg-black">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        <span className="bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        Everything you need to know about BeastDrive events
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-black border-b border-white/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                        ? "bg-gradient-to-r from-primary to-accent-orange text-white"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        {filteredFAQs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <div className="flex-1">
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                            {faq.category}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-semibold text-white mt-1">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        {openIndex === index ? (
                                            <FiChevronUp className="w-6 h-6 text-primary" />
                                        ) : (
                                            <FiChevronDown className="w-6 h-6 text-gray-400" />
                                        )}
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-gradient-to-r from-primary via-accent-orange to-accent-yellow">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                        Still Have Questions?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Our team is here to help. Get in touch with us!
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </main>
    );
}
