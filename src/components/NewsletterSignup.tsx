"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { FadeIn } from "@/components/animations";
import { useLanguage } from "@/lib/i18n";

export default function NewsletterSignup() {
  const { t } = useLanguage();
  const [result, setResult] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiKey = process.env.NEXT_PUBLIC_MAILERLITE_API_KEY;
    if (!apiKey) {
      setResult("error");
      return;
    }
    setResult("sending");
    const form = event.currentTarget;
    const email = new FormData(form).get("email") as string;

    try {
      const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }
      setResult("success");
      form.reset();
    } catch {
      setResult("error");
    }
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.newsletterTitle}
          </h2>
          <p className="text-lg text-muted mb-8">
            {t.newsletterDescription}
          </p>
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              name="email"
              placeholder={t.newsletterPlaceholder}
              required
              disabled={result === "sending"}
              className="flex-grow px-5 py-4 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-70"
            />
            <Button type="submit" disabled={result === "sending"}>
              {result === "sending" ? t.mailingSending : t.subscribe}
            </Button>
          </form>
          {(result === "success" || result === "error") ? (
            <p
              className={`text-sm mt-4 ${
                result === "success"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {result === "success" ? t.mailingSuccess : t.mailingError}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground mt-4">
              {t.newsletterPrivacy}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
