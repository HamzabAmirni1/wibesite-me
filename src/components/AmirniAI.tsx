import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Send,
  X,
  RotateCcw,
  Bot,
  ExternalLink,
  FolderOpen,
  Smartphone,
  Briefcase,
  Mail,
  User,
  Code,
  Wrench,
  BookOpen,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import { askAmirniAI, ActionButton, ChatMessage } from '../services/aiService';
import { useNavigation } from '../contexts/NavigationContext';
import { useLanguage } from '../contexts/LanguageContext';

const UI_CONFIG = {
  ar: {
    title: 'Amirni AI',
    subtitle: 'المساعد الذكي لموقع حمزة اعمرني',
    welcome:
      'سلام عليكم! 👋 أنا **Amirni AI** المساعد الذكي لموقع حمزة اعمرني.\n\nسولني على أي حاجة فالسيت: المشاريع (بحال **Fatifloral**)، التطبيقات، الخدمات، دروس البرمجة، أو طرق التواصل وغادي نوجهك مباشرة!',
    welcomeActions: [
      { label: '🌸 متجر Fatifloral', url: 'https://fatifloral.netlify.app/#catalogue', icon: 'ExternalLink' },
      { label: '🚀 تصفح المشاريع', section: 'projects', icon: 'FolderOpen' },
      { label: '📬 تواصل مع حمزة', section: 'contact', icon: 'Mail' }
    ],
    placeholder: 'سولني على أي حاجة فالسيت...',
    thinking: 'جاري التفكير...',
    directAccess: 'أزرار الوصول المباشر السريع:',
    badge: 'سول Amirni AI ✨',
    resetNotice: 'تم مسح المحادثة. تقدر تسولني دابا على أي حاجة فالسيت! ✨',
    prompts: [
      { label: '🌸 متجر Fatifloral', prompt: 'شرح ليا على مشروع Fatifloral' },
      { label: '🚀 المشاريع الحية', prompt: 'شنو هما أهم المشاريع لي صاوب حمزة؟' },
      { label: '💼 الخدمات المتاحة', prompt: 'شنو هما الخدمات لي كيقدم حمزة اعمرني؟' },
      { label: '📱 تطبيقات الهواتف', prompt: 'شنو هما التطبيقات لي كاينين فالسيت؟' },
      { label: '📬 التواصل مع حمزة', prompt: 'كيفاش نقدر نتواصل مع حمزة مباشرة؟' }
    ]
  },
  en: {
    title: 'Amirni AI',
    subtitle: 'Official AI Assistant for Hamza Amirni',
    welcome:
      'Hello! 👋 I am **Amirni AI**, Hamza Amirni\'s official AI assistant.\n\nAsk me anything about projects (like **Fatifloral**), mobile apps, services, coding tutorials, or contact details, and I will guide you directly!',
    welcomeActions: [
      { label: '🌸 Fatifloral Store', url: 'https://fatifloral.netlify.app/#catalogue', icon: 'ExternalLink' },
      { label: '🚀 Browse Projects', section: 'projects', icon: 'FolderOpen' },
      { label: '📬 Contact Hamza', section: 'contact', icon: 'Mail' }
    ],
    placeholder: 'Ask anything about the site...',
    thinking: 'Thinking...',
    directAccess: 'Direct Access & Navigation:',
    badge: 'Ask Amirni AI ✨',
    resetNotice: 'Conversation cleared. Feel free to ask anything about the site! ✨',
    prompts: [
      { label: '🌸 Fatifloral Store', prompt: 'Tell me about the Fatifloral project' },
      { label: '🚀 Live Projects', prompt: 'What are the main projects developed by Hamza?' },
      { label: '💼 Available Services', prompt: 'What services does Hamza Amirni provide?' },
      { label: '📱 Mobile Apps', prompt: 'What mobile apps are available on the website?' },
      { label: '📬 Contact Hamza', prompt: 'How can I get in touch with Hamza?' }
    ]
  },
  fr: {
    title: 'Amirni AI',
    subtitle: 'Assistant IA officiel de Hamza Amirni',
    welcome:
      'Bonjour ! 👋 Je suis **Amirni AI**, l\'assistant intelligent officiel du site de Hamza Amirni.\n\nPosez-moi des questions sur les projets (comme **Fatifloral**), les applications, les services ou le contact, et je vous guiderai directement !',
    welcomeActions: [
      { label: '🌸 Boutique Fatifloral', url: 'https://fatifloral.netlify.app/#catalogue', icon: 'ExternalLink' },
      { label: '🚀 Voir les Projets', section: 'projects', icon: 'FolderOpen' },
      { label: '📬 Contacter Hamza', section: 'contact', icon: 'Mail' }
    ],
    placeholder: 'Posez une question sur le site...',
    thinking: 'Réflexion en cours...',
    directAccess: 'Accès Direct & Navigation :',
    badge: 'Demander à Amirni AI ✨',
    resetNotice: 'Conversation réinitialisée. N\'hésitez pas à poser vos questions ! ✨',
    prompts: [
      { label: '🌸 Boutique Fatifloral', prompt: 'Présente-moi le projet Fatifloral' },
      { label: '🚀 Projets Récents', prompt: 'Quels sont les principaux projets créés par Hamza ?' },
      { label: '💼 Services Proposés', prompt: 'Quels services informatiques propose Hamza ?' },
      { label: '📱 Applications Mobiles', prompt: 'Quelles applications mobiles sont disponibles ?' },
      { label: '📬 Contacter Hamza', prompt: 'Comment puis-je contacter Hamza directement ?' }
    ]
  }
};

