import React from 'react';
import { Radio } from 'lucide-react';
import { NewsItem } from '../types';

const newsData: NewsItem[] = [
  { id: 1, title: '新型態 AI 詐騙警示', tag: '警示', content: '深度偽造語音辨識技術正在進化，請小心陌生來電。', isAlert: true },
  { id: 2, title: '防詐語境掃描更新', tag: '新聞', content: 'KYC 3.0 系統已上線，請更新您的個人語意模型。', isAlert: false },
];

export const Carousel: React.FC = () => {
  return (
    <div className="w-full mt-6 mb-2 px-1">
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 px-2 snap-x">
        {newsData.map((item) => (
          <div key={item.id} className="snap-center shrink-0 w-[85%] relative">
             <div className={`
                relative h-32 rounded-2xl p-4 overflow-hidden
                ${item.isAlert 
                  ? 'bg-gradient-to-br from-gray-100 to-gray-200 shadow-neu-flat border border-white/60' 
                  : 'bg-gradient-to-br from-land-50 to-white shadow-neu-flat border border-white/60'
                }
             `}>
               {/* Decorative glow */}
               <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 -mr-10 -mt-10 ${item.isAlert ? 'bg-red-400' : 'bg-land-500'}`}></div>

                <div className="flex justify-between items-start mb-2">
                  <div className={`
                    flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider
                    ${item.isAlert ? 'bg-red-100 text-red-600' : 'bg-land-100 text-land-600'}
                  `}>
                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${item.isAlert ? 'bg-red-500' : 'bg-land-500'}`}></div>
                    LIVE
                  </div>
                  {/* Subtle date */}
                  <span className="text-[10px] text-gray-400 font-mono">2023.10.27</span>
                </div>

                <h3 className="text-gray-800 font-bold text-lg mb-1 truncate">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {item.content}
                </p>

                {/* Tech Deco Lines */}
                <div className="absolute bottom-3 right-3 flex gap-1">
                   <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                   <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                   <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                </div>
             </div>
          </div>
        ))}
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-0">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        <div className="w-4 h-1.5 rounded-full bg-land-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};