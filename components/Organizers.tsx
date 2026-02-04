import React from 'react';
import Button from './ui/Button';

const Organizers: React.FC = () => {
  return (
    <section id="organizers" className="py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
         
         <div className="text-center max-w-3xl mx-auto mb-20">
           <span className="font-mono text-xs uppercase tracking-widest text-koloni-gold mb-4 block">For Partners</span>
           <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
             THE VENUE OS
           </h2>
           <p className="text-gray-400 text-lg font-light leading-relaxed">
             Eliminate disputes, automate guest lists, and forecast revenue with our AI-powered venue management suite.
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            <div className="bg-[#0a0a0a] p-12 md:p-16 hover:bg-[#0f0f0f] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">Koloni Billing</h3>
              <p className="text-gray-500 font-light mb-8 h-20">
                 A transparent financial bridge. VIPs order via app, eliminating "padded bills" and chargebacks. Instant settlement.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                 <span className="text-4xl text-white font-mono">0%</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest">Dispute Rate</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] p-12 md:p-16 hover:bg-[#0f0f0f] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">Predictive Capacity</h3>
              <p className="text-gray-500 font-light mb-8 h-20">
                 The "Trojan Horse" utility. Use our tools for private nights to predict crowd flow and revenue before doors open.
              </p>
               <div className="flex items-baseline gap-2 mb-2">
                 <span className="text-4xl text-white font-mono">2.4x</span>
                 <span className="text-xs text-gray-500 uppercase tracking-widest">Rev. Optimization</span>
              </div>
            </div>
         </div>

         <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="min-w-[200px]">Partner Application</Button>
         </div>

       </div>
    </section>
  );
};

export default Organizers;