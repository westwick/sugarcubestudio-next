"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

const SIMURGH_IOS_URL = "#"; /* TBD */
const SIMURGH_ANDROID_URL = "https://play.google.com/store/apps/details?id=com.sugarcubestudio.simurgh";
const SIMURGH_SPOTIFY_URL = "https://open.spotify.com/album/0lqK1qCPOO4BhFVLGH03bD?si=k586zVslTCS1JqA3T4Jupw";
/* TODO: Replace with actual trailer YouTube video ID */
const SIMURGH_TRAILER_VIDEO_ID = "dQw4w9WgXcQ";

const screenshots = [
  "/images/simurgh/2024-10-16-08h22m32s112.png",
  "/images/simurgh/2024-10-16-08h27m52s339.png",
  "/images/simurgh/2024-10-16-08h32m17s574.png",
];

export default function SimurghPage() {
  const { t, isRTL } = useLanguage();

  const features = [
    t.simurghFeature1,
    t.simurghFeature2,
    t.simurghFeature3,
    t.simurghFeature4,
    t.simurghFeature5,
  ];

  return (
    <>
      <PageHeader
        subtitle={t.simurghPageSubtitle}
        title={t.simurghPageTitle}
        description={t.simurghPageDescription}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <FadeIn direction={isRTL ? "right" : "left"} className="md:col-span-2">
                <p className="text-lg text-muted leading-relaxed mb-8">
                  {t.simurghAboutText}
                </p>

                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {t.simurghScreenshots}
                </h2>
                <div className="grid grid-cols-3 gap-3 mb-12">
                  {screenshots.map((src, index) => (
                    <div
                      key={index}
                      className="group relative aspect-video rounded-xl overflow-hidden bg-section-alt border border-border"
                    >
                      <Image
                        src={src}
                        alt={`${t.simurghTitle} Screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {t.simurghOriginalMusic}
                </h2>
                <p className="text-muted mb-4">
                  {t.simurghMusicDescription}
                </p>
                <motion.a
                  href={SIMURGH_SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-8"
                  whileHover={{ x: isRTL ? -4 : 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  {t.simurghListenOnSpotify}
                </motion.a>

                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {t.simurghFeatures}
                </h2>
                <StaggerContainer className="space-y-3">
                  {features.map((feature, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-center gap-3 text-muted">
                        <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                        {feature}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>

              <ScaleIn delay={0.2}>
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">{t.downloadNow}</h3>
                  <span className="inline-block px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold mb-4">
                    {t.available}
                  </span>
                  <p className="text-sm text-muted mb-6">
                    {t.availableOnIosAndroid}
                  </p>
                  <div className="space-y-3">
                    <motion.a
                      href={SIMURGH_IOS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Image
                        src="/images/ios-badge.png"
                        alt="Download on the App Store"
                        width={180}
                        height={60}
                        className="w-full h-auto"
                      />
                    </motion.a>
                    <motion.a
                      href={SIMURGH_ANDROID_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Image
                        src="/images/play-badge.png"
                        alt="Get it on Google Play"
                        width={180}
                        height={60}
                        className="w-full h-auto"
                      />
                    </motion.a>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {t.videoWatchTeaser}
              </h2>
              <p className="text-muted">{t.videoTitle}</p>
            </FadeIn>
            <ScaleIn>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${SIMURGH_TRAILER_VIDEO_ID}?rel=0&modestbranding=1`}
                  title={t.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>
    </>
  );
}
