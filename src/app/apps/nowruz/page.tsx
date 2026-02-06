"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import AppLandingHero from "@/components/AppLandingHero";
import ImageCarousel from "@/components/ImageCarousel";
import { useLanguage } from "@/lib/i18n";

const NOWRUZ_IOS_URL = "https://apps.apple.com/us/app/nowruz/id1612753672";
const NOWRUZ_ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.sugarcubestudio.nowruz";

const HERO_IMAGE = "/images/nowruz/nowruzapp1.jpg";

const screenshots = [
  "/images/nowruz/nowruzapp1.jpg",
  "/images/nowruz/nowruzapp2.jpg",
  "/images/nowruz/nowruzapp3.jpg",
];

export default function NowruzPage() {
  const { t } = useLanguage();
  const downloadRef = useRef<HTMLDivElement>(null);

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    t.nowruzFeature1,
    t.nowruzFeature2,
    t.nowruzFeature3,
    t.nowruzFeature4,
    t.nowruzFeature5,
  ];

  return (
    <>
      {/* ABOVE THE FOLD - Hero Section */}
      <AppLandingHero
        heroImage={HERO_IMAGE}
        title={t.nowruzTitle}
        headline={t.nowruzHeadline}
        subline={t.nowruzSubline}
        ctaText={t.downloadNow}
        ctaAction={scrollToDownload}
        socialProof={t.nowruzSocialProof}
        socialProof2={t.nowruzSocialProof2}
        accentGradient="from-orange-400 to-pink-500"
      />

      {/* BELOW THE FOLD */}

      {/* Download Section */}
      <section ref={downloadRef} className="py-12 md:py-16 bg-section-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto text-center">
            <FadeIn>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <span className="text-3xl">🌸</span>
                </div>
                <h2 className="font-bold text-2xl text-foreground mb-2">
                  {t.downloadNow}
                </h2>
                <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
                  {t.available}
                </span>
                <p className="text-muted mb-6">{t.availableOnIosAndroid}</p>
                <div className="space-y-3">
                  <motion.a
                    href={NOWRUZ_IOS_URL}
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
                      className="w-full max-w-[200px] mx-auto h-auto"
                    />
                  </motion.a>
                  <motion.a
                    href={NOWRUZ_ANDROID_URL}
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

      {/* Screenshots Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-sm mx-auto">
            <FadeIn className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {t.nowruzScreenshots}
              </h2>
            </FadeIn>
            <FadeIn>
              <ImageCarousel
                images={screenshots}
                altPrefix={`${t.nowruzTitle} Screenshot`}
                aspectRatio="9/16"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features & About Section */}
      <section className="py-12 md:py-16 bg-section-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Features */}
            <FadeIn className="mb-12">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6 text-center">
                {t.nowruzFeatures}
              </h2>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3 text-muted bg-card rounded-lg p-4 border border-border">
                      <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex-shrink-0" />
                      {feature}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>

            {/* About */}
            <FadeIn>
              <p className="text-lg text-muted leading-relaxed text-center">
                {t.nowruzAboutText}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
