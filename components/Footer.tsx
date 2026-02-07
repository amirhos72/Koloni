import React from 'react';
import { Logo } from './ui/Logo';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#020202] border-t border-white/5 pt-16 pb-8 md:pt-20 md:pb-10 overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-[0.35] grayscale"
        >
          <source src="https://s8.uupload.ir/filelink/WKc2N82nGVxe_35d5d9e893/gitar-video_mbom.mp4" />
        </video>
        <div className="absolute inset-0 bg-[#020202]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="mb-8 md:mb-10 opacity-80 hover:opacity-100 transition-opacity">
           <Logo className="h-10 md:h-12 w-auto" />
        </div>
        
        <div className="max-w-md mx-auto mb-10 md:mb-12">
          <p className="text-sm md:text-lg text-white font-medium mb-2 leading-relaxed opacity-90">
            A centralized platform designed to connect event professionals, venues, and communities through content, communication, and promotion.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">About Us</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">Contact Us</a>
            <a href="#blog" className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">Blog</a>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-8 md:mb-10"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-6">
          <div className="text-gray-600 text-[10px] uppercase tracking-wider text-center md:text-left">
            &copy; 2025 Koloni Inc. All rights reserved.
          </div>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-koloni-gold hover:bg-white/5 transition-all">
                <Instagram size={16} />
                <span className="sr-only">Instagram</span>
             </a>
             <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-koloni-gold hover:bg-white/5 transition-all">
                <Twitter size={16} />
                <span className="sr-only">Twitter</span>
             </a>
             <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-koloni-gold hover:bg-white/5 transition-all">
                <Linkedin size={16} />
                <span className="sr-only">LinkedIn</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
