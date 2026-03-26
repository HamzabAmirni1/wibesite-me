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
    key: 'js',
    icon: '🟨',
    level: '95%',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    name: 'Python',
    key: 'py',
    icon: '🐍',
    level: '90%',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'TypeScript',
    key: 'ts',
    icon: '🔷',
    level: '92%',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'PHP',
    key: 'php',
    icon: '🐘',
    level: '88%',
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: 'React',
    key: 'react',
    icon: '⚛️',
    level: '95%',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    name: 'Node.js',
    key: 'node',
    icon: '🟢',
    level: '90%',
    color: 'from-green-400 to-green-600'
  }
];

const learningResources = [
  {
    titleKey: 'courses',
    icon: BookOpen,
    items: [
      'FreeCodeCamp',
      'Codecademy',
      'MDN Web Docs',
      'W3Schools'
    ],
    color: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
  },
  {
    titleKey: 'tools',
    icon: Laptop,
    items: [
      'VS Code',
      'Git',
      'Chrome DevTools',
      'Postman'
    ],
    color: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20'
  },
  {
    titleKey: 'paths',
    icon: Target,
    items: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'Mobile App Developer'
    ],
    color: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
  }
];

const Programming: React.FC = () => {
  const { language } = useLanguage();
  const benefits = t('programmingPage.benefits', language) as string[];

  return (
    <motion.div
      className="space-y-12 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10 dark:from-primary/10 dark:to-secondary/10 dark:border-primary/20">
          <div className="space-y-4">
            <div className="inline-block p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl">
              <Code2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t('programmingPage.hero.title', language)}
            </h1>
            <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
              {t('programmingPage.hero.description', language)}
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Programming Languages */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8 dark:text-gray-100">
          {t('programmingPage.languagesTitle', language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmingLanguages.map((lang, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{lang.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{lang.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
                {t(`programmingPage.languages.${lang.key}`, language)}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
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
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8 dark:text-gray-100">
          {t('programmingPage.resourcesTitle', language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningResources.map((resource, idx) => (
            <Card key={idx} className={`bg-gradient-to-br ${resource.color} dark:border-white/10`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {t(`programmingPage.resources.${resource.titleKey}`, language)}
                </h3>
              </div>
              <ul className="space-y-2">
                {resource.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
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
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8 dark:text-gray-100">
          {t('programmingPage.examplesTitle', language)}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">JavaScript - Hello World</h3>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                javascript
              </span>
            </div>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-left dir-ltr font-mono text-sm mb-4">
              <code>{`// Simple JavaScript example
console.log("Hello, World!");

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3)); // Output: 8`}</code>
            </pre>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-lg p-3">
              <p className="text-xs text-green-700 dark:text-green-400 font-semibold mb-1">Output:</p>
              <pre className="text-sm text-green-800 dark:text-green-300 font-mono whitespace-pre-wrap">Hello, World!{"\n"}8</pre>
            </div>
          </Card>

          <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Python - Sum List</h3>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                python
              </span>
            </div>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-left dir-ltr font-mono text-sm mb-4">
              <code>{`# Python example
numbers = [1, 2, 3, 4, 5]

total = sum(numbers)
print(f"Sum: {total}")

doubled = [n * 2 for n in numbers]
print(f"Doubled: {doubled}")`}</code>
            </pre>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-lg p-3">
              <p className="text-xs text-green-700 dark:text-green-400 font-semibold mb-1">Output:</p>
              <pre className="text-sm text-green-800 dark:text-green-300 font-mono whitespace-pre-wrap">Sum: 15{"\n"}Doubled: [2, 4, 6, 8, 10]</pre>
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 dark:border-white/10">
          <h3 className="text-2xl font-bold text-center text-primary mb-6">
            {t('programmingPage.whyLearnTitle', language)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => {
              const icons = [Zap, Award, Laptop, Target];
              const Icon = icons[idx] || Zap;
              return (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 flex-1">{benefit}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </motion.div>

      {/* Images Grid */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
            alt="Professional Workspace for Web Development and Programming"
            className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:opacity-80"
          />
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
            alt="Modern Software Development Environment with High-Quality Code"
            className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:opacity-80"
          />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
            alt="Advanced Programming and Software Engineering Close-up"
            className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:opacity-80"
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
