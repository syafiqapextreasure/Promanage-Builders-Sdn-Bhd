import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ProjectGallery from '@/components/ProjectGallery';
export const metadata: Metadata = { title: 'Project Portfolio | Promanage Builders Sdn Bhd', description: 'Explore residential, commercial, renovation and construction projects with original project image galleries.' };
export default function PortfolioPage() {
 return <div className="flex min-h-screen flex-col bg-[#FAF8F5] text-stone-900"><Navbar /><main id="main-content" className="flex-1">
  <section className="border-b border-stone-200 bg-gradient-to-b from-[#FAF8F5] via-[#F3EFE6] to-[#FAF8F5] py-14 md:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
   <nav aria-label="Breadcrumb" className="mb-5 flex gap-2 text-lg text-stone-600"><Link href="/" className="hover:underline">Home</Link><span aria-hidden="true">/</span><span>Portfolio</span></nav>
   <p className="font-bold uppercase tracking-widest text-[#8A6A2C]">Our Work</p>
   <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#1F2722] sm:text-5xl lg:text-6xl">Complete Project Gallery</h1>
   <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-700 sm:text-xl">Discover homes, workplaces, renovation work and design concepts. Each project brings together its original images in one gallery. Swipe or use the arrows to explore, and enlarge any image for a closer look.</p>
  </div></section>
  <section aria-label="Project portfolio" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><ProjectGallery /></section>
 </main><Footer /><FloatingWhatsApp /></div>;
}
