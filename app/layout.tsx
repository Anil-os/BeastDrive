import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
    weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
    title: "BeastDrive - India's Ultimate Survival Run",
    description: "Join India's most thrilling adventure-drive and survival-run events. Drive 3500 KM across challenging terrains with 25 cars. Make history with BeastDrive.",
    authors: [{ name: "BeastDrive" }],
    openGraph: {
        title: "BeastDrive - India's Ultimate Survival Run",
        description: "Drive 3500 KM — 25 Cars — Make History",
        type: "website",
        images: ["/og-image.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
            <body className={inter.className}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
