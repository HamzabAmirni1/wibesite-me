import React, { useEffect, useRef } from 'react';

type VisualType = 'network' | 'code' | 'waveform' | 'phone' | 'articles' | 'services' | 'car';

interface HeroVisualProps {
  type: VisualType;
  className?: string;
}

/* ─────────────────────────────────────────────
   Network dots (Bots / Tools)
───────────────────────────────────────────── */
const NetworkVisual: React.FC = () => (
  <div className="w-full h-full relative overflow-hidden bg-transparent">
    {/* Animated dots */}
    {Array.from({ length: 18 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-indigo-400 dark:bg-indigo-500"
        style={{
          width: `${4 + (i % 4)}px`,
          height: `${4 + (i % 4)}px`,
          left: `${(i * 37 + 10) % 90}%`,
          top: `${(i * 53 + 8) % 85}%`,
          opacity: 0.5 + (i % 3) * 0.15,
          animation: `pulse ${2 + (i % 3)}s ease-in-out ${(i * 0.3) % 2}s infinite`,
        }}
      />
    ))}
    {/* SVG lines connecting dots */}
    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <line x1="15%" y1="20%" x2="45%" y2="55%" stroke="#6366f1" strokeWidth="1" />
      <line x1="45%" y1="55%" x2="80%" y2="30%" stroke="#6366f1" strokeWidth="1" />
      <line x1="80%" y1="30%" x2="60%" y2="75%" stroke="#6366f1" strokeWidth="1" />
      <line x1="60%" y1="75%" x2="25%" y2="65%" stroke="#6366f1" strokeWidth="1" />
      <line x1="25%" y1="65%" x2="15%" y2="20%" stroke="#6366f1" strokeWidth="1" />
      <line x1="15%" y1="20%" x2="80%" y2="30%" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="45%" y1="55%" x2="25%" y2="65%" stroke="#8b5cf6" strokeWidth="0.5" strokeDasharray="4 4" />
    </svg>
    {/* Central glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-indigo-500/20 blur-2xl animate-pulse" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-indigo-500/30 blur-lg animate-ping" style={{ animationDuration: '3s' }} />
  </div>
);

/* ─────────────────────────────────────────────
   Code terminal (About / Programming)
───────────────────────────────────────────── */
const CodeVisual: React.FC = () => {
  const lines = [
    { text: '// Hamza Amirni — Full-Stack Dev', color: 'text-gray-500' },
    { text: 'const developer = {', color: 'text-indigo-300' },
    { text: "  name: 'Hamza Amirni',", color: 'text-green-400' },
    { text: "  role: 'Full-Stack Dev',", color: 'text-yellow-300' },
    { text: "  skills: ['React','Node','AI'],", color: 'text-blue-300' },
    { text: "  available: true,", color: 'text-pink-400' },
    { text: '};', color: 'text-indigo-300' },
    { text: '', color: '' },
    { text: 'developer.build();', color: 'text-green-300' },
  ];
  return (
    <div className="w-full h-full flex flex-col bg-gray-950 rounded-xl overflow-hidden font-mono">
      {/* Terminal bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border-b border-gray-800 shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-[11px] text-gray-500 tracking-widest">MAIN.TS</span>
      </div>
      {/* Lines */}
      <div className="flex-1 p-4 space-y-1 overflow-hidden">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`text-[13px] leading-relaxed ${line.color}`}
            style={{
              animation: `fadeInUp 0.4s ease forwards`,
              animationDelay: `${i * 0.18}s`,
              opacity: 0,
            }}
          >
            <span className="text-gray-600 select-none mr-3 text-[10px]">{i + 1}</span>
            {line.text}
            {i === lines.length - 1 && (
              <span className="inline-block w-2 h-4 bg-indigo-400 ml-1 animate-pulse align-middle" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Waveform bars (Videos)
───────────────────────────────────────────── */
const WaveformVisual: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-gray-950 rounded-xl">
    {/* Play button */}
    <div className="relative">
      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-pulse">
        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <div className="absolute inset-0 rounded-full border-2 border-red-500/40 animate-ping" />
    </div>
    {/* Bars */}
    <div className="flex items-end gap-1 h-16">
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 rounded-full bg-gradient-to-t from-red-600 to-pink-400"
          style={{
            height: `${20 + Math.abs(Math.sin(i * 0.7)) * 44}%`,
            animation: `waveBar 1.2s ease-in-out ${(i * 0.06) % 1.2}s infinite alternate`,
          }}
        />
      ))}
    </div>
    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500/60">Live Animation</p>
  </div>
);

/* ─────────────────────────────────────────────
   Phone mockup (Apps)
───────────────────────────────────────────── */
const PhoneVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-950 to-purple-950">
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl bg-indigo-500/30 scale-110" />
      {/* Phone body */}
      <div className="relative w-32 h-56 bg-gray-900 rounded-[2rem] border-4 border-gray-700 shadow-2xl overflow-hidden" style={{ animation: 'float 3s ease-in-out infinite' }}>
        {/* Screen */}
        <div className="absolute inset-1 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[1.5rem] flex flex-col items-center justify-center gap-2 p-3">
          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
            <span className="text-white text-lg">📱</span>
          </div>
          <div className="w-12 h-1.5 bg-white/40 rounded-full" />
          <div className="w-8 h-1 bg-white/25 rounded-full" />
          <div className="mt-2 grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-lg bg-white/10" />
            ))}
          </div>
        </div>
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gray-800 rounded-full" />
      </div>
      {/* Orbiting dots */}
      <div className="absolute inset-0 rounded-full" style={{ animation: 'orbit 4s linear infinite' }}>
        <div className="absolute -top-3 left-1/2 w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Articles visual — floating cards
