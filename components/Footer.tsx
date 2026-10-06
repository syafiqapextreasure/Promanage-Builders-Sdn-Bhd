import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { PROMANAGE_CONTACT } from '@/lib/whatsapp';
import CIDBBadge from './CIDBBadge';
export default function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><Link href="/" aria-label="Promanage Builders home"><Logo variant="light" showRegistration={false} size="sm" /></Link><nav aria-label="Footer navigation"><Link href="/#about">About</Link><Link href="/services">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/contact">Contact</Link></nav><div className="footer-contact"><a href="tel:+60163281581"><Phone size={18} aria-hidden="true" />{PROMANAGE_CONTACT.phoneDisplay}</a><a href={PROMANAGE_CONTACT.googleMapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" />Petaling Jaya, Selangor</a></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Promanage Builders Sdn Bhd.</p><p>202401013030 (1558880-H)</p><CIDBBadge /><p>Beautiful spaces. Thoughtfully built.</p></div></div></footer>;
}
