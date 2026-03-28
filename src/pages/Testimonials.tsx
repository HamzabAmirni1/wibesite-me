import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Users, ThumbsUp, Zap } from 'lucide-react';
import { SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigationContext } from '../contexts/NavigationContext';
import Card from '../components/Card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 60 },
  },
};

interface Testimonial {
  id: number;
  name: string;
  nameFr: string;
  role: string;
  roleFr: string;
  roleEn: string;
  avatar: string;
  rating: number;
  text: string;
  textFr: string;
  textEn: string;
  platform: 'whatsapp' | 'facebook' | 'instagram' | 'direct';
  project: string;
  projectFr: string;
  projectEn: string;
  color: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'أحمد بنعلي',
    nameFr: 'Ahmed Benali',
    role: 'صاحب متجر إلكتروني',
    roleFr: 'Propriétaire e-commerce',
    roleEn: 'E-commerce Owner',
    avatar: 'AB',
    rating: 5,
    text: 'حمزة شغلو ممتاز! بنالي متجر إلكتروني في وقت قياسي وبجودة عالية جداً. سرعة الاستجابة والاحترافية مزيانين بزاف. نصح ليكم بيه بلا تردد!',
    textFr: "Hamza est excellent ! Il m'a créé une boutique en ligne en un temps record avec une très haute qualité. Sa réactivité et son professionnalisme sont remarquables. Je vous le recommande sans hésitation !",
    textEn: "Hamza is excellent! He built me an e-commerce store in record time with very high quality. His responsiveness and professionalism are remarkable. I highly recommend him!",
    platform: 'whatsapp',
    project: 'متجر إلكتروني',
    projectFr: 'Boutique en ligne',
    projectEn: 'E-commerce site',
    color: 'from-violet-500 to-purple-600',
    date: 'يناير 2026',
  },
  {
    id: 2,
    name: 'فاطمة الزهراء',
    nameFr: 'Fatima Zahra',
    role: 'طالبة جامعية',
    roleFr: 'Étudiante universitaire',
    roleEn: 'University Student',
    avatar: 'FZ',
    rating: 5,
    text: 'تطبيق الأذكار ديالو روعة! شغل نظيف ومريح للعين، وفيه كل اللي كنت محتاجاه. بارك الله فيك حمزة على هذا العمل الجميل.',
    textFr: "Son application de dhikr est magnifique ! Un travail propre et agréable pour les yeux, avec tout ce dont j'avais besoin. Que Dieu te bénisse Hamza pour ce beau travail.",
    textEn: "His dhikr app is amazing! Clean work that's easy on the eyes, with everything I needed. May God bless you Hamza for this beautiful work.",
    platform: 'instagram',
    project: 'تطبيق الأذكار الإسلامي',
    projectFr: "App de Dhikr Islamique",
    projectEn: 'Islamic Dhikr App',
    color: 'from-green-500 to-emerald-600',
    date: 'فبراير 2026',
  },
  {
    id: 3,
    name: 'كريم المنصوري',
    nameFr: 'Karim Mansouri',
    role: 'رجل أعمال',
    roleFr: 'Homme d\'affaires',
    roleEn: 'Businessman',
    avatar: 'KM',
    rating: 5,
    text: 'طلبت منو موقع شركة احترافي وكان النتيجة فوق التوقعات بلا مبالغة. سرعة إنجاز ممتازة وتواصل راقي طول المشروع. شكراً جزيلاً!',
    textFr: "J'ai demandé un site web professionnel pour mon entreprise et le résultat a dépassé mes attentes, sans exagération. Excellente rapidité d'exécution et communication de qualité tout au long du projet. Merci beaucoup !",
    textEn: "I asked for a professional company website and the result exceeded my expectations, no exaggeration. Excellent execution speed and quality communication throughout the project. Thank you so much!",
    platform: 'facebook',
    project: 'موقع شركة احترافي',
    projectFr: 'Site Web d\'Entreprise',
    projectEn: 'Professional Company Website',
    color: 'from-blue-500 to-cyan-500',
    date: 'مارس 2026',
  },
  {
    id: 4,
    name: 'سارة أمين',
    nameFr: 'Sara Amine',
    role: 'معلمة',
    roleFr: 'Enseignante',
    roleEn: 'Teacher',
    avatar: 'SA',
    rating: 5,
    text: 'اشتريت منو تطبيق BAC الديال وما ندمتش! التطبيق سهّل على بنتي المذاكرة بزاف. واضح أن فيه جهد حقيقي. الله يجزيك خير يا حمزة.',
    textFr: "J'ai acheté l'application BAC et je n'ai pas regretté ! L'application a beaucoup facilité les révisions de ma fille. Clairement beaucoup d'effort y a été mis. Que Dieu te récompense Hamza.",
    textEn: "I bought the BAC app and I don't regret it! The app greatly facilitated my daughter's studying. Clearly a lot of real effort went into it. May God reward you Hamza.",
    platform: 'whatsapp',
    project: 'تطبيق دروس البكالوريا',
    projectFr: 'App Bac Éducative',
    projectEn: 'Bac Education App',
    color: 'from-pink-500 to-rose-500',
    date: 'ديسمبر 2025',
  },
  {
    id: 5,
    name: 'يوسف الحسن',
    nameFr: 'Youssef El Hassan',
    role: 'مطور ويب',
    roleFr: 'Développeur Web',
    roleEn: 'Web Developer',
    avatar: 'YH',
    rating: 5,
    text: 'كمطور بنفسي، قدرت نقيّم جودة الكود ديالو وهي ممتازة. Clean code، أداء عالي، وتصميم عصري. حمزة واحد من أحسن المطورين اللي تعاملت معاهم.',
    textFr: "En tant que développeur moi-même, j'ai pu évaluer la qualité de son code et elle est excellente. Code propre, haute performance et design moderne. Hamza est l'un des meilleurs développeurs que j'ai rencontrés.",
    textEn: "As a developer myself, I was able to assess the quality of his code and it's excellent. Clean code, high performance, and modern design. Hamza is one of the best developers I've worked with.",
    platform: 'direct',
    project: 'تعاون تقني',
    projectFr: 'Collaboration Technique',
    projectEn: 'Technical Collaboration',
    color: 'from-amber-500 to-orange-500',
    date: 'نوفمبر 2025',
  },
  {
    id: 6,
    name: 'نور الدين بوزيد',
    nameFr: 'Nour Eddine Bouzid',
    role: 'صاحب مطعم',
    roleFr: 'Propriétaire de Restaurant',
    roleEn: 'Restaurant Owner',
    avatar: 'NB',
    rating: 5,
    text: 'عملي موقع للمطعم ديالي مع نظام طلبات أونلاين. الزبائن تايعجبهم بزاف وزادت المبيعات بـ 40% في أول شهر! ما قادر نشكر حمزة بما يكفي.',
    textFr: "Il m'a créé un site web pour mon restaurant avec un système de commandes en ligne. Les clients l'adorent et les ventes ont augmenté de 40% le premier mois ! Je ne peux pas assez remercier Hamza.",
    textEn: "He made me a website for my restaurant with an online ordering system. Customers love it and sales increased by 40% in the first month! I can't thank Hamza enough.",
    platform: 'facebook',
    project: 'موقع مطعم + طلبات أونلاين',
    projectFr: 'Site Restaurant + Commandes',
    projectEn: 'Restaurant Website + Orders',
    color: 'from-teal-500 to-cyan-600',
    date: 'أكتوبر 2025',
  },
];

