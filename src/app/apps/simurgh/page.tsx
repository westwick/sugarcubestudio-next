"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Button from "@/components/Button";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations";

const screenshots = [
  "/images/simurgh/2024-10-16-08h22m32s112.png",
  "/images/simurgh/2024-10-16-08h27m52s339.png",
  "/images/simurgh/2024-10-16-08h32m17s574.png",
];

const features = [
  "Intense beat-em-up gameplay",
  "Stunning Persian-inspired visuals",
  "Compelling storyline",
  "Multiple challenging levels",
  "Original Persian soundtrack",
];

export default function SimurghPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Applications"
        title="Simurgh"
        description="An epic beat-em-up adventure inspired by Persian mythology."
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <FadeIn direction="left" className="md:col-span-2">
                <p className="text-lg text-muted leading-relaxed mb-8">
                  Simurgh, the mythical bird of Persian mythology, inspires this
                  action packed experience. Step into the streets in this intense
                  beat-em-up adventure. Play as a fearless woman challenging the
                  status quo, fighting for her right to live freely.
                </p>

                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Screenshots
                </h2>
                <div className="grid grid-cols-3 gap-3 mb-12">
                  {screenshots.map((src, index) => (
                    <div
                      key={index}
                      className="group relative aspect-video rounded-xl overflow-hidden bg-section-alt border border-border"
                    >
                      <Image
                        src={src}
                        alt={`Simurgh Screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Original Music
                </h2>
                <p className="text-muted mb-8">
                  Simurgh features an original soundtrack using traditional Persian
                  instruments such as the Ney, Santur, and Tombak to craft a unique
                  and immersive musical experience.
                </p>

                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Features
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
                  <h3 className="font-bold text-xl text-foreground mb-2">Availability</h3>
                  <p className="text-primary font-semibold mb-4">Coming Soon</p>
                  <p className="text-sm text-muted mb-6">
                    Sign up for our newsletter to be notified when Simurgh launches.
                  </p>
                  <Button href="/mailing-list" className="w-full">
                    Get Notified
                  </Button>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      Available for iOS and Android
                    </p>
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
