"use client";

import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { FadeIn } from "@/components/animations";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Contact Us"
        title="Get in touch"
        description="Have a question or feedback? We'd love to hear from you."
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <FadeIn>
              <p className="text-muted text-center mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
