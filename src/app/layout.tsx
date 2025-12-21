import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// আমরা যে কম্পোনেন্ট বানালাম সেটা ইম্পোর্ট করছি
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js and Tailwind CSS",
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