const stats = [
  { icon: Users, value: '50+', labelAr: 'عميل سعيد', labelFr: 'Clients Satisfaits', labelEn: 'Happy Clients', color: 'from-violet-500 to-purple-600' },
  { icon: Award, value: '6+', labelAr: 'مشروع حي', labelFr: 'Projets Live', labelEn: 'Live Projects', color: 'from-blue-500 to-cyan-500' },
  { icon: ThumbsUp, value: '100%', labelAr: 'رضا العملاء', labelFr: 'Satisfaction Client', labelEn: 'Client Satisfaction', color: 'from-green-500 to-emerald-600' },
  { icon: Zap, value: '24h', labelAr: 'وقت الاستجابة', labelFr: 'Temps de Réponse', labelEn: 'Response Time', color: 'from-amber-500 to-orange-500' },
];

const platformIcons: Record<string, React.ElementType> = {
  whatsapp: SiWhatsapp,
  facebook: SiFacebook,
  instagram: SiInstagram,
  direct: Star,
};

const platformColors: Record<string, string> = {
  whatsapp: 'text-green-500',
  facebook: 'text-blue-500',
  instagram: 'text-pink-500',
  direct: 'text-amber-500',
};

const StarRating: React.FC<{ rating: number; animate?: boolean }> = ({ rating, animate = false }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={animate ? { scale: 0, rotate: -180, opacity: 0 } : false}
          animate={animate ? { scale: 1, rotate: 0, opacity: 1 } : {}}
          transition={animate ? { delay: star * 0.15, type: 'spring', stiffness: 200 } : {}}
        >
          <Star
            className={`w-5 h-5 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const { setActiveSection } = useNavigationContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animateStars, setAnimateStars] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getText = (t: Testimonial) => language === 'ar' ? t.text : language === 'fr' ? t.textFr : t.textEn;
  const getName = (t: Testimonial) => language === 'ar' ? t.name : t.nameFr;
  const getRole = (t: Testimonial) => language === 'ar' ? t.role : language === 'fr' ? t.roleFr : t.roleEn;
  const getProject = (t: Testimonial) => language === 'ar' ? t.project : language === 'fr' ? t.projectFr : t.projectEn;

  const headingText = {
    ar: { title: 'آراء عملائنا', subtitle: 'ما يقوله الناس عن أعمالي وخدماتي' },
    fr: { title: 'Avis de nos Clients', subtitle: 'Ce que les gens disent de mon travail et de mes services' },
    en: { title: 'Client Testimonials', subtitle: 'What people say about my work and services' },
  }[language] ?? { title: 'Client Testimonials', subtitle: '' };

  const ctaText = {
    ar: { heading: 'هل أنت التالي؟', sub: 'احصل على مشروعك الاحترافي الآن وانضم لقائمة العملاء السعداء!', btn: '🚀 ابدأ مشروعك' },
    fr: { heading: 'Et vous, c\'est pour quand ?', sub: 'Obtenez votre projet professionnel maintenant et rejoignez nos clients satisfaits !', btn: '🚀 Démarrer votre Projet' },
    en: { heading: 'You\'re Next!', sub: 'Get your professional project now and join our list of happy clients!', btn: '🚀 Start Your Project' },
  }[language] ?? { heading: '', sub: '', btn: '' };

  const goTo = (idx: number) => {
    setActiveIndex((idx + testimonials.length) % testimonials.length);
    setAnimateStars(true);
    setTimeout(() => setAnimateStars(false), 2000);
  };

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => next(), 4000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [activeIndex, isAutoPlaying]);

  const active = testimonials[activeIndex];
  const PlatformIcon = platformIcons[active.platform];

  return (
    <motion.div
      className="space-y-16 pb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ─── Hero Header ─── */}
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-orange-400/20 border border-amber-400/30 px-5 py-2 rounded-full mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
            {language === 'ar' ? 'تقييمات حقيقية' : language === 'fr' ? 'Avis Authentiques' : 'Authentic Reviews'}
          </span>
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] pb-2">
          {headingText.title}
        </h1>
        <p className="text-lg text-dark-color/70 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {headingText.subtitle}
        </p>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="flex">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-amber-400 fill-amber-400" />)}
          </div>
          <span className="text-3xl font-extrabold text-dark-color dark:text-white">5.0</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            ({language === 'ar' ? '50+ تقييم' : language === 'fr' ? '50+ avis' : '50+ reviews'})
          </span>
        </div>
      </motion.div>

      {/* ─── Stats Strip ─── */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            const label = language === 'ar' ? s.labelAr : language === 'fr' ? s.labelFr : s.labelEn;
            return (
              <motion.div
                key={s.value}
                className="relative overflow-hidden rounded-2xl p-5 text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} mb-3 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className={`text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${s.color}`}>
                  {s.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}</p>
                {/* Decorative blob */}
                <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${s.color} opacity-10 blur-xl`} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ─── Featured Carousel ─── */}
      <motion.div variants={itemVariants}>
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className={`relative overflow-hidden rounded-3xl p-1 bg-gradient-to-br ${active.color} shadow-2xl`}>
                <div className="bg-white dark:bg-gray-900 rounded-[22px] p-8 md:p-10 relative overflow-hidden">
                  {/* Background decorations */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${active.color} opacity-10 blur-3xl`} />
                  <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br ${active.color} opacity-10 blur-3xl`} />

                  {/* Quote icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${active.color} mb-6 shadow-lg`}>
                    <Quote className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <p className="text-xl md:text-2xl text-dark-color dark:text-gray-100 leading-relaxed font-medium mb-8 relative z-10">
                    "{getText(active)}"
                  </p>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center text-white font-extrabold text-lg shadow-lg flex-shrink-0`}>
                        {active.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-dark-color dark:text-white text-lg">{getName(active)}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{getRole(active)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-300">
                            {getProject(active)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <StarRating rating={active.rating} animate={animateStars} />
                      <div className="flex items-center gap-2">
                        <PlatformIcon className={`w-4 h-4 ${platformColors[active.platform]}`} />
                        <span className="text-xs text-gray-400">{active.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* ─── All Cards Grid ─── */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold text-primary dark:text-blue-400 text-center mb-8">
          {language === 'ar' ? '✨ جميع التقييمات' : language === 'fr' ? '✨ Tous les Avis' : '✨ All Reviews'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => {
            const PIco = platformIcons[t.platform];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, type: 'spring' }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => { goTo(idx); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                  {/* Top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${t.color}`} />

                  <div className="p-5 flex flex-col gap-4 flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}>
                          {t.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-dark-color dark:text-white text-sm">{getName(t)}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{getRole(t)}</p>
                        </div>
                      </div>
                      <PIco className={`w-5 h-5 ${platformColors[t.platform]} flex-shrink-0 mt-1`} />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} className={`w-4 h-4 ${s <= t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 line-clamp-4">
                      "{getText(t)}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                      <span className={`text-xs font-semibold bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>
                        {getProject(t)}
                      </span>
                      <span className="text-xs text-gray-400">{t.date}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ─── CTA Banner ─── */}
      <motion.div variants={itemVariants}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_auto] p-8 md:p-12 text-center text-white shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute top-4 right-8 w-6 h-6 bg-white/20 rounded-full animate-ping" />
          <div className="absolute bottom-6 left-12 w-4 h-4 bg-white/30 rounded-full animate-pulse" />

          <div className="relative z-10 space-y-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-5xl"
            >
              🚀
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-extrabold">{ctaText.heading}</h2>
            <p className="text-white/80 max-w-xl mx-auto text-lg">{ctaText.sub}</p>
            <motion.button
              onClick={() => setActiveSection('contact')}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText.btn}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
