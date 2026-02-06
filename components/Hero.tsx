import React from 'react';
import Button from './ui/Button';

// ----------------------------------------------------------------------
// PASTE YOUR PNG LINK INSIDE THE QUOTES BELOW
// ----------------------------------------------------------------------
const HERO_IMAGE_URL = "https://image2url.com/r2/default/images/1770360064808-0541c833-97f0-4bd0-8ff9-3ec768d2bffc.png";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent overflow-hidden px-6 pt-32 pb-12 lg:pt-24 lg:pb-0">
      
      {/* Dynamic Background elements removed for cleaner look */}

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content - Centered on Mobile, Left on Desktop */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
           <div className="mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
             <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-koloni-gold/80 border-b-2 lg:border-b-0 lg:border-l-2 border-koloni-gold pb-1 lg:pb-0 lg:pl-3">
               The Social Ecosystem
             </span>
           </div>

           <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] lg:leading-[0.9] mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
             WE ARE <br />
             <span className="text-koloni-gold">ONE.</span>
           </h1>

           <p className="font-sans text-gray-400 text-base md:text-lg font-light max-w-lg mb-10 leading-relaxed opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
             A centralized platform designed to connect event professionals, venues, and communities through content, communication, and promotion.
           </p>

           {/* App Download Buttons */}
           <div className="flex flex-col sm:flex-row flex-wrap gap-4 opacity-0 animate-slide-up w-full sm:w-auto justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
             <Button variant="store" className="group min-w-[180px]">
               <div className="flex items-center gap-3 text-left justify-center sm:justify-start">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 text-white group-hover:text-koloni-gold transition-colors fill-current">
                   <path d="M238,187.8c-6,13.3-8.9,19.3-16.6,31-10.7,16.4-26,36.9-44.9,37.1-16.8.1-21-11-43.8-10.7-22.8.1-27.6,11-44.3,10.8-18.9-.2-33.3-18.7-44-35.1C14.1,175,11,120.9,29.5,92.3c13.2-20.4,34.2-32.3,53.8-32.3s32.5,11,49.1,11,25.8-11,48.9-11,36,9.5,49.1,25.9c-43.2,23.6-36.1,85.4,7.5,101.9ZM163.8,41.5c8.5-10.7,14.8-26,12.5-41.5-13.7,1-29.8,9.7-39.2,21-8.6,10.3-15.5,25.6-12.8,40.6,15,.4,30.5-8.5,39.5-20.1Z"/>
                 </svg>
                 <div className="flex flex-col leading-none">
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Download on</span>
                    <span className="font-bold text-sm text-white">iOS App Store</span>
                 </div>
               </div>
             </Button>
             
             <Button variant="store" className="group min-w-[180px]">
               <div className="flex items-center gap-3 text-left justify-center sm:justify-start">
                 <svg viewBox="0 0 28.99 31.99" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <g data-name="Capa 2">
                        <g data-name="Capa 1">
                            <path d="M13.54 15.28.12 29.34a3.66 3.66 0 0 0 5.33 2.16l15.1-8.6Z" style={{fill:'#ea4335'}}/>
                            <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.54 3.54 0 0 0 1.5-4.79 3.62 3.62 0 0 0-1.5-1.5z" style={{fill:'#fbbc04'}}/>
                            <path d="M.12 2.66a3.57 3.57 0 0 0-.12.92v24.84a3.57 3.57 0 0 0 .12.92L14 15.64Z" style={{fill:'#4285f4'}}/>
                            <path d="m13.64 16 6.94-6.85L5.5.51A3.73 3.73 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" style={{fill:'#34a853'}}/>
                        </g>
                    </g>
                 </svg>
                 <div className="flex flex-col leading-none">
                    <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1">Get it on</span>
                    <span className="font-bold text-sm text-white">Google Play</span>
                 </div>
               </div>
             </Button>
           </div>
        </div>

        {/* Right: App Mockup Image */}
        <div className="relative hidden lg:block w-full opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
             <div className="relative z-10 animate-float">
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="Koloni App Interface" 
                  className="w-full max-w-[600px] mx-auto object-contain drop-shadow-2xl"
                />
             </div>
        </div>

      </div>

      {/* Ticker / Marquee at Bottom */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 py-4 bg-black/30 backdrop-blur-md overflow-hidden flex h-[50px]">
      </div>
      
    </section>
  );
};

export default Hero;