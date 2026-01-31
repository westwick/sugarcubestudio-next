"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

interface AppCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
  badgeColor?: "primary" | "green" | "blue";
  /** Set for the first/hero card above the fold to improve LCP */
  priority?: boolean;
}

export default function AppCard({
  title,
  description,
  image,
  href,
  badge,
  badgeColor = "primary",
  priority = false,
}: AppCardProps) {
  const { t, isRTL } = useLanguage();
  
  const badgeColors = {
    primary: "bg-primary/10 text-primary",
    green: "bg-green-500/10 text-green-600 dark:text-green-400",
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  };

  return (
    <Link href={href} className="group block">
      <motion.div
        className="relative bg-card rounded-2xl overflow-hidden border border-border card-hover"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image container */}
        <div className="relative h-56 overflow-hidden bg-section-alt">
          <Image
            src={image}
            alt={`${title} App`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Badge */}
        {badge && (
          <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10`}>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[badgeColor]}`}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
          <div className={`flex items-center gap-2 text-primary font-semibold text-sm ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <span>{t.learnMore}</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: isRTL ? -4 : 4 }}
            >
              <svg
                className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
