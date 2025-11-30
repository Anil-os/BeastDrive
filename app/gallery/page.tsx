"use client";

import React, { useState } from "react";

const galleryItems = [
    {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2670&auto=format&fit=crop",
        title: "Mountain Pass Adventure",
        event: "Himalayan Thunder Run 2025",
    },
    {
        id: 2,
        type: "image",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
        title: "Desert Sunset Drive",
        event: "Desert Storm Challenge 2025",
    },
    {
        id: 3,
        type: "image",
        url: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2670&auto=format&fit=crop",
        title: "Forest Trail Expedition",
        event: "Northeast Explorer 2024",
    },
    {
        id: 4,
        type: "image",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop",
        title: "Snowy Mountain Peaks",
        event: "Himalayan Thunder Run 2025",
    },
    {
        id: 5,
        type: "image",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670&auto=format&fit=crop",
        title: "Coastal Highway",
        event: "Coastal Fury Drive 2024",
    },
    {
        id: 6,
        type: "image",
        url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2676&auto=format&fit=crop",
        title: "Desert Dunes Challenge",
        event: "Desert Storm Challenge 2025",
    },
    {
        id: 7,
        type: "image",
        url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2670&auto=format&fit=crop",
        title: "River Crossing",
        event: "Northeast Explorer 2024",
    },
    {
        id: 8,
        type: "image",
        url: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=2670&auto=format&fit=crop",
        title: "Night Camp Under Stars",
        event: "Himalayan Thunder Run 2025",
    },
];

export default function Gallery() {
    const [filter, setFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const events = ["All", ...Array.from(new Set(galleryItems.map(item => item.event)))];

    const filteredItems = filter === "All"
        ? galleryItems
        : galleryItems.filter(item => item.event === filter);

    return (
        <main className="min-h-screen pt-16 bg-black">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        <span className="bg-gradient-to-r from-primary via-accent-orange to-accent-yellow bg-clip-text text-transparent">
                            Gallery
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        Relive the adventures. Witness the thrill.
                    </p>
                </div>
            </section>

            {/* Filter */}
            <section className="py-8 bg-black border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {events.map((event) => (
                            <button
                                key={event}
                                onClick={() => setFilter(event)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === event
                                        ? "bg-gradient-to-r from-primary to-accent-orange text-white"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {event}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedImage(item.id)}
                                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.url})` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-300 text-sm">{item.event}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <div className="max-w-6xl max-h-full">
                        <img
                            src={galleryItems.find(item => item.id === selectedImage)?.url}
                            alt={galleryItems.find(item => item.id === selectedImage)?.title}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                        <div className="text-center mt-4">
                            <h3 className="text-white text-2xl font-bold mb-2">
                                {galleryItems.find(item => item.id === selectedImage)?.title}
                            </h3>
                            <p className="text-gray-400">
                                {galleryItems.find(item => item.id === selectedImage)?.event}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
