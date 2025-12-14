
import React from 'react';

// The classic Zig-Zag divider
export const ImigongoDivider = ({ className = "" }: { className?: string }) => (
    <div className={`w-full h-8 overflow-hidden flex ${className}`}>
        {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-8 h-8 relative">
                <div className="absolute inset-0 border-l-4 border-b-4 border-[#F4F4F0] transform rotate-45 translate-y-1/2 origin-center" />
            </div>
        ))}
    </div>
);

// A spiral/geometric accent pattern with Parallax support
export const ImigongoSpiral = ({ size = "w-24 h-24", color = "border-[#F4F4F0]", style = {} }: { size?: string, color?: string, style?: React.CSSProperties }) => (
    <div
        className={`${size} relative flex items-center justify-center opacity-20 pointer-events-none transition-transform duration-75 ease-out`}
        style={style}
    >
        <div className={`absolute w-full h-full border-4 ${color} transform rotate-45`} />
        <div className={`absolute w-3/4 h-3/4 border-4 ${color} transform rotate-45`} />
        <div className={`absolute w-1/2 h-1/2 border-4 ${color} transform rotate-45`} />
        <div className={`absolute w-1/4 h-1/4 bg-[#D4A017] transform rotate-45`} />
    </div>
);