// Accurately determine if text is primarily Arabic (count Arabic vs Latin letters)
const isMainlyArabic = (txt: string): boolean => {
  if (!txt) return false;
  // Clean markdown links, URLs, and tags before counting
  const clean = txt
    .replace(/\[BTN:[^\]]+\]/g, '')
    .replace(/https?:\/\/[^\s)]+/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const arabicCount = (clean.match(/[\u0600-\u06FF]/g) || []).length;
  const latinCount = (clean.match(/[a-zA-Z]/g) || []).length;
  return arabicCount > latinCount;
};

export const AmirniAI: React.FC = () => {
  const { setActiveSection } = useNavigation();
  const { language } = useLanguage();

  const currentUI = UI_CONFIG[language as keyof typeof UI_CONFIG] || UI_CONFIG.en;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      role: 'assistant',
      content: currentUI.welcome,
      actions: currentUI.welcomeActions,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update welcome message if language changes and only welcome exists
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            role: 'assistant',
            content: currentUI.welcome,
            actions: currentUI.welcomeActions,
            timestamp: new Date()
          }
        ];
      }
      return prev;
    });
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      const t1 = setTimeout(scrollToBottom, 100);
      const t2 = setTimeout(scrollToBottom, 350);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isOpen, messages, isLoading]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-amirni-ai', handleOpen);
    return () => window.removeEventListener('open-amirni-ai', handleOpen);
  }, []);

  const handleActionClick = (action: ActionButton) => {
    if (action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    } else if (action.section) {
      setActiveSection(action.section);
      window.location.hash = `#${action.section}`;
      // On small screens, close the chat so the user sees the page
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    }
  };

  const getActionIcon = (iconName?: string) => {
    switch (iconName) {
      case 'ExternalLink':
        return <ExternalLink className="w-3.5 h-3.5" />;
      case 'FolderOpen':
        return <FolderOpen className="w-3.5 h-3.5" />;
      case 'Smartphone':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'Briefcase':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'Mail':
        return <Mail className="w-3.5 h-3.5" />;
      case 'User':
        return <User className="w-3.5 h-3.5" />;
      case 'Code':
        return <Code className="w-3.5 h-3.5" />;
      case 'Wrench':
        return <Wrench className="w-3.5 h-3.5" />;
      case 'BookOpen':
        return <BookOpen className="w-3.5 h-3.5" />;
      case 'MessageCircle':
        return <MessageCircle className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const handleSend = async (userPrompt?: string) => {
    const textToSend = (userPrompt || input).trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const history = newMessages
        .filter(m => m.id !== 'welcome')
        .map(m => ({ role: m.role, content: m.content }));

      const { text, actions } = await askAmirniAI(textToSend, history);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: text,
        actions,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            language === 'ar'
              ? 'وقع مشكل بسيط فالاتصال. تقدر تصفح أقسام الموقع عبر الأزرار أسفله:'
              : 'Connection issue. You can navigate the site using the buttons below:',
          actions: [
            { label: '🚀 المشاريع (Projects)', section: 'projects', icon: 'FolderOpen' },
            { label: '📬 تواصل مع حمزة (Contact)', section: 'contact', icon: 'Mail' }
          ],
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        role: 'assistant',
        content: currentUI.resetNotice,
        actions: currentUI.welcomeActions,
        timestamp: new Date()
      }
    ]);
  };

  // Rich Markdown parser: turns links [Title](URL) into buttons, formats lists and bold text
  const renderFormattedText = (rawTxt: string, isArabic: boolean) => {
    // 1. Remove [BTN:...] tags from prose since they render in the action bar
    let clean = rawTxt.replace(/\[BTN:(url|section):[^\]]+\]/g, '');

    // 2. Fix broken or multiline link syntax like :[Name]\n(url) or ([Name](url))
    clean = clean
      .replace(/\(\s*\[([^\]]+)\]\s*\(([^)]+)\)\s*\)/g, ' [$1]($2) ')
      .replace(/:\s*\[([^\]]+)\]\s*\n?\s*\(([^)]+)\)/g, ' [$1]($2) ')
      .replace(/\[([^\]]+)\]\s*\n\s*\(([^)]+)\)/g, ' [$1]($2) ');

    const lines = clean.split('\n');

    return lines.map((line, idx) => {
      let trimmed = line.trim();
      const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ');
      if (isBullet) {
        trimmed = trimmed.replace(/^[*•-]\s+/, '');
      }

      // Tokenize by markdown link [text](url) or bold **text**
      const tokenRegex = /(\[[^\]]+\]\([^\s)]+\)|\*\*[^*]+\*\*)/g;
      const parts = trimmed.split(tokenRegex);

      const renderedParts = parts.map((part, pIdx) => {
        // Markdown link [Label](url)
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/);
        if (linkMatch) {
          const label = linkMatch[1].replace(/[:*]/g, '').trim();
          const url = linkMatch[2].trim();
          const isFatifloral = url.toLowerCase().includes('fatifloral');
          const isInternal = url.startsWith('#') || (!url.startsWith('http') && !url.includes('.'));
          const targetSection = url.replace('#', '');

          const buttonLabel = isFatifloral
            ? (isArabic ? '🌸 زيارة متجر Fatifloral' : '🌸 Visit Fatifloral Store')
            : label;

          return (
            <button
              key={pIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (isInternal) {
                  setActiveSection(targetSection);
                  window.location.hash = `#${targetSection}`;
                } else {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 my-1 mx-1 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer bg-gradient-to-r from-primary to-indigo-600 text-white hover:opacity-90 active:scale-95"
            >
              {isFatifloral ? '🌸' : isInternal ? <FolderOpen className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
              <span>{buttonLabel}</span>
            </button>
          );
        }

        // Bold **text**
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-primary dark:text-blue-400">
              {part.slice(2, -2)}
            </strong>
          );
        }

        return part;
      });

      if (isBullet) {
        return (
          <li key={idx} className={`${isArabic ? 'mr-2' : 'ml-2'} list-none flex items-start gap-2 my-1.5 leading-relaxed`}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-400 mt-2 flex-shrink-0" />
            <div className="flex-1">{renderedParts}</div>
          </li>
        );
      }

      if (trimmed === '') {
        return <div key={idx} className="h-1.5" />;
      }

      return (
        <p key={idx} className="my-1.5 leading-relaxed">
          {renderedParts}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-24 lg:bottom-6 right-6 z-50 flex items-center gap-3">
        {hasUnread && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden sm:flex items-center gap-2 bg-white/95 dark:bg-slate-800/95 text-slate-800 dark:text-white px-4 py-2 rounded-2xl shadow-xl border border-primary/20 backdrop-blur-md cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {currentUI.badge}
            </span>
          </motion.div>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Amirni AI Assistant"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl cursor-pointer text-white overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 border-2 border-white/30 group"
        >
          <span className="absolute inset-0 rounded-full bg-pink-500/30 animate-ping group-hover:block" />
          {isOpen ? (
            <ChevronDown className="w-6 h-6 z-10 transition-transform duration-300" />
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <Bot className="w-7 h-7" />
              <Sparkles className="w-3.5 h-3.5 absolute -top-1 -right-1 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
          )}
        </motion.button>
      </div>

      {/* Chat Window Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed bottom-24 lg:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[82vh] h-[640px] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-700/60 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-primary via-indigo-600 to-secondary text-white flex items-center justify-between shadow-md relative overflow-hidden flex-shrink-0">
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative w-10 h-10 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shadow-inner">
                  <Bot className="w-6 h-6 text-white" />
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-primary rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-base tracking-wide">{currentUI.title}</h3>
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </div>
                  <p className="text-[11px] text-white/80">
                    {currentUI.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 relative z-10">
                <button
                  onClick={handleReset}
                  title="Reset"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-sm">
              {messages.map((msg) => {
                const isArabic = isMainlyArabic(msg.content);
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      dir={isArabic ? 'rtl' : 'ltr'}
                      className={`max-w-[88%] rounded-2xl p-4 shadow-sm ${isArabic ? 'text-right' : 'text-left'} ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-primary to-indigo-600 text-white rounded-br-none'
                          : 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-gray-100 border border-slate-200/80 dark:border-slate-700/60 rounded-bl-none'
                      }`}
                    >
                      <div className="text-[13.5px] leading-relaxed">
                        {renderFormattedText(msg.content, isArabic)}
                      </div>

                      {/* Direct Navigation Action Buttons (ACC) */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-slate-700/70">
                          <div className="text-[11px] font-bold text-primary dark:text-blue-400 mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-spin" style={{ animationDuration: '8s' }} />
                            <span>{currentUI.directAccess}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {msg.actions.map((act, aIdx) => (
                              <motion.button
                                key={aIdx}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleActionClick(act)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-md transition-all duration-200 cursor-pointer bg-gradient-to-r from-primary via-indigo-600 to-secondary text-white hover:shadow-lg active:scale-95"
                              >
                                {getActionIcon(act.icon)}
                                <span>{act.label}</span>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 px-1">
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs px-2 py-1">
                  <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary animate-pulse" />
                  </div>
                  <div className="flex gap-1 items-center bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-2xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-[11px] mr-2 text-primary font-medium">{currentUI.thinking}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar (Scrollbar completely hidden) */}
            <div
              className="px-4 py-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/50 flex gap-1.5 overflow-x-auto flex-shrink-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {currentUI.prompts.map((qp, i) => (
                <button
                  key={i}
                  disabled={isLoading}
                  onClick={() => handleSend(qp.prompt)}
                  className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-primary/50 hover:text-primary dark:hover:text-blue-400 transition-colors shadow-2xs cursor-pointer"
                >
                  {qp.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2 flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={currentUI.placeholder}
                disabled={isLoading}
                dir={isMainlyArabic(input) ? 'rtl' : 'ltr'}
                className="flex-1 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-white placeholder-slate-400 text-sm border border-transparent focus:border-primary/40 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-r from-primary to-indigo-600 text-white shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-opacity cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AmirniAI;
