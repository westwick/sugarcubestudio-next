"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  ColorTheme,
  colorThemes,
  defaultColorTheme,
  getColorThemeById,
  ThemePalette,
} from "@/lib/colorThemes";
import { useTheme } from "@/components/ThemeProvider";

interface ColorThemeContextProps {
  colorTheme: ColorTheme;
  setColorTheme: (themeId: string) => void;
  themes: ColorTheme[];
  mounted: boolean;
}

const ColorThemeContext = createContext<ColorThemeContextProps | undefined>(
  undefined
);

interface ColorThemeProviderProps {
  children: React.ReactNode;
  storageKey?: string;
}

function useMounted(): boolean {
  const subscribe = useCallback(() => () => {}, []);
  const getSnapshot = useCallback(() => true, []);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function hexToRgb(
  hex: string
): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function applyPalette(palette: ThemePalette) {
  const root = document.documentElement;
  root.style.setProperty("--background", palette.background);
  root.style.setProperty("--foreground", palette.foreground);
  root.style.setProperty("--card", palette.card);
  root.style.setProperty("--card-hover", palette.cardHover);
  root.style.setProperty("--border", palette.border);
  root.style.setProperty("--border-light", palette.borderLight);
  root.style.setProperty("--muted", palette.muted);
  root.style.setProperty("--muted-foreground", palette.mutedForeground);
  root.style.setProperty("--section-alt", palette.sectionAlt);
  root.style.setProperty("--header-bg", palette.headerBg);
  root.style.setProperty("--footer-bg", palette.footerBg);
}

function applyColorTheme(
  theme: ColorTheme,
  resolvedTheme: "light" | "dark"
) {
  const root = document.documentElement;
  const palette = resolvedTheme === "dark" ? theme.dark : theme.light;

  applyPalette(palette);

  root.style.setProperty("--primary", theme.primary.base);
  root.style.setProperty("--primary-hover", theme.primary.hover);
  root.style.setProperty("--primary-light", theme.primary.light);
  root.style.setProperty("--primary-ultra-light", theme.primary.ultraLight);
  root.style.setProperty("--primary-dark", theme.primary.dark);

  root.style.setProperty("--secondary", theme.secondary.base);
  root.style.setProperty("--secondary-hover", theme.secondary.hover);

  root.style.setProperty(
    "--gradient-primary",
    `linear-gradient(135deg, ${theme.primary.base} 0%, ${theme.secondary.base} 100%)`
  );
  root.style.setProperty(
    "--gradient-primary-subtle",
    `linear-gradient(135deg, ${theme.primary.ultraLight} 0%, ${theme.secondary.light} 100%)`
  );
  const primaryRgb = hexToRgb(theme.primary.base);
  if (primaryRgb) {
    const rgb = `${primaryRgb.r} ${primaryRgb.g} ${primaryRgb.b}`;
    const rgbComma = `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`;
    root.style.setProperty("--primary-rgb", rgb);
    const heroAlpha = resolvedTheme === "dark" ? 0.15 : 0.05;
    root.style.setProperty(
      "--gradient-hero",
      `linear-gradient(180deg, rgba(${rgbComma}, ${heroAlpha}) 0%, transparent 100%)`
    );
    root.style.setProperty("--shadow-glow", `0 0 40px -10px rgb(${rgb} / 0.3)`);
    root.style.setProperty("--shadow-glow-lg", `0 0 60px -15px rgb(${rgb} / 0.4)`);
  }
}

export function ColorThemeProvider({
  children,
  storageKey = "sugar-cube-color-theme",
}: ColorThemeProviderProps) {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(
    defaultColorTheme
  );

  useEffect(() => {
    if (!mounted) return;

    const savedThemeId = localStorage.getItem(storageKey);
    if (savedThemeId) {
      const theme = getColorThemeById(savedThemeId);
      setColorThemeState(theme);
    }
  }, [mounted, storageKey]);

  useEffect(() => {
    if (!mounted) return;
    applyColorTheme(colorTheme, resolvedTheme);
  }, [colorTheme, resolvedTheme, mounted]);

  const setColorTheme = useCallback(
    (themeId: string) => {
      const theme = getColorThemeById(themeId);
      localStorage.setItem(storageKey, themeId);
      setColorThemeState(theme);
    },
    [storageKey]
  );

  const contextValue = useMemo(
    () => ({
      colorTheme,
      setColorTheme,
      themes: colorThemes,
      mounted,
    }),
    [colorTheme, setColorTheme, mounted]
  );

  return (
    <ColorThemeContext.Provider value={contextValue}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}
