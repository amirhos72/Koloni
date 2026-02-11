import React from 'react';
import Button from './ui/Button';

const Organizers: React.FC = () => {
  return (
    <section id="organizers" className="py-20 md:py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
       <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
         
         <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
           <span className="font-mono text-xs uppercase tracking-widest text-koloni-gold mb-4 block">For Partners</span>
           <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 md:mb-8">
             THE VENUE OS
           </h2>
           <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
             Eliminate disputes, automate guest lists, and forecast revenue with our AI-powered venue management suite.
           </p>
         </div>

         {/* Grid with Standardized Gaps and Individual Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 lg:p-16 rounded-3xl hover:border-white/20 transition-all duration-500 group">
              <h3 className="font-display font-bold text-xl md:text-3xl text-white mb-4 group-hover:text-koloni-gold transition-colors">Koloni Billing</h3>
              <p className="text-gray-500 font-light mb-8 h-auto md:h-20 text-sm md:text-lg leading-relaxed">
                 A transparent financial bridge. VIPs order via app, eliminating "padded bills" and chargebacks. Instant settlement.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                 <span className="text-4xl md:text-5xl text-white font-mono font-bold">0%</span>
                 <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">Dispute Rate</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 lg:p-16 rounded-3xl hover:border-white/20 transition-all duration-500 group">
              <h3 className="font-display font-bold text-xl md:text-3xl text-white mb-4 group-hover:text-koloni-gold transition-colors">Predictive Capacity</h3>
              <p className="text-gray-500 font-light mb-8 h-auto md:h-20 text-sm md:text-lg leading-relaxed">
                 The "Trojan Horse" utility. Use our tools for private nights to predict crowd flow and revenue before doors open.
              </p>
               <div className="flex items-baseline gap-2 mb-2">
                 <span className="text-4xl md:text-5xl text-white font-mono font-bold">2.4x</span>
                 <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">Rev. Optimization</span>
              </div>
            </div>
         </div>

         <div className="mt-12 md:mt-16 text-center">
            <Button variant="outline" size="lg" className="min-w-[200px] w-full md:w-auto">Partner Application</Button>
         </div>

       </div>
    </section>
  );
};

export default Organizers;