'use client';
import { useEffect, useRef, useState, useId } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Maximize2, Search, X, MessageSquare } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ProjectMedia, ProjectCategory } from '@/data/portfolio-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const control = 'inline-flex shrink-0 items-center justify-center min-h-12 min-w-12 rounded-full border border-stone-300 bg-white text-[#27482A] hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89047] transition-colors';

function ProjectCard({ project, onOpen }: { project: ProjectMedia; onOpen: (project: ProjectMedia, index: number) => void }) {
  const viewport = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const go = (step: number) => {
    const next = (index + step + project.images.length) % project.images.length;
    viewport.current?.scrollTo({ left: next * viewport.current.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <article className="min-w-0 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
    <div className="relative">
      <div ref={viewport} tabIndex={0} role="region" aria-label={`${project.title} image gallery`} className="flex aspect-[4/3] snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-[#B89047]" onScroll={() => { if (viewport.current) setIndex(Math.round(viewport.current.scrollLeft / viewport.current.clientWidth)); }} onKeyDown={e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); go(e.key === 'ArrowRight' ? 1 : -1); } }}>
        {project.images.map((image, n) => <button key={image.src} type="button" onClick={() => onOpen(project, n)} aria-label={`Enlarge ${project.title}, image ${n + 1}`} className="h-full w-full shrink-0 snap-start bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#B89047]"><img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="h-full w-full object-cover" /></button>)}
      </div>
      <button type="button" onClick={() => onOpen(project, index)} aria-label={`Open ${project.title} gallery`} className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#27482A] shadow-md hover:bg-white focus-visible:outline-2 focus-visible:outline-[#B89047]"><Maximize2 size={22} aria-hidden="true" /></button>
    </div>
    <div className="flex items-center justify-between gap-2 border-b border-stone-200 px-4 py-3">
      <button type="button" className={control} onClick={() => go(-1)} aria-label={`Previous image of ${project.title}`}><ChevronLeft aria-hidden="true" /></button>
      <span aria-live="polite" className="text-base font-semibold text-stone-700">{index + 1} / {project.images.length} images</span>
      <button type="button" className={control} onClick={() => go(1)} aria-label={`Next image of ${project.title}`}><ChevronRight aria-hidden="true" /></button>
    </div>
    <div className="space-y-3 p-6">
      <p className="text-base font-semibold text-[#8A6A2C]">{project.category}</p>
      <h3 className="text-[22px] font-bold leading-snug text-[#1F2722]">{project.title}</h3>
      <p className="flex items-start gap-2 text-base text-stone-600"><MapPin size={20} className="mt-0.5 shrink-0" aria-hidden="true" />{project.location}</p>
      <p className="text-lg leading-relaxed text-stone-700">{project.description}</p>
      <button type="button" onClick={() => onOpen(project, index)} className="inline-flex min-h-12 items-center gap-2 font-semibold text-lg text-[#27482A] hover:underline focus-visible:outline-2 focus-visible:outline-[#B89047]">View Project Gallery <ArrowRight size={20} aria-hidden="true" /></button>
    </div>
  </article>;
}

function ProjectLightbox({ project, initialIndex, onClose }: { project: ProjectMedia; initialIndex: number; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const headingId = useId();
  const touchStart = useRef<number | null>(null);
  const go = (step: number) => setIndex(current => (current + step + project.images.length) % project.images.length);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element?.showModal();
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, []);
  const image = project.images[index];
  return <dialog ref={dialog} aria-labelledby={headingId} onClose={onClose} onCancel={e => { e.preventDefault(); onClose(); }} onKeyDown={e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); go(e.key === 'ArrowRight' ? 1 : -1); } }} className="m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-[#101712] p-4 text-white sm:p-6 backdrop:bg-black/80">
    <div className="mx-auto flex h-full max-w-7xl flex-col gap-4">
      <div className="flex shrink-0 items-start justify-between gap-4"><div><h2 id={headingId} className="text-xl font-bold sm:text-2xl">{project.title}</h2><p className="mt-1 text-base text-stone-300">{project.location}</p></div><button type="button" autoFocus onClick={onClose} aria-label="Close project gallery" className={control}><X aria-hidden="true" /></button></div>
      <div className="relative min-h-0 flex-1" onTouchStart={e => { touchStart.current = e.changedTouches[0].clientX; }} onTouchEnd={e => { if (touchStart.current !== null) { const distance = e.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 50) go(distance < 0 ? 1 : -1); touchStart.current = null; } }}><img src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-full w-full object-contain" /></div>
      <div className="flex shrink-0 items-center justify-center gap-5"><button type="button" onClick={() => go(-1)} className={control} aria-label="Previous project image"><ChevronLeft aria-hidden="true" /></button><span aria-live="polite" className="text-lg font-semibold">Image {index + 1} of {project.images.length}</span><button type="button" onClick={() => go(1)} className={control} aria-label="Next project image"><ChevronRight aria-hidden="true" /></button></div>
      <div className="flex shrink-0 gap-2 overflow-x-auto pb-2" aria-label="Choose a project image">{project.images.map((item, n) => <button type="button" key={item.src} onClick={() => setIndex(n)} aria-label={`Show image ${n + 1}`} aria-pressed={index === n} className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 focus-visible:outline-2 focus-visible:outline-amber-300 ${index === n ? 'border-amber-300' : 'border-white/30'}`}><img src={item.src} alt="" loading="lazy" className="h-full w-full object-cover" /></button>)}</div>
      <a href={getWhatsAppUrl(`Hello Benedict Tan, I would like to discuss a project similar to ${project.title}.`)} target="_blank" rel="noopener noreferrer" className="mx-auto inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#27482A] px-5 text-lg font-semibold text-white focus-visible:outline-2 focus-visible:outline-amber-300"><MessageSquare size={20} aria-hidden="true" />Enquire About a Similar Project</a>
    </div>
  </dialog>;
}

export default function ProjectGallery({ featured = false }: { featured?: boolean }) {
  const [category, setCategory] = useState<ProjectCategory | 'All'>('All');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<{ project: ProjectMedia; index: number } | null>(null);
  const categories: (ProjectCategory | 'All')[] = ['All', 'Residential', 'Commercial', 'Renovation', 'Construction', 'Design Concepts'];
  const filtered = featured ? PORTFOLIO_PROJECTS.slice(0, 3) : PORTFOLIO_PROJECTS.filter(project => (category === 'All' || project.category === category) && `${project.title} ${project.location} ${project.description}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div>
    {!featured && <div className="mb-10 space-y-6"><div className="flex flex-wrap gap-2" aria-label="Filter projects by category">{categories.map(item => <button type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-12 rounded-lg border px-4 py-2 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-[#B89047] ${category === item ? 'border-[#27482A] bg-[#27482A] text-white' : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-100'}`}>{item} ({item === 'All' ? PORTFOLIO_PROJECTS.length : PORTFOLIO_PROJECTS.filter(p => p.category === item).length})</button>)}</div><label className="flex max-w-lg items-center gap-3 rounded-xl border border-stone-300 bg-white px-4"><Search className="shrink-0 text-stone-500" aria-hidden="true" /><span className="sr-only">Search projects or locations</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search project or location" className="min-h-14 w-full min-w-0 bg-transparent py-3 text-lg outline-none focus-visible:ring-2 focus-visible:ring-[#B89047]" /></label><p aria-live="polite" className="text-lg text-stone-600">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</p></div>}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">{filtered.map(project => <ProjectCard key={project.id} project={project} onOpen={(project, index) => setActive({ project, index })} />)}</div>
    {filtered.length === 0 && <p className="rounded-xl border border-stone-200 bg-white p-8 text-xl text-stone-700">No projects match your search. Try another name or location.</p>}
    {featured && <div className="mt-10 text-center"><Link href="/portfolio" className="inline-flex min-h-14 items-center gap-3 rounded-lg bg-[#27482A] px-7 py-3 text-lg font-semibold text-white hover:bg-[#1C351E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89047]">View All Projects <ArrowRight aria-hidden="true" /></Link></div>}
    {active && <ProjectLightbox project={active.project} initialIndex={active.index} onClose={() => setActive(null)} />}
  </div>;
}
