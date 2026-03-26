import React from 'react';
import { motion } from 'framer-motion';
import { articlesContent } from '../constants';
import { ArrowRight, User, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

type Article = typeof articlesContent.articles[0];

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
    const { language } = useLanguage();
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6">
                    <button onClick={onBack} className="flex items-center gap-2 text-primary font-bold mb-6 hover:underline">
                        <ArrowRight size={20} />
                        <span>{t('commonTexts.back', language)}</span>
                    </button>
                </div>
                <img src={article.image} alt={article.title} className="w-full h-48 md:h-72 object-cover" />
                <div className="p-6 sm:p-10">
                    <div className="mb-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">{article.category}</span>
                        <h1 className="text-3xl md:text-4xl font-bold text-dark-color mt-4">{article.title}</h1>
                        <div className="flex items-center gap-6 text-sm text-gray-500 mt-4 flex-wrap">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{article.date}</span>
                            </div>
                        </div>
                    </div>
                    
                    <article className="prose prose-lg max-w-none prose-a:text-primary prose-a:font-semibold hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-ol:text-dark-color/90 prose-ul:text-dark-color/90" dangerouslySetInnerHTML={{ __html: article.content }} />

                    <div className="mt-10 pt-6 border-t border-border-color">
                        <h4 className="font-bold text-lg mb-3">{t('articlesPageTranslations.tags', language)}</h4>
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map(tag => (
                                <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <Tag size={14} /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ArticleDetail;
