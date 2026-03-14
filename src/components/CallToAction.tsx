import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { MessageSquare, ArrowLeft, Sparkles, Zap } from "lucide-react";
import { useNavigation } from "../contexts/NavigationContext";
import { useLanguage } from "../contexts/LanguageContext";
import { t } from "../i18n";

const FloatingShape: React.FC<{
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  opacity: number;
}> = ({ size, x, y, duration, delay, opacity }) => (
  <motion.div
    className="absolute rounded-full bg-white/10 pointer-events-none"
    style={{ width: size, height: size, left: x, top: y, opacity }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.15, 1],
      opacity: [opacity, opacity * 1.6, opacity],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const CallToAction: React.FC = () => {
  const { setActiveSection } = useNavigation();
  const { language } = useLanguage();

  const handleNavigate = () => {
    setActiveSection("contact");
  };

  const shapes = [
    { size: 80, x: "5%", y: "10%", duration: 6, delay: 0, opacity: 0.12 },
    { size: 48, x: "15%", y: "65%", duration: 8, delay: 1, opacity: 0.08 },
    { size: 120, x: "72%", y: "5%", duration: 7, delay: 0.5, opacity: 0.07 },
    { size: 36, x: "85%", y: "55%", duration: 5, delay: 1.5, opacity: 0.1 },
    { size: 64, x: "45%", y: "75%", duration: 9, delay: 2, opacity: 0.06 },
    { size: 24, x: "60%", y: "20%", duration: 4.5, delay: 0.8, opacity: 0.14 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        className="bg-gradient-to-br from-primary via-indigo-600 to-secondary text-white overflow-hidden !p-0 border-0 shadow-2xl shadow-primary/30"
        disableHoverEffect
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating shapes */}
        {shapes.map((s, i) => (
          <FloatingShape key={i} {...s} />
        ))}

        {/* Large background icon — bottom left */}
        <motion.div
          className="absolute -bottom-10 -left-10 text-white/8 pointer-events-none"
          animate={{ rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageSquare size={180} strokeWidth={0.8} />
        </motion.div>

        {/* Large background icon — top right */}
        <motion.div
          className="absolute -top-8 -right-8 text-white/8 pointer-events-none"
          animate={{ rotate: [12, -5, 12], scale: [1, 1.08, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <MessageSquare size={140} strokeWidth={0.8} />
        </motion.div>

        {/* Glow orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-10 md:px-12 md:py-14">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.span
              animate={{ rotate: [0, 20, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </motion.span>
            Let's Work Together
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl md:text-4xl font-black mb-4 leading-tight drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {t("callToAction.title", language)}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.35,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {t("callToAction.description", language)}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.45,
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          >
            <motion.button
              onClick={handleNavigate}
              className="relative bg-white text-primary font-black px-8 py-4 rounded-2xl shadow-xl text-base md:text-lg inline-flex items-center gap-3 overflow-hidden group"
              whileHover={{
                y: -4,
                scale: 1.04,
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
            >
              {/* Button shimmer */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />

              {/* Button glow on hover */}
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/5 to-secondary/5" />

              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-5 h-5 relative z-10 text-primary" />
              </motion.span>

              <span className="relative z-10">
                {t("callToAction.buttonText", language)}
              </span>

              <motion.span
                className="relative z-10"
                animate={{ x: [0, -4, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowLeft size={20} />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {["⚡ Fast Delivery", "🔒 Secure", "💎 Quality"].map((tag, i) => (
              <motion.span
                key={tag}
                className="text-xs font-semibold text-white/60 bg-white/10 border border-white/15 rounded-full px-3 py-1"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.08, color: "rgba(255,255,255,0.9)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CallToAction;
