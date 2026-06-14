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

      {/* 2. Glassmorphic 3D Shapes with Parallax */}
      <div className="absolute inset-0 z-10">
        
        {/* Shape 1: Large Glossy Sphere (Far Depth) */}
        <motion.div
          style={{ x: offsetFarX, y: offsetFarY }}
          className="absolute top-[18%] left-[8%] z-[1]"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-36 h-36 rounded-full bg-gradient-to-br from-white/15 to-white/5 border border-white/20 dark:from-white/5 dark:to-white/0 dark:border-white/10 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.15),_inset_-10px_-10px_20px_rgba(0,0,0,0.1),_8px_16px_32px_rgba(0,0,0,0.08)] backdrop-blur-md"
          />
        </motion.div>

        {/* Shape 2: Glossy Glass Donut (Mid Depth) */}
        <motion.div
          style={{ x: offsetMidX, y: offsetMidY }}
          className="absolute top-[32%] right-[12%] z-[3]"
        >
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-28 h-28 rounded-full border-[22px] border-white/15 dark:border-white/10 bg-transparent shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_8px_16px_32px_rgba(0,0,0,0.06)] backdrop-blur-[4px] relative"
          >
            {/* Gloss highlight overlay */}
            <div className="absolute inset-0 rounded-full border border-white/20 dark:border-white/5 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Shape 3: Translucent Capsule (Close Depth) */}
        <motion.div
          style={{ x: offsetCloseX, y: offsetCloseY }}
          className="absolute bottom-[28%] left-[18%] z-[5]"
        >
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [45, 55, 45] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-14 h-28 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/30 dark:from-white/10 dark:to-white/0 dark:border-white/10 shadow-[inset_8px_8px_16px_rgba(255,255,255,0.2),_8px_16px_32px_rgba(0,0,0,0.1)] backdrop-blur-sm"
          />
        </motion.div>

        {/* Shape 4: Mid-size Sphere (Mid Depth) */}
        <motion.div
          style={{ x: offsetMidX, y: offsetMidY }}
          className="absolute bottom-[16%] right-[22%] z-[2]"
        >
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-white/15 to-white/2 border border-white/25 dark:from-white/5 dark:to-white/0 dark:border-white/10 shadow-[inset_6px_6px_12px_rgba(255,255,255,0.15),_inset_-6px_-6px_12px_rgba(0,0,0,0.08),_6px_12px_24px_rgba(0,0,0,0.06)] backdrop-blur-[6px]"
          />
        </motion.div>

        {/* Shape 5: Small Floating Ring (Close Depth) */}
        <motion.div
          style={{ x: offsetCloseX, y: offsetCloseY }}
          className="absolute top-[55%] left-[32%] z-[4]"
        >
          <motion.div
            animate={{ y: [0, 22, 0], rotate: [0, -360, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 rounded-full border-[10px] border-white/20 dark:border-white/10 bg-transparent shadow-[inset_2px_2px_4px_rgba(255,255,255,0.15),_4px_8px_16px_rgba(0,0,0,0.08)] backdrop-blur-[3px]"
          />
        </motion.div>

        {/* Shape 6: Tiny Orbiting Sphere (Far Depth) */}
        <motion.div
          style={{ x: offsetFarX, y: offsetFarY }}
          className="absolute top-[48%] right-[35%] z-[1]"
        >
          <motion.div
            animate={{ y: [0, -12, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 dark:from-white/5 dark:to-white/0 dark:border-white/10 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.2),_4px_8px_16px_rgba(0,0,0,0.05)] backdrop-blur-[2px]"
          />
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
