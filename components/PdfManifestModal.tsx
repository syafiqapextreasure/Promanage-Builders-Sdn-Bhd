'use client';

import React, { useState } from 'react';
import { PDF_PAGE_MANIFEST } from '@/data/portfolio-data';
import { X, Search, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

interface PdfManifestModalProps {
  onClose: () => void;
}

export const PdfManifestModal: React.FC<PdfManifestModalProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = PDF_PAGE_MANIFEST.filter((entry) => {
    const q = searchTerm.toLowerCase();
    return (
      entry.page.toString().includes(q) ||
      entry.title.toLowerCase().includes(q) ||
      entry.entity.toLowerCase().includes(q) ||
      entry.type.toLowerCase().includes(q) ||
      (entry.mappedProject && entry.mappedProject.toLowerCase().includes(q))
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="manifest-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-amber-400" aria-hidden="true" />
            <div>
              <h2 id="manifest-title" className="text-xl sm:text-2xl font-bold tracking-tight">
                73-Page Company Profile Asset Manifest
              </h2>
              <p className="text-xs sm:text-sm text-stone-300">
                Complete audit of all 73 profile slides, media classifications, entity attributions & project mappings.
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

        {/* Audit Disclaimer Banner */}
        <div className="px-6 py-4 bg-amber-50 border-b border-amber-200 text-amber-950 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="leading-relaxed">
            <strong>Transparency Notice:</strong> All slide references are directly indexed from the 73-page company profile. Watermarks for <em>Inside Style</em> and <em>Promanage ABNB Resources</em> are preserved as documented. Projects on Pages 60–64 are cataloged under &quot;Status in company profile: On-going Project&quot; and Pages 66–72 under &quot;Status in company profile: Designing Stage&quot;.
          </div>
        </div>

        {/* Search bar */}
        <div className="p-4 bg-stone-100 border-b border-stone-200">
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by page number, project name, category or entity..."
              className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-[16px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
            />
          </div>
        </div>

        {/* Manifest Table */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          <table className="w-full text-left border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b-2 border-stone-300 text-xs font-bold uppercase text-stone-600 tracking-wider">
                <th className="py-3 px-3 w-16">Page</th>
                <th className="py-3 px-3">Slide Content & Title</th>
                <th className="py-3 px-3 hidden md:table-cell">Media / Slide Type</th>
                <th className="py-3 px-3 hidden sm:table-cell">Documented Entity</th>
                <th className="py-3 px-3">Mapped Portfolio Gallery</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              {filteredEntries.map((row) => (
                <tr key={row.page} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-stone-900">{row.page}</td>
                  <td className="py-3 px-3 font-medium text-stone-900">{row.title}</td>
                  <td className="py-3 px-3 hidden md:table-cell text-xs font-mono text-stone-600">
                    {row.type}
                  </td>
                  <td className="py-3 px-3 hidden sm:table-cell text-xs text-stone-600">
                    {row.entity}
                  </td>
                  <td className="py-3 px-3 text-xs font-semibold text-[#27482A]">
                    {row.mappedProject ? (
                      <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-1 rounded inline-block">
                        {row.mappedProject}
                      </span>
                    ) : (
                      <span className="text-stone-400 font-mono italic">Profile Section</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEntries.length === 0 && (
            <div className="text-center py-10 text-stone-500">
              No matching pages found for &quot;{searchTerm}&quot;.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-between items-center text-xs text-stone-600">
          <span>Showing {filteredEntries.length} of 73 indexed slides</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-stone-800 text-white font-semibold text-sm hover:bg-stone-700 min-h-[44px]"
          >
            Close Manifest
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfManifestModal;
