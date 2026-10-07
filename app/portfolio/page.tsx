import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectStudyCards from '@/components/ProjectStudyCards';
export const metadata = pageMetadata('Renovation & Interior Design Portfolio | Promanage Builders', 'Explore Promanage residential, commercial and construction projects across Klang Valley, with original project photographs and 3D design concepts.', '/portfolio');
export default function PortfolioPage(){return <div className="site-shell"><Navbar /><main id="main-content"><section className="page-heading"><div className="container"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Portfolio</span></nav><p className="eyebrow">Our Work</p><h1>Spaces with a story.</h1><p className="section-copy">Explore homes, workplaces and construction projects. Swipe through each project&apos;s original images, or open the gallery for a closer look.</p></div></section><section className="section" aria-label="Detailed project showcases"><div className="container"><p className="eyebrow">Project Details</p><h2>Take a closer look at our work</h2><ProjectStudyCards /></div></section><section className="section" aria-label="Project portfolio"><div className="container"><ProjectGallery /></div></section></main><Footer /></div>;}
