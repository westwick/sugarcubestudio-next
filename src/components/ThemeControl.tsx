"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useColorTheme } from "./ColorThemeProvider";
import { useLanguage } from "@/lib/i18n";

/**
 * Combined theme control: color theme picker + light/dark mode toggle.
 * Single pill UI – left opens theme dropdown, right toggles light/dark.
 */
export default function ThemeControl() {
  const { setTheme, resolvedTheme, mounted } = useTheme();
  const { colorTheme, setColorTheme, themes, mounted: colorMounted } = useColorTheme();
  const { isRTL, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const effectiveMounted = mounted && colorMounted;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleLightDark = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!effectiveMounted) {
    return (
      <div
        className="h-10 w-[180px] sm:w-[220px] rounded-full bg-card border border-border animate-pulse"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="flex items-stretch rounded-full bg-card border border-border"
      ref={dropdownRef}
    >
      {/* Left: theme dropdown trigger */}
      <div className="relative flex-1 min-w-0">
        <motion.button
          type="button"
          onClick={() => setDropdownOpen((o) => !o)}
          className="flex items-center gap-2 w-full h-full pl-3 pr-2 py-2 hover:bg-card-hover transition-colors group text-left"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          aria-expanded={dropdownOpen}
          aria-label="Select color theme"
        >
          <span
            className="w-5 h-5 rounded-full border-2 border-white shadow-sm shrink-0"
            style={{
              background: `linear-gradient(135deg, ${colorTheme.primary.base} 0%, ${colorTheme.secondary.base} 100%)`,
            }}
          />
          <span className="text-xs font-medium text-muted group-hover:text-foreground truncate flex-1 min-w-0">
            {colorTheme.emoji} {colorTheme.name}
          </span>
          <svg
            className={`w-4 h-4 text-muted shrink-0 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className={`absolute bottom-full mb-2 ${isRTL ? "right-0" : "left-0"} z-50 w-56 py-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden`}
            >
              <div className="px-3 py-2 border-b border-border">
                <p className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Color theme
                </p>
              </div>
              <div className="max-h-56 overflow-y-auto py-1">
                {themes.map((th) => (
                  <motion.button
                    key={th.id}
                    type="button"
                    onClick={() => {
                      setColorTheme(th.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                      colorTheme.id === th.id ? "bg-primary/10 text-primary" : "hover:bg-card-hover text-foreground"
                    }`}
                    whileHover={{ x: isRTL ? -4 : 4 }}
                  >
                    <span
                      className="w-6 h-6 rounded-full border-2 border-white shadow-sm shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${th.primary.base} 0%, ${th.secondary.base} 100%)`,
                      }}
                    />
                    <span className="flex-1 text-sm font-medium truncate">
                      {th.emoji} {th.name}
                    </span>
                    {colorTheme.id === th.id && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-primary shrink-0"
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

      {/* Divider */}
      <div className="w-px bg-border" aria-hidden />

      {/* Right: light/dark toggle */}
      <div
        className="flex items-center pl-1 pr-3 py-1"
        role="group"
        aria-label="Toggle light or dark mode"
      >
        <button
          type="button"
          onClick={toggleLightDark}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
            resolvedTheme === "dark"
              ? "bg-primary/15 text-primary"
              : "text-muted hover:bg-card-hover hover:text-foreground"
          }`}
          title={resolvedTheme === "dark" ? t.themeDark : t.themeLight}
          aria-label={resolvedTheme === "dark" ? t.themeDark : t.themeLight}
        >
          {resolvedTheme === "dark" ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
