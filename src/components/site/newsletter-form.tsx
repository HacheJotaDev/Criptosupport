"use client";

import { useState } from "react";
import Link from "next/link";
import { Info, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

/**
 * Visual demo form for "The CryptoSupport Briefing".
 *
 * IMPORTANT: this form is exclusively a front-end demonstration.
 * - It does NOT store, send or process any data.
 * - It does NOT call any API or external service.
 * - It does NOT use localStorage, cookies or analytics.
 * - It does NOT pretend a subscription was completed: on submit it clearly
 *   explains that the form is a demo and subscriptions are not enabled yet.
 * All state lives in React memory and disappears on navigation.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No data is collected, stored or transmitted anywhere.
    setShowDemoNotice(true);
    setEmail("");
    setConsent(false);
  }

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit} noValidate={false} className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <Label htmlFor="newsletter-email" className="sr-only">
              Email address
            </Label>
            <Input
              id="newsletter-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-slate-500 focus-visible:ring-brand-blue/60"
            />
          </div>
          <Button
            type="submit"
            className="h-12 rounded-xl px-6 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
            style={{ backgroundImage: "linear-gradient(135deg, #4C7DFF 0%, #8B5CF6 100%)" }}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Subscribe
          </Button>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="newsletter-consent"
            name="consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked === true)}
            className="mt-0.5 border-white/25 data-[state=checked]:border-brand-blue data-[state=checked]:bg-brand-blue"
            required
          />
          <Label
            htmlFor="newsletter-consent"
            className="text-sm font-normal leading-relaxed text-slate-400"
          >
            I agree to receive educational updates from CryptoSupport by email
            and I have read the{" "}
            <Link
              href="/privacy"
              className="font-medium text-brand-blue-soft underline-offset-4 hover:underline"
            >
              privacy policy
            </Link>
            . I can withdraw my consent at any time.
          </Label>
        </div>
      </form>

      {showDemoNotice && (
        <div
          role="status"
          aria-live="polite"
          className="mt-5 flex items-start gap-3 rounded-xl border border-brand-blue/30 bg-brand-blue/10 p-4"
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue-soft" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-slate-200">
            <span className="font-semibold text-white">
              This form is a demonstration.
            </span>{" "}
            Newsletter subscriptions are not enabled yet: no email address or
            consent information has been stored, sent or processed. When the
            newsletter launches, this section will be updated.
          </p>
        </div>
      )}
    </div>
  );
}
