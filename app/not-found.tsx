import Link from "next/link"; import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <section className="not-found"><div><span>404</span><h1>THIS FLOOR DOESN’T EXIST</h1><p>The page you requested could not be found.</p><Link className="button button-gold" href="/"><ArrowLeft/>Return home</Link></div></section>}
