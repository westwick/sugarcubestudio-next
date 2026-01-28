"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface FirefoxMobileContextType {
  isFirefoxMobile: boolean;
}

const FirefoxMobileContext = createContext<FirefoxMobileContextType>({
  isFirefoxMobile: false,
});

/**
 * Hook to check if running on Firefox Mobile
 */
export function useIsFirefoxMobile() {
  return useContext(FirefoxMobileContext).isFirefoxMobile;
}

/**
 * Detects Firefox Mobile and provides context + adds a class to the document
 * to work around a rendering bug with blur effects during scroll.
 */
export default function FirefoxMobileFix({ children }: { children?: ReactNode }) {
  const [isFirefoxMobile, setIsFirefoxMobile] = useState(false);

  useEffect(() => {
    // Detect Firefox Mobile
    const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent.toLowerCase()
    );

    const detected = isFirefox && isMobile;
    setIsFirefoxMobile(detected);

    if (detected) {
      document.documentElement.classList.add("firefox-mobile");
    }

    return () => {
      document.documentElement.classList.remove("firefox-mobile");
    };
  }, []);

  return (
    <FirefoxMobileContext.Provider value={{ isFirefoxMobile }}>
      {children}
    </FirefoxMobileContext.Provider>
  );
}
