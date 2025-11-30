import React from "react";
import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-display bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                            BEASTDRIVE
                        </h3>
                        <p className="text-gray-400 text-sm">
                            India's ultimate survival run and adventure-drive event company.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/accounts/login/?next=%2Fbeastdrive.in%2Ffollowers%2F&source=omni_redirect" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <FiInstagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/people/BeastDrive/61576613708172/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <FiFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <FiTwitter size={20} />
                            </a>
                            <a href="https://www.youtube.com/@officialbeastdrive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                <FiYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors text-sm">Events</Link></li>
                            <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link></li>
                            <li><Link href="/sponsors" className="text-gray-400 hover:text-white transition-colors text-sm">Sponsors</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2 text-gray-400 text-sm">
                                <FiMail size={16} />
                                <div className="flex flex-col">
                                    <a href="mailto:support@beastdrive.in" className="hover:text-white transition-colors">support@beastdrive.in</a>
                                    <a href="mailto:sponsor@beastdrive.in" className="hover:text-white transition-colors">sponsor@beastdrive.in</a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-400 text-sm">
                                <FiPhone size={16} />
                                <a href="tel:+917996664656" className="hover:text-white transition-colors">+91-7996664656</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} BeastDrive. All rights reserved.</p>
                    <p className="mt-2">Made By Anil</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
