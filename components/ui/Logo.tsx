import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 711 200" 
      className={className}
      aria-label="Koloni Logo"
    >
      <rect fill="#2e2d2c" y="157.12" width="42.94" height="42.88"/>
      <rect fill="#bfa668" width="42.94" height="42.88"/>
      <rect fill="#bfb49b" x="114.14" y="157.12" width="42.94" height="42.88"/>
      <rect fill="#bfa668" x="114.14" width="42.94" height="42.88"/>
      <rect fill="#bfa668" y="52.37" width="42.94" height="42.88"/>
      <rect fill="#5c5b58" y="104.75" width="42.94" height="42.88"/>
      <rect fill="#bfa668" x="57.07" y="52.37" width="42.94" height="42.88"/>
      <rect fill="#afa595" x="57.07" y="104.75" width="42.94" height="42.88"/>
      <rect fill="#bfa668" x="668.06" width="42.94" height="42.88"/>
      <rect fill="#bfa668" x="673.43" y="84.58" width="32.2" height="115.42"/>
      <rect fill="#bfa668" x="327.65" y="42.88" width="32.2" height="157.12"/>
      <rect fill="#bfa668" x="184.65" y="114.03" width="29.45" height="56.51"/>
      <rect fill="#bfa668" x="214.11" y="84.58" width="56.51" height="29.45"/>
      <rect fill="#bfa668" x="270.62" y="114.03" width="29.45" height="56.51"/>
      <rect fill="#bfa668" x="214.11" y="170.55" width="56.51" height="29.45"/>
      <rect fill="#bfa668" x="387.43" y="114.03" width="29.45" height="56.51"/>
      <rect fill="#bfa668" x="416.88" y="84.58" width="56.51" height="29.45"/>
      <rect fill="#bfa668" x="473.4" y="114.03" width="29.45" height="56.51"/>
      <rect fill="#bfa668" x="416.88" y="170.55" width="56.51" height="29.45"/>
      <rect fill="#bfa668" x="616.4" y="114.03" width="29.45" height="85.97"/>
      <rect fill="#bfa668" x="530.43" y="114.18" width="29.45" height="85.82"/>
      <rect fill="#bfa668" x="559.88" y="84.58" width="56.52" height="29.45"/>
    </svg>
  );
};