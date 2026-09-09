"use client";

import { useState, type FormEvent } from "react";
import { UI } from "@/content/site";
import { useLocale } from "./LocaleProvider";

interface Option {
  value: string;
  label: string;
}

/** Contact form: name, email, phone, service interest, message. Posts to /api/contact. */
export function ContactForm({ services }: { services: Option[] }) {
  const locale = useLocale();
  const t = UI[locale].form;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-lg border border-cream-300 bg-cream-50 px-4 py-3 text-[0.95rem] text-ink-900 placeholder:text-ink-300 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30";
  const label = "mb-1.5 block text-sm font-medium text-navy-900";

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-600/40 bg-emerald-50 p-8 text-center">
        <p className="text-lg font-medium text-emerald-700">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="space-y-5">
      {/* Honeypot — bots fill it, humans never see it. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            {t.name}
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            {t.email}
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={label}>
            {t.phone} <span className="font-normal text-ink-500">({t.optional})</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="service" className={label}>
            {t.service}
          </label>
          <select id="service" name="service" required defaultValue="" className={field}>
            <option value="" disabled>
              {t.servicePlaceholder}
            </option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          {t.message}
        </label>
        <textarea id="message" name="message" rows={5} required className={field} />
      </div>

      <p className="text-xs leading-relaxed text-ink-500">{t.consent}</p>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {t.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}
