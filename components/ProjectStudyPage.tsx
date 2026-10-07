import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectStudyCards from '@/components/ProjectStudyCards';
import { VideoPlayer } from '@/components/MediaShowcase';
import { findProjectStudy } from '@/data/project-studies';
import { MAINTENANCE_VIDEO } from '@/data/maintenance-video';
import { BUSINESS_ID, SITE_URL, jsonLdText } from '@/lib/seo';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function ProjectStudyPage({ slug }: { slug: string }) {
  const study = findProjectStudy(slug);
  if (!study) notFound();
  const url = `${SITE_URL}/portfolio/${study.slug}`;
  const graph = [
    { '@type': 'Article', '@id': `${url}#article`, headline: study.heading, description: study.description,
      mainEntityOfPage: url, url, image: [study.hero, ...study.photos].map(photo => `${SITE_URL}${photo.src}`),
      author: { '@id': BUSINESS_ID }, publisher: { '@id': BUSINESS_ID }, datePublished: '2026-10-08',
      inLanguage: 'en-MY', about: study.services.map(service => ({ '@id': `${SITE_URL}/services/${service.slug}#service` })),
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${SITE_URL}/portfolio` },
      { '@type': 'ListItem', position: 3, name: study.name, item: url },
    ] },
    ...(study.video ? [{ '@type': 'VideoObject', '@id': `${url}#maintenance-video`, name: MAINTENANCE_VIDEO.title,
      description: 'Original Promanage video introducing common-area defects, pavement repairs, fire-door replacement, plumbing, wet works and waterproofing for building management.',
      thumbnailUrl: [`${SITE_URL}${MAINTENANCE_VIDEO.poster}`], contentUrl: `${SITE_URL}${MAINTENANCE_VIDEO.src}`,
      uploadDate: MAINTENANCE_VIDEO.uploadDate, duration: MAINTENANCE_VIDEO.duration, inLanguage: 'en',
      publisher: { '@id': BUSINESS_ID }, transcript: MAINTENANCE_VIDEO.transcript.map(cue => cue.text).join(' '),
      isPartOf: { '@id': `${url}#article` },
    }] : []),
  ];
  return <div className="site-shell"><Navbar /><main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText({ '@context': 'https://schema.org', '@graph': graph }) }} />
    <section className="page-heading"><div className="container"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/portfolio">Portfolio</Link><span aria-hidden="true">/</span><span>{study.name}</span></nav><p className="eyebrow">{study.type}</p><h1>{study.heading}</h1><p className="section-copy">{study.intro}</p></div></section>
    <section className="section"><div className="container study-intro"><div>
      <dl className="study-facts"><div><dt>{study.video ? 'Collection' : 'Location'}</dt><dd>{study.location}</dd></div><div><dt>Work shown</dt><dd>{study.type}</dd></div><div><dt>Source material</dt><dd>{study.evidence}</dd></div></dl>
      <nav className="study-jump" aria-label="On this page"><a className="text-link" href="#project-details">Read the project details <ArrowRight size={18} aria-hidden="true" /></a><a className="text-link" href="#project-images">View the photographs <ArrowRight size={18} aria-hidden="true" /></a>{study.video && <a className="text-link" href="#video-transcript">Read the video transcript <ArrowRight size={18} aria-hidden="true" /></a>}</nav>
    </div>{study.video ? <div><VideoPlayer {...MAINTENANCE_VIDEO} caption="Watch the maintenance showcase" /><p className="study-caption">Original maintenance video · 55 seconds · English captions available</p></div> : <figure className="study-hero"><img src={study.hero.src} alt={study.hero.alt} width={1200} height={900} fetchPriority="high" /><figcaption>{study.hero.caption}</figcaption></figure>}</div></section>
    <section className="section" id="project-details"><div className="container study-details">{study.sections.map(section => <div key={section.heading}><h2>{section.heading}</h2><p className="section-copy">{section.text}</p></div>)}</div></section>
    <section className="section" id="project-images"><div className="container"><p className="eyebrow">A Closer Look</p><h2>{study.video ? 'Repair examples from the video' : 'Project photographs & details'}</h2><div className="study-photos">{study.photos.map(photo => <figure key={photo.src}><a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${photo.alt}`}><img src={photo.src} alt={photo.alt} width={1000} height={750} loading="lazy" /></a><figcaption>{photo.caption}</figcaption></figure>)}</div></div></section>
    {study.video && <section className="section" id="video-transcript"><div className="container study-transcript"><p className="eyebrow">Watch or Read</p><h2>Maintenance video transcript</h2><p className="section-copy">The spoken introduction, lightly edited for punctuation and readability. The original video appears above, with English captions available in the player.</p><ol>{MAINTENANCE_VIDEO.transcript.map(cue => <li key={cue.time}><span className="transcript-time">{cue.time}</span><p>{cue.text}</p></li>)}</ol><a className="text-link" href={MAINTENANCE_VIDEO.captions} download>Download English captions <ArrowRight size={18} aria-hidden="true" /></a></div></section>}
    <section className="section"><div className="container study-enquiry"><div><p className="eyebrow">Your Next Project</p><h2>{study.video ? 'Share your maintenance requirements' : 'Discuss a similar project'}</h2><p className="section-copy">Send these details to help us understand the work you need.</p><ul>{study.preparation.map(item => <li key={item}>{item}</li>)}</ul><a className="button button-gold" href={getWhatsAppUrl(`Hello Benedict Tan, I would like to discuss ${study.type.toLowerCase()} after viewing your ${study.name} page.`)} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} aria-hidden="true" />Discuss on WhatsApp</a></div><div><h3>Explore the related services</h3><nav className="study-jump" aria-label="Related services">{study.services.map(service => <Link key={service.slug} className="text-link" href={`/services/${service.slug}`}>{service.label} <ArrowRight size={19} aria-hidden="true" /></Link>)}<Link className="text-link" href="/contact">Contact details & enquiry <ArrowRight size={19} aria-hidden="true" /></Link></nav><p className="section-copy">Promanage Builders is based in SS2, Petaling Jaya, and serves Petaling Jaya and Klang Valley.</p></div></div></section>
    <section className="section"><div className="container"><p className="eyebrow">More From Our Portfolio</p><h2>Explore another project</h2><ProjectStudyCards exclude={study.slug} /></div></section>
  </main><Footer /></div>;
}
