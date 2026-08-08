"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { companyInfo } from "@/data/company";

const initial = {
  name: "",
  phone: "",
  email: "",
  service: "",
  buildingType: "",
  location: "",
  message: "",
  website: "",
};

const serviceOptions = [
  "New elevator installation",
  "Elevator repair",
  "Elevator maintenance",
  "Elevator modernization",
  "Elevator safety inspection",
  "Request a quotation",
];

const buildingOptions = [
  "Residential building",
  "Commercial building",
  "Office building",
  "Hotel",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send your request.");
      setStatus(data.message);
      setForm(initial);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send your request.");
    } finally {
      setBusy(false);
    }
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Gentle Elevators. My name is ${form.name || "[name]"}. I need ${form.service || "[service]"} for a ${form.buildingType || "[building type]"} located in ${form.location || "[location]"}.`,
  );

  return <div>
    <form className="contact-form" onSubmit={submit} id="quote">
      <div className="honeypot"><label>Website<input value={form.website} onChange={event => update("website", event.target.value)} tabIndex={-1} autoComplete="off" /></label></div>
      <label>Full name<input required minLength={2} value={form.name} onChange={event => update("name", event.target.value)} placeholder="Your full name" /></label>
      <label>Phone number<input required value={form.phone} onChange={event => update("phone", event.target.value)} placeholder="Your phone number" /></label>
      <label>Email address<input type="email" value={form.email} onChange={event => update("email", event.target.value)} placeholder="you@example.com" /></label>
      <label>Service needed<select required value={form.service} onChange={event => update("service", event.target.value)}><option value="">Select a service</option>{serviceOptions.map(option => <option key={option}>{option}</option>)}</select></label>
      <label>Building type<select required value={form.buildingType} onChange={event => update("buildingType", event.target.value)}><option value="">Select building type</option>{buildingOptions.map(option => <option key={option}>{option}</option>)}</select></label>
      <label>Location<input required value={form.location} onChange={event => update("location", event.target.value)} placeholder="Project location" /></label>
      <label className="full">Message<textarea rows={5} value={form.message} onChange={event => update("message", event.target.value)} placeholder="Tell us how we can help" /></label>
      <button disabled={busy} className="button button-gold full" type="submit">{busy ? "Sending..." : "Send inquiry"}<Send size={18} /></button>
      {status && <p className="form-status full" role="status">{status}</p>}
    </form>
    <a className="whatsapp-alt" target="_blank" rel="noreferrer" href={`https://wa.me/${companyInfo.whatsappDigits}?text=${whatsappMessage}`}>Prefer WhatsApp? Send these details directly.</a>
  </div>;
}
