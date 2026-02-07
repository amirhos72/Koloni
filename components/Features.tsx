import React from 'react';
import { ShieldCheck, Banknote, Coins, Star, TrendingUp } from 'lucide-react';

const BentoCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ElementType;
  className?: string;
  highlight?: boolean;
}> = ({ title, desc, icon: Icon, className = "", highlight = false }) => (
  <div className={`
    group relative overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1
    ${highlight 
      ? 'bg-gradient-to-br from-koloni-gold/20 via-black/40 to-black/80 border border-koloni-gold/30' 
      : 'glass-panel hover:bg-white/5'
    }
    ${className}
  `}>
    <div className={`
      w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110
      ${highlight ? 'bg-koloni-gold text-black' : 'bg-white/10 text-white'}
    `}>
      <Icon size={20} className="md:w-6 md:h-6" />
    </div>
    
    <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 md:mb-3">{title}</h3>
    <p className="text-sm text-gray-400 font-light leading-relaxed">
      {desc}
    </p>

    {/* Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-koloni-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative z-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 md:mb-16 text-left md:text-center max-w-3xl mx-auto">
           <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
             FOR <span className="text-koloni-gold">CONNECTION...</span>
           </h2>
           <p className="text-gray-400 text-base md:text-lg font-light">
             A complete ecosystem merging social discovery with financial incentives.
           </p>
        </div>

        {/* Bento Grid - Mobile: Single col, Tablet/Desktop: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[minmax(280px,auto)]">
          
          {/* Main Feature - Spans 2x2 on large, 1x1 on mobile */}
          <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden border border-koloni-gold/20 min-h-[360px] md:min-h-0">
             <div className="absolute inset-0 bg-[url('https://image2url.com/r2/default/images/1770489552390-e224dee3-defd-4a63-b871-384bf92d12a3.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
             
             <div className="relative h-full p-6 md:p-12 flex flex-col justify-end">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-koloni-gold rounded-full flex items-center justify-center text-black mb-4 md:mb-6">
                  <Coins size={24} className="md:w-[28px] md:h-[28px]" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-4xl text-white mb-3 md:mb-4">Earn While You Socialize</h3>
                <p className="font-sans text-gray-300 text-base md:text-lg font-light max-w-md leading-relaxed">
                  Turn your nights out into real rewards. Earn points for attending events and bringing friends. Redeem for tickets, drinks, and more.
                </p>
             </div>
          </div>

          <BentoCard 
            title="Real Connections" 
            desc="A verified community free from bots. Connect with real people who share your vibe."
            icon={ShieldCheck}
            className="md:col-span-1"
          />
          
          <BentoCard 
            title="Get Paid" 
            desc="Share events with your unique link. When friends buy tickets, you earn cash instantly."
            icon={Banknote}
            className="md:col-span-1"
            highlight
          />

          <BentoCard 
            title="Level Up" 
            desc="Consistent activity unlocks VIP status and exclusive location perks."
            icon={Star}
            className="md:col-span-1"
          />

          <BentoCard 
            title="Vibe Check" 
            desc="See live crowd levels and busy times before you leave the house."
            icon={TrendingUp}
            className="md:col-span-1"
          />

        </div>
      </div>
    </section>
  );
};

export default Features;