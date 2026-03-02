import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Newspaper, Bot, Wrench, Code, ArrowRight } from 'lucide-react';
import { articlesData } from '../data/articles';
import {
    socialLinks,
    myApps,
    botsContent,
    toolsContent,
    funContent,
    whatsappChannels,
    navLinks
} from '../constants';
import { t } from '../i18n';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    setActiveSection: (section: string) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, setActiveSection }) => {
    const [query, setQuery] = useState('');
    const { language } = useLanguage();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return [];

        const queryWords = q.split(/\s+/).filter(Boolean);

        const isMatch = (text?: string) => {
            if (!text) return false;
            const t = text.toLowerCase();
            // Support partial substring matching anywhere directly
            if (t.includes(q)) return true;
            // Also support matching the exact start of words (e.g., 'a' matches 'apple', 'chat' matches 'chatgpt')
            const textWords = t.split(/\s+/);
            return queryWords.length > 0 && queryWords.every(qw =>
                textWords.some(tw => tw.startsWith(qw))
            );
        };

        const allResults: any[] = [];

        // 1. Search in Articles
        const translatedArticles = t('articlesPageFull.data', language) as any[];
        const finalArticles = Array.isArray(translatedArticles) ? translatedArticles : articlesData;

        finalArticles.forEach(article => {
            if (isMatch(article.title) || isMatch(article.excerpt || article.summary) || isMatch(article.category) || (article.tags && article.tags.some((tag: string) => isMatch(tag)))) {
                allResults.push({
                    id: article.id,
                    title: article.title,
                    type: 'article',
                    category: article.category,
                    section: 'gaza',
                    icon: Newspaper
                });
            }
        });

        // 2. Search in Apps
        const catApp = t('searchModal.categories.app', language) || 'تطبيق';
        myApps.forEach(app => {
            if (isMatch(app.title) || isMatch(app.description)) {
                allResults.push({
                    id: 'apps',
                    title: app.title,
                    type: 'app',
                    category: catApp,
                    section: 'apps',
                    icon: app.IconComponent,
                    external: app.url
                });
            }
        });

        // 3. Search in Bots
        const catBot = t('searchModal.categories.bot', language) || 'بوت ذكي';
        const translatedBotsItems = t('botsPageFull.items', language) as any;
        botsContent.bots.forEach((bot, index) => {
            const bKey = `b${index + 1}`;
            const tBot = translatedBotsItems?.[bKey];
            const title = tBot?.name || bot.title;
            const desc = tBot?.desc || bot.description;

            if (isMatch(title) || isMatch(desc)) {
                allResults.push({
                    id: 'bots',
                    title: title,
                    type: 'bot',
                    category: catBot,
                    section: 'bots',
                    icon: bot.IconComponent,
                    external: bot.url
                });
            }
        });

        // 4. Search in Tools
        const catTool = t('searchModal.categories.tool', language) || 'أداة مفيدة';
        const toolKeys = ['doc', 'chatgpt', 'coursera', 'canva', 'github', 'stackoverflow'];
        const translatedToolsItems = t('toolsPageComprehensive.items', language) as any;
        toolsContent.tools.forEach((tool, index) => {
            const tKey = toolKeys[index] || toolKeys[0];
            const tTool = translatedToolsItems?.[tKey];
            const title = tTool?.title || tool.title;
            const desc = tTool?.description || tool.description;

            if (isMatch(title) || isMatch(desc)) {
                allResults.push({
                    id: 'tools',
                    title: title,
                    type: 'tool',
                    category: catTool,
                    section: 'tools',
                    icon: tool.IconComponent,
                    external: tool.url
                });
            }
        });

        // 5. Search in Games (Services)
        const catGame = t('searchModal.categories.game', language) || 'خدمة / لعبة';
        funContent.games.forEach(game => {
            if (isMatch(game.title)) {
                allResults.push({
                    id: 'fun',
                    title: game.title,
                    type: 'game',
                    category: catGame,
                    section: 'services',
                    icon: game.IconComponent,
                    external: game.url
                });
            }
        });

        // 6. Search in Navigation/Sections
        const catSection = t('searchModal.categories.section', language) || 'قسم في الموقع';
        navLinks.forEach(nav => {
            const translatedTitle = t(`navLabels.${nav.id}`, language) || nav.title;
            if (isMatch(translatedTitle)) {
                allResults.push({
                    id: nav.id,
                    title: translatedTitle,
                    type: 'section',
                    category: catSection,
                    section: nav.id,
                    icon: nav.icon
                });
            }
        });

        // 7. Search in WhatsApp Channels
        const catChannel = t('searchModal.categories.channel', language) || 'قناة تواصل';
        whatsappChannels.forEach(channel => {
            if (isMatch(channel.name)) {
                allResults.push({
                    id: 'channels',
                    title: channel.name,
                    type: 'channel',
                    category: catChannel,
                    section: 'home',
                    icon: channel.IconComponent,
                    external: channel.url
                });
            }
        });

        // 8. Search in Social Links
        const catSocial = t('searchModal.categories.social', language) || 'رابط تواصل';
        socialLinks.forEach(link => {
            if (isMatch(link.name)) {
                allResults.push({
                    id: 'social',
                    title: link.name,
                    type: 'social',
                    category: catSocial,
                    section: 'home',
                    icon: link.IconComponent,
                    external: link.url
                });
            }
        });

        return allResults;
    }, [query, language]);

    const handleSelect = (result: any) => {
        if (result.external) {
            window.open(result.external, '_blank');
        } else {
            setActiveSection(result.section);
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: -20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: -20 }}
                        className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative z-10"
                    >
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                autoFocus
                                type="text"
                                placeholder={t('searchModal.placeholder', language) || (t('commonTexts.search', language) + '...')}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 bg-transparent border-none focus:ring-0 text-lg text-gray-800 dark:text-gray-100 placeholder-gray-400 rtl:text-right ltr:text-left"
                                dir={language === 'ar' ? 'rtl' : 'ltr'}
                            />
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                            {!query.trim() ? (
                                <div className="py-12 text-center text-gray-500">
                                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>{t('searchModal.placeholder', language)}</p>
                                </div>
                            ) : results.length > 0 ? (
                                <div className="space-y-2">
                                    {results.slice(0, 8).map((result: any, index) => (
                                        <motion.button
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => handleSelect(result)}
                                            className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all group rtl:text-right ltr:text-left"
                                            dir={language === 'ar' ? 'rtl' : 'ltr'}
                                        >
                                            <div className={cn(
                                                "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                                result.type === 'article' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                                            )}>
                                                {result.type === 'article' ? <Newspaper className="w-5 h-5" /> : (result.icon ? <result.icon className="w-5 h-5" /> : <Search className="w-5 h-5" />)}
                                            </div>
                                            <div className="flex-1 rtl:text-right ltr:text-left">
                                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                                                    {result.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 line-clamp-1">
                                                    {t(`searchModal.categories.${result.type}`, language) || result.category}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transform rotate-180" />
                                        </motion.button>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 text-center text-gray-500">
                                    <p>{t('searchModal.noResults', language) || t('commonTexts.noResults', language)}</p>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-xs text-gray-400">
                            <div className="flex gap-4">
                                <span><kbd className="px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 uppercase">ESC</kbd> {t('searchModal.escToClose', language)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>{t('searchModal.smartSearchBy', language)}</span>
                                <span className="font-bold text-primary">حمزة اعمرني</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SearchModal;
