import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { SiWhatsapp, SiFacebook, SiInstagram, SiYoutube, SiTiktok, SiTelegram } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contactPage.successMessage', language));
    setFormData({ name: '', email: '', subject: '', priority: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <h1 className="text-4xl font-bold text-dark-color mb-4">{t('contactPage.title', language)}</h1>
        <p className="text-lg text-dark-color/70">
          {t('contactPage.description', language)}
        </p>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card>
          <h2 className="text-2xl font-bold text-primary mb-6">{t('contactPage.contactInfoTitle', language)}</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('contactPage.emailLabel', language)}</h3>
                <p className="text-gray-600">hamzaamirni451@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('contactPage.whatsappLabel', language)}</h3>
                <p className="text-gray-600">{t('contactPage.whatsappDesc', language)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{t('contactPage.locationLabel', language)}</h3>
                <p className="text-gray-600">{t('contactPage.locationCountry', language)}</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4 text-center">{t('contactPage.socialMediaTitle', language)}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <a 
                href="https://wa.me/+212624855939" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <SiWhatsapp className="w-5 h-5" />
                <span className="text-sm font-medium">واتساب</span>
              </a>
              
              <a 
                href="https://www.facebook.com/6kqzuj3y4e" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <SiFacebook className="w-5 h-5" />
                <span className="text-sm font-medium">فيسبوك</span>
              </a>
              
              <a 
                href="https://instagram.com/hamza_amirni_01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <SiInstagram className="w-5 h-5" />
                <span className="text-sm font-medium">إنستغرام</span>
              </a>
              
              <a 
                href="https://youtube.com/@hamzaamirni01?si=GvjbnPjS4HMxdZ_i" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <SiYoutube className="w-5 h-5" />
                <span className="text-sm font-medium">يوتيوب</span>
              </a>
              
              <a 
                href="https://www.tiktok.com/@hamzaamirni?_t=ZS-8zGhf6i3jyZ&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <SiTiktok className="w-5 h-5" />
                <span className="text-sm font-medium">تيك توك</span>
              </a>
              
              <a 
                href="https://T.me/hamzaamirni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <SiTelegram className="w-5 h-5" />
                <span className="text-sm font-medium">تلغرام</span>
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">{t('contactPage.responseTimeTitle', language)}</h3>
            <p className="text-blue-700 text-sm">
              {t('contactPage.responseTimeDesc', language)}
            </p>
          </div>
        </Card>

        {/* Contact Form */}
        <Card>
          <h2 className="text-2xl font-bold text-primary mb-6">{t('contactPage.formTitle', language)}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* WhatsApp Direct Send Button */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                <SiWhatsapp className="w-5 h-5" />
                {t('contactPage.whatsappDirectTitle', language)}
              </h3>
              <p className="text-green-700 text-sm mb-3">
                {t('contactPage.whatsappDirectDesc', language)}
              </p>
              <a 
                href="https://wa.me/+212624855939?text=مرحباً، أود التواصل معك"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                <SiWhatsapp className="w-4 h-4" />
                {t('contactPage.openWhatsapp', language)}
              </a>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactPage.nameLabel', language)} {t('contactPage.requiredFieldIndicator', language)}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder={t('contactPage.namePlaceholder', language)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactPage.emailFieldLabel', language)} {t('contactPage.requiredFieldIndicator', language)}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder={t('contactPage.emailPlaceholder', language)}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactPage.subjectLabel', language)} {t('contactPage.requiredFieldIndicator', language)}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t('contactPage.subjectPlaceholder', language)}</option>
                <option value="استفسار عام">{t('contactPage.subjectOptions.general', language)}</option>
                <option value="دعم فني">{t('contactPage.subjectOptions.support', language)}</option>
                <option value="تطوير مواقع">{t('contactPage.subjectOptions.webDevelopment', language)}</option>
                <option value="برمجة تطبيقات">{t('contactPage.subjectOptions.appDevelopment', language)}</option>
                <option value="استشارة تقنية">{t('contactPage.subjectOptions.consultation', language)}</option>
                <option value="تعاون ومشاريع">{t('contactPage.subjectOptions.collaboration', language)}</option>
                <option value="أخرى">{t('contactPage.subjectOptions.other', language)}</option>
              </select>
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactPage.priorityLabel', language)} {t('contactPage.requiredFieldIndicator', language)}
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t('contactPage.priorityPlaceholder', language)}</option>
                <option value="عادي">{t('contactPage.priorityOptions.normal', language)}</option>
                <option value="مهم">{t('contactPage.priorityOptions.important', language)}</option>
                <option value="عاجل">{t('contactPage.priorityOptions.urgent', language)}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t('contactPage.messageLabel', language)} {t('contactPage.requiredFieldIndicator', language)}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder={t('contactPage.messagePlaceholder', language)}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              {t('contactPage.sendButton', language)}
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>{language === 'ar' ? 'ملاحظة:' : language === 'fr' ? 'Remarque:' : 'Note:'}</strong> {t('contactPage.formNote', language)}
            </p>
            <p className="text-green-700 text-sm mt-2">
              <strong>{language === 'ar' ? 'للرد السريع:' : language === 'fr' ? 'Pour une réponse rapide:' : 'For quick response:'}</strong> {t('contactPage.quickResponseNote', language)}
            </p>
          </div>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <h2 className="text-2xl font-bold text-primary mb-6">{t('contactPage.faqTitle', language)}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('contactPage.faqQ1', language)}</h3>
            <p className="text-gray-600 text-sm">
              {t('contactPage.faqA1', language)}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('contactPage.faqQ2', language)}</h3>
            <p className="text-gray-600 text-sm">
              {t('contactPage.faqA2', language)}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('contactPage.faqQ3', language)}</h3>
            <p className="text-gray-600 text-sm">
              {t('contactPage.faqA3', language)}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('contactPage.faqQ4', language)}</h3>
            <p className="text-gray-600 text-sm">
              {t('contactPage.faqA4', language)}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Contact;
