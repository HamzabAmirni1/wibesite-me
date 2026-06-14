import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const Background3D: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement with spring physics
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Coordinates normalized between -0.5 and 0.5
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax offsets mapping (different depths/z-index offsets)
  const offsetFarX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const offsetFarY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const offsetMidX = useTransform(smoothX, [-0.5, 0.5], [-45, 45]);
  const offsetMidY = useTransform(smoothY, [-0.5, 0.5], [-45, 45]);

  const offsetCloseX = useTransform(smoothX, [-0.5, 0.5], [-75, 75]);
  const offsetCloseY = useTransform(smoothY, [-0.5, 0.5], [-75, 75]);

  // Fixed static list of particles to avoid hydration mismatches
  const particles = [
    { size: 4, left: 12, delay: 0.5, duration: 18, drift: 30 },
    { size: 6, left: 25, delay: 2.1, duration: 22, drift: -40 },
    { size: 3, left: 38, delay: 4.5, duration: 15, drift: 20 },
    { size: 8, left: 50, delay: 1.2, duration: 25, drift: -50 },
    { size: 5, left: 63, delay: 7.3, duration: 19, drift: 35 },
    { size: 7, left: 78, delay: 3.8, duration: 24, drift: -25 },
    { size: 4, left: 88, delay: 5.9, duration: 17, drift: 45 },
    { size: 6, left: 18, delay: 8.2, duration: 21, drift: -30 },
    { size: 5, left: 57, delay: 10.4, duration: 23, drift: 15 },
    { size: 3, left: 70, delay: 11.9, duration: 16, drift: -20 },
    { size: 8, left: 92, delay: 6.5, duration: 26, drift: 40 },
    { size: 4, left: 45, delay: 13.1, duration: 20, drift: -15 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* 0. Subtle Dotted Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12] dark:opacity-[0.06] transition-opacity duration-1000"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* 1. Large Blurry Ambient Mesh Blobs */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30 transition-opacity duration-1000">
        {/* Blob 1: Pink/Purple */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-900/20 dark:to-pink-900/10 filter blur-[120px] mix-blend-multiply dark:mix-blend-screen"
          style={{ top: '10%', left: '15%' }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob 2: Cyan/Blue */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-900/20 dark:to-blue-900/10 filter blur-[140px] mix-blend-multiply dark:mix-blend-screen"
          style={{ bottom: '15%', right: '10%' }}
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blob 3: Emerald/Indigo */}
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-emerald-300 to-indigo-400 dark:from-emerald-900/10 dark:to-indigo-900/20 filter blur-[110px] mix-blend-multiply dark:mix-blend-screen"
          style={{ top: '45%', right: '40%' }}
          animate={{
            x: [0, 30, -40, 0],
            y: [0, 40, -50, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 2. Glassmorphic Geometric Outline Shapes with Parallax */}
      <div className="absolute inset-0 z-10">
        
        {/* Shape 1: Curved 4-pointed Sparkle (Far Depth) */}
        <motion.div
          style={{ x: offsetFarX, y: offsetFarY }}
          className="absolute top-[18%] left-[8%] z-[1]"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 90, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 flex items-center justify-center bg-white/5 dark:bg-white/0 border border-white/10 dark:border-white/5 rounded-xl backdrop-blur-[2px] shadow-sm text-primary/10 dark:text-blue-500/10"
          >
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
              <path 
                d="M24 0c0 13.255-10.745 24-24 24 13.255 0 24 10.745 24 24 0-13.255 10.745-24 24-24-13.255 0-24-10.745-24-24z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Shape 2: Outline Hexagon (Mid Depth) */}
        <motion.div
          style={{ x: offsetMidX, y: offsetMidY }}
          className="absolute top-[32%] right-[12%] z-[3]"
        >
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, 60, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-16 h-16 flex items-center justify-center bg-white/5 dark:bg-white/0 border border-white/10 dark:border-white/5 rounded-xl backdrop-blur-[2px] shadow-sm text-secondary/15 dark:text-purple-500/15"
          >
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
              <path 
                d="M24 4 L41 14 L41 34 L24 44 L7 34 L7 14 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Shape 3: Outline Triangle (Close Depth) */}
        <motion.div
          style={{ x: offsetCloseX, y: offsetCloseY }}
          className="absolute bottom-[28%] left-[18%] z-[5]"
        >
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [45, 75, 45] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-14 h-14 flex items-center justify-center bg-white/5 dark:bg-white/0 border border-white/10 dark:border-white/5 rounded-xl backdrop-blur-[2px] shadow-sm text-accent/15 dark:text-cyan-500/15"
          >
            <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
              <path 
                d="M24 6 L42 38 L6 38 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Shape 4: Concentric Rings (Mid Depth) */}
        <motion.div
          style={{ x: offsetMidX, y: offsetMidY }}
          className="absolute bottom-[16%] right-[22%] z-[2]"
        >
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, -45, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="w-16 h-16 flex items-center justify-center bg-white/5 dark:bg-white/0 border border-white/10 dark:border-white/5 rounded-xl backdrop-blur-[2px] shadow-sm text-primary/10 dark:text-indigo-500/10"
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.0" strokeDasharray="3 3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Shape 5: Floating Crosses (Close Depth) */}
        <motion.div
          style={{ x: offsetCloseX, y: offsetCloseY }}
          className="absolute top-[55%] left-[32%] z-[4]"
        >
          <motion.div
            animate={{ y: [0, 18, 0], rotate: [0, 180, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 flex items-center justify-center bg-white/5 dark:bg-white/0 border border-white/10 dark:border-white/5 rounded-lg backdrop-blur-[2px] shadow-sm text-secondary/15 dark:text-purple-500/15"
          >
            <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
              <path d="M24 12 v24 M12 24 h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Shape 6: Small Sparkle (Far Depth) */}
        <motion.div
          style={{ x: offsetFarX, y: offsetFarY }}
          className="absolute top-[48%] right-[35%] z-[1]"
        >
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="w-10 h-10 flex items-center justify-center bg-white/5 dark:bg-white/0 border border-white/10 dark:border-white/5 rounded-lg backdrop-blur-[1px] shadow-sm text-accent/15 dark:text-cyan-500/15"
          >
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path 
                d="M24 0c0 13.255-10.745 24-24 24 13.255 0 24 10.745 24 24 0-13.255 10.745-24 24-24-13.255 0-24-10.745-24-24z" 
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Floating Light Particles (Drifting upwards) */}
      <div className="absolute inset-0 z-20">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/15 dark:bg-blue-400/10 rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              bottom: -20,
            }}
            animate={{
              y: [0, '-110vh'],
              x: [0, p.drift, 0],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Background3D;
