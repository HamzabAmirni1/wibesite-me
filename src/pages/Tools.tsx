import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { toolsContent } from '../constants';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { Search } from 'lucide-react';
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

const ToolCard: React.FC<typeof toolsContent.tools[0]> = ({ IconComponent, title, description, url }) => (
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
            className="mt-auto inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-semibold shadow-lg bg-gradient-to-r from-primary to-secondary"
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            زيارة
        </motion.a>
    </Card>
);

const Tools: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchTerm) return toolsContent.tools;
    return toolsContent.tools.filter(tool => 
        tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
        <motion.div variants={itemVariants}>
            <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <h1 className="text-4xl font-bold text-dark-color">{toolsContent.title}</h1>
                <p className="text-lg text-dark-color/70 mt-4">{toolsContent.description}</p>
            </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
            <input
                type="text"
                placeholder="ابحث عن أداة أو موقع..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pr-12 text-lg border-2 border-border-color rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <ToolCard {...tool} />
                </motion.div>
            ))}
        </div>
        
        {filteredTools.length === 0 && (
            <p className="text-center text-dark-color/70 text-lg">لا توجد نتائج مطابقة لبحثك.</p>
        )}

        <motion.div variants={itemVariants}>
            <CallToAction />
        </motion.div>

        <motion.div variants={itemVariants}>
            <WhatsappChannelLinks />
        </motion.div>
    </motion.div>
  );
};

export default Tools;
