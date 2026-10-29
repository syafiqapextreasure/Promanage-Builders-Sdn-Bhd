import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MAINTENANCE_VIDEO as video } from '@/data/maintenance-video';
import { BUSINESS_ID, SITE_URL, jsonLdText, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Watch: Building Maintenance & Repairs | Promanage',
  video.description, video.watchPath, video.poster,
);

export default function MaintenanceWatchPage() {
  const url = `${SITE_URL}${video.watchPath}`;
  const videoId = `${url}#video`;
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': url, url, name: video.title, description: video.description,
      mainEntity: { '@id': videoId }, isPartOf: { '@id': `${SITE_URL}/#website` } },
    { '@type': 'VideoObject', '@id': videoId, name: video.title, description: video.description,
      url, mainEntityOfPage: { '@id': url }, contentUrl: `${SITE_URL}${video.src}`,
      thumbnailUrl: [`${SITE_URL}${video.poster}`], uploadDate: video.uploadDate,
      duration: video.duration, inLanguage: 'en', publisher: { '@id': BUSINESS_ID },
      transcript: video.transcript.map(cue => cue.text).join(' ') },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Maintenance video', item: url },
    ] },
  ] };
  return <div className="site-shell"><Navbar /><main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText(structuredData) }} />
    <section className="watch-section"><div className="container watch-container">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Maintenance video</span></nav>
      <h1>Building maintenance & repairs for JMBs, MCs & MOs</h1>
      <div className="video-frame watch-player"><video controls playsInline preload="metadata" poster={video.poster} width={1280} height={720} aria-label={video.title}>
        <source src={video.src} type="video/mp4" />
        <track kind="captions" src={video.captions} srcLang="en" label="English" />
        Your browser does not support this video. <a href={video.src}>Download the maintenance video</a>.
      </video></div>
      <p className="study-caption">Original Promanage video · 55 seconds · English captions available</p>
      <p className="section-copy watch-description">{video.description}</p>
      <Link className="text-link" href="/portfolio/common-area-maintenance">View the repair photographs & showcase <ArrowRight size={18} aria-hidden="true" /></Link>
    </div></section>
    <section className="section" id="video-transcript"><div className="container study-transcript">
      <h2>Video transcript</h2><p className="section-copy">The spoken introduction, lightly edited for punctuation and readability.</p>
      <ol>{video.transcript.map(cue => <li key={cue.time}><span className="transcript-time">{cue.time}</span><p>{cue.text}</p></li>)}</ol>
      <a className="text-link" href={video.captions} download>Download English captions <ArrowRight size={18} aria-hidden="true" /></a>
      <nav className="study-jump" aria-label="Maintenance information"><Link className="text-link" href="/services/building-maintenance">Maintenance services & frequently asked questions <ArrowRight size={18} aria-hidden="true" /></Link><Link className="text-link" href="/contact">Discuss your building’s repair needs <ArrowRight size={18} aria-hidden="true" /></Link></nav>
    </div></section>
  </main><Footer /></div>;
}
