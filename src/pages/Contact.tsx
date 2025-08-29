import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                <p className="text-gray-600">contact@hamzaamirni.com</p>
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
                <p className="text-gray-600">المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">أوقات الاستجابة</h3>
            <p className="text-blue-700 text-sm">
              نسعى للرد على جميع الرسائل خلال 24-48 ساعة في أيام العمل
            </p>
          </div>
        </Card>

        {/* Contact Form */}
        <Card>
          <h2 className="text-2xl font-bold text-primary mb-6">أرسل لنا رسالة</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="ما موضوع رسالتك؟"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                نص الرسالة *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                placeholder="اكتب رسالتك هنا..."
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
