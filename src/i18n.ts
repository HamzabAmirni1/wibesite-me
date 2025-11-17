import { Language } from './contexts/LanguageContext';

// Common UI text translations
export const commonTexts = {
  loading: {
    ar: 'جاري التحميل...',
    fr: 'Chargement...',
    en: 'Loading...',
  },
  error: {
    ar: 'حدث خطأ',
    fr: 'Une erreur est survenue',
    en: 'An error occurred',
  },
  readMore: {
    ar: 'قراءة المزيد',
    fr: 'Lire la suite',
    en: 'Read more',
  },
  back: {
    ar: 'العودة',
    fr: 'Retour',
    en: 'Back',
  },
  next: {
    ar: 'التالي',
    fr: 'Suivant',
    en: 'Next',
  },
  previous: {
    ar: 'السابق',
    fr: 'Précédent',
    en: 'Previous',
  },
  close: {
    ar: 'إغلاق',
    fr: 'Fermer',
    en: 'Close',
  },
  submit: {
    ar: 'إرسال',
    fr: 'Envoyer',
    en: 'Submit',
  },
  cancel: {
    ar: 'إلغاء',
    fr: 'Annuler',
    en: 'Cancel',
  },
  save: {
    ar: 'حفظ',
    fr: 'Enregistrer',
    en: 'Save',
  },
  delete: {
    ar: 'حذف',
    fr: 'Supprimer',
    en: 'Delete',
  },
  edit: {
    ar: 'تعديل',
    fr: 'Modifier',
    en: 'Edit',
  },
  search: {
    ar: 'بحث',
    fr: 'Rechercher',
    en: 'Search',
  },
  noResults: {
    ar: 'لا توجد نتائج',
    fr: 'Aucun résultat',
    en: 'No results found',
  },
};

