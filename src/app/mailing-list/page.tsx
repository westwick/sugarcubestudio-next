"use client";

import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { FadeIn } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

export default function MailingListPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        subtitle={t.mailingPageSubtitle}
        title={t.mailingPageTitle}
        description={t.mailingPageDescription}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            
            <p className="text-muted mb-8">
              {t.mailingIntro}
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">{t.contactEmail}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.newsletterPlaceholder}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-center text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <Button type="submit" className="w-full">
                {t.subscribe}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-6">
              {t.mailingDisclaimer}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
