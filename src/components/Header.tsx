"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string, exact = true) => {
    return exact ? pathname === path : pathname.startsWith(path);
  };

  const linkClass = (path: string, exact = true) => {
    const active = isActive(path, exact);
    return `relative text-sm font-semibold tracking-wide transition-colors ${
      active
        ? "text-primary"
        : "text-muted hover:text-foreground"
    }`;
  };

  const navLinks = [
    { href: "/", label: t.navHome, exact: true },
    { href: "/apps", label: t.navApps, exact: false },
    { href: "/contact", label: t.navContact, exact: true },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-border shadow-sm"
          : "bg-card/50 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <motion.div
              className="relative w-10 h-10"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/logo.png"
                alt="Sugar Cube Studio"
                fill
                className="object-contain"
              />
            </motion.div>
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors hidden sm:block">
              Sugar Cube Studio
            </span>
          </Link>

          {/* Desktop Navigation - Right aligned */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(link.href, link.exact)}
              >
                {link.label}
                {isActive(link.href, link.exact) && (
                  <motion.div
                    className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full`}
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <LanguageToggle />
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-section-alt transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute left-0 w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? "top-1/2 -translate-y-1/2 rotate-45" 
                    : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? "top-1/2 -translate-y-1/2 -rotate-45" 
                    : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-2 text-lg font-semibold ${
                      isActive(link.href, link.exact)
                        ? "text-primary"
                        : "text-muted hover:text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2 border-t border-border"
              >
                <LanguageToggle />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
