import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import SocialLinks from '../components/SocialLinks';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import CallToAction from '../components/CallToAction';
import { useNavigation } from '../contexts/NavigationContext';
import { Code, Database, Layout, Server, Smartphone, Star, Award, Users, Coffee, Target, Heart, Zap } from 'lucide-react';

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50 }
  }
};

const stats = [
  { icon: Award, value: '+5', label: 'سنوات خبرة', color: 'text-yellow-500' },
  { icon: Target, value: '+50', label: 'مشروع ناجح', color: 'text-green-500' },
  { icon: Users, value: '+30', label: 'عميل سعيد', color: 'text-blue-500' },
  { icon: Coffee, value: '+1000', label: 'كوب قهوة', color: 'text-amber-700' },
];

const skills = [
  { name: 'تطوير الواجهات', icon: Layout, level: 95, color: 'bg-blue-500' },
  { name: 'تطوير الخلفيات', icon: Server, level: 90, color: 'bg-green-500' },
  { name: 'تطبيقات الموبايل', icon: Smartphone, level: 85, color: 'bg-purple-500' },
  { name: 'قواعد البيانات', icon: Database, level: 88, color: 'bg-orange-500' },
  { name: 'الخوارزميات', icon: Code, level: 92, color: 'bg-red-500' },
];

const values = [
  {
    icon: Star,
    title: 'الجودة والتميز',
    description: 'أسعى دائماً لتقديم أفضل جودة ممكنة في كل سطر كود أكتبه.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Zap,
    title: 'السرعة والأداء',
    description: 'أركز على بناء تطبيقات سريعة وفعالة توفر تجربة مستخدم سلسة.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Heart,
    title: 'الشغف والتعلم',
    description: 'البرمجة ليست مجرد عمل، بل هي شغف يدفعني للتعلم المستمر.',
    color: 'bg-red-100 text-red-600'
  }
];

const About: React.FC = () => {
  const { setActiveSection } = useNavigation();

  return (
    <motion.div 
      className="space-y-12 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
          <div className="flex flex-col md:flex-row items-center gap-8 p-4">
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-48 h-48 rounded-full bg-white p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-white">
                  <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">HA</span>
                  {/* يمكنك استبدال هذا بصورتك الشخصية */}
                  {/* <img src="/path/to/your/image.jpg" alt="Hamza" className="w-full h-full object-cover" /> */}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-right space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-color">
                مرحباً، أنا <span className="text-primary">حمزة اعمرني</span> 👋
              </h1>
              <h2 className="text-2xl text-gray-600 font-medium">
                مطور برمجيات شامل & صانع محتوى تقني
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                أنا مطور شغوف بتحويل الأفكار إلى واقع رقمي. متخصص في بناء تطبيقات الويب والموبايل الحديثة باستخدام أحدث التقنيات. 
                هدفي هو مساعدة الأفراد والشركات على تحقيق أهدافهم التقنية بأفضل جودة وأسرع وقت.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  تواصل معي
                </button>
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="px-8 py-3 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-primary/5 transition-all duration-300"
                >
                  شاهد أعمالي
                </button>
              </div>
              <div className="pt-6 flex justify-center md:justify-start">
                <SocialLinks />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
              <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Story & Philosophy */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-dark-color mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full" />
                قصتي ورؤيتي
              </h3>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-4">
                  بدأت رحلتي في عالم البرمجة بشغف بسيط لمعرفة كيف تعمل الأشياء خلف الكواليس. 
                  تطور هذا الشغف ليصبح مسيرة مهنية ممتعة مليئة بالتحديات والإنجازات.
                </p>
                <p className="mb-4">
                  أؤمن بأن التكنولوجيا هي أداة قوية لتحسين حياة الناس وحل المشكلات المعقدة. 
                  لذلك، أسعى دائماً لتعلم كل ما هو جديد ومشاركة معرفتي مع الآخرين من خلال صناعة المحتوى التقني.
                </p>
                <p>
                  رؤيتي هي بناء مجتمع تقني عربي قوي ومبدع، والمساهمة في تطوير مشاريع تترك أثراً إيجابياً في العالم.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${value.color}`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-xs text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="lg:col-span-1">
          <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-dark-color mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-secondary rounded-full" />
                مهاراتي التقنية
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-gray-500" />
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
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

export default About;
