import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import EnquirySection from '@/components/EnquirySection';
export const metadata: Metadata = { title: 'Contact Us | Promanage Builders Sdn Bhd', description: 'Contact Benedict Tan about interior design, renovation or construction. Send your project enquiry through WhatsApp.' };
export default function ContactPage() {
 return <div className="flex min-h-screen flex-col bg-[#FAF8F5] text-stone-900"><Navbar /><main id="main-content" className="flex-1">
  <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8"><nav aria-label="Breadcrumb" className="flex gap-2 text-lg text-stone-600"><Link href="/" className="hover:underline">Home</Link><span aria-hidden="true">/</span><span>Contact</span></nav><h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#1F2722] sm:text-5xl">Contact Promanage Builders</h1></div>
  <EnquirySection />
 </main><Footer /><FloatingWhatsApp /></div>;
}
