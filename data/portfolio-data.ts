import { SITE_IMAGES } from '@/lib/project-images';

export interface ProjectMedia {
  id: string;
  title: string;
  sourcePages: string;
  pagesArray: number[];
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Construction';
  subCategory?: string;
  location: string;
  mediaType: 'Photograph' | '3D Render' | 'Mixed (Photos & Renders)' | 'Site & Architectural Drawings';
  statusInProfile: 'Profile Showcase' | 'On-going Project' | 'Designing Stage';
  attributionInPdf: 'Inside Style' | 'Promanage ABNB Resources' | 'Promanage Builders' | 'Unspecified in slide';
  description: string;
  featured: boolean;
  highlights: string[];
  aspectRatio: string;
  image: string;
  visualTheme: {
    primaryColor: string;
    accentColor: string;
    styleTag: string;
  };
}

export const PORTFOLIO_PROJECTS: ProjectMedia[] = [
  {
    id: 'aradia-lake-city',
    title: 'Aradia @ Lake City',
    sourcePages: 'Pages 18, 31–32, 57–58',
    pagesArray: [18, 31, 32, 57, 58],
    category: 'Residential',
    subCategory: 'Condominium Interior Fit-out & Renovation',
    location: 'Lake City, Kuala Lumpur',
    mediaType: 'Mixed (Photos & Renders)',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Inside Style',
    featured: true,
    image: SITE_IMAGES.aradiaLiving,
    description: 'Comprehensive residential interior styling and carpentry fit-out featuring fluted timber feature panels, integrated warm LED display shelving, bespoke shoe cabinetry, modern open kitchen with quartz countertops, and luxury bathroom marble-tile remodeling.',
    highlights: [
      'Page 18: Living room media console with warm-lit display niches and fluted partition',
      'Page 31: Dining and living fit-out with marble tile flooring and full-height glass partitions',
      'Page 32: Custom kitchen cabinetry, master bedroom fit-out, and shower screen installation',
      'Pages 57–58: Wood-grain kitchen island bar counter, ambient pendant lighting, and bespoke pantry carpentry'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#2B302C',
      accentColor: '#C59B27',
      styleTag: 'Modern Contemporary Interior'
    }
  },
  {
    id: 'd-cosmos-damansara-perdana',
    title: "D'Cosmos @ Damansara Perdana",
    sourcePages: 'Page 19',
    pagesArray: [19],
    category: 'Residential',
    subCategory: 'Modern High-Rise Interior Design',
    location: 'Damansara Perdana, Petaling Jaya',
    mediaType: '3D Render',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Inside Style',
    featured: true,
    image: SITE_IMAGES.dcosmosMinimalist,
    description: 'Elegantly proportioned modern residence designed with soft curved ceiling coves, minimalist fluted TV feature wall, dual-tone kitchen cabinetry, fluted reeded glass entryway screens, and serene bedroom lighting.',
    highlights: [
      'Curved cove ceiling lighting with sculptural brass pendant',
      'Reeded glass and black-framed entryway divider',
      'Integrated quartz countertop dry kitchen with LED ambient strip'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#3A423D',
      accentColor: '#D4A373',
      styleTag: 'Warm Minimalist Luxury'
    }
  },
  {
    id: 'rimbayu-robin-teluk-panglima',
    title: 'Rimbayu Robin @ Teluk Panglima',
    sourcePages: 'Pages 20–23',
    pagesArray: [20, 21, 22, 23],
    category: 'Residential',
    subCategory: 'Landed Home Full Interior & Renovation',
    location: 'Teluk Panglima Garang, Selangor',
    mediaType: 'Mixed (Photos & Renders)',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Inside Style',
    featured: true,
    image: SITE_IMAGES.rimbayuLanded,
    description: 'Full-scale landed residence transformation showcasing expansive living hall cabinetry, floor-to-ceiling tinted glass display showcases, wet and dry kitchen renovation, custom laundry room counter, and modern illuminated floating staircase handrails.',
    highlights: [
      'Pages 20–21: 3D visual concept featuring linear ceiling cove, glass cabinets, and soft palette',
      'Pages 22–23: Actual site completion photographs showing precision carpentry, sleek black glass finishes, and illuminated staircase'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#253528',
      accentColor: '#B89047',
      styleTag: 'Landed Home Renovation'
    }
  },
  {
    id: 'ikhasas-group-hq',
    title: 'Ikhasas Group @ HQ',
    sourcePages: 'Pages 26–28',
    pagesArray: [26, 27, 28],
    category: 'Commercial',
    subCategory: 'Corporate Headquarters & Creative Workspace',
    location: 'Klang Valley',
    mediaType: '3D Render',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Inside Style',
    featured: true,
    image: SITE_IMAGES.ikhasasOffice,
    description: 'Dynamic commercial office interior featuring terra-cotta archway portals, acoustic carpet tiling, stepped amphitheater collaboration zones, private glass meeting suites, and ergonomic modular team desking.',
    highlights: [
      'Sculptural vaulted archway gallery with curved ribbed display plinths',
      'Multi-tier wooden stepped seating for team townhalls and breakout discussions',
      'Full glass conference rooms with acoustic fluted timber ceiling slats'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#7A3E2D',
      accentColor: '#4A6B53',
      styleTag: 'Corporate & Creative Workspace'
    }
  },
  {
    id: 'shuyi-tanjung-malim',
    title: 'ShuYi @ Tanjung Malim',
    sourcePages: 'Pages 9–17',
    pagesArray: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    category: 'Construction',
    subCategory: 'Estate Development, Bridge Shoring & Multi-Purpose Event Hall',
    location: 'Tanjung Malim, Perak',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: true,
    image: SITE_IMAGES.shuyiHall,
    description: 'Extensive multi-phase civil and structural undertaking encompassing land clearing, heavy vehicular access, river bridge foundation shoring, reinforced concrete ground beam and pad foundation works, building construction, event hall interior fit-out, outdoor dining pavilions, grand entrance portal with stone lion guardians, and glamping tent structures.',
    highlights: [
      'Pages 9–10: Site clearing, earthworks, and heavy excavator machinery access',
      'Page 11: Steel shoring and hydraulic beam support under river crossing bridge',
      'Page 12: Reinforced concrete beam cast, formwork, and exterior brick wall erection',
      'Pages 13–14: Aerial drone survey of estate compound, hall roofing, and illuminated outdoor dining plaza',
      'Page 15: Grand traditional ceremonial entrance portal with stone carvings and bronze door hardware',
      'Pages 16–17: Multi-purpose event seminar hall and luxury permanent glamping pavilion suites'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#2D3A29',
      accentColor: '#B89047',
      styleTag: 'Civil & Structural Building'
    }
  },
  {
    id: 'desa-villa-taman-desa',
    title: 'Desa Villa @ Taman Desa',
    sourcePages: 'Pages 51–53',
    pagesArray: [51, 52, 53],
    category: 'Renovation',
    subCategory: 'Residential Remodeling & Premium Wet/Dry Kitchen',
    location: 'Taman Desa, Kuala Lumpur',
    mediaType: 'Mixed (Photos & Renders)',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Inside Style',
    featured: true,
    image: SITE_IMAGES.desaVillaKitchen,
    description: 'Holistic condominium renovation featuring custom dining bench nook with arched backing, full wet kitchen remodel with black aluminum sliding doors, solid surface countertops, slate-effect luxury bathroom tiles, and full-height bedroom wardrobe storage.',
    highlights: [
      'Page 51: 3D concept render of open plan living and linear kitchen layout',
      'Pages 52–53: Completed photographs of built-in banquette dining, matte cabinetry, and master bathroom tiling'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#363E36',
      accentColor: '#C59B27',
      styleTag: 'Residential Remodel'
    }
  },
  {
    id: 'diamond-residence-semenyih',
    title: 'Diamond Residence @ Semenyih',
    sourcePages: 'Pages 60–62',
    pagesArray: [60, 61, 62],
    category: 'Construction',
    subCategory: 'Luxury Bungalow Structural Addition & Extension',
    location: 'Semenyih, Selangor',
    mediaType: 'Mixed (Photos & Renders)',
    statusInProfile: 'On-going Project',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.diamondConstruction,
    description: 'Substantial structural home extension for a multi-storey classical bungalow. Encompasses reinforced concrete ground slab pouring, structural columns, steel reinforcement, roof terrace casting, and site safety hoarding.',
    highlights: [
      'Page 60: Architectural 3D perspective of proposed multi-storey addition and balcony framing',
      'Pages 61–62: Structural progress photos showing scaffolding, column forms, concrete slab cast, and plumbing drainage works',
      'Note: Status reflects company profile documentation'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#4A3B2C',
      accentColor: '#B89047',
      styleTag: 'Structural House Extension'
    }
  },
  {
    id: 'logistics-warehouse-teluk-gong',
    title: 'Logistics Warehouse @ Teluk Gong',
    sourcePages: 'Pages 63–64',
    pagesArray: [63, 64],
    category: 'Construction',
    subCategory: 'Industrial Logistics Complex & Office Facility',
    location: 'Teluk Gong, Port Klang, Selangor',
    mediaType: 'Mixed (Photos & Renders)',
    statusInProfile: 'On-going Project',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.diamondConstruction,
    description: 'Multi-storey modern corporate logistics center paired with high-capacity industrial warehouse bays. Features contemporary curtain wall glazing, heavy vehicular turning courts, and landscaped perimeter.',
    highlights: [
      'Page 63: 3D external renders illustrating corporate annex, cantilevered roof eaves, and multi-bay warehouse connection',
      'Page 64: Initial site clearing and boundary leveling progress',
      'Note: Status reflects company profile documentation'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#2F3C47',
      accentColor: '#C59B27',
      styleTag: 'Industrial & Commercial Build'
    }
  },
  {
    id: 'pulau-ketam-floating-fish-cage',
    title: 'Floating Fish Cage Transformation Plan @ Pulau Ketam',
    sourcePages: 'Pages 66–68',
    pagesArray: [66, 67, 68],
    category: 'Commercial',
    subCategory: 'Marine Eco-Tourism & Floating Hospitality Complex',
    location: 'Pulau Ketam, Selangor',
    mediaType: 'Site & Architectural Drawings',
    statusInProfile: 'Designing Stage',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.shuyiHall,
    description: 'Visionary marine architectural conversion of offshore aquaculture platforms into an eco-resort destination. Includes pontoon flotation modular layout, master floor plans for guest chalets, seafood dining deck, and sunset lounge.',
    highlights: [
      'Page 66: Satellite positioning map and platform coordinates in Pulau Ketam channel',
      'Page 67: Pontoon substructure CAD engineering diagram and modular buoyancy tube framework',
      'Page 68: Architectural 3D renders of timber chalets, seaside bar lounge, and private dining rooms',
      'Note: Status reflects company profile documentation'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#1F3C4D',
      accentColor: '#E29578',
      styleTag: 'Marine Hospitality Concept'
    }
  },
  {
    id: 'the-pearl-klcc',
    title: 'The Pearl @ KLCC',
    sourcePages: 'Pages 69–72',
    pagesArray: [69, 70, 71, 72],
    category: 'Commercial',
    subCategory: 'Luxury High-Rise Sky Amenities & Club Facilities',
    location: 'Jalan Stonor, KLCC, Kuala Lumpur',
    mediaType: '3D Render',
    statusInProfile: 'Designing Stage',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.heroAradia,
    description: 'High-end amenity deck refurbishment concept encompassing semi-outdoor infinity water lounge, rooftop BBQ pavilions, multi-purpose banquet hall, indoor/outdoor fitness center, and rooftop children playground park.',
    highlights: [
      'Page 69: Outdoor reflecting pool sitting lounge with slatted timber acoustic walls',
      'Page 70: Multi-purpose banquet hall and sun-sheltered al-fresco BBQ terrace layouts',
      'Page 71: Dual indoor cardio gym and shaded open-air crossfit mezzanine',
      'Page 72: High-safety rooftop play park, lawn lounge, and panoramic skyline viewing deck',
      'Note: Status reflects company profile documentation'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#282F36',
      accentColor: '#B89047',
      styleTag: 'Luxury Amenities Design'
    }
  },
  {
    id: 'serene-mont-kiara',
    title: 'Serene @ Mont Kiara',
    sourcePages: 'Pages 24–25',
    pagesArray: [24, 25],
    category: 'Residential',
    subCategory: 'Classic Parisian Moulding & Contemporary Living',
    location: 'Mont Kiara, Kuala Lumpur',
    mediaType: '3D Render',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Inside Style',
    featured: false,
    image: SITE_IMAGES.dcosmosMinimalist,
    description: 'Sophisticated residential interior with wall panelling mouldings, open-concept dining and show kitchen, semi-outdoor patio seating, glass-door wardrobe wardrobes, and family entertainment lounge.',
    highlights: [
      'Page 24: Living and dining open concept with classic wainscoting and globe chandelier',
      'Page 25: Master suite walk-in wardrobe with lattice glass and curved niche TV console'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#4A4E46',
      accentColor: '#C59B27',
      styleTag: 'Modern Classical Elegance'
    }
  },
  {
    id: 'laurel-resident-bangsar-south',
    title: 'Laurel Resident @ Bangsar South',
    sourcePages: 'Pages 29–30',
    pagesArray: [29, 30],
    category: 'Residential',
    subCategory: 'Urban Condominium Interior Styling & Practical Carpentry',
    location: 'Bangsar South, Kuala Lumpur',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.aradiaLiving,
    description: 'Warm earth-toned urban apartment interior featuring compact space planning, linear kitchen with integrated laundry zone, natural wood dining table, and tranquil city-view bedroom.',
    highlights: [
      'Page 29: Panoramic skyline living room framed with double-layer linen curtains',
      'Page 30: Compact efficient kitchen joinery and space-saving bedroom dressing table'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#534B42',
      accentColor: '#D4A373',
      styleTag: 'Urban Comfort Residence'
    }
  },
  {
    id: 'cantara-residence-ara-damansara',
    title: 'Cantara Residence @ Ara Damansara',
    sourcePages: 'Pages 33–34',
    pagesArray: [33, 34],
    category: 'Residential',
    subCategory: 'Modern High-Rise Apartment Renovation',
    location: 'Ara Damansara, Petaling Jaya',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.aradiaLiving,
    description: 'Streamlined Scandinavian modern fit-out with acoustic slatted TV backdrop, bright white and wood-grain kitchen carpentry, textured feature wallpapers, and full-height bathroom mirror cabinets.',
    highlights: [
      'Page 33: Open-concept dining and lounge with track lighting and slatted TV wall',
      'Page 34: Grey porcelain bathroom tiling and custom entryway shoe storage'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#3B403B',
      accentColor: '#B89047',
      styleTag: 'Scandinavian Modern'
    }
  },
  {
    id: 'damansara-heights',
    title: 'Damansara Heights @ Kuala Lumpur',
    sourcePages: 'Pages 35–36',
    pagesArray: [35, 36],
    category: 'Residential',
    subCategory: 'Tropical Villa Landscaping & Koi Pond Pavilion',
    location: 'Damansara Heights, Kuala Lumpur',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.shuyiHall,
    description: 'Resort-style tropical outdoor renovation featuring sculpted koi pond water feature, Balinese timber gazebo pavilion, clay tile roofing, stone pathways, and lush garden planting.',
    highlights: [
      'Page 35: Villa exterior with multi-tier landscape pond and shaded patio',
      'Page 36: Dedicated timber gazebo and natural river pebble walkways'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#2B3F2E',
      accentColor: '#B89047',
      styleTag: 'Tropical Landscape & Water Feature'
    }
  },
  {
    id: 'taman-melawati',
    title: 'Taman Melawati @ Kuala Lumpur',
    sourcePages: 'Pages 37–40',
    pagesArray: [37, 38, 39, 40],
    category: 'Residential',
    subCategory: 'Courtyard Pool Villa & Zen Landscape Remodel',
    location: 'Taman Melawati, Kuala Lumpur',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.shuyiHall,
    description: 'Exclusive luxury courtyard villa renovation featuring floating concrete stepping stones across reflection ponds, timber trellis pergola, tropical swimming pool deck with solid timber planking, and sandstone boundary walls.',
    highlights: [
      'Page 37: Central indoor reflection pond with floating stepping stones and pebble garden',
      'Page 38: Zen water fountain corner and slate bathroom with tropical courtyard view',
      'Pages 39–40: Swimming pool timber deck installation, sandstone block perimeter wall, and lush palm landscape'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#303B31',
      accentColor: '#D4A373',
      styleTag: 'Courtyard Architecture'
    }
  },
  {
    id: 'inside-style-pj-ss2',
    title: 'Inside Style @ Petaling Jaya SS2',
    sourcePages: 'Pages 41–42',
    pagesArray: [41, 42],
    category: 'Commercial',
    subCategory: 'Design Studio & Material Showcase Center',
    location: 'SS2, Petaling Jaya, Selangor',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Inside Style',
    featured: false,
    image: SITE_IMAGES.ikhasasOffice,
    description: 'Corporate studio office and materials showcase in PJ SS2. Integrates an open lounge bar counter, fluted wood and glass brick partitions, quartz and granite sample display walls, executive discussion rooms, and fully functional demonstration pantry.',
    highlights: [
      'Page 41: Multi-level lounge featuring natural edge solid wood dining slab and illuminated glass block half-wall',
      'Page 42: Material sample library wall, parquet office workstations, and two-tone olive green pantry cabinets'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#2B3830',
      accentColor: '#B89047',
      styleTag: 'Studio & Showroom Fit-out'
    }
  },
  {
    id: 'suria-north-kiara',
    title: 'Suria @ North Kiara',
    sourcePages: 'Page 43',
    pagesArray: [43],
    category: 'Renovation',
    subCategory: 'Commercial Basement Security Fencing & Metalwork Installation',
    location: 'North Kiara, Kuala Lumpur',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.diamondConstruction,
    description: 'Site execution and technical fabrication of galvanized security mesh enclosures and industrial partitioning in commercial parking facilities.',
    highlights: [
      'Site welding, post alignment, and laser leveling for security cage installation',
      'Galvanized industrial wire fencing and partition gates'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#3C454B',
      accentColor: '#E09F3E',
      styleTag: 'Metalwork & Security Fabrication'
    }
  },
  {
    id: 'hong-leong-yamaha-motor-sungai-buloh',
    title: 'Hong Leong Yamaha Motor @ Sungai Buloh',
    sourcePages: 'Pages 44–45',
    pagesArray: [44, 45],
    category: 'Commercial',
    subCategory: 'Industrial Facility Covered Walkway & Steel Structural Canopy',
    location: 'Sungai Buloh, Selangor',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.diamondConstruction,
    description: 'Industrial structural engineering project featuring fabricated heavy-duty steel truss canopies, covered all-weather pedestrian walkways, loading bay structural roofing, and safety perimeter enclosures.',
    highlights: [
      'Page 44: High-clearance steel main entrance canopy and elevated ramp walkway trusses',
      'Page 45: Internal warehouse loading bay structural roofing and industrial ducting works'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#1E355B',
      accentColor: '#C59B27',
      styleTag: 'Industrial Steel Structure'
    }
  },
  {
    id: 'menara-keck-seng-bukit-bintang',
    title: 'Menara Keck Seng @ Bukit Bintang',
    sourcePages: 'Pages 46–47',
    pagesArray: [46, 47],
    category: 'Commercial',
    subCategory: 'Prime CBD Corporate Office Fit-Out',
    location: 'Bukit Bintang, Kuala Lumpur',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.ikhasasOffice,
    description: 'Comprehensive commercial fit-out for corporate office premises. Includes acoustic mineral ceiling grid installation, modular workstations with privacy dividers, frosted glass executive suites, boardrooms, and casual collaborative pantry bar.',
    highlights: [
      'Page 46: Open plan desk system, linear task lighting, and breakout conversation island',
      'Page 47: Solid timber conference table, glass block corridor wall, and acoustic quiet focus rooms'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#283238',
      accentColor: '#B89047',
      styleTag: 'Corporate Office Fit-Out'
    }
  },
  {
    id: 'rotiboy-rr-awam-besar',
    title: 'Rotiboy @ R&R Awan Besar',
    sourcePages: 'Page 48',
    pagesArray: [48],
    category: 'Commercial',
    subCategory: 'Highway Retail F&B Kiosk Fit-Out',
    location: 'KESAS Highway, Kuala Lumpur',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.desaVillaKitchen,
    description: 'Commercial retail kiosk fit-out for national bakery franchise. Encompasses timber slatted counter front, stainless steel food-grade commercial equipment installation, glass bakery display cases, and corporate brand signage.',
    highlights: [
      'Full front-counter cabinetry with natural wood slats and illuminated signage',
      'Back-of-house commercial ovens, stainless sink stations, and hygiene compliance'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#4A2810',
      accentColor: '#E29578',
      styleTag: 'Retail & Franchise Fit-Out'
    }
  },
  {
    id: 'd-quince-damansara-perdana',
    title: "D'Quince @ Damansara Perdana",
    sourcePages: 'Pages 49–50',
    pagesArray: [49, 50],
    category: 'Residential',
    subCategory: 'Modern High-Rise Interior & Carpentry',
    location: 'Damansara Perdana, Petaling Jaya',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.dcosmosMinimalist,
    description: 'Turnkey residential apartment package complete with compact shoe cabinet partition, living room furnishing, kitchen cabinetry, modern bathroom fittings with illuminated LED mirrors, and comfortable master bedroom suite.',
    highlights: [
      'Page 49: Living hall and circular coffee table setup with scenic mountain balcony view',
      'Page 50: Neutral tone kitchen joinery, illuminated vanity mirror, and modern shower setup'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#373E38',
      accentColor: '#C59B27',
      styleTag: 'High-Rise Residential'
    }
  },
  {
    id: 'dahlia-rawang',
    title: 'Dahlia @ Rawang',
    sourcePages: 'Pages 54–56',
    pagesArray: [54, 55, 56],
    category: 'Renovation',
    subCategory: 'Landed Home Kitchen & Carpentry Remodel',
    location: 'Rawang, Selangor',
    mediaType: 'Photograph',
    statusInProfile: 'Profile Showcase',
    attributionInPdf: 'Unspecified in slide',
    featured: false,
    image: SITE_IMAGES.desaVillaKitchen,
    description: 'Custom carpentry and full kitchen remodeling for double-storey landed residence. Features fluted wall panelling with illuminated display niche, illuminated glass vitrine cabinet, L-shaped quartz kitchen counter, undermount black composite granite sink, and modern exhaust hood ventilation.',
    highlights: [
      'Page 54: Entryway console with warm LED niche and tall fluted partition panel',
      'Pages 55–56: Complete L-shaped modern kitchen cabinetry with quartz worktops and breakfast bar'
    ],
    aspectRatio: '16:9',
    visualTheme: {
      primaryColor: '#343B33',
      accentColor: '#C59B27',
      styleTag: 'Custom Carpentry & Kitchen'
    }
  }
];

