import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { T } from "@/components/Language";

export default function NotFound() {
  return <section className="not-found"><div><span>404</span><h1><T en="THIS FLOOR DOESN’T EXIST" ar="هذا الطابق غير موجود" /></h1><p><T en="The page you requested could not be found." ar="تعذر العثور على الصفحة التي طلبتها." /></p><Link className="button button-gold" href="/"><ArrowLeft /><T en="Return home" ar="العودة إلى الرئيسية" /></Link></div></section>;
}
