"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AppLandingHeroProps {
  heroImage: string;
  heroVideo?: string;
  title?: string;
  titleImage?: string;
  titleImageWidth?: number;
  headline: string;
  subline: string;
  ctaText: string;
  ctaAction: () => void;
  socialProof?: string;
  socialProof2?: string;
  accentGradient?: string;
}

export default function AppLandingHero({
  heroImage,
  heroVideo,
  title,
  titleImage,
  titleImageWidth = 200,
  headline,
  subline,
  ctaText,
  ctaAction,
  socialProof,
  socialProof2,
  accentGradient = "from-primary to-secondary",
}: AppLandingHeroProps) {
  return (
    <section className="relative h-[calc(100svh-64px)] flex flex-col overflow-hidden">
      {/* Hero Media - Shrinks to fit content within viewport */}
      <div className="relative w-full flex-1 min-h-0">
        {/* Static poster image (loads first) */}
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        
        {/* Autoplay muted loop video on top (if provided) */}
        {heroVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-black/30" />
        
        {/* Title overlay at top center - image or text */}
        {titleImage ? (
          <motion.div
            className="absolute top-4 left-0 right-0 flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={titleImage}
              alt={title || ""}
              width={titleImageWidth}
              height={Math.round(titleImageWidth * 0.3)}
              className="h-auto drop-shadow-lg"
              style={{ width: titleImageWidth, height: 'auto' }}
            />
          </motion.div>
        ) : title ? (
          <motion.h2
            className="absolute top-4 left-0 right-0 text-center text-3xl md:text-4xl font-bold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        ) : null}
      </div>

      {/* Content - fixed at bottom, never shrinks */}
      <div className="relative z-10 px-4 py-4 md:py-6 md:px-6 bg-background flex-shrink-0">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {headline}
          </motion.h1>

          {/* Subline / Differentiator */}
          <motion.p
            className="text-base md:text-lg text-muted mb-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subline}
          </motion.p>

          {/* Primary CTA Button */}
          <motion.button
            onClick={ctaAction}
            className={`w-full md:w-auto md:min-w-[280px] px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r ${accentGradient} shadow-lg hover:shadow-xl transition-shadow`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
          </motion.button>

          {/* Social Proof */}
          {(socialProof || socialProof2) && (
            <motion.div
              className="mt-3 space-y-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {socialProof && (
                <p className="text-sm text-muted/80">{socialProof}</p>
              )}
              {socialProof2 && (
                <p className="text-sm text-muted/80">{socialProof2}</p>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
