import React from 'react';
import { ArrowRight, Apple, Smartphone } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent overflow-hidden px-6 pt-24">
      
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-koloni-gold opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left">
           <div className="mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
             <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-koloni-gold/80 border-l-2 border-koloni-gold pl-3">
               The Social Ecosystem
             </span>
           </div>

           <h1 className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9] mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             WE ARE <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-koloni-gold to-white">ONE.</span>
           </h1>

           <p className="font-sans text-gray-400 text-lg font-light max-w-lg mb-10 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
             A centralized platform designed to connect event professionals, venues, and communities through content, communication, and promotion.
           </p>

           {/* App Download Buttons */}
           <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
             <Button variant="store" className="group min-w-[180px]">
               <div className="flex items-center gap-3 text-left">
                 <Apple size={24} className="text-white group-hover:text-koloni-gold transition-colors" />
                 <div className="flex flex-col leading-none">
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Download on</span>
                    <span className="font-bold text-sm text-white">iOS App Store</span>
                 </div>
               </div>
             </Button>
             
             <Button variant="store" className="group min-w-[180px]">
               <div className="flex items-center gap-3 text-left">
                 <Smartphone size={24} className="text-white group-hover:text-koloni-gold transition-colors" />
                 <div className="flex flex-col leading-none">
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Get it on</span>
                    <span className="font-bold text-sm text-white">Android</span>
                 </div>
               </div>
             </Button>
           </div>
        </div>

        {/* Right: Abstract UI Visualization */}
        <div className="relative hidden lg:block h-[600px] w-full opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {/* The "Card" - Glassmorphism Update */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[500px] bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out z-10 group ring-1 ring-white/10">
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               {/* Card Header */}
               <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
                  <div className="w-8 h-8 rounded-full bg-koloni-gold/20 flex items-center justify-center backdrop-blur-md">
                    <div className="w-2 h-2 bg-koloni-gold rounded-full shadow-[0_0_10px_#bfa668]"></div>
                  </div>
                  <span className="font-mono text-[10px] text-gray-400">ID: 994-A2</span>
               </div>
               
               {/* Card Body */}
               <div className="p-8 flex flex-col items-center justify-center h-[300px] relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,166,104,0.15),transparent_70%)]"></div>
                  <h3 className="font-display font-bold text-4xl text-white mb-2 z-10 drop-shadow-md">VIP</h3>
                  <p className="text-koloni-gold text-xs tracking-widest uppercase z-10 font-bold">Access Granted</p>
                  
                  {/* Scanner Line */}
                  <div className="absolute w-full h-[2px] bg-koloni-gold/50 top-0 animate-scanner shadow-[0_0_20px_rgba(191,166,104,0.5)]"></div>
               </div>

               {/* Card Footer */}
               <div className="absolute bottom-0 w-full p-6 bg-black/20 border-t border-white/10 backdrop-blur-lg">
                 <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Balance</div>
                      <div className="text-xl font-mono text-white text-shadow-sm">2,450 PTS</div>
                    </div>
                    <div className="h-8 w-8 border border-white/20 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm">
                       <ArrowRight size={12} className="text-white -rotate-45" />
                    </div>
                 </div>
               </div>
            </div>

            {/* Background Decor Elements - Glassy Echoes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[480px] bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl rotate-[6deg] -z-10"></div>
        </div>

      </div>

      {/* Ticker / Marquee at Bottom */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 py-4 bg-black/30 backdrop-blur-md overflow-hidden flex h-[50px]">
      </div>
      
    </section>
  );
};

export default Hero;