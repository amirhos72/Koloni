// Fix: Corrected React import statement.
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import HeaderLogo from './ui/HeaderLogo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'MEMBERSHIP', href: '#membership' },
    { label: 'BLOG', href: '#blog' },
    { label: 'ORGANIZER PANEL', href: '#organizers' },
    { label: 'PR PANEL', href: '#' },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed top-2 md:top-6 left-0 right-0 z-[60] flex justify-center px-2 md:px-4 pointer-events-none">
        <nav 
          className={`
            pointer-events-auto w-full max-w-[1440px]
            transition-all duration-500 ease-out
            ${isScrolled || isMobileMenuOpen 
              ? 'bg-black/80 md:bg-black/60 border-white/10 shadow-lg backdrop-blur-xl' 
              : 'bg-transparent border-transparent'
            }
            border rounded-full flex items-center
            ${isScrolled || isMobileMenuOpen ? 'py-2 px-4 md:py-3 md:px-6' : 'py-3 px-4 md:py-4 md:px-6'}
          `}
        >
          {/* Left Side: Logo */}
          <div className="flex-1 flex justify-start">
            <a href="#" className={`flex items-center transition-all duration-500 ease-out origin-left z-[70] ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <HeaderLogo className="h-8 md:h-8 w-auto" />
            </a>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="px-4 py-2 rounded-full text-[10px] lg:text-[11px] font-medium uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side: Action */}
          <div className="flex-1 flex justify-end">
            <div className={`flex items-center gap-2 z-[70] transition-all duration-500 ease-out origin-right ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <Button variant="primary" size="sm" className="hidden md:flex rounded-full !py-2 !px-6 text-xs whitespace-nowrap">
                Book Now
              </Button>
              
              {/* Mobile Toggle */}
              <button 
                className={`
                  md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors
                  ${isMobileMenuOpen ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}
                `}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-6 
          transition-all duration-500 md:hidden
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
          {/* Background Elements for Mobile Menu */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-koloni-gold/10 rounded-full blur-[80px] pointer-events-none"></div>

         <div className="flex flex-col gap-4 text-center relative z-10 w-full px-8">
           {navLinks.map((link, idx) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`font-display text-3xl font-bold text-white hover:text-koloni-gold transition-all uppercase tracking-tight transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
         </div>
         
         <div className={`mt-6 relative z-10 transition-all duration-700 w-full px-8 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <Button variant="primary" size="lg" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Book Now
            </Button>
         </div>
      </div>
    </>
  );
};

export default Navbar;