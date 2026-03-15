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

// Search Modal translations
export const searchModal = {
  ar: {
    placeholder: 'بحث عن المقالات، البوتات، أو الأدوات',
    noResults: 'لا توجد نتائج مطابقة لبحثك.',
    escToClose: 'للإغلاق',
    smartSearchBy: 'بحث ذكي بواسطة',
    categories: {
      article: 'مقال',
      app: 'تطبيق',
      bot: 'بوت ذكي',
      tool: 'أداة مفيدة',
      game: 'لعبة ممتعة',
      section: 'قسم في الموقع',
      channel: 'قناة تواصل',
      social: 'رابط تواصل',
    }
  },
  fr: {
    placeholder: 'Rechercher des articles, des bots ou des outils...',
    noResults: 'Aucun résultat correspondant à votre recherche.',
    escToClose: 'pour fermer',
    smartSearchBy: 'Recherche intelligente par',
    categories: {
      article: 'Article',
      app: 'Application',
      bot: 'Bot intelligent',
      tool: 'Outil utile',
      game: 'Jeu amusant',
      section: 'Section du site',
      channel: 'Canal de communication',
      social: 'Lien social',
    }
  },
  en: {
    placeholder: 'Search for articles, bots, or tools...',
    noResults: 'No results matching your search.',
    escToClose: 'to close',
    smartSearchBy: 'Smart search by',
    categories: {
      article: 'Article',
      app: 'App',
      bot: 'Smart Bot',
      tool: 'Useful Tool',
      game: 'Fun Game',
      section: 'Site Section',
      channel: 'Communication Channel',
      social: 'Social Link',
    }
  }
};

// Navigation labels
export const navLabels = {
  ar: {
    home: 'الصفحة الرئيسية',
    about: 'عني',
    projects: 'مشاريعي',
    videos: 'الفيديوهات',
    programming: 'البرمجة',
    apps: 'التطبيقات',
    services: 'خدماتنا',
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
    projects: 'Mes Projets',
    videos: 'Vidéos',
    programming: 'Programmation',
    apps: 'Applications',
    services: 'Nos Services',
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
    projects: 'My Projects',
    videos: 'Videos',
    programming: 'Programming',
    apps: 'Apps',
    services: 'Our Services',
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
    fr: 'Hamza Amirni',
    en: 'Hamza Amirni',
  },
  subtitle: {
    ar: 'مطور روبوتات وخبير ويب',
    fr: 'Développeur de Bots et Expert Web',
    en: 'Freelance Bot Developer & Web Expert',
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
      webDevelopment: 'تطوير مواقع ويب',
      appDevelopment: 'تطوير تطبيقات',
      botsAutomation: 'برمجة بوتات وأتمتة',
      consultation: 'استشارة تقنية',
      support: 'دعم فني',
      training: 'طلب دورة تدريبية',
      collaboration: 'تعاون ومشاريع',
      contentCreation: 'صناعة محتوى وإعلانات',
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
    messagePlaceholder: 'اكتب تفاصيل رسالتك هنا. كلما كانت التفاصيل أوضح، كان الرد أدق وأسرع.',
    sendButton: 'إرسال الرسالة',
    sendViaWhatsapp: 'إرسال عبر واتساب',
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
    requiredText: 'هذا الحقل مطلوب',
    whatsappTemplate: {
      header: '*رسالة جديدة من الموقع* 🌐',
      name: '👤 *الاسم:*',
      email: '📧 *البريد:*',
      subject: '📝 *الموضوع:*',
      priority: '🚨 *الأهمية:*',
      message: '*الرسالة:*'
    }
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
      webDevelopment: 'Développement web',
      appDevelopment: 'Développement d\'applications',
      botsAutomation: 'Bots et Automatisation',
      consultation: 'Consultation technique',
      support: 'Support technique',
      training: 'Demande de formation',
      collaboration: 'Collaboration et projets',
      contentCreation: 'Création de contenu et publicités',
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
    messagePlaceholder: 'Écrivez les détails de votre message ici. Plus les informations sont claires, plus la réponse sera précise et rapide.',
    sendButton: 'Envoyer le message',
    sendViaWhatsapp: 'Envoyer via WhatsApp',
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
    requiredText: 'Ce champ est obligatoire',
    whatsappTemplate: {
      header: '*Nouveau message du site* 🌐',
      name: '👤 *Nom:*',
      email: '📧 *Email:*',
      subject: '📝 *Sujet:*',
      priority: '🚨 *Priorité:*',
      message: '*Message:*'
    }
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
      webDevelopment: 'Web Development',
      appDevelopment: 'App Development',
      botsAutomation: 'Bots & Automation',
      consultation: 'Technical Consultation',
      support: 'Technical Support',
      training: 'Training Course Request',
      collaboration: 'Collaboration and Projects',
      contentCreation: 'Content Creation & Ads',
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
    messagePlaceholder: 'Write your message details here. The clearer the details, the more accurate and faster the response will be.',
    sendButton: 'Send Message',
    sendViaWhatsapp: 'Send via WhatsApp',
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
    requiredText: 'This field is required',
    whatsappTemplate: {
      header: '*New Message from Website* 🌐',
      name: '👤 *Name:*',
      email: '📧 *Email:*',
      subject: '📝 *Subject:*',
      priority: '🚨 *Priority:*',
      message: '*Message:*'
    }
  }
};

