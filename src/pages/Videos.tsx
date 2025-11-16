import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { videosContent } from '../constants';
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

const VideoCard: React.FC<{ title: string; videoId: string }> = ({ title, videoId }) => (
    <Card className="text-center p-4">
        <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe 
                src={`https://www.youtube.com/embed/${videoId}`} 
                title={title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full rounded-lg"
            ></iframe>
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
    </Card>
);

const Videos: React.FC = () => {
  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div variants={itemVariants}>
            <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <h1 className="text-4xl font-bold text-dark-color">📹 أهم الفيديوهات التعليمية</h1>
                <p className="text-lg text-dark-color/70 mt-4">ستجد هنا أهم الفيديوهات التعليمية في مجال البرمجة والتقنية:</p>
            </Card>
        </motion.div>

        <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            {videosContent.map((video, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <VideoCard {...video} />
                </motion.div>
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

export default Videos;
