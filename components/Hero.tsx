'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { SITE_IMAGES } from '@/lib/project-images';
import { MessageSquare, ArrowRight, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    "Hello Benedict Tan, I would like to discuss a project with Promanage Builders Sdn Bhd."
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4F0E8] to-[#FAF8F5] py-12 md:py-18 lg:py-20 border-b border-stone-200"
    >
      {/* Decorative architectural ambient glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#B89047]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#27482A]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Copy - Left 6 cols on Desktop */}
          <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-7">
            {/* Clean editorial meta line (no ugly pill badges) */}
            <div className="flex flex-wrap items-center gap-2 text-stone-600 font-semibold text-sm sm:text-base tracking-wide">
              <span>PETALING JAYA & KLANG VALLEY</span>
              <span aria-hidden="true" className="text-amber-700">·</span>
              <span>BENEDICT TAN, MANAGING DIRECTOR</span>
              <span aria-hidden="true" className="text-amber-700">·</span>
              <span className="text-stone-500 font-mono">REG: 202401013030 (1558880-H)</span>
            </div>

            {/* Headline: "Thoughtfully Designed. Beautifully Built." */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#1F2722] tracking-tight leading-[1.12] text-balance">
              Thoughtfully Designed.{' '}
              <span className="text-[#27482A] block sm:inline">Beautifully Built.</span>
            </h1>

            {/* Supporting text */}
            <p className="text-[19px] sm:text-[21px] text-stone-700 leading-relaxed max-w-2xl font-normal">
              Interior design, renovation and construction for homes and businesses. From space planning and custom carpentry to full house extensions and structural alterations.
            </p>

            {/* CTAs: Primary & Secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 min-h-[52px] px-8 py-3.5 rounded-lg bg-[#27482A] text-white text-[19px] font-semibold shadow-md hover:bg-[#1C351E] active:scale-[0.99] transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
              >
                <MessageSquare className="w-5 h-5 text-amber-300" aria-hidden="true" />
                <span className="whitespace-nowrap">Discuss on WhatsApp</span>
              </a>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 py-3.5 rounded-lg border-2 border-stone-400 bg-white text-stone-800 text-[19px] font-semibold hover:bg-stone-50 hover:border-stone-600 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
              >
                <span className="whitespace-nowrap">Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-stone-600" aria-hidden="true" />
              </Link>
            </div>

            {/* Refined Glass Panel listing 4 Disciplines */}
            <div className="mt-3 p-5 rounded-xl bg-white/85 backdrop-blur-md border border-stone-200 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center justify-between">
                <span>Core Service Capabilities</span>
                <Link href="/services" className="text-[#27482A] font-semibold hover:underline">
                  View Full Scope →
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-stone-900 font-semibold text-[16px] sm:text-[17px]">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-[#B89047]" />
                  <span>Interior Design</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-[#27482A]" />
                  <span>Renovation</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-[#B89047]" />
                  <span>Construction</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-[#27482A]" />
                  <span>Project Mgmt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Visual Composition - Right 6 cols on Desktop with REAL PHOTOGRAPHY */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-300/80 bg-stone-900 text-white group">
              {/* Primary Architectural Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={SITE_IMAGES.heroAradia}
                  alt="Aradia Lake City luxury interior design with custom warm fluted wood cabinetry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-md">
                    Featured Project: Aradia @ Lake City
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Residential Interior & Custom Joinery
                  </h3>
                  <p className="text-stone-300 text-sm mt-1 line-clamp-2">
                    Original interiors, thoughtful space planning and custom kitchen cabinetry.
                  </p>
                </div>
              </div>

              {/* Multi-Project Thumbnail Strip Underneath */}
              <div className="p-4 bg-stone-950/90 border-t border-stone-800 grid grid-cols-3 gap-3">
                <Link
                  href="/portfolio"
                  className="group/item relative rounded-lg overflow-hidden border border-stone-700 hover:border-amber-400 transition-all block"
                >
                  <img
                    src={SITE_IMAGES.rimbayuLanded}
                    alt="Rimbayu Robin landed home renovation"
                    className="w-full h-16 sm:h-20 object-cover group-hover/item:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 p-1.5 flex flex-col justify-end text-left">
                    <span className="text-[11px] font-bold text-white truncate">Rimbayu Robin</span>
                    <span className="text-[9px] text-amber-200">Landed Home</span>
                  </div>
                </Link>

                <Link
                  href="/portfolio"
                  className="group/item relative rounded-lg overflow-hidden border border-stone-700 hover:border-amber-400 transition-all block"
                >
                  <img
                    src={SITE_IMAGES.ikhasasOffice}
                    alt="Ikhasas Group corporate headquarters"
                    className="w-full h-16 sm:h-20 object-cover group-hover/item:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 p-1.5 flex flex-col justify-end text-left">
                    <span className="text-[11px] font-bold text-white truncate">Ikhasas HQ</span>
                    <span className="text-[9px] text-amber-200">Commercial Office</span>
                  </div>
                </Link>

                <Link
                  href="/portfolio"
                  className="group/item relative rounded-lg overflow-hidden border border-stone-700 hover:border-amber-400 transition-all block"
                >
                  <img
                    src={SITE_IMAGES.shuyiHall}
                    alt="ShuYi Tanjung Malim civil and structural works"
                    className="w-full h-16 sm:h-20 object-cover group-hover/item:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 p-1.5 flex flex-col justify-end text-left">
                    <span className="text-[11px] font-bold text-white truncate">ShuYi Estate</span>
                    <span className="text-[9px] text-amber-200">Civil & Structural</span>
                  </div>
                </Link>
              </div>

              {/* Direct Address & Contact footer */}
              <div className="px-5 py-2.5 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>33, Jalan SS2/24, SS2, Petaling Jaya</span>
                </div>
                <a
                  href="tel:+60163281581"
                  className="text-amber-300 hover:text-white font-medium underline"
                >
                  +60 16 328 1581
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
