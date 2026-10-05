'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/faq-data';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'services-offered': true,
    'consultation-prep': false,
    'scope-timing-cost': false
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6A2C] uppercase">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2722] tracking-tight mt-2 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] sm:text-[20px] text-stone-700 mt-4 leading-relaxed font-normal">
            Clear insights into our services, preparation steps, and project scheduling.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                className="rounded-xl border border-stone-300 bg-white overflow-hidden shadow-2xs transition-shadow hover:shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-[19px] sm:text-[21px] font-bold text-stone-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-lg bg-stone-100 text-stone-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#27482A] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-[17px] sm:text-[19px] text-stone-700 leading-relaxed font-normal border-t border-stone-100"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-300 text-center space-y-3">
          <h3 className="text-xl font-bold text-stone-900">
            Have a specific project question?
          </h3>
          <p className="text-[17px] text-stone-600 max-w-xl mx-auto">
            Benedict Tan and our team are available on WhatsApp to discuss your floor plan and scope requirements directly.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl("Hello Benedict Tan, I have a question regarding my upcoming renovation project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 min-h-[48px] px-6 py-3 rounded-lg bg-[#27482A] text-white text-[17px] font-semibold hover:bg-[#1C351E] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B89047]"
            >
              <MessageSquare className="w-5 h-5 text-amber-300" aria-hidden="true" />
              <span>Ask Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
