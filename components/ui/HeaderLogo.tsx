import React from 'react';

interface LogoProps {
  className?: string;
}

const HeaderLogo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  return (
    <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1570 2000" className={className} aria-label="Koloni Logo">
        <rect fill="#2e2d2c" x="-.8" y="1571.41" width="429.4" height="428.81"/>
        <rect fill="#bfa668" x="-.8" width="429.4" height="428.81"/>
        <rect fill="#bfb49b" x="1140.73" y="1571.41" width="429.4" height="428.81"/>
        <rect fill="#bfa668" x="1140.73" width="429.4" height="428.81"/>
        <rect fill="#bfa668" x="-.8" y="523.8" width="429.4" height="428.81"/>
        <rect fill="#5c5b58" x="-.8" y="1047.61" width="429.4" height="428.81"/>
        <rect fill="#bfa668" x="569.97" y="523.8" width="429.4" height="428.81"/>
        <rect fill="#afa595" x="569.97" y="1047.61" width="429.4" height="428.81"/>
    </svg>
  );
};

export default HeaderLogo;
