import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Bot, MessageSquare, Zap, Shield, Clock, Star, ExternalLink, Sparkles } from 'lucide-react';
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

import { SiWhatsapp, SiOpenai, SiGithub, SiPerplexity } from 'react-icons/si';

const bots = [
  {
    id: 1,
    name: 'بوت حمزة الشخصي',
    icon: <SiWhatsapp className="w-16 h-16 text-green-500" />,
    description: 'تواصل معي مباشرة عبر WhatsApp للاستشارات التقنية، تطوير المشاريع، أو أي استفسارات برمجية',
    platform: 'WhatsApp',
    features: [
      'استشارات تقنية مجانية',
      'مساعدة في المشاريع',
      'نصائح برمجية',
      'رد سريع ومباشر'
    ],
    users: 'مباشر',
    rating: 5.0,
    color: 'from-gradient-start to-gradient-end',
    demoUrl: 'https://api.whatsapp.com/send/?phone=212708869993&text&type=phone_number&app_absent=0',
    featured: true
  },
  {
    id: 2,
    name: 'ChatGPT',
    icon: <SiOpenai className="w-16 h-16 text-green-600" />,
    description: 'بوت ذكاء اصطناعي متقدم من OpenAI للإجابة على أسئلتك وحل مشاكلك البرمجية',
    platform: 'AI Assistant',
    features: [
      'إجابات ذكية ودقيقة',
      'مساعدة في البرمجة',
      'شرح المفاهيم',
      'كتابة الأكواد'
    ],
    users: '100M+',
    rating: 4.9,
    color: 'from-green-500 to-emerald-600',
    demoUrl: 'https://api.whatsapp.com/send/?phone=18002428478&text&type=phone_number&app_absent=0',
    isAI: true
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    icon: <SiGithub className="w-16 h-16 text-gray-800" />,
    description: 'مساعد برمجة ذكي يساعدك في كتابة الأكواد بشكل أسرع وأكثر كفاءة',
    platform: 'AI Code Assistant',
    features: [
      'اقتراحات أكواد ذكية',
      'دعم لغات متعددة',
      'تكامل مع VS Code',
      'تعلم من سياق الكود'
    ],
    users: '10M+',
    rating: 4.8,
    color: 'from-blue-500 to-cyan-600',
    demoUrl: 'https://api.whatsapp.com/send/?phone=18772241042&text&type=phone_number&app_absent=0',
    isAI: true
  },
  {
    id: 4,
    name: 'Perplexity AI',
    icon: <SiPerplexity className="w-16 h-16 text-cyan-600" />,
    description: 'محرك بحث ذكي يستخدم الذكاء الاصطناعي لتقديم إجابات دقيقة مع المصادر',
    platform: 'AI Search',
    features: [
      'بحث ذكي متقدم',
      'إجابات مع مصادر',
      'تحديثات فورية',
      'واجهة سهلة'
    ],
    users: '5M+',
    rating: 4.7,
    color: 'from-purple-500 to-pink-600',
    demoUrl: 'https://api.whatsapp.com/send/?phone=18334363285&text&type=phone_number&app_absent=0',
    isAI: true
  }
];

const botFeatures = [
  {
    icon: Zap,
    title: 'سرعة فائقة',
    description: 'استجابة فورية لجميع الطلبات والأوامر'
  },
  {
    icon: Shield,
    title: 'أمان عالي',
    description: 'حماية كاملة للبيانات والخصوصية'
  },
  {
    icon: Clock,
    title: 'متاح 24/7',
    description: 'يعمل على مدار الساعة دون توقف'
  },
  {
    icon: Sparkles,
    title: 'ذكاء اصطناعي',
    description: 'يتعلم ويتطور مع الاستخدام'
  }
];

const Bots: React.FC = () => {
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
              <Bot className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              البوتات والمساعدات الذكية
            </h1>
            <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed">
              تواصل معي مباشرة أو استخدم أفضل أدوات الذكاء الاصطناعي لمساعدتك في البرمجة والتطوير.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8">
          لماذا تستخدم هذه الأدوات؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {botFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="inline-block p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bots Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8">
          الأدوات المتاحة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bots.map((bot) => (
            <motion.div
              key={bot.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className={`h-full flex flex-col hover:shadow-2xl transition-all duration-300 ${bot.featured ? 'border-2 border-primary' : ''}`}>
                {bot.featured && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 -mt-6 -mx-6 mb-4 rounded-t-xl">
                    <span className="text-sm font-bold flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      مميز - تواصل مباشر
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{bot.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">
                    {bot.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-sm mb-2">
                    <span className={`px-3 py-1 ${bot.isAI ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'} rounded-full font-medium`}>
                      {bot.platform}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-gray-600 font-bold text-lg">{bot.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-center px-2">
                  {bot.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                    <MessageSquare className="w-4 h-4" />
                    <span>{bot.users} {bot.users !== 'مباشر' && 'مستخدم'}</span>
                  </div>
                  <ul className="space-y-2">
                    {bot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Zap className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a
                    href={bot.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${bot.color} text-white font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    {bot.featured ? 'تواصل الآن' : bot.isAI ? 'فتح الأداة' : 'تجربة البوت'}
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How to Use Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <h3 className="text-2xl font-bold text-center text-primary mb-6">
            كيفية الاستخدام
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="font-bold text-gray-800 mb-2">اختر الأداة</h4>
              <p className="text-sm text-gray-600">اختر الأداة أو البوت المناسب لاحتياجاتك</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="font-bold text-gray-800 mb-2">افتح الرابط</h4>
              <p className="text-sm text-gray-600">اضغط على الزر وسيتم فتح الأداة مباشرة</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="font-bold text-gray-800 mb-2">ابدأ الاستخدام</h4>
              <p className="text-sm text-gray-600">استفد من جميع الميزات المتاحة</p>
            </div>
          </div>
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

export default Bots;
