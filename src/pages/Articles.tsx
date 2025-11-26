import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import { Newspaper, Calendar, User, ArrowRight, BookOpen, TrendingUp, X } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import ArticleSearch from '../components/ArticleSearch';
import CategoryFilter from '../components/CategoryFilter';
import ShareButtons from '../components/ShareButtons';
import { articlesData } from '../data/articles';

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
  const [selectedArticle, setSelectedArticle] = useState<typeof articlesData[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = articlesData.map(article => article.category);
    return Array.from(new Set(cats));
  }, []);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return articlesData.filter(article => {
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'الكل' || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const openArticle = (article: typeof articlesData[0]) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
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
          <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
            <div className="space-y-4">
              <div className="inline-block p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl">
                <Newspaper className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                المدونة والمقالات
              </h1>
              <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed">
                مقالات تقنية متخصصة في البرمجة، التطوير، والتكنولوجيا الحديثة.
                تابع آخر المستجدات والنصائح المفيدة.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <BookOpen className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-blue-700">{articlesData.length}+</h3>
              <p className="text-blue-600 font-medium">مقال منشور</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-green-700">20K+</h3>
              <p className="text-green-600 font-medium">قراءة</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <User className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-purple-700">3.5K+</h3>
              <p className="text-purple-600 font-medium">متابع</p>
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
          {(searchQuery || selectedCategory !== 'الكل') && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-600"
            >
              تم العثور على <span className="font-bold text-primary">{filteredArticles.length}</span> مقال
            </motion.p>
          )}
        </motion.div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer" onClick={() => openArticle(filteredArticles[0])}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${filteredArticles[0].color} opacity-40 mix-blend-multiply z-10`} />
                  <img 
                    src={filteredArticles[0].image} 
                    alt={filteredArticles[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="text-xs font-semibold text-gray-700">{filteredArticles[0].category}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 w-fit">
                    مقال مميز
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(filteredArticles[0].date).toLocaleDateString('ar-SA')}</span>
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
                    اقرأ المزيد
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center text-dark-color mb-8">
            أحدث المقالات
          </h2>
          {filteredArticles.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article) => (
                <motion.div
                  key={article.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => openArticle(article)}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-40 mix-blend-multiply z-10`} />
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 z-20 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="text-xs font-semibold text-gray-700">{article.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(article.date).toLocaleDateString('ar-SA')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <button className="w-full py-2 rounded-lg bg-gray-50 text-gray-700 font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        اقرأ المقال
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : filteredArticles.length === 1 ? (
            <p className="text-center text-gray-500 py-8">
              لا توجد مقالات أخرى
            </p>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="inline-block p-6 bg-gray-100 rounded-full mb-4">
                <BookOpen className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                لم يتم العثور على مقالات
              </h3>
              <p className="text-gray-500 mb-6">
                جرب البحث بكلمات مختلفة أو اختر تصنيف آخر
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('الكل');
                }}
                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition-all duration-300"
              >
                إعادة تعيين البحث
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeArticle}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedArticle.color} opacity-60 mix-blend-multiply z-10`} />
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeArticle}
                  className="absolute top-4 left-4 z-20 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
                <div className="absolute bottom-4 right-4 z-20 bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-semibold text-gray-700">{selectedArticle.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 overflow-y-auto flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {selectedArticle.title}
                </h1>
                
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 pb-6 border-b">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedArticle.date).toLocaleDateString('ar-SA')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mb-6 pb-6 border-b">
                  <ShareButtons title={selectedArticle.title} />
                </div>

                <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-primary hover:prose-a:text-secondary prose-strong:text-gray-900 prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5">
                  <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                </div>

                <div className="mt-8 pt-6 border-t">
                  <button
                    onClick={closeArticle}
                    className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    إغلاق
                  </button>
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
