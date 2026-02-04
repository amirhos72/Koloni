import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const HeaderLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1570 2000" 
    className={className}
    aria-label="Koloni Logo"
  >
    <rect fill="#2e2d2c" x="-0.8" y="1571.41" width="429.4" height="428.81"/>
    <rect fill="#bfa668" x="-0.8" width="429.4" height="428.81"/>
    <rect fill="#bfb49b" x="1140.73" y="1571.41" width="429.4" height="428.81"/>
    <rect fill="#bfa668" x="1140.73" width="429.4" height="428.81"/>
    <rect fill="#bfa668" x="-0.8" y="523.8" width="429.4" height="428.81"/>
    <rect fill="#5c5b58" x="-0.8" y="1047.61" width="429.4" height="428.81"/>
    <rect fill="#bfa668" x="569.97" y="523.8" width="429.4" height="428.81"/>
    <rect fill="#afa595" x="569.97" y="1047.61" width="429.4" height="428.81"/>
  </svg>
);

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
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Blog', href: '#blog' },
    { label: 'Organizer Panel', href: '#' },
    { label: 'PR Panel', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-black/30 backdrop-blur-xl py-4 border-white/10 shadow-lg' : 'bg-transparent py-6 border-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group w-40 relative z-50">
          <HeaderLogo className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-koloni-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Action - Desktop */}
        <div className="hidden lg:flex items-center justify-end w-40">
          <Button variant="primary" size="sm">
            BOOK NOW
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white hover:text-koloni-gold transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="font-display text-3xl font-bold text-white hover:text-koloni-gold transition-colors uppercase tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="md" className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            BOOK NOW
          </Button>
      </div>
    </nav>
  );
};

export default Navbar;