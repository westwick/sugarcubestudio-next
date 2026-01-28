"use client";

import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { FadeIn, ScaleIn } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

export default function GameTesterPage() {
  const { t, isRTL } = useLanguage();

  const benefits = [
    t.testerBenefit1,
    t.testerBenefit2,
    t.testerBenefit3,
    t.testerBenefit4,
  ];

  return (
    <>
      <PageHeader
        subtitle={t.testerPageSubtitle}
        title={t.testerPageTitle}
        description={t.testerPageDescription}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              <FadeIn direction={isRTL ? "right" : "left"} className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {t.testerMainTitle}
                </h2>
                
                <div className="space-y-6 text-muted leading-relaxed">
                  <p>{t.testerParagraph1}</p>
                  <p>{t.testerParagraph2}</p>
                  <p>{t.testerParagraph3}</p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{t.testerBenefitsTitle}</h3>
                  <ul className="space-y-3">
                    {benefits.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              
              <ScaleIn delay={0.2} className="md:col-span-2">
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">{t.becomeTester}</h3>
                  <p className="text-sm text-muted mb-6">
                    {t.testerCardDescription}
                  </p>
                  <Button 
                    href="https://forms.gle/BvWwjnx3xT6Njior8" 
                    external 
                    className="w-full"
                    icon={
                      <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    }
                  >
                    {t.signUpNow}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    {t.testerTime}
                  </p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
