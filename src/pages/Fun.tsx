import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { funContent } from '../constants';
import { cn } from '../lib/utils';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import CallToAction from '../components/CallToAction';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' }
  }
};

const buttonColors: { [key: string]: string } = {
    primary: 'bg-gradient-to-r from-primary to-secondary',
    success: 'bg-gradient-to-r from-green-500 to-emerald-500',
    warning: 'bg-gradient-to-r from-amber-500 to-orange-500',
    danger: 'bg-gradient-to-r from-red-500 to-rose-500',
};

const Fun: React.FC = () => {
  return (
    <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants}>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <h1 className="text-4xl font-bold text-dark-color">{funContent.title}</h1>
            <p className="text-lg text-dark-color/70 mt-4">{funContent.description}</p>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {funContent.games.map((game, index) => (
              <motion.a 
                  key={index}
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("text-white px-8 py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-3 text-lg", buttonColors[game.color] || buttonColors.primary)}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
              >
                  <game.IconComponent className="w-6 h-6" />
                  {game.title}
              </motion.a>
          ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default Fun;
