import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { LucideProps } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../i18n";

type Skill = {
  name: string;
  level: number;
  icon: React.FC<LucideProps>;
  translationKey?: string;
};

interface SkillsCardProps {
  skills: Skill[];
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(end: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, end, duration]);

  return count;
}

const glowColors: Record<number, string> = {
  0: "from-blue-500 to-indigo-500",
  1: "from-violet-500 to-purple-500",
  2: "from-cyan-500 to-blue-500",
  3: "from-emerald-500 to-teal-500",
  4: "from-pink-500 to-rose-500",
  5: "from-amber-500 to-orange-500",
  6: "from-indigo-500 to-blue-500",
  7: "from-teal-500 to-cyan-500",
};

const shadowColors: Record<number, string> = {
  0: "shadow-blue-400/60",
  1: "shadow-violet-400/60",
  2: "shadow-cyan-400/60",
  3: "shadow-emerald-400/60",
  4: "shadow-pink-400/60",
  5: "shadow-amber-400/60",
  6: "shadow-indigo-400/60",
  7: "shadow-teal-400/60",
};

interface SkillItemProps {
  skill: Skill;
  index: number;
  active: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index, active }) => {
  const { language } = useLanguage();
  const count = useCountUp(skill.level, 1200 + index * 80, active);
  const color = glowColors[index % Object.keys(glowColors).length];
  const shadow = shadowColors[index % Object.keys(shadowColors).length];

  return (
    <motion.div
      className="space-y-2 group"
      initial={{ opacity: 0, x: -24, filter: "blur(4px)" }}
      animate={
        active
          ? { opacity: 1, x: 0, filter: "blur(0px)" }
          : { opacity: 0, x: -24, filter: "blur(4px)" }
      }
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Label row */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.div
            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-md ${shadow}`}
            whileHover={{ scale: 1.15, rotate: 8 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <skill.icon className="w-4 h-4 text-white" />
          </motion.div>
          <span className="font-bold text-dark-color dark:text-gray-100 text-sm">
            {skill.translationKey
              ? t(`skillsSection.${skill.translationKey}`, language)
              : skill.name}
          </span>
        </div>

        {/* Animated percentage badge */}
        <motion.div
          className={`bg-gradient-to-r ${color} text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm`}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={
            active ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }
          }
          transition={{
            delay: 0.4 + index * 0.08,
            type: "spring",
            stiffness: 300,
          }}
        >
          {count}%
        </motion.div>
      </div>

      {/* Progress bar track */}
      <div className="w-full bg-gray-100 dark:bg-gray-700/60 rounded-full h-2.5 overflow-visible relative">
        {/* Background glow track */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-10 blur-sm`}
        />

        {/* Animated fill */}
        <motion.div
          className={`relative h-2.5 rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={active ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.25 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Glow on the fill */}
          <div
            className={`absolute inset-0 rounded-full shadow-lg ${shadow} blur-[3px] opacity-70`}
          />

          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ delay: 1 + index * 0.08 }}
          >
            <motion.div
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              animate={{ x: ["-100%", "400%"] }}
              transition={{
                duration: 2,
                delay: 1.5 + index * 0.1,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Tip glow dot */}
          <motion.div
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg ${shadow} -mr-1`}
            animate={
              active ? { scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] } : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2 + index * 0.08,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  const { language } = useLanguage();
  const { ref, inView } = useInView(0.2);

  return (
    <Card>
      {/* Header */}
      <motion.div
        className="flex items-center justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary px-2 whitespace-nowrap">
          {t("skillsSection.title", language)}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
      </motion.div>

      {/* Skills grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7"
      >
        {skills.map((skill, index) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            index={index}
            active={inView}
          />
        ))}
      </div>

      {/* Summary row */}
      <motion.div
        className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/50 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        {[
          {
            label: "Skills",
            value: skills.length,
            color: "from-blue-500 to-indigo-500",
          },
          {
            label: "Avg. Level",
            value: `${Math.round(skills.reduce((s, sk) => s + sk.level, 0) / skills.length)}%`,
            color: "from-violet-500 to-purple-500",
          },
          {
            label: "Expert (+90%)",
            value: skills.filter((s) => s.level >= 90).length,
            color: "from-emerald-500 to-teal-500",
          },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/40 min-w-[90px]"
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 350 }}
          >
            <span
              className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
            >
              {stat.value}
            </span>
            <span className="text-xs text-dark-color/50 dark:text-gray-400 font-medium mt-0.5">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
};

export default SkillsCard;
