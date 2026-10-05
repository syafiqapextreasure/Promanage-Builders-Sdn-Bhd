'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { SITE_IMAGES } from '@/lib/project-images';
import { getWhatsAppUrl, PROMANAGE_CONTACT } from '@/lib/whatsapp';
import {
  Compass,
  Hammer,
  Building,
  ClipboardCheck,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Clock,
  Ruler,
  Phone,
  FileCheck2
} from 'lucide-react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'interior' | 'renovation' | 'construction' | 'management'>('all');

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#B89047]/30">
      <Navbar />

      <main className="flex-1">
        {/* Services Page Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F3EFE6] to-[#FAF8F5] py-14 md:py-20 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm font-semibold text-stone-600">
                <Link href="/" className="hover:text-stone-900">
                  Home
                </Link>
                <span>/</span>
                <span className="text-[#27482A]">Services</span>
              </div>

              <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6A2C] uppercase">
                Expertise & Capabilities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F2722] tracking-tight text-balance">
                Our 4 Core Service Domains
              </h1>

              <p className="text-[19px] sm:text-[21px] text-stone-700 leading-relaxed font-normal">
                From concept spatial planning and bespoke cabinetry to full-house renovation, structural extensions, and disciplined project supervision. Personally overseen by Benedict Tan and our experienced site team.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl("Hello Benedict Tan, I would like to consult with you about your renovation and construction services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 min-h-[50px] px-7 py-3 rounded-lg bg-[#27482A] text-white text-[18px] font-semibold hover:bg-[#1C351E] shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                >
                  <MessageSquare className="w-5 h-5 text-amber-300" aria-hidden="true" />
                  <span>Discuss Your Project on WhatsApp</span>
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 min-h-[50px] px-6 py-3 rounded-lg border-2 border-stone-400 bg-white text-stone-800 text-[18px] font-semibold hover:bg-stone-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                >
                  <span>View Project Portfolio</span>
                  <ArrowRight className="w-4 h-4 text-stone-600" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Interior Design Section */}
        <section id="interior-design" className="py-16 md:py-20 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#27482A] text-white">
                    <Compass className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#8A6A2C] uppercase tracking-wider block">
                      Domain 01
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2722] tracking-tight">
                      Interior Design & Space Planning
                    </h2>
                  </div>
                </div>

                <p className="text-[18px] sm:text-[19px] text-stone-700 leading-relaxed font-normal">
                  We craft spaces that balance visual warmth with daily practicality. Our designers translate your functional requirements into thoughtful layouts, realistic 3D renderings, and precise carpentry detailing before any physical construction begins.
                </p>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">
                    Scope of Interior Design Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Personalized Residential Design</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Commercial & Office Space Solutions</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Space Planning & Flow Optimization</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Photorealistic 3D Visualizations</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Color Coordination & Furniture Matching</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Custom Built-In Joinery Design</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl("Hello Benedict Tan, I would like to enquire about your Interior Design and 3D visualization services.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[48px] px-6 py-2.5 rounded-lg bg-[#27482A] text-white text-[16px] font-semibold hover:bg-[#1C351E]"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-300" />
                    <span>Enquire About Interior Design</span>
                  </a>
                </div>
              </div>

              {/* Photo Showcase */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-stone-900 group">
                  <div className="relative aspect-[16/11]">
                    <img
                      src={SITE_IMAGES.dcosmosMinimalist}
                      alt="D'Cosmos Damansara Perdana warm minimalist interior design"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-xs font-mono text-amber-300">Featured Project</span>
                      <h4 className="text-xl font-bold">D&apos;Cosmos @ Damansara Perdana</h4>
                      <p className="text-stone-300 text-xs mt-0.5">
                        Curved cove lighting, fluted reeded glass partitions, and seamless dry kitchen island.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Renovation & Repairs Section */}
        <section id="renovation-repairs" className="py-16 md:py-20 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Photo Showcase */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-stone-900 group">
                  <div className="relative aspect-[16/11]">
                    <img
                      src={SITE_IMAGES.desaVillaKitchen}
                      alt="Desa Villa Taman Desa residential kitchen remodeling and custom carpentry"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-xs font-mono text-amber-300">Featured Project</span>
                      <h4 className="text-xl font-bold">Desa Villa @ Taman Desa</h4>
                      <p className="text-stone-300 text-xs mt-0.5">
                        Comprehensive wet and dry kitchen remodel, banquette dining nook, and bathroom tiling overhaul.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#27482A] text-white">
                    <Hammer className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#8A6A2C] uppercase tracking-wider block">
                      Domain 02
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2722] tracking-tight">
                      Renovation & Repairs
                    </h2>
                  </div>
                </div>

                <p className="text-[18px] sm:text-[19px] text-stone-700 leading-relaxed font-normal">
                  Specializing in A-to-Z renovations for landed residences, condominiums, and commercial retail shops. Our tradespeople handle wet works, bespoke joinery, tiling, plumbing, and electrical installations with clean workmanship.
                </p>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">
                    Comprehensive Renovation Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Full House & Apartment Renovation</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Wet & Dry Kitchen Remodeling</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Luxury Bathroom Tiling & Sanitary</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Solid Wood & Large-Format Tile Flooring</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Plaster Ceilings, Pelmets & Lighting</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Painting, Waterproofing & Maintenance</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl("Hello Benedict Tan, I would like to enquire about your Renovation and Remodeling services.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[48px] px-6 py-2.5 rounded-lg bg-[#27482A] text-white text-[16px] font-semibold hover:bg-[#1C351E]"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-300" />
                    <span>Enquire About Renovation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Construction Works Section */}
        <section id="construction-works" className="py-16 md:py-20 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#27482A] text-white">
                    <Building className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#8A6A2C] uppercase tracking-wider block">
                      Domain 03
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2722] tracking-tight">
                      Construction & Structural Works
                    </h2>
                  </div>
                </div>

                <p className="text-[18px] sm:text-[19px] text-stone-700 leading-relaxed font-normal">
                  Delivering substantial civil and structural works. From ground-up construction and bungalow extensions to reinforced concrete column casting, roof terrace slabs, and industrial steel canopies.
                </p>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">
                    Structural & Civil Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Design & Build - Planning from Scratch</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Residential Bungalow House Extensions</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>RC Ground Beams, Columns & Slabs</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Heavy Structural Steel Canopies</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Bridge Shoring & Foundation Works</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Earthworks & Multi-Phase Site Clearing</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl("Hello Benedict Tan, I would like to consult on a house extension or structural construction project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[48px] px-6 py-2.5 rounded-lg bg-[#27482A] text-white text-[16px] font-semibold hover:bg-[#1C351E]"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-300" />
                    <span>Enquire About Construction Works</span>
                  </a>
                </div>
              </div>

              {/* Photo Showcase */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-stone-900 group">
                  <div className="relative aspect-[16/11]">
                    <img
                      src={SITE_IMAGES.diamondConstruction}
                      alt="Diamond Residence Semenyih structural bungalow extension and concrete casting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-xs font-mono text-amber-300">Featured Project</span>
                      <h4 className="text-xl font-bold">Diamond Residence @ Semenyih</h4>
                      <p className="text-stone-300 text-xs mt-0.5">
                        Multi-storey classical bungalow extension: RC columns, scaffolding framework, and terrace slab pouring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Project Management Section */}
        <section id="project-management" className="py-16 md:py-20 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Photo Showcase */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-stone-900 group">
                  <div className="relative aspect-[16/11]">
                    <img
                      src={SITE_IMAGES.shuyiHall}
                      alt="ShuYi Tanjung Malim large-scale estate project management and multi-facility build"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-xs font-mono text-amber-300">Featured Project</span>
                      <h4 className="text-xl font-bold">ShuYi @ Tanjung Malim</h4>
                      <p className="text-stone-300 text-xs mt-0.5">
                        Coordinating multi-contractor civil earthworks, bridge shoring, building construction, and event hall fit-out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#27482A] text-white">
                    <ClipboardCheck className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#8A6A2C] uppercase tracking-wider block">
                      Domain 04
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2722] tracking-tight">
                      Project Management & Quality Assurance
                    </h2>
                  </div>
                </div>

                <p className="text-[18px] sm:text-[19px] text-stone-700 leading-relaxed font-normal">
                  Rigorous on-site sequencing and transparent budget administration. We eliminate the frustration of conflicting trades and hidden surprises by applying structured schedule tracking and direct supervision.
                </p>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500">
                    Management Framework
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Accurate Budget & Quantity Estimation</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Gantt Chart Progress Schedule Planning</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Multi-Trade Contractor Coordination</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Quality Assurance & Milestone Inspections</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Site Safety & Housekeeping Protocol</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[16px] text-stone-800">
                      <CheckCircle2 className="w-5 h-5 text-[#27482A] shrink-0 mt-0.5" />
                      <span>Joint Defect Rectification & Handover</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl("Hello Benedict Tan, I would like to consult on project management and contractor coordination.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[48px] px-6 py-2.5 rounded-lg bg-[#27482A] text-white text-[16px] font-semibold hover:bg-[#1C351E]"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-300" />
                    <span>Consult on Project Management</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Consultation Preparation */}
        <section className="py-16 bg-white border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6A2C] uppercase">
                Getting Started
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2722] tracking-tight mt-1">
                How to Prepare for Your Consultation
              </h2>
              <p className="text-[18px] text-stone-600 mt-2 max-w-2xl mx-auto">
                Having these items ready helps us provide focused insights and realistic preliminary assessments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
                <div className="p-3 rounded-xl bg-[#27482A] text-white w-fit">
                  <Ruler className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">1. Property Floor Plan</h3>
                <p className="text-[16px] text-stone-600 leading-relaxed">
                  A developer layout plan or measured drawing allows us to assess room dimensions, wall removals, and structural columns.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
                <div className="p-3 rounded-xl bg-[#27482A] text-white w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">2. Target Timeline</h3>
                <p className="text-[16px] text-stone-600 leading-relaxed">
                  Your expected handover or move-in date allows us to sequence procurement, permit applications, and trade schedules accurately.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
                <div className="p-3 rounded-xl bg-[#27482A] text-white w-fit">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">3. Priority Scope List</h3>
                <p className="text-[16px] text-stone-600 leading-relaxed">
                  A simple list of priority zones (e.g. wet kitchen cabinetry, tiling, extension, rewiring) ensures we align focus with budget.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#27482A] to-[#1A331C] text-white text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Ready to discuss your space with Benedict Tan?
              </h3>
              <p className="text-stone-200 text-[18px] max-w-2xl mx-auto">
                Reach out on WhatsApp to share your property details or arrange an on-site consultation.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello Benedict Tan, I have my floor plan ready and would like to consult on my property.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 min-h-[50px] px-8 py-3 rounded-lg bg-amber-400 text-stone-950 text-[18px] font-bold hover:bg-amber-300 shadow-md"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Start Discussion on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