// About page
export const aboutPage = {
  title: {
    ar: 'عن وعني',
    fr: 'À propos de moi',
    en: 'About Me',
  },
  name: {
    ar: 'حمزة اعمرني',
    fr: 'Hamza Amirni',
    en: 'Hamza Amirni',
  },
  role: {
    ar: 'مطور روبوتات وخبير ويب',
    fr: 'Développeur de Bots et Expert Web',
    en: 'Freelance Bot Developer & Web Expert',
  },
  welcome: {
    ar: 'مرحباً، أنا ',
    fr: 'Bonjour, je suis ',
    en: 'Hello, I am ',
  },
  buttons: {
    contact: { ar: 'تواصل معي', fr: 'Contactez-moi', en: 'Contact Me' },
    projects: { ar: 'شاهد أعمالي', fr: 'Voir mes projets', en: 'View My Work' },
  },
  stats: [
    { ar: 'سنوات خبرة', fr: 'Années d\'expérience', en: 'Years Experience' },
    { ar: 'مشروع ناجح', fr: 'Projets réussis', en: 'Successful Projects' },
    { ar: 'عميل سعيد', fr: 'Clients satisfaits', en: 'Happy Clients' },
    { ar: 'كوب قهوة', fr: 'Tasses de café', en: 'Cups of Coffee' },
  ],
  story: {
    title: { ar: 'قصتي ورؤيتي', fr: 'Mon Histoire & Ma Vision', en: 'My Story & Vision' },
    p1: {
      ar: 'بدأت رحلتي في عالم البرمجة بشغف بسيط لمعرفة كيف تعمل الأشياء خلف الكواليس. تطور هذا الشغف ليصبح مسيرة مهنية ممتعة مليئة بالتحديات والإنجازات.',
      fr: 'Mon voyage dans le monde de la programmation a commencé par une simple passion pour comprendre comment les choses fonctionnent dans les coulisses. Cette passion s\'est transformée en une carrière agréable, pleine de défis et de réussites.',
      en: 'My journey into the world of programming started with a simple passion for knowing how things work behind the scenes. This passion evolved into an enjoyable career full of challenges and achievements.',
    },
    p2: {
      ar: 'أؤمن بأن التكنولوجيا هي أداة قوية لتحسين حياة الناس وحل المشكلات المعقدة. لذلك، أسعى دائماً لتعلم كل ما هو جديد ومشاركة معرفتي مع الآخرين من خلال صناعة المحتوى التقني.',
      fr: 'Je crois que la technologie est un outil puissant pour améliorer la vie des gens et résoudre des problèmes complexes. C\'est pourquoi je cherche toujours à apprendre tout ce qui est nouveau et à partager mes connaissances avec les autres à travers la création de contenu technique.',
      en: 'I believe that technology is a powerful tool for improving people\'s lives and solving complex problems. Therefore, I always strive to learn everything new and share my knowledge with others through technical content creation.',
    },
    p3: {
      ar: 'رؤيتي هي بناء مجتمع تقني عربي قوي ومبدع، والمساهمة في تطوير مشاريع تترك أثراً إيجابياً في العالم.',
      fr: 'Ma vision est de construire une communauté technique arabe forte et créative, et de contribuer au développement de projets qui laissent un impact positif dans le monde.',
      en: 'My vision is to build a strong and creative Arabic technical community, and to contribute to the development of projects that leave a positive impact on the world.',
    },
  },
  description: {
    ar: 'أهلاً وسهلاً! أنا حمزة اعمرني، مطور ويب متخصص أمتلك خبرة واسعة في البرمجيات والتقنيات. أعمل في تطوير الويب والتطبيقات والبرمجيات الحديثة. أحب التعلم المستمر وتطوير المهارات في البرمجة والتصميم والتكنولوجيا. إذا كان لديك أي استفسار أو رغبة في التعاون، فلا تتردد في التواصل. 🔥',
    fr: 'Bonjour et bienvenue ! Je suis Hamza Amirni, développeur web spécialisé avec une solide expérience dans les logiciels et les technologies. Je travaille sur le développement web, les applications et les technologies modernes. J’apprécie l’apprentissage continu et le développement de compétences en programmation, design et technologie. Si vous avez des questions ou souhaitez collaborer, contactez‑moi. 🔥',
    en: 'Hello and welcome! I’m Hamza Amirni, a professional web developer with extensive experience in software and modern technologies. I work on web development, applications and modern tech. I enjoy continuous learning and improving skills in programming, design and technology. If you have any questions or would like to collaborate, feel free to get in touch. 🔥',
  },
  values: [
    { title: { ar: 'الجودة والتميز', fr: 'Qualité & Excellence', en: 'Quality & Excellence' }, description: { ar: 'أسعى دائماً لتقديم أفضل جودة ممكنة في كل سطر كود أكتبه.', fr: 'Je m\'efforce toujours de fournir la meilleure qualité possible dans chaque ligne de code que j\'écris.', en: 'I always strive to deliver the best possible quality in every line of code I write.' } },
    { title: { ar: 'السرعة والأداء', fr: 'Vitesse & Performance', en: 'Speed & Performance' }, description: { ar: 'أركز على بناء تطبيقات سريعة وفعالة توفر تجربة مستخدم سلسة.', fr: 'Je me concentre sur la création d\'applications rapides et efficaces qui offrent une expérience utilisateur fluide.', en: 'I focus on building fast and efficient applications that provide a smooth user experience.' } },
    { title: { ar: 'الشغف والتعلم', fr: 'Passion & Apprentissage', en: 'Passion & Learning' }, description: { ar: 'البرمجة ليست مجرد عمل، بل هي شغف يدفعني للتعلم المستمر.', fr: 'La programmation n\'est pas seulement un travail, c\'est une passion qui me pousse à apprendre continuellement.', en: 'Programming is not just a job, it\'s a passion that drives me to learn continuously.' } },
  ],
  sections: {
    skills: { ar: 'مهاراتي التقنية', fr: 'Mes Compétences Techniques', en: 'My Technical Skills' },
    journey: { ar: 'رحلتي التعليمية', fr: 'Mon Parcours Éducatif', en: 'My Educational Journey' },
  },
  skills: {
    title: {
      ar: 'مهاراتي التقنية',
      fr: 'Mes Compétences Techniques',
      en: 'My Technical Skills',
    },
    items: {
      frontend: { ar: 'تطوير الواجهات', fr: 'Développement Frontend', en: 'Frontend Development' },
      backend: { ar: 'تطوير الخلفيات', fr: 'Développement Backend', en: 'Backend Development' },
      mobile: { ar: 'تطبيقات الموبايل', fr: 'Applications Mobiles', en: 'Mobile Applications' },
      databases: { ar: 'قواعد البيانات', fr: 'Bases de données', en: 'Databases' },
      algorithms: { ar: 'الخوارزميات', fr: 'Algorithmes', en: 'Algorithms' },
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
        ar: 'حاصل على شهادة البكالوريا في العلوم الفيزيائية (PC) سنة 2023.',
        fr: 'Obtention du Baccalauréat en Sciences Physiques (PC) en 2023.',
        en: 'Obtained a Baccalaureate in Physics and Chemistry in 2023.',
      },
      {
        ar: 'أكملت سنة من التكوين في شعبة رسم البناء (Dessin de Bâtiment).',
        fr: 'J\'ai terminé une année de formation en Dessin de Bâtiment.',
        en: 'Completed one year of training in Building Drawing (Dessin de Bâtiment).',
      },
      {
        ar: 'أتابع حالياً دراستي في شعبة التطوير الرقمي (Développement Digital) بمعهد OFPPT.',
        fr: 'J\'étudie actuellement le Développement Digital à l\'OFPPT.',
        en: 'Currently studying Digital Development at OFPPT.',
      },
      {
        ar: 'أعمل على تطوير مهاراتي في البرمجة وبناء البوتات والحلول الرقمية الحديثة.',
        fr: 'Je développe mes compétences en programmation, création de bots et solutions numériques modernes.',
        en: 'Developing skills in programming, bot creation, and modern digital solutions.',
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
    services: {
      header: 'حلول رقمية متكاملة لنجاح مشروعك',
      intro: 'أقدم خدمات تطوير وتصميم المواقع والتطبيقات بأعلى معايير الجودة والاحترافية. سواء كنت فرداً، شركة ناشئة، أو مؤسسة كبيرة، أساعدك في بناء حضور رقمي قوي يحقق أهدافك ويجذب عملاءك.',
      chips: {
        modern: 'تصميم عصري',
        fast: 'أداء سريع',
        support: 'دعم مستمر'
      },
      title: 'الخدمات التي أقدّمها',
      items: {
        personal: {
          title: 'تصميم وتطوير المواقع الشخصية',
          desc: 'مواقع تعريفية وصفحات هبوط للمستقلّين، المدرّبين، وصنّاع المحتوى، مصممة لتسويق خدماتك بشكل احترافي.'
        },
        company: {
          title: 'تصميم مواقع الشركات',
          desc: 'مواقع احترافية لعرض خدمات الشركة، فريق العمل، وإنجازاتها، مع نماذج تواصل وطلب عروض.'
        },
        ecommerce: {
          title: 'إنشاء المتاجر الإلكترونية',
          desc: 'متاجر إلكترونية متكاملة لبيع المنتجات المادية أو الرقمية مع إدارة المنتجات والطلبات بسهولة.'
        },
        payment: {
          title: 'ربط وسائل الدفع الإلكتروني',
          desc: 'ربط الموقع ببوابات دفع إلكترونية موثوقة تناسب السوق المحلي والدولي لضمان تجربة دفع سلسة وآمنة.'
        },
        maintenance: {
          title: 'الدعم التقني والصيانة',
          desc: 'متابعة دورية للموقع، إصلاح الأعطال، التحديثات الأمنية، وتحسين الأداء لضمان استقرار مشروعك.'
        },
        seo: {
          title: 'تحسين محركات البحث (SEO)',
          desc: 'تهيئة الموقع للظهور في نتائج البحث، تحسين السرعة، وهيكلة المحتوى لزيادة فرص الوصول إلى عملائك.'
        },
        custom: {
          title: 'برمجة حلول خاصة حسب الطلب',
          desc: 'تطوير أنظمة ولوحات تحكم ومنصّات مخصّصة (حجز، إدارة عملاء، أنظمة داخلية…) وفق احتياجات مشروعك.'
        }
      },
      whyUs: {
        title: 'لماذا تختار العمل معي؟',
        professional: {
          title: 'احترافية في التنفيذ',
          desc: 'التزام بأفضل معايير التصميم والبرمجة مع واجهات عصرية ومتجاوبة ومناسبة لهوية مشروعك.'
        },
        speed: {
          title: 'سرعة في الإنجاز',
          desc: 'احترام المواعيد المتفق عليها وتسليم المشروع في الوقت دون التضحية بالجودة.'
        },
        price: {
          title: 'أسعار مناسبة ومرنة',
          desc: 'باقات وخيارات متعدّدة تناسب الأفراد وروّاد الأعمال والشركات بمختلف أحجامها.'
        },
        support: {
          title: 'دعم مستمر بعد التسليم',
          desc: 'مرافقة تقنية بعد إطلاق الموقع، مع إمكانية التعديلات والتحسينات عند الحاجة.'
        }
      },
      plans: {
        title: 'باقات الخدمات',
        basic: {
          title: 'باقة البداية',
          features: ['موقع صفحة واحدة (Landing Page)', 'تصميم متجاوب مع الهاتف', 'نموذج تواصل بسيط', 'ربط بحسابات التواصل الاجتماعي'],
          price: 'السعر: ابتداءً من X درهم',
          example: 'مثال: صفحة تعريفية لمستقل أو مدرّب أو خدمة واحدة.'
        },
        business: {
          title: 'باقة الأعمال',
          features: ['موقع من 3 إلى 5 صفحات', 'تصميم متوافق مع هوية العلامة التجارية', 'نموذج طلب عرض سعر', 'تهيئة أساسيات تحسين محركات البحث'],
          price: 'السعر: ابتداءً من Y درهم',
          example: 'مثال: موقع شركة خدمات، وكالة، أو مكتب استشارات.'
        },
        ecommerce: {
          title: 'باقة المتجر الإلكتروني',
          features: ['متجر إلكتروني متكامل', 'صفحات المنتجات وسلّة المشتريات', 'ربط بوابة دفع إلكترونية', 'إعداد خيارات الشحن والضرائب الأساسية'],
          price: 'السعر: ابتداءً من Z درهم',
          example: 'مثال: متجر لبيع الملابس، المنتجات الرقمية، أو غيرها.'
        }
      },
      ready: {
        title: 'جاهز للبدء في مشروع موقعك؟',
        desc: 'للتواصل والطلب، يمكنك استخدام نموذج التواصل في الموقع أو مراسلتي مباشرة عبر البريد الإلكتروني أو الواتساب. أرسل وصفاً مختصراً لمشروعك ونوع الموقع الذي تريده، وسأعود إليك بعرض يشمل السعر ومدة التنفيذ.'
      },
      adAlt: 'مساحة إعلانية',
      imgAlt1: 'برمجة حديثة',
      imgAlt2: 'تطوير تطبيقات',
      imgAlt3: 'تعلم تقني'
    }
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
    services: {
      header: 'Solutions numériques intégrées pour le succès de vos projets',
      intro: 'Je propose des services de développement et de conception de sites Web et d\'applications avec les plus hauts standards de qualité et de professionnalisme. Que vous soyez un particulier, une startup ou une grande organisation, je vous aide à construire une présence numérique forte qui atteint vos objectifs et attire vos clients.',
      chips: {
        modern: 'Design Moderne',
        fast: 'Performance Rapide',
        support: 'Support Continu'
      },
      title: 'Les services que je propose',
      items: {
        personal: {
          title: 'Conception et développement de sites personnels',
          desc: 'Sites de présentation et pages de destination pour les indépendants, les formateurs et les créateurs de contenu, conçus pour commercialiser vos services de manière professionnelle.'
        },
        company: {
          title: 'Conception de sites Web d\'entreprise',
          desc: 'Sites professionnels pour présenter les services, l\'équipe et les réalisations de l\'entreprise, avec des formulaires de contact et des demandes de devis.'
        },
        ecommerce: {
          title: 'Création de boutiques en ligne',
          desc: 'Boutiques en ligne complètes pour vendre des produits physiques ou numériques avec une gestion facile des produits et des commandes.'
        },
        payment: {
          title: 'Intégration de moyens de paiement électronique',
          desc: 'Lier le site à des passerelles de paiement électronique fiables adaptées au marché local et international pour assurer une expérience de paiement fluide et sécurisée.'
        },
        maintenance: {
          title: 'Support technique et maintenance',
          desc: 'Suivi périodique du site, réparation des pannes, mises à jour de sécurité et amélioration des performances pour assurer la stabilité de votre projet.'
        },
        seo: {
          title: 'Optimisation des moteurs de recherche (SEO)',
          desc: 'Optimiser le site pour apparaître dans les résultats de recherche, améliorer la vitesse et structurer le contenu pour augmenter les chances d\'atteindre vos clients.'
        },
        custom: {
          title: 'Programmation de solutions personnalisées sur demande',
          desc: 'Développement de systèmes, de panneaux de contrôle et de plateformes personnalisées (réservation, gestion client, systèmes internes...) selon vos besoins.'
        }
      },
      whyUs: {
        title: 'Pourquoi choisir de travailler avec moi ?',
        professional: {
          title: 'Professionnalisme dans l\'exécution',
          desc: 'Engagement envers les meilleurs standards de design et de programmation avec des interfaces modernes, réactives et adaptées à l\'identité de votre projet.'
        },
        speed: {
          title: 'Rapidité d\'exécution',
          desc: 'Respect des délais convenus et livraison du projet à temps sans sacrifier la qualité.'
        },
        price: {
          title: 'Prix abordables et flexibles',
          desc: 'Plusieurs forfaits et options adaptés aux particuliers, aux entrepreneurs et aux entreprises de toutes tailles.'
        },
        support: {
          title: 'Support continu après livraison',
          desc: 'Accompagnement technique après le lancement du site, avec possibilité de modifications et d\'améliorations si nécessaire.'
        }
      },
      plans: {
        title: 'Forfaits de services',
        basic: {
          title: 'Forfait de démarrage',
          features: ['Site d\'une seule page (Landing Page)', 'Design responsive mobile', 'Formulaire de contact simple', 'Lien avec les comptes de médias sociaux'],
          price: 'Prix : à partir de X MAD',
          example: 'Exemple : Page de présentation pour un indépendant, un formateur ou un service unique.'
        },
        business: {
          title: 'Forfait Business',
          features: ['Site de 3 à 5 pages', 'Design compatible avec l\'identité de la marque', 'Formulaire de demande de devis', 'Configuration des bases du SEO'],
          price: 'Prix : à partir de Y MAD',
          example: 'Exemple : Site d\'une entreprise de services, d\'une agence ou d\'un bureau de conseil.'
        },
        ecommerce: {
          title: 'Forfait E-commerce',
          features: ['Boutique en ligne complète', 'Pages produits et panier', 'Intégration de passerelle de paiement', 'Configuration des options d\'expédition et des taxes'],
          price: 'Prix : à partir de Z MAD',
          example: 'Exemple : Boutique de vêtements, de produits numériques ou autres.'
        }
      },
      ready: {
        title: 'Prêt à commencer votre projet ?',
        desc: 'Pour me contacter et commander, vous pouvez utiliser le formulaire de contact sur le site ou m\'envoyer un message directement par e-mail ou WhatsApp. Envoyez une brève description de votre projet et je vous répondrai avec une offre comprenant le prix et le délai d\'exécution.'
      },
      adAlt: 'Espace publicitaire',
      imgAlt1: 'Programmation moderne',
      imgAlt2: 'Développement d\'applications',
      imgAlt3: 'Apprentissage technique'
    }
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
    services: {
      header: 'Integrated Digital Solutions for Your Project\'s Success',
      intro: 'I provide website and application development and design services with the highest quality standards and professionalism. Whether you are an individual, a startup, or a large organization, I help you build a strong digital presence that achieves your goals and attracts your customers.',
      chips: {
        modern: 'Modern Design',
        fast: 'Fast Performance',
        support: 'Continuous Support'
      },
      title: 'Services I offer',
      items: {
        personal: {
          title: 'Personal Website Design & Development',
          desc: 'Introductory sites and landing pages for freelancers, trainers, and content creators, designed to market your services professionally.'
        },
        company: {
          title: 'Corporate Website Design',
          desc: 'Professional sites to showcase company services, team, and achievements, with contact forms and quote request models.'
        },
        ecommerce: {
          title: 'E-commerce Store Development',
          desc: 'Complete online stores to sell physical or digital products with easy product and order management.'
        },
        payment: {
          title: 'Payment Gateway Integration',
          desc: 'Linking the site with reliable electronic payment gateways suitable for the local and international market to ensure a smooth and secure payment experience.'
        },
        maintenance: {
          title: 'Technical Support & Maintenance',
          desc: 'Periodic site monitoring, fixing bugs, security updates, and performance improvement to ensure the stability of your project.'
        },
        seo: {
          title: 'Search Engine Optimization (SEO)',
          desc: 'Optimizing the site to appear in search results, improving speed, and structuring content to increase the chances of reaching your customers.'
        },
        custom: {
          title: 'Custom Software Solutions on Demand',
          desc: 'Developing systems, control panels, and custom platforms (reservation, customer management, internal systems...) according to your project needs.'
        }
      },
      whyUs: {
        title: 'Why choose to work with me?',
        professional: {
          title: 'Professional Execution',
          desc: 'Commitment to the best design and programming standards with modern, responsive interfaces suitable for your project\'s identity.'
        },
        speed: {
          title: 'Sped of Execution',
          desc: 'Respecting agreed-upon deadlines and delivering the project on time without sacrificing quality.'
        },
        price: {
          title: 'Affordable & Flexible Prices',
          desc: 'Multiple packages and options suitable for individuals, entrepreneurs, and companies of all sizes.'
        },
        support: {
          title: 'Ongoing Post-Delivery Support',
          desc: 'Technical accompaniment after the site launch, with the possibility of adjustments and improvements when needed.'
        }
      },
      plans: {
        title: 'Service Packages',
        basic: {
          title: 'Starter Package',
          features: ['One-page website (Landing Page)', 'Mobile responsive design', 'Simple contact form', 'Link to social media accounts'],
          price: 'Price: Starting from X MAD',
          example: 'Example: Bio page for a freelancer, trainer, or a single service.'
        },
        business: {
          title: 'Business Package',
          features: ['3 to 5 pages website', 'Design compatible with brand identity', 'Quote request form', 'Basic SEO setup'],
          price: 'Price: Starting from Y MAD',
          example: 'Example: Website for a service company, agency, or consulting office.'
        },
        ecommerce: {
          title: 'E-commerce Package',
          features: ['Complete online store', 'Product pages and shopping cart', 'Payment gateway link', 'Shipping options and basic tax setup'],
          price: 'Price: Starting from Z MAD',
          example: 'Example: Store for selling clothes, digital products, or others.'
        }
      },
      ready: {
        title: 'Ready to start your project?',
        desc: 'To contact and order, you can use the contact form on the site or message me directly via e-mail or WhatsApp. Send a brief description of your project and I will get back to you with an offer including price and execution time.'
      },
      adAlt: 'Ad Space',
      imgAlt1: 'Modern Programming',
      imgAlt2: 'App Development',
      imgAlt3: 'Technical Learning'
    }
  },
};

// Videos page translations
export const videosPage = {
  ar: {
    hero: {
      title: 'مكتبة الفيديوهات التعليمية',
      description: 'مجموعة شاملة من الدروس والشروحات المجانية في مختلف مجالات البرمجة والتطوير. تعلم بالطريقة التي تناسبك!'
    },
    stats: {
      videos: 'فيديو تعليمي',
      views: 'مشاهدة',
      likes: 'إعجاب'
    },
    cta: {
      title: 'اشترك في قناتنا على YouTube',
      description: 'لا تفوت أي فيديو جديد! اشترك الآن وفعّل الجرس ليصلك كل جديد',
      button: 'اشترك الآن'
    },
    categories: {
      educational: 'تعليمي',
      web: 'تطوير ويب',
      mobile: 'موبايل',
      database: 'قواعد بيانات',
      design: 'تصميم',
      ai: 'AI'
    },
    items: {
      v1: { title: 'دورة تعلم البرمجة من الصفر', desc: 'دورة شاملة لتعلم أساسيات البرمجة باستخدام JavaScript' },
      v2: { title: 'بناء موقع ويب احترافي', desc: 'تعلم كيفية بناء موقع ويب احترافي من الصفر' },
      v3: { title: 'تطوير تطبيقات الموبايل', desc: 'دليل شامل لتطوير تطبيقات الهاتف باستخدام React Native' },
      v4: { title: 'أساسيات قواعد البيانات', desc: 'تعلم كيفية التعامل مع قواعد البيانات SQL و NoSQL' },
      v5: { title: 'تصميم واجهات المستخدم', desc: 'مبادئ وأساسيات تصميم واجهات المستخدم الحديثة' },
      v6: { title: 'الذكاء الاصطناعي للمبتدئين', desc: 'مقدمة شاملة للذكاء الاصطناعي والتعلم الآلي' }
    }
  },
  fr: {
    hero: {
      title: 'Bibliothèque Vidéo Éducative',
      description: 'Une collection complète de leçons et d\'explications gratuites dans divers domaines de la programmation. Apprenez à votre rythme !'
    },
    stats: {
      videos: 'Vidéos',
      views: 'Vues',
      likes: 'J\'aime'
    },
    cta: {
      title: 'Abonnez-vous à notre chaîne YouTube',
      description: 'Ne manquez aucune nouvelle vidéo ! Abonnez-vous maintenant et activez la cloche.',
      button: 'S\'abonner maintenant'
    },
    categories: {
      educational: 'Éducatif',
      web: 'Développement Web',
      mobile: 'Mobile',
      database: 'Bases de données',
      design: 'Design',
      ai: 'IA'
    },
    items: {
      v1: { title: 'Apprendre la programmation de zéro', desc: 'Cours complet sur les bases de JavaScript.' },
      v2: { title: 'Créer un site web professionnel', desc: 'Apprenez à construire un site pro de A à Z.' },
      v3: { title: 'Développement d\'applications mobiles', desc: 'Guide complet avec React Native.' },
      v4: { title: 'Bases des données', desc: 'Apprenez SQL et NoSQL.' },
      v5: { title: 'Conception d\'interfaces (UI)', desc: 'Principes du design moderne.' },
      v6: { title: 'IA pour débutants', desc: 'Introduction à l\'Intelligence Artificielle.' }
    }
  },
  en: {
    hero: {
      title: 'Educational Video Library',
      description: 'A comprehensive collection of free lessons and explanations in various fields of programming and development. Learn at your own pace!'
    },
    stats: {
      videos: 'Videos',
      views: 'Views',
      likes: 'Likes'
    },
    cta: {
      title: 'Subscribe to our YouTube Channel',
      description: 'Don\'t miss any new videos! Subscribe now and turn on notifications.',
      button: 'Subscribe Now'
    },
    categories: {
      educational: 'Educational',
      web: 'Web Dev',
      mobile: 'Mobile',
      database: 'Database',
      design: 'Design',
      ai: 'AI'
    },
    items: {
      v1: { title: 'Learn Programming from Scratch', desc: 'Comprehensive course on JavaScript basics.' },
      v2: { title: 'Build a Professional Website', desc: 'Learn how to build a pro site from scratch.' },
      v3: { title: 'Mobile App Development', desc: 'Complete guide using React Native.' },
      v4: { title: 'Database Essentials', desc: 'Learn SQL and NoSQL basics.' },
      v5: { title: 'User Interface (UI) Design', desc: 'Modern UI design principles.' },
      v6: { title: 'AI for Beginners', desc: 'Introduction to Artificial Intelligence.' }
    }
  }
};

// Programming page translations (new)
export const programmingPage = {
  ar: {
    hero: {
      title: 'عالم البرمجة والتطوير',
      description: 'تعلم البرمجةوابدأ رحلتك في عالم التكنولوجيا. من الأساسيات إلى المشاريع المتقدمة، نوفر لك كل ما تحتاجه لتصبح مطور محترف.'
    },
    languagesTitle: 'لغات البرمجة التي أتقنها',
    resourcesTitle: 'موارد التعلم والأدوات',
    examplesTitle: 'أمثلة برمجية عملية',
    whyLearnTitle: 'لماذا تتعلم البرمجة؟',
    benefits: [
      'تطوير مهارات حل المشاكل والتفكير المنطقي',
      'فرص وظيفية متميزة ورواتب عالية',
      'القدرة على بناء تطبيقات ومشاريع خاصة',
      'العمل الحر والاستقلالية المهنية'
    ],
    languages: {
      js: 'لغة برمجة أساسية لتطوير الويب والتطبيقات التفاعلية',
      py: 'لغة متعددة الاستخدامات للذكاء الاصطناعي وتحليل البيانات',
      ts: 'JavaScript مع أنواع ثابتة لمشاريع أكثر أماناً',
      php: 'لغة خادم قوية لتطوير المواقع الديناميكية',
      react: 'مكتبة JavaScript لبناء واجهات مستخدم تفاعلية',
      node: 'بيئة تشغيل JavaScript من جانب الخادم'
    },
    resources: {
      courses: 'دورات مجانية',
      tools: 'أدوات التطوير',
      paths: 'مسارات التعلم'
    }
  },
  fr: {
    hero: {
      title: 'Monde de la Programmation',
      description: 'Apprenez la programmation et commencez votre voyage technologique. Des bases aux projets avancés.'
    },
    languagesTitle: 'Langages que je maîtrise',
    resourcesTitle: 'Ressources et Outils',
    examplesTitle: 'Exemples de Code',
    whyLearnTitle: 'Pourquoi apprendre à coder ?',
    benefits: [
      'Résolution de problèmes et logique',
      'Opportunités de carrière et hauts salaires',
      'Capacité à créer ses propres projets',
      'Liberté et travail en freelance'
    ],
    languages: {
      js: 'Essentiel pour le web et l\'interactivité.',
      py: 'Polyvalent, IA et analyse de données.',
      ts: 'JavaScript typé pour des projets sûrs.',
      php: 'Puissant pour les sites dynamiques.',
      react: 'Bibliothèque UI interactive.',
      node: 'Environnement serveur JavaScript.'
    },
    resources: {
      courses: 'Cours gratuits',
      tools: 'Outils de dév',
      paths: 'Parcours'
    }
  },
  en: {
    hero: {
      title: 'World of Programming',
      description: 'Learn programming and start your journey in tech. From basics to advanced projects, we provide what you need.'
    },
    languagesTitle: 'Programming Languages',
    resourcesTitle: 'Learning Resources',
    examplesTitle: 'Code Examples',
    whyLearnTitle: 'Why Learn Programming?',
    benefits: [
      'Problem solving and logic skills',
      'Great career opportunities',
      'Build your own apps and projects',
      'Freelance and career independence'
    ],
    languages: {
      js: 'Core language for web and interactivity.',
      py: 'Versatile for AI and data science.',
      ts: 'Typed JavaScript for safer projects.',
      php: 'Server-side power for dynamic sites.',
      react: 'UI library for building interfaces.',
      node: 'Server-side JavaScript environment.'
    },
    resources: {
      courses: 'Free Courses',
      tools: 'Dev Tools',
      paths: 'Learning Paths'
    }
  }
};

// Apps page translations (new)
export const appsPage = {
  ar: {
    hero: {
      title: 'تطبيقاتي المميزة',
      description: 'مجموعة من التطبيقات المفيدة التي طورتها لتسهيل حياتك اليومية. جميع التطبيقات مجانية ومتاحة للتحميل.'
    },
    stats: {
      available: 'تطبيقات متاحة',
      users: 'مستخدم نشط',
      rating: 'متوسط التقييم'
    },
    download: 'تحميل التطبيق',
    comingSoon: {
      title: 'المزيد قريباً!',
      description: 'نعمل حالياً على تطوير المزيد من التطبيقات المفيدة. تابعنا لتكون أول من يعرف.'
    },
    items: {
      a1: {
        name: 'تطبيق ولنا في الله ظن',
        desc: 'تطبيق إسلامي شامل يحتوي على أدعية وأذكار ومحتوى ديني مفيد لتعزيز الروحانية',
        features: ['أدعية وأذكار يومية', 'محتوى ديني متجدد', 'واجهة سهلة الاستخدام', 'يعمل بدون إنترنت']
      },
      a2: {
        name: 'Smart Education BAC',
        desc: 'تطبيق تعليمي شامل لطلاب البكالوريا يحتوي على دروس وملخصات وامتحانات سابقة',
        features: ['دروس وملخصات شاملة', 'امتحانات وطنية سابقة', 'نصائح للتوجيه', 'حساب المعدلات']
      },
      a3: {
        name: 'مدير المهام الذكي',
        desc: 'تطبيق لإدارة المهام اليومية والمشاريع مع تذكيرات ذكية وتتبع الإنتاجية',
        features: ['إنشاء مهام ومشاريع', 'تذكيرات ذكية', 'تتبع الإنتاجية', 'مزامنة سحابية']
      },
      a4: {
        name: 'متجري الإلكتروني',
        desc: 'تطبيق متجر إلكتروني متكامل لإدارة وبيع المنتجات أونلاين بسهولة',
        features: ['إدارة المنتجات', 'نظام دفع آمن', 'تتبع الطلبات', 'تقارير مبيعات']
      }
    },
    categories: {
      islamic: 'إسلامي',
      educational: 'تعليمي',
      productivity: 'إنتاجية',
      commerce: 'تجارة'
    }
  },
  fr: {
    hero: {
      title: 'Mes Applications',
      description: 'Une collection d\'applications utiles gratuites et prêtes au téléchargement.'
    },
    stats: {
      available: 'Disponibles',
      users: 'Utilisateurs actifs',
      rating: 'Note moyenne'
    },
    download: 'Télécharger',
    comingSoon: {
      title: 'Plus d\'apps bientôt !',
      description: 'Nous travaillons sur de nouveaux outils.'
    },
    items: {
      a1: {
        name: 'Walana Filahi Dann',
        desc: 'App islamique avec douas, adhkar et contenu spirituel.',
        features: ['Douas quotidiens', 'Contenu renouvelé', 'Interface intuitive', 'Mode hors-ligne']
      },
      a2: {
        name: 'Smart Education BAC',
        desc: 'App éducative pour bacheliers (leçons, résumés, examens).',
        features: ['Résumés complets', 'Anciens examens', 'Conseils d\'orientation', 'Calcul de moyenne']
      },
      a3: {
        name: 'Task Manager Smart',
        desc: 'Gérez vos tâches et projets avec rappels intelligents.',
        features: ['Tâches & Projets', 'Rappels', 'Productivité', 'Cloud Sync']
      },
      a4: {
        name: 'Ma Boutique',
        desc: 'Plateforme e-commerce pour vendre vos produits.',
        features: ['Gestion produits', 'Paiement sécurisé', 'Suivi commandes', 'Rapports']
      }
    },
    categories: {
      islamic: 'Islamique',
      educational: 'Éducatif',
      productivity: 'Productivité',
      commerce: 'Commerce'
    }
  },
  en: {
    hero: {
      title: 'My Apps',
      description: 'A collection of useful apps developed to make your life easier. All are free to download.'
    },
    stats: {
      available: 'Available Apps',
      users: 'Active Users',
      rating: 'Average Rating'
    },
    download: 'Download App',
    comingSoon: {
      title: 'More Coming Soon!',
      description: 'We are working on many new useful apps.'
    },
    items: {
      a1: {
        name: 'Walana Filahi Dann',
        desc: 'Islamic app with supplications, adhkar, and spiritual content.',
        features: ['Daily Duas', 'Updated content', 'Easy interface', 'Offline support']
      },
      a2: {
        name: 'Smart Education BAC',
        desc: 'Educational app for Baccalaureate students (lessons, summaries, exams).',
        features: ['Full summaries', 'Past exams', 'Guidance tips', 'GPA calculator']
      },
      a3: {
        name: 'Smart Task Manager',
        desc: 'Manage daily tasks and projects with smart reminders.',
        features: ['Create tasks', 'Reminders', 'Productivity track', 'Cloud sync']
      },
      a4: {
        name: 'My E-Store',
        desc: 'Full e-commerce app to manage and sell products online.',
        features: ['Product management', 'Secure payment', 'Order tracking', 'Sales reports']
      }
    }
  }
};

// Services page translations (expanded)
export const servicesPageFull = {
  ar: {
    hero: {
      title: 'خدماتنا الاحترافية',
      description: 'نقدم حلولاً رقمية متكاملة تساعدك على تنمية عملك وتحقيق أهدافك.'
    },
    request: 'اطلب الخدمة',
    items: {
      s1: {
        title: 'تصميم وتطوير المواقع',
        desc: 'نصمم مواقع إلكترونية عصرية وجذابة تعكس هوية علامتك التجارية.',
        details: ['تصميم متجاوب', 'UI/UX احترافي', 'لوحة تحكم', 'أداء عالي']
      },
      s2: {
        title: 'تطوير تطبيقات الهاتف',
        desc: 'حول فكرتك إلى تطبيق هاتف ذكي يعمل على نظامي Android و iOS.',
        details: ['Native & Cross-platform', 'تصميم عصري', 'ربط سحابي', 'رفع المتاجر']
      },
      s3: {
        title: 'المتاجر الإلكترونية',
        desc: 'ابدأ تجارتك الإلكترونية بمتجر احترافي متكامل.',
        details: ['دفع آمن', 'إدارة مخزون', 'تحليلات مبيعات', 'دعم عملات']
      },
      s4: {
        title: 'حلول WhatsApp Business',
        desc: 'استفد من قوة WhatsApp للتواصل مع عملائك.',
        details: ['API Setup', 'Smart Chatbots', 'رسائل جماعية', 'تكامل CRM']
      },
      s5: {
        title: 'SEO وتحسين البحث',
        desc: 'اجعل موقعك يتصدر نتائج البحث في جوجل.',
        details: ['كلمات مفتاحية', 'أداء تقني', 'Backlinks', 'تحسين محتوى']
      },
      s6: {
        title: 'تطبيقات الويب المتقدمة',
        desc: 'نطور أنظمة ويب مخصصة لتلبية احتياجات عملك.',
        details: ['أنظمة CRM/ERP', 'منصات LMS', 'لوحات تحكم', 'تكامل API']
      },
      s7: {
        title: 'الدعم الفني والصيانة',
        desc: 'نقدم خدمات دعم فني وصيانة دورية لضمان عمل موقعك.',
        details: ['أمان المعلومات', 'نسخ احتياطي', 'تحديثات', 'حل مشاكل']
      }
    }
  },
  fr: {
    hero: {
      title: 'Nos Services Professionnels',
      description: 'Solutions numériques intégrées pour développer votre entreprise.'
    },
    request: 'Commander maintenant',
    items: {
      s1: {
        title: 'Design et Dév Web',
        desc: 'Sites modernes reflétant votre identité visuelle.',
        details: ['Design Réactif', 'Pro UI/UX', 'CMS Facile', 'Haute Performance']
      },
      s2: {
        title: 'Dév Apps Mobiles',
        desc: 'Transformez vos idées en apps iOS & Android.',
        details: ['Native & Hybride', 'Design Moderne', 'Cloud Sync', 'App Stores']
      },
      s3: {
        title: 'E-commerce',
        desc: 'Lancez votre boutique en ligne pro.',
        details: ['Paiement Sécurisé', 'Stock Manager', 'Analytics', 'Multi-devises']
      },
      s4: {
        title: 'WhatsApp Business',
        desc: 'Communiquez mieux avec vos clients.',
        details: ['WhatsApp API', 'Chatbots', 'Mass Messaging', 'CRM Integration']
      },
      s5: {
        title: 'SEO & Visibilité',
        desc: 'Soyez en tête des résultats Google.',
        details: ['Mots-clés', 'Tech SEO', 'Backlinks', 'Optimisation']
      },
      s6: {
        title: 'Apps Web Avancées',
        desc: 'Systèmes personnalisés pour besoins complexes.',
        details: ['CRM/ERP', 'LMS Platforms', 'Dashboards', 'API Integration']
      },
      s7: {
        title: 'Support & Maintenance',
        desc: 'Maintenance continue et sécurité.',
        details: ['Sécurité', 'Backups Retours', 'Updates', 'Tech Support']
      }
    }
  },
  en: {
    hero: {
      title: 'Professional Services',
      description: 'Integrated digital solutions to help grow your business.'
    },
    request: 'Order Service',
    items: {
      s1: {
        title: 'Web Design & Dev',
        desc: 'Modern and attractive websites reflecting your brand.',
        details: ['Responsive Design', 'Pro UI/UX', 'Easy CMS', 'High Performance']
      },
      s2: {
        title: 'Mobile App Dev',
        desc: 'Turn your ideas into iOS & Android apps.',
        details: ['Native & Cross-platform', 'Modern Design', 'Cloud Integration', 'App Store Publish']
      },
      s3: {
        title: 'E-commerce Solutions',
        desc: 'Start your online shop with a full system.',
        details: ['Secure Payment', 'Inventory Management', 'Sales Analytics', 'Multi-currency']
      },
      s4: {
        title: 'WhatsApp Business',
        desc: 'Leverage WhatsApp to talk with customers.',
        details: ['API Setup', 'Smart Chatbots', 'Group Messages', 'CRM Sync']
      },
      s5: {
        title: 'SEO Optimization',
        desc: 'Get listed at the top of Google searches.',
        details: ['Keywords', 'Technical SEO', 'Backlinks', 'Content Optimization']
      },
      s6: {
        title: 'Advanced Web Apps',
        desc: 'Custom web systems for your specific needs.',
        details: ['CRM/ERP Systems', 'LMS Platforms', 'Admin Dashboards', 'API Integration']
      },
      s7: {
        title: 'Tech Support',
        desc: 'On-going support and maintenance services.',
        details: ['Information Security', 'Backups', 'Regular Updates', 'Emergency Fixes']
      }
    }
  }
};

// Bots page translations
export const botsPageFull = {
  ar: {
    hero: {
      title: 'البوتات والمساعدات الذكية',
      description: 'تواصل معي مباشرة أو استخدم أفضل أدوات الذكاء الاصطناعي لمساعدتك في البرمجة والتطوير.'
    },
    featuresTitle: 'لماذا تستخدم هذه الأدوات؟',
    availableTools: 'الأدوات المتاحة',
    howToUse: 'كيفية الاستخدام',
    steps: [
      { title: 'اختر الأداة', desc: 'اختر الأداة أو البوت المناسب لاحتياجاتك' },
      { title: 'افتح الرابط', desc: 'اضغط على الزر وسيتم فتح الأداة مباشرة' },
      { title: 'ابدأ الاستخدام', desc: 'استفد من جميع الميزات المتاحة' }
    ],
    buttons: {
      contact: 'تواصل الآن',
      open: 'فتح الأداة',
      try: 'تجربة البوت'
    },
    badges: {
      featured: 'مميز - تواصل مباشر',
      users: 'مستخدم',
      direct: 'مباشر'
    },
    items: {
      b1: {
        name: 'بوت حمزة الشخصي',
        desc: 'تواصل معي مباشرة عبر WhatsApp للاستشارات التقنية، تطوير المشاريع، أو أي استفسارات برمجية',
        features: ['استشارات تقنية مجانية', 'مساعدة في المشاريع', 'نصائح برمجية', 'رد سريع ومباشر']
      },
      b2: {
        name: 'ChatGPT',
        desc: 'بوت ذكاء اصطناعي متقدم من OpenAI للإجابة على أسئلتك وحل مشاكلك البرمجية',
        features: ['إجابات ذكية ودقيقة', 'مساعدة في البرمجة', 'شرح المفاهيم', 'كتابة الأكواد']
      },
      b3: {
        name: 'GitHub Copilot',
        desc: 'مساعد برمجة ذكي يساعدك في كتابة الأكواد بشكل أسرع وأكثر كفاءة',
        features: ['اقتراحات أكواد ذكية', 'دعم لغات متعددة', 'تكامل مع VS Code', 'تعلم من سياق الكود']
      },
      b4: {
        name: 'Perplexity AI',
        desc: 'محرك بحث ذكي يستخدم الذكاء الاصطناعي لتقديم إجابات دقيقة مع المصادر',
        features: ['بحث ذكي متقدم', 'إجابات مع مصادر', 'تحديثات فورية', 'واجهة سهلة']
      },
      b5: {
        name: 'بوت فيسبوك الذكي',
        desc: 'بوت متخصص على منصة فيسبوك لتقديم خدمات ذكية وتواصل سريع مع المستخدمين',
        features: ['تواصل ذكي', 'تحديثات تقنية', 'دعم مستمر', 'سهولة الوصول']
      },
      b6: {
        name: 'بوت واتساب (رقم 2)',
        desc: 'بوت تواصل إضافي لضمان سرعة الرد وتقديم الدعم الفني المستمر عبر واتساب',
        features: ['دعم فني سريع', 'تواصل مباشر', 'خدمات برمجية', 'متاح دائماً']
      },
      b7: {
        name: 'بوت واتساب (رقم 3)',
        desc: 'رقم إضافي للتواصل المباشر والحصول على المساعدة التقنية وتطوير المشاريع',
        features: ['دعم فني', 'استفسارات عامة', 'مشاريع برمجية', 'رد تلقائي']
      },
      b8: {
        name: 'بوت واتساب (رقم 4)',
        desc: 'قناة تواصل فعالة للحصول على آخر التحديثات والخدمات البرمجية والرد على تساؤلاتكم',
        features: ['تحديثات فورية', 'تواصل تقني', 'خدمة العملاء', 'سهولة الاستخدام']
      },
      t1: { name: 'بوت تحويل PDF', desc: 'بوت متقدم لتحويل الملفات والصور إلى مستندات PDF احترافية بسهولة', features: ['تحويل سريع', 'دعم الصور', 'جودة عالية'] },
      t2: { name: 'بوت استخراج النصوص (OCR)', desc: 'استخرج النصوص من الصور والمستندات الممسوحة ضوئياً بدقة عالية', features: ['دعم العربية', 'سرعة المعالجة', 'دقة النصوص'] },
      t3: { name: 'بوت حذف العلامة المائية', desc: 'قم بإزالة العلامات المائية واللوجو من الصور للحصول على نتائج نظيفة', features: ['إزالة احترافية', 'حفظ الجودة', 'سهولة الاستخدام'] },
      t4: { name: 'بوت حمزة أميرني (الرسمي)', desc: 'بوت متكامل يقدم خدمات برمجية وتقنية ومساعدة ذكية لمتابعي القناة', features: ['خدمات حصرية', 'مساعدة تقنية', 'تواصل مباشر'] },
      t5: { name: 'بوت تحميل يوتيوب', desc: 'حمل فيديوهات يوتيوب وحولها إلى ملفات صوتية MP3 بسرعة فائقة', features: ['جودة 4K', 'تحويل MP3', 'سرعة التحميل'] },
      t6: { name: 'بوت تحميل المنصات', desc: 'بوت شامل لتحميل الفيديوهات من تيك توك، فيسبوك، انستقرام وغيرها', features: ['بدون علامة مائية', 'دعم منصات كبرى', 'بحث ذكي'] },
      t7: { name: 'بوت القرآن الكريم', desc: 'موسوعة شاملة لتلاوات القرآن الكريم بأصوات مشاهير القراء مع التفسير', features: ['استماع مباشر', 'مصحف كامل', 'تفسير وآيات'] },
      t8: { name: 'بوت الأفلام (وي سيما)', desc: 'تابع أحدث الأفلام والمسلسلات الحصرية من موقع وي سيما مباشرة عبر تيليجرام', features: ['أحدث الإصدارات', 'مشاهدة مباشرة', 'جودات متعددة'] }
    }
  },
  fr: {
    hero: {
      title: 'Bots & Assistants IA',
      description: 'Contactez-moi directement ou utilisez les meilleurs outils d\'IA pour vos projets.'
    },
    featuresTitle: 'Pourquoi utiliser ces outils ?',
    availableTools: 'Outils Disponibles',
    howToUse: 'Comment Utiliser',
    steps: [
      { title: 'Choisir', desc: 'Sélectionnez l\'outil adapté à vos besoins' },
      { title: 'Ouvrir', desc: 'Cliquez pour ouvrir l\'outil instantanément' },
      { title: 'Utiliser', desc: 'Profitez de toutes les fonctionnalités' }
    ],
    buttons: {
      contact: 'Contactez maintenant',
      open: 'Ouvrir l\'outil',
      try: 'Essayer le bot'
    },
    badges: {
      featured: 'En vedette - Contact direct',
      users: 'utilisateurs',
      direct: 'Direct'
    },
    items: {
      b1: {
        name: 'Bot Hamza Perso',
        desc: 'Contactez-moi sur WhatsApp pour conseils techniques et dév de projets.',
        features: ['Conseils gratuits', 'Aide projets', 'Tips de code', 'Réponse rapide']
      },
      b2: {
        name: 'ChatGPT',
        desc: 'Outil IA avancé d\'OpenAI pour répondre à vos questions complexes.',
        features: ['Réponses intelligentes', 'Aide au codage', 'Explications', 'Génération code']
      },
      b3: {
        name: 'GitHub Copilot',
        desc: 'Assistant de codage IA pour écrire du code plus rapidement.',
        features: ['Suggestions intelligentes', 'Multi-langages', 'VS Code Sync', 'Context Aware']
      },
      b4: {
        name: 'Perplexity AI',
        desc: 'Moteur de recherche IA fournissant des sources précises.',
        features: ['Recherche avancée', 'Avec sources', 'Live updates', 'Interface simple']
      },
      b5: {
        name: 'Bot Facebook Pro',
        desc: 'Bot spécialisé sur Facebook pour services intelligents et support.',
        features: ['Réponse IA', 'Tech updates', 'Support non-stop', 'Accès facile']
      },
      b6: {
        name: 'Bot WhatsApp v2',
        desc: 'Canal de support supplémentaire via WhatsApp.',
        features: ['Support technique', 'Direct chat', 'Services dév', 'Toujours prêt']
      },
      b7: {
        name: 'Bot WhatsApp v3',
        desc: 'Contact professionnel pour help desk et nouveaux projets.',
        features: ['Technical support', 'General queries', 'Projects', 'Auto-reply']
      },
      b8: {
        name: 'Bot WhatsApp v4',
        desc: 'Communication efficace pour les dernières news et services.',
        features: ['Live updates', 'Direct dev contact', 'Customer care', 'Easy use']
      },
      t1: { name: 'Bot Convertisseur PDF', desc: 'Bot avancé pour convertir vos fichiers et images en documents PDF professionnels.', features: ['Conversion rapide', 'Support images', 'Haute qualité'] },
      t2: { name: 'Bot Extracteur de Texte (OCR)', desc: 'Extrayez le texte de vos images et documents scannés avec une grande précision.', features: ['Mode OCR stable', 'Traitement rapide', 'Précision texte'] },
      t3: { name: 'Bot Suppression Filigrane', desc: 'Retirez les filigranes et logos de vos images pour un résultat impeccable.', features: ['Retrait pro', 'Qualité préservée', 'Simple d\'utilisation'] },
      t4: { name: 'Bot Hamza Amirni (Officiel)', desc: 'Bot polyvalent offrant services tech et aide intelligente pour la communauté.', features: ['Services exclusifs', 'Aide technique', 'Accès direct'] },
      t5: { name: 'Bot Downloader YouTube', desc: 'Téléchargez des vidéos YouTube et convertissez-les en MP3 à haute vitesse.', features: ['Qualité 4K', 'Conversion MP3', 'Téléchargement flash'] },
      t6: { name: 'Bot Downloader Tout-en-Un', desc: 'Téléchargez depuis TikTok, Facebook, Instagram et bien d\'autres plateformes.', features: ['Sans filigrane', 'Multi-plateformes', 'Recherche intelligente'] },
      t7: { name: 'Bot Coran Karim', desc: 'Encyclopédie complète des récitations du Coran avec interprétations et versets.', features: ['Écoute directe', 'Coran complet', 'Tafsir inclus'] },
      t8: { name: 'Bot Films (WeCima)', desc: 'Suivez les derniers films et séries de WeCima directement sur Telegram.', features: ['Dernières sorties', 'Streaming direct', 'Multi-qualités'] }
    }
  },
  en: {
    hero: {
      title: 'Bots & AI Assistants',
      description: 'Contact me directly or use the best AI tools to help you with coding and development.'
    },
    featuresTitle: 'Why use these tools?',
    availableTools: 'Available Tools',
    howToUse: 'How to Use',
    steps: [
      { title: 'Choose Tool', desc: 'Select the right tool or bot for your needs' },
      { title: 'Open Link', desc: 'Click the button and the tool will open directly' },
      { title: 'Start Using', desc: 'Benefit from all available features' }
    ],
    buttons: {
      contact: 'Contact Now',
      open: 'Open Tool',
      try: 'Try Bot'
    },
    badges: {
      featured: 'Featured - Direct Contact',
      users: 'users',
      direct: 'Direct'
    },
    items: {
      b1: {
        name: 'Hamza\'s Personal Bot',
        desc: 'Contact me directly via WhatsApp for tech consulting and projects.',
        features: ['Free tech consulting', 'Project help', 'Coding tips', 'Direct response']
      },
      b2: {
        name: 'ChatGPT',
        desc: 'Advanced AI from OpenAI to answer questions and solve code issues.',
        features: ['Smart answers', 'Coding help', 'Explanations', 'Code generation']
      },
      b3: {
        name: 'GitHub Copilot',
        desc: 'AI coding assistant to help you write code faster and better.',
        features: ['Intelligent suggestions', 'Multiple languages', 'VS Code sync', 'Context aware']
      },
      b4: {
        name: 'Perplexity AI',
        desc: 'AI search engine that provides accurate answers with sources.',
        features: ['Smart search', 'Source-cited replies', 'Real-time updates', 'Easy UI']
      },
      b5: {
        name: 'Smart Facebook Bot',
        desc: 'Specialized Facebook bot for smart services and quick responses.',
        features: ['AI communication', 'Tech updates', 'Continuous support', 'Easy access']
      },
      b6: {
        name: 'WhatsApp Bot (No. 2)',
        desc: 'Additional support channel for quick dev help on WhatsApp.',
        features: ['Tech support', 'Direct chat', 'Dev services', 'Always active']
      },
      b7: {
        name: 'WhatsApp Bot (No. 3)',
        desc: 'Contact for help desk and new project inquiries.',
        features: ['Technical support', 'General queries', 'Programming projects', 'Auto-reply']
      },
      b8: {
        name: 'WhatsApp Bot (No. 4)',
        desc: 'Efficient channel for the latest tech updates and services.',
        features: ['Live updates', 'Direct contact', 'Customer service', 'Intuitive UI']
      },
      t1: { name: 'PDF Converter Bot', desc: 'Advanced bot to convert files and images into professional PDF documents easily.', features: ['Fast conversion', 'Image support', 'High quality'] },
      t2: { name: 'Text Extractor (OCR) Bot', desc: 'Extract text from images and scanned documents with high accuracy.', features: ['UTF-8 Support', 'Fast processing', 'Text precision'] },
      t3: { name: 'Watermark Remover Bot', desc: 'Remove watermarks and logos from your images for clean results.', features: ['Pro removal', 'Quality saved', 'Easy to use'] },
      t4: { name: 'Hamza Amirni Bot (Official)', desc: 'Multi-service bot providing tech assistance and smart tools for the community.', features: ['Exclusive services', 'Tech help', 'Direct access'] },
      t5: { name: 'YouTube Downloader Bot', desc: 'Download YouTube videos and convert them to MP3 files at high speed.', features: ['4K Quality', 'MP3 Converter', 'Speed download'] },
      t6: { name: 'All-Platforms Downloader', desc: 'Comprehensive bot to download from TikTok, Facebook, Instagram and more.', features: ['No watermark', 'Major platforms', 'Smart search'] },
      t7: { name: 'Islamic Quran Bot', desc: 'Complete encyclopedia of Quran recitations with tafsir and verses.', features: ['Live listening', 'Full Quran', 'Tafsir included'] },
      t8: { name: 'Movies Bot (WeCima)', desc: 'Follow the latest movies and exclusive series from WeCima directly via Telegram.', features: ['Latest releases', 'Direct streaming', 'Multiple qualities'] }
    }
  }
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
    disclaimer: 'Les conditions et avis qui régissent l\'utilisation du site de Hamza Amirni',
  },
  en: {
    title: 'Terms of Use',
    disclaimer: 'The terms and notices that govern the use of Hamza Amirni\'s website',
  },
};