export const PDF_PAGE_MANIFEST = [
  { page: 1, title: 'Title Slide: Promanage ABNB Resources - Your Interior Design & Renovation Expert', entity: 'Promanage ABNB Resources', type: 'Cover Slide', mappedProject: null },
  { page: 2, title: 'About Us (Mentions Promanage ABNB Resources & Inside Style)', entity: 'Promanage ABNB Resources / Inside Style', type: 'Text / Company Info', mappedProject: null },
  { page: 3, title: 'Our 4 Areas of Expertise (Interior Design, Renovation, Construction, Project Management)', entity: 'General Profile', type: 'Overview', mappedProject: null },
  { page: 4, title: 'Interior Design Capabilities & Service Breakdown', entity: 'General Profile', type: 'Capability Overview', mappedProject: null },
  { page: 5, title: 'Renovation Services & Construction Works Breakdown', entity: 'General Profile', type: 'Capability Overview', mappedProject: null },
  { page: 6, title: 'Project Management & Quality Assurance', entity: 'General Profile', type: 'Capability Overview', mappedProject: null },
  { page: 7, title: 'Progress Schedule Planning (Diamond Residence Gantt Chart)', entity: 'General Profile', type: 'Project Management Planning', mappedProject: 'diamond-residence-semenyih' },
  { page: 8, title: 'Project Sharing Section Divider', entity: 'General Profile', type: 'Divider Slide', mappedProject: null },
  { page: 9, title: 'ShuYi @ Tanjung Malim - Land clearing & site terrain', entity: 'Promanage', type: 'Site Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 10, title: 'ShuYi @ Tanjung Malim - Excavation, tire foundation testing & aerial view', entity: 'Promanage', type: 'Site Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 11, title: 'ShuYi @ Tanjung Malim - River bridge steel shoring and structural reinforcement', entity: 'Promanage', type: 'Civil Engineering Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 12, title: 'ShuYi @ Tanjung Malim - Reinforced concrete ground beam & building construction', entity: 'Promanage', type: 'Construction Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 13, title: 'ShuYi @ Tanjung Malim - Aerial drone photography of estate compound and hall roof', entity: 'Promanage', type: 'Drone Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 14, title: 'ShuYi @ Tanjung Malim - Night photography of outdoor gathering hall and dining pavilion', entity: 'Promanage', type: 'Completed Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 15, title: 'ShuYi @ Tanjung Malim - Grand ceremonial entrance portal and carved stone lions', entity: 'Promanage', type: 'Completed Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 16, title: 'ShuYi @ Tanjung Malim - Large multi-purpose conference and seminar hall', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 17, title: 'ShuYi @ Tanjung Malim - Luxury glamping safari tent suites', entity: 'Promanage', type: 'Completed Photography', mappedProject: 'shuyi-tanjung-malim' },
  { page: 18, title: 'Aradia @ Lake City - Living room TV console and cabinetry (Watermark: Inside Style)', entity: 'Inside Style', type: '3D Render / Photography', mappedProject: 'aradia-lake-city' },
  { page: 19, title: "D'Cosmos @ Damansara Perdana - Warm modern interior visual (Watermark: Inside Style)", entity: 'Inside Style', type: '3D Render', mappedProject: 'd-cosmos-damansara-perdana' },
  { page: 20, title: 'Rimbayu Robin @ Teluk Panglima - Open concept living & dry kitchen visual', entity: 'Inside Style', type: '3D Render', mappedProject: 'rimbayu-robin-teluk-panglima' },
  { page: 21, title: 'Rimbayu Robin @ Teluk Panglima - Laundry nook, bedroom & dining render', entity: 'Inside Style', type: '3D Render', mappedProject: 'rimbayu-robin-teluk-panglima' },
  { page: 22, title: 'Rimbayu Robin @ Teluk Panglima - Living room built-in cabinetry completion photos', entity: 'Promanage / Inside Style', type: 'Site Photography', mappedProject: 'rimbayu-robin-teluk-panglima' },
  { page: 23, title: 'Rimbayu Robin @ Teluk Panglima - Island dry kitchen, staircase & living room photos', entity: 'Promanage / Inside Style', type: 'Site Photography', mappedProject: 'rimbayu-robin-teluk-panglima' },
  { page: 24, title: 'Serene @ Mont Kiara - Classical moulding & living/dining visual', entity: 'Inside Style', type: '3D Render', mappedProject: 'serene-mont-kiara' },
  { page: 25, title: 'Serene @ Mont Kiara - Master bedroom, daughter room & lounge visual', entity: 'Inside Style', type: '3D Render', mappedProject: 'serene-mont-kiara' },
  { page: 26, title: 'Ikhasas Group @ HQ - Curved arched gallery and reception showcase visual', entity: 'Inside Style', type: '3D Render', mappedProject: 'ikhasas-group-hq' },
  { page: 27, title: 'Ikhasas Group @ HQ - Collaboration amphitheater steps and open office desking', entity: 'Inside Style', type: '3D Render', mappedProject: 'ikhasas-group-hq' },
  { page: 28, title: 'Ikhasas Group @ HQ - Executive private offices and meeting rooms', entity: 'Inside Style', type: '3D Render', mappedProject: 'ikhasas-group-hq' },
  { page: 29, title: 'Laurel Resident @ Bangsar South - Warm modern living room photography', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'laurel-resident-bangsar-south' },
  { page: 30, title: 'Laurel Resident @ Bangsar South - Compact kitchen, dining & bedroom photography', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'laurel-resident-bangsar-south' },
  { page: 31, title: 'Aradia @ Lake City - Living/dining space and modern bathroom suite photography', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'aradia-lake-city' },
  { page: 32, title: 'Aradia @ Lake City - Kitchen glass sliding door & bedroom photography', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'aradia-lake-city' },
  { page: 33, title: 'Cantara Residence @ Ara Damansara - Modern apartment carpentry fit-out photography', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'cantara-residence-ara-damansara' },
  { page: 34, title: 'Cantara Residence @ Ara Damansara - Bathroom tiling and hallway photography', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'cantara-residence-ara-damansara' },
  { page: 35, title: 'Damansara Heights @ Kuala Lumpur - Tropical villa exterior and koi pond garden', entity: 'Promanage', type: 'Exterior Photography', mappedProject: 'damansara-heights' },
  { page: 36, title: 'Damansara Heights @ Kuala Lumpur - Balinese gazebo and pond feature', entity: 'Promanage', type: 'Landscape Photography', mappedProject: 'damansara-heights' },
  { page: 37, title: 'Taman Melawati @ Kuala Lumpur - Courtyard reflection pond and pebble pathway', entity: 'Promanage', type: 'Courtyard Photography', mappedProject: 'taman-melawati' },
  { page: 38, title: 'Taman Melawati @ Kuala Lumpur - Zen water fountain and slate bathroom', entity: 'Promanage', type: 'Interior/Exterior Photography', mappedProject: 'taman-melawati' },
  { page: 39, title: 'Taman Melawati @ Kuala Lumpur - Swimming pool timber deck construction progress', entity: 'Promanage', type: 'Construction Photography', mappedProject: 'taman-melawati' },
  { page: 40, title: 'Taman Melawati @ Kuala Lumpur - Sandstone boundary walls and tropical grounds', entity: 'Promanage', type: 'Completed Photography', mappedProject: 'taman-melawati' },
  { page: 41, title: 'Inside Style @ Petaling Jaya SS2 - Studio office lounge bar and mezzanine', entity: 'Inside Style', type: 'Commercial Interior Photography', mappedProject: 'inside-style-pj-ss2' },
  { page: 42, title: 'Inside Style @ Petaling Jaya SS2 - Material samples library and executive rooms', entity: 'Inside Style', type: 'Showroom Photography', mappedProject: 'inside-style-pj-ss2' },
  { page: 43, title: 'Suria @ North Kiara - Metal security fencing and partitioning fabrication', entity: 'Promanage', type: 'Fabrication Photography', mappedProject: 'suria-north-kiara' },
  { page: 44, title: 'Hong Leong Yamaha Motor @ Sungai Buloh - Structural steel entrance canopy & walkway', entity: 'Promanage', type: 'Steel Structural Photography', mappedProject: 'hong-leong-yamaha-motor-sungai-buloh' },
  { page: 45, title: 'Hong Leong Yamaha Motor @ Sungai Buloh - Industrial loading bay canopy framing', entity: 'Promanage', type: 'Industrial Photography', mappedProject: 'hong-leong-yamaha-motor-sungai-buloh' },
  { page: 46, title: 'Menara Keck Seng @ Bukit Bintang - Open office workstation desking and pantry', entity: 'Promanage', type: 'Commercial Fit-Out Photography', mappedProject: 'menara-keck-seng-bukit-bintang' },
  { page: 47, title: 'Menara Keck Seng @ Bukit Bintang - Executive boardroom, glass meeting suites', entity: 'Promanage', type: 'Commercial Fit-Out Photography', mappedProject: 'menara-keck-seng-bukit-bintang' },
  { page: 48, title: 'Rotiboy @ R&R Awan Besar - Highway retail kiosk carpentry and equipment fit-out', entity: 'Promanage', type: 'Retail Kiosk Photography', mappedProject: 'rotiboy-rr-awam-besar' },
  { page: 49, title: "D'Quince @ Damansara Perdana - Living room and balcony view photography", entity: 'Promanage', type: 'Residential Photography', mappedProject: 'd-quince-damansara-perdana' },
  { page: 50, title: "D'Quince @ Damansara Perdana - Bedroom, kitchen and bathroom photography", entity: 'Promanage', type: 'Residential Photography', mappedProject: 'd-quince-damansara-perdana' },
  { page: 51, title: 'Desa Villa @ Taman Desa - 3D concept render of open kitchen and living area', entity: 'Inside Style', type: '3D Render', mappedProject: 'desa-villa-taman-desa' },
  { page: 52, title: 'Desa Villa @ Taman Desa - Completed dining banquette, kitchen joinery photos', entity: 'Promanage / Inside Style', type: 'Completed Photography', mappedProject: 'desa-villa-taman-desa' },
  { page: 53, title: 'Desa Villa @ Taman Desa - Modern bathroom grey tiling and full wardrobe', entity: 'Promanage / Inside Style', type: 'Completed Photography', mappedProject: 'desa-villa-taman-desa' },
  { page: 54, title: 'Dahlia @ Rawang - Fluted timber entryway console and showcase lighting', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'dahlia-rawang' },
  { page: 55, title: 'Dahlia @ Rawang - L-shaped kitchen and quartz breakfast counter photography', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'dahlia-rawang' },
  { page: 56, title: 'Dahlia @ Rawang - Kitchen sink, undermount basin and quartz splashback', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'dahlia-rawang' },
  { page: 57, title: 'Aradia @ Lake City - Entryway console cabinetry and kitchen breakfast counter', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'aradia-lake-city' },
  { page: 58, title: 'Aradia @ Lake City - U-shaped kitchen cabinetry and integrated appliances', entity: 'Promanage', type: 'Interior Photography', mappedProject: 'aradia-lake-city' },
  { page: 59, title: 'Section Divider: On-going Project', entity: 'General Profile', type: 'Divider Slide', mappedProject: null },
  { page: 60, title: 'Diamond Residence @ Semenyih - Architectural 3D perspective of bungalow extension', entity: 'Promanage', type: '3D Render (Status in company profile: On-going)', mappedProject: 'diamond-residence-semenyih' },
  { page: 61, title: 'Diamond Residence @ Semenyih - Scaffolding, column casting & structural site photos', entity: 'Promanage', type: 'Structural Photography (Status in company profile: On-going)', mappedProject: 'diamond-residence-semenyih' },
  { page: 62, title: 'Diamond Residence @ Semenyih - Concrete terrace slab pour and underground drainage', entity: 'Promanage', type: 'Structural Photography (Status in company profile: On-going)', mappedProject: 'diamond-residence-semenyih' },
  { page: 63, title: 'Logistics Warehouse @ Teluk Gong - Multi-storey warehouse & office architectural renders', entity: 'Promanage', type: '3D Architectural Render (Status in company profile: On-going)', mappedProject: 'logistics-warehouse-teluk-gong' },
  { page: 64, title: 'Logistics Warehouse @ Teluk Gong - Industrial site clearing & ground leveling photo', entity: 'Promanage', type: 'Site Photography (Status in company profile: On-going)', mappedProject: 'logistics-warehouse-teluk-gong' },
  { page: 65, title: 'Section Divider: Designing Stage', entity: 'General Profile', type: 'Divider Slide', mappedProject: null },
  { page: 66, title: 'Floating Fish Cage Transformation Plan @ Pulau Ketam - Satellite coordinates map', entity: 'Promanage', type: 'Site Satellite Map (Status in company profile: Designing Stage)', mappedProject: 'pulau-ketam-floating-fish-cage' },
  { page: 67, title: 'Floating Fish Cage Transformation Plan @ Pulau Ketam - Pontoon CAD engineering plans', entity: 'Promanage', type: 'CAD Drawing (Status in company profile: Designing Stage)', mappedProject: 'pulau-ketam-floating-fish-cage' },
  { page: 68, title: 'Floating Fish Cage Transformation Plan @ Pulau Ketam - Floating chalets & restaurant 3D renders', entity: 'Promanage', type: '3D Render (Status in company profile: Designing Stage)', mappedProject: 'pulau-ketam-floating-fish-cage' },
  { page: 69, title: 'The Pearl @ KLCC - Outdoor reflecting pool lounge 3D render & floor plan view 1', entity: 'Promanage', type: '3D Render & Floor Plan (Status in company profile: Designing Stage)', mappedProject: 'the-pearl-klcc' },
  { page: 70, title: 'The Pearl @ KLCC - BBQ area & multipurpose hall 3D renders and layout drawing', entity: 'Promanage', type: '3D Render & Floor Plan (Status in company profile: Designing Stage)', mappedProject: 'the-pearl-klcc' },
  { page: 71, title: 'The Pearl @ KLCC - Indoor & outdoor gym facility 3D perspectives', entity: 'Promanage', type: '3D Render (Status in company profile: Designing Stage)', mappedProject: 'the-pearl-klcc' },
  { page: 72, title: 'The Pearl @ KLCC - Rooftop social parlor, playground & yoga lawn 3D renders', entity: 'Promanage', type: '3D Render (Status in company profile: Designing Stage)', mappedProject: 'the-pearl-klcc' },
  { page: 73, title: 'Closing Slide: Thank You! Promanage ABNB Resources', entity: 'Promanage ABNB Resources', type: 'Closing Slide', mappedProject: null }
];
