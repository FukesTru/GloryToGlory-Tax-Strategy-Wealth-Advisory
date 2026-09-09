import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * Forwards submissions to CONTACT_WEBHOOK_URL when configured (Formspree,
 * Zapier, Make, a Resend/SendGrid function, a CRM…). Without it, the
 * submission is logged server-side so the form still "works" in staging.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: silently accept so bots learn nothing.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const service = String(body.service ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const locale = String(body.locale ?? "en");

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const payload = {
    name,
    email,
    phone,
    service,
    message: message.slice(0, 5000),
    locale,
    submittedAt: new Date().toISOString(),
    source: "glorytoglory.com/contact",
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[contact] webhook failed", res.status);
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }
  } else {
    console.info("[contact] submission (no CONTACT_WEBHOOK_URL configured)", payload);
  }

  return NextResponse.json({ ok: true });
}
