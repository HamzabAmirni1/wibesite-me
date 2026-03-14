import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ scrollContainerRef }) => {
  // useScroll + useSpring handles scrolling natively off the main thread when possible
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef
  });

  // A lighter spring for progress so it doesn't cause lagging
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
        willChange: 'transform'
      }}
    />
  );
};

export default ScrollProgress;
