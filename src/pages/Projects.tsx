import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import Card from '../components/Card';
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

const projects = [
  {
    id: 1,
    title: 'موقع شركة تقنية',
    category: 'تطوير ويب',
    description: 'موقع احترافي متكامل لشركة تقنية متخصصة في تطوير البرمجيات، يتضمن صفحات الخدمات، المشاريع، الفريق، ونموذج تواصل متقدم.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    features: [
      'تصميم متجاوب بالكامل',
      'لوحة تحكم إدارية',
      'نظام إدارة محتوى',
      'تحسين SEO متقدم'
    ],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'متجر إلكتروني للأزياء',
    category: 'تجارة إلكترونية',
    description: 'متجر إلكتروني متكامل لبيع الملابس والإكسسوارات، مع نظام دفع آمن، إدارة المخزون، وتتبع الطلبات.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    features: [
      'عربة تسوق ذكية',
      'بوابة دفع متعددة',
      'نظام تقييمات المنتجات',
      'إدارة الطلبات والشحن'
    ],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 3,
    title: 'منصة تعليمية تفاعلية',
    category: 'تطبيق ويب',
    description: 'منصة تعليمية شاملة تتيح للمدرسين إنشاء الدورات ونشرها، وللطلاب التسجيل والتعلم بطريقة تفاعلية.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Firebase', 'Material-UI', 'Video.js'],
    features: [
      'نظام إدارة الدورات',
      'مشغل فيديو متقدم',
      'اختبارات تفاعلية',
      'شهادات إلكترونية'
    ],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 4,
    title: 'تطبيق حجز المواعيد',
    category: 'تطبيق موبايل',
    description: 'تطبيق موبايل لحجز المواعيد في العيادات والصالونات، مع نظام إشعارات وتذكير تلقائي.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'Firebase', 'Push Notifications'],
    features: [
      'حجز فوري للمواعيد',
      'إشعارات تلقائية',
      'نظام تقييم الخدمات',
      'دفع إلكتروني'
    ],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'لوحة تحكم تحليلات',
    category: 'تطبيق ويب',
    description: 'لوحة تحكم احترافية لعرض التحليلات والإحصائيات بطريقة مرئية وتفاعلية مع رسوم بيانية متقدمة.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Chart.js', 'D3.js', 'REST API'],
    features: [
      'رسوم بيانية تفاعلية',
      'تقارير قابلة للتصدير',
      'تحديث بيانات فوري',
      'واجهة سهلة الاستخدام'
    ],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 6,
    title: 'موقع مطعم تفاعلي',
    category: 'تطوير ويب',
    description: 'موقع مطعم عصري مع قائمة طعام تفاعلية، نظام طلبات أونلاين، وحجز الطاولات.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MySQL'],
    features: [
      'قائمة طعام رقمية',
      'نظام طلبات أونلاين',
      'حجز الطاولات',
      'تكامل مع Google Maps'
    ],
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-red-500 to-pink-500'
  }
];

const Projects: React.FC = () => {
  return (
    <motion.div 
      className="space-y-12 pb-12" 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pb-2">
          معرض أعمالي ومشاريعي
        </h1>
        <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed">
          اطلع على مجموعة من المشاريع التي قمت بتطويرها، من مواقع الشركات إلى المتاجر الإلكترونية والتطبيقات المتقدمة.
          كل مشروع يعكس التزامي بالجودة والابتكار.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group"
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 mix-blend-multiply z-10`} />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                  <span className="text-xs font-semibold text-gray-700">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500">
                      <Star className="w-3 h-3 text-yellow-500 ml-2 flex-shrink-0 fill-current" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    معاينة
                  </a>
                  <a
                    href={project.githubUrl}
                    className="py-2 px-4 rounded-lg bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call To Action */}
      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      {/* Whatsapp Channels */}
      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
