import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Card3D from './Card3D';
import SocialLinks from './SocialLinks';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const ProfileSection: React.FC = () => {
    const { language } = useLanguage();

    return (
        <Card3D className="w-full">
            <Card disableHoverEffect={true} className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden group/card">
                <motion.div 
                    className="w-48 h-48 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl mx-auto mb-8 bg-white dark:bg-gray-700 flex items-center justify-center relative overflow-hidden group/avatar"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <span className="text-6xl font-bold text-primary dark:text-blue-400 select-none">HA</span>
                    {/* Glassmorphic shiny highlight overlay */}
                    <div 
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent dark:via-white/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 pointer-events-none" 
                    />
                </motion.div>
                <h1 className="text-4xl font-bold text-dark-color dark:text-gray-100">{t('heroContent.name', language)}</h1>
                <div className="my-4 inline-block">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold shadow-md text-base inline-flex items-center gap-2">
                        🚀
                        <span>{t('heroContent.subtitle', language)}</span>
                    </span>
                </div>
                <p className="text-lg leading-relaxed text-dark-color/70 dark:text-gray-300 max-w-3xl mx-auto mt-6">
                    {t('heroContent.intro', language)} 🎉<br /><br />
                    <strong className="text-primary dark:text-blue-400 text-xl">🎯 {t('heroContent.cta', language)}</strong>
                </p>
                <div>
                    <SocialLinks />
                </div>
            </Card>
        </Card3D>
    );
};

export default ProfileSection;
