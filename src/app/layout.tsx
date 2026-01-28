import type { Metadata } from "next";
import { Nunito_Sans, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ColorThemeProvider } from "@/components/ColorThemeProvider";
import { LanguageProvider } from "@/lib/i18n";
import ScrollToTop from "@/components/ScrollToTop";
import { getThemeInitScript } from "@/lib/themeInitScript";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

// Persian font - Vazirmatn is a modern, open-source Persian font
const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sugar Cube Studio",
    template: "%s | Sugar Cube Studio",
  },
  description: "Innovations driven by imagination. We are an indie software company dedicated to creating innovative applications and games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${vazirmatn.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme and language direction */}
        <script dangerouslySetInnerHTML={{ __html: getThemeInitScript() }} />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider defaultTheme="dark">
          <ColorThemeProvider>
            <LanguageProvider>
              <ScrollToTop />
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </LanguageProvider>
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
