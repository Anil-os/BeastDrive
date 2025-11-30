"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/events", label: "Events" },
        { href: "/faq", label: "FAQ" },
        { href: "/sponsors", label: "Sponsors" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-accent-orange to-accent-yellow flex items-center justify-center shadow-lg shadow-primary/50">
                            <span className="text-2xl font-bold text-white">B</span>
                        </div>
                        <div className="text-2xl font-bold font-display bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                            BEASTDRIVE
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-primary to-accent-orange px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                        >
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block bg-gradient-to-r from-primary to-accent-orange px-6 py-3 rounded-full text-white font-semibold text-center hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
