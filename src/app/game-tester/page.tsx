"use client";

import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { FadeIn, ScaleIn } from "@/components/animations";

export default function GameTesterPage() {
  return (
    <>
      <PageHeader
        subtitle="Beta Testing"
        title="Join the Simurgh Movement"
        description="Be part of something bigger. Help shape the future of our flagship game."
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              <FadeIn direction="left" className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  The voice of a nation has been silenced for too long.
                </h2>
                
                <div className="space-y-6 text-muted leading-relaxed">
                  <p>
                    Imagine the courage it takes to stand up against a system built on
                    tyranny and oppression. Simurgh is that courage, brought to life. It
                    is an unyielding and passionate tribute to the people of Iran, a
                    game born from the deep desire to see their beautiful country
                    finally free.
                  </p>
                  
                  <p>
                    This isn&apos;t just another mobile beat-&apos;em-up. It&apos;s a statement. A
                    declaration of war against the oppressive rulers who have held a
                    nation captive. With stunning visuals and fluid, intense combat, you
                    won&apos;t just be playing a game—you&apos;ll be part of a movement.
                  </p>
                  
                  <p>
                    Join the fight. Take control of Iran&apos;s destiny and become the hero 
                    a country so desperately needs. The battle for freedom starts now.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">What you&apos;ll get:</h3>
                  <ul className="space-y-3">
                    {[
                      "Early access to new builds and features",
                      "Direct communication with the development team",
                      "Your name in the credits as a beta tester",
                      "Exclusive beta tester Discord role",
                    ].map((item, index) => (
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
                  <h3 className="font-bold text-xl text-foreground mb-2">Become a Tester</h3>
                  <p className="text-sm text-muted mb-6">
                    Help shape the future of Simurgh by providing valuable feedback 
                    during development.
                  </p>
                  <Button 
                    href="https://forms.gle/BvWwjnx3xT6Njior8" 
                    external 
                    className="w-full"
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    }
                  >
                    Sign Up Now
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Takes less than 2 minutes
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
