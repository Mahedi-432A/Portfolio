import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// আমরা যে কম্পোনেন্ট বানালাম সেটা ইম্পোর্ট করছি
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD Mahedi Hasan | MERN Stack Developer", // তোমার নাম দাও
  description: "Portfolio of MD Mahedi Hasan - A passionate MERN Stack Developer & Competitive Programmer solving real-world problems.",
  keywords: ["MERN Stack", "React", "Next.js", "Portfolio", "Web Developer", "Bangladesh"],
  authors: [{ name: "MD Mahedi Hasan" }],

  // সোশ্যাল মিডিয়াতে শেয়ার করলে যা দেখাবে
  openGraph: {
    title: "MD Mahedi Hasan | MERN Stack Developer",
    description: "Check out my portfolio to see my projects and skills.",
    url: "https://your-domain.com", // পরে লাইভ লিংক বসাবে
    siteName: "MD Mahedi Hasan Portfolio",
    images: [
      {
        url: "/og-image.png", // আমরা একটা প্রিভিউ ইমেজ সেট করবো
        width: 1200,
        height: 630,
        alt: "MD Mahedi Hasan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar সবার উপরে থাকবে */}
        <Navbar /> 
        
        {/* এই children মানে হলো আমাদের অন্যান্য পেজগুলো (যেমন হোমপেজ) */}
        {/* Navbar এর হাইট যেহেতু h-16 (4rem), তাই আমরা pt-16 প্যাডিং দিচ্ছি যাতে কন্টেন্ট ন্যাপবারের নিচে ঢাকা না পড়ে */}
        <main className="min-h-screen flex flex-col">
           {children}
        </main>
        
        {/* Footer সবার নিচে থাকবে */}
        <Footer />
      </body>
    </html>
  );
}