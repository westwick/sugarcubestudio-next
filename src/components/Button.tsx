"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  external = false,
  icon,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-transparent border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary-ultra-light dark:hover:bg-primary/10",
    ghost:
      "bg-transparent text-muted hover:text-foreground hover:bg-card",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  }`;

  const content = (
    <>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${combinedClasses}`}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        <motion.span
          className="inline-flex items-center justify-center gap-2"
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
