import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const TierCard: React.FC<{ 
  name: string; 
  subtitle: string; 
  price: string; 
  features: string[]; 
  isGold?: boolean;
}> = ({ name, subtitle, price, features, isGold }) => {
  return (
    <div className={`
      relative p-8 flex flex-col h-full transition-all duration-500 group hover:-translate-y-2 rounded-3xl backdrop-blur-xl border overflow-hidden
      ${isGold 
        ? 'bg-gradient-to-br from-koloni-gold/10 via-black/40 to-black/60 border-koloni-gold/30 hover:shadow-[0_0_50px_rgba(191,166,104,0.15)]' 
        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl'
      }
    `}>
      {isGold && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-koloni-gold text-black text-[9px] font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg rounded-b-lg">
          Application Only
        </div>
      )}

      <div className="flex justify-between items-start mb-8 mt-2">
        <div>
          <h3 className={`font-display font-bold text-2xl uppercase tracking-wide transition-colors ${isGold ? 'text-koloni-gold' : 'text-white group-hover:text-koloni-gold'}`}>{name}</h3>
          <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest mt-1">{subtitle}</p>
        </div>
        <div className="text-right">
           <span className="block text-white font-light bg-white/5 px-3 py-1 rounded-full text-sm">{price}</span>
        </div>
      </div>

      <div className="w-full h-px bg-white/5 mb-8 group-hover:bg-white/10 transition-colors"></div>

      <ul className="flex-grow space-y-4 mb-10">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isGold ? 'bg-koloni-gold/20 text-koloni-gold' : 'bg-white/5 text-gray-500 group-hover:text-koloni-gold group-hover:bg-koloni-gold/10 transition-colors'}`}>
               <Check size={10} />
            </div>
            <span className="text-sm text-gray-300 font-light">{feat}</span>
          </li>
        ))}
      </ul>

      <button className={`
        w-full py-4 px-6 flex items-center justify-between text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xl
        ${isGold 
          ? 'bg-koloni-gold text-black hover:bg-white hover:scale-[1.02] shadow-lg' 
          : 'bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:scale-[1.02]'
        }
      `}>
        <span>{isGold ? 'Apply Now' : 'Join Waitlist'}</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-32 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Section Info */}
          <div className="lg:col-span-4">
             <div className="sticky top-32">
                <span className="font-mono text-xs uppercase tracking-widest text-koloni-gold mb-6 block">The Hierarchy</span>
                <h2 className="font-display font-bold text-4xl text-white mb-6">UNLOCK<br/>STATUS</h2>
                <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                  Your actions define your access. Ascend through tiers to unlock exclusive venues, features, and social capital.
                </p>
                <div className="hidden lg:block w-12 h-1 bg-white/10 rounded-full"></div>
             </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <TierCard 
              name="Member"
              subtitle="White Ring"
              price="Free"
              features={[
                "Verified Profile",
                "Public Event Access",
                "Referral System",
                "Limited DMs",
              ]}
            />
            <TierCard 
              name="Premier"
              subtitle="Silver Ring"
              price="$29/mo"
              features={[
                "Priority Support",
                "+1 Digital Invites",
                "Unrestricted DMs",
                "Points Store Access"
              ]}
            />
            <TierCard 
              isGold
              name="VIP"
              subtitle="Gold Crown"
              price="Invite Only"
              features={[
                "Secret Locations",
                "24/7 Concierge",
                "Table Priority",
                "Koloni Billing",
                "Immunity Perks"
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Membership;