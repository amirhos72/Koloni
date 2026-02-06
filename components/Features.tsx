import React from 'react';
import { ShieldCheck, Zap, Coins, Star, Lock, Brain, TrendingUp } from 'lucide-react';

const FeatureCard: React.FC<{ 
  title: string; 
  desc: string; 
  icon: React.ElementType;
}> = ({ title, desc, icon: Icon }) => (
  <div className="group relative p-6 md:p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] overflow-hidden">
    
    {/* Clean, no corner markers for glass style */}

    <div className="mb-5 md:mb-6 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:text-koloni-gold group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-koloni-gold/30 shadow-inner">
      <Icon size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
    </div>
    
    <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-2 md:mb-3">{title}</h3>
    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
      {desc}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 border-b border-white/10 pb-6 md:pb-10">
           <div className="max-w-2xl">
             <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
               YOUR SOCIAL LIFE, <br />
               UPGRADED.
             </h2>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Highlight Feature - Premium Glass */}
          <div className="md:col-span-2 md:row-span-1 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:border-koloni-gold/30 hover:shadow-[0_10px_40px_-10px_rgba(191,166,104,0.1)] rounded-3xl">
             <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Coins size={80} className="md:w-[120px] md:h-[120px]" />
             </div>
             <div className="relative z-10 h-full flex flex-col justify-center">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-koloni-gold/10 rounded-full flex items-center justify-center text-koloni-gold mb-4 md:mb-6 border border-koloni-gold/20 backdrop-blur-sm">
                 <Coins size={20} className="md:w-6 md:h-6" />
               </div>
               <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 md:mb-4">Earn While You Socialize</h3>
               <p className="font-sans text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-md">
                 Turn your nights out into real rewards. Earn points for attending events, bringing friends, and engaging with the community. Redeem them for tickets, drinks, and more.
               </p>
             </div>
          </div>

          {/* Feature Grid */}
          <FeatureCard 
            title="Real Connections" 
            desc="A verified community free from bots and fake profiles. Connect with real people who share your vibe."
            icon={ShieldCheck}
          />
          <FeatureCard 
            title="Get Paid to Party" 
            desc="Share events with your unique link. When your friends buy tickets, you earn cash or credit instantly."
            icon={Zap}
          />
          <FeatureCard 
            title="Level Up" 
            desc="Build your reputation. Consistent activity and good vibes unlock VIP status and exclusive perks."
            icon={Star}
          />
          <FeatureCard 
            title="Create & Share" 
            desc="Make your profile pop. Use our smart creative tools to design stunning posts and stories in seconds."
            icon={Brain}
          />
          <FeatureCard 
            title="No Creeps Allowed" 
            desc="Your DMs, your rules. Unwanted messages stay hidden and blurred until you decide to connect."
            icon={Lock}
          />
          <FeatureCard 
            title="Know Before You Go" 
            desc="Check the vibe before you leave the house. See live crowd levels and busy times at your favorite spots."
            icon={TrendingUp}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;