"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { FadeIn } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

const WEB3FORMS_ACCESS_KEY = "cd7bf341-488e-443d-933d-a6625f63ae63";

export default function ContactPage() {
  const { t } = useLanguage();
  const [result, setResult] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("success");
      form.reset();
    } else {
      setResult("error");
    }
  };

  return (
    <>
      <PageHeader
        subtitle={t.contactPageSubtitle}
        title={t.contactPageTitle}
        description={t.contactPageDescription}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <FadeIn>
              <p className="text-muted text-center mb-8">
                {t.contactFormIntro}
              </p>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contactName}
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
                    {t.contactEmail}
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
                    {t.contactMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={result === "sending"}>
                  {result === "sending" ? t.contactSending : t.contactSend}
                </Button>
                {(result === "success" || result === "error") && (
                  <p
                    className={`text-center text-sm ${
                      result === "success"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {result === "success" ? t.contactSuccess : t.contactError}
                  </p>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
