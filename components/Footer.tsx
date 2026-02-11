import React, { useState, useRef, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented or failed:", error);
      });
    }
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <footer id="contact" className="relative bg-[#020202] border-t border-white/5 pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden">
      
      {/* Video Background Layer - Optimized with new source */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 grayscale opacity-[0.25]"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1280&auto=format&fit=crop')",
            display: isVideoLoaded ? 'none' : 'block'
          }}
        />

        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          disablePictureInPicture
          disableRemotePlayback
          className={`w-full h-full object-cover grayscale transition-opacity duration-1000 contrast-125 ${isVideoLoaded ? 'opacity-[0.25]' : 'opacity-0'}`}
        >
          <source src="https://s8.uupload.ir/filelink/78ZwI15LSMp6_8e4d636e74/gitar-video_mbom.mp4" type="video/mp4" />
        </video>

        {/* Ambient Overlays */}
        <div className="absolute inset-0 bg-[#020202]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center text-center">
        
        <div className="mb-10 md:mb-12 opacity-90 hover:opacity-100 transition-opacity">
           <Logo className="h-12 md:h-14 w-auto" />
        </div>
        
        <div className="max-w-xl mx-auto mb-12 md:mb-16">
          <p className="text-sm md:text-lg text-white/80 font-light leading-relaxed tracking-wide">
            A centralized platform designed to connect event professionals, venues, and communities through content, communication, and promotion.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12">
            <a href="#" className="text-gray-400 hover:text-koloni-gold text-[10px] uppercase tracking-[0.2em] transition-all font-bold">Home</a>
            <a href="#about" className="text-gray-400 hover:text-koloni-gold text-[10px] uppercase tracking-[0.2em] transition-all font-bold">About Us</a>
            <a href="#contact" className="text-gray-400 hover:text-koloni-gold text-[10px] uppercase tracking-[0.2em] transition-all font-bold">Contact Us</a>
            <a href="#blog" className="text-gray-400 hover:text-koloni-gold text-[10px] uppercase tracking-[0.2em] transition-all font-bold">Blog</a>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-10 md:mb-12"></div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-8">
          <div className="text-gray-600 text-[10px] uppercase tracking-[0.1em] text-center md:text-left font-mono">
            &copy; 2025 Koloni Ecosystem. Crafted for the 1%.
          </div>
          <div className="flex gap-6">
             <a href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-gray-400 hover:text-koloni-gold hover:border-koloni-gold/50 hover:bg-white/5 transition-all backdrop-blur-sm">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
             </a>
             <a href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-gray-400 hover:text-koloni-gold hover:border-koloni-gold/50 hover:bg-white/5 transition-all backdrop-blur-sm">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
             </a>
             <a href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-gray-400 hover:text-koloni-gold hover:border-koloni-gold/50 hover:bg-white/5 transition-all backdrop-blur-sm">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;