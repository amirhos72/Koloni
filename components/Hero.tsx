import React from 'react';
import Button from './ui/Button';
import PixelBackground from './ui/CodeBackground';

const HERO_IMAGE_URL = "https://iili.io/q9HM3I1.png";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-24 pb-12 md:pt-24 md:pb-20">
      
      {/* Layer 0: Deep Background & Lights */}
      <div className="absolute inset-0 z-0">
        <PixelBackground />
        {/* God Ray / Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[conic-gradient(from_180deg_at_50%_0%,transparent_150deg,rgba(191,166,104,0.05)_180deg,transparent_210deg)] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-koloni-gold/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-koloni-accent1/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            <div className="relative mb-6 md:mb-8">
              <h1 className="font-display font-bold text-white leading-[0.85] tracking-tighter">
                <span className="block text-5xl sm:text-7xl md:text-8xl xl:text-[7.5rem] opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  WE ARE
                </span>
                
                <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span 
                    className="block text-7xl sm:text-9xl md:text-[9rem] xl:text-[11.5rem] text-transparent bg-clip-text bg-gradient-to-r from-koloni-gold via-white via-koloni-accent1 via-white to-koloni-gold animate-gradient-pan mt-[-0.05em]"
                    style={{ backgroundSize: '200% auto' }}
                  >
                    ONE.
                  </span>
                </div>
              </h1>
            </div>

            <div className="flex flex-col gap-4 mb-10 max-w-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <p className="font-sans text-gray-400 text-lg md:text-xl font-light tracking-wide leading-relaxed">
                 The definitive social engine for the modern elite. Connect, access, and monetize your circle.
              </p>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-px w-8 bg-koloni-gold"></div>
                <p className="font-display text-white text-base md:text-lg font-medium tracking-tight uppercase">
                   Your network is your currency.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto opacity-0 animate-slide-up z-20" style={{ animationDelay: '0.4s' }}>
              <Button variant="store" className="w-full sm:w-auto min-w-[190px] border-white/5 hover:border-koloni-gold/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3">
                  <path d="M22.3123 17.6063C21.7498 18.8531 21.4779 19.4156 20.756 20.5125C19.7529 22.05 18.3185 23.9719 16.5467 23.9906C14.9717 24 14.5779 22.9594 12.4404 22.9875C10.3029 22.9969 9.85291 24.0187 8.28729 24C6.51541 23.9813 5.16541 22.2469 4.16229 20.7094C1.32166 16.4062 1.03104 11.3344 2.76541 8.65313C4.00291 6.74063 5.97166 5.625 7.80916 5.625C9.64666 5.625 10.856 6.65625 12.4123 6.65625C13.9685 6.65625 14.831 5.625 16.9967 5.625C19.1623 5.625 20.3717 6.51562 21.5998 8.05313C17.5498 10.2656 18.2154 16.0594 22.3029 17.6063H22.3123ZM15.356 3.89062C16.1529 2.8875 16.7435 1.45312 16.5279 0C15.2435 0.09375 13.7342 0.909375 12.8529 1.96875C12.0467 2.93438 11.3998 4.36875 11.6529 5.775C13.0592 5.8125 14.5123 4.97813 15.356 3.89062Z" fill="white"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60">App Store</div>
                  <div className="text-sm font-bold leading-none">Download Now</div>
                </div>
              </Button>
              <Button variant="store" className="w-full sm:w-auto min-w-[190px] border-white/5 hover:border-koloni-gold/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3">
                  <path d="M11.283 11.4639L1.21484 22.0122C1.33043 22.4111 1.53503 22.7787 1.81323 23.0871C2.09143 23.3956 2.43598 23.6369 2.82094 23.7929C3.2059 23.9489 3.62124 24.0155 4.03568 23.9878C4.45012 23.96 4.85287 23.8386 5.21359 23.6327L16.5421 17.1807L11.283 11.4639Z" fill="white" fillOpacity="0.67"/>
                  <path d="M21.464 9.67014L16.565 6.86426L11.0508 11.7033L16.5875 17.165L21.449 14.3891C21.7595 14.2277 22.0351 14.0066 22.2598 13.7384C22.4846 13.4702 22.6541 13.1602 22.7587 12.8262C22.8633 12.4923 22.9008 12.141 22.8692 11.7925C22.8376 11.444 22.7374 11.1051 22.5744 10.7955C22.3201 10.3164 21.9281 9.92446 21.449 9.67014H21.464Z" fill="white" fillOpacity="0.8"/>
                  <path d="M1.21503 1.99609C1.15512 2.22127 1.12486 2.4533 1.125 2.68631V21.3221C1.12486 21.5551 1.15512 21.7872 1.21503 22.0123L11.6283 11.7341L1.21503 1.99609Z" fill="white" fillOpacity="0.45"/>
                  <path d="M11.358 12.0038L16.5646 6.86465L5.2511 0.382625C4.82535 0.133684 4.34136 0.00168743 3.84817 5.36578e-06C3.25247 -0.00117513 2.67272 0.192461 2.1973 0.551398C1.72188 0.910334 1.37686 1.41488 1.21484 1.98813L11.358 12.0038Z" fill="white"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase opacity-60">Google Play</div>
                  <div className="text-sm font-bold leading-none">Get the App</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Column: Dynamic Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative order-1 lg:order-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            
            {/* Phone Container */}
            <div className="relative z-10 w-full max-w-[320px] md:max-w-[380px] perspective-1000">
              
              {/* Main Glowing Orbit */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-koloni-gold/10 blur-[100px] rounded-full animate-pulse-slow"></div>
              
              {/* The Phone Itself */}
              <div className="relative z-10 animate-float transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="Koloni Mobile Ecosystem" 
                  className="w-full h-auto drop-shadow-[0_45px_100px_rgba(0,0,0,0.8)] filter brightness-110"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Floor Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Hero;