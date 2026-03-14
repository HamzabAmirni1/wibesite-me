import React from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";

interface TimelineProps {
  items: string[] | unknown;
}

const TimelineItem: React.FC<{
  item: string;
  index: number;
  total: number;
}> = ({ item, index, total }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLast = index === total - 1;

  return (
    <div ref={ref} className="relative flex gap-4 pb-0">
      {/* Left column: dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Animated dot */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 18,
            delay: index * 0.15 + 0.1,
          }}
        >
          {/* Outer pulse ring */}
          <motion.div
            className="absolute w-10 h-10 rounded-full bg-primary/15 dark:bg-primary/25"
            animate={
              isInView ? { scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] } : {}
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2 + 0.5,
            }}
          />
          {/* Dot */}
          <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                delay: index * 0.15 + 0.3,
                type: "spring",
                stiffness: 300,
              }}
            >
              <CheckCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <div className="relative w-[2px] flex-1 min-h-[32px] bg-border-color dark:bg-gray-700/60 overflow-hidden my-1">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-secondary rounded-full"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : { height: "0%" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + 0.35,
                ease: "easeInOut",
              }}
            />
          </div>
        )}
      </div>

      {/* Right column: content card */}
      <motion.div
        className="flex-1 pb-8"
        initial={{ opacity: 0, x: 30, filter: "blur(4px)" }}
        animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{
          duration: 0.55,
          delay: index * 0.15 + 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="group relative bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/60 border border-border-color-light dark:border-white/8 rounded-xl p-4 shadow-sm overflow-hidden"
          whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(99,102,241,0.12)" }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
        >
          {/* Hover top bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-xl" />

          {/* Step number badge */}
          <motion.span
            className="absolute top-3 right-3 text-xs font-bold text-primary/40 dark:text-primary/30 select-none"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          <p className="text-base leading-relaxed text-dark-color/85 dark:text-gray-200 pr-8">
            {item}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ items = [] }) => {
  const itemsArray = Array.isArray(items) ? (items as string[]) : [];
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, margin: "-40px" });

  if (itemsArray.length === 0) return null;

  return (
    <motion.div
      ref={wrapperRef}
      className="relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      {itemsArray.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          index={index}
          total={itemsArray.length}
        />
      ))}
    </motion.div>
  );
};

export default Timeline;
