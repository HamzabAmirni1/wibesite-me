import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Newspaper, Calendar, User, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';

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

const articles = [
  {
    id: 1,
    title: 'مستقبل الذكاء الاصطناعي في 2025',
    excerpt: 'نظرة شاملة على أحدث التطورات في مجال الذكاء الاصطناعي وتأثيره على حياتنا اليومية',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    category: 'تقنية',
    author: 'حمزة اعمرني',
    date: '2025-01-15',
    readTime: '5 دقائق',
    views: '2.5K',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 2,
    title: 'أفضل لغات البرمجة للمبتدئين',
    excerpt: 'دليل شامل لاختيار لغة البرمجة المناسبة لبدء رحلتك في عالم البرمجة',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    category: 'برمجة',
    author: 'حمزة اعمرني',
    date: '2025-01-10',
    readTime: '7 دقائق',
    views: '3.8K',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 3,
    title: 'كيف تصبح مطور ويب محترف',
    excerpt: 'خطوات عملية ونصائح قيمة لتصبح مطور ويب محترف في وقت قياسي',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    category: 'تطوير',
    author: 'حمزة اعمرني',
    date: '2025-01-05',
    readTime: '10 دقائق',
    views: '4.2K',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 4,
    title: 'أمن المعلومات: دليل المبتدئين',
    excerpt: 'تعرف على أساسيات أمن المعلومات وكيفية حماية بياناتك على الإنترنت',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    category: 'أمن',
    author: 'حمزة اعمرني',
    date: '2024-12-28',
    readTime: '6 دقائق',
    views: '1.9K',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 5,
    title: 'تطوير تطبيقات الموبايل بـ React Native',
    excerpt: 'دليل شامل لبناء تطبيقات موبايل احترافية باستخدام React Native',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    category: 'موبايل',
    author: 'حمزة اعمرني',
    date: '2024-12-20',
    readTime: '12 دقائق',
    views: '5.1K',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 6,
    title: 'أساسيات التصميم للمطورين',
    excerpt: 'مبادئ التصميم الأساسية التي يجب على كل مطور معرفتها',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    category: 'تصميم',
    author: 'حمزة اعمرني',
    date: '2024-12-15',
    readTime: '8 دقائق',
    views: '2.7K',
    color: 'from-pink-500 to-rose-600'
  }
];

const Articles: React.FC = () => {
  return (
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
            <h3 className="text-3xl font-bold text-blue-700">{articles.length}+</h3>
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

      {/* Featured Article */}
      {articles.length > 0 && (
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${articles[0].color} opacity-40 mix-blend-multiply z-10`} />
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                  <span className="text-xs font-semibold text-gray-700">{articles[0].category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 w-fit">
                  مقال مميز
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(articles[0].date).toLocaleDateString('ar-SA')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 w-fit">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
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

export default Articles;
