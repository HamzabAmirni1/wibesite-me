import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, ShoppingBag, BookOpen, Wrench, ShieldCheck, Shirt, LayoutDashboard } from 'lucide-react';
import Card from '../components/Card';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 60 }
  }
};

const projects = [
  {
    id: 0,
    title: 'Brasti – إدارة المبيعات والمخزون',
    titleFr: 'Brasti – Gestion de Stock',
    titleEn: 'Brasti – Stock Management',
    category: 'تطبيق ويب',
    categoryEn: 'Dashboard App',
    categoryFr: 'Tableau de bord',
    description: 'منصة احترافية متكاملة لإدارة المخزون والمبيعات مع إحصائيات دقيقة وتقارير وتصميم عصري.',
    descriptionEn: 'A comprehensive professional platform for inventory and sales management with accurate statistics and modern design.',
    descriptionFr: 'Une plateforme professionnelle complète pour la gestion des stocks et des ventes avec des statistiques et un design moderne.',
    technologies: ['React', 'Tailwind', 'AI Chatbot'],
    liveUrl: 'https://brasti.netlify.app/',
    color: 'from-amber-400 to-yellow-600',
    icon: LayoutDashboard,
    badge: '📊',
  },
  {
    id: 1,
    title: 'حسابي – إدارة الميزانية',
    titleFr: 'Hsabi – Gestion Budgétaire',
    titleEn: 'Hsabi – Budget Manager',
    category: 'تطبيق مالي',
    categoryEn: 'Financial App',
    categoryFr: 'App Financière',
    description: 'نظام ذكي لإدارة الميزانية والمدفوعات يساعد المستخدمين على تتبع نفقاتهم ومدخراتهم بدقة.',
    descriptionEn: 'A smart budget and payment management system that helps users track their expenses and savings accurately.',
    descriptionFr: 'Un système intelligent de gestion budgétaire qui aide les utilisateurs à suivre leurs dépenses et économies.',
    technologies: ['React', 'Bootstrap', 'CSS'],
    liveUrl: 'https://hsabi.netlify.app/',
    color: 'from-violet-500 to-purple-600',
    icon: Globe,
    badge: '💰',
  },
  {
    id: 2,
    title: 'تطبيق القرآن الكريم',
    titleFr: 'App Quran Karim',
    titleEn: 'Quran Karim App',
    category: 'تطبيق ديني',
    categoryEn: 'Religious App',
    categoryFr: 'App Religieuse',
    description: 'منصة رقمية شاملة للاستماع وقراءة القرآن الكريم، مع مواقيت الصلاة والبحث السريع.',
    descriptionEn: 'A comprehensive digital platform for listening to and reading the Holy Quran, with prayer times and fast search.',
    descriptionFr: 'Une plateforme numérique complète pour écouter et lire le Saint Coran, avec les horaires de prière.',
    technologies: ['React', 'PWA', 'FontAwesome'],
    liveUrl: 'https://qurankarimapp.netlify.app',
    color: 'from-green-500 to-emerald-600',
    icon: BookOpen,
    badge: '📖',
  },
  {
    id: 3,
    title: 'متجر حمزة اعمرني',
    titleFr: 'Boutique Hamza Amirni',
    titleEn: 'Hamza Amirni Store',
    category: 'متجر إلكتروني',
    categoryEn: 'E-commerce',
    categoryFr: 'E-commerce',
    description: 'بوتيك عصري يعرض منتجات الإلكترونيات والأزياء مع الطلب المباشر عبر واتساب.',
    descriptionEn: 'A modern boutique showcasing electronics and fashion products with direct WhatsApp ordering.',
    descriptionFr: 'Une boutique moderne présentant des produits électroniques et de mode avec commande directe via WhatsApp.',
    technologies: ['React', 'WhatsApp API', 'CSS'],
    liveUrl: 'https://storehamzaamirni.netlify.app',
    color: 'from-blue-500 to-cyan-500',
    icon: ShoppingBag,
    badge: '🛍️',
  },
  {
    id: 4,
    title: 'محول الملفات – Hamza Converter',
    titleFr: 'Convertisseur Hamza',
    titleEn: 'Hamza Converter',
    category: 'أداة خدماتية',
    categoryEn: 'Utility Tool',
    categoryFr: 'Outil Utilitaire',
    description: 'أداة احترافية لتحويل الملفات (PDF, Office, Images) بسرعة عالية مع الحفاظ على خصوصية البيانات.',
    descriptionEn: 'A professional tool to convert files (PDF, Office, Images) at high speed while preserving data privacy.',
    descriptionFr: 'Un outil professionnel pour convertir des fichiers (PDF, Office, Images) rapidement tout en préservant la vie privée.',
    technologies: ['React', 'CSS Grid', 'Dark Mode'],
    liveUrl: 'https://hamzaconverter.netlify.app',
    color: 'from-purple-600 to-blue-500',
    icon: Wrench,
    badge: '⚙️',
  },
  {
    id: 5,
    title: 'Rana – توثيق الحسابات',
    titleFr: 'Rana – Vérification',
    titleEn: 'Rana – Account Verification',
    category: 'خدمات رقمية',
    categoryEn: 'Digital Services',
    categoryFr: 'Services Numériques',
    description: 'منصة متخصصة في خدمات توثيق الحسابات والعلامة الزرقاء على مختلف منصات التواصل الاجتماعي.',
    descriptionEn: 'A platform specialized in account verification and blue badge services across various social media platforms.',
    descriptionFr: 'Une plateforme spécialisée dans la vérification de comptes et le badge bleu sur les réseaux sociaux.',
    technologies: ['React', 'Telegram', 'WhatsApp'],
    liveUrl: 'https://rana-verification.netlify.app',
    color: 'from-teal-500 to-cyan-600',
    icon: ShieldCheck,
    badge: '✅',
  },
  {
    id: 6,
    title: 'Sigma – متجر الأزياء',
    titleFr: 'Sigma – Mode',
    titleEn: 'Sigma – Fashion Store',
    category: 'متجر أزياء',
    categoryEn: 'Fashion Store',
    categoryFr: 'Boutique Mode',
    description: 'علامة تجارية راقية تقدم مجموعات ملابس فريدة لمن يبحثون عن الأناقة والجودة العالية.',
    descriptionEn: 'A premium fashion brand offering unique clothing collections for those seeking elegance and high quality.',
    descriptionFr: 'Une marque de mode premium offrant des collections de vêtements uniques pour ceux qui recherchent l\'élégance.',
    technologies: ['React', 'Responsive Design', 'CSS'],
    liveUrl: 'https://sigma0001.netlify.app',
    color: 'from-pink-500 to-rose-500',
    icon: Shirt,
    badge: '👗',
  },
];

