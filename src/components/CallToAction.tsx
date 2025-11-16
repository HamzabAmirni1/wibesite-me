import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

const CallToAction: React.FC = () => {
  const { setActiveSection } = useNavigation();

  const handleNavigate = () => {
    setActiveSection('chat');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="bg-gradient-to-br from-primary to-secondary text-white overflow-hidden !p-0">
        <div className="relative z-10 text-center p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">هل لديك سؤال أو فكرة مشروع؟</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            أنا هنا للمساعدة! سواء كنت تحتاج إلى استشارة تقنية، أو ترغب في مناقشة فكرة، أو حتى تريد أن تقول مرحباً، لا تتردد في التواصل معي.
          </p>
          <motion.button
            onClick={handleNavigate}
            className="bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg text-lg inline-flex items-center gap-3"
            whileHover={{ y: -3, scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>تواصل معي الآن</span>
            <ArrowLeft size={22} />
          </motion.button>
        </div>
        <div className="absolute -bottom-12 -left-12 text-white/10">
            <MessageSquare size={150} strokeWidth={1} />
        </div>
        <div className="absolute -top-10 -right-10 text-white/10 transform rotate-12">
            <MessageSquare size={120} strokeWidth={1} />
        </div>
      </Card>
    </motion.div>
  );
};

export default CallToAction;
