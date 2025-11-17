import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import SocialLinks from '../components/SocialLinks';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { aboutContent } from '../constants';
import SkillsCard from '../components/SkillsCard';
import Timeline from '../components/Timeline';
import CallToAction from '../components/CallToAction';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

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

const About: React.FC = () => {
  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <motion.div 
                className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-2xl mx-auto mb-8 bg-white flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <span className="text-6xl font-bold text-primary">HA</span>
            </motion.div>
            <h1 className="text-4xl font-bold text-dark-color">{aboutContent.name}</h1>
            <div className="my-4 inline-block">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold shadow-md text-base">
                    {aboutContent.role}
                </span>
            </div>
            <p 
              className="text-lg leading-relaxed text-dark-color/70 max-w-3xl mx-auto mt-6"
              dangerouslySetInnerHTML={{ __html: aboutContent.description }}
            />
            <SocialLinks />
        </Card>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3 space-y-8">
            <motion.div variants={itemVariants}>
                <Card>
                    <h3 className="text-2xl font-bold text-primary text-center mb-8">🚀 مقتطف من مسيرتي</h3>
                    <Timeline items={aboutContent.journey} />
                </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Card>
                    <h3 className="text-2xl font-bold text-primary text-center mb-8">{aboutContent.philosophy.title}</h3>
                    <div className="space-y-6">
                        {aboutContent.philosophy.points.map((point, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2 rounded-full mt-1">
                                    <point.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-dark-color">{point.title}</h4>
                                    <p className="text-dark-color/70">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </motion.div>
        </div>
        <div className="lg:col-span-2">
            <motion.div variants={itemVariants}>
                <SkillsCard skills={aboutContent.skills} />
            </motion.div>
        </div>
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

export default About;
