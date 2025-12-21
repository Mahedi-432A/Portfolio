'use client';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent inline-block">
              John Doe
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Building scalable and performant web applications with modern technologies. 
              Let&rsquo;s build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-teal-400 transition-colors block w-fit"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:example@mail.com" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-slate-500 pt-2">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart size={16} className="text-red-500 fill-red-500" /> by John Doe
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;