import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import Card from '../components/Card';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';

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

const Projects: React.FC = () => {
  const { language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('projectsPage.projects.p1.title', language),
      category: t('projectsPage.categories.web', language),
      description: t('projectsPage.projects.p1.description', language),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      features: t('projectsPage.projects.p1.features', language),
      liveUrl: 'https://www.instagram.com/hamza_amirni_01',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: t('projectsPage.projects.p2.title', language),
      category: t('projectsPage.categories.ecommerce', language),
      description: t('projectsPage.projects.p2.description', language),
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      features: t('projectsPage.projects.p2.features', language),
      liveUrl: 'https://www.instagram.com/hamza_amirni_01',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      title: t('projectsPage.projects.p3.title', language),
      category: t('projectsPage.categories.app', language),
      description: t('projectsPage.projects.p3.description', language),
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Firebase', 'Material-UI', 'Video.js'],
      features: t('projectsPage.projects.p3.features', language),
      liveUrl: 'https://www.instagram.com/hamza_amirni_01',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: t('projectsPage.projects.p4.title', language),
      category: t('projectsPage.categories.mobile', language),
      description: t('projectsPage.projects.p4.description', language),
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Push Notifications'],
      features: t('projectsPage.projects.p4.features', language),
      liveUrl: 'https://www.instagram.com/hamza_amirni_01',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: t('projectsPage.projects.p5.title', language),
      category: t('projectsPage.categories.app', language),
      description: t('projectsPage.projects.p5.description', language),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Chart.js', 'D3.js', 'REST API'],
      features: t('projectsPage.projects.p5.features', language),
      liveUrl: 'https://www.instagram.com/hamza_amirni_01',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 6,
      title: t('projectsPage.projects.p6.title', language),
      category: t('projectsPage.categories.web', language),
      description: t('projectsPage.projects.p6.description', language),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Node.js', 'Express', 'MySQL'],
      features: t('projectsPage.projects.p6.features', language),
      liveUrl: 'https://www.instagram.com/hamza_amirni_01',
      color: 'from-red-500 to-pink-500'
    }
  ];

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
          {t('projectsPage.title', language)}
        </h1>
        <p className="text-lg text-dark-color/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t('projectsPage.description', language)}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group"
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 mix-blend-multiply z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full backdrop-blur-sm">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1">
                  {Array.isArray(project.features) && project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Star className="w-3 h-3 text-yellow-500 ml-2 flex-shrink-0 fill-current" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('projectsPage.preview', language)}
                  </a>
                </div>
              </div>
            </Card>
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

export default Projects;
