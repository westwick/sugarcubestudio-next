import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AppCard from "@/components/AppCard";

export const metadata: Metadata = {
  title: "Apps",
  description: "Explore our apps - Simurgh and Nowruz. Available on iOS and Android.",
};

export default function AppsPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Applications"
        title="Apps that inspire and connect"
        description="Discover immersive experiences that bring culture, history, and adventure to life."
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AppCard
              title="Simurgh"
              description="Experience the epic adventure of Simurgh, where myth, history, and reality collide in a fight for freedom that will define the future of a nation."
              image="/images/simurgh/2024-10-16-08h22m32s112.png"
              href="/apps/simurgh"
              badge="Coming Soon"
              badgeColor="primary"
            />
            <AppCard
              title="Nowruz"
              description="Celebrate the rich cultural heritage of Iran with the Nowruz app, your guide to the traditions, rituals, and festivities of Persian holidays."
              image="/images/nowruz/nowruz_ss1.jpg"
              href="/apps/nowruz"
              badge="Available"
              badgeColor="green"
            />
          </div>
        </div>
      </section>
    </>
  );
}
