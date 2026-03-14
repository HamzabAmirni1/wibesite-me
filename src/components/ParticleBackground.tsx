import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ParticleBackground: React.FC = () => {
  const reduced = useReducedMotion();

  // On mobile / reduced-motion → no particles, just static soft orbs
  const particles = useMemo(() => {
    if (reduced) return [];
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 16 + 14,   // slow = less CPU
      delay: Math.random() * 6,
      opacity: Math.random() * 0.18 + 0.04,
      driftX: Math.random() > 0.5 ? 14 : -14,
    }));
  }, [reduced]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Floating particles — desktop only */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/15"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            willChange: 'transform',          // GPU-composited layer
          }}
          animate={{
            y: [0, -28, 0],
            x: [0, p.driftX, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            // No "scale" or "opacity" changes — cheaper
          }}
        />
      ))}

      {/* Static gradient orbs — no animation on mobile, slow on desktop */}
      <div
        className={
          'absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/8 blur-3xl ' +
          (reduced ? '' : 'animate-orb')
        }
      />
      <div
        className={
          'absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-secondary/5 dark:bg-secondary/8 blur-3xl ' +
          (reduced ? '' : 'animate-orb')
        }
        style={{ animationDelay: '4s', animationDirection: 'reverse' }}
      />
    </div>
  );
};

export default ParticleBackground;
