'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { SITE_IMAGES } from '@/lib/project-images';
import { Compass, Hammer, Building, ClipboardCheck, ChevronDown, ChevronUp, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  categoryNumber: string;
  tagline: string;
  icon: React.ElementType;
  pdfPages: string;
  summary: string;
  coreItems: string[];
  sampleWorks: string[];
  pdfIllustrationContext: string;
  image: string;
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    categoryNumber: '01',
    tagline: 'Residential & Commercial Space Planning',
    icon: Compass,
    pdfPages: 'Pages 4, 18–21, 24–28',
    image: SITE_IMAGES.dcosmosMinimalist,
    summary:
      'Harmonizing aesthetic warmth with practical functionality. We design residential homes and commercial environments tailored to daily flow and lifestyle habits.',
    coreItems: [
      'Personalized Residential Interior Design (Apartments, Landed Homes)',
      'Innovative Commercial & Office Space Solutions',
      'Space Planning & Traffic Flow Optimization',
      'Realistic 3D Renderings & Spatial Visualizations',
      'Color Coordination, Material Consultation & Furniture Advice',
      'Soft Furnishing, Lighting Accents & Decor Curation'
    ],
    sampleWorks: [
      "Aradia @ Lake City - Bespoke living room cabinetry and cove lighting",
      "D'Cosmos @ Damansara Perdana - Warm minimalist curved cove concept",
      "Ikhasas Group HQ - Sculptural office archways and stepped seating"
    ],
    pdfIllustrationContext: 'Warm built-in joinery, reeded glass partitions, cove lighting and ambient dining concepts.'
  },
  {
    id: 'renovation-repairs',
    title: 'Renovation & Repairs',
    categoryNumber: '02',
    tagline: 'A-to-Z Residential & Retail Remodeling',
    icon: Hammer,
    pdfPages: 'Pages 5, 22–23, 31–34, 48–56',
    image: SITE_IMAGES.desaVillaKitchen,
    summary:
      'Complete end-to-end renovation and repair craftsmanship. From custom kitchen joinery to wet trades, tiling, and complete electrical and plumbing overhauls.',
    coreItems: [
      'Full House & Apartment Renovation',
      'Kitchen & Bathroom Remodeling (Wet & Dry Kitchens)',
      'Retail, F&B & Commercial Shop Renovation',
      'Customized Built-in Furniture, Wardrobes & Cabinets',
      'Solid Wood Flooring, Engineered Wood & Tile Flooring',
      'Plumbing, Sanitary Fixtures & Electrical Re-Wiring',
      'Plaster Ceiling, Cove Pelmets & Architectural Lighting',
      'Painting, Waterproofing & Building Maintenance'
    ],
    sampleWorks: [
      'Rimbayu Robin - Landed home living cabinetry and wet kitchen',
      'Desa Villa @ Taman Desa - Dining banquette nook and bathroom tiling',
      'Rotiboy @ R&R Awan Besar - Commercial retail bakery fit-out'
    ],
    pdfIllustrationContext: 'Precision joinery, illuminated vanities, undermount sinks, and commercial counter fabrication.'
  },
  {
    id: 'construction-works',
    title: 'Construction Works',
    categoryNumber: '03',
    tagline: 'Design & Build, Extensions & Structural Alterations',
    icon: Building,
    pdfPages: 'Pages 5, 9–17, 44–45, 60–64',
    image: SITE_IMAGES.diamondConstruction,
    summary:
      'Substantial structural undertakings from ground-up building to extensions, reinforced concrete additions, and heavy industrial steel structures.',
    coreItems: [
      'Design & Build - Planning from Scratch',
      'Residential & Commercial Structural Construction',
      'House Extensions, Balcony Additions & Floor Enlargements',
      'Reinforced Concrete Ground Beams, Columns & Slabs',
      'Structural Steel Trusses, Industrial Canopies & Walkways',
      'Earthworks, Site Shoring & Foundation Reinforcement'
    ],
    sampleWorks: [
      'ShuYi @ Tanjung Malim - Hall building, civil shoring & estate works',
      'Diamond Residence @ Semenyih - Multi-storey bungalow extension',
      'Hong Leong Yamaha Motor - Industrial steel canopies and walkways'
    ],
    pdfIllustrationContext: 'Concrete beam formwork, site shoring, scaffolding, and heavy structural steel installations.'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    categoryNumber: '04',
    tagline: 'Schedule Discipline & Quality Assurance',
    icon: ClipboardCheck,
    pdfPages: 'Pages 6–7',
    image: SITE_IMAGES.shuyiHall,
    summary:
      'Personal site coordination to keep budgets transparent, trade contractors synchronized, and workmanship strictly aligned with engineering and design standards.',
    coreItems: [
      'Accurate Budget Planning & Transparent Quantity Estimation',
      'Strict Progress Schedule Planning & Gantt Chart Tracking',
      'Multi-Trade Contractor Coordination (Wet Trades, MEP, Joinery)',
      'Rigorous Quality Assurance & Material Verification',
      'On-site Health, Safety & Environmental Discipline',
      'Punch-list Defect Rectification & Coordinated Handover'
    ],
    sampleWorks: [
      'Diamond Residence - Documented Progress Schedule Gantt tracking',
      'ShuYi Estate - Multi-contractor site sequencing and supervision'
    ],
    pdfIllustrationContext: 'Structured Gantt schedule tracking, on-site trade sequencing, and systematic milestone verification.'
  }
];

