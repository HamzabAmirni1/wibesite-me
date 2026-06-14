import React, { useState, useEffect } from 'react';

const codeSnippets = [
  `// Hamza Amirni - Full-Stack Developer
const developer = {
  name: 'Hamza Amirni',
  role: 'Full-Stack Developer',
  skills: ['React', 'TypeScript', 'Node.js', 'Vite'],
  loveCoding: true,
  buildApps() {
    return "Stunning web application created! 🚀";
  }
};`,
  `/* Premium glassmorphic style */
.wow-card-3d {
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  transform-style: preserve-3d;
  transition: all 0.4s ease;
}`,
  `<!-- Modern semantic UI -->
<div className="wow-card">
  <div className="icon-badge">⚡</div>
  <h3>Advanced Web Engineering</h3>
  <p>Crafting responsive clean code.</p>
</div>`
];

export const CodeSimulator: React.FC = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const code = codeSnippets[snippetIndex];
    if (charIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + code[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 25); // Faster typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setSnippetIndex(prev => (prev + 1) % codeSnippets.length);
        setDisplayedText('');
        setCharIndex(0);
      }, 4500); // Wait 4.5s before next snippet
      return () => clearTimeout(timeout);
    }
  }, [charIndex, snippetIndex]);

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-950 rounded-xl overflow-hidden shadow-2xl border border-white/10 font-mono text-[9px] text-gray-300 select-none text-left">
      {/* IDE Title bar */}
      <div className="bg-gray-900/90 px-3.5 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-500 text-[8px] tracking-wider font-sans font-medium uppercase">
          {snippetIndex === 0 ? 'main.ts' : snippetIndex === 1 ? 'styles.css' : 'index.html'}
        </span>
        <div className="w-8" />
      </div>

      {/* Editor content */}
      <div className="p-3 h-44 overflow-y-auto text-left whitespace-pre-wrap leading-relaxed select-text custom-scrollbar">
        <code className="block">
          {displayedText.split('\n').map((line, idx) => {
            let coloredLine: React.ReactNode = line;

            if (line.trim().startsWith('//') || line.trim().startsWith('/*') || line.trim().startsWith('<!--')) {
              coloredLine = <span className="text-gray-500">{line}</span>;
            } else {
              const parts = line.split(/(\bconst\b|\blet\b|\bfunction\b|\breturn\b|\btrue\b|\bfalse\b|\bclass\b|'.*?'|".*?")/);
              coloredLine = parts.map((part, i) => {
                if (['const', 'let', 'function', 'return', 'class'].includes(part)) {
                  return <span key={i} className="text-indigo-400 font-bold">{part}</span>;
                } else if (['true', 'false'].includes(part)) {
                  return <span key={i} className="text-orange-400">{part}</span>;
                } else if (part.startsWith("'") || part.startsWith('"')) {
                  return <span key={i} className="text-emerald-400">{part}</span>;
                }
                return part;
              });
            }

            return (
              <div key={idx} className="flex">
                <span className="text-gray-600 select-none w-5 text-right pr-2 mr-2 border-r border-white/5">{idx + 1}</span>
                <span className="flex-1">{coloredLine}</span>
              </div>
            );
          })}
          <span className="inline-block w-1.5 h-3.5 bg-primary animate-pulse ml-0.5" />
        </code>
      </div>
    </div>
  );
};

export default CodeSimulator;
