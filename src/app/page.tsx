"use client";

import Button from "@/components/Button";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-20 ${isRTL ? 'right-10' : 'left-10'} w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float`} />
          <div
            className={`absolute bottom-20 ${isRTL ? 'left-10' : 'right-10'} w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float`}
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl"
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">{t.comingSoon}</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-foreground">{t.heroExperience}</span>
              <br />
              <span className="gradient-text">{t.heroSimurgh}</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted leading-relaxed mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.heroDescription}
            </motion.p>

            <motion.div
              className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                href="/apps/simurgh"
                size="lg"
                icon={
                  <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                }
              >
                {t.heroDiscoverMore}
              </Button>
              <Button href="/game-tester" variant="secondary" size="lg">
                {t.heroJoinBeta}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tagline */}
      <section className="relative py-20 border-y border-border overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="relative container mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-muted italic">
              &ldquo;{t.taglineText}{" "}
              <span className="gradient-text font-medium not-italic">{t.taglineHighlight}</span>
              &rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Video Teaser Section */}
      <section className="py-24 md:py-32 bg-section-alt relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 ${isRTL ? 'right-1/4' : 'left-1/4'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 ${isRTL ? 'left-1/4' : 'right-1/4'} w-72 h-72 bg-secondary/5 rounded-full blur-3xl`} />
        </div>

        <div className="relative container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t.videoExclusivePreview}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.videoWatchTeaser}
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {t.videoDescription}
            </p>
          </FadeIn>

          <ScaleIn className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              {/* Video container with 16:9 aspect ratio */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800">
                {/* Placeholder for video - replace with actual YouTube embed or video element */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                  title={t.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video info bar */}
              <div className="p-4 md:p-6 bg-card border-t border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground">{t.videoTitle}</h3>
                    <p className="text-sm text-muted">{t.videoSubtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button href="/apps/simurgh" size="sm">
                      {t.learnMore}
                    </Button>
                    <Button href="/game-tester" variant="secondary" size="sm">
                      {t.joinBeta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* Feature highlights below video */}
          <FadeIn delay={0.3} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: "🎮", label: t.featureBeatEmUp },
                { icon: "🎵", label: t.featurePersianSoundtrack },
                { icon: "📖", label: t.featureEpicStory },
                { icon: "📱", label: t.featureMobileDesktop },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border/50"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl mb-2 block">{feature.icon}</span>
                  <span className="text-sm font-medium text-muted">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.newsletterTitle}
            </h2>
            <p className="text-lg text-muted mb-8">
              {t.newsletterDescription}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder={t.newsletterPlaceholder}
                className="flex-grow px-5 py-4 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button type="submit">{t.subscribe}</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              {t.newsletterPrivacy}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Apps Preview */}
      <section className="py-24 md:py-32 bg-section-alt">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              {t.appsSubtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.appsTitle}
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {t.appsDescription}
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <div className="group relative bg-card rounded-3xl p-8 border border-border overflow-hidden card-hover h-full">
                {/* Gradient decoration */}
                <div className={`absolute -top-24 ${isRTL ? '-left-24' : '-right-24'} w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-3xl">🎮</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{t.simurghTitle}</h3>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {t.comingSoon}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed mb-6">
                    {t.simurghShortDesc}
                  </p>
                  <Link
                    href="/apps/simurgh"
                    className={`inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t.learnMore}
                    <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="group relative bg-card rounded-3xl p-8 border border-border overflow-hidden card-hover h-full">
                {/* Gradient decoration */}
                <div className={`absolute -top-24 ${isRTL ? '-left-24' : '-right-24'} w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-3xl">🌸</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{t.nowruzTitle}</h3>
                    <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold">
                      {t.available}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed mb-6">
                    {t.nowruzShortDesc}
                  </p>
                  <Link
                    href="/apps/nowruz"
                    className={`inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t.learnMore}
                    <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.4} className="text-center mt-12">
            <Button href="/apps" variant="secondary">
              {t.viewAllApps}
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              {t.newsSubtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t.newsTitle}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StaggerItem>
              <NewsCard
                date={t.comingSoon}
                headline={t.newsSimurghHeadline}
                text={t.newsSimurghText}
              />
            </StaggerItem>
            <StaggerItem>
              <NewsCard
                date={t.availableNow}
                headline={t.newsNowruzHeadline}
                text={t.newsNowruzText}
              />
            </StaggerItem>
            <StaggerItem>
              <NewsCard
                date={t.joinUs}
                headline={t.newsBetaHeadline}
                text={t.newsBetaText}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0">
          <div className={`absolute top-1/2 ${isRTL ? 'right-1/4' : 'left-1/4'} w-64 h-64 bg-primary/10 rounded-full blur-3xl`} />
          <div className={`absolute top-1/2 ${isRTL ? 'left-1/4' : 'right-1/4'} w-48 h-48 bg-secondary/10 rounded-full blur-3xl`} />
        </div>

        <div className="relative container mx-auto px-6">
          <ScaleIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t.ctaTitle}{" "}
              <span className="gradient-text">{t.ctaHighlight}</span>?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              {t.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/mailing-list" size="lg">
                {t.ctaNewsletter}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {t.ctaContact}
              </Button>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
