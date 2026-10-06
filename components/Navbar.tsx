'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, MessageCircle, X } from 'lucide-react';
import Logo from './Logo';
import { getWhatsAppUrl } from '@/lib/whatsapp';
const links = [['About', '/#about'], ['Services', '/services'], ['Portfolio', '/portfolio'], ['Contact', '/contact']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', escape); return () => window.removeEventListener('keydown', escape); }, [open]);
  return <header className="site-header"><a className="skip-link" href="#main-content">Skip to content</a><div className="container header-inner">
    <Link href="/" aria-label="Promanage Builders home" className="brand-link"><Logo variant="light" showRegistration={false} /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([name, href]) => <Link key={name} href={href}>{name}</Link>)}</nav>
    <a className="button button-gold header-enquiry" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} aria-hidden="true" /><span>WhatsApp</span></a>
    <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </div>{open && <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation">{links.map(([name, href]) => <Link key={name} href={href} onClick={() => setOpen(false)}>{name}</Link>)}<a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Discuss on WhatsApp <MessageCircle aria-hidden="true" /></a></nav>}
  </header>;
}
