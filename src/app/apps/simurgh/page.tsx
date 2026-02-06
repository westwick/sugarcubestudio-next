"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import AppLandingHero from "@/components/AppLandingHero";
import ImageCarousel from "@/components/ImageCarousel";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";
import { useLanguage } from "@/lib/i18n";

const SIMURGH_ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.sugarcubestudio.simurgh";
const SIMURGH_SPOTIFY_URL =
  "https://open.spotify.com/album/0lqK1qCPOO4BhFVLGH03bD?si=k586zVslTCS1JqA3T4Jupw";
const SIMURGH_TRAILER_VIDEO_ID = "NgRHjenOQoI";

const HERO_IMAGE = "/images/simurgh/2024-10-16-08h22m32s112.png";

const screenshots = [
  "/images/simurgh/2024-10-16-08h22m32s112.png",
  "/images/simurgh/2024-10-16-08h27m52s339.png",
  "/images/simurgh/2024-10-16-08h32m17s574.png",
];

export default function SimurghPage() {
  const { t } = useLanguage();
  const downloadRef = useRef<HTMLDivElement>(null);

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    t.simurghFeature1,
    t.simurghFeature2,
    t.simurghFeature3,
    t.simurghFeature4,
    t.simurghFeature5,
  ];

  return (
    <>
      {/* ABOVE THE FOLD - Hero Section */}
      <AppLandingHero
        heroImage={HERO_IMAGE}
        heroVideo="/simurgheader.mp4"
        title={t.simurghTitle}
        titleImage="/simurghlogo.png"
        titleImageWidth={300}
        headline={t.simurghHeadline}
        subline={t.simurghSubline}
        ctaText={t.downloadNow}
        ctaAction={scrollToDownload}
        socialProof={t.simurghSocialProof}
        socialProof2={t.simurghSocialProof2}
        accentGradient="from-primary to-secondary"
      />

      {/* BELOW THE FOLD */}

      {/* Download Section */}
      <section ref={downloadRef} className="py-12 md:py-16 bg-section-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto text-center">
            <FadeIn>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-3xl">🎮</span>
                </div>
                <h2 className="font-bold text-2xl text-foreground mb-2">
                  {t.downloadNow}
                </h2>
                <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
                  {t.available}
                </span>
                <p className="text-muted mb-6">{t.availableOnIosAndroid}</p>
                <div className="space-y-3">
                  <div className="relative block opacity-50 pointer-events-none">
                    <Image
                      src="/images/ios-badge.png"
                      alt="Download on the App Store"
                      width={180}
                      height={60}
                      className="w-full max-w-[200px] mx-auto h-auto"
                    />
                    <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 text-white text-sm font-semibold">
                      {t.comingSoon}
                    </span>
                  </div>
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
                      className="w-full max-w-[200px] mx-auto h-auto"
                    />
                  </motion.a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trailer Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {t.videoWatchTeaser}
              </h2>
              <p className="text-muted">{t.videoTitle}</p>
            </FadeIn>
            <ScaleIn>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card aspect-video">
                <LiteYouTubeEmbed
                  videoId={SIMURGH_TRAILER_VIDEO_ID}
                  title={t.videoTitle}
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-12 md:py-16 bg-section-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.simurghScreenshots}
              </h2>
            </FadeIn>
            <FadeIn>
              <ImageCarousel
                images={screenshots}
                altPrefix={`${t.simurghTitle} Screenshot`}
                aspectRatio="video"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features & About Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Features */}
            <FadeIn className="mb-12">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 text-center">
                {t.simurghFeatures}
              </h2>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3 text-muted bg-card rounded-lg p-4 border border-border">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0" />
                      {feature}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>

            {/* About */}
            <FadeIn className="mb-12">
              <p className="text-lg text-muted leading-relaxed text-center">
                {t.simurghAboutText}
              </p>
            </FadeIn>

            {/* Music Section */}
            <FadeIn>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border text-center">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {t.simurghOriginalMusic}
                </h2>
                <p className="text-muted mb-6">{t.simurghMusicDescription}</p>
                <motion.a
                  href={SIMURGH_SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1DB954] text-white font-semibold hover:bg-[#1ed760] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  {t.simurghListenOnSpotify}
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
