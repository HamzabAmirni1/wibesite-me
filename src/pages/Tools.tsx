import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { toolsContent } from '../constants';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { Search } from 'lucide-react';
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

interface ToolData {
  IconComponent: any;
  title: string;
  description: string;
  url: string;
  visitText: string;
}

const ToolCard: React.FC<ToolData> = ({ IconComponent, title, description, url, visitText }) => (
  <Card className="text-center flex flex-col h-full dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
    <div className="mb-6 flex justify-center items-center h-20">
      <IconComponent className="text-6xl text-dark-color/80 dark:text-white/80" />
    </div>
    <h3 className="text-2xl font-bold text-dark-color mb-3 dark:text-white">{title}</h3>
    <p className="text-dark-color/70 mb-6 flex-grow dark:text-gray-300">{description}</p>
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-semibold shadow-lg bg-gradient-to-r from-primary to-secondary"
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {visitText}
    </motion.a>
  </Card>
);

const Tools: React.FC = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const translatedTools = useMemo(() => {
    const keys = ['doc', 'chatgpt', 'coursera', 'canva', 'stackoverflow'];
    return toolsContent.tools.map((tool, index) => {
      const toolKey = keys[index] || keys[0];
      const translatedData = t(`toolsPageComprehensive.items.${toolKey}`, language);
      return {
        ...tool,
        title: (translatedData as any)?.title || tool.title,
        description: (translatedData as any)?.description || tool.description,
        tags: (translatedData as any)?.tags || tool.tags,
      };
    });
  }, [language]);

  const filteredTools = useMemo(() => {
    if (!searchTerm) return translatedTools;
    return translatedTools.filter((tool: any) =>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, translatedTools]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 dark:border-primary/20">
          <h1 className="text-4xl font-bold text-dark-color dark:text-white">{t('toolsPageComprehensive.title', language) || toolsContent.title}</h1>
          <p className="text-lg text-dark-color/70 mt-4 dark:text-gray-300">{t('toolsPageComprehensive.description', language) || toolsContent.description}</p>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="relative">
        <input
          type="text"
          placeholder={t('toolsPageComprehensive.searchPlaceholder', language) || 'ابحث عن أداة أو موقع...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 pr-12 text-lg border-2 border-border-color rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool: any, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ToolCard
              {...tool}
              visitText={t('toolsPageComprehensive.visitButton', language) || 'زيارة'}
            />
          </motion.div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <p className="text-center text-dark-color/70 text-lg dark:text-gray-400">{t('toolsPageComprehensive.noResults', language) || 'لا توجد نتائج مطابقة لبحثك.'}</p>
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
