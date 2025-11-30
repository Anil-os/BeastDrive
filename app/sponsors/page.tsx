import React from "react";

const sponsors = [
    { name: "AutoTech India", logo: "AT", tier: "Platinum" },
    { name: "Adventure Gear Co.", logo: "AG", tier: "Platinum" },
    { name: "FuelMax", logo: "FM", tier: "Gold" },
    { name: "TireKing", logo: "TK", tier: "Gold" },
    { name: "SafeDrive Insurance", logo: "SD", tier: "Gold" },
    { name: "MountainView Hotels", logo: "MV", tier: "Silver" },
    { name: "EnergyBoost", logo: "EB", tier: "Silver" },
    { name: "CampPro Equipment", logo: "CP", tier: "Silver" },
];

export default function Sponsors() {
    return (
        <main className="min-h-screen pt-16 bg-black">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        <span className="bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                            Our Sponsors & Partners
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        Powering India's most thrilling adventure experiences
                    </p>
                </div>
            </section>

            {/* Platinum Sponsors */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Platinum Partners
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sponsors.filter(s => s.tier === "Platinum").map((sponsor, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 hover:border-primary/50 transition-all duration-300 text-center"
                            >
                                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent-orange rounded-full flex items-center justify-center text-4xl font-bold text-white">
                                    {sponsor.logo}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{sponsor.name}</h3>
                                <p className="text-gray-400">
                                    Leading provider of premium automotive solutions and adventure equipment.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gold Sponsors */}
            <section className="py-16 bg-neutral-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Gold Partners
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {sponsors.filter(s => s.tier === "Gold").map((sponsor, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-accent-yellow/50 transition-all duration-300 text-center"
                            >
                                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent-yellow to-accent-orange rounded-full flex items-center justify-center text-3xl font-bold text-white">
                                    {sponsor.logo}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                                <p className="text-gray-400 text-sm">
                                    Supporting adventure and safety on every journey.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Silver Sponsors */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                            Silver Partners
                        </span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {sponsors.filter(s => s.tier === "Silver").map((sponsor, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gray-400/50 transition-all duration-300 text-center"
                            >
                                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                    {sponsor.logo}
                                </div>
                                <h3 className="text-lg font-bold text-white">{sponsor.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Sponsor CTA */}
            <section className="py-24 bg-gradient-to-r from-primary via-accent-orange to-accent-yellow">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                        Become a Sponsor
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Partner with BeastDrive and reach thousands of adventure enthusiasts across India.
                        Multiple sponsorship tiers available.
                    </p>
                    <div className="space-y-4">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 mr-4"
                        >
                            Get Sponsorship Details
                        </a>
                        <a
                            href="mailto:sponsors@beastdrive.in"
                            className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Email Us
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
