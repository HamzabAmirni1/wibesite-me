import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import { articlesContent } from '../constants';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { Search } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import ArticleDetail from '../components/ArticleDetail';
import CallToAction from '../components/CallToAction';

const Articles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    if (!searchTerm) return articlesContent.articles;
    return articlesContent.articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const selectedArticle = useMemo(() => 
    articlesContent.articles.find(a => a.id === selectedArticleId),
    [selectedArticleId]
  );

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        {selectedArticle ? (
          <ArticleDetail 
            key={selectedArticle.id} 
            article={selectedArticle} 
            onBack={() => setSelectedArticleId(null)} 
          />
        ) : (
          <motion.div 
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <h1 className="text-4xl font-bold text-dark-color">{articlesContent.title}</h1>
              <p className="text-lg text-dark-color/70 mt-4 max-w-3xl mx-auto">{articlesContent.description}</p>
            </Card>

            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن مقال..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pr-12 text-lg border-2 border-border-color rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} onReadMore={() => setSelectedArticleId(article.id)} />
              ))}
            </div>
            
            {filteredArticles.length === 0 && (
              <p className="text-center text-dark-color/70 text-lg">لا توجد مقالات مطابقة لبحثك.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <CallToAction />

      <WhatsappChannelLinks />
    </div>
  );
};

export default Articles;
