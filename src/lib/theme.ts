/**
 * Theme Configuration
 * 
 * Centralized color palette and design tokens for Sugar Cube Studio.
 * Change primary colors here to update the entire site at once.
 */

export const theme = {
  // Primary brand color - the main accent color
  // Options to try: 
  // - Rose/Coral: { base: '#e11d48', hover: '#be123c', light: '#fecdd3', ultraLight: '#fff1f2' }
  // - Indigo: { base: '#6366f1', hover: '#4f46e5', light: '#c7d2fe', ultraLight: '#eef2ff' }
  // - Emerald: { base: '#10b981', hover: '#059669', light: '#a7f3d0', ultraLight: '#ecfdf5' }
  // - Amber: { base: '#f59e0b', hover: '#d97706', light: '#fde68a', ultraLight: '#fffbeb' }
  // - Violet: { base: '#8b5cf6', hover: '#7c3aed', light: '#ddd6fe', ultraLight: '#f5f3ff' }
  primary: {
    base: '#e11d48',      // Main accent color (rose-600)
    hover: '#be123c',     // Darker on hover (rose-700)
    light: '#fecdd3',     // Light variant (rose-200)
    ultraLight: '#fff1f2', // Very light for backgrounds (rose-50)
    dark: '#9f1239',      // Even darker for special use (rose-800)
  },

  // Secondary accent (optional, for gradients/highlights)
  secondary: {
    base: '#f97316',      // Orange-500 - pairs well with rose
    hover: '#ea580c',     // Orange-600
    light: '#fed7aa',     // Orange-200
  },

  // Light mode colors
  light: {
    background: '#fafafa',        // Page background
    foreground: '#0f172a',        // Primary text (slate-900)
    card: '#ffffff',              // Card backgrounds
    cardHover: '#f8fafc',         // Card hover state
    border: '#e2e8f0',            // Borders (slate-200)
    borderLight: '#f1f5f9',       // Lighter borders (slate-100)
    muted: '#64748b',             // Secondary text (slate-500)
    mutedForeground: '#94a3b8',   // Tertiary text (slate-400)
    sectionAlt: '#f8fafc',        // Alternate section background (slate-50)
  },

  // Dark mode colors
  dark: {
    background: '#0f172a',        // Page background (slate-900)
    foreground: '#f8fafc',        // Primary text (slate-50)
    card: '#1e293b',              // Card backgrounds (slate-800)
    cardHover: '#334155',         // Card hover state (slate-700)
    border: '#334155',            // Borders (slate-700)
    borderLight: '#1e293b',       // Lighter borders (slate-800)
    muted: '#94a3b8',             // Secondary text (slate-400)
    mutedForeground: '#64748b',   // Tertiary text (slate-500)
    sectionAlt: '#1e293b',        // Alternate section background (slate-800)
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #e11d48 0%, #f97316 100%)',
    primarySubtle: 'linear-gradient(135deg, #fff1f2 0%, #ffedd5 100%)',
    darkPrimary: 'linear-gradient(135deg, #be123c 0%, #ea580c 100%)',
    hero: 'linear-gradient(180deg, rgba(225, 29, 72, 0.05) 0%, transparent 100%)',
    heroDark: 'linear-gradient(180deg, rgba(225, 29, 72, 0.15) 0%, transparent 100%)',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    glow: '0 0 40px -10px rgb(225 29 72 / 0.3)',
    glowLg: '0 0 60px -15px rgb(225 29 72 / 0.4)',
  },

  // Animation durations
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    verySlow: '700ms',
  },

  // Border radius
  radius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Spacing scale
  spacing: {
    section: '6rem',      // py-24
    sectionMd: '4rem',    // py-16
    container: '1.5rem',  // px-6
  },
} as const;

// Type for theme
export type Theme = typeof theme;

// CSS variable names for easy reference
export const cssVars = {
  primary: '--primary',
  primaryHover: '--primary-hover',
  primaryLight: '--primary-light',
  primaryUltraLight: '--primary-ultra-light',
  secondary: '--secondary',
  background: '--background',
  foreground: '--foreground',
  card: '--card',
  cardHover: '--card-hover',
  border: '--border',
  borderLight: '--border-light',
  muted: '--muted',
  mutedForeground: '--muted-foreground',
  sectionAlt: '--section-alt',
  gradientPrimary: '--gradient-primary',
  gradientHero: '--gradient-hero',
} as const;
