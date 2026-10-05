import React from 'react';
import { MessageSquare, LayoutGrid, Hammer, KeyRound, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const CustomerJourneySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discuss',
      subtitle: 'Initial Consultation & Site Review',
      desc: 'We begin with an open discussion of your space, lifestyle or business requirements, target timeframe, and overall scope priorities.',
      icon: MessageSquare
    },
    {
      step: '02',
      title: 'Plan & Design',
      subtitle: 'Space Planning & 3D Visualization',
      desc: 'Developing practical spatial layouts, selecting material finishes, creating 3D visual concepts, and structuring a phased schedule.',
      icon: LayoutGrid
    },
    {
      step: '03',
      title: 'Build & Coordinate',
      subtitle: 'Personal On-Site Supervision',
      desc: 'Executing wet trades, electrical wiring, plumbing, and precision carpentry joinery under continuous on-site team coordination.',
      icon: Hammer
    },
    {
      step: '04',
      title: 'Review & Handover',
      subtitle: 'Final Walkthrough & Completion',
      desc: 'Conducting a thorough joint inspection, addressing punch-list details, and officially handing over your newly finished space.',
      icon: KeyRound
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-[#8A6A2C] uppercase">
            Suggested Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2722] tracking-tight mt-2 text-balance">
            Our Typical Customer Journey
          </h2>
          <p className="text-[18px] sm:text-[20px] text-stone-700 mt-4 leading-relaxed font-normal">
            A collaborative and transparent workflow designed to give you clarity and confidence at every milestone.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl border border-stone-300 bg-[#FAF8F5] p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-[#8A6A2C]">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#27482A] text-white">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5 mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-[16px] sm:text-[17px] text-stone-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/80 text-xs text-stone-500 font-mono flex items-center justify-between">
                  <span>Stage {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="w-4 h-4 text-stone-400 hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Process */}
        <div className="mt-10 p-5 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 text-sm leading-relaxed max-w-4xl mx-auto text-center">
          <em>Note: Every property and renovation project is unique. The workflow above represents our standard coordination approach and is tailored during initial consultations to match your specific property requirements, structural needs, and schedule.</em>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourneySection;
