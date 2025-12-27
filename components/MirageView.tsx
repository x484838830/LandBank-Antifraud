import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Quote, ExternalLink, Activity, Zap, Play, Search, AlertTriangle, FileSearch, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { mirageData } from '../data/mirageData';

interface MirageViewProps {
  onBack: () => void;
}

export const MirageView: React.FC<MirageViewProps> = ({ onBack }) => {
  const [mounted, setMounted] = useState(false);
  const [tickerOffset, setTickerOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Track active card
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Simple marquee effect
    const interval = setInterval(() => {
      setTickerOffset(prev => prev > 1000 ? -500 : prev + 0.5);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  // Handle Manual Navigation
  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!scrollContainerRef.current) return;

    const newIndex = direction === 'next' 
      ? Math.min(currentIndex + 1, mirageData.cards.length - 1)
      : Math.max(currentIndex - 1, 0);

    setCurrentIndex(newIndex);

    // Smooth scroll to the specific card element
    const cardNodes = scrollContainerRef.current.children;
    const targetCard = cardNodes[newIndex] as HTMLElement;
    
    if (targetCard) {
      targetCard.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'center' 
      });
    }
  };

  // Sync index on manual scroll (optional, keeps buttons in sync if user does swipe)
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / mirageData.cards.length;
    const scrollLeft = container.scrollLeft;
    // Approximate index based on scroll position
    const index = Math.round(scrollLeft / cardWidth);
    if (index !== currentIndex && index >= 0 && index < mirageData.cards.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className={`absolute inset-0 z-50 bg-slate-950 text-white overflow-hidden transition-opacity duration-500 flex flex-col ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black opacity-80 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-land-500/50 to-transparent z-10"></div>

      {/* 1. Header */}
      <div className="relative z-20 px-6 pt-6 pb-2 flex justify-between items-center bg-slate-900/50 backdrop-blur-md border-b border-white/5 shrink-0">
        <button 
          onClick={onBack}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10"
        >
          <ArrowLeft size={18} className="text-gray-300" />
        </button>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <FileSearch size={14} className="text-land-400" />
            <h2 className="text-lg font-bold tracking-wide text-white">案例幻境</h2>
          </div>
          <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">CASE MIRAGE SYSTEM</span>
        </div>
      </div>

      {/* 2. Ticker (Slogan Marquee) */}
      <div className="relative z-20 bg-land-900/30 border-y border-land-500/20 py-2 overflow-hidden flex items-center shrink-0">
        <div className="flex whitespace-nowrap animate-marquee">
           {/* Duplicating slogans to ensure smooth loop visually */}
           {[...mirageData.slogans, ...mirageData.slogans].map((slogan, idx) => (
             <div key={idx} className="flex items-center gap-3 px-6">
                <span className="text-land-400">◆</span>
                <span className="text-[11px] font-medium text-land-100 tracking-wider">{slogan}</span>
             </div>
           ))}
        </div>
      </div>

      {/* 3. Main Content: Card Carousel */}
      <div className="flex-1 relative z-10 w-full overflow-hidden flex flex-col justify-center">
        
        {/* Navigation Buttons (Floating) */}
        {currentIndex > 0 && (
          <button 
            onClick={(e) => { e.stopPropagation(); handleNavigate('prev'); }}
            className="absolute left-2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-land-500/20 transition-all hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {currentIndex < mirageData.cards.length - 1 && (
          <button 
            onClick={(e) => { e.stopPropagation(); handleNavigate('next'); }}
            className="absolute right-2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-land-500/20 transition-all hover:scale-110 active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full h-full overflow-x-auto overflow-y-hidden snap-x flex items-center gap-5 px-6 pb-4 no-scrollbar touch-pan-x"
        >
          {mirageData.cards.map((card, index) => (
            <div 
              key={card.id} 
              className={`
                snap-center shrink-0 w-[88%] h-[85%] max-h-[600px] 
                bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[24px] 
                shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden relative group transition-transform duration-300
                ${index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'}
              `}
            >
              {/* Card Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-land-500 to-blue-600"></div>

              {/* Card Header */}
              <div className="p-5 pb-3 shrink-0">
                 <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] text-gray-400 font-mono">
                      {card.id.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                      {card.published_date} <span className="w-1 h-1 rounded-full bg-gray-600"></span> {card.source_name}
                    </span>
                 </div>
                 <h3 className="text-lg font-bold text-white leading-snug mb-2 line-clamp-2">
                   {card.title}
                 </h3>
                 <div className="inline-block px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-[10px] text-red-400 font-bold mb-2">
                    {card.scam_type}
                 </div>
                 <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 opacity-90">
                   {card.summary_zh}
                 </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 w-full mx-auto shrink-0"></div>

              {/* Analysis Section */}
              <div className="flex-1 p-5 overflow-y-auto no-scrollbar space-y-5 bg-black/20">
                
                {/* Signals */}
                <div>
                   <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
                     <Activity size={10} className="text-land-500" /> Top Signals
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {card.top_signals.map((sig, i) => (
                       <span key={i} className="px-2.5 py-1 rounded-full border border-land-500/40 bg-land-500/10 text-land-300 text-[10px] font-bold shadow-[0_0_10px_rgba(20,184,166,0.1)]">
                         {sig}
                       </span>
                     ))}
                   </div>
                </div>

                {/* Wittgenstein Hint */}
                <div className="relative pl-3 border-l-2 border-purple-500/50 py-1">
                   <Quote size={12} className="absolute -top-1 -left-1.5 text-purple-400 bg-slate-900" />
                   <p className="text-[11px] text-purple-200 italic font-medium leading-relaxed">
                     "{card.wittgenstein_hint_zh}"
                   </p>
                </div>

                {/* TRIPO Matrix */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                   <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2 text-center">TRIPO 結構拆解</h4>
                   <div className="space-y-1.5">
                     <TripoRow label="T" desc={card.tripo.T} />
                     <TripoRow label="R" desc={card.tripo.R} />
                     <TripoRow label="I" desc={card.tripo.I} />
                     <TripoRow label="P" desc={card.tripo.P} highlight />
                     <TripoRow label="O" desc={card.tripo.O} />
                   </div>
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="p-4 bg-slate-900 border-t border-white/10 space-y-2 mt-auto shrink-0">
                 <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-land-500/30 text-land-400 font-bold text-xs flex items-center justify-center gap-2 transition-all">
                    <Search size={14} />
                    {card.cta.scan.label_zh}
                 </button>
                 <button className="w-full py-3 rounded-xl bg-gradient-to-r from-land-600 to-blue-600 hover:from-land-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-land-900/20 flex items-center justify-center gap-2 transition-all group-hover:shadow-land-500/20">
                    <Zap size={14} className="fill-white" />
                    {card.cta.train.label_zh}
                 </button>
              </div>

            </div>
          ))}

          {/* Spacer for end of list */}
          <div className="w-2 shrink-0"></div>
        </div>
      </div>
      
      {/* Page Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center pointer-events-none z-20">
         <div className="px-3 py-1 bg-black/40 backdrop-blur rounded-full border border-white/10 text-[10px] font-mono text-gray-300">
            {currentIndex + 1} / {mirageData.cards.length}
         </div>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const TripoRow: React.FC<{ label: string; desc: string; highlight?: boolean }> = ({ label, desc, highlight }) => (
  <div className={`flex items-start gap-2 text-[10px] ${highlight ? 'text-white font-medium' : 'text-gray-400'}`}>
    <span className={`w-4 shrink-0 text-center font-bold ${highlight ? 'text-red-400' : 'text-gray-600'}`}>{label}</span>
    <span className="leading-tight">{desc}</span>
  </div>
);