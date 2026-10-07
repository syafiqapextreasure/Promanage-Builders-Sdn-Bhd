export interface StudyPhoto { src: string; alt: string; caption: string }
export interface ProjectStudy {
  slug: string; name: string; heading: string; title: string; description: string;
  location: string; type: string; evidence: string; intro: string; hero: StudyPhoto;
  sections: { heading: string; text: string }[]; photos: StudyPhoto[];
  preparation: string[]; services: { label: string; slug: string }[]; video?: boolean;
}
const projectPhoto = (project: string, number: string, alt: string, caption: string): StudyPhoto => ({
  src: `/images/projects/${project}-${number}.webp`, alt, caption,
});
export const PROJECT_STUDIES: ProjectStudy[] = [
  {
    slug: 'diamond-residence-semenyih', name: 'Diamond Residence, Semenyih',
    heading: 'House extension & wet works at Diamond Residence',
    title: 'Diamond Residence House Extension, Semenyih | Promanage',
    description: 'Explore construction-stage photographs and exterior design concepts from Diamond Residence, Semenyih, with house-extension and wet-works planning details.',
    location: 'Semenyih, Selangor', type: 'House extension & wet works',
    evidence: 'Construction-stage photographs and exterior design concepts',
    intro: 'Diamond Residence illustrates the connection between an existing house and new construction. The original company portfolio records this project as ongoing at the time of documentation. These photographs show that recorded construction stage, alongside the exterior design concepts.',
    hero: projectPhoto('diamond-residence-semenyih', '05', 'Scaffolding and construction work alongside the existing Diamond Residence house in Semenyih', 'Construction-stage photograph · Diamond Residence, Semenyih'),
    sections: [
      { heading: 'Working beside an existing house', text: 'The site photographs show construction alongside the existing building, with scaffolding, formwork and structural elements at different stages. This is a useful view of extension work before finishes are installed: the new space must be considered together with the original house, the site boundary and access for the work.' },
      { heading: 'Structure, wet works and the sequence of trades', text: 'The recorded work includes concrete and masonry elements, temporary supports and ground-level activity around the building. For a similar extension, the construction scope should establish the proposed layout, structural requirements and connections to existing rooms and services. Finishing decisions follow from that scope, rather than being planned in isolation.' },
      { heading: 'Understanding the design images', text: 'The exterior visualisations show the proposed architectural appearance. They are design concepts, while the accompanying site photographs document construction in progress. Keeping these two types of image separate helps you understand the design intention and the stage actually recorded in the portfolio.' },
      { heading: 'Planning your own house extension', text: 'Start with the space you need and how it will be used. Existing plans, photographs and proposed drawings help explain the property and the connection between old and new areas. Site conditions, access, approvals and the agreed scope influence both the quotation and the programme. Share these requirements early so the proposed work can be discussed clearly.' },
    ],
    photos: [
      projectPhoto('diamond-residence-semenyih', '03', 'Concrete framework and temporary supports at Diamond Residence during construction', 'Construction stage · Framework and temporary supports'),
      projectPhoto('diamond-residence-semenyih', '04', 'Diamond Residence extension work with formwork and scaffolding', 'Construction stage · Formwork and site access'),
      projectPhoto('diamond-residence-semenyih', '07', 'Structural work recorded during the Diamond Residence project', 'Construction stage · Structural work'),
      projectPhoto('diamond-residence-semenyih', '08', 'Ground-level work beside the Diamond Residence building', 'Construction stage · Work around the existing building'),
      projectPhoto('diamond-residence-semenyih', '09', 'Concrete slab and ground-level construction at Diamond Residence', 'Construction stage · Concrete slab and ground-level work'),
      projectPhoto('diamond-residence-semenyih', '01', 'Exterior architectural visualisation for Diamond Residence, Semenyih', 'Exterior design concept · A visualisation, not a completion photograph'),
    ],
    preparation: ['Property address and photographs of the existing house', 'Existing plans and proposed drawings, if available', 'The additional space you need and its intended use', 'Site access, occupancy, approximate budget and preferred timeline'],
    services: [{ label: 'House extensions & wet works', slug: 'construction' }, { label: 'Renovation', slug: 'renovation' }],
  },
  {
    slug: 'dahlia-rawang', name: 'Dahlia, Rawang',
    heading: 'Kitchen renovation & cabinetry at Dahlia',
    title: 'Dahlia Kitchen Renovation & Cabinetry, Rawang | Promanage',
    description: 'View original Dahlia, Rawang project photographs showing kitchen counters, custom cabinetry, display niches and built-in storage by Promanage Builders.',
    location: 'Rawang, Selangor', type: 'Kitchen renovation & cabinetry',
    evidence: 'Original project photographs of installed cabinetry and kitchen areas',
    intro: 'The Dahlia project photographs bring together a kitchen and built-in storage in a warm wood and grey palette. They show installed cabinetry, counters and illuminated display details, providing a closer look at the surfaces and storage arrangements recorded in the company portfolio.',
    hero: projectPhoto('dahlia-rawang', '04', 'Dahlia kitchen in Rawang with grey and wood cabinetry, counters and glazed display storage', 'Original project photograph · Dahlia, Rawang'),
    sections: [
      { heading: 'A connected kitchen layout', text: 'The photographs show cooking and sink counters alongside tall storage and an additional counter projecting into the room. These elements illustrate why kitchen planning needs to consider movement, preparation space and cabinet access together. The counters and storage give a useful reference for discussing how the kitchen will be used day to day.' },
      { heading: 'Built-in storage and display details', text: 'Full-height units, enclosed cupboards and open display niches appear across the project photographs. Warm illumination draws attention to selected shelves, while the grey and wood finishes connect the kitchen with adjoining storage. These details offer useful references when discussing the balance between everyday storage and items you want to display.' },
      { heading: 'Planning finishes with everyday use', text: 'Cabinet fronts, counters, appliances and lighting should be discussed as one kitchen arrangement. For your own renovation, identify the appliances you want to keep, the items you need to store and the surfaces used most often. Measurements and existing service positions are needed before a photograph can be translated into a workable layout for a different home.' },
      { heading: 'Discussing a similar renovation', text: 'Share photographs and a floor plan of your kitchen, together with your preferred finishes and storage priorities. Tell us whether the home will remain occupied and whether other rooms are part of the work. Promanage can discuss cabinetry and related renovation requirements together, with the scope based on your property rather than the appearance of a reference image alone.' },
    ],
    photos: [
      projectPhoto('dahlia-rawang', '01', 'Full-height grey and wood built-in cabinetry at Dahlia, Rawang', 'Built-in storage · Grey and warm wood finishes'),
      projectPhoto('dahlia-rawang', '02', 'Illuminated display niches within Dahlia built-in cabinetry', 'Display storage · Illuminated niches'),
      projectPhoto('dahlia-rawang', '03', 'Tall storage unit beside the Dahlia kitchen counter', 'Kitchen storage · Tall units beside the counter'),
      projectPhoto('dahlia-rawang', '05', 'Cooking counter, extractor hood and cabinets in the Dahlia kitchen', 'Cooking area · Counter, hood and cabinetry'),
      projectPhoto('dahlia-rawang', '06', 'Sink counter by the window with adjoining cabinetry at Dahlia', 'Sink area · Window-side counter and storage'),
      projectPhoto('dahlia-rawang', '07', 'Kitchen worktop and wall cabinetry at Dahlia, Rawang', 'Kitchen details · Worktop and wall cabinetry'),
    ],
    preparation: ['Kitchen photographs and a floor plan or measurements', 'Existing appliances and the appliances you plan to add', 'Storage priorities and preferred material or colour references', 'Property location, occupancy, approximate budget and target timeline'],
    services: [{ label: 'Home renovation', slug: 'renovation' }, { label: 'Interior design & cabinetry', slug: 'interior-design' }],
  },
  {
    slug: 'common-area-maintenance', name: 'Common-area maintenance & repairs',
    heading: 'Common-area maintenance for JMBs, MCs & MOs',
    title: 'Common-Area Repair Showcase & Video Transcript | Promanage',
    description: 'Watch Promanage’s building-maintenance video, read its transcript and view pavement, fire-door and defect examples for JMBs, MCs and management offices.',
    location: 'Maintenance work showcase', type: 'Building maintenance & repairs',
    evidence: 'Original maintenance video and frames extracted from that video',
    intro: 'Our maintenance video brings together examples of defects and repair work in shared building areas. The showcase covers pavement, signage, fire doors, plumbing, wet works and waterproofing. The examples show the different types of work that building management can discuss with our team.',
    hero: { src: '/media/pavement-repairs.webp', alt: 'Repaired block pavement shown in the Promanage maintenance video', caption: 'Pavement repair example · Original maintenance video' },
    video: true,
    sections: [
      { heading: 'Recognising defects in shared areas', text: 'The opening sequence identifies cracked walls, damaged signage, uneven pavement, worn-out fire doors, leaking pipes and water seepage. For a JMB, MC or management office, recording each affected location and its condition makes an enquiry clearer. Photographs should show both the defect and the surrounding area so access and the repair extent can be discussed.' },
      { heading: 'Pavement and fire-door examples', text: 'The video labels pavement scenes before and after repair and shows replacement fire doors. These frames give a view of the work presented in the original footage. For your building, materials, specifications, cost and timing can be discussed after reviewing the actual site and repair scope.' },
      { heading: 'Plumbing, water seepage and wet works', text: 'The footage also includes pipework and waterproofing examples. Where water is involved, the enquiry should describe where it appears, when it occurs and any earlier repair attempts. Discussing the likely source and affected areas is more useful than assuming every leak can be resolved by the same treatment.' },
      { heading: 'Coordinating an enquiry from management', text: 'Combine your defect list, photographs and priorities into one enquiry. Include the building location, a management contact, available access and restrictions on working hours. Promanage serves Petaling Jaya and Klang Valley, with the repair scope discussed around the building’s condition and the needs of people using its shared spaces.' },
    ],
    photos: [
      { src: '/images/case-studies/maintenance-signage.webp', alt: 'Damaged signage identified in the maintenance video', caption: 'Defect example · Damaged signage' },
      { src: '/images/case-studies/maintenance-pavement-before.webp', alt: 'Pavement scene labelled before repair in the maintenance video', caption: 'Pavement · Before repair, as labelled in the video' },
      { src: '/media/pavement-repairs.webp', alt: 'Pavement scene labelled after repair in the maintenance video', caption: 'Pavement · After repair, as labelled in the video' },
      { src: '/images/case-studies/maintenance-fire-doors-after.webp', alt: 'Replacement fire doors presented in the maintenance video', caption: 'Fire-door replacement · Repair example' },
      { src: '/images/case-studies/maintenance-pipes.webp', alt: 'Pipework shown as a maintenance defect in the original video', caption: 'Plumbing · Pipework example from the video' },
      { src: '/images/case-studies/maintenance-waterproofing.webp', alt: 'Waterproofing work area shown in the original maintenance video', caption: 'Waterproofing · Work area shown in the video' },
    ],
    preparation: ['Building name, location and a JMB, MC or management-office contact', 'Photographs and a short description of each affected area', 'Your repair priorities and any available measurements', 'Access arrangements, resident-use constraints and working-hour restrictions'],
    services: [{ label: 'Building maintenance & repairs', slug: 'building-maintenance' }],
  },
];
export function findProjectStudy(slug: string) { return PROJECT_STUDIES.find(study => study.slug === slug); }
