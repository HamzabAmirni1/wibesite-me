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

        const allResults: any[] = [];

        // 1. Search in Articles
        articlesData.forEach(article => {
            if (article.title.toLowerCase().includes(q) || article.excerpt.toLowerCase().includes(q)) {
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
        myApps.forEach(app => {
            if (app.title.toLowerCase().includes(q) || app.description.toLowerCase().includes(q)) {
                allResults.push({
                    id: 'apps',
                    title: app.title,
                    type: 'app',
                    category: 'تطبيق',
                    section: 'apps',
                    icon: app.IconComponent,
                    external: app.url
                });
            }
        });

        // 3. Search in Bots
        botsContent.bots.forEach(bot => {
            if (bot.title.toLowerCase().includes(q) || bot.description.toLowerCase().includes(q)) {
                allResults.push({
                    id: 'bots',
                    title: bot.title,
                    type: 'bot',
                    category: 'بوت ذكي',
                    section: 'bots',
                    icon: bot.IconComponent,
                    external: bot.url
                });
            }
        });

        // 4. Search in Tools
        toolsContent.tools.forEach(tool => {
            if (tool.title.toLowerCase().includes(q) || tool.description.toLowerCase().includes(q)) {
                allResults.push({
                    id: 'tools',
                    title: tool.title,
                    type: 'tool',
                    category: 'أداة مفيدة',
                    section: 'tools',
                    icon: tool.IconComponent,
                    external: tool.url
                });
            }
        });

        // 5. Search in Games
        funContent.games.forEach(game => {
            if (game.title.toLowerCase().includes(q)) {
                allResults.push({
                    id: 'fun',
                    title: game.title,
                    type: 'game',
                    category: 'لعبة ممتعة',
                    section: 'home',
                    icon: game.IconComponent,
                    external: game.url
                });
            }
        });

        // 6. Search in Navigation/Sections
        navLinks.forEach(nav => {
            const translatedTitle = t(`navLabels.${nav.id}`, language) || nav.title;
            if (translatedTitle.toLowerCase().includes(q)) {
                allResults.push({
                    id: nav.id,
                    title: translatedTitle,
                    type: 'section',
                    category: 'قسم في الموقع',
                    section: nav.id,
                    icon: nav.icon
                });
            }
        });

        // 7. Search in WhatsApp Channels
        whatsappChannels.forEach(channel => {
            if (channel.name.toLowerCase().includes(q)) {
                allResults.push({
                    id: 'channels',
                    title: channel.name,
                    type: 'channel',
                    category: 'قناة تواصل',
                    section: 'home',
                    icon: channel.IconComponent,
                    external: channel.url
                });
            }
        });

        // 8. Search in Social Links
        socialLinks.forEach(link => {
            if (link.name.toLowerCase().includes(q)) {
                allResults.push({
                    id: 'social',
                    title: link.name,
                    type: 'social',
                    category: 'رابط تواصل',
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
                                className="flex-1 bg-transparent border-none focus:ring-0 text-lg text-gray-800 dark:text-gray-100 placeholder-gray-400 text-right"
                                dir="rtl"
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
                                            className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all group text-right"
                                            dir="rtl"
                                        >
                                            <div className={cn(
                                                "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                                result.type === 'article' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                                            )}>
                                                {result.type === 'article' ? <Newspaper className="w-5 h-5" /> : (result.icon ? <result.icon className="w-5 h-5" /> : <Search className="w-5 h-5" />)}
                                            </div>
                                            <div className="flex-1 text-right">
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
