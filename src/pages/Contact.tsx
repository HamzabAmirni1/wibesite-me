import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { SiWhatsapp, SiFacebook, SiInstagram, SiYoutube, SiTiktok, SiTelegram } from 'react-icons/si';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.');
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
        <h1 className="text-4xl font-bold text-dark-color mb-4">تواصل معنا</h1>
        <p className="text-lg text-dark-color/70">
          نحن هنا للإجابة على استفساراتك ومساعدتك في رحلتك التقنية
        </p>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card>
          <h2 className="text-2xl font-bold text-primary mb-6">معلومات التواصل</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">البريد الإلكتروني</h3>
                <p className="text-gray-600">hamzaamirni451@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">واتساب</h3>
                <p className="text-gray-600">متاح من خلال الروابط في الموقع</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">الموقع</h3>
                <p className="text-gray-600">المغرب</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4 text-center">تابعني على وسائل التواصل الاجتماعي</h3>
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
            <h3 className="font-semibold text-blue-800 mb-2">أوقات الاستجابة</h3>
            <p className="text-blue-700 text-sm">
              نسعى للرد على جميع الرسائل خلال 24-48 ساعة في أيام العمل. للاستفسارات العاجلة، تواصل معي عبر واتساب.
            </p>
          </div>
        </Card>

        {/* Contact Form */}
        <Card>
          <h2 className="text-2xl font-bold text-primary mb-6">أرسل لنا رسالة</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* WhatsApp Direct Send Button */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                <SiWhatsapp className="w-5 h-5" />
                إرسال مباشر عبر واتساب
              </h3>
              <p className="text-green-700 text-sm mb-3">
                للحصول على رد سريع، يمكنك إرسال رسالتك مباشرة عبر واتساب
              </p>
              <a 
                href="https://wa.me/+212624855939?text=مرحباً، أود التواصل معك"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                <SiWhatsapp className="w-4 h-4" />
                فتح واتساب
              </a>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الكامل *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="أدخل اسمك الكامل"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                موضوع الرسالة *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">اختر موضوع الرسالة</option>
                <option value="استفسار عام">استفسار عام</option>
                <option value="دعم فني">دعم فني</option>
                <option value="تطوير مواقع">تطوير مواقع</option>
                <option value="برمجة تطبيقات">برمجة تطبيقات</option>
                <option value="استشارة تقنية">استشارة تقنية</option>
                <option value="تعاون ومشاريع">تعاون ومشاريع</option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                أهمية الرسالة *
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority || ''}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">اختر مستوى الأهمية</option>
                <option value="عادي">عادي - رد خلال 24-48 ساعة</option>
                <option value="مهم">مهم - رد خلال 12-24 ساعة</option>
                <option value="عاجل">عاجل - يُفضل استخدام واتساب للرد السريع</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                تفاصيل الرسالة *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="اكتب تفاصيل رسالتك هنا... كلما كانت التفاصيل أوضح، كان الرد أدق وأسرع."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={20} />
              إرسال الرسالة
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>ملاحظة:</strong> جميع الحقول المطلوبة مميزة بعلامة (*). 
              نحن نحترم خصوصيتك ولن نشارك معلوماتك مع أطراف ثالثة.
            </p>
            <p className="text-green-700 text-sm mt-2">
              <strong>للرد السريع:</strong> استخدم زر واتساب أعلاه أو راسلنا على: hamzaamirni451@gmail.com
            </p>
          </div>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <h2 className="text-2xl font-bold text-primary mb-6">الأسئلة الشائعة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">كيف يمكنني طلب استشارة تقنية؟</h3>
            <p className="text-gray-600 text-sm">
              يمكنك التواصل معنا عبر النموذج أعلاه أو واتساب لطلب استشارة تقنية مخصصة.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">هل تقدمون دورات تدريبية؟</h3>
            <p className="text-gray-600 text-sm">
              نعم، نقدم دورات ومحتوى تعليمي في البرمجة والتقنية. تابع قنواتنا للحصول على التحديثات.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">كم يستغرق الرد على الرسائل؟</h3>
            <p className="text-gray-600 text-sm">
              نسعى للرد خلال 24-48 ساعة في أيام العمل. الرسائل العاجلة يُفضل إرسالها عبر واتساب.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">هل يمكنني طلب مشروع مخصص؟</h3>
            <p className="text-gray-600 text-sm">
              بالطبع! نقدم خدمات تطوير مخصصة. تواصل معنا لمناقشة متطلبات مشروعك.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Contact;
