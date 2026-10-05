'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    "Hello Benedict Tan, I would like to enquire about your renovation and construction services."
  );

  return (
    <aside
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 min-h-[48px] px-4 py-2.5 rounded-full bg-[#27482A] text-white shadow-lg hover:bg-[#1E3720] hover:shadow-xl active:scale-[0.98] transition-all border border-amber-300/40 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-[#B89047]"
        aria-label="Direct WhatsApp enquiry to Benedict Tan at +60 16 328 1581"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-700/80 flex items-center justify-center shrink-0">
          <MessageSquare className="w-4 h-4 text-amber-300" aria-hidden="true" />
        </div>
        <div className="flex flex-col text-left pr-1">
          <span className="text-[14px] sm:text-[15px] font-bold leading-none tracking-tight">
            WhatsApp Enquiry
          </span>
          <span className="text-[11px] text-amber-200 font-medium leading-none mt-1">
            +60 16 328 1581
          </span>
        </div>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
