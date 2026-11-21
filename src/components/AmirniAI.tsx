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

const QUICK_PROMPTS = [
  { label: '🌸 متجر Fatifloral', prompt: 'شرح ليا على مشروع Fatifloral' },
  { label: '🚀 المشاريع الحية', prompt: 'شنو هما أهم المشاريع لي صاوب حمزة؟' },
  { label: '💼 الخدمات المتاحة', prompt: 'شنو هما الخدمات لي كيقدم حمزة اعمرني؟' },
  { label: '📱 تطبيقات الهواتف', prompt: 'شنو هما التطبيقات لي كاينين فالسيت؟' },
  { label: '📬 التواصل مع حمزة', prompt: 'كيفاش نقدر نتواصل مع حمزة مباشرة؟' },
];

export const AmirniAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'welcome',
        role: 'assistant',
        content:
          'سلام عليكم! 👋 أنا **Amirni AI** المساعد الذكي لموقع حمزة اعمرني.\n\nسولني على أي حاجة فالسيت: المشاريع (بحال **Fatifloral**)، التطبيقات، الخدمات، دروس البرمجة، أو طرق التواصل وغادي نوجهك مباشرة!',
        actions: [
          { label: '🌸 مشروع Fatifloral', url: 'https://fatifloral.netlify.app/#catalogue', icon: 'ExternalLink' },
          { label: '🚀 تصفح المشاريع', section: 'projects', icon: 'FolderOpen' },
          { label: '📬 تواصل مع حمزة', section: 'contact', icon: 'Mail' }
        ],
        timestamp: new Date()
      }
    ];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const { setActiveSection } = useNavigation();
  const { language } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, messages]);

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
      // On mobile, keep it smooth
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
          content: 'سمح ليا، وقع مشكل فالاتصال. تقدر تعاود تطرح السؤال ديالك أو تصفح أقسام الموقع مباشرة عبر الأزرار أسفله.',
          actions: [
            { label: '🚀 المشاريع', section: 'projects', icon: 'FolderOpen' },
            { label: '📬 تواصل مع حمزة', section: 'contact', icon: 'Mail' }
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
        content:
          'تم مسح المحادثة. تقدر تسولني دابا على أي حاجة فالسيت أو تختار وحدة من الاقتراحات السريعة! ✨',
        actions: [
          { label: '🌸 مشروع Fatifloral', url: 'https://fatifloral.netlify.app/#catalogue', icon: 'ExternalLink' },
          { label: '🚀 تصفح المشاريع', section: 'projects', icon: 'FolderOpen' }
        ],
        timestamp: new Date()
      }
    ]);
  };

  // Simple Markdown renderer for bold, lists, and newlines
  const renderFormattedText = (txt: string) => {
    const lines = txt.split('\n');
    return lines.map((line, idx) => {
      // Bold handling: **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-primary dark:text-blue-400">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        return (
          <li key={idx} className="ml-4 list-disc my-1">
            {renderedLine}
          </li>
        );
      }

      return (
        <p key={idx} className={line.trim() === '' ? 'h-2' : 'my-1 leading-relaxed'}>
          {renderedLine}
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
              {language === 'ar' ? 'سول Amirni AI ✨' : language === 'fr' ? 'Demander à Amirni AI ✨' : 'Ask Amirni AI ✨'}
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
          {/* Pulsing ring */}
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
                    <h3 className="font-bold text-base tracking-wide">Amirni AI</h3>
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </div>
                  <p className="text-[11px] text-white/80">
                    {language === 'ar'
                      ? 'المساعد الذكي لموقع حمزة اعمرني'
                      : language === 'fr'
                      ? 'Assistant IA officiel'
                      : 'Official AI Assistant'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 relative z-10">
                <button
                  onClick={handleReset}
                  title="مسح المحادثة"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="إغلاق"
                  className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-primary to-indigo-600 text-white rounded-br-none'
                        : 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-gray-100 border border-slate-200/80 dark:border-slate-700/60 rounded-bl-none'
                    }`}
                  >
                    <div className="text-[13.5px] leading-relaxed">
                      {renderFormattedText(msg.content)}
                    </div>
                  </div>

                  {/* Direct Navigation Action Buttons (ACC) */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-[90%]">
                      {msg.actions.map((act, aIdx) => (
                        <motion.button
                          key={aIdx}
                          whileHover={{ scale: 1.04, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleActionClick(act)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition-all duration-200 border bg-gradient-to-r from-primary/10 via-secondary/10 to-indigo-500/10 text-primary dark:text-indigo-400 border-primary/20 dark:border-indigo-500/30 hover:border-primary/50 hover:shadow-md cursor-pointer"
                        >
                          {getActionIcon(act.icon)}
                          <span>{act.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 px-1">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}

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
                    <span className="text-[11px] mr-2 text-primary font-medium">جاري التفكير...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/50 flex gap-1.5 overflow-x-auto no-scrollbar flex-shrink-0">
              {QUICK_PROMPTS.map((qp, i) => (
                <button
                  key={i}
                  disabled={isLoading}
                  onClick={() => handleSend(qp.prompt)}
                  className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-primary/50 hover:text-primary dark:hover:text-blue-400 transition-colors shadow-2xs"
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
                placeholder={
                  language === 'ar'
                    ? 'سولني على أي حاجة فالسيت...'
                    : language === 'fr'
                    ? 'Posez une question sur le site...'
                    : 'Ask anything about the site...'
                }
                disabled={isLoading}
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
