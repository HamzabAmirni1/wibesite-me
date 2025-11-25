import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { CheckCircle, Code2, Laptop, BookOpen, Zap, Target, Award } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50 }
  }
};

const programmingLanguages = [
  {
    name: 'JavaScript',
    icon: '🟨',
    level: '95%',
    description: 'لغة برمجة أساسية لتطوير الويب والتطبيقات التفاعلية',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    name: 'Python',
    icon: '🐍',
    level: '90%',
    description: 'لغة متعددة الاستخدامات للذكاء الاصطناعي وتحليل البيانات',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'TypeScript',
    icon: '🔷',
    level: '92%',
    description: 'JavaScript مع أنواع ثابتة لمشاريع أكثر أماناً',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'PHP',
    icon: '🐘',
    level: '88%',
    description: 'لغة خادم قوية لتطوير المواقع الديناميكية',
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: 'React',
    icon: '⚛️',
    level: '95%',
    description: 'مكتبة JavaScript لبناء واجهات مستخدم تفاعلية',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    level: '90%',
    description: 'بيئة تشغيل JavaScript من جانب الخادم',
    color: 'from-green-400 to-green-600'
  }
];

const learningResources = [
  {
    title: 'دورات مجانية',
    icon: BookOpen,
    items: [
      'FreeCodeCamp - دورات شاملة',
      'Codecademy - تعلم تفاعلي',
      'MDN Web Docs - مرجع شامل',
      'W3Schools - دروس عملية'
    ],
    color: 'from-blue-50 to-blue-100'
  },
  {
    title: 'أدوات التطوير',
    icon: Laptop,
    items: [
      'VS Code - محرر أكواد قوي',
      'Git & GitHub - إدارة الإصدارات',
      'Chrome DevTools - أدوات التطوير',
      'Postman - اختبار API'
    ],
    color: 'from-purple-50 to-purple-100'
  },
  {
    title: 'مسارات التعلم',
    icon: Target,
    items: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'Mobile App Developer'
    ],
    color: 'from-green-50 to-green-100'
  }
];

const codeExamples = [
  {
    title: 'JavaScript - Hello World',
    language: 'javascript',
    code: `// مثال بسيط بلغة JavaScript
console.log("مرحباً بالعالم!");

// دالة لحساب مجموع رقمين
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3)); // Output: 8`,
    output: 'مرحباً بالعالم!\n8'
  },
  {
    title: 'Python - قائمة الأعداد',
    language: 'python',
    code: `# مثال بلغة Python
numbers = [1, 2, 3, 4, 5]

# حساب مجموع الأعداد
total = sum(numbers)
print(f"المجموع: {total}")

# مضاعفة كل رقم
doubled = [n * 2 for n in numbers]
print(f"المضاعف: {doubled}")`,
    output: 'المجموع: 15\nالمضاعف: [2, 4, 6, 8, 10]'
  }
];

const Programming: React.FC = () => {
  const { language } = useLanguage();

  return (
    <motion.div 
      className="space-y-12 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
          <div className="space-y-4">
            <div className="inline-block p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl">
              <Code2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              عالم البرمجة والتطوير
            </h1>
            <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed">
              تعلم البرمجة وابدأ رحلتك في عالم التكنولوجيا. من الأساسيات إلى المشاريع المتقدمة، 
              نوفر لك كل ما تحتاجه لتصبح مطور محترف.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Programming Languages */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8">
          لغات البرمجة التي أتقنها
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmingLanguages.map((lang, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{lang.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{lang.name}</h3>
                  <p className="text-sm text-gray-500">{lang.level}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{lang.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${lang.color}`}
                  style={{ width: lang.level }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learning Resources */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8">
          موارد التعلم والأدوات
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningResources.map((resource, idx) => (
            <Card key={idx} className={`bg-gradient-to-br ${resource.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
              </div>
              <ul className="space-y-2">
                {resource.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Code Examples */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8">
          أمثلة برمجية عملية
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {codeExamples.map((example, idx) => (
            <Card key={idx} className="overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">{example.title}</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  {example.language}
                </span>
              </div>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-left dir-ltr font-mono text-sm mb-4">
                <code>{example.code}</code>
              </pre>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs text-green-700 font-semibold mb-1">Output:</p>
                <pre className="text-sm text-green-800 font-mono whitespace-pre-wrap">{example.output}</pre>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
          <h3 className="text-2xl font-bold text-center text-primary mb-6">
            لماذا تتعلم البرمجة؟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Zap, text: 'تطوير مهارات حل المشاكل والتفكير المنطقي' },
              { icon: Award, text: 'فرص وظيفية متميزة ورواتب عالية' },
              { icon: Laptop, text: 'القدرة على بناء تطبيقات ومشاريع خاصة' },
              { icon: Target, text: 'العمل الحر والاستقلالية المهنية' }
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 flex-1">{benefit.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Images Grid */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" 
            alt="برمجة" 
            className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" 
            alt="تطوير" 
            className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" 
            alt="كود" 
            className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default Programming;
