import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../i18n";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

const avatarVariants = {
  hidden: { scale: 0, rotate: -15, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 18, delay: 0.1 },
  },
};

const ProfileSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Card className="text-center bg-gradient-to-br from-primary/5 via-white/60 to-secondary/5 dark:from-primary/10 dark:via-gray-800/60 dark:to-secondary/10 overflow-visible">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Avatar with Pulse Rings */}
        <motion.div className="relative mb-8" variants={avatarVariants}>
          {/* Pulse ring 1 */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/40"
            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Pulse ring 2 */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-secondary/30"
            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          {/* Pulse ring 3 */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/20"
            animate={{ scale: [1, 1.85, 1], opacity: [0.3, 0, 0.3] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Orbit dot */}
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/40 top-1 right-1 z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "-56px 56px" }}
          />

          {/* Avatar circle */}
          <motion.div
            className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border-4 border-white dark:border-gray-700 shadow-2xl shadow-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.06, rotate: 3 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
          >
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-md" />
            <span className="relative z-10 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary select-none">
              HA
            </span>
          </motion.div>

          {/* Status badge */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 border-2 border-primary/30 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500 inline-block"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-semibold text-green-600 dark:text-green-400">
              Available
            </span>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-4"
          variants={itemVariants}
        >
          {t("heroContent.name", language)}
        </motion.h1>

        {/* Animated Badge */}
        <motion.div className="my-4" variants={itemVariants}>
          <motion.span
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-primary/30 text-base overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(99,102,241,0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Shimmer sweep */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />
            <motion.span
              animate={{ rotate: [0, 15, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-lg"
            >
              🚀
            </motion.span>
            <span className="relative z-10">
              {t("heroContent.subtitle", language)}
            </span>
          </motion.span>
        </motion.div>

        {/* Floating skill chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 my-4"
          variants={itemVariants}
        >
          {["React", "TypeScript", "Node.js", "UI/UX"].map((skill, i) => (
            <motion.span
              key={skill}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 border border-primary/20"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{
                opacity: { delay: 1.2 + i * 0.1 },
                scale: { delay: 1.2 + i * 0.1, type: "spring", stiffness: 300 },
                y: { type: "spring", stiffness: 400 },
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-lg leading-relaxed text-dark-color/70 dark:text-gray-300 max-w-3xl mx-auto mt-2"
          variants={itemVariants}
        >
          {t("heroContent.intro", language)} 🎉
          <br />
          <br />
          <motion.strong
            className="text-primary text-xl inline-block"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🎯 {t("heroContent.cta", language)}
          </motion.strong>
        </motion.p>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="mt-4 w-full">
          <SocialLinks />
        </motion.div>
      </motion.div>
    </Card>
  );
};

export default ProfileSection;
