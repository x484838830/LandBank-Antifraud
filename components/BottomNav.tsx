import React from 'react';
import { Home, Landmark, ScanLine, Gift, BookHeart } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'home', label: '首頁', icon: Home, isActive: true },
  { id: 'bank', label: '土地銀行', icon: Landmark },
  { id: 'scan', label: '語境掃描', icon: ScanLine },
  { id: 'points', label: '點數換樂', icon: Gift },
  { id: 'diary', label: '我的日記', icon: BookHeart },
];

export const BottomNav: React.FC = () => {
  return (
    <div className="absolute bottom-6 left-4 right-4 h-[72px] bg-white/80 backdrop-blur-xl rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/50 z-50 flex items-center justify-around px-2">
      {navItems.map((item) => (
        <button 
          key={item.id} 
          className={`
            flex flex-col items-center justify-center w-14 h-full relative transition-all duration-300
            ${item.isActive ? 'text-land-600' : 'text-gray-400 hover:text-gray-600'}
          `}
        >
          {/* Active Indicator Line */}
          {item.isActive && (
            <div className="absolute top-0 w-8 h-1 bg-land-500 rounded-b-full shadow-[0_2px_8px_rgba(20,184,166,0.5)]"></div>
          )}

          <div className={`
             mb-1 transition-transform duration-300
             ${item.isActive ? '-translate-y-1' : ''}
          `}>
            <item.icon strokeWidth={item.isActive ? 2.5 : 1.5} size={22} />
          </div>
          
          <span className={`
            text-[10px] font-medium tracking-wide
            ${item.isActive ? 'text-land-700 font-bold' : ''}
          `}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};