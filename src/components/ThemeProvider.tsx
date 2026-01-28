"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo, useSyncExternalStore } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
  mounted: boolean;
}

const ThemeProviderContext = createContext<ThemeProviderContextProps | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

// Get system preference
const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Get initial theme from storage or default
const getInitialTheme = (storageKey: string, defaultTheme: Theme): Theme => {
  if (typeof window === "undefined") return defaultTheme;
  const stored = localStorage.getItem(storageKey) as Theme | null;
  return stored || defaultTheme;
};

// Get resolved theme (what's actually shown)
const getResolvedTheme = (theme: Theme): "light" | "dark" => {
  return theme === "system" ? getSystemTheme() : theme;
};

// Custom hook to determine if we're mounted (client-side)
function useMounted(): boolean {
  const subscribe = useCallback(() => () => {}, []);
  const getSnapshot = useCallback(() => true, []);
  const getServerSnapshot = useCallback(() => false, []);
  
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "sugar-cube-theme",
}: ThemeProviderProps) {
  // Use useSyncExternalStore for hydration-safe mounted detection
  const mounted = useMounted();

  // Use lazy initialization to read from localStorage
  const [theme, setThemeState] = useState<Theme>(() => 
    getInitialTheme(storageKey, defaultTheme)
  );

  // Compute resolved theme from current theme
  const resolvedTheme = useMemo(() => {
    if (!mounted) return "light";
    return getResolvedTheme(theme);
  }, [theme, mounted]);

  // Apply theme class to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const resolved = getResolvedTheme(theme);

    root.classList.remove("light", "dark");
    root.classList.add(resolved);

    // Listen for system theme changes when in system mode
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const newResolved = getSystemTheme();
        root.classList.remove("light", "dark");
        root.classList.add(newResolved);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  }, [storageKey]);

  const contextValue = useMemo(() => ({
    theme,
    setTheme,
    resolvedTheme,
    mounted
  }), [theme, setTheme, resolvedTheme, mounted]);

  return (
    <ThemeProviderContext.Provider value={contextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
