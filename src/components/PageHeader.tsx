"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function PageHeader({ subtitle, title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-section-alt border-b border-border">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <motion.p
          className="text-primary text-sm font-semibold uppercase tracking-wider mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="mt-4 text-lg text-muted max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
