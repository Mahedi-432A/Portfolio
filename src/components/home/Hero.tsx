import { heroData } from "@/data/heroData";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 container mx-auto px-6 py-10">
      
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-medium text-blue-400">Hello, I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          {heroData.name}
        </h1>
        <h3 className="text-2xl md:text-3xl text-gray-700 font-semibold">
          {heroData.title}
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
          {heroData.description}
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start text-2xl text-gray-700">
          <a href={heroData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><FaGithub /></a>
          <a href={heroData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><FaLinkedin /></a>
          <a href={heroData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><FaFacebook /></a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
            <Link href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Contact Me
            </Link>
            <a href={heroData.resumeLink} download className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition">
                Download CV
            </a>
        </div>
      </div>

      {/* Image / Visual Content */}
      <div className="flex-1 flex justify-center">
        {/* আপাতত আমরা একটা স্টাইলিশ ডিভ ব্যবহার করছি ছবির বদলে */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-blob">
            <span className="text-white text-9xl font-bold opacity-20">Dev</span>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;