"use client";

import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader subtitle={t.privacyPageSubtitle} title={t.privacyPageTitle} />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <p className="text-muted leading-relaxed">
                {t.privacyIntro1}
              </p>

              <p className="text-muted leading-relaxed">
                {t.privacyIntro2}
              </p>

              <p className="text-muted leading-relaxed">
                {t.privacyIntro3}
              </p>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {t.privacyInfoTitle}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t.privacyInfoText}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {t.privacyLogTitle}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t.privacyLogText}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {t.privacyCookiesTitle}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t.privacyCookiesText}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {t.privacyProvidersTitle}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t.privacyProvidersText}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {t.privacySecurityTitle}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t.privacySecurityText}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {t.privacyChildrenTitle}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t.privacyChildrenText}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {t.privacyChangesTitle}
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  {t.privacyChangesText1}
                </p>
                <p className="text-muted leading-relaxed">
                  {t.privacyChangesText2}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {t.privacyContactTitle}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t.privacyContactText}{" "}
                  <a
                    href="mailto:info@sugarcubestudio.com"
                    className="text-primary hover:underline font-medium"
                  >
                    info@sugarcubestudio.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
