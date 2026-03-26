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
  MessageCircle,
} from "lucide-react";
import { useNavigation } from "../contexts/NavigationContext";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../i18n";
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
    key: "s1",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "mobile-apps",
    key: "s2",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ecommerce",
    key: "s3",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "whatsapp-business",
    key: "s4",
    icon: MessageCircle,
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
    color: "from-green-400 to-emerald-600",
  },
  {
    id: "seo",
    key: "s5",
    icon: Search,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "web-apps",
    key: "s6",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "support",
    key: "s7",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    color: "from-slate-500 to-gray-500",
  },
];

const Services: React.FC = () => {
  const { setActiveSection } = useNavigation();
  const { language } = useLanguage();

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
          {t("servicesPage.hero.title", language)}
        </h1>
        <p className="text-lg text-dark-color/70 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t("servicesPage.hero.description", language)}
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            {/* Image Header */}
            <div className="h-48 overflow-hidden relative">
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 mix-blend-multiply z-10`}
              />
              <img
                src={service.image}
                alt={t(`servicesPage.items.${service.key}.title`, language)}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 dark:opacity-80"
              />
              <div className="absolute bottom-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg backdrop-blur-sm shadow-sm">
                <service.icon className={`w-6 h-6 text-gray-800 dark:text-gray-200`} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                {t(`servicesPage.items.${service.key}.title`, language)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed h-12 overflow-hidden">
                {t(`servicesPage.items.${service.key}.desc`, language)}
              </p>

              {/* Details List */}
              <ul className="space-y-2 pt-2">
                {(t(`servicesPage.items.${service.key}.details`, language) as string[]).map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-xs text-gray-500 dark:text-gray-400"
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
                  className="w-full py-2.5 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  {t("servicesPage.request", language)}
                  <ArrowRight className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default Services;