───────────────────────────────────────────── */
const ArticlesVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-950 to-indigo-950 rounded-xl overflow-hidden p-4">
    <div className="relative w-full h-full">
      {[
        { title: 'React Tips', tag: 'Frontend', top: '5%', left: '5%', delay: '0s', color: 'from-violet-600 to-purple-700' },
        { title: 'Node.js API', tag: 'Backend', top: '35%', left: '20%', delay: '0.3s', color: 'from-indigo-600 to-blue-700' },
        { title: 'AI & ML', tag: 'Artificial Intelligence', top: '10%', left: '55%', delay: '0.6s', color: 'from-fuchsia-600 to-pink-700' },
        { title: 'CSS Magic', tag: 'Design', top: '60%', left: '45%', delay: '0.9s', color: 'from-cyan-600 to-teal-700' },
      ].map((card, i) => (
        <div
          key={i}
          className={`absolute bg-gradient-to-br ${card.color} rounded-xl shadow-xl p-3 w-36`}
          style={{
            top: card.top,
            left: card.left,
            animation: `float ${3 + i * 0.5}s ease-in-out ${card.delay} infinite`,
          }}
        >
          <div className="text-white/60 text-[9px] font-bold uppercase tracking-wider mb-1">{card.tag}</div>
          <div className="text-white font-bold text-sm">{card.title}</div>
          <div className="mt-2 flex gap-0.5">
            {Array.from({ length: 3 }).map((_, j) => (
              <div key={j} className="h-1 flex-1 bg-white/30 rounded-full" />
            ))}
          </div>
        </div>
      ))}
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-violet-500/20 blur-3xl" />
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Services visual — orbiting icons
───────────────────────────────────────────── */
const ServicesVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-950 to-indigo-950 rounded-xl overflow-hidden">
    {/* Center circle */}
    <div className="relative flex items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.5)] z-10">
        <span className="text-3xl">💼</span>
      </div>
      {/* Orbiting service icons */}
      {[
        { emoji: '🎨', angle: 0 },
        { emoji: '📱', angle: 72 },
        { emoji: '🛒', angle: 144 },
        { emoji: '🔒', angle: 216 },
        { emoji: '🌐', angle: 288 },
      ].map((item, i) => {
        const rad = (item.angle * Math.PI) / 180;
        const r = 90;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <div
            key={i}
            className="absolute w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-lg border border-white/20 shadow-lg"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              animation: `pulse ${2 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
            }}
          >
            {item.emoji}
          </div>
        );
      })}
      {/* Orbit ring */}
      <div className="absolute w-48 h-48 rounded-full border border-white/10" style={{ animation: 'orbit 8s linear infinite' }} />
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Car visual — rotating 3D car placeholder
───────────────────────────────────────────── */
const CarVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-950 to-purple-950 rounded-xl">
    <div className="text-center" style={{ animation: 'float 3s ease-in-out infinite' }}>
      <div className="text-7xl mb-4" style={{ animation: 'orbit 6s linear infinite' }}>🚗</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/60">3D Model Loading...</div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Main export
───────────────────────────────────────────── */
const HeroVisual: React.FC<HeroVisualProps> = ({ type, className = '' }) => {
  const visuals: Record<VisualType, React.ReactNode> = {
    network: <NetworkVisual />,
    code: <CodeVisual />,
    waveform: <WaveformVisual />,
    phone: <PhoneVisual />,
    articles: <ArticlesVisual />,
    services: <ServicesVisual />,
    car: <CarVisual />,
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waveBar {
          from { transform: scaleY(0.4); }
          to { transform: scaleY(1); }
        }
      `}</style>
      <div className={`w-full h-full ${className}`}>
        {visuals[type]}
      </div>
    </>
  );
};

export default HeroVisual;
