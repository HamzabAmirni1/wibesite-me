import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Youtube, Play, Eye, ThumbsUp, Clock } from 'lucide-react';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50 }
  }
};

const videos = [
  {
    id: 1,
    title: 'دورة تعلم البرمجة من الصفر',
    description: 'دورة شاملة لتعلم أساسيات البرمجة باستخدام JavaScript',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    duration: '45:30',
    views: '12K',
    likes: '850',
    category: 'تعليمي'
  },
  {
    id: 2,
    title: 'بناء موقع ويب احترافي',
    description: 'تعلم كيفية بناء موقع ويب احترافي من الصفر',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    duration: '1:12:45',
    views: '8.5K',
    likes: '620',
    category: 'تطوير ويب'
  },
  {
    id: 3,
    title: 'تطوير تطبيقات الموبايل',
    description: 'دليل شامل لتطوير تطبيقات الهاتف باستخدام React Native',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    duration: '58:20',
    views: '15K',
    likes: '1.2K',
    category: 'موبايل'
  },
  {
    id: 4,
    title: 'أساسيات قواعد البيانات',
    description: 'تعلم كيفية التعامل مع قواعد البيانات SQL و NoSQL',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    duration: '42:15',
    views: '6.8K',
    likes: '480',
    category: 'قواعد بيانات'
  },
  {
    id: 5,
    title: 'تصميم واجهات المستخدم',
    description: 'مبادئ وأساسيات تصميم واجهات المستخدم الحديثة',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    duration: '35:50',
    views: '9.2K',
    likes: '710',
    category: 'تصميم'
  },
  {
    id: 6,
    title: 'الذكاء الاصطناعي للمبتدئين',
    description: 'مقدمة شاملة للذكاء الاصطناعي والتعلم الآلي',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    videoId: 'dQw4w9WgXcQ',
    duration: '1:05:30',
    views: '18K',
    likes: '1.5K',
    category: 'AI'
  }
];

const VideoCard: React.FC<typeof videos[0]> = ({ title, description, thumbnail, videoId, duration, views, likes, category }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative">
        {!isPlaying ? (
          <>
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transform hover:scale-110 transition-transform duration-300"
              >
                <Play className="w-8 h-8" fill="white" />
              </button>
            </div>
            <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {duration}
            </div>
            <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </div>
          </>
        ) : (
          <div className="aspect-video">
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}
      </div>
      
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Videos: React.FC = () => {
  const { language } = useLanguage();

  return (
    <motion.div
      className="space-y-12 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="text-center bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-100">
          <div className="space-y-4">
            <div className="inline-block p-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl">
              <Youtube className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600">
              مكتبة الفيديوهات التعليمية
            </h1>
            <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed">
              مجموعة شاملة من الدروس والشروحات المجانية في مختلف مجالات البرمجة والتطوير.
              تعلم بالطريقة التي تناسبك!
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center">
            <Youtube className="w-10 h-10 text-red-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-red-700">{videos.length}+</h3>
            <p className="text-red-600 font-medium">فيديو تعليمي</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <Eye className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-blue-700">70K+</h3>
            <p className="text-blue-600 font-medium">مشاهدة</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <ThumbsUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-green-700">5.3K+</h3>
            <p className="text-green-600 font-medium">إعجاب</p>
          </div>
        </div>
      </motion.div>

      {/* Videos Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {videos.map((video) => (
          <motion.div key={video.id} variants={itemVariants}>
            <VideoCard {...video} />
          </motion.div>
        ))}
      </motion.div>

      {/* YouTube Channel CTA */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white text-center">
          <Youtube className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            اشترك في قناتنا على YouTube
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            لا تفوت أي فيديو جديد! اشترك الآن وفعّل الجرس ليصلك كل جديد
          </p>
          <a
            href="https://youtube.com/@hamzaamirni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <Youtube className="w-6 h-6" />
            اشترك الآن
          </a>
        </Card>
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

export default Videos;
