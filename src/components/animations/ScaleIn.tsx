"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useIsFirefoxMobile } from "@/components/FirefoxMobileFix";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.3,
}: ScaleInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const isFirefoxMobile = useIsFirefoxMobile();

  // Skip animations on Firefox Mobile to prevent rendering glitches
  if (isFirefoxMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
