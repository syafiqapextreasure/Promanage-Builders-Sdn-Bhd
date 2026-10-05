import React from 'react';
import { Compass, Hammer, Building, ClipboardCheck } from 'lucide-react';

export const ExpertiseStrip: React.FC = () => {
  const expertises = [
    {
      num: '01',
      title: 'Interior Design',
      desc: 'Space planning, 3D visualization, color coordination and curated furnishings.',
      icon: Compass,
      accent: 'border-l-4 border-[#B89047]'
    },
    {
      num: '02',
      title: 'Renovation Services',
      desc: 'Full-house, kitchen & bath remodeling, custom carpentry, plumbing & wiring.',
      icon: Hammer,
      accent: 'border-l-4 border-[#27482A]'
    },
    {
      num: '03',
      title: 'Construction Works',
      desc: 'Design & build, residential/commercial building, extensions and alterations.',
      icon: Building,
      accent: 'border-l-4 border-[#B89047]'
    },
    {
      num: '04',
      title: 'Project Management',
      desc: 'Budget planning, progress scheduling, contractor coordination & supervision.',
      icon: ClipboardCheck,
      accent: 'border-l-4 border-[#27482A]'
    }
  ];

  return (
    <section className="bg-stone-900 text-white py-8 md:py-10 border-b border-stone-800" aria-label="Our 4 Areas of Expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`bg-stone-800/80 p-5 rounded-r-lg ${item.accent} flex flex-col justify-between space-y-3 transition-colors hover:bg-stone-800`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-400 tracking-wider">
                    {item.num}. EXPERTISE
                  </span>
                  <Icon className="w-5 h-5 text-stone-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-stone-300 leading-normal mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center text-stone-300 text-[16px] sm:text-[17px] font-medium border-t border-stone-800 pt-4">
          Every stage is personally supervised by our team to ensure both quality and efficiency.
        </div>
      </div>
    </section>
  );
};

export default ExpertiseStrip;
