"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { companyInfo } from "@/data/company";
import { useLanguage } from "./Language";

const initial = { name: "", phone: "", email: "", service: "", buildingType: "", location: "", message: "", website: "" };

const serviceOptions = [
  { value: "New elevator installation", en: "New elevator installation", ar: "تركيب مصعد جديد" },
  { value: "Elevator repair", en: "Elevator repair", ar: "إصلاح مصعد" },
  { value: "Elevator maintenance", en: "Elevator maintenance", ar: "صيانة مصعد" },
  { value: "Elevator modernization", en: "Elevator modernization", ar: "تحديث مصعد" },
  { value: "Elevator safety inspection", en: "Elevator safety inspection", ar: "فحص سلامة المصعد" },
  { value: "Request a quotation", en: "Request a quotation", ar: "طلب عرض سعر" },
];

const buildingOptions = [
  { value: "Residential building", en: "Residential building", ar: "مبنى سكني" },
  { value: "Commercial building", en: "Commercial building", ar: "مبنى تجاري" },
  { value: "Office building", en: "Office building", ar: "مبنى مكاتب" },
  { value: "Hotel", en: "Hotel", ar: "فندق" },
  { value: "Other", en: "Other", ar: "أخرى" },
];

export function ContactForm() {
  const { language } = useLanguage();
  const ar = language === "ar";
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const update = (key: string, value: string) => setForm({ ...form, [key]: value });

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send your request.");
      setStatus(ar ? "شكرًا لك. تم إرسال طلبك إلى Gentle Elevators." : data.message);
      setForm(initial);
    } catch {
      setStatus(ar ? "تعذر إرسال طلبك. يرجى التواصل معنا عبر واتساب أو الاتصال بنا." : "We could not send your inquiry. Please try WhatsApp or call us.");
    } finally {
      setBusy(false);
    }
  }

  const whatsappMessage = encodeURIComponent(ar
    ? `مرحبًا Gentle Elevators. اسمي ${form.name || "[الاسم]"}. أحتاج إلى ${form.service || "[الخدمة]"} لمبنى من نوع ${form.buildingType || "[نوع المبنى]"} في ${form.location || "[الموقع]"}.`
    : `Hello Gentle Elevators. My name is ${form.name || "[name]"}. I need ${form.service || "[service]"} for a ${form.buildingType || "[building type]"} located in ${form.location || "[location]"}.`);

  return <div>
    <form className="contact-form" onSubmit={submit} id="quote">
      <div className="honeypot"><label>Website<input value={form.website} onChange={event => update("website", event.target.value)} tabIndex={-1} autoComplete="off" /></label></div>
      <label>{ar ? "الاسم الكامل" : "Full name"}<input required minLength={2} value={form.name} onChange={event => update("name", event.target.value)} placeholder={ar ? "الاسم الكامل" : "Your full name"} /></label>
      <label>{ar ? "رقم الهاتف" : "Phone number"}<input required value={form.phone} onChange={event => update("phone", event.target.value)} placeholder={ar ? "رقم الهاتف" : "Your phone number"} /></label>
      <label>{ar ? "البريد الإلكتروني" : "Email address"}<input type="email" value={form.email} onChange={event => update("email", event.target.value)} placeholder="you@example.com" /></label>
      <label>{ar ? "الخدمة المطلوبة" : "Service needed"}<select required value={form.service} onChange={event => update("service", event.target.value)}><option value="">{ar ? "اختر خدمة" : "Select a service"}</option>{serviceOptions.map(option => <option key={option.value} value={option.value}>{ar ? option.ar : option.en}</option>)}</select></label>
      <label>{ar ? "نوع المبنى" : "Building type"}<select required value={form.buildingType} onChange={event => update("buildingType", event.target.value)}><option value="">{ar ? "اختر نوع المبنى" : "Select building type"}</option>{buildingOptions.map(option => <option key={option.value} value={option.value}>{ar ? option.ar : option.en}</option>)}</select></label>
      <label>{ar ? "الموقع" : "Location"}<input required value={form.location} onChange={event => update("location", event.target.value)} placeholder={ar ? "موقع المشروع" : "Project location"} /></label>
      <label className="full">{ar ? "الرسالة" : "Message"}<textarea rows={5} value={form.message} onChange={event => update("message", event.target.value)} placeholder={ar ? "أخبرنا كيف يمكننا مساعدتك" : "Tell us how we can help"} /></label>
      <button disabled={busy} className="button button-gold full" type="submit">{busy ? (ar ? "جارٍ الإرسال..." : "Sending...") : (ar ? "إرسال الطلب" : "Send inquiry")}<Send size={18} /></button>
      {status && <p className="form-status full" role="status">{status}</p>}
    </form>
    <a className="whatsapp-alt" target="_blank" rel="noreferrer" href={`https://wa.me/${companyInfo.whatsappDigits}?text=${whatsappMessage}`}>{ar ? "تفضّل واتساب؟ أرسل هذه التفاصيل مباشرة." : "Prefer WhatsApp? Send these details directly."}</a>
  </div>;
}
