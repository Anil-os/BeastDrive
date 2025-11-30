"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextParallaxContent } from "@/components/TextParallaxContent";
import Button from "@/components/ui/Button";
import { FiArrowUpRight, FiMapPin, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background with gradient overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/hero-offroad.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                                India's Ultimate
                            </span>
                            <br />
                            <span className="text-white">Survival Run</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-gray-300 mb-4 font-semibold">
                            Drive — 3500 KM — 25 Cars — Make History
                        </p>
                        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                            Join India's most thrilling adventure-drive and survival-run events.
                            Experience endurance, thrill, and community like never before.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button href="/contact" variant="primary">
                                Register Now
                            </Button>
                            <Button href="/events" variant="outline">
                                Learn More
                            </Button>
                            <Button href="/sponsors" variant="secondary">
                                Become a Sponsor
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-b from-black to-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <FiMapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">3500+</h3>
                            <p className="text-gray-400 text-lg">Kilometers Covered</p>
                        </div>
                        <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <FiUsers className="w-12 h-12 mx-auto mb-4 text-accent-orange" />
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">500+</h3>
                            <p className="text-gray-400 text-lg">Adventurers</p>
                        </div>
                        <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <FiTrendingUp className="w-12 h-12 mx-auto mb-4 text-accent-yellow" />
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">15+</h3>
                            <p className="text-gray-400 text-lg">Events Completed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parallax Sections */}
            <TextParallaxContent
                imgUrl="/images/mud-run.jpg"
                subheading="Adventure"
                heading="Conquer the Unknown"
            >
                <ExampleContent
                    title="Epic Off-Road Journeys"
                    description="Take your Mahindra Thar, Jeep, or adventure vehicle across India's most challenging terrains. From mountain passes to desert highways, experience the thrill of the open road."
                    buttonText="View Routes"
                    buttonHref="/events"
                />
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl="/images/obstacle-course.jpg"
                subheading="Endurance"
                heading="Test Your Limits"
            >
                <ExampleContent
                    title="Survival Challenges"
                    description="Push beyond your comfort zone with our survival-run events. Navigate through extreme conditions, overcome obstacles, and discover your true potential with fellow adventurers."
                    buttonText="Join Challenge"
                    buttonHref="/contact"
                />
            </TextParallaxContent>

            <TextParallaxContent
                imgUrl="/images/forest-run.jpg"
                subheading="Community"
                heading="Make Lifelong Connections"
            >
                <ExampleContent
                    title="Join the Brotherhood"
                    description="Connect with like-minded off-road enthusiasts who share your passion for exploration. Build lasting friendships and create unforgettable memories on the journey."
                    buttonText="Meet the Team"
                    buttonHref="/about"
                />
            </TextParallaxContent>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary via-accent-orange to-accent-red relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                        Ready for the Adventure?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Don't miss out on India's most epic survival run. Limited slots available!
                    </p>
                    <Button href="/contact" variant="secondary">
                        Register for Next Event
                    </Button>
                </div>
            </section>
        </main>
    );
}

const ExampleContent = ({
    title,
    description,
    buttonText,
    buttonHref
}: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
}) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
            {title}
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-400 md:text-2xl">
                {description}
            </p>
            <a
                href={buttonHref}
                className="inline-flex items-center w-full md:w-fit rounded-full bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700"
            >
                {buttonText} <FiArrowUpRight className="inline ml-2" />
            </a>
        </div>
    </div>
);
