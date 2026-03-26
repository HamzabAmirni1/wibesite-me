import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, ChevronDown, AlertCircle } from 'lucide-react';
import { chatContent } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { t, contactFormTranslations } from '../i18n';

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring' }
    }
};

const ContactForm: React.FC = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        requestType: chatContent.requestTypes[0],
        priority: chatContent.priorities[0],
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendViaWhatsApp = () => {
        if (!formData.name || !formData.message) {
            alert(t('contactFormTranslations.nameRequired', language));
            return;
        }

        const messageBody = `
${t('contactFormTranslations.newMessageFromSite', language)}:
--------------------
*${t('contactFormTranslations.name', language)}:* ${formData.name}
*${t('contactFormTranslations.email', language)}:* ${formData.email || t('contactFormTranslations.notSpecified', language)}
*${t('contactFormTranslations.requestType', language)}:* ${formData.requestType}
*${t('contactFormTranslations.priority', language)}:* ${formData.priority}
--------------------
*${t('contactFormTranslations.message', language)}:*
${formData.message}
        `.trim();

        const encodedMessage = encodeURIComponent(messageBody);
        const phoneNumber = '212624855939';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleSendViaGmail = () => {
        if (!formData.name || !formData.message) {
            alert(t('contactFormTranslations.nameRequired', language));
            return;
        }

        const subject = encodeURIComponent(`[${formData.priority}] ${formData.requestType} - ${formData.name}`);
        const body = encodeURIComponent(`
${t('contactFormTranslations.name', language)}: ${formData.name}
${t('contactFormTranslations.email', language)}: ${formData.email || t('contactFormTranslations.notSpecified', language)}
${t('contactFormTranslations.requestType', language)}: ${formData.requestType}
${t('contactFormTranslations.priority', language)}: ${formData.priority}

${t('contactFormTranslations.message', language)}:
${formData.message}
        `.trim());

        // Use mailto to open the default email app (including Gmail app on mobile)
        const mailtoUrl = `mailto:hamzaamirni451@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoUrl;
    };

    return (
        <motion.div
            className="space-y-6"
            variants={itemVariants}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        name="name"
                        placeholder={t('contactPage.namePlaceholder', language)}
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 pr-12 text-base border-2 border-border-color rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                </div>

                {/* Email Field */}
                <div className="relative">
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="email"
                        name="email"
                        placeholder={t('contactPage.emailPlaceholder', language)}
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 pr-12 text-base border-2 border-border-color rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                </div>

                {/* Request Type Select */}
                <div className="relative">
                    <MessageSquare className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <select
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleChange}
                        className="w-full p-4 pr-12 text-base border-2 border-border-color rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition appearance-none"
                    >
                        {chatContent.requestTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>

                {/* Priority Select */}
                <div className="relative">
                    <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full p-4 pr-12 text-base border-2 border-border-color rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition appearance-none"
                    >
                        {chatContent.priorities.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                </div>
            </div>

            {/* Message Textarea */}
            <div>
                <textarea
                    name="message"
                    placeholder={t('contactPage.messagePlaceholder', language)}
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 text-base border-2 border-border-color rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <motion.button
                    type="button"
                    onClick={handleSendViaGmail}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold shadow-lg text-lg"
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Mail size={22} />
                    {t('contactFormLabels.sendViaEmail', language)}
                </motion.button>
                <motion.button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg text-lg"
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <MessageSquare size={22} />
                    {t('contactFormLabels.sendViaWhatsApp', language)}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ContactForm;