// Helper function to get translated text
// Projects page translations
export const projectsPage = {
  ar: {
    title: 'معرض أعمالي ومشاريعي',
    description: 'اطلع على مجموعة من المشاريع التي قمت بتطويرها، من مواقع الشركات إلى المتاجر الإلكترونية والتطبيقات المتقدمة. كل مشروع يعكس التزامي بالجودة والابتكار.',
    categories: {
      web: 'تطوير ويب',
      ecommerce: 'تجارة إلكترونية',
      mobile: 'تطبيق موبايل',
      app: 'تطبيق ويب'
    },
    projects: {
      p1: {
        title: 'موقع شركة تقنية',
        description: 'تم بناء هذا المشروع لتوفير واجهة رقمية عصرية لشركة برمجيات. التحدي الأكبر كان موازنة الأداء مع التصميم البصري الغني. الحل كان استخدام Next.js لتحقيق سرعة تحميل فائقة مع Framer Motion للأنظمة الحركية السلسة.',
        features: ['تصميم متجاوب بالكامل', 'لوحة تحكم إدارية', 'نظام إدارة محتوى', 'تحسين SEO متقدم']
      },
      p2: {
        title: 'متجر إلكتروني للأزياء',
        description: 'الهدف كان خلق تجربة تسوق سلسة وآمنة. واجهت صعوبات في مزامنة المخزون لحظياً مع بوابات الدفع. قمت بحل ذلك باستخدام Webhooks مع Stripe ونظام إدارة قواعد بيانات موزعة لضمان دقة البيانات.',
        features: ['عربة تسوق ذكية', 'بوابة دفع متعددة', 'نظام تقييمات المنتجات', 'إدارة الطلبات والشحن']
      },
      p3: {
        title: 'منصة تعليمية تفاعلية',
        description: 'مشروع تعليمي يهدف لتبسيط التعلم عن بعد. التحدي كان التعامل مع بث الفيديو بجودة عالية وتتبع تقدم الطلاب. تم استخدام Firebase لخدمات الوقت الفعلي و Mux لإدارة محتوى الفيديو بكفاءة.',
        features: ['نظام إدارة الدورات', 'مشغل فيديو متقدم', 'اختبارات تفاعلية', 'شهادات إلكترونية']
      },
      p4: {
        title: 'تطبيق حجز المواعيد',
        description: 'تطبيق يحل مشكلة تنظيم المواعيد للمشاريع الصغيرة. الصعوبة كانت في منع تداخل المواعيد. الحل كان خوارزمية ذكية للتحقق من التوفر لحظياً مع إرسال إشعارات تلقائية عبر Firebase Cloud Messaging.',
        features: ['حجز فوري للمواعيد', 'إشعارات تلقائية', 'نظام تقييم الخدمات', 'دفع إلكتروني']
      },
      p5: {
        title: 'لوحة تحكم تحليلات',
        description: 'لوحة تحكم لعرض البيانات الضخمة. التحدي كان معالجة كميات كبيرة من البيانات دون التأثير على استجابة الواجهة. الحل كان استخدام React Query لإدارة الحالة واستراتيجيات الـ Virtualization لعرض القوائم الطويلة.',
        features: ['رسوم بيانية تفاعلية', 'تقارير قابلة للتصدير', 'تحديث بيانات فوري', 'واجهة سهلة الاستخدام']
      },
      p6: {
        title: 'موقع مطعم تفاعلي',
        description: 'تطوير نظام طلبات أونلاين متكامل. التحدي كان تبسيط عملية الطلب للمستخدمين غير التقنيين. ركزت على تصميم UI بديهي جداً وتقليل خطوات الدفع لزيادة معدل التحويل.',
        features: ['قائمة طعام رقمية', 'نظام طلبات أونلاين', 'حجز الطاولات', 'تكامل مع Google Maps']
      },
      p7: {
        title: 'متجر حمزة اعمرني',
        description: 'منصة تجارة إلكترونية متكاملة لبيع المنتجات الرقمية والخدمات. تم تطويرها لتوفير تجربة تسوق سريعة مع واجهة مستخدم عصرية.',
        features: ['إدارة المنتجات الرقمية', 'تصميم عصري وجذاب', 'سرعة في الأداء', 'متوافق مع جميع الأجهزة']
      },
      p8: {
        title: 'تطبيق حسابي (Hsabi)',
        description: 'أداة ذكية لإدارة الحسابات والعمليات المالية الشخصية أو التجارية البسيطة، تهدف لتبسيط تتبع الأرباح والمصاريف.',
        features: ['تتبع المصاريف والأرباح', 'واجهة بسيطة وسهلة', 'تقارير مالية سريعة', 'تنظيم المعاملات']
      }
    },
    preview: 'معاينة'
  },
  fr: {
    title: 'Galerie de mes travaux et projets',
    description: 'Découvrez une collection de projets que j\'ai développés, des sites d\'entreprise aux boutiques en ligne et applications avancées. Chaque projet reflète mon engagement envers la qualité et l\'innovation.',
    categories: {
      web: 'Développement Web',
      ecommerce: 'E-commerce',
      mobile: 'Application Mobile',
      app: 'Application Web'
    },
    projects: {
      p1: {
        title: 'Site d\'entreprise technologique',
        description: 'Ce projet a été conçu pour fournir une interface numérique moderne à une entreprise de logiciels. Le plus grand défi était d\'équilibrer les performances avec un design visuel riche.',
        features: ['Design entièrement réactif', 'Tableau de bord administratif', 'Système de gestion de contenu', 'Optimisation SEO avancée']
      },
      p2: {
        title: 'Boutique de mode en ligne',
        description: 'L\'objectif était de créer une expérience de shopping fluide et sécurisée. J\'ai résolu les problèmes de synchronisation des stocks en utilisant des Webhooks avec Stripe.',
        features: ['Panier intelligent', 'Passerelle de paiement multiple', 'Système d\'évaluation des produits', 'Gestion des commandes']
      },
      p3: {
        title: 'Plateforme éducative interactive',
        description: 'Projet éducatif visant à simplifier l\'apprentissage à distance. Firebase a été utilisé pour le temps réel et Mux pour la gestion vidéo.',
        features: ['Gestion des cours', 'Lecteur vidéo avancé', 'Quiz interactifs', 'Certificats électroniques']
      },
      p4: {
        title: 'Application de prise de rendez-vous',
        description: 'Application résolvant le problème de l\'organisation des rendez-vous pour les petites entreprises avec des notifications automatiques.',
        features: ['Réservation immédiate', 'Notifications automatiques', 'Système d\'évaluation', 'Paiement électronique']
      },
      p5: {
        title: 'Tableau de bord analytique',
        description: 'Tableau de bord pour afficher des données massives. React Query a été utilisé pour la gestion de l\'état et la virtualisation des listes.',
        features: ['Graphiques interactifs', 'Rapports exportables', 'Données en temps réel', 'Interface intuitive']
      },
      p6: {
        title: 'Site de restaurant interactif',
        description: 'Système complet de commande en ligne. Focus sur une interface utilisateur très intuitive pour simplifier le processus de commande.',
        features: ['Menu numérique', 'Système de commande', 'Réservation de tables', 'Intégration Google Maps']
      },
      p7: {
        title: 'Store Hamza Amirni',
        description: 'Une plateforme e-commerce complète pour la vente de produits et services numériques, conçue pour une expérience d\'achat rapide.',
        features: ['Gestion de produits numériques', 'Design moderne', 'Haute performance', 'Compatible multi-appareils']
      },
      p8: {
        title: 'Application Hsabi',
        description: 'Un outil intelligent pour la gestion des comptes et des finances personnelles ou commerciales simples.',
        features: ['Suivi des revenus et dépenses', 'Interface simple', 'Rapports financiers', 'Organisation des transactions']
      }
    },
    preview: 'Aperçu'
  },
  en: {
    title: 'My Work & Projects Gallery',
    description: 'Explore a collection of projects I have developed, from corporate websites to e-commerce stores and advanced applications. Each project reflects my commitment to quality and innovation.',
    categories: {
      web: 'Web Development',
      ecommerce: 'E-commerce',
      mobile: 'Mobile App',
      app: 'Web App'
    },
    projects: {
      p1: {
        title: 'Tech Company Website',
        description: 'Built to provide a modern digital interface for a software company. The challenge was balancing performance with rich visual design using Next.js and Framer Motion.',
        features: ['Fully responsive design', 'Admin dashboard', 'Content management system', 'Advanced SEO optimization']
      },
      p2: {
        title: 'Fashion E-commerce Store',
        description: 'The goal was to create a seamless shopping experience. Solved real-time stock synchronization issues using Webhooks with Stripe and MongoDB.',
        features: ['Smart shopping cart', 'Multiple payment gateway', 'Product rating system', 'Order & shipping management']
      },
      p3: {
        title: 'Interactive Learning Platform',
        description: 'Educational project simplifying remote learning. Used Firebase for real-time services and Mux for efficient video content management.',
        features: ['Course management system', 'Advanced video player', 'Interactive quizzes', 'E-certificates']
      },
      p4: {
        title: 'Appointment Booking App',
        description: 'Application solving appointment organization for small businesses. Used an intelligent algorithm for real-time availability checks.',
        features: ['Instant booking', 'Auto notifications', 'Rating system', 'Mobile payment']
      },
      p5: {
        title: 'Analytics Dashboard',
        description: 'Dashboard for big data display. Used React Query for state management and virtualization strategies for long lists.',
        features: ['Interactive charts', 'Exportable reports', 'Real-time data', 'User-friendly interface']
      },
      p6: {
        title: 'Interactive Restaurant Site',
        description: 'Integrated online ordering system. Focused on very intuitive UI design to reduce payment steps and increase conversion.',
        features: ['Digital menu', 'Online ordering system', 'Table reservation', 'Google Maps integration']
      },
      p7: {
        title: 'Hamza Amirni Store',
        description: 'A complete e-commerce platform for selling digital products and services, developed for a fast shopping experience.',
        features: ['Digital product management', 'Modern UI design', 'High performance', 'Responsive layout']
      },
      p8: {
        title: 'Hsabi App',
        description: 'A smart tool for managing personal or simple business accounts and financial operations.',
        features: ['Income and expense tracking', 'Simple interface', 'Financial reports', 'Transaction management']
      }
    },
    preview: 'Preview'
  }
};

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
    contactPage,
    aboutPage,
    contentPages,
    homePage,
    videosPage,
    toolsPage,
    toolsPageComprehensive,
    termsPage,
    projectsPage,
    programmingPage,
    servicesPage: servicesPageFull,
    appsPage,
    botsPage: botsPageFull,
    botsPageFull,
    articlesPage: articlesPageFull,
    articlesPageFull,
    articlesPageLabels,
    articlesPageComprehensive,
    articlesPageTranslations,
    chatPage: chatPageLabels,
    privacyPage: privacyPageLabels,
    disclaimerPage: disclaimerPageLabels,
    contactPageLabels,
    callToAction,
    sidebar,
    contactFormLabels,
    contactFormTranslations,
    adManagerTranslations,
    footerTranslations,
    errorMessages,
    buttonLabels,
    sidebarProfile,
    skillsSection,
    journeySection,
    philosophySection,
    socialMediaLinks,
    channelNames,
    programmingPageComprehensive,
    appsPageComprehensive,
    servicesPageComprehensive,
    disclaimerPageComprehensive,
    privacyPageComprehensive,
    termsPageComprehensive,
    commonLabels,
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

    if (value !== undefined && value !== null) {
      return value;
    }

    // If key not found in language-first, continue to regular traversal
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

  // If no translation found, return fallback based on key type
  const isListKey = key.endsWith('.items') || key.endsWith('.features') || key.endsWith('.steps') || key.endsWith('.data') || key.endsWith('.benefits') || key.endsWith('.points');
  if (isListKey) {
    return [];
  }

  return key;
};

