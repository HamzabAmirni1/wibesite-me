import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, ChevronDown, AlertCircle } from 'lucide-react';
import { chatContent } from '../constants';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' }
  }
};

const ContactForm: React.FC = () => {
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
            alert('الرجاء ملء حقول الاسم والرسالة على الأقل.');
            return;
        }

        const messageBody = `
رسالة جديدة من موقعي:
--------------------
*الاسم:* ${formData.name}
*البريد الإلكتروني:* ${formData.email || 'لم يحدد'}
*نوع الطلب:* ${formData.requestType}
*الأولوية:* ${formData.priority}
--------------------
*الرسالة:*
${formData.message}
        `.trim();

        const encodedMessage = encodeURIComponent(messageBody);
        const phoneNumber = '212624855939';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    const subject = `[${formData.priority}] ${formData.requestType} من ${formData.name || 'زائر'}`;

    return (
        <motion.form
            action="https://formsubmit.co/hamzaamirni451@gmail.com"
            method="POST"
            className="space-y-6"
            variants={itemVariants}
        >
            <input type="hidden" name="_subject" value={subject} />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        name="name"
                        placeholder="الاسم"
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
                        placeholder="البريد الإلكتروني (مطلوب للإرسال عبر البريد)"
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
                    placeholder="اكتب رسالتك هنا..."
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
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold shadow-lg text-lg"
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Mail size={22} />
                    إرسال عبر البريد
                </motion.button>
                <motion.button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg text-lg"
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <MessageSquare size={22} />
                    إرسال عبر واتساب
                </motion.button>
            </div>
        </motion.form>
    );
};

export default ContactForm;
