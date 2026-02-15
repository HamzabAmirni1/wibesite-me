import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import SocialLinks from './SocialLinks';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const ProfileSection: React.FC = () => {
    const { language } = useLanguage();

    return (
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <motion.div 
                className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-2xl mx-auto mb-8 bg-white flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <span className="text-6xl font-bold text-primary">HA</span>
            </motion.div>
            <h1 className="text-4xl font-bold text-dark-color">{t('heroContent.name', language)}</h1>
            <div className="my-4 inline-block">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold shadow-md text-base inline-flex items-center gap-2">
                    🚀
                    <span>{t('heroContent.subtitle', language)}</span>
                </span>
            </div>
            <p className="text-lg leading-relaxed text-dark-color/70 max-w-3xl mx-auto mt-6">
                {t('heroContent.intro', language)} 🎉<br /><br />
                <strong className="text-primary text-xl">🎯 {t('heroContent.cta', language)}</strong>
            </p>
            <SocialLinks />
        </Card>
    );
};

export default ProfileSection;
