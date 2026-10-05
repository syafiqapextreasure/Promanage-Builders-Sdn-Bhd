'use client';

import React from 'react';
import { X, ShieldAlert, FileText, Info, Building2 } from 'lucide-react';
import { PROMANAGE_CONTACT } from '@/lib/whatsapp';

interface DevNotesModalProps {
  onClose: () => void;
}

export const DevNotesModal: React.FC<DevNotesModalProps> = ({ onClose }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="devnotes-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <Info className="w-6 h-6 text-amber-400" aria-hidden="true" />
            <div>
              <h2 id="devnotes-title" className="text-xl sm:text-2xl font-bold tracking-tight">
                Developer Notes & Corporate Attribution Disclosures
              </h2>
              <p className="text-xs sm:text-sm text-stone-300">
                Ethical data audit, entity relationships, and status designations.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 min-h-[48px] min-w-[48px] flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-800">
          {/* Primary Entity */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
            <h3 className="font-bold text-lg text-stone-900 flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-[#27482A]" />
              <span>Primary Operating Identity: PROMANAGE BUILDERS SDN BHD</span>
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              The primary legal and business identity established across the site is <strong>PROMANAGE BUILDERS SDN BHD</strong> (Registration: 202401013030 / 1558880-H), headed by Managing Director Benedict Tan, located at 33, Jalan SS2/24, SS2, 47300 Petaling Jaya, Selangor.
            </p>
          </div>

          {/* Attribution to Promanage ABNB Resources & Inside Style */}
          <div className="space-y-3">
            <h4 className="font-bold text-base text-stone-900">
              PDF Source Entity Audit (Inside Style & Promanage ABNB Resources)
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              The attached 73-page company profile contains historical and associated brand attributions:
            </p>
            <ul className="list-disc pl-5 text-sm text-stone-700 space-y-2">
              <li>
                <strong>Promanage ABNB Resources:</strong> Mentioned on Cover Slide (Page 1), About Us (Page 2), and Closing Slide (Page 73).
              </li>
              <li>
                <strong>Inside Style:</strong> Multiple project slides (Pages 18–28, 41–42, 51–53) bear the <em>Inside Style</em> watermark or explicit heading (e.g. Inside Style @ Petaling Jaya SS2).
              </li>
              <li>
                <strong>Attribution Boundary:</strong> In strict compliance with guidelines, we do not fabricate or speculate on corporate partnerships, mergers, parent/subsidiary relationships, or trade affiliations. Original watermarks and source attributions are recorded transparently in the project manifest.
              </li>
            </ul>
          </div>

          {/* Project Statuses */}
          <div className="space-y-3">
            <h4 className="font-bold text-base text-stone-900">
              Project Status Designations in Profile
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              In accordance with project guidelines:
            </p>
            <ul className="list-disc pl-5 text-sm text-stone-700 space-y-1.5">
              <li>
                <strong>Pages 60–64</strong> (Diamond Residence Semenyih, Logistics Warehouse Teluk Gong): Cataloged as <em>&quot;Status in company profile: On-going Project&quot;</em>.
              </li>
              <li>
                <strong>Pages 66–72</strong> (Pulau Ketam Floating Fish Cage, The Pearl @ KLCC): Cataloged as <em>&quot;Status in company profile: Designing Stage&quot;</em>.
              </li>
              <li>
                Other projects are described objectively as profile case studies without unverified claims of completion dates.
              </li>
            </ul>
          </div>

          {/* Asset Slot Policy */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-950">
            <strong>Asset Slot & No-Stock Policy:</strong> All portfolio items are strictly mapped from the 73-page PDF archive. No generic AI stock photography, fake before-and-after pairs, or fictional projects are introduced.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-stone-800 text-white font-semibold text-sm hover:bg-stone-700 min-h-[44px]"
          >
            Close Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevNotesModal;
