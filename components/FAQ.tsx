import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`font-display font-medium text-base md:text-lg transition-colors pr-4 md:pr-8 ${isOpen ? 'text-koloni-gold' : 'text-white group-hover:text-koloni-gold'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 p-2 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? 'bg-koloni-gold text-black rotate-180 border-koloni-gold' : 'bg-white/5 text-white group-hover:border-koloni-gold group-hover:bg-white/10'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-400 font-light leading-relaxed pr-4 md:pr-8 text-sm md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the Tier System work?",
      answer: "Koloni operates on a merit-based hierarchy. Everyone starts as a Member. You ascend to Premier and VIP status by earning points through attendance, referrals, and positive community interactions. Higher tiers unlock exclusive venues and perks."
    },
    {
      question: "What are Koloni Points used for?",
      answer: "Points are our internal currency. You can use them to purchase tickets, unlock exclusive venue areas, bid on table reservations, or trade them for physical merchandise in the Koloni Store. Points cannot be purchased directly; they must be earned."
    },
    {
      question: "Is the application available on both iOS and Android?",
      answer: "Yes, Koloni is available for download on both the Apple App Store and Google Play Store. The core features are identical across platforms, ensuring a seamless experience for all community members."
    },
    {
      question: "How do I become a venue partner?",
      answer: "We are actively looking for high-quality venue partners. Navigate to the 'Organizer Panel' section or contact our partnerships team. We review all applications to ensure they meet our aesthetic and service standards."
    },
    {
      question: "What is the 'Social Trust Score'?",
      answer: "Your Social Trust Score is a dynamic metric based on your reliability (attending events you book), behavior, and community feedback. A high score is required to maintain VIP status and access high-demand events."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-transparent relative border-t border-white/5">
      {/* Background Decor handled by App.tsx */}

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
            COMMON <br /> QUERIES
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-10 rounded-2xl md:rounded-3xl hover:border-white/20 transition-colors duration-500 shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;