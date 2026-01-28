"use client";

import { useLanguage } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageToggle() {
  const { language, setLanguage, t, mounted } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-[72px] h-10 rounded-full bg-card border border-border" />
    );
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      title={language === "en" ? "Switch to Persian" : "Switch to English"}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="text-muted group-hover:text-primary transition-colors"
        >
          {language === "en" ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
      <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors hidden sm:block">
        {language === "en" ? t.languagePersian : t.languageEnglish}
      </span>
    </motion.button>
  );
}
