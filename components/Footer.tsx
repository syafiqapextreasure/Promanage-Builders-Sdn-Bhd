import Link from 'next/link';
import { Logo } from './Logo';
import { PROMANAGE_CONTACT, getWhatsAppUrl } from '@/lib/whatsapp';
import { MessageSquare } from 'lucide-react';
export default function Footer() {
 return <footer className="border-t border-stone-800 bg-stone-900 px-4 pb-10 pt-16 text-stone-300 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl">
  <div className="grid gap-10 border-b border-stone-700 pb-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
   <div className="min-w-0 space-y-5"><Link href="/" aria-label="Promanage Builders home"><Logo variant="light" /></Link><p className="max-w-md text-lg leading-relaxed">Interior design, renovation and construction for homes and businesses across Petaling Jaya, Selangor and the Klang Valley.</p><a href={getWhatsAppUrl('Hello Benedict Tan, I would like to discuss a project with Promanage Builders.')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#27482A] px-5 text-lg font-semibold text-white hover:bg-[#1E3720]"><MessageSquare size={20} aria-hidden="true" />WhatsApp Benedict Tan</a></div>
   <nav aria-label="Footer navigation"><h2 className="mb-4 text-lg font-bold text-amber-300">Explore</h2><ul className="space-y-2 text-lg">{[['Home','/'],['About','/#about'],['Services','/services'],['Portfolio','/portfolio'],['Contact','/contact']].map(([label,href])=><li key={href}><Link href={href} className="inline-flex min-h-12 items-center hover:text-white hover:underline">{label}</Link></li>)}</ul></nav>
   <div className="min-w-0 space-y-4 text-lg leading-relaxed"><h2 className="font-bold text-amber-300">Get in Touch</h2><p>Benedict Tan, Managing Director</p><a href="tel:+60163281581" className="block hover:text-white hover:underline">+60 16 328 1581</a><a href={`mailto:${PROMANAGE_CONTACT.email}`} className="block break-words hover:text-white hover:underline">{PROMANAGE_CONTACT.email}</a><p>{PROMANAGE_CONTACT.address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROMANAGE_CONTACT.address)}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center text-amber-200 hover:underline">View on Google Maps</a></div>
  </div>
  <p className="pt-8 text-base leading-relaxed">&copy; {new Date().getFullYear()} {PROMANAGE_CONTACT.companyName}. Registration: {PROMANAGE_CONTACT.registrationNumber}. All rights reserved.</p>
 </div></footer>;
}
