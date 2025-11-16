import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface TimelineProps {
  items: string[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative pr-8">
      <div className="absolute top-0 bottom-0 right-4 w-0.5 bg-border-color" aria-hidden="true"></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative mb-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="absolute top-1 right-4 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-white"></div>
          <div className="bg-light-color-dark/50 p-4 rounded-lg">
            <p className="text-lg text-dark-color/90">{item}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
