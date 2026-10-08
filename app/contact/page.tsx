import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquirySection from '@/components/EnquirySection';
export const metadata = pageMetadata('Contact Renovation Contractor Seri Kembangan | Promanage', 'Visit Promanage Builders at No. 38, Jalan SE03, Sunway Eastwood, Equine Park, 43300 Seri Kembangan, Selangor for renovation and maintenance enquiries.', '/contact');
export default function ContactPage(){return <div className="site-shell"><Navbar /><main id="main-content"><section className="page-heading"><div className="container"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Contact</span></nav><p className="eyebrow">Let’s Build Together</p><h1>Your ideas.<br />Our next project.</h1><p className="section-copy">Discuss your renovation, house extension or building maintenance project with Benedict Tan. Our office is in Sunway Eastwood, Equine Park, Seri Kembangan, and we serve Petaling Jaya and Klang Valley.</p></div></section><EnquirySection /></main><Footer /></div>;}
