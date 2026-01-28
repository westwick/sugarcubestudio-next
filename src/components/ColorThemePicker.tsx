"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useColorTheme } from "./ColorThemeProvider";
import { useLanguage } from "@/lib/i18n";

export default function ColorThemePicker() {
  const { colorTheme, setColorTheme, themes, mounted } = useColorTheme();
  const { isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Loading placeholder
  if (!mounted) {
    return (
      <div className="w-[140px] h-10 rounded-full bg-card border border-border animate-pulse" />
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Select color theme"
        aria-expanded={isOpen}
      >
        {/* Color Preview */}
        <span 
          className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
          style={{ 
            background: `linear-gradient(135deg, ${colorTheme.primary.base} 0%, ${colorTheme.secondary.base} 100%)` 
          }}
        />
        
        <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors hidden sm:block max-w-[80px] truncate">
          {colorTheme.name}
        </span>
        
        {/* Chevron */}
        <svg 
          className={`w-4 h-4 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute bottom-full mb-2 ${isRTL ? 'right-0' : 'left-0'} z-50 w-56 py-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden`}
          >
            <div className="px-3 py-2 border-b border-border">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider">
                Color Theme
              </p>
            </div>
            
            <div className="max-h-64 overflow-y-auto py-1">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => {
                    setColorTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                    colorTheme.id === theme.id
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-card-hover text-foreground'
                  }`}
                  whileHover={{ x: isRTL ? -4 : 4 }}
                >
                  {/* Color swatch */}
                  <span 
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.primary.base} 0%, ${theme.secondary.base} 100%)` 
                    }}
                  />
                  
                  {/* Theme name with emoji */}
                  <span className="flex-1 text-sm font-medium truncate">
                    {theme.emoji} {theme.name}
                  </span>
                  
                  {/* Checkmark for selected */}
                  {colorTheme.id === theme.id && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
