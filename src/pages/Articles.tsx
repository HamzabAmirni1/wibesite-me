import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import { Newspaper, Calendar, User, ArrowRight, BookOpen, TrendingUp, X } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import ArticleSearch from '../components/ArticleSearch';
import CategoryFilter from '../components/CategoryFilter';
import ShareButtons from '../components/ShareButtons';
import { cn } from '../lib/utils';

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50 }
  }
};

const Articles: React.FC = () => {
  const { language } = useLanguage();

  // Get articles data from translations
  const localizedArticles = useMemo(() => {
    const data = t('articlesPageFull.data', language);
    return Array.isArray(data) ? data : [];
  }, [language]);

  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(t('articlesPageFull.search.all', language));

  // Get unique categories
  const categories = useMemo(() => {
    const cats = localizedArticles.map((article: any) => article.category);
    return Array.from(new Set(cats));
  }, [localizedArticles]);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return localizedArticles.filter((article: any) => {
      const matchesSearch = searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === t('articlesPageFull.search.all', language) || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, localizedArticles, language]);

  const openArticle = (article: any) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'fr' ? 'fr-FR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12 pb-12"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10 dark:from-primary/10 dark:to-secondary/10 dark:border-primary/20">
            <div className="space-y-4">
              <div className="inline-block p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl">
                <Newspaper className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {t('articlesPageFull.hero.title', language)}
              </h1>
              <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
                {t('articlesPageFull.hero.description', language)}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center dark:from-blue-900/30 dark:to-blue-800/20">
              <BookOpen className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-400">{localizedArticles.length}+</h3>
              <p className="text-blue-600 font-medium dark:text-blue-300">{t('articlesPageFull.stats.articles', language)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center dark:from-green-900/30 dark:to-green-800/20">
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-green-700 dark:text-green-400">20K+</h3>
              <p className="text-green-600 font-medium dark:text-green-300">{t('articlesPageFull.stats.reads', language)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center dark:from-purple-900/30 dark:to-purple-800/20">
              <User className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-400">3.5K+</h3>
              <p className="text-purple-600 font-medium dark:text-purple-300">{t('articlesPageFull.stats.followers', language)}</p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <ArticleSearch onSearch={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Results count */}
          {(searchQuery || selectedCategory !== t('articlesPageFull.search.all', language)) && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-600 dark:text-gray-400"
            >
              {t('articlesPageFull.search.found', language)} <span className="font-bold text-primary">{filteredArticles.length}</span> {t('articlesPageFull.search.articles', language)}
            </motion.p>
          )}
        </motion.div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <motion.div variants={itemVariants}>
            <div onClick={() => openArticle(filteredArticles[0])} className="cursor-pointer group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br ${filteredArticles[0].color}`}>
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <img
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 mix-blend-overlay z-0"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
                    />
                    <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full backdrop-blur-sm">
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{filteredArticles[0].category}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 w-fit dark:bg-primary/20">
                      {t('articlesPageFull.items.featured', language)}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors dark:text-white">
                      {filteredArticles[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(filteredArticles[0].date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{filteredArticles[0].readTime}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openArticle(filteredArticles[0]);
                      }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 w-fit"
                    >
                      {t('articlesPageFull.items.readMore', language)}
                      <ArrowRight className={cn("w-5 h-5", language === 'ar' ? "rotate-180" : "")} />
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center text-dark-color mb-8 dark:text-white">
            {t('articlesPageFull.items.latest', language)}
          </h2>
          {filteredArticles.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article: any) => (
                <motion.div
                  key={article.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => openArticle(article)}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-white/10">
                    <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${article.color}`}>
                      <div className="absolute inset-0 bg-black/20 z-10" />
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 mix-blend-overlay z-0"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
                      />
                      <div className="absolute top-3 right-3 z-20 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{article.category}</span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2 dark:text-white">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3 dark:text-gray-300">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <button className="w-full py-2 rounded-lg bg-gray-50 text-gray-700 font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary">
                        {t('articlesPageFull.items.readArticle', language)}
                        <ArrowRight className={cn("w-4 h-4", language === 'ar' ? "rotate-180" : "")} />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : filteredArticles.length === 1 ? (
            <p className="text-center text-gray-500 py-8 dark:text-gray-400">
              {t('articlesPageFull.items.noMore', language)}
            </p>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="inline-block p-6 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                <BookOpen className="w-12 h-12 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">
                {t('articlesPageFull.search.noResults', language)}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {t('articlesPageFull.search.tryDifferent', language)}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(t('articlesPageFull.search.all', language));
                }}
                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition-all duration-300"
              >
                {t('articlesPageFull.search.reset', language)}
              </button>
            </motion.div>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <CallToAction />
        </motion.div>

        <motion.div variants={itemVariants}>
          <WhatsappChannelLinks />
        </motion.div>
      </motion.div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-gray-50 dark:bg-black w-full h-full overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="w-full h-full overflow-y-auto flex flex-col bg-white dark:bg-gray-900 lg:ml-72 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Elegant Modern Header */}
              <div className="w-full bg-white dark:bg-gray-900 pt-24 pb-8 flex justify-center px-6 sm:px-8">
                <div className="w-full max-w-4xl relative">
                  {/* Sticky Close Button */}
                  <div className="fixed top-6 right-6 lg:right-10 z-[60]">
                    <button
                      onClick={closeArticle}
                      className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-xl rounded-full hover:border-primary dark:hover:border-primary transition-all duration-300"
                    >
                      <X className="w-6 h-6 text-gray-500 group-hover:text-primary transition-colors" />
                    </button>
                  </div>

                  <div className="mb-8">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full">
                      {selectedArticle.category}
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 leading-[1.2] tracking-tight">
                    {selectedArticle.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-gray-200">{selectedArticle.author}</p>
                        <p className="text-xs">{language === 'ar' ? 'الكاتب' : language === 'fr' ? 'Auteur' : 'Author'}</p>
                      </div>
                    </div>

                    <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-300">{formatDate(selectedArticle.date)}</p>
                        <p className="text-xs">{language === 'ar' ? 'تاريخ النشر' : language === 'fr' ? 'Publié le' : 'Published'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-300">{selectedArticle.readTime}</p>
                        <p className="text-xs">{language === 'ar' ? 'مدة القراءة' : language === 'fr' ? 'Temps de lecture' : 'Read time'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 w-full bg-white dark:bg-gray-900 flex justify-center px-6 sm:px-8">
                <div className="w-full max-w-4xl pb-24 lg:pb-12">

                  {/* Featured Image */}
                  <div className="mb-12 w-full rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/9] bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
                    />
                  </div>
                  {/* Share Buttons */}
                  <div className="mb-10 pb-8 flex flex-col items-center justify-center gap-3">
                    <span className="hidden">Socials</span>
                  </div>

                  <div className="prose prose-lg md:prose-xl lg:prose-2xl max-w-none dark:prose-invert 
                  prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-extrabold
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-[1.8] prose-p:font-medium
                  prose-a:text-primary hover:prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 dark:prose-strong:text-white 
                  prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2
                  prose-ol:list-decimal prose-ol:pl-5
                  prose-pre:bg-[#1e1e1e] prose-pre:text-[#d4d4d4] prose-pre:p-6 prose-pre:rounded-2xl prose-pre:shadow-xl prose-pre:border prose-pre:border-gray-800
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-4 prose-h2:border-gray-100 dark:prose-h2:border-gray-800
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-img:rounded-3xl prose-img:shadow-xl">
                    <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                  </div>

                  <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col items-center justify-center gap-6 mb-12">
                      <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        {language === 'ar' ? 'هل أعجبك المقال؟ شاركه مع أصدقائك!' : language === 'fr' ? 'Vous avez aimé l\'article ? Partagez-le !' : 'Did you like the article? Share it!'}
                      </p>
                      <ShareButtons title={selectedArticle.title} />
                    </div>

                    <button
                      onClick={closeArticle}
                      className="w-full sm:w-auto mx-auto px-8 py-4 bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-full font-bold hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600 flex items-center justify-center gap-2"
                    >
                      <ArrowRight className={cn("w-5 h-5", language === 'ar' ? "rotate-0" : "rotate-180")} />
                      {language === 'ar' ? 'العودة إلى المقالات' : language === 'fr' ? 'Retour aux articles' : 'Back to Articles'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Articles;
