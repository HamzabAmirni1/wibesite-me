import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ scrollContainerRef }) => {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(progress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [scrollContainerRef]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
      }}
    />
  );
};

export default ScrollProgress;
