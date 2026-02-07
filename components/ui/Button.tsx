import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'store';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-bold uppercase transition-all duration-300 focus:outline-none tracking-wider backdrop-blur-sm cursor-pointer touch-manipulation active:scale-95";
  
  const variants = {
    primary: "bg-koloni-gold text-black hover:bg-white border border-koloni-gold hover:border-white rounded-full shadow-[0_0_20px_rgba(191,166,104,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
    outline: "bg-white/5 text-koloni-gold border border-koloni-gold/50 hover:bg-koloni-gold hover:text-black hover:border-koloni-gold rounded-full hover:-translate-y-0.5 active:translate-y-0",
    ghost: "bg-transparent text-white hover:text-koloni-gold hover:bg-white/5 rounded-full active:bg-white/10",
    store: "bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 hover:border-white/30 normal-case tracking-normal font-sans rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
  };

  const sizes = {
    sm: "text-xs px-5 py-2",
    md: "text-sm px-8 py-3",
    lg: "text-sm px-10 py-4",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${size === 'md' && variant === 'store' ? 'px-6 py-3' : sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;