// Navigation labels
export const navLabels = {
  ar: {
    home: 'الصفحة الرئيسية',
    about: 'عني',
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

// Hero section
export const heroContent = {
  name: {
    ar: 'حمزة اعمرني',
    fr: 'Hamza Amrni',
    en: 'Hamza Amrni',
  },
  subtitle: {
    ar: 'مبرمج وصانع محتوى تقني',
    fr: 'Développeur et créateur de contenu tech',
    en: 'Developer & tech content creator',
  },
  intro: {
    ar: 'مرحباً بك في منصتي الإلكترونية! هنا أشارك معك خبرتي وشغفي في عالم البرمجة والتقنية وتطوير الذات.',
    fr: "Bienvenue sur ma plateforme ! Je partage avec toi mon expérience et ma passion pour la programmation, la technologie et le développement personnel.",
    en: 'Welcome to my digital space! I share my experience and passion for programming, technology and self‑development.',
  },
  cta: {
    ar: 'معًا نحو مستقبل رقمي أفضل!',
    fr: 'Ensemble vers un avenir numérique meilleur !',
    en: 'Together towards a better digital future!',
  },
};

// Contact page - Full comprehensive translations
export const contactPage = {
  ar: {
    title: 'تواصل معنا',
    description: 'نحن هنا للإجابة على استفساراتك ومساعدتك في رحلتك التقنية',
    contactInfoTitle: 'معلومات التواصل',
    emailLabel: 'البريد الإلكتروني',
    whatsappLabel: 'واتساب',
    whatsappDesc: 'متاح من خلال الروابط في الموقع',
    locationLabel: 'الموقع',
    locationCountry: 'المغرب',
    socialMediaTitle: 'تابعني على وسائل التواصل الاجتماعي',
    formTitle: 'أرسل لنا رسالة',
    whatsappDirectTitle: 'إرسال مباشر عبر واتساب',
    whatsappDirectDesc: 'للحصول على رد سريع، يمكنك إرسال رسالتك مباشرة عبر واتساب',
    openWhatsapp: 'فتح واتساب',
    nameLabel: 'الاسم الكامل',
    namePlaceholder: 'أدخل اسمك الكامل',
    emailFieldLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    subjectLabel: 'موضوع الرسالة',
    subjectPlaceholder: 'اختر موضوع الرسالة',
    subjectOptions: {
      general: 'استفسار عام',
      support: 'دعم فني',
      webDevelopment: 'تطوير مواقع',
      appDevelopment: 'برمجة تطبيقات',
      consultation: 'استشارة تقنية',
      collaboration: 'تعاون ومشاريع',
      other: 'أخرى'
    },
    priorityLabel: 'أهمية الرسالة',
    priorityPlaceholder: 'اختر مستوى الأهمية',
    priorityOptions: {
      normal: 'عادي - رد خلال 24-48 ساعة',
      important: 'مهم - رد خلال 12-24 ساعة',
      urgent: 'عاجل - يُفضل استخدام واتساب للرد السريع'
    },
    messageLabel: 'تفاصيل الرسالة',
    messagePlaceholder: 'اكتب تفاصيل رسالتك هنا... كلما كانت التفاصيل أوضح، كان الرد أدق وأسرع.',
    sendButton: 'إرسال الرسالة',
    formNote: 'ملاحظة: جميع الحقول المطلوبة مميزة بعلامة (*). نحن نحترم خصوصيتك ولن نشارك معلوماتك مع أطراف ثالثة.',
    quickResponseNote: 'للرد السريع: استخدم زر واتساب أعلاه أو راسلنا على: hamzaamirni451@gmail.com',
    responseTimeTitle: 'أوقات الاستجابة',
    responseTimeDesc: 'نسعى للرد على جميع الرسائل خلال 24-48 ساعة في أيام العمل. للاستفسارات العاجلة، تواصل معي عبر واتساب.',
    faqTitle: 'الأسئلة الشائعة',
    faqQ1: 'كيف يمكنني طلب استشارة تقنية؟',
    faqA1: 'يمكنك التواصل معنا عبر النموذج أعلاه أو واتساب لطلب استشارة تقنية مخصصة.',
    faqQ2: 'هل تقدمون دورات تدريبية؟',
    faqA2: 'نعم، نقدم دورات ومحتوى تعليمي في البرمجة والتقنية. تابع قنواتنا للحصول على التحديثات.',
    faqQ3: 'كم يستغرق الرد على الرسائل؟',
    faqA3: 'نسعى للرد خلال 24-48 ساعة في أيام العمل. الرسائل العاجلة يُفضل إرسالها عبر واتساب.',
    faqQ4: 'هل يمكنني طلب مشروع مخصص؟',
    faqA4: 'بالطبع! نقدم خدمات تطوير مخصصة. تواصل معنا لمناقشة متطلبات مشروعك.',
    successMessage: 'شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
    requiredFieldIndicator: '*',
    requiredText: 'هذا الحقل مطلوب'
  },
  fr: {
    title: 'Contactez-nous',
    description: 'Nous sommes là pour répondre à vos questions et vous aider dans votre parcours technologique',
    contactInfoTitle: 'Coordonnées',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    whatsappDesc: 'Disponible via les liens sur le site',
    locationLabel: 'Localisation',
    locationCountry: 'Maroc',
    socialMediaTitle: 'Suivez-moi sur les réseaux sociaux',
    formTitle: 'Envoyez-nous un message',
    whatsappDirectTitle: 'Envoi direct via WhatsApp',
    whatsappDirectDesc: 'Pour obtenir une réponse rapide, vous pouvez envoyer votre message directement via WhatsApp',
    openWhatsapp: 'Ouvrir WhatsApp',
    nameLabel: 'Nom complet',
    namePlaceholder: 'Entrez votre nom complet',
    emailFieldLabel: 'Email',
    emailPlaceholder: 'Entrez votre email',
    subjectLabel: 'Sujet du message',
    subjectPlaceholder: 'Choisissez le sujet du message',
    subjectOptions: {
      general: 'Question générale',
      support: 'Support technique',
      webDevelopment: 'Développement web',
      appDevelopment: 'Développement d\'applications',
      consultation: 'Consultation technique',
      collaboration: 'Collaboration et projets',
      other: 'Autre'
    },
    priorityLabel: 'Priorité du message',
    priorityPlaceholder: 'Choisissez le niveau de priorité',
    priorityOptions: {
      normal: 'Normal - Réponse en 24-48 heures',
      important: 'Important - Réponse en 12-24 heures',
      urgent: 'Urgent - Veuillez utiliser WhatsApp pour une réponse rapide'
    },
    messageLabel: 'Détails du message',
    messagePlaceholder: 'Écrivez les détails de votre message ici... Plus les détails sont clairs, plus la réponse sera précise et rapide.',
    sendButton: 'Envoyer le message',
    formNote: 'Remarque: Tous les champs obligatoires sont marqués d\'une (*). Nous respectons votre vie privée et ne partagerons pas vos données avec des tiers.',
    quickResponseNote: 'Pour une réponse rapide: Utilisez le bouton WhatsApp ci-dessus ou contactez-nous sur: hamzaamirni451@gmail.com',
    responseTimeTitle: 'Temps de réponse',
    responseTimeDesc: 'Nous nous efforçons de répondre à tous les messages dans les 24-48 heures ouvrables. Pour les demandes urgentes, contactez-moi via WhatsApp.',
    faqTitle: 'Questions fréquemment posées',
    faqQ1: 'Comment puis-je demander une consultation technique?',
    faqA1: 'Vous pouvez nous contacter via le formulaire ci-dessus ou WhatsApp pour demander une consultation technique personnalisée.',
    faqQ2: 'Proposez-vous des formations?',
    faqA2: 'Oui, nous proposons des cours et du contenu éducatif en programmation et technologie. Suivez nos chaînes pour les mises à jour.',
    faqQ3: 'Combien de temps faut-il pour répondre aux messages?',
    faqA3: 'Nous nous efforçons de répondre dans les 24-48 heures ouvrables. Les messages urgents préfèrent être envoyés via WhatsApp.',
    faqQ4: 'Puis-je demander un projet personnalisé?',
    faqA4: 'Bien sûr! Nous proposons des services de développement personnalisés. Contactez-nous pour discuter des exigences de votre projet.',
    successMessage: 'Merci! Votre message a été envoyé avec succès. Nous vous contacterons bientôt.',
    requiredFieldIndicator: '*',
    requiredText: 'Ce champ est obligatoire'
  },
  en: {
    title: 'Contact Us',
    description: 'We are here to answer your questions and assist you in your tech journey',
    contactInfoTitle: 'Contact Information',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    whatsappDesc: 'Available through the links on the site',
    locationLabel: 'Location',
    locationCountry: 'Morocco',
    socialMediaTitle: 'Follow me on social media',
    formTitle: 'Send us a message',
    whatsappDirectTitle: 'Direct WhatsApp Send',
    whatsappDirectDesc: 'For a quick response, you can send your message directly via WhatsApp',
    openWhatsapp: 'Open WhatsApp',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    emailFieldLabel: 'Email',
    emailPlaceholder: 'Enter your email',
    subjectLabel: 'Message Subject',
    subjectPlaceholder: 'Choose the message subject',
    subjectOptions: {
      general: 'General Inquiry',
      support: 'Technical Support',
      webDevelopment: 'Web Development',
      appDevelopment: 'App Development',
      consultation: 'Technical Consultation',
      collaboration: 'Collaboration and Projects',
      other: 'Other'
    },
    priorityLabel: 'Message Priority',
    priorityPlaceholder: 'Choose the priority level',
    priorityOptions: {
      normal: 'Normal - Response within 24-48 hours',
      important: 'Important - Response within 12-24 hours',
      urgent: 'Urgent - Please use WhatsApp for quick response'
    },
    messageLabel: 'Message Details',
    messagePlaceholder: 'Write your message details here... The clearer the details, the more accurate and faster the response will be.',
    sendButton: 'Send Message',
    formNote: 'Note: All required fields are marked with (*). We respect your privacy and will not share your information with third parties.',
    quickResponseNote: 'For quick response: Use the WhatsApp button above or contact us at: hamzaamirni451@gmail.com',
    responseTimeTitle: 'Response Times',
    responseTimeDesc: 'We aim to respond to all messages within 24-48 business hours. For urgent inquiries, contact me via WhatsApp.',
    faqTitle: 'Frequently Asked Questions',
    faqQ1: 'How can I request a technical consultation?',
    faqA1: 'You can contact us through the form above or WhatsApp to request a personalized technical consultation.',
    faqQ2: 'Do you offer training courses?',
    faqA2: 'Yes, we offer courses and educational content in programming and technology. Follow our channels for updates.',
    faqQ3: 'How long does it take to respond to messages?',
    faqA3: 'We aim to respond within 24-48 business hours. Urgent messages are preferably sent via WhatsApp.',
    faqQ4: 'Can I request a custom project?',
    faqA4: 'Of course! We offer custom development services. Contact us to discuss your project requirements.',
    successMessage: 'Thank you! Your message has been sent successfully. We will contact you soon.',
    requiredFieldIndicator: '*',
    requiredText: 'This field is required'
  }
};

// About page
export const aboutPage = {
  title: {
    ar: 'عن وعني',
    fr: 'À propos de moi',
    en: 'About Me',
  },
  role: {
    ar: '👨 مطور ويب متخصص',
    fr: '👨 Développeur web spécialisé',
    en: '👨 Professional Web Developer',
  },
  description: {
    ar: `أهلا وسهلا! أنا حمزة اعمرني، مطور ويب متخصص عندي خبرة كبيرة في مجال البرمجيات والتقنيات. 🙌
    أعمل في مجالات الويب ديفلوبمنت والتطبيقات والبرمجيات والتقنيات الحديثة.
    أحب التعلم المستمر وتطوير المهارات في مجالات البرمجة والتصميم والتكنولوجيا.
    إذا كان لديك أي استفسار أو تريد التعاون معي، فلا تتردد في التواصل. 🔥`,
    fr: `Bonjour et bienvenue ! Je suis Hamza Amrni, un développeur web spécialisé avec une grande expérience dans le domaine des logiciels et des technologies. 🙌
    Je travaille dans les domaines du développement web, des applications, des logiciels et des technologies modernes.
    J'aime l'apprentissage continu et le développement de compétences en programmation, conception et technologie.
    Si vous avez des questions ou souhaitez collaborer avec moi, n'hésitez pas à me contacter. 🔥`,
    en: `Hello and welcome! I'm Hamza Amrni, a professional web developer with extensive experience in software and technologies. 🙌
    I work in web development, applications, software, and modern technologies.
    I love continuous learning and developing skills in programming, design, and technology.
    If you have any questions or would like to collaborate, feel free to get in touch. 🔥`,
  },
  skills: {
    title: {
      ar: 'مهاراتي',
      fr: 'Mes compétences',
      en: 'My Skills',
    },
    items: {
      htmlCssJs: {
        ar: 'HTML, CSS, JS',
        fr: 'HTML, CSS, JS',
        en: 'HTML, CSS, JS',
      },
      phpPython: {
        ar: 'PHP, Python',
        fr: 'PHP, Python',
        en: 'PHP, Python',
      },
      uiUx: {
        ar: 'تصميم واجهات المستخدم',
        fr: 'Conception UI/UX',
        en: 'UI/UX Design',
      },
      problemSolving: {
        ar: 'حل المشكلات',
        fr: 'Résolution de problèmes',
        en: 'Problem Solving',
      },
      hardwareSoftware: {
        ar: 'الهاردوير والسوفتوير',
        fr: 'Matériel et logiciel',
        en: 'Hardware & Software',
      },
    },
  },
  journey: {
    title: {
      ar: 'رحلتي',
      fr: 'Mon parcours',
      en: 'My Journey',
    },
    items: [
      {
        ar: 'بدأت تعلم البرمجيات في سن مبكرة وتعلمت من خلال الممارسة.',
        fr: "J'ai commencé à apprendre la programmation à un jeune âge et j'ai appris par la pratique.",
        en: 'I started learning software at an early age and learned through practice.',
      },
      {
        ar: 'أكملت الدراسة الثانوية في 2019.',
        fr: "J'ai terminé mes études secondaires en 2019.",
        en: 'I completed high school in 2019.',
      },
      {
        ar: 'عملت في عدة مشاريع برمجية مهمة.',
        fr: "J'ai travaillé sur plusieurs projets logiciels importants.",
        en: 'I have worked on several important software projects.',
      },
      {
        ar: 'اكتسبت خبرة كبيرة في مجالات البرمجة والويب.',
        fr: "J'ai acquis une grande expérience dans les domaines de la programmation et du web.",
        en: 'I have gained extensive experience in programming and web development.',
      },
    ],
  },
  philosophy: {
    title: {
      ar: '🎯 فلسفتي',
      fr: '🎯 Ma philosophie',
      en: "🎯 My Philosophy",
    },
    items: [
      {
        title: {
          ar: 'التعليم المستمر',
          fr: 'Apprentissage continu',
          en: 'Continuous Learning',
        },
        description: {
          ar: 'أؤمن بأن التعليم المستمر يدفعك للأمام والمعرفة تزداد كلما تعلمت أكثر.',
          fr: "Je crois que l'apprentissage continu vous pousse vers l'avant et que les connaissances augmentent à mesure que vous en apprenez davantage.",
          en: 'I believe that continuous learning pushes you forward and knowledge increases as you learn more.',
        },
      },
      {
        title: {
          ar: 'تقديم الجودة',
          fr: 'Fournir de la qualité',
          en: 'Deliver Quality',
        },
        description: {
          ar: 'أركز على تقديم جودة عالية في كل مشاريعي.',
          fr: 'Je me concentre sur la fourniture d\'une qualité élevée dans tous mes projets.',
          en: 'I focus on delivering high quality in all my projects.',
        },
      },
      {
        title: {
          ar: 'التصميم والإبداع',
          fr: 'Design et créativité',
          en: 'Design & Creativity',
        },
        description: {
          ar: 'أحب تقديم أفكار جديدة وحلول مبتكرة وجميلة.',
          fr: "J'aime proposer de nouvelles idées et des solutions innovantes et belles.",
          en: 'I enjoy presenting new ideas and innovative, beautiful solutions.',
        },
      },
    ],
  },
};

// Articles/Videos/Content pages
export const contentPages = {
  noContent: {
    ar: 'لا يوجد محتوى متاح حالياً',
    fr: 'Aucun contenu disponible pour le moment',
    en: 'No content available at the moment',
  },
  comingSoon: {
    ar: 'قريباً',
    fr: 'Bientôt disponible',
    en: 'Coming soon',
  },
  readMore: {
    ar: 'اقرأ المزيد',
    fr: 'Lire la suite',
    en: 'Read more',
  },
  watchVideo: {
    ar: 'مشاهدة الفيديو',
    fr: 'Regarder la vidéo',
    en: 'Watch video',
  },
  viewProject: {
    ar: 'عرض المشروع',
    fr: 'Voir le projet',
    en: 'View project',
  },
};

// Home page translations
export const homePage = {
  ar: {
    exampleProjects: {
      title: 'أمثلة على مشاريع برمجية بسيطة',
      projects: {
        calculator: 'آلة حاسبة بسيطة باستخدام HTML وCSS وJavaScript',
        portfolio: 'موقع صفحة تعريفية شخصية (Portfolio)',
        todoList: 'تطبيق قائمة مهام (To-Do List)',
        currencyConverter: 'برنامج لتحويل العملات',
        ticTacToe: 'لعبة XO (تيك تاك تو) على الويب',
      },
    },
  },
  fr: {
    exampleProjects: {
      title: 'Exemples de projets de programmation simples',
      projects: {
        calculator: 'Calculatrice simple utilisant HTML, CSS et JavaScript',
        portfolio: 'Site de portefeuille personnel',
        todoList: 'Application de liste de tâches',
        currencyConverter: 'Programme de conversion de devises',
        ticTacToe: 'Jeu de Morpion sur le Web',
      },
    },
  },
  en: {
    exampleProjects: {
      title: 'Examples of Simple Programming Projects',
      projects: {
        calculator: 'Simple calculator using HTML, CSS and JavaScript',
        portfolio: 'Personal portfolio website',
        todoList: 'To-Do List Application',
        currencyConverter: 'Currency Converter Program',
        ticTacToe: 'Tic Tac Toe Game on Web',
      },
    },
  },
};

// Videos page translations
export const videosPage = {
  ar: {
    title: 'أهم الفيديوهات التعليمية',
    description: 'ستجد هنا أهم الفيديوهات التعليمية في مجال البرمجة والتقنية:',
  },
  fr: {
    title: 'Vidéos Éducatives Importantes',
    description: 'Vous trouverez ici les vidéos éducatives les plus importantes dans le domaine de la programmation et de la technologie:',
  },
  en: {
    title: 'Important Educational Videos',
    description: 'Here you will find the most important educational videos in the field of programming and technology:',
  },
};

// Tools page translations
export const toolsPage = {
  ar: {
    noResults: 'لا توجد نتائج مطابقة لبحثك.',
  },
  fr: {
    noResults: 'Aucun résultat ne correspond à votre recherche.',
  },
  en: {
    noResults: 'No results match your search.',
  },
};

// Terms page translations
export const termsPage = {
  ar: {
    title: 'شروط الاستخدام',
    disclaimer: 'الشروط والأحكام التي تحكم استخدام موقع حمزة اعمرني',
  },
  fr: {
    title: 'Conditions d\'Utilisation',
    disclaimer: 'Les conditions et avis qui régissent l\'utilisation du site de Hamza Amrni',
  },
  en: {
    title: 'Terms of Use',
    disclaimer: 'The terms and notices that govern the use of Hamza Amrni\'s website',
  },
};

// Helper function to get translated text
export const t = (key: string, language: Language, params: Record<string, any> = {}): string | any => {
  // Split the key by dots to access nested properties
  const keys = key.split('.');
  
  // Special handling for navLabels - structure is different
  if (keys[0] === 'navLabels') {
    const labelKey = keys[1];
    const value = (navLabels as any)[language]?.[labelKey];
    if (typeof value === 'string') {
      return value;
    }
    return key; // Return key as fallback if not found
  }
  
  // Start with the root translations object
  const translations: any = {
    commonTexts,
    navLabels,
    heroContent,
    contactPage, // Language-first structure: {ar: {...}, fr: {...}, en: {...}}
    aboutPage,
    contentPages,
    homePage,
    videosPage,
    toolsPage,
    toolsPageComprehensive,
    termsPage,
    programmingPage: programmingPageLabels,
    funPage: funPageLabels,
    botsPage: botsPageLabels,
    articlesPage: articlesPageLabels,
    articlesPageComprehensive,
    articlesPageTranslations: articlesPageTranslations,
    chatPage: chatPageLabels,
    privacyPage: privacyPageLabels,
    disclaimerPage: disclaimerPageLabels,
    contactPageLabels,
    callToAction,
    sidebar,
    contactFormLabels,
    adManagerTranslations,
    footerTranslations,
    errorMessages,
    buttonLabels,
  };

  // Check if first key maps to a language-first structure (like homePage, videosPage, termsPage)
  if (keys[0] && translations[keys[0]] && (translations[keys[0]].ar || translations[keys[0]].fr || translations[keys[0]].en)) {
    // Language-first structure
    let value: any = (translations[keys[0]] as any)[language];
    
    // Traverse the rest of the keys
    for (let i = 1; i < keys.length; i++) {
      if (value === undefined || value === null) break;
      value = value[keys[i]];
    }
    
    if (typeof value === 'string') {
      return Object.entries(params).reduce(
        (str, [param, val]) => str.replace(new RegExp(`{{${param}}}`, 'g'), String(val)),
        value
      );
    }
    return key;
  }

  // Regular structure traversal
  let value: any = translations;

  // Traverse the object to get the value
  for (const k of keys) {
    if (value === undefined || value === null) break;
    value = value[k];
  }

  // If value is an object with language keys, return the appropriate translation
  if (value && typeof value === 'object' && (value.ar || value.fr || value.en)) {
    value = value[language] || value.ar; // Fallback to Arabic if translation not available
  }

  // If value is an array, return it as is (handled in the component)
  if (Array.isArray(value)) {
    return value;
  }

  // If value is a string, replace any placeholders
  if (typeof value === 'string') {
    return Object.entries(params).reduce(
      (str, [param, val]) => str.replace(new RegExp(`{{${param}}}`, 'g'), String(val)),
      value
    );
  }

  // If no translation found, return the key as a fallback
  return key;
};

// Page translations
export const programmingPageLabels = {
  ar: {
    title: '📚 دليل البرمجة الشامل',
    description: 'تعلم البرمجة من الصفر واكتشف أساسيات وأفكار برمجية مبتكرة',
    languages: 'لغات البرمجة',
    concepts: 'المفاهيم الأساسية',
    bestPractices: 'أفضل الممارسات',
    resources: 'موارد تعليمية'
  },
  fr: {
    title: '📚 Guide Complet de la Programmation',
    description: 'Apprenez la programmation de zéro et découvrez des idées de programmation innovantes',
    languages: 'Langages de programmation',
    concepts: 'Concepts fondamentaux',
    bestPractices: 'Meilleures pratiques',
    resources: 'Ressources éducatives'
  },
  en: {
    title: '📚 Comprehensive Programming Guide',
    description: 'Learn programming from scratch and discover innovative programming ideas',
    languages: 'Programming Languages',
    concepts: 'Fundamental Concepts',
    bestPractices: 'Best Practices',
    resources: 'Educational Resources'
  }
};

export const funPageLabels = {
  ar: {
    title: '🎮 منطقة المرح والتسلية',
    description: 'مشاريع برمجية مرحة وألعاب تفاعلية لتطوير مهاراتك بطريقة ممتعة',
    games: 'الألعاب',
    projects: 'مشاريع مرحة',
    challenges: 'تحديات برمجية'
  },
  fr: {
    title: '🎮 Zone de Plaisir et de Divertissement',
    description: 'Projets amusants et jeux interactifs pour développer vos compétences de manière agréable',
    games: 'Jeux',
    projects: 'Projets amusants',
    challenges: 'Défis de programmation'
  },
  en: {
    title: '🎮 Fun & Entertainment Zone',
    description: 'Fun projects and interactive games to develop your skills in an enjoyable way',
    games: 'Games',
    projects: 'Fun Projects',
    challenges: 'Programming Challenges'
  }
};

export const botsPageLabels = {
  ar: {
    title: '🤖 روبوتات وأتمتة',
    description: 'اكتشف عالم الروبوتات والأتمتة والذكاء الاصطناعي',
    whatsappBots: 'روبوتات واتس آب',
    telegramBots: 'روبوتات تيليجرام',
    discordBots: 'روبوتات ديسكورد',
    automation: 'أتمتة المهام'
  },
  fr: {
    title: '🤖 Robots et Automatisation',
    description: 'Découvrez le monde des robots, de l\'automatisation et de l\'IA',
    whatsappBots: 'Robots WhatsApp',
    telegramBots: 'Robots Telegram',
    discordBots: 'Robots Discord',
    automation: 'Automatisation des tâches'
  },
  en: {
    title: '🤖 Bots & Automation',
    description: 'Discover the world of bots, automation and artificial intelligence',
    whatsappBots: 'WhatsApp Bots',
    telegramBots: 'Telegram Bots',
    discordBots: 'Discord Bots',
    automation: 'Task Automation'
  }
};

export const articlesPageLabels = {
  ar: {
    title: '✍️ المقالات التقنية',
    description: 'مقالات شاملة عن البرمجة والتقنية والتطوير الشخصي',
    recent: 'أحدث المقالات',
    categories: 'التصنيفات',
    noArticles: 'لا توجد مقالات بعد',
    readMore: 'اقرأ المزيد'
  },
  fr: {
    title: '✍️ Articles Techniques',
    description: 'Articles complets sur la programmation, la technologie et le développement personnel',
    recent: 'Articles récents',
    categories: 'Catégories',
    noArticles: 'Aucun article pour le moment',
    readMore: 'Lire la suite'
  },
  en: {
    title: '✍️ Technical Articles',
    description: 'Comprehensive articles on programming, technology and personal development',
    recent: 'Recent Articles',
    categories: 'Categories',
    noArticles: 'No articles yet',
    readMore: 'Read More'
  }
};

export const chatPageLabels = {
  ar: {
    title: '💬 دردشة معي',
    description: 'تحدث معي واطرح أسئلتك حول البرمجة والتقنية',
    sendMessage: 'إرسال الرسالة',
    messagePlaceholder: 'اكتب رسالتك هنا...',
    typing: 'يكتب...',
    online: 'متصل الآن'
  },
  fr: {
    title: '💬 Discuter avec moi',
    description: 'Parlez-moi et posez vos questions sur la programmation et la technologie',
    sendMessage: 'Envoyer le message',
    messagePlaceholder: 'Écrivez votre message ici...',
    typing: 'Écrit...',
    online: 'En ligne maintenant'
  },
  en: {
    title: '💬 Chat with Me',
    description: 'Talk to me and ask your questions about programming and technology',
    sendMessage: 'Send Message',
    messagePlaceholder: 'Type your message here...',
    typing: 'Typing...',
    online: 'Online Now'
  }
};

export const privacyPageLabels = {
  ar: {
    title: 'سياسة الخصوصية',
    description: 'كيف نحافظ على بيانات خصوصيتك',
    dataCollection: 'جمع البيانات',
    dataUsage: 'استخدام البيانات',
    dataSecurity: 'أمان البيانات',
    contactUsAbout: 'تواصل معنا بشأن الخصوصية'
  },
  fr: {
    title: 'Politique de Confidentialité',
    description: 'Comment nous protégeons vos données personnelles',
    dataCollection: 'Collecte de données',
    dataUsage: 'Utilisation des données',
    dataSecurity: 'Sécurité des données',
    contactUsAbout: 'Contactez-nous au sujet de la confidentialité'
  },
  en: {
    title: 'Privacy Policy',
    description: 'How we protect your personal data',
    dataCollection: 'Data Collection',
    dataUsage: 'Data Usage',
    dataSecurity: 'Data Security',
    contactUsAbout: 'Contact us about privacy'
  }
};

export const disclaimerPageLabels = {
  ar: {
    title: 'إخلاء المسؤولية',
    description: 'الإخلاء القانوني للموقع',
    accuracy: 'دقة المعلومات',
    responsibility: 'المسؤولية',
    usage: 'الاستخدام'
  },
  fr: {
    title: 'Clause de non-responsabilité',
    description: 'Avertissement légal du site',
    accuracy: 'Exactitude des informations',
    responsibility: 'Responsabilité',
    usage: 'Utilisation'
  },
  en: {
    title: 'Disclaimer',
    description: 'Legal disclaimer for the website',
    accuracy: 'Accuracy of Information',
    responsibility: 'Responsibility',
    usage: 'Usage'
  }
};

export const contactPageLabels = {
  ar: {
    title: '📧 تواصل معي',
    description: 'أرسل لي رسالة واستقبل ردًا في أسرع وقت',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    send: 'إرسال',
    sending: 'جاري الإرسال...',
    sent: 'تم الإرسال بنجاح!',
    error: 'حدث خطأ في الإرسال'
  },
  fr: {
    title: '📧 Contactez-moi',
    description: 'Envoyez-moi un message et recevez une réponse rapidement',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer',
    sending: 'Envoi en cours...',
    sent: 'Envoyé avec succès!',
    error: 'Erreur lors de l\'envoi'
  },
  en: {
    title: '📧 Contact Me',
    description: 'Send me a message and get a quick response',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    sent: 'Sent successfully!',
    error: 'Error sending message'
  }
};

export const termsPageLabels = {
  ar: {
    title: 'شروط الاستخدام',
    acceptanceTitle: '1. قبول الشروط',
    acceptance: 'باستخدام موقع حمزة اعمرني، فإنك توافق على الالتزام بهذه الشروط والأحكام.',
    serviceTitle: '2. وصف الخدمة',
    serviceDesc: 'موقع حمزة اعمرني هو منصة تقنية تقدم محتوى تعليمي ومقالات ودروس تقنية',
    usageTitle: '3. الاستخدام المقبول',
    usageDesc: 'يُسمح باستخدام الموقع للاطلاع على المحتوى والتعلم والتواصل',
    forbiddenTitle: '4. الاستخدام المحظور',
    forbiddenDesc: 'يُحظر نسخ المحتوى أو استخدام الموقع لأغراض غير قانونية',
    ipTitle: '5. حقوق الملكية الفكرية',
    ipDesc: 'جميع المحتويات محمية بحقوق الطبع والنشر',
    disclaimerTitle: '6. إخلاء المسؤولية',
    disclaimerDesc: 'الموقع والمحتوى مقدمان "كما هما" دون أي ضمانات'
  },
  fr: {
    title: 'Conditions d\'utilisation',
    acceptanceTitle: '1. Acceptation des conditions',
    acceptance: 'En utilisant le site de Hamza Amrni, vous acceptez de respecter ces conditions.',
    serviceTitle: '2. Description du service',
    serviceDesc: 'Le site de Hamza Amrni est une plateforme technique qui propose du contenu éducatif.',
    usageTitle: '3. Utilisation autorisée',
    usageDesc: 'Vous êtes autorisé à utiliser le site pour consulter le contenu et apprendre.',
    forbiddenTitle: '4. Utilisation interdite',
    forbiddenDesc: 'Il est interdit de copier le contenu ou d\'utiliser le site à des fins illégales.',
    ipTitle: '5. Droits de propriété intellectuelle',
    ipDesc: 'Tout le contenu est protégé par les droits d\'auteur.',
    disclaimerTitle: '6. Clause de non-responsabilité',
    disclaimerDesc: 'Le site et le contenu sont fournis "tels quels" sans garanties.'
  },
  en: {
    title: 'Terms of Use',
    acceptanceTitle: '1. Acceptance of Terms',
    acceptance: 'By using Hamza Amrni\'s website, you agree to comply with these terms.',
    serviceTitle: '2. Service Description',
    serviceDesc: 'Hamza Amrni\'s website is a technical platform offering educational content.',
    usageTitle: '3. Acceptable Use',
    usageDesc: 'You are allowed to use the site to view content and learn.',
    forbiddenTitle: '4. Forbidden Use',
    forbiddenDesc: 'It is prohibited to copy the content or use the site for illegal purposes.',
    ipTitle: '5. Intellectual Property Rights',
    ipDesc: 'All content is protected by copyright.',
    disclaimerTitle: '6. Disclaimer',
    disclaimerDesc: 'The site and content are provided "as is" without warranties.'
  }
};

// Cookie Consent translations
export const cookieConsent = {
  ar: {
    title: '🍪 نحن نستخدم ملفات تعريف الارتباط',
    description: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وعرض إعلانات مخصصة وتحليل حركة المرور. من خلال الاستمرار في استخدام موقعنا، فإنك توافق على استخدام ملفات تعريف الارتباط وفقاً لسياسة الخصوصية الخاصة بنا.',
    privacyLink: 'سياسة الخصوصية',
    acceptAll: 'قبول جميع ملفات تعريف الارتباط',
    necessaryOnly: 'الضرورية فقط',
    showDetails: 'عرض التفاصيل',
    hideDetails: 'إخفاء التفاصيل',
    necessary: 'ملفات تعريف الارتباط الضرورية',
    necessaryRequired: 'مطلوبة',
    necessaryDesc: 'ضرورية لعمل الموقع الأساسي وحفظ تفضيلاتك',
    analytics: 'ملفات تعريف الارتباط التحليلية',
    analyticsDesc: 'تساعدنا في فهم كيفية استخدام الزوار للموقع لتحسين الأداء',
    advertising: 'ملفات تعريف الارتباط الإعلانية',
    advertisingDesc: 'تُستخدم لعرض إعلانات مخصصة وذات صلة بك'
  },
  fr: {
    title: '🍪 Nous utilisons des cookies',
    description: 'Nous utilisons des cookies pour améliorer votre expérience, afficher des publicités personnalisées et analyser le trafic. En continuant à utiliser notre site, vous acceptez l\'utilisation de cookies conformément à notre politique de confidentialité.',
    privacyLink: 'Politique de confidentialité',
    acceptAll: 'Accepter tous les cookies',
    necessaryOnly: 'Seulement les nécessaires',
    showDetails: 'Afficher les détails',
    hideDetails: 'Masquer les détails',
    necessary: 'Cookies nécessaires',
    necessaryRequired: 'Obligatoire',
    necessaryDesc: 'Nécessaires pour le fonctionnement du site et la sauvegarde de vos préférences',
    analytics: 'Cookies analytiques',
    analyticsDesc: 'Nous aident à comprendre comment les visiteurs utilisent le site pour améliorer les performances',
    advertising: 'Cookies publicitaires',
    advertisingDesc: 'Utilisés pour afficher des publicités personnalisées et pertinentes'
  },
  en: {
    title: '🍪 We use cookies',
    description: 'We use cookies to improve your experience, display personalized ads, and analyze traffic. By continuing to use our site, you agree to the use of cookies in accordance with our privacy policy.',
    privacyLink: 'Privacy Policy',
    acceptAll: 'Accept all cookies',
    necessaryOnly: 'Necessary only',
    showDetails: 'Show details',
    hideDetails: 'Hide details',
    necessary: 'Necessary cookies',
    necessaryRequired: 'Required',
    necessaryDesc: 'Essential for site functionality and saving your preferences',
    analytics: 'Analytics cookies',
    analyticsDesc: 'Help us understand how visitors use the site to improve performance',
    advertising: 'Advertising cookies',
    advertisingDesc: 'Used to display personalized and relevant ads'
  }
};

// Contact Form translations
export const contactFormTranslations = {
  ar: {
    nameRequired: 'الرجاء إدخال الاسم والرسالة على الأقل',
    sending: 'جاري الإرسال...',
    sent: 'تم الإرسال بنجاح!',
    error: 'حدث خطأ في الإرسال',
    success: 'شكراً لتواصلك معنا! لقد تلقينا رسالتك وسنقوم بالرد عليك في أقرب فرصة. نقدّر اهتمامك!',
    newMessageFromSite: 'رسالة جديدة من موقعي',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    requestType: 'نوع الطلب',
    priority: 'الأولوية',
    notSpecified: 'لم يحدد',
    message: 'الرسالة',
    from: 'من',
    visitor: 'زائر',
    sentFromSite: 'تم الإرسال من الموقع'
  },
  fr: {
    nameRequired: 'Veuillez saisir au moins le nom et le message',
    sending: 'Envoi en cours...',
    sent: 'Envoyé avec succès!',
    error: 'Erreur lors de l\'envoi',
    success: 'Merci de nous avoir contactés! Nous avons reçu votre message et vous répondrons dès que possible. Nous apprécions votre intérêt!',
    newMessageFromSite: 'Nouveau message de mon site',
    name: 'Nom',
    email: 'Email',
    requestType: 'Type de demande',
    priority: 'Priorité',
    notSpecified: 'Non spécifié',
    message: 'Message',
    from: 'De',
    visitor: 'Visiteur',
    sentFromSite: 'Envoyé depuis le site'
  },
  en: {
    nameRequired: 'Please enter at least name and message',
    sending: 'Sending...',
    sent: 'Sent successfully!',
    error: 'Error sending message',
    success: 'Thank you for contacting us! We have received your message and will respond to you as soon as possible. We appreciate your interest!',
    newMessageFromSite: 'New message from my site',
    name: 'Name',
    email: 'Email',
    requestType: 'Request type',
    priority: 'Priority',
    notSpecified: 'Not specified',
    message: 'Message',
    from: 'From',
    visitor: 'Visitor',
    sentFromSite: 'Sent from site'
  }
};

// Call to Action translations
export const callToAction = {
  ar: {
    title: 'هل لديك سؤال أو فكرة مشروع؟',
    description: 'أنا هنا للمساعدة! سواء كنت تحتاج إلى استشارة تقنية، أو ترغب في مناقشة فكرة، أو حتى تريد أن تقول مرحباً، لا تتردد في التواصل معي.',
    buttonText: 'تواصل معي الآن'
  },
  fr: {
    title: 'Avez-vous une question ou une idée de projet ?',
    description: 'Je suis ici pour vous aider ! Que vous ayez besoin de conseils techniques, que vous souhaitiez discuter d\'une idée ou simplement dire bonjour, n\'hésitez pas à me contacter.',
    buttonText: 'Contactez-moi maintenant'
  },
  en: {
    title: 'Do you have a question or project idea?',
    description: 'I\'m here to help! Whether you need technical consultation, want to discuss an idea, or just want to say hello, feel free to contact me.',
    buttonText: 'Contact me now'
  }
};

// Sidebar translations
export const sidebar = {
  ar: {
    name: 'حمزة اعمرني',
    title: 'مبرمج وصانع محتوى تقني'
  },
  fr: {
    name: 'Hamza Amrni',
    title: 'Développeur et créateur de contenu tech'
  },
  en: {
    name: 'Hamza Amrni',
    title: 'Developer & tech content creator'
  }
};

// Articles page translations
export const articlesPageTranslations = {
  ar: {
    tags: 'الوسوم:'
  },
  fr: {
    tags: 'Mots-clés:'
  },
  en: {
    tags: 'Tags:'
  }
};

// Contact form translations
export const contactFormLabels = {
  ar: {
    namePlaceholder: 'الاسم الكامل',
    emailPlaceholder: 'البريد الإلكتروني (اختياري)',
    messagePlaceholder: 'اكتب رسالتك هنا بالتفصيل...',
    sendViaEmail: 'إرسال عبر البريد',
    sendViaWhatsApp: 'إرسال عبر واتساب'
  },
  fr: {
    namePlaceholder: 'Nom complet',
    emailPlaceholder: 'Email (facultatif)',
    messagePlaceholder: 'Écrivez votre message en détail ici...',
    sendViaEmail: 'Envoyer par email',
    sendViaWhatsApp: 'Envoyer via WhatsApp'
  },
  en: {
    namePlaceholder: 'Full name',
    emailPlaceholder: 'Email (optional)',
    messagePlaceholder: 'Write your message in detail here...',
    sendViaEmail: 'Send via email',
    sendViaWhatsApp: 'Send via WhatsApp'
  }
};

// Tools page comprehensive translations
export const toolsPageComprehensive = {
  ar: {
    searchPlaceholder: 'ابحث عن أداة أو موقع...',
    noResults: 'لا توجد نتائج مطابقة لبحثك.'
  },
  fr: {
    searchPlaceholder: 'Recherchez un outil ou un site...',
    noResults: 'Aucun résultat ne correspond à votre recherche.'
  },
  en: {
    searchPlaceholder: 'Search for a tool or website...',
    noResults: 'No results match your search.'
  }
};

// Footer and general UI translations
export const footerTranslations = {
  ar: {
    allRightsReserved: 'جميع الحقوق محفوظة',
    followMe: 'تابعني',
    quickLinks: 'روابط سريعة',
    contact: 'اتصل بنا',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    disclaimer: 'إخلاء المسؤولية',
    madeWith: 'صنع بـ ❤️',
    byHamza: 'بواسطة حمزة اعمرني'
  },
  fr: {
    allRightsReserved: 'Tous les droits sont réservés',
    followMe: 'Suivez-moi',
    quickLinks: 'Liens rapides',
    contact: 'Nous contacter',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d\'utilisation',
    disclaimer: 'Avertissement',
    madeWith: 'Créé avec ❤️',
    byHamza: 'Par Hamza Amrni'
  },
  en: {
    allRightsReserved: 'All rights reserved',
    followMe: 'Follow me',
    quickLinks: 'Quick links',
    contact: 'Contact us',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    disclaimer: 'Disclaimer',
    madeWith: 'Made with ❤️',
    byHamza: 'By Hamza Amrni'
  }
};

// Error and loading messages
export const errorMessages = {
  ar: {
    pageNotFound: 'الصفحة غير موجودة',
    notFound404: '404 - لم نتمكن من العثور على هذه الصفحة',
    goBack: 'العودة إلى الصفحة الرئيسية',
    errorLoading: 'حدث خطأ في تحميل الصفحة',
    tryAgain: 'حاول مرة أخرى',
    networkError: 'خطأ في الاتصال بالإنترنت',
    checkConnection: 'يرجى التحقق من اتصالك بالإنترنت'
  },
  fr: {
    pageNotFound: 'Page non trouvée',
    notFound404: '404 - Nous n\'avons pas pu trouver cette page',
    goBack: 'Retour à la page d\'accueil',
    errorLoading: 'Erreur lors du chargement de la page',
    tryAgain: 'Réessayez',
    networkError: 'Erreur de connexion Internet',
    checkConnection: 'Veuillez vérifier votre connexion Internet'
  },
  en: {
    pageNotFound: 'Page not found',
    notFound404: '404 - We couldn\'t find this page',
    goBack: 'Back to homepage',
    errorLoading: 'Error loading page',
    tryAgain: 'Try again',
    networkError: 'Internet connection error',
    checkConnection: 'Please check your Internet connection'
  }
};

// Buttons and common actions
export const buttonLabels = {
  ar: {
    visit: 'زيارة',
    download: 'تحميل',
    demo: 'عرض توضيحي',
    github: 'GitHub',
    preview: 'معاينة',
    learn: 'تعلم المزيد',
    subscribe: 'اشترك',
    like: 'إعجاب',
    share: 'مشاركة',
    reply: 'رد',
    expand: 'توسيع',
    collapse: 'طي',
    sort: 'ترتيب',
    filter: 'تصفية'
  },
  fr: {
    visit: 'Visiter',
    download: 'Télécharger',
    demo: 'Démo',
    github: 'GitHub',
    preview: 'Aperçu',
    learn: 'En savoir plus',
    subscribe: 'S\'abonner',
    like: 'J\'aime',
    share: 'Partager',
    reply: 'Répondre',
    expand: 'Développer',
    collapse: 'Réduire',
    sort: 'Trier',
    filter: 'Filtrer'
  },
  en: {
    visit: 'Visit',
    download: 'Download',
    demo: 'Demo',
    github: 'GitHub',
    preview: 'Preview',
    learn: 'Learn more',
    subscribe: 'Subscribe',
    like: 'Like',
    share: 'Share',
    reply: 'Reply',
    expand: 'Expand',
    collapse: 'Collapse',
    sort: 'Sort',
    filter: 'Filter'
  }
};

// Articles page comprehensive translations
export const articlesPageComprehensive = {
  ar: {
    searchPlaceholder: 'ابحث عن مقالة...',
    noResults: 'لا توجد مقالات مطابقة لبحثك.',
    categories: 'التصنيفات',
    recent: 'أحدث المقالات',
    trending: 'المقالات الأكثر قراءة',
    tags: 'الوسوم'
  },
  fr: {
    searchPlaceholder: 'Recherchez un article...',
    noResults: 'Aucun article ne correspond à votre recherche.',
    categories: 'Catégories',
    recent: 'Articles récents',
    trending: 'Articles les plus lus',
    tags: 'Mots-clés'
  },
  en: {
    searchPlaceholder: 'Search for an article...',
    noResults: 'No articles match your search.',
    categories: 'Categories',
    recent: 'Recent Articles',
    trending: 'Most Read Articles',
    tags: 'Tags'
  }
};

// AdManager page translations
export const adManagerTranslations = {
  ar: {
    title: 'مدير الإعلانات',
    description: 'أدارة إعلاناتك وعروضاتك',
    createNewAd: 'إنشاء إعلان جديد',
    ads: 'الإعلانات',
    noAds: 'لا توجد إعلانات بعد',
    adTitle: 'عنوان الإعلان',
    adTitlePlaceholder: 'أدخل عنوان الإعلان',
    adType: 'نوع الإعلان',
    adTypePlaceholder: 'اختر نوع الإعلان',
    adTypes: {
      banner: 'بانر',
      sidebar: 'جانبي',
      inline: 'داخل المحتوى'
    },
    adDescription: 'الوصف',
    adDescriptionPlaceholder: 'أدخل وصف الإعلان',
    imageUrl: 'رابط الصورة',
    imageUrlPlaceholder: 'أدخل رابط الصورة',
    targetUrl: 'رابط الهدف',
    targetUrlPlaceholder: 'أدخل رابط الموقع الهدف',
    status: 'الحالة',
    active: 'مفعل',
    inactive: 'معطل',
    create: 'إنشاء',
    update: 'تحديث',
    delete: 'حذف',
    cancel: 'إلغاء',
    save: 'حفظ',
    edit: 'تعديل',
    enable: 'تفعيل',
    disable: 'تعطيل',
    enableAd: 'تفعيل الإعلان',
    editAd: 'تعديل الإعلان',
    deleteAd: 'حذف الإعلان',
    confirmDelete: 'هل أنت متأكد من حذف هذا الإعلان؟',
    success: 'تم بنجاح',
    error: 'حدث خطأ',
    viewAds: 'عرض الإعلانات',
    statistics: 'الإحصائيات',
    impressions: 'الانطباعات',
    clicks: 'النقرات',
    ctr: 'معدل النقر'
  },
  fr: {
    title: 'Gestionnaire d\'annonces',
    description: 'Gérez vos annonces et offres',
    createNewAd: 'Créer une nouvelle annonce',
    ads: 'Annonces',
    noAds: 'Aucune annonce pour le moment',
    adTitle: 'Titre de l\'annonce',
    adTitlePlaceholder: 'Entrez le titre de l\'annonce',
    adType: 'Type d\'annonce',
    adTypePlaceholder: 'Choisissez le type d\'annonce',
    adTypes: {
      banner: 'Bannière',
      sidebar: 'Sidebar',
      inline: 'Contenu intégré'
    },
    adDescription: 'Description',
    adDescriptionPlaceholder: 'Entrez la description de l\'annonce',
    imageUrl: 'URL de l\'image',
    imageUrlPlaceholder: 'Entrez l\'URL de l\'image',
    targetUrl: 'URL cible',
    targetUrlPlaceholder: 'Entrez l\'URL du site cible',
    status: 'Statut',
    active: 'Actif',
    inactive: 'Inactif',
    create: 'Créer',
    update: 'Mettre à jour',
    delete: 'Supprimer',
    cancel: 'Annuler',
    save: 'Enregistrer',
    edit: 'Modifier',
    enable: 'Activer',
    disable: 'Désactiver',
    enableAd: 'Activer l\'annonce',
    editAd: 'Modifier l\'annonce',
    deleteAd: 'Supprimer l\'annonce',
    confirmDelete: 'Êtes-vous sûr de vouloir supprimer cette annonce ?',
    success: 'Succès',
    error: 'Une erreur est survenue',
    viewAds: 'Voir les annonces',
    statistics: 'Statistiques',
    impressions: 'Impressions',
    clicks: 'Clics',
    ctr: 'Taux de clics'
  },
  en: {
    title: 'Ad Manager',
    description: 'Manage your ads and offers',
    createNewAd: 'Create new ad',
    ads: 'Ads',
    noAds: 'No ads yet',
    adTitle: 'Ad Title',
    adTitlePlaceholder: 'Enter ad title',
    adType: 'Ad Type',
    adTypePlaceholder: 'Choose ad type',
    adTypes: {
      banner: 'Banner',
      sidebar: 'Sidebar',
      inline: 'Inline Content'
    },
    adDescription: 'Description',
    adDescriptionPlaceholder: 'Enter ad description',
    imageUrl: 'Image URL',
    imageUrlPlaceholder: 'Enter image URL',
    targetUrl: 'Target URL',
    targetUrlPlaceholder: 'Enter target website URL',
    status: 'Status',
    active: 'Active',
    inactive: 'Inactive',
    create: 'Create',
    update: 'Update',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    enable: 'Enable',
    disable: 'Disable',
    enableAd: 'Enable ad',
    editAd: 'Edit ad',
    deleteAd: 'Delete ad',
    confirmDelete: 'Are you sure you want to delete this ad?',
    success: 'Success',
    error: 'An error occurred',
    viewAds: 'View ads',
    statistics: 'Statistics',
    impressions: 'Impressions',
    clicks: 'Clicks',
    ctr: 'Click rate'
  }
};

// For backward compatibility
export const getNavLabel = (language: Language, id: string): string => {
  return t(`navLabels.${id}`, language);
};
