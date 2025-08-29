import React from 'react';
import { motion } from 'framer-motion';
import { articlesContent } from '../constants';
import { User, Calendar } from 'lucide-react';

type Article = typeof articlesContent.articles[0];

interface ArticleCardProps {
  article: Article;
  onReadMore: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadMore }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-2xl"
      whileHover={{ y: -5 }}
    >
      <div className="overflow-hidden relative">
        <img src={article.image} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
          {article.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-dark-color mb-3">{article.title}</h3>
        <p className="text-dark-color/70 mb-4 flex-grow">{article.summary}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-4 pt-4 border-t border-border-color">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{article.date}</span>
          </div>
        </div>
        <button 
          onClick={onReadMore}
          className="mt-6 w-full bg-primary text-white font-bold py-3 rounded-lg transition-colors duration-300 hover:bg-primary-dark"
        >
          اقرأ المزيد
        </button>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
