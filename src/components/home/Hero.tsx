import { heroData } from "@/data/heroData";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container flex flex-col md:flex-row items-center justify-center gap-10 mx-auto px-6 lg:py-10 md:py-26 py-32 z-10">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="animate-fade-in">
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Hello, I&apos;m
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-cyan-400">
              {heroData.name}
            </h1>
            <h3 className="text-2xl md:text-3xl text-slate-300 font-semibold">
              {heroData.title}
            </h3>
            <p className="text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {heroData.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/Mahedi-432A"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-mahedi-hasan-806608372/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mdmahedih038@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Mail size={20} />
            </a>
            <a
              href="/resume.pdf"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Download size={20} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-linear-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-slate-800 text-white rounded-lg font-semibold border-2 border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Image / Visual Content */}
        <div className="flex-1 flex justify-center">
          {/* আপাতত আমরা একটা স্টাইলিশ ডিভ ব্যবহার করছি ছবির বদলে */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-linear-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-blob">
            <span className="text-white text-9xl font-bold opacity-20">
              Dev
            </span>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:block bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
