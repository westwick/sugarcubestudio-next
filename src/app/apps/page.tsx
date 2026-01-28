"use client";

import PageHeader from "@/components/PageHeader";
import AppCard from "@/components/AppCard";
import { useLanguage } from "@/lib/i18n";

export default function AppsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        subtitle={t.appsPageSubtitle}
        title={t.appsPageTitle}
        description={t.appsPageDescription}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AppCard
              title={t.simurghTitle}
              description={t.simurghLongDesc}
              image="/images/simurgh/2024-10-16-08h22m32s112.png"
              href="/apps/simurgh"
              badge={t.comingSoon}
              badgeColor="primary"
            />
            <AppCard
              title={t.nowruzTitle}
              description={t.nowruzLongDesc}
              image="/images/nowruz/nowruz_ss1.jpg"
              href="/apps/nowruz"
              badge={t.available}
              badgeColor="green"
            />
          </div>
        </div>
      </section>
    </>
  );
}
