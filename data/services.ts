import { Building2, Wrench, Settings, RefreshCw, ShieldCheck } from "lucide-react";

export const services = [
  {
    slug: "installation", title: "Elevator Installation", titleAr: "تركيب المصاعد", icon: Building2, imagePosition: "50% 17%",
    description: "Complete elevator installation for residential, commercial, office, and hospitality buildings.",
    descriptionAr: "تركيب متكامل للمصاعد في المباني السكنية والتجارية والمكاتب والفنادق.",
    items: ["Site inspection", "Technical planning", "Elevator system selection", "Shaft and building requirement review", "Mechanical installation", "Electrical installation", "Cabin installation", "Door installation", "Safety testing", "Final handover"],
    itemsAr: ["معاينة الموقع", "التخطيط الفني", "اختيار نظام المصعد", "مراجعة متطلبات البئر والمبنى", "التركيب الميكانيكي", "التركيب الكهربائي", "تركيب المقصورة", "تركيب الأبواب", "اختبارات السلامة", "التسليم النهائي"],
  },
  {
    slug: "repair", title: "Elevator Repair", titleAr: "إصلاح المصاعد", icon: Wrench, imagePosition: "82% 49%",
    description: "Fast diagnosis and professional repair for elevator faults, breakdowns, and performance problems.",
    descriptionAr: "تشخيص سريع وإصلاح احترافي لأعطال المصاعد ومشكلات التشغيل والأداء.",
    items: ["Elevator breakdown repair", "Door problems", "Control panel faults", "Motor problems", "Electrical faults", "Sensor problems", "Unusual noise", "Slow operation", "Leveling problems", "Emergency troubleshooting"],
    itemsAr: ["إصلاح أعطال المصعد", "مشكلات الأبواب", "أعطال لوحة التحكم", "مشكلات المحرك", "الأعطال الكهربائية", "مشكلات الحساسات", "الضوضاء غير المعتادة", "بطء التشغيل", "مشكلات التوقف عند الطوابق", "معالجة الأعطال الطارئة"],
  },
  {
    slug: "maintenance", title: "Elevator Maintenance", titleAr: "صيانة المصاعد", icon: Settings, imagePosition: "76% 48%",
    description: "Regular preventive maintenance to improve safety, reduce breakdowns, and extend elevator lifespan.",
    descriptionAr: "صيانة وقائية منتظمة لتعزيز السلامة وتقليل الأعطال وإطالة عمر المصعد.",
    items: ["Preventive maintenance", "Safety inspections", "Mechanical checks", "Electrical checks", "Door adjustment", "Motor inspection", "Lubrication", "Control system checks", "Performance testing", "Maintenance reports"],
    itemsAr: ["الصيانة الوقائية", "فحوصات السلامة", "الفحوصات الميكانيكية", "الفحوصات الكهربائية", "ضبط الأبواب", "فحص المحرك", "التشحيم", "فحص نظام التحكم", "اختبار الأداء", "تقارير الصيانة"],
  },
  {
    slug: "modernization", title: "Elevator Modernization", titleAr: "تحديث المصاعد", icon: RefreshCw, imagePosition: "38% 48%",
    description: "Upgrade old elevator systems, controls, cabins, doors, motors, and safety components.",
    descriptionAr: "تحديث أنظمة المصاعد القديمة ولوحات التحكم والمقصورات والأبواب والمحركات ومكوّنات السلامة.",
    items: ["Cabin renovation", "Control system upgrade", "Door replacement", "Motor replacement", "Lighting upgrade", "Button and display replacement", "Safety system upgrade", "Interior finishing", "Energy-efficiency improvements"],
    itemsAr: ["تجديد المقصورة", "تحديث نظام التحكم", "استبدال الأبواب", "استبدال المحرك", "تحديث الإضاءة", "استبدال الأزرار والشاشات", "تحديث نظام السلامة", "التشطيبات الداخلية", "تحسين كفاءة الطاقة"],
  },
  {
    slug: "inspection", title: "Safety Inspection", titleAr: "فحص السلامة", icon: ShieldCheck, imagePosition: "25% 29%",
    description: "Thorough checks focused on safe, dependable elevator operation.",
    descriptionAr: "فحوصات شاملة لضمان تشغيل المصعد بأمان وموثوقية.",
    items: ["Operational checks", "Safety component review", "Door and leveling checks", "Technical report"],
    itemsAr: ["فحوصات التشغيل", "مراجعة مكوّنات السلامة", "فحص الأبواب والتوقف عند الطوابق", "تقرير فني"],
  },
];
