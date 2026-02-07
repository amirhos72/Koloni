import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Membership from './components/Membership';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [opacity, setOpacity] = useState(1);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerTop = footerRef.current.offsetTop;
      
      // Calculate the point where the footer starts entering the viewport
      // We want opacity to be 0 when the bottom of the viewport touches the top of the footer
      const fadeEnd = footerTop - windowHeight;
      
      // Safety check for short content
      if (fadeEnd <= 0) {
        setOpacity(0);
        return;
      }

      // Calculate opacity: 1 at top (scrollY=0), 0 at fadeEnd
      let newOpacity = 1 - (scrollY / fadeEnd);
      
      // Clamp values between 0 and 1
      newOpacity = Math.max(0, Math.min(1, newOpacity));
      
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-koloni-gold selection:text-black relative overflow-hidden">
      {/* Global Ambient Background for Glassmorphism Context */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity, willChange: 'opacity' }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-koloni-accent1/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[60vw] bg-koloni-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-koloni-accent2/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Membership />
          <Blog />
          <FAQ />
        </main>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
      
      <ScrollToTop />
    </div>
  );
}

export default App;
