import React from 'react';
import { Bell, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="relative w-full h-32 rounded-b-[30px] overflow-hidden shadow-lg z-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f766e] to-[#2dd4bf]"></div>
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>

      <div className="relative h-full px-6 pt-10 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-sm">
               <span className="text-white font-bold text-lg">LB</span>
            </div>
            
            <div className="flex flex-col text-white">
              <h1 className="text-xl font-bold tracking-wide leading-tight drop-shadow-md">土地銀行</h1>
              <span className="text-[10px] font-light tracking-wider opacity-90 uppercase">Land Bank of Taiwan</span>
            </div>
          </div>

          <div className="flex gap-4">
             <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all">
                <Bell size={20} className="text-white" />
             </button>
          </div>
        </div>
      </div>
      
      {/* Glassmorphic sheen at bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </div>
  );
};