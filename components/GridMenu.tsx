import React from 'react';
import { 
  ShieldCheck, 
  FileSearch, 
  Trees, 
  AudioWaveform, 
  BrainCircuit, 
  VenetianMask, 
  LayoutDashboard, 
  PiggyBank, 
  ClipboardCheck 
} from 'lucide-react';
import { NeumorphicCard } from './NeumorphicCard';
import { GridItem } from '../types';

const gridItems: GridItem[] = [
  { id: '1', title: '防詐實驗室', icon: ShieldCheck, path: '/lab' },
  { id: '7', title: '中控台', icon: LayoutDashboard, path: '/dashboard' }, // Moved to Pos 2 (Prominent)
  { id: '3', title: '防詐之森', icon: Trees, path: '/forest' },
  { id: '4', title: '來辯論吧', icon: AudioWaveform, path: '/debate' },
  { id: '5', title: '元「語」宙', icon: BrainCircuit, path: '/metaverse' },
  { id: '6', title: '角色劇院', icon: VenetianMask, path: '/theater' },
  { id: '2', title: '案例幻境', icon: FileSearch, path: '/cases' }, // Moved here
  { id: '8', title: '防詐存錢筒', icon: PiggyBank, path: '/savings' },
  { id: '9', title: 'KYC 3.0 防詐問卷', icon: ClipboardCheck, path: '/kyc' },
];

interface GridMenuProps {
  onNavigate: (path: string) => void;
}

export const GridMenu: React.FC<GridMenuProps> = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 mt-6 pb-24">
      {gridItems.map((item) => {
        const isDashboard = item.path === '/dashboard';
        return (
          <NeumorphicCard 
            key={item.id} 
            onClick={() => onNavigate(item.path)}
            className={`
              aspect-square flex flex-col items-center justify-center p-2 relative group cursor-pointer
              ${isDashboard ? 'border-land-500/30' : ''}
            `}
          >
            {/* Special Highlight for Dashboard */}
            {isDashboard && (
              <div className="absolute inset-0 bg-land-500/5 rounded-[20px] animate-pulse"></div>
            )}
            
            {/* Subtle Cold Light Border Effect on Hover */}
            <div className="absolute inset-0 rounded-[20px] ring-1 ring-inset ring-transparent group-hover:ring-land-500/20 transition-all duration-500"></div>

            <div className={`
              mb-2 p-3 rounded-full shadow-neu-pressed transition-transform duration-300 group-hover:scale-110
              ${isDashboard ? 'bg-land-100 text-land-700' : 'bg-[#efefef] text-land-600 group-hover:text-land-500'}
            `}>
              <item.icon strokeWidth={isDashboard ? 2 : 1.5} size={26} />
            </div>
            
            <span className={`
              text-[11px] font-medium tracking-wide text-center leading-tight
              ${isDashboard ? 'text-land-800 font-bold' : 'text-gray-600'}
            `}>
              {item.title}
            </span>
            
            {/* Live Indicator for Dashboard */}
            {isDashboard && (
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></div>
            )}
          </NeumorphicCard>
        );
      })}
    </div>
  );
};