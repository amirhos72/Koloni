import React, { useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, Calendar, User, ArrowUpRight } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: "Discover the Best Events with Koloni: Your Ultimate Guide to Entertainment",
    excerpt: "Navigate the social landscape with AI-driven recommendations tailored to your unique vibe. Stop searching, start experiencing.",
    author: "Armita",
    date: "14 Dec 2025",
    image: "https://image2url.com/r2/default/images/1770231599127-7b885e39-169b-4915-a502-b3e5d9c84e21.png",
    category: "Guide"
  },
  {
    id: 2,
    title: "The Architecture of Connection: Inside the Algorithm",
    excerpt: "How our social mining protocol rewards authentic interactions in real-time, turning social capital into tangible perks.",
    author: "System",
    date: "12 Dec 2025",
    image: "https://image2url.com/r2/default/images/1770231552780-51044550-09ab-47d6-bb23-64757fe7ef70.png",
    category: "Tech"
  },
  {
    id: 3,
    title: "Gold Crown Access: The Unspoken Rules",
    excerpt: "Everything you need to know about the invite-only tier that's reshaping nightlife in major metropolitan hubs.",
    author: "Sarah J.",
    date: "08 Dec 2025",
    image: "https://image2url.com/r2/default/images/1770231582606-c666b28f-e024-47e5-a669-a97cb85f1f2c.png",
    category: "Lifestyle"
  },
  {
     id: 4,
     title: "Venue OS Update: Predictive Crowd Density",
     excerpt: "Forecasting capacity before the doors even open. A technical deep dive into our latest venue management tools.",
     author: "Dev Team",
     date: "01 Dec 2025",
     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
     category: "Update"
  }
];

const CATEGORIES = ['All', 'Guide', 'Tech', 'Lifestyle', 'Update'];

const Blog: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filteredPosts = activeCategory === 'All' 
    ? POSTS 
    : POSTS.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-32 bg-transparent relative border-t border-white/5 overflow-hidden">
        {/* Decorative Background Elements handled in App.tsx now, but keeping subtle local ones if needed */}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-6 animate-fade-in">
                        <div className="w-1 h-4 bg-koloni-gold"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-koloni-gold">Transmissions</span>
                    </div>
                    <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-[0.9] mb-6 animate-slide-up">
                        LATEST <br /> <span className="text-gray-500">INTEL.</span>
                    </h2>
                     <p className="text-gray-400 font-light text-lg max-w-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Tune in to our latest updates. Expert guides, system announcements, and community highlights.
                    </p>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex gap-4">
                    <button 
                      onClick={() => scroll('left')} 
                      className="group w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95 shadow-lg"
                      aria-label="Scroll left"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => scroll('right')} 
                      className="group w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95 shadow-lg"
                      aria-label="Scroll right"
                    >
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 rounded-full ${
                            activeCategory === cat
                                ? 'bg-koloni-gold border-koloni-gold text-black shadow-[0_0_15px_rgba(191,166,104,0.3)]'
                                : 'bg-white/5 backdrop-blur-sm border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Carousel Container */}
            <div 
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
            >
                {filteredPosts.map((post, i) => (
                    <article 
                        key={post.id} 
                        className="min-w-[320px] md:min-w-[420px] snap-start group cursor-pointer flex flex-col"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {/* Image Container with Hover Effect */}
                        <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-white/10 bg-white/5 rounded-2xl transition-all duration-500 group-hover:border-koloni-gold/40 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                            <div className="absolute inset-0 bg-gray-900 animate-pulse" />
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                            />
                            
                            {/* Hover Arrow */}
                            <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-lg">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 pr-4">
                            
                            {/* Metadata Header: Category & Author */}
                            <div className="flex items-center justify-between w-full">
                                <span className="text-[9px] font-bold bg-white/5 text-koloni-gold px-3 py-1.5 uppercase tracking-widest border border-white/10 rounded-full backdrop-blur-sm">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                                    <User size={12} className="text-koloni-gold" />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                            
                            <h3 className="font-display font-bold text-2xl text-white group-hover:text-koloni-gold transition-colors leading-tight min-h-[3.5rem]">
                                {post.title}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-[10px] text-gray-600 font-mono uppercase tracking-wider mb-2">
                                <Calendar size={12} />
                                <span>{post.date}</span>
                            </div>

                            <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2">
                                {post.excerpt}
                            </p>
                        </div>
                    </article>
                ))}
                
                {filteredPosts.length === 0 && (
                    <div className="w-full py-20 text-center text-gray-500 font-mono text-sm uppercase tracking-widest">
                        No transmissions found in this category.
                    </div>
                )}
            </div>
        </div>
    </section>
  );
};

export default Blog;
