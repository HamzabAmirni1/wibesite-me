import React from "react";
import { motion } from "framer-motion";
import { Calendar, BookOpen, ArrowRight, Tag } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../i18n";

interface Article {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  color?: string;
}

interface ArticleCardProps {
  article: Article;
  onReadMore: () => void;
  index?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadMore,
  index = 0,
}) => {
  const { language } = useLanguage();

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(
        language === "ar" ? "ar-SA" : language === "fr" ? "fr-FR" : "en-US",
        { year: "numeric", month: "short", day: "numeric" },
      );
    } catch {
      return dateStr;
    }
  };

  return (
    <motion.article
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-gray-100 dark:border-white/8 cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      onClick={onReadMore}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onReadMore()}
      aria-label={article.title}
    >
      {/* Top gradient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9] flex-shrink-0">
        {/* Color overlay from article */}
        {article.color && (
          <div
            className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-30 mix-blend-multiply z-10 pointer-events-none`}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none" />

        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=60";
          }}
        />

        {/* Category badge */}
        <div className="absolute top-3 right-3 z-20">
          <motion.span
            className="inline-flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-primary dark:text-blue-300 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-primary/10"
            whileHover={{ scale: 1.05 }}
          >
            <Tag className="w-3 h-3" />
            {article.category}
          </motion.span>
        </div>

        {/* Read time badge */}
        <div className="absolute bottom-3 left-3 z-20">
          <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <BookOpen className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Title */}
        <h3 className="font-bold text-base sm:text-lg text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-200 leading-snug">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed flex-1 mb-4">
          {article.excerpt}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{formatDate(article.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onReadMore();
          }}
          className="relative w-full py-2.5 rounded-xl font-semibold text-sm overflow-hidden flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-700/60 text-gray-700 dark:text-gray-200 group/btn border border-gray-100 dark:border-gray-600 hover:border-primary/30 transition-colors duration-200"
          whileTap={{ scale: 0.97 }}
        >
          {/* Gradient fill on hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

          <span className="relative z-10 group-hover/btn:text-white transition-colors duration-200">
            {t("articlesPageFull.items.readArticle", language)}
          </span>
          <motion.span
            className="relative z-10 group-hover/btn:text-white transition-colors duration-200"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight
              className={`w-4 h-4 ${language === "ar" ? "rotate-180" : ""}`}
            />
          </motion.span>
        </motion.button>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
