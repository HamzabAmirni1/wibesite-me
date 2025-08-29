import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { botsContent } from '../constants';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { cn } from '../lib/utils';
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

const BotCard: React.FC<typeof botsContent.bots[0]> = ({ IconComponent, title, description, url, buttonText, color }) => (
    <Card className="text-center flex flex-col h-full">
        <div className="mb-6 flex justify-center items-center h-20">
            <IconComponent className="text-6xl text-dark-color/80" />
        </div>
        <h3 className="text-2xl font-bold text-dark-color mb-3">{title}</h3>
        <p className="text-dark-color/70 mb-6 flex-grow">{description}</p>
        <motion.a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn("mt-auto inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-semibold shadow-lg", buttonColors[color] || buttonColors.primary)}
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {buttonText}
        </motion.a>
    </Card>
);

const Bots: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
        <motion.div variants={itemVariants}>
            <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <h1 className="text-4xl font-bold text-dark-color">{botsContent.title}</h1>
                <p className="text-lg text-dark-color/70 mt-4">{botsContent.description}</p>
            </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {botsContent.bots.map((bot, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <BotCard {...bot} />
                </motion.div>
            ))}
        </div>

        <motion.div variants={itemVariants}>
            <CallToAction />
        </motion.div>

        <motion.div variants={itemVariants}>
            <WhatsappChannelLinks />
        </motion.div>
    </motion.div>
  );
};

export default Bots;
