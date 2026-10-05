'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PORTFOLIO_PROJECTS, ProjectMedia } from '@/data/portfolio-data';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import {
  Search,
  Filter,
  FileText,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  MessageSquare,
  CheckCircle2,
  Maximize2,
  Building2,
  Info
} from 'lucide-react';
import PdfManifestModal from '@/components/PdfManifestModal';

type CategoryFilter = 'All' | 'Residential' | 'Commercial' | 'Renovation' | 'Construction';

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectMedia | null>(null);
  const [showManifest, setShowManifest] = useState(false);

  // Filter projects by category and search keyword
  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory = selectedFilter === 'All' || proj.category === selectedFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      proj.title.toLowerCase().includes(q) ||
      proj.location.toLowerCase().includes(q) ||
      proj.subCategory?.toLowerCase().includes(q) ||
      proj.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  // Lightbox keyboard navigation
  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % filteredProjects.length;
      setActiveProject(filteredProjects[nextIndex]);
    }
  };

  const handlePrevProject = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setActiveProject(filteredProjects[prevIndex]);
    }
  };

  useEffect(() => {
    if (!activeProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      } else if (e.key === 'ArrowRight') {
        const idx = filteredProjects.findIndex((p) => p.id === activeProject.id);
        if (idx !== -1) {
          setActiveProject(filteredProjects[(idx + 1) % filteredProjects.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredProjects.findIndex((p) => p.id === activeProject.id);
        if (idx !== -1) {
          setActiveProject(filteredProjects[(idx - 1 + filteredProjects.length) % filteredProjects.length]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, filteredProjects]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#B89047]/30">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F3EFE6] to-[#FAF8F5] py-14 md:py-20 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-3">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-600">
                  <Link href="/" className="hover:text-stone-900">
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-[#27482A]">Portfolio</span>
                </div>

                <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6A2C] uppercase">
                  Documented Company Archives
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F2722] tracking-tight text-balance">
                  Complete Project Gallery
                </h1>

                <p className="text-[19px] sm:text-[21px] text-stone-700 leading-relaxed font-normal">
                  All 22 projects consolidated from the 73-page company profile. Preserving source page references, attribution watermarks, and distinguishing actual site photos from 3D conceptual renderings.
                </p>
              </div>

              {/* 73-Page PDF Manifest CTA */}
              <button
                type="button"
                onClick={() => setShowManifest(true)}
                className="inline-flex items-center gap-2.5 min-h-[50px] px-6 py-3 rounded-lg border-2 border-[#27482A] text-[#27482A] bg-white font-bold text-[17px] hover:bg-[#27482A] hover:text-white transition-all shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
              >
                <FileText className="w-5 h-5" />
                <span>View 73-Page PDF Manifest</span>
              </button>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="py-8 bg-white border-b border-stone-200 sticky top-[73px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Category Segmented Control */}
              <div className="flex flex-wrap items-center gap-2 p-1 bg-stone-200/80 rounded-xl">
                {(['All', 'Residential', 'Commercial', 'Renovation', 'Construction'] as CategoryFilter[]).map((cat) => {
                  const count =
                    cat === 'All'
                      ? PORTFOLIO_PROJECTS.length
                      : PORTFOLIO_PROJECTS.filter((p) => p.category === cat).length;
                  const isActive = selectedFilter === cat;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedFilter(cat)}
                      className={`min-h-[44px] px-4 py-2 rounded-lg text-[16px] sm:text-[17px] font-semibold transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047] ${
                        isActive
                          ? 'bg-white text-stone-900 shadow-sm'
                          : 'text-stone-700 hover:text-stone-900 hover:bg-stone-300/50'
                      }`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Search Field */}
              <div className="relative min-w-[280px]">
                <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project or location..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-stone-300 bg-[#FAF8F5] text-stone-900 text-[16px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm font-semibold text-stone-500 mb-6">
              Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} documented projects
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl border border-stone-300 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  {/* Visual Asset Container with Real Photography */}
                  <div
                    className="relative h-64 w-full cursor-pointer overflow-hidden border-b border-stone-200"
                    onClick={() => setActiveProject(project)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveProject(project)}
                    aria-label={`Open details for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />

                    {/* Top Metadata Line */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                      <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded">
                        {project.sourcePages}
                      </span>
                      <span className="bg-[#B89047] text-stone-950 font-bold px-2.5 py-1 rounded">
                        {project.mediaType}
                      </span>
                    </div>

                    {/* Center/Bottom Architectural Identity Block */}
                    <div className="absolute bottom-3 left-4 right-4 text-left">
                      <div className="text-amber-300 text-xs font-bold uppercase tracking-widest mb-0.5">
                        {project.visualTheme.styleTag}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-stone-300 mt-1">
                        <span className="truncate max-w-[180px]">
                          Source: {project.attributionInPdf}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-200 group-hover:text-white">
                          <span>Inspect</span>
                          <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      {/* Status Note where applicable */}
                      {project.statusInProfile !== 'Profile Showcase' && (
                        <div className="mb-2 text-xs font-bold text-amber-800 bg-amber-100/90 border border-amber-300 px-2.5 py-1 rounded-md w-fit">
                          Status in company profile: {project.statusInProfile}
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8A6A2C]" aria-hidden="true" />
                        <span>{project.location}</span>
                      </div>

                      <p className="text-[16px] sm:text-[17px] text-stone-700 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Card Action Controls */}
                    <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="text-[16px] font-semibold text-[#27482A] hover:underline min-h-[44px] flex items-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                      >
                        Inspect Highlights
                      </button>

                      <a
                        href={getWhatsAppUrl(`Hello Benedict Tan, I saw ${project.title} in your portfolio and would like to enquire about similar works.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#27482A] text-white hover:bg-[#1C351E] min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                        aria-label={`Enquire about ${project.title} on WhatsApp`}
                      >
                        <MessageSquare className="w-4 h-4 text-amber-300" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-stone-300 p-8 space-y-3">
                <h3 className="text-xl font-bold text-stone-900">No matching projects found</h3>
                <p className="text-stone-600">
                  Try adjusting your search query or switching category filter tab.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFilter('All');
                    setSearchQuery('');
                  }}
                  className="mt-2 px-5 py-2.5 rounded-lg bg-[#27482A] text-white font-semibold text-sm"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Accessible Lightbox Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Company Profile Documented Project
                </span>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-2.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 min-h-[48px] min-w-[48px] flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                aria-label="Close dialog"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* High-Resolution Project Photography */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-lg border border-stone-300">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded">
                      PDF Reference: {activeProject.sourcePages}
                    </span>
                    <span className="bg-[#B89047] text-stone-950 font-bold px-2.5 py-1 rounded">
                      Format: {activeProject.mediaType}
                    </span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold mt-2">{activeProject.title}</h4>
                  <p className="text-stone-300 text-sm">{activeProject.location} · {activeProject.subCategory}</p>
                </div>
              </div>

              {/* Status Notice */}
              {activeProject.statusInProfile !== 'Profile Showcase' && (
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-300 text-stone-900">
                  <strong className="font-semibold text-amber-900">
                    Status in company profile: {activeProject.statusInProfile}
                  </strong>
                  <p className="text-sm text-stone-700 mt-1">
                    This project was documented under the &quot;{activeProject.statusInProfile}&quot; section of the company profile. It is presented here strictly with that archived scope designation.
                  </p>
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Project Description & Archival Scope
                </h4>
                <p className="text-[18px] text-stone-800 leading-relaxed font-normal">
                  {activeProject.description}
                </p>
              </div>

              {/* Slide Breakdown Highlights */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Documented Slide Highlights (Pages {activeProject.sourcePages})
                </h4>
                <ul className="space-y-2.5">
                  {activeProject.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Developer Attribution Flag */}
              <div className="p-4 rounded-lg bg-stone-100 text-xs text-stone-600 font-mono space-y-1">
                <div>Archive Attribution: {activeProject.attributionInPdf}</div>
                <div>Company Context: PROMANAGE BUILDERS SDN BHD · Managing Director: Benedict Tan</div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 sm:p-6 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevProject}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-800 font-semibold text-[16px] min-h-[48px] hover:bg-stone-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextProject}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-800 font-semibold text-[16px] min-h-[48px] hover:bg-stone-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={getWhatsAppUrl(`Hello Benedict Tan, I am interested in discussing a project similar to ${activeProject.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-lg bg-[#27482A] text-white font-semibold text-[17px] min-h-[48px] hover:bg-[#1C351E] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                >
                  <MessageSquare className="w-5 h-5 text-amber-300" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full 73-Page PDF Manifest Modal */}
      {showManifest && <PdfManifestModal onClose={() => setShowManifest(false)} />}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
