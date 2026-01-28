"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

/* TODO: Replace with actual store URLs when available */
const SIMURGH_IOS_URL = "#";
const SIMURGH_ANDROID_URL = "#";

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
                <p className="text-muted mb-8">
                  {t.simurghMusicDescription}
                </p>

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
    </>
  );
}
