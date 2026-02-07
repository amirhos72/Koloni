import React from 'react';
import Button from './ui/Button';
import PixelBackground from './ui/CodeBackground'; // Renamed import to match new component

const HERO_IMAGE_URL = "https://image2url.com/r2/default/images/1770360064808-0541c833-97f0-4bd0-8ff9-3ec768d2bffc.png";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-visible pt-24 pb-12 md:pt-32 md:pb-20">
      
      {/* Pixel Network Animation - Abstract, Mainstream, Digital */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <PixelBackground />
      </div>

      {/* Background Aura - Scaled for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[800px] h-[280px] md:h-[800px] bg-koloni-gold/10 rounded-full blur-[50px] md:blur-[100px] animate-pulse-slow z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-gradient-radial from-koloni-gold/20 to-transparent rounded-full blur-[30px] md:blur-[60px] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center px-4 md:px-6">
        
        {/* Top Tag */}
        <div className="mb-4 md:mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
             <span className="glass-panel px-3 py-1.5 md:px-4 rounded-full font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-koloni-gold backdrop-blur-md bg-black/30 border border-koloni-gold/20">
               The Social Ecosystem
             </span>
        </div>

        {/* Headline - Responsive Typography */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 opacity-0 animate-slide-up relative" style={{ animationDelay: '0.2s' }}>
          WE ARE <br/>
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-koloni-gold via-[#e2d9c1] to-koloni-accent1 animate-gradient-pan"
            style={{ backgroundSize: '200% auto' }}
          >
            ONE.
          </span>
        </h1>

        <p className="font-sans text-gray-400 text-sm md:text-lg font-light max-w-xs md:max-w-lg mb-8 md:mb-12 opacity-0 animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
           Connect with the elite. Access premium venues. <br className="hidden md:block"/> Monetize your social circle with Koloni.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-12 md:mb-16 opacity-0 animate-slide-up z-20 w-full sm:w-auto px-6 sm:px-0" style={{ animationDelay: '0.4s' }}>
             <Button variant="store" className="w-full sm:w-auto min-w-[160px] hover:-translate-y-0.5 gap-2">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.3123 17.6063C21.7498 18.8531 21.4779 19.4156 20.756 20.5125C19.7529 22.05 18.3185 23.9719 16.5467 23.9906C14.9717 24 14.5779 22.9594 12.4404 22.9875C10.3029 22.9969 9.85291 24.0187 8.28729 24C6.51541 23.9813 5.16541 22.2469 4.16229 20.7094C1.32166 16.4062 1.03104 11.3344 2.76541 8.65313C4.00291 6.74063 5.97166 5.625 7.80916 5.625C9.64666 5.625 10.856 6.65625 12.4123 6.65625C13.9685 6.65625 14.831 5.625 16.9967 5.625C19.1623 5.625 20.3717 6.51562 21.5998 8.05313C17.5498 10.2656 18.2154 16.0594 22.3029 17.6063H22.3123ZM15.356 3.89062C16.1529 2.8875 16.7435 1.45312 16.5279 0C15.2435 0.09375 13.7342 0.909375 12.8529 1.96875C12.0467 2.93438 11.3998 4.36875 11.6529 5.775C13.0592 5.8125 14.5123 4.97813 15.356 3.89062Z" fill="white"/>
               </svg>
               <span className="font-bold">App Store</span>
             </Button>
             <Button variant="store" className="w-full sm:w-auto min-w-[160px] bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:-translate-y-0.5 gap-2">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.283 11.4639L1.21484 22.0122C1.33043 22.4111 1.53503 22.7787 1.81323 23.0871C2.09143 23.3956 2.43598 23.6369 2.82094 23.7929C3.2059 23.9489 3.62124 24.0155 4.03568 23.9878C4.45012 23.96 4.85287 23.8386 5.21359 23.6327L16.5421 17.1807L11.283 11.4639Z" fill="#EA4335"/>
                 <path d="M21.464 9.67014L16.565 6.86426L11.0508 11.7033L16.5875 17.165L21.449 14.3891C21.7595 14.2277 22.0351 14.0066 22.2598 13.7384C22.4846 13.4702 22.6541 13.1602 22.7587 12.8262C22.8633 12.4923 22.9008 12.141 22.8692 11.7925C22.8376 11.444 22.7374 11.1051 22.5744 10.7955C22.3201 10.3164 21.9281 9.92446 21.449 9.67014H21.464Z" fill="#FBBC04"/>
                 <path d="M1.21503 1.99609C1.15512 2.22127 1.12486 2.4533 1.125 2.68631V21.3221C1.12486 21.5551 1.15512 21.7872 1.21503 22.0123L11.6283 11.7341L1.21503 1.99609Z" fill="#4285F4"/>
                 <path d="M11.358 12.0038L16.5646 6.86465L5.2511 0.382625C4.82535 0.133684 4.34136 0.00168743 3.84817 5.36578e-06C3.25247 -0.00117513 2.67272 0.192461 2.1973 0.551398C1.72188 0.910334 1.37686 1.41488 1.21484 1.98813L11.358 12.0038Z" fill="#34A853"/>
               </svg>
               <span className="font-bold">Google Play</span>
             </Button>
        </div>

        {/* Floating Phone with Glow */}
        <div className="relative w-full max-w-[240px] md:max-w-[320px] lg:max-w-[400px] opacity-0 animate-fade-in mx-auto" style={{ animationDelay: '0.6s' }}>
             <div className="absolute inset-0 bg-koloni-gold/20 blur-[50px] md:blur-[80px] rounded-full"></div>
             <div className="relative z-10 animate-float">
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="Koloni App Interface" 
                  className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] md:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
             </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;