// Articles page translations
export const articlesPageFull = {
  ar: {
    hero: {
      title: 'المدونة والمقالات',
      description: 'مقالات تقنية متخصصة في البرمجة، التطوير، والتكنولوجيا الحديثة. تابع آخر المستجدات والنصائح المفيدة من خبراء المجال.'
    },
    stats: {
      articles: 'مقال منشور',
      reads: 'قراءة',
      followers: 'متابع'
    },
    search: {
      all: 'الكل',
      found: 'تم العثور على',
      articles: 'مقال',
      reset: 'إعادة تعيين البحث',
      noResults: 'لم يتم العثور على مقالات',
      tryDifferent: 'جرب البحث بكلمات مختلفة أو اختر تصنيف آخر'
    },
    items: {
      featured: 'مقال مميز',
      latest: 'أحدث المقالات',
      readMore: 'اقرأ المزيد',
      readArticle: 'اقرأ المقال الكامل',
      noMore: 'لا توجد مقالات أخرى حالياً'
    },
    data: [
      {
        id: 1,
        title: 'مستقبل الذكاء الاصطناعي في 2025',
        excerpt: 'نظرة شاملة ومفصلة على أحدث التطورات في مجال الذكاء الاصطناعي وتأثيرها الجذري على الاقتصاد العالمي وحياتنا اليومية.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        category: 'تقنية',
        author: 'حمزة اعمرني',
        date: '2025-01-15',
        readTime: '12 دقيقة',
        color: 'from-blue-500 to-cyan-600',
        content: `
          <h2>مقدمة: عصر النهضة التقنية</h2>
          <p>يشهد عالم الذكاء الاصطناعي تطورات متسارعة ومذهلة تجاوزت كل التوقعات في السنوات الأخيرة. ومع دخولنا عام 2025، نجد أنفسنا ننتقل من مرحلة "التجريب" إلى مرحلة "الاندماج الكامل" للذكاء الاصطناعي في كل جانب من جوانب حياتنا.</p>
          
          <h2>الذكاء الاصطناعي التوليدي الفوقي</h2>
          <p>لم يعد الأمر مقتصرًا على كتابة النصوص أو توليد الصور البسيطة. في 2025، أصبحت النماذج قادرة على فهم السياق المعقد والتعامل مع المهام المتعددة (Multimodal) بكفاءة تضاهي البشر. نحن نتحدث عن أنظمة يمكنها إنتاج أفلام كاملة من نص بسيط، أو كتابة أنظمة برمجية معقدة في ثوانٍ معدودة.</p>

          <h2>الثورة في مجال الرعاية الصحية</h2>
          <p>تطبيقات الذكاء الاصطناعي في الطب لم تعد تقتصر على التشخيص فقط. بفضل الحوسبة الكمية المدعومة بالذكاء الاصطناعي، يتم الآن اكتشاف أدوية جديدة في أسابيع بدلاً من سنوات. الجراحات الروبوتية أصبحت أكثر دقة بنسبة 40%، والتشخيص المبكر للأمراض المستعصية وصل لمستويات دقة غير مسبوقة.</p>

          <h2>سوق العمل والمهارات الجديدة</h2>
          <p>هناك مخاوف من اختفاء الوظائف، لكن الواقع في 2025 يظهر ولادة وظائف جديدة تماماً. مهارات "هندسة الأوامر" (Prompt Engineering) و"أخلاقيات الذكاء الاصطناعي" أصبحت أساسية. التعاون بين الإنسان والآلة هو المعيار الجديد للنجاح المهني.</p>

          <h2>الخاتمة: مسؤوليتنا المشتركة</h2>
          <p>المستقبل مشرق ولكن يتطلب حذرًا. الابتكار يجب أن يسير جنبًا إلى جنب مع الأخلاقيات لضمان أن يكون الذكاء الاصطناعي أداة للبناء والتقدم البشري الشامل.</p>
        `
      },
      {
        id: 2,
        title: 'أفضل لغات البرمجة للمبتدئين في 2025',
        excerpt: 'دليل كامل ومحدث يساعدك على اختيار لغة البرمجة الأولى التي تناسب أهدافك المهنية وطموحاتك التقنية.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        category: 'برمجة',
        author: 'حمزة اعمرني',
        date: '2025-01-10',
        readTime: '15 دقيقة',
        color: 'from-purple-500 to-pink-600',
        content: `
          <h2>كيف تختار لغتك الأولى؟</h2>
          <p>السؤال الذي يطرحه كل مبتدئ: "بماذا أبدأ؟". الإجابة تعتمد بشكل أساسي على ما تريد بناءه. هل هو موقع ويب؟ تطبيق موبايل؟ أم ذكاء اصطناعي؟</p>

          <h2>1. Python: لغة المستقبل والبساطة</h2>
          <p>تظل بايثون الخيار الأول للمبتدئين. سهولة قراءتها تجعلك تركز على "المنطق" بدلاً من "التعقيد البرمجي". هي اللغة المهيمنة في مجالات الذكاء الاصطناعي، تحليل البيانات، والأتمتة.</p>

          <h2>2. JavaScript & TypeScript: لغة الويب بلا منازع</h2>
          <p>إذا كان هدفك هو الويب، فلا مفر من جافاسكريبت. لكن في 2025، ننصح بالبدء بتعلم TypeScript مباشرة لأنها توفر حماية وقوة أكبر للكود وتطلبها الشركات بكثرة.</p>

          <h2>3. Swift & Kotlin: عالم الموبايل</h2>
          <p>لهواة تطبيقات الهواتف، سويفت هي ملكة الـ iOS وكوتلن هي لغة الأندرويد الحديثة. كلاهما لغات حديثة وقوية وسهلة التعلم نسبيًا.</p>

          <h2>نصيحة الخبراء</h2>
          <p>لا تقضِ وقتاً طويلاً في المقارنة. اختر لغة واحدة، التزم بها لـ 6 أشهر، وابنِ مشاريع حقيقية. المبادئ البرمجية واحدة في كل اللغات.</p>
        `
      },
      {
        id: 3,
        title: 'خارطة الطريق لتصبح مطور ويب محترف',
        excerpt: 'دليل مفصل من الصفر حتى الاحتراف، يغطي التقنيات الأساسية وأطر العمل الحديثة وأفضل الممارسات البرمجية.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        category: 'تطوير',
        author: 'حمزة اعمرني',
        date: '2025-01-05',
        readTime: '20 دقيقة',
        color: 'from-green-500 to-teal-600',
        content: `
          <h2>المرحلة 1: الأساسيات الصلبة</h2>
          <p>ابدأ بـ HTML5 لبناء الهيكل، CSS3 للتصميم (احرص على تعلم Flexbox و Grid)، وجافاسكريبت الحديثة (ES6+). بدون هذه الأساسيات، ستواجه صعوبات كبيرة لاحقاً.</p>

          <h2>المرحلة 2: أطر العمل (Frameworks)</h2>
          <p>بعد الأساسيات، اختر إطار عمل للواجهات الأمامية. React.js لا يزال الأكثر طلباً في سوق الشغل، يليه Next.js الذي يوفر أداءً خارقاً وسهولة في تحسين محركات البحث (SEO).</p>

          <h2>المرحلة 3: عالم الـ Backend</h2>
          <p>المطور المحترف يحتاج لفهم كيف تدار البيانات. تعلم Node.js أو PHP Laravel. تعلم كيفية التعامل مع قواعد البيانات مثل PostgreSQL أو MongoDB.</p>

          <h2>المرحلة 4: الأدوات المساعدة</h2>
          <p>تعلم Git للتحكم في الإصدارات، تعلم كيفية نشر المواقع (Deployment) على منصات مثل Vercel أو Netlify، ولا تنسَ أهمية الاختبارات (Testing).</p>
        `
      },
      {
        id: 4,
        title: 'أمن المعلومات في 2025: دليلك الشامل',
        excerpt: 'حماية هويتك الرقمية وبياناتك الشخصية لم تعد خياراً بل ضرورة حتمية في مواجهة التهديدات السيبرانية المتزايدة والمدعومة بالذكاء الاصطناعي.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        category: 'أمن',
        author: 'حمزة اعمرني',
        date: '2025-01-01',
        readTime: '15 دقيقة',
        color: 'from-red-500 to-orange-600',
        content: `
          <h2>واقع التهديدات السيبرانية اليوم</h2>
          <p>مع تطور التكنولوجيا، تطورت أيضاً أساليب الاختراق. المخترقون يستخدمون الآن الذكاء الاصطناعي لإنشاء رسائل تصيد (Phishing) مقنعة جداً وتجاوز أنظمة الأمان التقليدية.</p>

          <h2>قواعد الأمان الذهبية</h2>
          <p>1. <strong>المصادقة الثنائية (2FA)</strong>: لم يعد كافياً استخدام كلمة مرور فقط. استخدم تطبيقات مثل Google Authenticator بدلاً من رسائل الـ SMS.</p>
          <p>2. <strong>إدارة كلمات المرور</strong>: استخدم مدير كلمات مرور (Password Manager) لإنشاء كلمات فريدة ومعقدة لكل حساب.</p>
          <p>3. <strong>التحديثات المستمرة</strong>: الثغرات الأمنية تظهر يومياً، والتحديثات هي حصنك الأول.</p>

          <h2>التشفير والخصوصية</h2>
          <p>تأكد من استخدام خدمات مشفرة (End-to-end encryption) وتجنب شبكات الواي فاي العامة المفتوحة دون استخدام VPN موثوق.</p>
        `
      },
      {
        id: 5,
        title: 'تطوير تطبيقات الموبايل بـ React Native',
        excerpt: 'اكتشف كيف يمكنك بناء تطبيقات احترافية لنظامي iOS و Android باستخدام لغة واحدة وكود واحد بكفاءة عالية وأداء ممتاز.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        category: 'موبايل',
        author: 'حمزة اعمرني',
        date: '2024-12-25',
        readTime: '18 دقيقة',
        color: 'from-indigo-500 to-blue-600',
        content: `
          <h2>لماذا React Native في 2025؟</h2>
          <p>تظل React Native الخيار الأفضل للشركات التي تريد توفير المال والوقت دون التضحية بالجودة. شركات كبرى مثل Facebook و Instagram و Uber تستخدمها لبناء تطبيقاتهم.</p>

          <h2>بنية التطبيقات الحديثة</h2>
          <p>نتحدث عن استخدام أحدث الميزات مثل "New Architecture" و "JSI" التي تجعل التواصل بين الجافاسكريبت والنظام الأصلي أسرع بمرات عديدة.</p>

          <h2>أفضل الممارسات للأداء</h2>
          <p>للحصول على تطبيق سريع، يجب عليك تجنب الرندرة المتكررة، استخدام الصور بأحجام مناسبة، والاعتماد على محركات سريعة مثل Hermes Engine.</p>

          <h2>الخلاصة</h2>
          <p>إذا كنت تعرف جافاسكريبت و React، فأنت على بعد خطوات بسيطة من أن تصبح مطور تطبيقات موبايل ناجح.</p>
        `
      },
      {
        id: 6,
        title: 'أساسيات التصميم التي يجب على كل مطور معرفتها',
        excerpt: 'اجعل تطبيقاتك تبدو احترافية وسهلة الاستخدام من خلال تعلم مبادئ التصميم الأساسية وتجربة المستخدم (UX/UI).',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        category: 'تصميم',
        author: 'حمزة اعمرني',
        date: '2024-12-20',
        readTime: '10 دقائق',
        color: 'from-pink-500 to-rose-600',
        content: `
          <h2>التصميم ليس مجرد "ألوان"</h2>
          <p>التصميم هو كيف يعمل الشيء، وليس فقط كيف يبدو. كمطور، يجب أن تفهم أن تجربة المستخدم (UX) تبدأ قبل كتابة أول سطر من الكود.</p>

          <h2>1. التسلسل الهرمي البصري (Visual Hierarchy)</h2>
          <p>يجب أن يعرف المستخدم أين ينظر أولاً. استخدم أحجام الخطوط والألوان والمسافات لتوجيه عينه نحو العناصر الأكثر أهمية مثل أزرار الإجراءات (Call to Action).</p>

          <h2>2. المسافات البيضاء (Whitespace)</h2>
          <p>لا تخف من الفراغ. المسافات البيضاء تجعل التصميم مريحاً للعين وتساعد في فصل العناصر عن بعضها البعض بشكل منطقي.</p>

          <h2>3. التناسق (Consistency)</h2>
          <p>الأزرار، الخطوط، والألوان يجب أن تكون متناسقة في كل صفحات التطبيق. هذا يبني الثقة ويجعل التعلم على التطبيق أسرع للمستخدم.</p>

          <h2>4. سهولة الوصول (Accessibility)</h2>
          <p>تأكد من أن الألوان متباينة بما يكفي ليقرأها الجميع، وأن الأحجام كبيرة بما يكفي للنقر عليها بسهولة على شاشات اللمس.</p>
        `
      }
    ]
  },
  fr: {
    hero: {
      title: 'Blog & Articles',
      description: 'Articles techniques spécialisés en programmation, développement web et nouvelles technologies. Restez à jour avec les dernières tendances.'
    },
    stats: {
      articles: 'Articles',
      reads: 'Lectures',
      followers: 'Abonnés'
    },
    search: {
      all: 'Tout',
      found: 'Trouvé',
      articles: 'articles',
      reset: 'Réinitialiser',
      noResults: 'Aucun article trouvé',
      tryDifferent: 'Essayez d\'autres mots ou changez de catégorie'
    },
    items: {
      featured: 'Article en vedette',
      latest: 'Derniers Articles',
      readMore: 'Lire la suite',
      readArticle: 'Lire l\'article complet',
      noMore: 'Plus d\'articles pour le moment'
    },
    data: [
      {
        id: 1,
        title: 'Le Futur de l\'IA en 2025',
        excerpt: 'Une analyse approfondie des avancées majeures de l\'Intelligence Artificielle et de leur impact sur notre quotidien et l\'économie mondiale.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        category: 'Techno',
        author: 'Hamza Amirni',
        date: '2025-01-15',
        readTime: '12 min',
        color: 'from-blue-500 to-cyan-600',
        content: `
          <h2>Introduction : L'ère de l'IA Omniprésente</h2>
          <p>En 2025, l'Intelligence Artificielle n'est plus un simple sujet de science-fiction. Elle est devenue le moteur invisible de notre société moderne, transformant radicalement notre façon de travailler, de communiquer et de vivre.</p>
          
          <h2>L'IA Générative Multimodale</h2>
          <p>Nous avons dépassé le stade des simples chatbots. Les modèles actuels, comme GPT-5 ou Gemini Ultra, sont capables de traiter et de générer du texte, de l'audio, des images et de la vidéo en temps réel avec une fluidité déconcertante. Cette multimodalité permet une assistance plus naturelle et personnalisée que jamais.</p>

          <h2>Révolution dans la Santé</h2>
          <p>Grâce à l'IA, la médecine de précision est devenue une réalité. Le diagnostic précoce de maladies complexes comme le cancer a vu son taux de réussite augmenter de 40 %. De plus, la découverte de nouveaux médicaments, qui prenait autrefois des décennies, se fait désormais en quelques mois grâce à la simulation moléculaire assistée par IA.</p>

          <h2>Éthique et Responsabilité</h2>
          <p>Avec une telle puissance vient une grande responsabilité. En 2025, la régulation de l'IA est un sujet central. La transparence des algorithmes (XAI) et la protection de la vie privée sont les nouveaux piliers du développement technologique durable.</p>
        `
      },
      {
        id: 2,
        title: 'Top Langages de Programmation en 2025',
        excerpt: 'Guide complet pour choisir le premier langage de programmation adapté à vos objectifs de carrière et aux demandes du marché.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        category: 'Code',
        author: 'Hamza Amirni',
        date: '2025-01-10',
        readTime: '15 min',
        color: 'from-purple-500 to-pink-600',
        content: `
          <h2>Quel langage choisir pour débuter ?</h2>
          <p>Le choix de votre premier langage est crucial. Il ne s'agit pas seulement de syntaxe, mais de l'écosystème dans lequel vous allez évoluer.</p>

          <h2>1. Python : La porte d'entrée universelle</h2>
          <p>Python reste le favori absolu pour les débutants. Sa syntaxe proche de l'anglais permet de se concentrer sur la logique algorithmique. C'est le langage dominant pour l'IA, la science des données et l'automatisation.</p>

          <h2>2. JavaScript & TypeScript : Les rois du Web</h2>
          <p>Impossible de faire du web sans eux. TypeScript est devenu le standard industriel en 2025, apportant une sécurité et une robustesse nécessaires aux grands projets d'entreprise.</p>

          <h2>3. Swift et Kotlin : Le futur du Mobile</h2>
          <p>Pour ceux qui rêvent de créer des applications mobiles natives, Swift (Apple) et Kotlin (Android) offrent des performances inégalées et des outils de développement modernes.</p>

          <h2>Conseil Pro</h2>
          <p>La clé n'est pas de connaître tous les langages, mais d'en maîtriser un en profondeur. La logique de programmation est universelle.</p>
        `
      },
      {
        id: 3,
        title: 'Devenir Développeur Web Pro',
        excerpt: 'Une feuille de route complète pour maîtriser les technologies modernes, de HTML/CSS aux frameworks JavaScript avancés.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        category: 'Dev',
        author: 'Hamza Amirni',
        date: '2025-01-05',
        readTime: '20 min',
        color: 'from-green-500 to-teal-600',
        content: `
          <h2>Étape 1 : Les Fondations Solides</h2>
          <p>Maîtrisez HTML5 pour la sémantique, CSS3 pour le design (Flexbox et Grid sont indispensables), et le JavaScript moderne (ES6+). Ce sont vos outils de base.</p>

          <h2>Étape 2 : Frameworks Frontend</h2>
          <p>Une fois les bases acquises, tournez-vous vers React.js ou Vue.js. React reste le plus demandé sur le marché de l'emploi en 2025, particulièrement avec l'utilisation de Next.js pour le SEO et l'optimisation des performances.</p>

          <h2>Étape 3 : Le Backend et les Données</h2>
          <p>Un développeur complet comprend comment les données sont gérées. Apprenez Node.js ou PHP Laravel, et familiarisez-vous avec les bases de données comme PostgreSQL ou MongoDB.</p>

          <h2>Étape 4 : Soft Skills et Outillage</h2>
          <p>Apprenez Git pour le contrôle de version, comprenez le déploiement (CI/CD) et apprenez à travailler en équipe avec des outils comme Jira ou Slack.</p>
        `
      },
      {
        id: 4,
        title: 'Guide de la Cybersécurité en 2025',
        excerpt: 'Comment protéger votre identité numérique et vos données face à des menaces de plus en plus sophistiquées utilisant l\'IA.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        category: 'Sécu',
        author: 'Hamza Amirni',
        date: '2025-01-01',
        readTime: '15 min',
        color: 'from-red-500 to-orange-600',
        content: `
          <h2>Le paysage des menaces actuelles</h2>
          <p>Le phishing est devenu extrêmement difficile à détecter car les attaquants utilisent désormais l'IA pour générer des emails et des sites parfaitement crédibles.</p>

          <h2>Les règles d'or de la protection</h2>
          <p>1. <strong>L'authentification à deux facteurs (2FA)</strong> : Utilisez des applications d'authentification plutôt que les SMS pour une sécurité accrue.</p>
          <p>2. <strong>La gestion des mots de passe</strong> : Un gestionnaire comme Bitwarden est indispensable pour avoir des mots de passe complexes et uniques pour chaque service.</p>
          <p>3. <strong>Mises à jour régulières</strong> : Ne négligez jamais les mises à jour système, elles corrigent souvent des failles critiques.</p>

          <h2>VPN et Chiffrement</h2>
          <p>Utilisez toujours un VPN sur les réseaux publics et privilégiez les applications proposant un chiffrement de bout en bout pour vos communications sensibles.</p>
        `
      },
      {
        id: 5,
        title: 'App de Mobile avec React Native',
        excerpt: 'Apprenez à construire des applications performantes pour iOS et Android avec une seule base de code JavaScript.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        category: 'Mobile',
        author: 'Hamza Amirni',
        date: '2024-12-25',
        readTime: '18 min',
        color: 'from-indigo-500 to-blue-600',
        content: `
          <h2>Pourquoi React Native en 2025 ?</h2>
          <p>C'est le choix stratégique pour les entreprises. Rapidité de développement, maintenance facilitée et une communauté immense. Des géants comme Instagram et Shopify l'utilisent au quotidien.</p>

          <h2>La Nouvelle Architecture</h2>
          <p>Avec l'arrivée de la nouvelle architecture (JSI), les performances de React Native rivalisent désormais avec celles des applications purement natives.</p>

          <h2>Conseils de Performance</h2>
          <p>Pour une application fluide, optimisez le rendu des listes, utilisez des images bien dimensionnées et activez le moteur Hermes par défaut.</p>

          <h2>Conclusion</h2>
          <p>Si vous maîtrisez React pour le web, vous êtes déjà à 80 % du chemin pour devenir un développeur mobile accompli.</p>
        `
      },
      {
        id: 6,
        title: 'Bases du Design pour Développeurs',
        excerpt: 'Améliorez l\'aspect visuel et l\'expérience utilisateur de vos projets en maîtrisant les principes fondamentaux de l\'UI/UX Design.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        category: 'Design',
        author: 'Hamza Amirni',
        date: '2024-12-20',
        readTime: '10 min',
        color: 'from-pink-500 to-rose-600',
        content: `
          <h2>Le design, c'est de la psychologie</h2>
          <p>Un bon design guide l'utilisateur sans qu'il s'en rende compte. C'est la différence entre une application que l'on adore utiliser و celle que l'on désinstalle immédiatement.</p>

          <h2>1. La Hiérarchie Visuelle</h2>
          <p>Utilisez la taille, la couleur et le contraste pour faire comprendre à l'utilisateur ce qui est le plus important sur la page. Vos boutons d'action (CTA) doivent être bien visibles.</p>

          <h2>2. L'importance des Espaces (Whitespace)</h2>
          <p>Ne surchargez pas vos interfaces. L'espace vide permet au contenu de respirer et aide l'utilisateur à se concentrer sur l'essentiel.</p>

          <h2>3. Constance et Alignement</h2>
          <p>Soyez cohérent dans le choix de vos polices, couleurs و marges. Un design aligné sur une grille paraît immédiatement plus professionnel.</p>

          <h2>4. Accessibilité (a11y)</h2>
          <p>Assurez-vous que vos textes sont lisibles par tous (bon contraste) et que vos interfaces sont utilisables aussi bien à la souris qu'au clavier.</p>
        `
      }
    ]
  },
  en: {
    hero: {
      title: 'Blog & Articles',
      description: 'Technical articles specialized in programming, development, and modern technologies. Stay ahead of the curve.'
    },
    stats: {
      articles: 'Articles',
      reads: 'Reads',
      followers: 'Followers'
    },
    search: {
      all: 'All',
      found: 'Found',
      articles: 'articles',
      reset: 'Reset Search',
      noResults: 'No articles found',
      tryDifferent: 'Try different keywords or category'
    },
    items: {
      featured: 'Featured Article',
      latest: 'Latest Articles',
      readMore: 'Read More',
      readArticle: 'Read Full Article',
      noMore: 'No more articles for now'
    },
    data: [
      {
        id: 1,
        title: 'Future of AI in 2025',
        excerpt: 'A comprehensive study on the rapid evolution of Artificial Intelligence and its profound impact on global industries and daily life.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        category: 'Tech',
        author: 'Hamza Amirni',
        date: '2025-01-15',
        readTime: '12 min',
        color: 'from-blue-500 to-cyan-600',
        content: `
          <h2>Introduction: The AI Renaissance</h2>
          <p>Artificial Intelligence has graduated from simple experimental tools to the very foundation of modern innovation. As we step into 2025, the integration of AI is no longer a luxury but a fundamental necessity for any tech-driven society.</p>
          
          <h2>Multimodal Generative AI</h2>
          <p>We are seeing the rise of models that don't just text but understand emotions, visual cues, and audio context simultaneously. Next-gen models like GPT-5 and Gemini Ultra are now capable of creative reasoning that was once thought to be purely human.</p>

          <h2>AI in Healthcare and Science</h2>
          <p>AI-driven drug discovery has cut experimental timelines from years to just weeks. In hospitals, AI assistants are now helping surgeons with sub-millimeter precision, significantly reducing recovery times for complex procedures.</p>

          <h2>The Future of Work</h2>
          <p>While some fear job displacement, 2025 shows a shift towards "Augmented Intelligence." The most successful professionals are those who master the art of collaborating with AI to boost their productivity and creativity tenfold.</p>

          <h2>Final Thoughts</h2>
          <p>The key to the future is not choosing between humans and AI, but finding the perfect synergy between both to solve humanity's greatest challenges.</p>
        `
      },
      {
        id: 2,
        title: 'Best Programming Languages for Beginners in 2025',
        excerpt: 'A detailed guide to choosing your first programming language based on current industry demands and career prospects.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        category: 'Code',
        author: 'Hamza Amirni',
        date: '2025-01-10',
        readTime: '15 min',
        color: 'from-purple-500 to-pink-600',
        content: `
          <h2>The "First Language" Dilemma</h2>
          <p>Choosing your first coding language is more about the mindset than the tools. In 2025, the barrier to entry is lower, but the depth required is higher.</p>

          <h2>1. Python: The King of Simplicity</h2>
          <p>Python remains the gold standard for newcomers. Its clean syntax allows you to focus on logical thinking. Whether it's Data Science, AI, or Web Backend, Python is everywhere.</p>

          <h2>2. JavaScript & TypeScript: The Web Native</h2>
          <p>If you want to see your results on a screen instantly, start here. TypeScript is now mandatory for any professional developer, offering type-safety that prevents 80% of common bugs.</p>

          <h2>3. Go and Rust: The Performance Choice</h2>
          <p>For those interested in systems and ultra-fast backend services, Go and Rust are the trending languages of 2025, known for their efficiency and safety features.</p>

          <h2>How to Start?</h2>
          <p>Pick one language and stick with it until you build a functional project. Switching languages too early is the #1 reason why beginners quit.</p>
        `
      },
      {
        id: 3,
        title: 'Complete Web Developer Roadmap',
        excerpt: 'A modern, step-by-step roadmap to becoming a professional web developer in today\'s competitive job market.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        category: 'Web',
        author: 'Hamza Amirni',
        date: '2025-01-05',
        readTime: '20 min',
        color: 'from-green-500 to-teal-600',
        content: `
          <h2>Phase 1: The Three Pillars</h2>
          <p>You must master HTML5, CSS3, and JavaScript. Understanding how the browser works, the DOM, and basic styling concepts like Flexbox and Grid is non-negotiable.</p>

          <h2>Phase 2: Modern Frameworks</h2>
          <p>React.js continues to dominate the industry. Mastering React, along with Next.js for server-side rendering and SEO, is the quickest path to a professional role in 2025.</p>

          <h2>Phase 3: The Backend Ecosystem</h2>
          <p>Learn Node.js or a robust framework like Laravel. Understanding RESTful APIs, authentication (JWT/OAuth), and database management (SQL vs NoSQL) is essential for any full-stack path.</p>

          <h2>Phase 4: DevTools and Deployment</h2>
          <p>Professional devs use Git for collaboration and know how to deploy their apps using Vercel, Netlify, or AWS. Don't forget the importance of clean code and documentation!</p>
        `
      },
      {
        id: 4,
        title: 'Information Security Guide: 2025 Edition',
        excerpt: 'Essential strategies to protect your digital presence and sensitive data from advanced AI-driven cyber threats.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        category: 'Sec',
        author: 'Hamza Amirni',
        date: '2025-01-01',
        readTime: '15 min',
        color: 'from-red-500 to-orange-600',
        content: `
          <h2>The Evolving Threat Landscape</h2>
          <p>Cyber-attacks have become more sophisticated, with "Deepfake phishing" and automated zero-day exploits becoming common. Security is no longer just for experts; it's a daily habit for everyone.</p>

          <h2>Core Security Rules</h2>
          <p>1. <strong>2FA is Mandatory</strong>: Password alone is a vulnerability. Always use app-based authenticators like Authy or Microsoft Authenticator.</p>
          <p>2. <strong>Password Management</strong>: Use tools like Bitwarden or 1Password. Never reuse passwords across different platforms.</p>
          <p>3. <strong>Vigilance</strong>: If a message looks urgent or too good to be true, it's likely a scam. AI can now mimic your boss's or friend's voice and style perfectly.</p>

          <h2>Privacy and Encryption</h2>
          <p>Always verify that the services you use offer end-to-end encryption and be mindful of the permissions you grant to mobile apps.</p>
        `
      },
      {
        id: 5,
        title: 'Mobile App with React Native',
        excerpt: 'Learn how to build high-performance, native-like mobile applications for iOS and Android using one JavaScript codebase.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        category: 'Mobile',
        author: 'Hamza Amirni',
        date: '2024-12-25',
        readTime: '18 min',
        color: 'from-indigo-500 to-blue-600',
        content: `
          <h2>Why React Native still rules in 2025</h2>
          <p>With the release of the "Bridgeless" architecture, React Native has closed the gap with native languages like Swift and Kotlin. It's the go-to choice for startups and enterprises alike.</p>

          <h2>Building for Performance</h2>
          <p>Modern mobile development focuses on minimizing the Javascript bundle size and using native-driven animations. Using the Hermes engine is a must for faster app startups.</p>

          <h2>The Expo Ecosystem</h2>
          <p>Expo has evolved from a simple tool to a powerful framework that handles almost all native configurations automatically, speeding up development by 3x.</p>

          <h2>Final Verdict</h2>
          <p>If you already know React, you are 90% ready to build world-class mobile apps. The future of mobile is cross-platform.</p>
        `
      },
      {
        id: 6,
        title: 'Design Basics for Developers',
        excerpt: 'Master the fundamental principles of UI/UX design to make your applications look professional and user-friendly.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        category: 'Design',
        author: 'Hamza Amirni',
        date: '2024-12-20',
        readTime: '10 min',
        color: 'from-pink-500 to-rose-600',
        content: `
          <h2>Design is Functionality</h2>
          <p>As a developer, coding is only half the battle. A great application must be intuitive. If the user has to think about how to use your app, you have failed the design test.</p>

          <h2>1. Visual Hierarchy and Focal Points</h2>
          <p>Direct the user's attention. Use size, color weight, and spacing to highlight what's most important (like "Sign Up" or "Search" buttons).</p>

          <h2>2. Empathy for the User (UX)</h2>
          <p>Understand the user's journey. Simplify forms, reduce the number of clicks required for common tasks, and provide clear feedback for every action taken.</p>

          <h2>3. Spacing and Geometry</h2>
          <p>The "8pt Grid System" is your best friend. Consistent spacing between elements creates a sense of order and professionalism that users unconsciously appreciate.</p>

          <h2>4. Color Theory and Typography</h2>
          <p>Limit your color palette and choose fonts that are highly readable on mobile screens. Consistency across all pages builds brand trust.</p>
        `
      }
    ]
  }
};

