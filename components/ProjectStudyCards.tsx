import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROJECT_STUDIES } from '@/data/project-studies';
export default function ProjectStudyCards({ service, exclude }: { service?: string; exclude?: string }) {
  const studies = PROJECT_STUDIES.filter(study => study.slug !== exclude && (!service || study.services.some(item => item.slug === service)));
  if (!studies.length) return null;
  return <div className="study-cards">{studies.map(study => <article className="study-card" key={study.slug}>
    <Link href={`/portfolio/${study.slug}`} className="study-card-image"><img src={study.hero.src} alt={study.hero.alt} width={1000} height={750} loading="lazy" /></Link>
    <div className="study-card-copy"><p className="eyebrow">{study.type}</p><h3><Link href={`/portfolio/${study.slug}`}>{study.name}</Link></h3><p>{study.evidence}</p><Link className="text-link" href={`/portfolio/${study.slug}`}>Explore the project <ArrowRight size={19} aria-hidden="true" /></Link></div>
  </article>)}</div>;
}
