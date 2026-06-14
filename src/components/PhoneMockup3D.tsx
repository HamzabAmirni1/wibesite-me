import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const PhoneMockup3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 22);
    setRotateY(x * 22);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-44 h-80 mx-auto perspective-1000 flex items-center justify-center cursor-pointer select-none"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-40 h-76 rounded-[28px] bg-gray-900 border-4 border-gray-800 dark:border-gray-700 shadow-2xl overflow-hidden flex flex-col justify-between p-2.5"
      >
        {/* Gloss highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />
        
        {/* Screen gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0b0f19] to-slate-900 z-0" />

        {/* Dynamic Island notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-30 flex items-center justify-between px-1.5">
          <div className="w-1 h-1 rounded-full bg-blue-900" />
          <div className="w-3 h-0.5 bg-gray-800 rounded-full" />
        </div>

        {/* Screen content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between pt-5 text-white text-[8px] font-sans select-none">
          {/* Status bar */}
          <div className="flex justify-between items-center px-1 text-[6px] text-gray-400">
            <span>9:41</span>
            <div className="flex gap-0.5">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>

          {/* App title */}
          <div className="flex flex-col items-center mt-2 text-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary p-0.5 shadow-md">
              <img src="/pocketpal-logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-[6px]" />
            </div>
            <span className="font-bold mt-1 text-[9px] tracking-tight">PocketPal AI</span>
            <span className="text-[5px] text-green-400 font-semibold uppercase tracking-wider">100% Offline LLM</span>
          </div>

          {/* Chats mockup */}
          <div className="flex-1 bg-black/45 rounded-lg p-1.5 mt-2 flex flex-col justify-between border border-white/5 overflow-hidden">
            <div className="space-y-1">
              <div className="bg-primary/20 text-white rounded-[6px] p-1 text-[7px] rounded-tl-none max-w-[85%] border border-primary/20">
                Hi! I am a local Llama model running completely offline.
              </div>
              <div className="bg-gray-800/60 text-gray-200 rounded-[6px] p-1 text-[7px] rounded-tr-none max-w-[85%] ml-auto border border-white/5">
                Explain gravity.
              </div>
              <div className="bg-primary/20 text-white rounded-[6px] p-1 text-[7px] rounded-tl-none max-w-[85%] border border-primary/20">
                It is a force pulling objects together.
              </div>
            </div>

            {/* Input bar */}
            <div className="bg-gray-950 rounded-full p-0.5 mt-1 flex items-center justify-between border border-white/10">
              <span className="text-[5px] text-gray-500 pl-1.5">Ask locally...</span>
              <div className="w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center text-[5px] text-white">→</div>
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="w-12 h-0.5 bg-white rounded-full mx-auto mt-1.5 opacity-55" />
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup3D;
