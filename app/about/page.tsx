import React from "react";
import { FiTarget, FiHeart, FiAward } from "react-icons/fi";

export default function About() {
    return (
        <main className="min-h-screen pt-16">
            {/* Hero Section with Background Image */}
            <section className="relative py-24 min-h-[60vh] flex items-center"
                style={{
                    backgroundImage: "url('/images/hero-offroad.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        <span className="bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                            About BeastDrive
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        We organize pan-India adventure drives and survival-runs that blend endurance,
                        thrill, and community into unforgettable experiences.
                    </p>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Mission */}
                        <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent-orange rounded-full flex items-center justify-center">
                                <FiTarget className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To create India's most challenging and rewarding adventure-drive experiences
                                that push participants beyond their limits while fostering a strong community
                                of passionate adventurers.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-orange to-accent-yellow rounded-full flex items-center justify-center">
                                <FiHeart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To become India's premier adventure-drive company, inspiring thousands to
                                explore the unexplored, challenge themselves, and create lifelong memories
                                on the road less traveled.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-yellow to-primary rounded-full flex items-center justify-center">
                                <FiAward className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Safety first, adventure always. We believe in responsible exploration,
                                environmental consciousness, and building a supportive community where
                                every participant feels valued and empowered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-display">
                        Our Story
                    </h2>
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            BeastDrive was born from a simple idea: to create adventure experiences that
                            truly test the human spirit. What started as a small group of friends driving
                            across challenging terrains has evolved into India's most sought-after
                            adventure-drive event company.
                        </p>
                        <p>
                            We've covered over 3,500 kilometers across some of India's most breathtaking
                            and challenging landscapes. From the snow-capped peaks of the Himalayas to the
                            scorching deserts of Rajasthan, from dense forests to coastal highways, every
                            BeastDrive event is meticulously planned to deliver maximum thrill while
                            ensuring participant safety.
                        </p>
                        <p>
                            Our events aren't just about driving—they're about endurance, camaraderie, and
                            self-discovery. Participants face physical and mental challenges, navigate
                            through unpredictable conditions, and emerge stronger, more confident, and
                            connected to a community of fellow adventurers.
                        </p>
                        <p>
                            Today, BeastDrive is proud to have hosted over 500 participants across 15+
                            successful events. But we're just getting started. Join us on this incredible
                            journey and become part of the BeastDrive legacy.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary via-accent-orange to-accent-yellow">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                        Join the Adventure
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Be part of India's most thrilling survival-run community.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        Register Now
                    </a>
                </div>
            </section>
        </main>
    );
}