// Common UI Labels
export const commonLabels = {
  ar: {
    close: 'إغلاق',
    contactUs: 'تواصل معنا لمزيد من المعلومات',
    lastUpdate: 'تاريخ آخر تحديث',
    disclaimerNotice: 'تنبيه: استخدام هذا الموقع يعني موافقتك على جميع بنود إخلاء المسؤولية هذا. إذا كنت لا توافق على أي من هذه البنود، يرجى عدم استخدام الموقع.',
    adsenseNotice: 'نحن نستخدم شركاء إعلانات خارجيين لعرض الإعلانات عندما تزور موقعنا. قد تستخدم هذه الشركات معلومات حول زياراتك لهذا الموقع والمواقع الأخرى من أجل عرض إعلانات حول السلع والخدمات التي تهمك.'
  },
  fr: {
    close: 'Fermer',
    contactUs: 'Contactez-nous pour plus d\'informations',
    lastUpdate: 'Dernière mise à jour',
    disclaimerNotice: 'Avis : L\'utilisation de ce site signifie votre accord avec tous les termes de cet avis de non-responsabilité. Si vous n\'êtes pas d\'accord, veuillez ne pas utiliser le site.',
    adsenseNotice: 'Nous utilisons des sociétés de publicité tierces pour diffuser des publicités lorsque vous visitez notre site Web.'
  },
  en: {
    close: 'Close',
    contactUs: 'Contact us for more information',
    lastUpdate: 'Last Updated',
    disclaimerNotice: 'Notice: Using this website means your agreement to all terms of this disclaimer. If you do not agree, please do not use the website.',
    adsenseNotice: 'We use third-party advertising companies to serve ads when you visit our website.'
  }
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

export const servicesPageLabels = {
  ar: {
    title: '🛠️ خدماتنا الاحترافية',
    description: 'نقدم مجموعة واسعة من الخدمات التقنية والبرمجية لتلبية احتياجاتك',
    games: 'الخدمات',
    projects: 'مشاريعنا',
    challenges: 'اطلب خدمة'
  },
  fr: {
    title: '🛠️ Nos Services Professionnels',
    description: 'Nous offrons une large gamme de services techniques et logiciels pour répondre à vos besoins',
    games: 'Services',
    projects: 'Nos Projets',
    challenges: 'Commander'
  },
  en: {
    title: '🛠️ Our Professional Services',
    description: 'We offer a wide range of technical and software services to meet your needs',
    games: 'Services',
    projects: 'Our Projects',
    challenges: 'Order Now'
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
    acceptance: 'En utilisant le site de Hamza Amirni, vous acceptez de respecter ces conditions.',
    serviceTitle: '2. Description du service',
    serviceDesc: 'Le site de Hamza Amirni est une plateforme technique qui propose du contenu éducatif.',
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
    acceptance: 'By using Hamza Amirni\'s website, you agree to comply with these terms.',
    serviceTitle: '2. Service Description',
    serviceDesc: 'Hamza Amirni\'s website is a technical platform offering educational content.',
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
    title: 'مطور روبوتات وخبير ويب'
  },
  fr: {
    name: 'Hamza Amirni',
    title: 'Développeur de Bots et Expert Web'
  },
  en: {
    name: 'Hamza Amirni',
    title: 'Freelance Bot Developer & Web Expert'
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
    title: '🛠️ أدوات مفيدة',
    description: 'استخدم مجموعة من أدوات الويب والتطبيقات المفيدة في حياتك اليومية.',
    searchPlaceholder: 'ابحث عن أداة أو موقع...',
    noResults: 'لا توجد نتائج مطابقة لبحثك.',
    visitButton: 'زيارة',
    items: {
      doc: { title: 'Google Docs', description: 'محرر مستندات متقدم من جوجل', tags: ['محررات', 'مستندات'] },
      chatgpt: { title: 'ChatGPT', description: 'مساعد ذكي للإجابة على الأسئلة', tags: ['ذكاء اصطناعي', 'مساعد'] },
      coursera: { title: 'Coursera', description: 'منصة تعليمية من جامعات عالمية', tags: ['منصات', 'تعليم'] },
      canva: { title: 'Canva', description: 'برنامج تصميم سهل وسريع', tags: ['تصميم', 'جرافيكس'] },
      github: { title: 'GitHub', description: 'منصة مشهورة لمشاركة البرمجيات', tags: ['برمجة', 'أدوات'] },
      stackoverflow: { title: 'Stack Overflow', description: 'موقع رائع للأسئلة والإجابات على مشاكل البرمجة', tags: ['برمجة', 'أسئلة'] },
    }
  },
  fr: {
    title: '🛠️ Outils Utiles',
    description: 'Utilisez un ensemble d\'outils web et d\'applications utiles dans votre vie quotidienne.',
    searchPlaceholder: 'Recherchez un outil ou un site...',
    noResults: 'Aucun résultat ne correspond à votre recherche.',
    visitButton: 'Visiter',
    items: {
      doc: { title: 'Google Docs', description: 'Éditeur de documents avancé de Google', tags: ['éditeurs', 'documents'] },
      chatgpt: { title: 'ChatGPT', description: 'Assistant intelligent pour répondre aux questions', tags: ['IA', 'assistant'] },
      coursera: { title: 'Coursera', description: 'Plateforme éducative des universités mondiales', tags: ['plateformes', 'éducation'] },
      canva: { title: 'Canva', description: 'Programme de conception facile et rapide', tags: ['conception', 'graphiques'] },
      github: { title: 'GitHub', description: 'Plateforme célèbre pour le partage de logiciels', tags: ['programmation', 'outils'] },
      stackoverflow: { title: 'Stack Overflow', description: 'Super site pour les questions et réponses de programmation', tags: ['programmation', 'questions'] },
    }
  },
  en: {
    title: '🛠️ Useful Tools',
    description: 'Use a collection of useful web tools and applications in your daily life.',
    searchPlaceholder: 'Search for a tool or website...',
    noResults: 'No results match your search.',
    visitButton: 'Visit',
    items: {
      doc: { title: 'Google Docs', description: 'Advanced document editor from Google', tags: ['editors', 'documents'] },
      chatgpt: { title: 'ChatGPT', description: 'Smart assistant to answer questions', tags: ['AI', 'assistant'] },
      coursera: { title: 'Coursera', description: 'Educational platform from global universities', tags: ['platforms', 'education'] },
      canva: { title: 'Canva', description: 'Easy and fast design program', tags: ['design', 'graphics'] },
      github: { title: 'GitHub', description: 'Famous platform for software sharing', tags: ['programming', 'tools'] },
      stackoverflow: { title: 'Stack Overflow', description: 'Great site for programming questions and answers', tags: ['programming', 'questions'] },
    }
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
    byHamza: 'Par Hamza Amirni'
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
    byHamza: 'By Hamza Amirni'
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

// Additional comprehensive translations
export const sidebarProfile = {
  ar: {
    name: 'حمزة اعمرني',
    role: '👨 مطور ويب متخصص',
    description: 'أهلا وسهلا! أنا حمزة اعمرني، مطور ويب متخصص عندي خبرة كبيرة في مجال البرمجيات والتقنيات. 🙌\n\nأعمل في مجالات الويب ديفلوبمنت والتطبيقات والبرمجيات والتقنيات الحديثة.\n\nأحب التعلم المستمر وتطوير المهارات في مجالات البرمجة والتصميم والتكنولوجيا.\n\nإذا كان لديك أي استفسار أو تريد التعاون معي، فلا تتردد في التواصل. 🔥'
  },
  fr: {
    name: 'Hamza Amirni',
    role: 'Développeur et créateur de contenu tech',
    description: 'Bonjour et bienvenue ! Je suis Hamza Amirni, un développeur web spécialisé avec une grande expérience dans le domaine des logiciels et des technologies. 🙌\n\nJe travaille dans les domaines du développement web, des applications, des logiciels et des technologies modernes.\n\nJ\'aime l\'apprentissage continu et le développement de compétences en programmation, conception et technologie.\n\nSi vous avez des questions ou souhaitez collaborer avec moi, n\'hésitez pas à me contacter. 🔥'
  },
  en: {
    name: 'Hamza Amirni',
    role: 'Professional Web Developer',
    description: 'Hello and welcome! I\'m Hamza Amirni, a professional web developer with extensive experience in software and technologies. 🙌\n\nI work in web development, applications, software, and modern technologies.\n\nI love continuous learning and developing skills in programming, design, and technology.\n\nIf you have any questions or would like to collaborate, feel free to get in touch. 🔥'
  }
};

// Skills section translations
export const skillsSection = {
  ar: {
    title: 'مهاراتي',
    htmlCssJs: 'HTML, CSS, JS',
    htmlCssJsPercent: '95%',
    phpPython: 'PHP, Python',
    phpPythonPercent: '90%',
    uiUx: 'UI/UX Design',
    uiUxPercent: '85%',
    problemSolving: 'Problem Solving',
    problemSolvingPercent: '92%',
    hardwareSoftware: 'Hardware & Software',
    hardwareSoftwarePercent: '88%'
  },
  fr: {
    title: 'Mes compétences',
    htmlCssJs: 'HTML, CSS, JS',
    htmlCssJsPercent: '95%',
    phpPython: 'PHP, Python',
    phpPythonPercent: '90%',
    uiUx: 'UI/UX Design',
    uiUxPercent: '85%',
    problemSolving: 'Résolution de problèmes',
    problemSolvingPercent: '92%',
    hardwareSoftware: 'Matériel et logiciel',
    hardwareSoftwarePercent: '88%'
  },
  en: {
    title: 'My Skills',
    htmlCssJs: 'HTML, CSS, JS',
    htmlCssJsPercent: '95%',
    phpPython: 'PHP, Python',
    phpPythonPercent: '90%',
    uiUx: 'UI/UX Design',
    uiUxPercent: '85%',
    problemSolving: 'Problem Solving',
    problemSolvingPercent: '92%',
    hardwareSoftware: 'Hardware & Software',
    hardwareSoftwarePercent: '88%'
  }
};

// Journey section translations
export const journeySection = {
  ar: {
    title: '🚀 مقتطف من مسيرتي',
    items: [
      'حاصل على بكالوريا PC سنة 2023 وأدرس حالياً التطوير الرقمي بـ OFPPT.',
      'أكملت السنة الأولى في شعبة رسم البناء (Dessin de Bâtiment).',
      'متخصص في برمجة البوتات وتطوير تطبيقات الويب الحديثة.',
      'أهدف لتقديم حلول تقنية مبتكرة تلبي احتياجات المستخدمين.'
    ]
  },
  fr: {
    title: '🚀 Aperçu de mon parcours',
    items: [
      'Baccalauréat PC en 2023 et étude actuelle du Développement Digital à l\'OFPPT.',
      'J\'ai terminé la première année en Dessin de Bâtiment.',
      'Spécialisé en programmation de bots et développement web moderne.',
      'Mon objectif est de fournir des solutions techniques innovantes.'
    ]
  },
  en: {
    title: '🚀 Highlights of My Journey',
    items: [
      'Baccalaureate PC in 2023 and currently studying Digital Development at OFPPT.',
      'Completed the first year of Building Drawing (Dessin de Bâtiment).',
      'Specialized in bot programming and modern web development.',
      'Aiming to provide innovative technical solutions to users.'
    ]
  }
};

// Philosophy section translations
export const philosophySection = {
  ar: {
    title: '🎯 فلسفتي',
    continuousLearning: {
      title: 'التعليم المستمر',
      description: 'أؤمن بأن التعليم المستمر يدفعك للأمام والمعرفة تزداد كلما تعلمت أكثر.'
    },
    qualityDelivery: {
      title: 'تقديم الجودة',
      description: 'أركز على تقديم جودة عالية في كل مشاريعي.'
    },
    designCreativity: {
      title: 'التصميم والإبداع',
      description: 'أحب تقديم أفكار جديدة وحلول مبتكرة وجميلة.'
    }
  },
  fr: {
    title: '🎯 Ma philosophie',
    continuousLearning: {
      title: 'Apprentissage continu',
      description: 'Je crois que l\'apprentissage continu vous pousse vers l\'avant et que les connaissances augmentent à mesure que vous en apprenez davantage.'
    },
    qualityDelivery: {
      title: 'Fournir de la qualité',
      description: 'Je me concentre sur la fourniture d\'une qualité élevée dans tous mes projets.'
    },
    designCreativity: {
      title: 'Design et créativité',
      description: 'J\'aime proposer de nouvelles idées et des solutions innovantes et belles.'
    }
  },
  en: {
    title: '🎯 My Philosophy',
    continuousLearning: {
      title: 'Continuous Learning',
      description: 'I believe that continuous learning pushes you forward and knowledge increases as you learn more.'
    },
    qualityDelivery: {
      title: 'Deliver Quality',
      description: 'I focus on delivering high quality in all my projects.'
    },
    designCreativity: {
      title: 'Design & Creativity',
      description: 'I enjoy presenting new ideas and innovative, beautiful solutions.'
    }
  }
};

// Social media translations
export const socialMediaLinks = {
  ar: {
    facebook: 'الفيسبوك',
    facebookPage: 'صفحة فيسبوك',
    youtube: 'يوتيوب',
    instagram: 'إنستجرام',
    instagram2: 'إنستجرام 2',
    instagramChannel: 'قناة إنستجرام',
    whatsapp: 'واتساب',
    whatsappChannel: 'قناة واتساب',
    whatsappGroups: 'مجموعات واتساب',
    telegram: 'تيليجرام',
    github: 'GitHub',
    linkedin: 'لينكدإن',
    twitter: 'تويتر'
  },
  fr: {
    facebook: 'Facebook',
    facebookPage: 'Page Facebook',
    youtube: 'YouTube',
    instagram: 'Instagram',
    instagram2: 'Instagram 2',
    instagramChannel: 'Canal Instagram',
    whatsapp: 'WhatsApp',
    whatsappChannel: 'Canal WhatsApp',
    whatsappGroups: 'Groupes WhatsApp',
    telegram: 'Telegram',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter'
  },
  en: {
    facebook: 'Facebook',
    facebookPage: 'Facebook Page',
    youtube: 'YouTube',
    instagram: 'Instagram',
    instagram2: 'Instagram 2',
    instagramChannel: 'Instagram Channel',
    whatsapp: 'WhatsApp',
    whatsappChannel: 'WhatsApp Channel',
    whatsappGroups: 'WhatsApp Groups',
    telegram: 'Telegram',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    twitter: 'Twitter'
  }
};

// Channel names translations
export const channelNames = {
  ar: {
    programmingUpdates: 'قناة تحديثات البرمجيات',
    quranUpdates: 'قناة تحديثات القرآنيات',
    directContact: 'تواصل معي مباشرة',
    whatsappGroups: 'مجموعات واتساب'
  },
  fr: {
    programmingUpdates: 'Canal des mises à jour de programmation',
    quranUpdates: 'Canal des mises à jour du Coran',
    directContact: 'Contact direct',
    whatsappGroups: 'Groupes WhatsApp'
  },
  en: {
    programmingUpdates: 'Programming Updates Channel',
    quranUpdates: 'Quran Updates Channel',
    directContact: 'Direct Contact',
    whatsappGroups: 'WhatsApp Groups'
  }
};

// Programming page comprehensive translations
export const programmingPageComprehensive = {
  ar: {
    benefitsTitle: 'فوائد تعلم البرمجة',
    benefits: [
      'تطوير مهارات حل المشاكل والتفكير المنطقي',
      'فتح فرص وظيفية جديدة ورواتب عالية',
      'القدرة على تطوير تطبيقات وحلول تقنية',
      'فهم أساسيات أنظمة الحاسوب والشبكات',
      'تحسين القدرة على العمل بفريق والتعاون'
    ],
    exampleTitle: 'مثال برمجي بسيط',
    codeOutput: 'Output: Hello, World!'
  },
  fr: {
    benefitsTitle: 'Avantages de l\'apprentissage de la programmation',
    benefits: [
      'Développer des compétences en résolution de problèmes et en pensée logique',
      'Ouvrir de nouvelles opportunités d\'emploi et des salaires élevés',
      'Capacité à développer des applications et des solutions techniques',
      'Comprendre les principes fondamentaux des systèmes informatiques et des réseaux',
      'Améliorer la capacité à travailler en équipe et à collaborer'
    ],
    exampleTitle: 'Exemple de programme simple',
    codeOutput: 'Output: Hello, World!'
  },
  en: {
    benefitsTitle: 'Benefits of Learning Programming',
    benefits: [
      'Develop problem-solving skills and logical thinking',
      'Open new job opportunities and high salaries',
      'Ability to develop applications and technical solutions',
      'Understanding of basic computer systems and networking principles',
      'Improve teamwork and collaboration skills'
    ],
    exampleTitle: 'Simple Programming Example',
    codeOutput: 'Output: Hello, World!'
  }
};

// Apps page comprehensive translations
export const appsPageComprehensive = {
  ar: {
    title: '📱 التطبيقات والبرامج',
    description: 'مجموعة من التطبيقات والبرامج المفيدة التي طورتها',
    noApps: 'لا توجد تطبيقات متاحة حالياً',
    comingSoon: 'قريباً'
  },
  fr: {
    title: '📱 Applications et Programmes',
    description: 'Collection d\'applications et de programmes utiles que j\'ai développés',
    noApps: 'Aucune application disponible pour le moment',
    comingSoon: 'Bientôt disponible'
  },
  en: {
    title: '📱 Apps & Programs',
    description: 'Collection of useful applications and programs I\'ve developed',
    noApps: 'No applications available at the moment',
    comingSoon: 'Coming soon'
  }
};

// Fun page comprehensive translations
export const servicesPageComprehensive = {
  ar: {
    title: '🛠️ خدماتنا الاحترافية',
    description: 'نقدم حلولاً برمجية متكاملة لمساعدتك على النجاح في عالمك الرقمي',
    noContent: 'لا توجد خدمات متاحة حالياً',
    exploreGames: 'استكشف خدماتنا'
  },
  fr: {
    title: '🛠️ Nos Services Professionnels',
    description: 'Nous offrons des solutions logicielles complètes pour vous aider à réussir dans votre monde numérique',
    noContent: 'Aucun service disponible pour le moment',
    exploreGames: 'Explorer nos services'
  },
  en: {
    title: '🛠️ Our Professional Services',
    description: 'We offer comprehensive software solutions to help you succeed in your digital world',
    noContent: 'No services available at the moment',
    exploreGames: 'Explore our services'
  }
};

// Disclaimer page comprehensive translations
export const disclaimerPageComprehensive = {
  ar: {
    title: 'إخلاء المسؤولية',
    description: 'توضح هذه الصفحة حدود مسؤوليتنا القانونية تجاه المحتوى والخدمات المقدمة.',
    general: 'إخلاء مسؤولية عام: المعلومات المقدمة على موقع حمزة اعمرني هي لأغراض تعليمية وإعلامية فقط. نحن نبذل قصارى جهدنا لضمان دقة المعلومات ولكن لا نضمن اكتمالها.',
    technical: 'المحتوى التقني: الأكواد والحلول البرمجية المقدمة هي أمثلة تعليمية. يجب اختبار الأكواد في بيئة آمنة قبل الاستخدام، ونحن غير مسؤولين عن أي أضرار ناتجة عن استخدامها.',
    external: 'الروابط الخارجية: قد يحتوي الموقع على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى أو سياسات الخصوصية أو توفر هذه المواقع.',
    advertising: 'الإعلانات: نستخدم شركاء إعلانات خارجيين (مثل Google AdSense). نحن غير مسؤولين عن محتوى الإعلانات أو ممارسات الخصوصية الخاصة بالمعلنين.',
    professional: 'استشارة مهنية: المحتوى لا يشكل استشارة مهنية رسمية. يُنصح دائماً باستشارة متخصص قبل اتخاذ قرارات تقنية أو مالية مهمة.',
    contentUpdate: 'تحديث المحتوى: المعلومات التقنية تتغير بسرعة، وقد تصبح بعض المقالات قديمة. نحن غير ملزمين بتحديث المحتوى بشكل فوري.',
    errors: 'الأخطاء والسهو: رغم التدقيق، قد تحدث أخطاء إملائية أو تقنية. نحن غير مسؤولين عن أي تبعات ناتجة عن هذه الأخطاء.',
    availability: 'توفر الخدمة: لا نضمن استمرار عمل الموقع دون انقطاع، ونحتفظ بالحق في إيقاف الخدمة للصيانة في أي وقت.'
  },
  fr: {
    title: 'Clause de non-responsabilité',
    description: 'Cette page définit les limites de notre responsabilité légale concernant le contenu et les services fournis.',
    general: 'Avis général : Les informations fournies sur le site de Hamza Amirni sont à des fins éducatives et informatives uniquement. Nous faisons de notre mieux pour assurer l\'exactitude mais ne garantissons pas l\'exhaustivité.',
    technical: 'Contenu technique : Les codes et solutions fournis sont des exemples éducatifs. Ils doivent être testés dans un environnement sûr avant utilisation.',
    external: 'Liens externes : Le site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables de leur contenu ou de leurs politiques de confidentialité.',
    advertising: 'Publicité : Nous utilisons des partenaires publicitaires tiers (comme Google AdSense). Nous ne sommes pas responsables du contenu des annonces.',
    professional: 'Conseil professionnel : Le contenu ne constitue pas un conseil professionnel officiel. Consultez toujours un expert pour vos décisions importantes.',
    contentUpdate: 'Mise à jour : Les informations techniques évoluent rapidement ; certains contenus peuvent devenir obsolètes.',
    errors: 'Erreurs et omissions : Malgré nos efforts, des erreurs peuvent survenir. Nous déclinons toute responsabilité pour les conséquences de ces erreurs.',
    availability: 'Disponibilité : Nous ne garantissons pas un accès ininterrompu au site et nous nous réservons le droit de suspendre le service pour maintenance.'
  },
  en: {
    title: 'Disclaimer',
    description: 'This page defines the limits of our legal responsibility regarding the content and services provided.',
    general: 'General Disclaimer: The information provided on Hamza Amirni\'s website is for educational and informational purposes only. We strive for accuracy but do not guarantee completeness.',
    technical: 'Technical Content: Code and solutions provided are educational examples. They should be tested in a safe environment before use.',
    external: 'External Links: The site may contain links to third-party websites. We are not responsible for their content or privacy policies.',
    advertising: 'Advertising: We use third-party advertising partners (like Google AdSense). We are not responsible for the content of ads or the advertisers\' privacy practices.',
    professional: 'Professional Advice: Content does not constitute official professional advice. Always consult an expert for important technical or financial decisions.',
    contentUpdate: 'Content Updates: Technical information changes rapidly; some content may become outdated.',
    errors: 'Errors and Omissions: Despite auditing, errors may occur. We are not responsible for any consequences resulting from these errors.',
    availability: 'Service Availability: We do not guarantee uninterrupted access to the site and reserve the right to suspend service for maintenance at any time.'
  }
};

// Privacy page comprehensive translations
export const privacyPageComprehensive = {
  ar: {
    title: 'سياسة الخصوصية',
    description: 'نحن نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية وفقاً لأعلى المعايير.',
    intro: 'تشرح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند زيارتك لموقع حمزة اعمرني.',
    dataCollection: 'جمع البيانات: نحن نجمع فقط البيانات التي تقدمها لنا طواعية، مثل اسمك وبريدك الإلكتروني عند استخدام نموذج الاتصال.',
    dataUsage: 'استخدام البيانات: نستخدم بياناتك للرد على استفساراتك، وتحسين تجربة المستخدم، وتخصيص المحتوى والإعلانات.',
    cookies: 'ملفات تعريف الارتباط (Cookies): نستخدم ملفات تعريف الارتباط لتحسين تجربتك وجمع إحصاءات حول زوار الموقع.',
    googleAdSense: 'جوجل أدسنس (Google AdSense): يستخدم هذا الموقع جوجل أدسنس لعرض الإعلانات. تستخدم جوجل ملفات تعريف الارتباط (مثل ملف تعريف الارتباط DART) لعرض الإعلانات بناءً على زياراتك لموقعنا والمواقع الأخرى على الإنترنت.',
    optOut: 'إلغاء الاشتراك: يمكن للمستخدمين اختيار عدم استخدام ملف تعريف الارتباط DART عبر زيارة سياسة الخصوصية الخاصة بإعلانات جوجل وشبكة المحتوى.',
    thirdParty: 'أطراف ثالثة: قد يستخدم مزودو الإعلانات الخارجيون تقنيات مثل ملفات تعريف الارتباط لجمع معلومات حول نشاطك الإعلاني.',
    dataSecurity: 'أمان البيانات: نستخدم معايير أمان تقنية وإدارية لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفصاح.',
    userRights: 'حقوق المستخدم: لك الحق في الوصول إلى بياناتك الشخصية التي نحتفظ بها، أو طلب تصحيحها، أو حذفها في أي وقت.',
    contact: 'لأي استفسار بخصوص سياسة الخصوصية، يرجى التواصل معنا عبر صفحة الاتصال.'
  },
  fr: {
    title: 'Politique de Confidentialité',
    description: 'Nous accordons une grande importance à votre vie privée et nous nous engageons à protéger vos données personnelles.',
    intro: 'Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous visitez le site de Hamza Amirni.',
    dataCollection: 'Collecte de données : Nous collectons uniquement les données que vous nous fournissez volontairement, telles que votre nom et votre adresse e-mail lors de l\'utilisation du formulaire de contact.',
    dataUsage: 'Utilisation des données : Nous utilisons vos données pour répondre à vos demandes, améliorer l\'expérience utilisateur et personnaliser le contenu et les publicités.',
    cookies: 'Cookies : Nous utilisons des cookies pour améliorer votre expérience et recueillir des statistiques sur les visiteurs du site.',
    googleAdSense: 'Google AdSense : Ce site utilise Google AdSense pour diffuser des annonces. Google utilise des cookies (comme le cookie DART) pour diffuser des annonces basées sur vos visites sur notre site et d\'autres sites sur Internet.',
    optOut: 'Désactivation : Les utilisateurs peuvent choisir de ne pas utiliser le cookie DART en visitant la politique de confidentialité de Google Ads.',
    thirdParty: 'Tiers : Les fournisseurs de publicité tiers peuvent utiliser des technologies telles que les cookies pour collecter des informations sur votre activité publicitaire.',
    dataSecurity: 'Sécurité des données : Nous utilisons des normes de sécurité techniques et administratives pour protéger vos données contre tout accès non autorisé.',
    userRights: 'Droits de l\'utilisateur : Vous avez le droit d\'accéder à vos données personnelles, de demander leur correction ou leur suppression à tout moment.',
    contact: 'Pour toute question concernant la politique de confidentialité, veuillez nous contacter via la page de contact.'
  },
  en: {
    title: 'Privacy Policy',
    description: 'We value your privacy and are committed to protecting your personal data according to the highest standards.',
    intro: 'This policy explains how we collect, use, and protect your personal information when you visit Hamza Amirni\'s website.',
    dataCollection: 'Data Collection: We only collect data that you voluntarily provide to us, such as your name and email when using the contact form.',
    dataUsage: 'Data Usage: We use your data to respond to your inquiries, improve user experience, and personalize content and advertisements.',
    cookies: 'Cookies: We use cookies to enhance your experience and gather statistics about site visitors.',
    googleAdSense: 'Google AdSense: This site uses Google AdSense to display advertisements. Google uses cookies (such as the DART cookie) to serve ads based on your visits to our site and other sites on the Internet.',
    optOut: 'Opt-out: Users may choose to opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.',
    thirdParty: 'Third Parties: Third-party ad providers may use technologies like cookies to collect information about your advertising activity.',
    dataSecurity: 'Data Security: We use technical and administrative security standards to protect your data from unauthorized access, alteration, or disclosure.',
    userRights: 'User Rights: You have the right to access your personal data, request its correction, or deletion at any time.',
    contact: 'For any inquiries regarding the privacy policy, please contact us through the contact page.'
  }
};

// Terms page comprehensive translations
export const termsPageComprehensive = {
  ar: {
    title: 'شروط الاستخدام',
    description: 'تحدد هذه الشروط القواعد واللوائح الخاصة باستخدام موقع حمزة اعمرني.',
    acceptance: 'قبول الشروط: باستخدامك لهذا الموقع، فإنك تقبل هذه الشروط والأحكام بالكامل. إذا كنت لا توافق، يرجى عدم استخدام الموقع.',
    restrictions: 'القيود: يُحظر عليك إعادة نشر مواد من هذا الموقع، أو بيعها، أو تأجيرها، أو استنساخها لأغراض تجارية دون إذن.',
    intellectual: 'الملكية الفكرية: جميع المحتويات والعلامات التجارية الموجودة على الموقع هي ملك لحمزة اعمرني ومحمية بحقوق الطبع والنشر.',
    userContent: 'محتوى المستخدم: عند تقديم أي محتوى، فإنك تمنحنا ترخيصاً عالمياً غير حصري لاستخدامه وتوزيعه للأغراض التعليمية.',
    liabilities: 'إخلاء المسؤولية: لا نضمن دقة المعلومات المقدمة، ولا نتحمل المسؤولية عن أي خسائر ناتجة عن استخدام الموقع.',
    updates: 'التحديثات: نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وتصبح التعديلات فعالة فور نشرها.',
    termination: 'إنهاء الخدمة: نحتفظ بالحق في إنهاء وصولك إلى الموقع في حال انتهاك أي من هذه الشروط.',
    governingLaw: 'القانون المطبق: تخضع هذه الشروط لقوانين الدولة المعمول بها، وأي نزاع يحل أمام المحاكم المختصة.'
  },
  fr: {
    title: 'Conditions d\'Utilisation',
    description: 'Ces conditions définissent les règles et réglementations pour l\'utilisation du site de Hamza Amirni.',
    acceptance: 'Acceptation des conditions : En utilisant ce site, vous acceptez pleinement ces conditions. Si vous n\'êtes pas d\'accord, veuillez ne pas utiliser le site.',
    restrictions: 'Restrictions : Il est interdit de republier, vendre, louer ou reproduire le contenu de ce site à des fins commerciales sans autorisation.',
    intellectual: 'Propriété intellectuelle : Tous les contenus et marques sur le site sont la propriété de Hamza Amirni et sont protégés par le droit d\'auteur.',
    userContent: 'Contenu utilisateur : En soumettant du contenu, vous nous accordez une licence mondiale pour l\'utiliser à des fins éducatives.',
    liabilities: 'Avertissement : Nous ne garantissons pas l\'exactitude des informations et ne sommes pas responsables des pertes résultant de l\'utilisation du site.',
    updates: 'Mises à jour : Nous nous réservons le droit de modifier ces conditions à tout moment.',
    termination: 'Résiliation : Nous nous réservons le droit de mettre fin à votre accès au site en cas de violation des conditions.',
    governingLaw: 'Loi applicable : Ces conditions sont régies par les lois en vigueur.'
  },
  en: {
    title: 'Terms of Use',
    description: 'These terms set out the rules and regulations for using Hamza Amirni\'s website.',
    acceptance: 'Acceptance of Terms: By using this website, you accept these terms and conditions in full. If you disagree, please do not use the website.',
    restrictions: 'Restrictions: You are prohibited from republishing, selling, renting, or reproducing content from this site for commercial purposes without permission.',
    intellectual: 'Intellectual Property: All content and trademarks on the site are the property of Hamza Amirni and are protected by copyright.',
    userContent: 'User Content: By submitting any content, you grant us a worldwide license to use and distribute it for educational purposes.',
    liabilities: 'Disclaimer: We do not guarantee the accuracy of the information provided and are not liable for any losses resulting from using the site.',
    updates: 'Updates: We reserve the right to modify these terms at any time.',
    termination: 'Termination: We reserve the right to terminate your access to the site in case of a violation of these terms.',
    governingLaw: 'Governing Law: These terms are governed by the applicable laws.'
  }
};

// For backward compatibility
export const getNavLabel = (language: Language, id: string): string => {
  return t(`navLabels.${id}`, language);
};
