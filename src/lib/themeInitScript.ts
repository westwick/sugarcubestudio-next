/**
 * Builds the inline script that runs before React to prevent theme flash.
 * Uses colorThemes as single source of truth.
 */

import { colorThemes } from "./colorThemes";

type CompactPalette = {
  bg: string;
  fg: string;
  card: string;
  ch: string;
  border: string;
  bl: string;
  muted: string;
  mf: string;
  sec: string;
  hbg: string;
  fbg: string;
};

type CompactTheme = {
  p: string;
  ph: string;
  s: string;
  sh: string;
  sl: string;
  pl: string;
  pul: string;
  pd: string;
  L: CompactPalette;
  D: CompactPalette;
};

const compact = (): Record<string, CompactTheme> => {
  const out: Record<string, CompactTheme> = {};
  for (const t of colorThemes) {
    const mk = (p: typeof t.light) => ({
      bg: p.background,
      fg: p.foreground,
      card: p.card,
      ch: p.cardHover,
      border: p.border,
      bl: p.borderLight,
      muted: p.muted,
      mf: p.mutedForeground,
      sec: p.sectionAlt,
      hbg: p.headerBg,
      fbg: p.footerBg,
    });
    out[t.id] = {
      p: t.primary.base,
      ph: t.primary.hover,
      s: t.secondary.base,
      sh: t.secondary.hover,
      sl: t.secondary.light,
      pl: t.primary.light,
      pul: t.primary.ultraLight,
      pd: t.primary.dark,
      L: mk(t.light),
      D: mk(t.dark),
    };
  }
  return out;
};

const themeData = compact();

export function getThemeInitScript(): string {
  const data = JSON.stringify(themeData);
  return `
(function() {
  try {
    var theme = localStorage.getItem('sugar-cube-theme');
    /* Default to dark; override system. System detection left in ThemeProvider for explicit "system" choice. */
    var isDark = theme === 'light' ? false : true;
    if (isDark) document.documentElement.classList.add('dark');

    var lang = localStorage.getItem('sugar-cube-language');
    if (lang === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'fa');
      document.documentElement.classList.add('rtl');
    }

    var colorThemeId = localStorage.getItem('sugar-cube-color-theme') || 'sunset-blaze';
    var d = ${data};
    var t = d[colorThemeId] || d['sunset-blaze'];
    if (t) {
      var pal = isDark ? t.D : t.L;
      var r = document.documentElement;
      r.style.setProperty('--background', pal.bg);
      r.style.setProperty('--foreground', pal.fg);
      r.style.setProperty('--card', pal.card);
      r.style.setProperty('--card-hover', pal.ch);
      r.style.setProperty('--border', pal.border);
      r.style.setProperty('--border-light', pal.bl);
      r.style.setProperty('--muted', pal.muted);
      r.style.setProperty('--muted-foreground', pal.mf);
      r.style.setProperty('--section-alt', pal.sec);
      r.style.setProperty('--header-bg', pal.hbg);
      r.style.setProperty('--footer-bg', pal.fbg);
      r.style.setProperty('--primary', t.p);
      r.style.setProperty('--primary-hover', t.ph);
      r.style.setProperty('--primary-light', t.pl);
      r.style.setProperty('--primary-ultra-light', t.pul);
      r.style.setProperty('--primary-dark', t.pd);
      r.style.setProperty('--secondary', t.s);
      r.style.setProperty('--secondary-hover', t.sh);
      r.style.setProperty('--gradient-primary', 'linear-gradient(135deg, ' + t.p + ' 0%, ' + t.s + ' 100%)');
      r.style.setProperty('--gradient-primary-subtle', 'linear-gradient(135deg, ' + t.pul + ' 0%, ' + t.sl + ' 100%)');
      var h = t.p.replace(/^#/, '');
      var hr = parseInt(h.slice(0,2), 16), hg = parseInt(h.slice(2,4), 16), hb = parseInt(h.slice(4,6), 16);
      var ha = isDark ? 0.15 : 0.05;
      r.style.setProperty('--gradient-hero', 'linear-gradient(180deg, rgba(' + hr + ',' + hg + ',' + hb + ',' + ha + ') 0%, transparent 100%)');
      r.style.setProperty('--primary-rgb', hr + ' ' + hg + ' ' + hb);
    }
  } catch (e) {}
})();
`.trim();
}
