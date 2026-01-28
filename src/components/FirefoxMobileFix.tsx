"use client";

import { useEffect } from "react";

/**
 * Detects Firefox Mobile and adds a class to the document
 * to work around a rendering bug with blur effects during scroll.
 */
export default function FirefoxMobileFix() {
  useEffect(() => {
    // Detect Firefox Mobile
    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent.toLowerCase()
    );

    if (isFirefox && isMobile) {
      document.documentElement.classList.add("firefox-mobile");
    }

    return () => {
      document.documentElement.classList.remove("firefox-mobile");
    };
  }, []);

  return null;
}