export const ServicesSection: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'interior-design': true,
    'renovation-repairs': true,
    'construction-works': false,
    'project-management': false
  });

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6A2C] uppercase">
              Comprehensive Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2722] tracking-tight mt-2 text-balance">
              Our 4 Core Service Domains
            </h2>
            <p className="text-[18px] sm:text-[20px] text-stone-700 mt-4 leading-relaxed font-normal">
              Whether refreshing a single kitchen, remodeling an entire residence, or executing heavy structural additions, our team delivers coordinated workmanship from planning to handover.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-lg border-2 border-[#27482A] text-[#27482A] bg-white font-bold text-[17px] hover:bg-[#27482A] hover:text-white transition-all shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => {
            const isExpanded = !!expandedCards[service.id];
            const Icon = service.icon;
            const serviceWhatsapp = getWhatsAppUrl(
              `Hello Benedict Tan, I would like to enquire specifically about your "${service.title}" services.`
            );

            return (
              <div
                key={service.id}
                className="rounded-2xl border border-stone-300 bg-[#FAF8F5] overflow-hidden flex flex-col justify-between shadow-xs transition-shadow hover:shadow-md"
              >
                {/* Service Card Image Banner */}
                <div className="relative h-48 w-full overflow-hidden border-b border-stone-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-[#27482A] text-white">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-amber-300 tracking-wider uppercase block">
                            {service.categoryNumber} · {service.tagline}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Summary Text */}
                    <p className="text-[17px] sm:text-[18px] text-stone-700 leading-relaxed mb-5">
                      {service.summary}
                    </p>

                    {/* Core Items Bullet List */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-stone-500">
                        Scope of Services
                      </h4>
                      <ul className="space-y-2">
                        {service.coreItems.slice(0, isExpanded ? service.coreItems.length : 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[16px] sm:text-[17px] text-stone-800 leading-normal">
                            <CheckCircle className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Additional Section */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-stone-200 space-y-4">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                            Selected Projects
                          </h4>
                          <ul className="space-y-1 text-[15px] text-stone-700">
                            {service.sampleWorks.map((work, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#8A6A2C] font-bold">•</span>
                                <span>{work}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3 rounded-lg bg-stone-100 text-xs text-stone-600 font-mono">
                          Profile Context: {service.pdfIllustrationContext}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer Controls */}
                  <div className="pt-6 border-t border-stone-200 mt-6 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => toggleCard(service.id)}
                      className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#27482A] hover:text-[#182F1B] min-h-[48px] px-3 py-2 rounded-lg hover:bg-stone-200/60 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Show Less Details' : 'Expand Full Scope'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <a
                      href={serviceWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 py-2.5 rounded-lg bg-[#27482A] text-white text-[16px] font-semibold hover:bg-[#1C351E] transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                    >
                      <MessageSquare className="w-4 h-4 text-amber-300" aria-hidden="true" />
                      <span>Enquire This Service</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
