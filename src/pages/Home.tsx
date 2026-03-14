import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProfileSection from "../components/ProfileSection";
import SkillsCard from "../components/SkillsCard";
import Timeline from "../components/Timeline";
import CallToAction from "../components/CallToAction";
import WhatsappChannelLinks from "../components/WhatsappChannelLinks";
import Card from "../components/Card";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../i18n";
import {
  Lightbulb,
  CheckCircle,
  Palette,
  Zap,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";
import { aboutContent } from "../constants";
import { cn } from "../lib/utils";

/* ─── Shared Variants ──────────────────────────────────────────────────────── */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

/* ─── Reusable Section Wrapper ──────────────────────────────────────────────── */
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={delay}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Philosophy Card ───────────────────────────────────────────────────────── */
interface PhiloCardProps {
  icon: React.ReactNode;
  titleKey: string;
  gradient: string;
  iconBg: string;
  shadowColor: string;
  index: number;
}

const PhiloCard: React.FC<PhiloCardProps> = ({
  icon,
  titleKey,
  gradient,
  iconBg,
  shadowColor,
  index,
}) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`text-center p-7 rounded-2xl bg-gradient-to-br ${gradient} relative overflow-hidden group`}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background glow */}
      <motion.div
        className={`absolute -bottom-6 -right-6 w-28 h-28 rounded-full ${iconBg} opacity-20 blur-2xl`}
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      />

      {/* Icon */}
      <motion.div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${iconBg} mb-5 shadow-xl ${shadowColor} mx-auto`}
        whileHover={{ rotate: 12, scale: 1.15 }}
        transition={{ type: "spring", stiffness: 350 }}
      >
        {icon}
      </motion.div>

      <h4 className="text-xl font-bold text-dark-color dark:text-gray-100 mb-2">
        {t(`philosophySection.${titleKey}.title`, language)}
      </h4>
      <p className="text-dark-color/65 dark:text-gray-300 text-sm leading-relaxed">
        {t(`philosophySection.${titleKey}.description`, language)}
      </p>
    </motion.div>
  );
};

/* ─── Service Item ──────────────────────────────────────────────────────────── */
const ServiceItem: React.FC<{ serviceKey: string; index: number }> = ({
  serviceKey,
  index,
}) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="space-y-1.5 p-4 rounded-xl group relative overflow-hidden"
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ backgroundColor: "rgba(99,102,241,0.05)" }}
    >
      {/* Hover left border accent */}
      <motion.div
        className="absolute left-0 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary to-secondary rounded-full"
        initial={{ scaleY: 0, opacity: 0 }}
        whileHover={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
      />
      <h4 className="font-semibold text-base text-dark-color dark:text-gray-100 group-hover:text-primary transition-colors duration-200 pl-2">
        {t(`homePage.services.items.${serviceKey}.title`, language)}
      </h4>
      <p className="text-dark-color/70 dark:text-gray-300 text-sm leading-relaxed pl-2">
        {t(`homePage.services.items.${serviceKey}.desc`, language)}
      </p>
    </motion.div>
  );
};

/* ─── Why Us Card ───────────────────────────────────────────────────────────── */
const whyUsColors: Record<
  string,
  {
    bg: string;
    border: string;
    darkBg: string;
    darkBorder: string;
    icon: React.ReactNode;
  }
> = {
  professional: {
    bg: "bg-green-50/70",
    border: "border-green-100",
    darkBg: "dark:bg-green-900/20",
    darkBorder: "dark:border-green-800/30",
    icon: <Star className="w-5 h-5 text-green-500" />,
  },
  speed: {
    bg: "bg-blue-50/70",
    border: "border-blue-100",
    darkBg: "dark:bg-blue-900/20",
    darkBorder: "dark:border-blue-800/30",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
  },
  price: {
    bg: "bg-purple-50/70",
    border: "border-purple-100",
    darkBg: "dark:bg-purple-900/20",
    darkBorder: "dark:border-purple-800/30",
    icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
  },
  support: {
    bg: "bg-amber-50/70",
    border: "border-amber-100",
    darkBg: "dark:bg-amber-900/20",
    darkBorder: "dark:border-amber-800/30",
    icon: <Shield className="w-5 h-5 text-amber-500" />,
  },
};

const WhyUsCard: React.FC<{ whyKey: string; index: number }> = ({
  whyKey,
  index,
}) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const colors = whyUsColors[whyKey];

  return (
    <motion.div
      ref={ref}
      className={cn(
        "border rounded-2xl p-5 space-y-2 group relative overflow-hidden transition-shadow duration-300",
        colors.bg,
        colors.border,
        colors.darkBg,
        colors.darkBorder,
      )}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5, boxShadow: "0 12px 28px rgba(0,0,0,0.09)" }}
    >
      <motion.div
        className="flex items-center gap-2"
        initial={{ x: -10, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        <motion.div
          whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {colors.icon}
        </motion.div>
        <h4 className="font-bold text-dark-color dark:text-gray-100 text-sm">
          {t(`homePage.services.whyUs.${whyKey}.title`, language)}
        </h4>
      </motion.div>
      <p className="text-dark-color/70 dark:text-gray-300 text-xs leading-relaxed">
        {t(`homePage.services.whyUs.${whyKey}.desc`, language)}
      </p>
    </motion.div>
  );
};

/* ─── Pricing Plan Card ─────────────────────────────────────────────────────── */
const PlanCard: React.FC<{ planKey: string; index: number }> = ({
  planKey,
  index,
}) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const isMiddle = index === 1;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-2xl border p-6 flex flex-col justify-between relative overflow-hidden",
        isMiddle
          ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/40 shadow-xl shadow-primary/10 dark:from-primary/10 dark:to-secondary/10"
          : "bg-white/80 dark:bg-gray-800/60 border-primary/15 dark:border-primary/30 shadow-md",
      )}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={
        isInView
          ? { opacity: 1, y: isMiddle ? -8 : 0, scale: isMiddle ? 1.03 : 1 }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: isMiddle ? -14 : -8,
        boxShadow: isMiddle
          ? "0 20px 48px rgba(99,102,241,0.22)"
          : "0 12px 28px rgba(0,0,0,0.12)",
      }}
    >
      {isMiddle && (
        <motion.div
          className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        >
          ⭐ Popular
        </motion.div>
      )}

      {/* Top gradient line for popular */}
      {isMiddle && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-secondary rounded-t-2xl" />
      )}

      <div className="space-y-3">
        <h4
          className={cn(
            "text-lg font-black",
            isMiddle
              ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              : "text-primary dark:text-blue-400",
          )}
        >
          {t(`homePage.services.plans.${planKey}.title`, language)}
        </h4>

        <ul className="space-y-2">
          {Array.isArray(
            t(`homePage.services.plans.${planKey}.features`, language),
          ) &&
            (
              t(
                `homePage.services.plans.${planKey}.features`,
                language,
              ) as string[]
            ).map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-sm text-dark-color/80 dark:text-gray-300"
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.14 + i * 0.05 + 0.2 }}
              >
                <motion.span
                  className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary/15 dark:bg-primary/25 flex items-center justify-center"
                  whileHover={{ scale: 1.3 }}
                >
                  <CheckCircle className="w-2.5 h-2.5 text-primary" />
                </motion.span>
                {feature}
              </motion.li>
            ))}
        </ul>
      </div>

      <div className="mt-5 pt-4 border-t border-primary/10 dark:border-primary/20 space-y-1">
        <p
          className={cn(
            "font-black text-base",
            isMiddle
              ? "text-primary dark:text-blue-400"
              : "text-dark-color dark:text-gray-100",
          )}
        >
          {t(`homePage.services.plans.${planKey}.price`, language)}
        </p>
        <p className="text-xs text-dark-color/55 dark:text-gray-400 italic">
          {t(`homePage.services.plans.${planKey}.example`, language)}
        </p>
      </div>
    </motion.div>
  );
};

/* ─── Image Gallery ─────────────────────────────────────────────────────────── */
const ImageGallery: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const images = [
    {
      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&q=80",
      alt: "Web development workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
      alt: "Code on screen",
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
      alt: "Tech setup",
    },
  ];

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="relative overflow-hidden rounded-2xl shadow-lg group"
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          {/* Image */}
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 dark:opacity-80"
          />
          {/* Overlay gradient */}
          <motion.div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          {/* Shimmer on hover */}
          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700" />
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Section Title ─────────────────────────────────────────────────────────── */
const SectionTitle: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-3 mb-6"
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="text-2xl font-black text-primary dark:text-blue-400 border-r-4 border-primary pr-3 inline-block">
        {children}
      </h3>
      <motion.div
        className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: delay + 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
};

/* ─── Chip ──────────────────────────────────────────────────────────────────── */
const Chip: React.FC<{ label: string; color: string; index: number }> = ({
  label,
  color,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`bg-gradient-to-r ${color} px-6 py-3 rounded-full border border-white/10 shadow-sm`}
      initial={{ opacity: 0, scale: 0.75, y: 16 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{ scale: 1.07, y: -3 }}
    >
      {label}
    </motion.div>
  );
};

/* ─── Main Home Component ───────────────────────────────────────────────────── */
const Home: React.FC = () => {
  const { language } = useLanguage();

  const chips = [
    {
      color:
        "from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/20",
      label: (
        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
          ✓ {t("homePage.services.chips.modern", language)}
        </span>
      ),
    },
    {
      color:
        "from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/20",
      label: (
        <span className="text-sm font-semibold text-green-700 dark:text-green-300">
          ✓ {t("homePage.services.chips.fast", language)}
        </span>
      ),
    },
    {
      color:
        "from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/20",
      label: (
        <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
          ✓ {t("homePage.services.chips.support", language)}
        </span>
      ),
    },
  ];

  return (
    <motion.div
      className="space-y-10"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* ── Profile ── */}
      <motion.div variants={staggerItem}>
        <ProfileSection />
      </motion.div>

      {/* ── Hero Banner ── */}
      <AnimatedSection delay={0.05}>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl mx-auto rounded-2xl border-2 border-dashed border-primary/30 bg-white/60 dark:bg-gray-800/40 shadow-sm overflow-hidden group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt={t("homePage.services.adAlt", language)}
                className="w-full h-32 sm:h-40 object-cover dark:opacity-75 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Image Gallery ── */}
      <AnimatedSection delay={0.05}>
        <ImageGallery />
      </AnimatedSection>

      {/* ── Skills ── */}
      <motion.div variants={staggerItem}>
        <SkillsCard skills={aboutContent.skills} />
      </motion.div>

      {/* ── Journey / Timeline ── */}
      <AnimatedSection>
        <Card>
          <motion.h3
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center mb-8"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("journeySection.title", language)}
          </motion.h3>
          <Timeline
            items={
              Array.isArray(t("journeySection.items", language))
                ? t("journeySection.items", language)
                : []
            }
          />
        </Card>
      </AnimatedSection>

      {/* ── Philosophy ── */}
      <AnimatedSection>
        <Card>
          <motion.h3
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, type: "spring", stiffness: 150 }}
          >
            {t("philosophySection.title", language)}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PhiloCard
              index={0}
              icon={<Lightbulb className="w-8 h-8 text-white" />}
              titleKey="continuousLearning"
              gradient="from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/20"
              iconBg="bg-gradient-to-br from-blue-500 to-indigo-500"
              shadowColor="shadow-blue-500/40"
            />
            <PhiloCard
              index={1}
              icon={<CheckCircle className="w-8 h-8 text-white" />}
              titleKey="qualityDelivery"
              gradient="from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/20"
              iconBg="bg-gradient-to-br from-green-500 to-emerald-500"
              shadowColor="shadow-green-500/40"
            />
            <PhiloCard
              index={2}
              icon={<Palette className="w-8 h-8 text-white" />}
              titleKey="designCreativity"
              gradient="from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/20"
              iconBg="bg-gradient-to-br from-purple-500 to-pink-500"
              shadowColor="shadow-purple-500/40"
            />
          </div>
        </Card>
      </AnimatedSection>

      {/* ── Services Mega Section ── */}
      <AnimatedSection>
        <Card>
          <div className="space-y-12">
            {/* Header */}
            <section className="space-y-5 text-center">
              <motion.h2
                className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {t("homePage.services.header", language)}
              </motion.h2>
              <motion.p
                className="text-lg text-dark-color/75 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {t("homePage.services.intro", language)}
              </motion.p>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                {chips.map((chip, i) => (
                  <Chip
                    key={i}
                    label={chip.label as unknown as string}
                    color={chip.color}
                    index={i}
                  />
                ))}
              </div>
            </section>

            {/* Service List */}
            <section>
              <SectionTitle>
                {t("homePage.services.title", language)}
              </SectionTitle>
              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-2",
                  language === "ar" ? "text-right" : "text-left",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {[
                  "personal",
                  "company",
                  "ecommerce",
                  "payment",
                  "maintenance",
                  "seo",
                  "custom",
                ].map((key, i) => (
                  <ServiceItem key={key} serviceKey={key} index={i} />
                ))}
              </div>
            </section>

            {/* Why Us */}
            <section>
              <SectionTitle delay={0.05}>
                {t("homePage.services.whyUs.title", language)}
              </SectionTitle>
              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-4",
                  language === "ar" ? "text-right" : "text-left",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {[
                  { key: "professional" },
                  { key: "speed" },
                  { key: "price" },
                  { key: "support" },
                ].map(({ key }, i) => (
                  <WhyUsCard key={key} whyKey={key} index={i} />
                ))}
              </div>
            </section>

            {/* Pricing Plans */}
            <section>
              <SectionTitle delay={0.05}>
                {t("homePage.services.plans.title", language)}
              </SectionTitle>
              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-3 gap-6",
                  language === "ar" ? "text-right" : "text-left",
                )}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {["basic", "business", "ecommerce"].map((key, i) => (
                  <PlanCard key={key} planKey={key} index={i} />
                ))}
              </div>
            </section>

            {/* Ready section */}
            <section className="space-y-4 text-center">
              <motion.h3
                className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {t("homePage.services.ready.title", language)}
              </motion.h3>
              <motion.p
                className="text-dark-color/75 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
              >
                {t("homePage.services.ready.desc", language)}
              </motion.p>
            </section>
          </div>
        </Card>
      </AnimatedSection>

      {/* ── Call To Action ── */}
      <AnimatedSection delay={0.05}>
        <CallToAction />
      </AnimatedSection>

      {/* ── WhatsApp Links ── */}
      <AnimatedSection delay={0.05}>
        <WhatsappChannelLinks />
      </AnimatedSection>
    </motion.div>
  );
};

export default Home;
