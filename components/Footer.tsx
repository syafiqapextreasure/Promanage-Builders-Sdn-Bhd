'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';
import { PROMANAGE_CONTACT, getWhatsAppUrl } from '@/lib/whatsapp';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import DevNotesModal from './DevNotesModal';
import PdfManifestModal from './PdfManifestModal';

export const Footer: React.FC = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [showManifest, setShowManifest] = useState(false);
  const currentYear = 2026;

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Brand & Identity Column - 5 cols */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-block" aria-label="Promanage Builders Sdn Bhd">
              <Logo variant="light" size="md" />
            </a>

            <p className="text-[16px] text-stone-400 leading-relaxed max-w-sm">
              Interior design, renovation, and structural construction services for homes and commercial establishments across Petaling Jaya, Selangor, and the Klang Valley.
            </p>

            <div className="pt-2 text-xs font-mono text-stone-400 space-y-1">
              <div>Registration: {PROMANAGE_CONTACT.registrationNumber}</div>
              <div>Managing Director: {PROMANAGE_CONTACT.managingDirector}</div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello Benedict Tan, I would like to get in touch with Promanage Builders.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[48px] px-5 py-2.5 rounded-lg bg-[#27482A] text-white text-[16px] font-semibold hover:bg-[#1E3720] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" aria-hidden="true" />
                <span>WhatsApp Benedict Tan</span>
              </a>
            </div>
          </div>

          {/* Section Navigation Links - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-[17px]">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  About Our Company
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Our 4 Core Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Project Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors focus-visible:outline-hidden focus-visible:underline"
                >
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Location - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Contact & Address
            </div>

            <div className="space-y-3 text-[16px]">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-xs text-stone-400 block">Direct Line / WhatsApp:</span>
                  <a
                    href={`tel:${PROMANAGE_CONTACT.phoneRaw}`}
                    className="font-bold text-white hover:text-amber-300 underline"
                  >
                    {PROMANAGE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-xs text-stone-400 block">Email:</span>
                  <a
                    href={`mailto:${PROMANAGE_CONTACT.email}`}
                    className="font-semibold text-white hover:text-amber-300 underline break-all"
                  >
                    {PROMANAGE_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-xs text-stone-400 block">Office Address:</span>
                  <p className="text-stone-300 leading-snug">{PROMANAGE_CONTACT.address}</p>
                  <a
                    href={PROMANAGE_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-white mt-1 underline"
                  >
                    <span>Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Audit tools */}
            <div className="pt-3 border-t border-stone-800 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowNotes(true)}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200 underline py-1"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Developer Attribution Notes</span>
              </button>
              <span className="text-stone-600">·</span>
              <button
                type="button"
                onClick={() => setShowManifest(true)}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200 underline py-1"
              >
                <span>73-Page PDF Manifest</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {currentYear} {PROMANAGE_CONTACT.companyName} (Registration No. {PROMANAGE_CONTACT.registrationNumber}). All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed for clear legibility and accessibility. Petaling Jaya, Selangor.
          </p>
        </div>
      </div>

      {showNotes && <DevNotesModal onClose={() => setShowNotes(false)} />}
      {showManifest && <PdfManifestModal onClose={() => setShowManifest(false)} />}
    </footer>
  );
};

export default Footer;
