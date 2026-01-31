"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

const screenshots = [
  "/images/nowruz/nowruzapp1.jpg",
  "/images/nowruz/nowruzapp2.jpg",
  "/images/nowruz/nowruzapp3.jpg",
];

export default function NowruzPage() {
  const { t, isRTL } = useLanguage();

  const features = [
    t.nowruzFeature1,
    t.nowruzFeature2,
    t.nowruzFeature3,
    t.nowruzFeature4,
    t.nowruzFeature5,
  ];

  return (
    <>
      <PageHeader
        subtitle={t.nowruzPageSubtitle}
        title={t.nowruzPageTitle}
        description={t.nowruzPageDescription}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <FadeIn direction={isRTL ? "right" : "left"} className="md:col-span-2">
                <p className="text-lg text-muted leading-relaxed mb-8">
                  {t.nowruzAboutText}
                </p>

                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {t.nowruzScreenshots}
                </h2>
                <div className="grid grid-cols-3 gap-4 mb-12">
                  {screenshots.map((src, index) => (
                    <div
                      key={index}
                      className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-section-alt border border-border shadow-lg"
                    >
                      <Image
                        src={src}
                        alt={`${t.nowruzTitle} Screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {t.nowruzFeatures}
                </h2>
                <StaggerContainer className="space-y-3">
                  {features.map((feature, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-center gap-3 text-muted">
                        <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full" />
                        {feature}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>

              <ScaleIn delay={0.2}>
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl">🌸</span>
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
                      href="https://apps.apple.com/us/app/nowruz/id1612753672"
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
                      href="https://play.google.com/store/apps/details?id=com.sugarcubestudio.nowruz"
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
