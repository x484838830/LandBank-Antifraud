import React from 'react';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export const NeumorphicCard: React.FC<NeumorphicCardProps> = ({ 
  children, 
  className = "", 
  onClick,
  active = false
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-[#efefef] 
        rounded-[20px] 
        transition-all duration-300 ease-in-out
        ${active 
          ? 'shadow-neu-pressed border-transparent' 
          : 'shadow-neu-flat border border-white/50 hover:-translate-y-1 hover:shadow-neu-float'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};