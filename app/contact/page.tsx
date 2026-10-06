import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquirySection from '@/components/EnquirySection';
export const metadata:Metadata={title:'Contact Us | Promanage Builders Sdn Bhd',description:'Discuss interior design, renovation, construction or building maintenance with Benedict Tan through WhatsApp.'};
export default function ContactPage(){return <div className="site-shell"><Navbar /><main id="main-content"><section className="page-heading"><div className="container"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Contact</span></nav><p className="eyebrow">Let’s Build Together</p><h1>Your ideas.<br />Our next project.</h1><p className="section-copy">Tell us what you have in mind. We&apos;ll help you take the next step.</p></div></section><EnquirySection /></main><Footer /></div>;}
