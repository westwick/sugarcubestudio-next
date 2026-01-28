"use client";

import { motion } from "framer-motion";

interface NewsCardProps {
  headline: string;
  text: string;
  date?: string;
}

export default function NewsCard({ headline, text, date }: NewsCardProps) {
  return (
    <motion.article
      className="group relative bg-card rounded-2xl p-6 border border-border overflow-hidden card-hover"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {date && (
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary/50" />
            <time className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              {date}
            </time>
          </div>
        )}
        <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
          {headline}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{text}</p>
      </div>
    </motion.article>
  );
}
