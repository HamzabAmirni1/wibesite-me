import { Language } from './contexts/LanguageContext';

export const navLabels: Record<Language, Record<string, string>> = {
  ar: {
    home: 'الصفحة الرئيسية',
    about: 'عن وعني',
    videos: 'الفيديوهات',
    programming: 'البرمجة',
    apps: 'التطبيقات',
    fun: 'التسلية',
    bots: 'البوتات',
    tools: 'أدوات مفيدة',
    gaza: 'المقالات',
    chat: 'تحدث معي',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    contact: 'اتصل بنا',
    disclaimer: 'إخلاء المسؤولية',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos de moi',
    videos: 'Vidéos',
    programming: 'Programmation',
    apps: 'Applications',
    fun: 'Divertissement',
    bots: 'Bots',
    tools: 'Outils utiles',
    gaza: 'Articles',
    chat: 'Discuter avec moi',
    privacy: 'Politique de confidentialité',
    terms: "Conditions d'utilisation",
    contact: 'Contact',
    disclaimer: 'Avertissement',
  },
  en: {
    home: 'Home',
    about: 'About me',
    videos: 'Videos',
    programming: 'Programming',
    apps: 'Apps',
    fun: 'Fun',
    bots: 'Bots',
    tools: 'Useful tools',
    gaza: 'Articles',
    chat: 'Chat with me',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    contact: 'Contact',
    disclaimer: 'Disclaimer',
  },
};

export const heroName: Record<Language, string> = {
  ar: 'حمزة اعمرني',
  fr: 'Hamza Amrni',
  en: 'Hamza Amrni',
};

export const heroSubtitle: Record<Language, string> = {
  ar: 'مبرمج وصانع محتوى تقني',
  fr: 'Développeur et créateur de contenu tech',
  en: 'Developer & tech content creator',
};

export const heroIntro: Record<Language, string> = {
  ar: 'مرحباً بك في منصتي الإلكترونية! هنا أشارك معك خبرتي وشغفي في عالم البرمجة والتقنية وتطوير الذات.',
  fr: "Bienvenue sur ma plateforme ! Je partage avec toi mon expérience et ma passion pour la programmation, la technologie et le développement personnel.",
  en: 'Welcome to my digital space! I share my experience and passion for programming, technology and self‑development.',
};

export const introScreenSubtitle: Record<Language, string> = {
  ar: 'مبرمج وصانع محتوى تقني',
  fr: 'Développeur et créateur de contenu tech',
  en: 'Developer & tech content creator',
};

export const getNavLabel = (language: Language, id: string): string => {
  const labels = navLabels[language] ?? navLabels.ar;
  return labels[id] ?? id;
};
