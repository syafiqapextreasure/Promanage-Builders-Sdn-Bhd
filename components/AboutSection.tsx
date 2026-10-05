'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl, PROMANAGE_CONTACT } from '@/lib/whatsapp';
import { ShieldCheck, UserCheck, Ruler, Clock, MessageSquare, Info, MapPin } from 'lucide-react';
import DevNotesModal from './DevNotesModal';

export const AboutSection: React.FC = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Welcoming & Concise Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6A2C] uppercase">
              About Promanage Builders
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2722] tracking-tight leading-tight text-balance">
              Thoughtful Spaces Built for Real Living and Working.
            </h2>

            <p className="text-[18px] sm:text-[20px] text-stone-700 leading-relaxed font-normal">
              At <strong className="text-stone-900 font-semibold">PROMANAGE BUILDERS SDN BHD</strong>, we believe every space is more than four walls—it is an extension of daily routines and business ambitions. We unite thoughtful interior design, practical space planning, and meticulous renovation with hands-on on-site coordination.
            </p>

            <p className="text-[18px] sm:text-[20px] text-stone-700 leading-relaxed font-normal">
              Led by Managing Director <strong className="text-stone-900 font-semibold">{PROMANAGE_CONTACT.managingDirector}</strong>, our team oversees each phase personally—from initial spatial layouts and 3D renderings to carpentry installation, structural reinforcement, and final handover. We keep communication transparent and progress disciplined so you enjoy total peace of mind.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white border border-stone-200/90 shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <UserCheck className="w-5 h-5 text-[#27482A]" aria-hidden="true" />
                  <h3 className="font-bold text-[18px] text-stone-900">Personal Supervision</h3>
                </div>
                <p className="text-[16px] text-stone-600 leading-normal">
                  Every stage is coordinated directly by our team to maintain strict quality standards and accountability.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-stone-200/90 shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <Ruler className="w-5 h-5 text-[#B89047]" aria-hidden="true" />
                  <h3 className="font-bold text-[18px] text-stone-900">Practical Planning</h3>
                </div>
                <p className="text-[16px] text-stone-600 leading-normal">
                  Balancing visual warmth with realistic storage, workflow ergonomics, and long-term material durability.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-stone-200/90 shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[#27482A]" aria-hidden="true" />
                  <h3 className="font-bold text-[18px] text-stone-900">Schedule Discipline</h3>
                </div>
                <p className="text-[16px] text-stone-600 leading-normal">
                  Clear sequencing across wet trades, electrical, plumbing, carpentry, and final touch-ups.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-stone-200/90 shadow-2xs">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#B89047]" aria-hidden="true" />
                  <h3 className="font-bold text-[18px] text-stone-900">Registered Malaysian Entity</h3>
                </div>
                <p className="text-[16px] text-stone-600 leading-normal">
                  Registered under SSM {PROMANAGE_CONTACT.registrationNumber} with office based in Petaling Jaya SS2.
                </p>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Hello Benedict Tan, I would like to learn more about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[48px] px-6 py-3 rounded-lg bg-[#27482A] text-white text-[18px] font-semibold hover:bg-[#1C351E] transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
              >
                <MessageSquare className="w-5 h-5 text-amber-300" aria-hidden="true" />
                <span>Contact Benedict Tan</span>
              </a>

              <button
                type="button"
                onClick={() => setShowNotes(true)}
                className="inline-flex items-center gap-2 min-h-[48px] px-4 py-3 rounded-lg border border-stone-300 text-stone-700 text-[16px] font-semibold hover:bg-stone-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
              >
                <Info className="w-4 h-4 text-stone-500" aria-hidden="true" />
                <span>Company Profile & Attribution Notes</span>
              </button>
            </div>
          </div>

          {/* Right Column: Original Project Showcase Alongside with Real Photography */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-stone-300 bg-white p-6 shadow-md space-y-5">
              <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Documented Project Showcase
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Rimbayu Robin Landed Residence
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-600 bg-stone-100 px-2 py-1 rounded">
                  Pages 20–23
                </span>
              </div>

              {/* Real Project Image */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-inner border border-stone-200">
                <img
                  src="/images/project_rimbayu_landed_1791179993277.jpg"
                  alt="Rimbayu Robin landed home interior carpentry and open dry kitchen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">
                    Site Completion Photography · Teluk Panglima
                  </span>
                </div>
              </div>

              {/* Architectural details */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-stone-900">Comprehensive Carpentry & Wet Trades</span>
                  <span className="text-xs text-[#27482A] font-bold">Turnkey Execution</span>
                </div>
                <p className="text-[15px] text-stone-600 leading-relaxed">
                  Landed home full interior carpentry, dark glass display cabinets, breakfast island, custom laundry bay, and illuminated step handrail.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#27482A]/5 border border-[#27482A]/20 text-stone-800 text-[15px] leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#27482A] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-stone-900">Registered Office Address:</strong>
                    <p className="text-stone-700">{PROMANAGE_CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showNotes && <DevNotesModal onClose={() => setShowNotes(false)} />}
    </section>
  );
};

export default AboutSection;
