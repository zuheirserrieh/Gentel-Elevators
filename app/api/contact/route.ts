const clean = (value: unknown, max = 500) => String(value ?? "").replace(/[<>]/g, "").trim().slice(0, max);
const hits = new Map<string, { count: number; reset: number }>();
const defaultRecipient = "gentle.elevators@gmail.com";
const defaultSiteUrl = "https://gentleelevators.com";

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > 16_000) return Response.json({ error: "Request is too large." }, { status: 413 });

    const ip = request.headers.get("cf-connecting-ip") || "local";
    const now = Date.now();
    const entry = hits.get(ip);
    if (entry && entry.reset > now && entry.count >= 5) return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    hits.set(ip, { count: entry && entry.reset > now ? entry.count + 1 : 1, reset: now + 60_000 });

    const body = await request.json();
    if (clean(body.website)) return Response.json({ message: "Request received." });

    const data = {
      name: clean(body.name, 100),
      phone: clean(body.phone, 50),
      email: clean(body.email, 120),
      service: clean(body.service, 100),
      buildingType: clean(body.buildingType, 100),
      location: clean(body.location, 150),
      message: clean(body.message, 1000),
    };
    if (data.name.length < 2 || !data.phone || !data.service || !data.buildingType || !data.location) return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return Response.json({ error: "Please enter a valid email address." }, { status: 400 });

    const recipient = process.env.FORM_DELIVERY_EMAIL || defaultRecipient;
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, "");
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;
    const delivery = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: siteUrl,
        Referer: `${siteUrl}/contact`,
      },
      body: JSON.stringify({
        _subject: `New Gentle Elevators inquiry: ${data.service}`,
        _template: "table",
        _replyto: data.email || recipient,
        "Full name": data.name,
        "Phone number": data.phone,
        "Email address": data.email || "Not provided",
        "Service needed": data.service,
        "Building type": data.buildingType,
        "Project location": data.location,
        Message: data.message || "No additional message",
      }),
      signal: AbortSignal.timeout(12_000),
    });
    const result = await delivery.json().catch(() => null) as { success?: boolean | string; message?: string } | null;
    const rejected = !delivery.ok || result?.success === false || result?.success === "false";
    if (rejected && result?.message?.toLowerCase().includes("activation")) {
      return Response.json(
        { error: "Email delivery needs one-time activation. Please open gentle.elevators@gmail.com and click the FormSubmit activation link." },
        { status: 503 },
      );
    }
    if (rejected) throw new Error("Delivery failed");

    return Response.json({ message: "Thank you. Your inquiry has been sent to Gentle Elevators." });
  } catch {
    return Response.json({ error: "We could not send your inquiry. Please try WhatsApp or call us." }, { status: 502 });
  }
}