const Projects: React.FC = () => {
  const { language } = useLanguage();

  const getTitle = (p: typeof projects[0]) => language === 'ar' ? p.title : language === 'fr' ? p.titleFr : p.titleEn;
  const getCategory = (p: typeof projects[0]) => language === 'ar' ? p.category : language === 'fr' ? p.categoryFr : p.categoryEn;
  const getDescription = (p: typeof projects[0]) => language === 'ar' ? p.description : language === 'fr' ? p.descriptionFr : p.descriptionEn;

  return (
    <motion.div
      className="space-y-12 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero */}
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pb-2">
          {t('projectsPage.title', language)}
        </h1>
        <p className="text-lg text-dark-color/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t('projectsPage.description', language)}
        </p>
      </motion.div>

      {/* Stats bar */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { num: '6+', label: language === 'ar' ? 'مشاريع حية' : language === 'fr' ? 'Projets Actifs' : 'Live Projects' },
            { num: '100%', label: language === 'ar' ? 'مشاريع حقيقية' : language === 'fr' ? 'Projets Réels' : 'Real Projects' },
            { num: '∞', label: language === 'ar' ? 'تطوير مستمر' : language === 'fr' ? 'En Développement' : 'Ongoing Dev' },
          ].map((s, i) => (
            <div key={i} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-4 border border-primary/20 dark:border-primary/30">
              <p className="text-3xl font-extrabold text-primary">{s.num}</p>
              <p className="text-sm text-dark-color/70 dark:text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -6 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">

                {/* Gradient Header */}
                <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
                  <div className="text-center z-10">
                    <div className="text-5xl mb-2">{project.badge}</div>
                    <Icon className="w-10 h-10 text-white/80 mx-auto" />
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    {getCategory(project)}
                  </div>
                  {/* Live badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-green-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse inline-block" />
                    Live
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                    {getTitle(project)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {getDescription(project)}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white text-sm font-bold text-center flex items-center justify-center gap-2 hover:shadow-lg hover:opacity-90 transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {language === 'ar' ? 'زيارة المشروع' : language === 'fr' ? 'Voir le Projet' : 'Visit Project'}
                  </a>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>
      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
