export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'services-offered',
    question: 'What core services does Promanage Builders Sdn Bhd provide?',
    answer:
      'We undertake four main service domains: Interior Design (spatial planning, 3D visualization, material selection, furnishing and decor), Renovation & Repairs (full-house renovation, kitchen & bathroom remodeling, customized built-in cabinetry, tile and wood flooring, plumbing, wiring, painting, and waterproofing), Construction Works (design-and-build, residential and commercial construction, house extensions, additions, and structural alterations), and Project Management (schedule planning, contractor coordination, and quality supervision).'
  },
  {
    id: 'consultation-prep',
    question: 'What information should I prepare before our initial project discussion?',
    answer:
      'To help us understand your requirements efficiently, it is beneficial to have your property floor plan (or developer layout), photos or videos of the existing site, your target moving-in date, a general list of priority areas (e.g. wet/dry kitchen, carpentry, structural extensions, bathrooms), and any stylistic references or specific functional needs.'
  },
  {
    id: 'scope-timing-cost',
    question: 'How does project scope affect the timeline and overall project cost?',
    answer:
      'Timelines and costs vary significantly based on project scope, authority submissions, site accessibility, and material selections. Minor interior fit-outs or focused cabinetry works may take several weeks, whereas extensive structural alterations, bungalow additions, or commercial fit-outs require structural assessments, detailed schedule planning (such as Gantt charting), and phased contractor coordination. We review your specific site conditions and scope during our initial discussion to formulate an appropriate project schedule and quotation.'
  },
  {
    id: 'residential-commercial',
    question: 'Do you handle both residential homes and commercial commercial premises?',
    answer:
      'Yes. Our portfolio encompasses both landed residences and high-rise condominiums (such as Lake City, Damansara Perdana, and Bangsar South) as well as commercial projects including corporate headquarters, office fit-outs, industrial canopies, and retail/F&B outlets (such as Rotiboy R&R Awan Besar and Menara Keck Seng).'
  },
  {
    id: 'project-supervision',
    question: 'How are works coordinated and supervised on-site?',
    answer:
      'Every project is personally coordinated by our team. We oversee work sequencing across trades—including structural work, wet trades, electrical wiring, plumbing, carpentry installation, and finishing—to maintain safety standards, verify workmanship quality, and keep progress aligned with planned schedules.'
  }
];
