import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Card from '../components/Card';
import {
  Newspaper, Calendar, User, ArrowRight,
  BookOpen, TrendingUp, X, Tag, Search, Filter
} from 'lucide-react';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import ShareButtons from '../components/ShareButtons';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

/* ─── Variants ──────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { y: 28, opacity: 0, filter: 'blur(4px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { type: 'spring' as const, stiffness: 80, damping: 16 } },
};

const cardVariants = {
  hidden: { y: 24, opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    y: 0, opacity: 1, scale: 1,
    transition: { type: 'spring' as const, stiffness: 90, damping: 18, delay: i * 0.07 },
  }),
};

/* ─── Helpers ───────────────────────────────────────────────────────────────── */
function useFormatDate(language: string) {
  return (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(
        language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US',
        { year: 'numeric', month: 'short', day: 'numeric' },
      );
    } catch {
      return dateStr;
    }
  };
}

/* ─── Article Card (grid item) ──────────────────────────────────────────────── */
const ArticleCard: React.FC<{ article: any; index: number; onClick: () => void }> = ({
  article, index, onClick,
}) => {
  const { language } = useLanguage();
  const formatDate = useFormatDate(language);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md
                 hover:shadow-2xl transition-shadow duration-300 flex flex-col
                 border border-gray-100 dark:border-white/8 cursor-pointer h-full"
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={article.title}
    >
      {/* Top gradient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-primary to-secondary
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Image — fixed aspect ratio so cards are uniform */}
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ aspectRatio: '16/9' }}>
        {article.color && (
          <div className={`absolute inset-0 bg-gradient-to-t ${article.color}
                           opacity-25 mix-blend-multiply z-10 pointer-events-none`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none" />
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=60';
          }}
        />

        {/* Category badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-flex items-center gap-1 bg-white/92 dark:bg-gray-900/90
                           backdrop-blur-sm text-primary dark:text-blue-300
                           text-[11px] font-bold px-2.5 py-1 rounded-full
                           shadow-sm border border-primary/10">
            <Tag className="w-3 h-3" />
            {article.category}
          </span>
        </div>

        {/* Read-time badge */}
        <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1 bg-black/65 backdrop-blur-sm
                           text-white text-[11px] px-2.5 py-1 rounded-full">
            <BookOpen className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3">
        {/* Title */}
        <h3 className="font-black text-sm sm:text-base text-gray-800 dark:text-white
                       line-clamp-2 leading-snug
                       group-hover:text-primary dark:group-hover:text-blue-400
                       transition-colors duration-200">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400
                      line-clamp-3 leading-relaxed flex-1">
          {article.excerpt || article.summary}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500
                        pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{formatDate(article.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{article.readTime || '5 دقائق'}</span>
          </div>
        </div>

        {/* CTA button */}
        <motion.button
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          className="relative w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm
                     overflow-hidden flex items-center justify-center gap-2
                     bg-gray-50 dark:bg-gray-700/60 text-gray-700 dark:text-gray-200
                     border border-gray-100 dark:border-gray-600
                     group/btn hover:border-primary/30 transition-colors duration-200"
          whileTap={{ scale: 0.97 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary
                           opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 group-hover/btn:text-white transition-colors duration-200">
            {t('articlesPageFull.items.readArticle', language) || 'اقرأ المقال'}
          </span>
          <motion.span
            className="relative z-10 group-hover/btn:text-white transition-colors duration-200"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight className={cn('w-3.5 h-3.5', language === 'ar' ? 'rotate-180' : '')} />
          </motion.span>
        </motion.button>
      </div>
    </motion.article>
  );
};

/* ─── Featured Article (hero card) ─────────────────────────────────────────── */
const FeaturedArticle: React.FC<{ article: any; onClick: () => void }> = ({ article, onClick }) => {
  const { language } = useLanguage();
  const formatDate = useFormatDate(language);

  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden
                 shadow-xl border border-gray-100 dark:border-white/8 cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: '0 24px 48px rgba(99,102,241,0.15)' }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-primary to-secondary" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ minHeight: '240px' }}>
          {article.color && (
            <div className={`absolute inset-0 bg-gradient-to-t ${article.color}
                             opacity-25 mix-blend-multiply z-10 pointer-events-none`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            style={{ minHeight: '240px' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=70';
            }}
          />

          {/* Badges */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
            <motion.span
              className="bg-white/92 dark:bg-gray-900/90 backdrop-blur-sm
                         text-primary dark:text-blue-300 text-xs font-bold
                         px-3 py-1.5 rounded-full shadow-md border border-primary/10"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              {article.category}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-primary to-secondary text-white
                         text-[10px] font-black px-2.5 py-1 rounded-full shadow-md"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              ⭐ {t('articlesPageFull.items.featured', language) || 'مميز'}
            </motion.span>
          </div>

          {/* Read time */}
          <div className="absolute bottom-3 left-3 z-20">
            <span className="inline-flex items-center gap-1 bg-black/65 backdrop-blur-sm
                             text-white text-[11px] px-2.5 py-1 rounded-full">
              <BookOpen className="w-3 h-3" />
              {article.readTime || '5 دقائق'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 flex flex-col justify-center gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800 dark:text-white
                         group-hover:text-primary dark:group-hover:text-blue-400
                         transition-colors duration-200 leading-snug">
            {article.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
            {article.excerpt || article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(article.date)}</span>
            </div>
            {article.author && (
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>{article.author}</span>
              </div>
            )}
          </div>

          <motion.button
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="relative mt-1 inline-flex items-center justify-center gap-2
                       bg-gradient-to-r from-primary to-secondary text-white
                       px-5 py-3 rounded-xl font-bold text-sm
                       shadow-lg shadow-primary/25 overflow-hidden
                       w-full sm:w-auto sm:self-start"
            whileHover={{ scale: 1.03, boxShadow: '0 14px 30px rgba(99,102,241,0.35)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            />
            <span className="relative z-10">{t('articlesPageFull.items.readMore', language) || 'اقرأ أكثر'}</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className={cn('w-4 h-4', language === 'ar' ? 'rotate-180' : '')} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Article Modal ─────────────────────────────────────────────────────────── */
const ArticleModal: React.FC<{ article: any; onClose: () => void }> = ({ article, onClose }) => {
  const { language } = useLanguage();
  const formatDate = useFormatDate(language);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[100]
                 flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 24, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-3xl
                   max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '200px' }}>
          {article.color && (
            <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-50 mix-blend-multiply z-10`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />

          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-3 left-3 z-20 bg-white/90 dark:bg-gray-800/90
                       hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full
                       transition-colors duration-200 shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
          >
            <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </motion.button>

          {/* Category */}
          <div className="absolute bottom-3 right-3 z-20">
            <span className="bg-white/92 dark:bg-gray-800/90 backdrop-blur-sm
                             text-primary dark:text-blue-300 text-xs font-bold
                             px-3 py-1.5 rounded-full shadow-md">
              {article.category}
            </span>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 custom-scrollbar">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800
                         dark:text-white mb-4 leading-snug">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500
                          dark:text-gray-400 mb-5 pb-5 border-b border-gray-100 dark:border-gray-700">
            {article.author && (
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{article.readTime || '5 دقائق'}</span>
            </div>
          </div>

          {/* Share */}
          <div className="mb-5 pb-5 border-b border-gray-100 dark:border-gray-700">
            <ShareButtons title={article.title} />
          </div>

          {/* Body */}
          <div className="prose prose-sm sm:prose-base max-w-none dark:prose-invert
                          prose-headings:text-gray-800 dark:prose-headings:text-white
                          prose-p:text-gray-600 dark:prose-p:text-gray-300
                          prose-a:text-primary hover:prose-a:text-secondary
                          prose-strong:text-gray-900 dark:prose-strong:text-white
                          prose-ul:list-disc prose-ul:pl-5
                          prose-ol:list-decimal prose-ol:pl-5
                          prose-pre:overflow-x-auto prose-pre:rounded-xl">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Close footer */}
          <div className="mt-8 pt-5 border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-800
                         text-gray-700 dark:text-gray-300
                         hover:bg-gray-200 dark:hover:bg-gray-700
                         rounded-xl font-semibold transition-all duration-200"
            >
              {language === 'ar' ? 'إغلاق' : language === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Stat Card ─────────────────────────────────────────────────────────────── */
const StatCard: React.FC<{
  icon: React.ElementType; value: string; labelKey: string;
  gradient: string; iconColor: string; textColor: string; subColor: string;
  delay: number;
}> = ({ icon: Icon, value, labelKey, gradient, iconColor, textColor, subColor, delay }) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-3 sm:p-6 text-center
                  shadow-sm border border-white/50 dark:border-white/5`}
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.03 }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        <Icon className={`w-6 h-6 sm:w-10 sm:h-10 ${iconColor} mx-auto mb-1.5 sm:mb-3`} />
      </motion.div>
      <h3 className={`text-xl sm:text-3xl font-black ${textColor}`}>{value}</h3>
      <p className={`${subColor} font-medium text-[11px] sm:text-sm mt-0.5`}>
        {t(labelKey, language)}
      </p>
    </motion.div>
  );
};

/* ─── Main Articles Page ────────────────────────────────────────────────────── */
const Articles: React.FC = () => {
  const { language } = useLanguage();

  const localizedArticles = useMemo(() => {
    const data = t('articlesPageFull.data', language);
    return Array.isArray(data) ? data : [];
  }, [language]);

  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const allLabel = (t('articlesPageFull.search.all', language) as string) || 'الكل';

  React.useEffect(() => {
    setSelectedCategory(allLabel);
  }, [allLabel]);

  const categories = useMemo(() => {
    const cats = localizedArticles.map((a: any) => a.category as string);
    return Array.from(new Set(cats));
  }, [localizedArticles]);

  const filteredArticles = useMemo(() => {
    return localizedArticles.filter((article: any) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        q === '' ||
        article.title?.toLowerCase().includes(q) ||
        article.excerpt?.toLowerCase().includes(q) ||
        article.summary?.toLowerCase().includes(q) ||
        article.category?.toLowerCase().includes(q);
      const matchesCategory =
        selectedCategory === allLabel || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, localizedArticles, allLabel]);

  const openArticle = (article: any) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = '';
  };

  const stats = [
    {
      icon: BookOpen,
      value: `${localizedArticles.length}+`,
      labelKey: 'articlesPageFull.stats.articles',
      gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      textColor: 'text-blue-700 dark:text-blue-400',
      subColor: 'text-blue-600 dark:text-blue-300',
    },
    {
      icon: TrendingUp,
      value: '20K+',
      labelKey: 'articlesPageFull.stats.reads',
      gradient: 'from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20',
      iconColor: 'text-green-600 dark:text-green-400',
      textColor: 'text-green-700 dark:text-green-400',
      subColor: 'text-green-600 dark:text-green-300',
    },
    {
      icon: User,
      value: '3.5K+',
      labelKey: 'articlesPageFull.stats.followers',
      gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      textColor: 'text-purple-700 dark:text-purple-400',
      subColor: 'text-purple-600 dark:text-purple-300',
    },
  ];

  const featuredArticle = filteredArticles[0] ?? null;
  const restArticles = filteredArticles.slice(1);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10 pb-12"
      >
        {/* ── Hero ── */}
        <motion.div variants={itemVariants}>
          <Card className="text-center bg-gradient-to-br from-primary/5 via-white/50 to-secondary/5
                           dark:from-primary/10 dark:via-gray-800/60 dark:to-secondary/10
                           border-2 border-primary/10 dark:border-primary/20 overflow-hidden relative">
            <motion.div
              className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-secondary/10 blur-3xl pointer-events-none"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <div className="relative z-10 space-y-4 py-2">
              <motion.div
                className="inline-block p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-xl shadow-primary/30"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
              >
                <Newspaper className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </motion.div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent
                             bg-gradient-to-r from-primary to-secondary leading-tight">
                {t('articlesPageFull.hero.title', language) || 'المقالات'}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-dark-color/70 dark:text-gray-300
                            max-w-2xl mx-auto leading-relaxed">
                {t('articlesPageFull.hero.description', language) || 'مقالات تقنية وبرمجية مفيدة'}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {stats.map((s, i) => (
              <StatCard key={s.labelKey} {...s} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* ── Search + Filter ── */}
        <motion.div variants={itemVariants} className="space-y-4">
          {/* Search input */}
          <div className="relative">
            <Search
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              style={{ [language === 'ar' ? 'right' : 'left']: '14px' }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                (t('articlesPageFull.search.placeholder', language) as string) || 'ابحث عن مقال...'
              }
              className={cn(
                'w-full py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
                'rounded-xl text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400',
                'focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50',
                'transition-all duration-200',
                language === 'ar' ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4',
              )}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            />
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            <motion.button
              key="all"
              onClick={() => setSelectedCategory(allLabel)}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200',
                selectedCategory === allLabel
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
              )}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-3 h-3" />
              {allLabel}
            </motion.button>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200',
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600',
                )}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Featured Article ── */}
        {featuredArticle && (
          <motion.div variants={itemVariants}>
            <FeaturedArticle article={featuredArticle} onClick={() => openArticle(featuredArticle)} />
          </motion.div>
        )}

        {/* ── Articles Grid ── */}
        {restArticles.length > 0 && (
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {restArticles.map((article: any, i: number) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={i}
                  onClick={() => openArticle(article)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Empty state ── */}
        {filteredArticles.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-16 text-gray-500 dark:text-gray-400"
          >
            <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold">
              {t('articlesPageFull.search.noResults', language) || 'لم يتم العثور على مقالات'}
            </p>
          </motion.div>
        )}

        {/* ── WhatsApp & CTA ── */}
        <motion.div variants={itemVariants}>
          <WhatsappChannelLinks />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CallToAction />
        </motion.div>
      </motion.div>

      {/* ── Article Modal ── */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal article={selectedArticle} onClose={closeArticle} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Articles;
