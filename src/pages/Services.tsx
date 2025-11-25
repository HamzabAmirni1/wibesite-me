import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  Globe,
  ShoppingCart,
  Search,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigation } from "../contexts/NavigationContext";
import CallToAction from "../components/CallToAction";
import WhatsappChannelLinks from "../components/WhatsappChannelLinks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

const services = [
  {
    id: "web-design",
    title: "تصميم وتطوير المواقع",
    description:
      "نصمم مواقع إلكترونية عصرية وجذابة تعكس هوية علامتك التجارية. نركز على تجربة المستخدم وسهولة التصفح لضمان بقاء الزوار في موقعك.",
    details: [
      "تصميم متجاوب مع جميع الشاشات",
      "واجهات مستخدم (UI/UX) احترافية",
      "لوحة تحكم سهلة لإدارة المحتوى",
      "سرعة تحميل فائقة وأداء عالي",
    ],
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "mobile-apps",
    title: "تطوير تطبيقات الهاتف",
    description:
      "حول فكرتك إلى تطبيق هاتف ذكي يعمل على نظامي Android و iOS. نقدم حلولاً برمجية متكاملة تضمن أداءً ممتازاً وتجربة مستخدم سلسة.",
    details: [
      "تطبيقات Native و Cross-platform",
      "تصميم واجهات عصرية",
      "ربط مع قواعد البيانات والسحابة",
      "رفع التطبيقات على المتاجر",
    ],
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ecommerce",
    title: "المتاجر الإلكترونية",
    description:
      "ابدأ تجارتك الإلكترونية بمتجر احترافي متكامل. نوفر لك كل ما تحتاجه لعرض منتجاتك، إدارة الطلبات، واستقبال المدفوعات بأمان.",
    details: [
      "عربة تسوق ونظام دفع آمن",
      "إدارة المخزون والمنتجات",
      "تقارير مبيعات وتحليلات",
      "دعم لغات وعملات متعددة",
    ],
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "seo",
    title: "تحسين محركات البحث (SEO)",
    description:
      "اجعل موقعك يتصدر نتائج البحث في جوجل. نستخدم أحدث استراتيجيات SEO لزيادة ظهور موقعك وجذب المزيد من الزوار المستهدفين.",
    details: [
      "تحليل الكلمات المفتاحية",
      "تحسين سرعة وأداء الموقع",
      "بناء روابط خلفية (Backlinks)",
      "تحسين المحتوى والهيكلية",
    ],
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "web-apps",
    title: "تطبيقات الويب المتقدمة",
    description:
      "نطور أنظمة ويب معقدة وحلول سحابية مخصصة لتلبية احتياجات عملك الخاصة. من أنظمة إدارة الموارد (ERP) إلى منصات التعليم.",
    details: [
      "أنظمة إدارة علاقات العملاء (CRM)",
      "منصات تعليمية (LMS)",
      "لوحات تحكم إدارية مخصصة",
      "تكامل مع خدمات طرف ثالث (API)",
    ],
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "support",
    title: "الدعم الفني والصيانة",
    description:
      "لا نتركك بعد تسليم المشروع. نقدم خدمات دعم فني وصيانة دورية لضمان عمل موقعك أو تطبيقك بكفاءة عالية ودون انقطاع.",
    details: [
      "حماية وأمان المعلومات",
      "نسخ احتياطي دوري",
      "تحديثات برمجية مستمرة",
      "حل المشاكل التقنية الطارئة",
    ],
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80",
    color: "from-slate-500 to-gray-500",
  },
];

const Services: React.FC = () => {
  const { setActiveSection } = useNavigation();

  return (
    <motion.div
      className="space-y-12 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary pb-2">
          خدماتنا الاحترافية
        </h1>
        <p className="text-lg text-dark-color/70 max-w-2xl mx-auto leading-relaxed">
          نقدم حلولاً رقمية متكاملة تساعدك على تنمية عملك وتحقيق أهدافك. نجمع
          بين الإبداع في التصميم والقوة في البرمجة لنقدم لك الأفضل.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Image Header */}
            <div className="h-48 overflow-hidden relative">
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 mix-blend-multiply z-10`}
              />
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 z-20 bg-white/90 p-2 rounded-lg backdrop-blur-sm shadow-sm">
                <service.icon className={`w-6 h-6 text-gray-800`} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Details List */}
              <ul className="space-y-2 pt-2">
                {service.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-xs text-gray-500"
                  >
                    <CheckCircle className="w-3 h-3 text-green-500 ml-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => setActiveSection("contact")}
                  className="w-full py-2.5 rounded-xl bg-gray-50 text-gray-700 font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  اطلب الخدمة
                  <ArrowRight className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call To Action */}
      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      {/* Whatsapp Channels */}
      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default Services;
