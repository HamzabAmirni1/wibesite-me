import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { programmingContent } from '../constants';
import { CheckCircle } from 'lucide-react';
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

const Programming: React.FC = () => {
  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <h1 className="text-4xl font-bold text-dark-color">{programmingContent.title}</h1>
            <p className="text-lg text-dark-color/70 mt-4 max-w-3xl mx-auto">{programmingContent.description}</p>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <h3 className="text-2xl font-bold text-primary text-center mb-6">{programmingContent.benefitsTitle}</h3>
          <ul className="text-lg text-dark-color/80 space-y-4">
              {programmingContent.benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
            <h3 className="text-2xl font-bold text-primary text-center mb-6">{programmingContent.exampleTitle}</h3>
            <pre className="bg-dark-color text-white p-6 rounded-lg overflow-x-auto text-left dir-ltr font-mono text-sm">
                <code>
                    {programmingContent.codeSnippet}
                </code>
            </pre>
            <p className="text-center text-primary font-bold mt-4">{programmingContent.codeOutput}</p>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="تطوير البرمجيات" className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
            <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80" alt="البرمجة الحديثة" className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
        </div>
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

export default Programming;
