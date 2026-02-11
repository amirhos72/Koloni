import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const MembershipCard: React.FC<{ 
  name: string; 
  subtitle: string; 
  price: string; 
  features: string[]; 
  type: 'standard' | 'premier' | 'vip';
}> = ({ name, subtitle, price, features, type }) => {
  
  const styles = {
    standard: "bg-[#111] border-white/10",
    premier: "bg-gradient-to-br from-[#2a2a2a] to-[#111] border-white/20",
    vip: "bg-gradient-to-br from-koloni-gold/80 via-[#bfa668] to-[#8a7645] border-transparent text-black"
  };

  const isVip = type === 'vip';

  return (
    <div className={`
      relative h-full rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between overflow-hidden group transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-2xl border
      ${styles[type]}
    `}>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>
      
      {isVip && <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/30 blur-[40px] md:blur-[60px] rounded-full pointer-events-none"></div>}

      <div>
        <div className="flex justify-end items-start mb-6 md:mb-8 min-h-[35px] md:min-h-[40px]">
           {isVip && <span className="bg-black/20 backdrop-blur-sm px-2 py-1 md:px-3 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black border border-black/10">Invite Only</span>}
        </div>

        <h3 className={`font-display font-bold text-2xl md:text-3xl mb-1 ${isVip ? 'text-black' : 'text-white'}`}>{name}</h3>
        <p className={`font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 ${isVip ? 'text-black/60' : 'text-gray-500'}`}>{subtitle}</p>
        
        <div className={`text-lg md:text-xl font-medium mb-8 md:mb-10 ${isVip ? 'text-black' : 'text-white'}`}>
           {price}
        </div>

        <div className={`h-px w-full mb-6 md:mb-8 ${isVip ? 'bg-black/10' : 'bg-white/10'}`}></div>

        <ul className="space-y-3 md:space-y-4">
          {features.map((feat, i) => (
            <li key={i} className="flex items-center gap-3">
              <Check size={14} className={isVip ? 'text-black' : 'text-koloni-gold'} />
              <span className={`text-sm font-medium ${isVip ? 'text-black/80' : 'text-gray-400'}`}>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={`
        mt-8 md:mt-10 w-full py-3 md:py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-4
        ${isVip 
          ? 'bg-black text-white hover:bg-black/80' 
          : 'bg-white text-black hover:bg-koloni-gold'
        }
      `}>
        {isVip ? 'Apply Now' : 'Join Waitlist'}
        <ArrowRight size={14} />
      </button>
    </div>
  );
};

const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-16 md:py-20 relative z-10 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-8">
            <div>
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
                    UNLOCK <br /> <span className="text-koloni-gold">STATUS</span>
                </h2>
                <p className="text-gray-400 font-light max-w-md text-sm md:text-base">Ascend through tiers to unlock exclusive venues, features, and social capital.</p>
            </div>
            <div className="hidden md:block w-32 h-px bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <MembershipCard 
              type="standard"
              name="Member"
              subtitle="White Ring"
              price="Free Forever"
              features={[
                "Verified Profile",
                "Public Event Access",
                "Referral System",
                "Limited DMs",
              ]}
            />
            <MembershipCard 
              type="premier"
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
            <MembershipCard 
              type="vip"
              name="VIP"
              subtitle="Gold Crown"
              price="Custom"
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
    </section>
  );
};

export default Membership;