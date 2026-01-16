import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD Mahedi Hasan | MERN Stack Developer",
  description: "Portfolio of MD Mahedi Hasan - A passionate MERN Stack Developer & Competitive Programmer solving real-world problems.",
  keywords: ["MERN Stack", "React", "Next.js", "Portfolio", "Web Developer", "Bangladesh"],
  authors: [{ name: "MD Mahedi Hasan" }],

  // সোশ্যাল মিডিয়াতে শেয়ার করলে যা দেখাবে
  openGraph: {
    title: "MD Mahedi Hasan | MERN Stack Developer",
    description: "Check out my portfolio to see my projects and skills.",
    url: "https://md-mahedi-hasan.vercel.app/",
    siteName: "MD Mahedi Hasan Portfolio",
    images: [
      {
        url: "/og-image.png",
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
        
        <Navbar /> 
        
        <main className="min-h-screen flex flex-col">
           {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}