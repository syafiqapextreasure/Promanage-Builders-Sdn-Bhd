export type ProjectCategory = 'Residential' | 'Commercial' | 'Renovation' | 'Construction' | 'Design Concepts';
export interface ProjectImage { src: string; alt: string; width: number; height: number; }
export interface ProjectMedia { id: string; title: string; location: string; category: ProjectCategory; description: string; image: string; images: ProjectImage[]; }

export const PORTFOLIO_PROJECTS: ProjectMedia[] = [
  {
    "id": "aradia-lake-city",
    "title": "Aradia @ Lake City",
    "location": "Lake City, Kuala Lumpur",
    "category": "Residential",
    "description": "Living spaces, kitchens and custom cabinetry in a warm contemporary palette.",
    "images": [
      {
        "src": "/images/projects/aradia-lake-city-01.webp",
        "alt": "Aradia @ Lake City — project image 1",
        "width": 752,
        "height": 900
      },
      {
        "src": "/images/projects/aradia-lake-city-02.webp",
        "alt": "Aradia @ Lake City — project image 2",
        "width": 884,
        "height": 900
      },
      {
        "src": "/images/projects/aradia-lake-city-03.webp",
        "alt": "Aradia @ Lake City — project image 3",
        "width": 884,
        "height": 900
      },
      {
        "src": "/images/projects/aradia-lake-city-04.webp",
        "alt": "Aradia @ Lake City — project image 4",
        "width": 1800,
        "height": 1338
      },
      {
        "src": "/images/projects/aradia-lake-city-05.webp",
        "alt": "Aradia @ Lake City — project image 5",
        "width": 1581,
        "height": 1800
      },
      {
        "src": "/images/projects/aradia-lake-city-06.webp",
        "alt": "Aradia @ Lake City — project image 6",
        "width": 1800,
        "height": 892
      },
      {
        "src": "/images/projects/aradia-lake-city-07.webp",
        "alt": "Aradia @ Lake City — project image 7",
        "width": 1281,
        "height": 1800
      },
      {
        "src": "/images/projects/aradia-lake-city-08.webp",
        "alt": "Aradia @ Lake City — project image 8",
        "width": 1800,
        "height": 1311
      },
      {
        "src": "/images/projects/aradia-lake-city-09.webp",
        "alt": "Aradia @ Lake City — project image 9",
        "width": 1800,
        "height": 1157
      },
      {
        "src": "/images/projects/aradia-lake-city-10.webp",
        "alt": "Aradia @ Lake City — project image 10",
        "width": 1247,
        "height": 1800
      },
      {
        "src": "/images/projects/aradia-lake-city-11.webp",
        "alt": "Aradia @ Lake City — project image 11",
        "width": 1214,
        "height": 1800
      },
      {
        "src": "/images/projects/aradia-lake-city-12.webp",
        "alt": "Aradia @ Lake City — project image 12",
        "width": 1253,
        "height": 1800
      },
      {
        "src": "/images/projects/aradia-lake-city-13.webp",
        "alt": "Aradia @ Lake City — project image 13",
        "width": 730,
        "height": 1800
      },
      {
        "src": "/images/projects/aradia-lake-city-14.webp",
        "alt": "Aradia @ Lake City — project image 14",
        "width": 1415,
        "height": 1800
      },
      {
        "src": "/images/projects/aradia-lake-city-15.webp",
        "alt": "Aradia @ Lake City — project image 15",
        "width": 730,
        "height": 1800
      }
    ],
    "image": "/images/projects/aradia-lake-city-01.webp"
  },
  {
    "id": "d-cosmos-damansara-perdana",
    "title": "D’Cosmos @ Damansara Perdana",
    "location": "Damansara Perdana",
    "category": "Residential",
    "description": "Interior design views featuring living, dining, kitchen and bedroom spaces.",
    "images": [
      {
        "src": "/images/projects/d-cosmos-damansara-perdana-01.webp",
        "alt": "D’Cosmos @ Damansara Perdana — project image 1",
        "width": 1275,
        "height": 900
      },
      {
        "src": "/images/projects/d-cosmos-damansara-perdana-02.webp",
        "alt": "D’Cosmos @ Damansara Perdana — project image 2",
        "width": 1272,
        "height": 900
      },
      {
        "src": "/images/projects/d-cosmos-damansara-perdana-03.webp",
        "alt": "D’Cosmos @ Damansara Perdana — project image 3",
        "width": 623,
        "height": 900
      },
      {
        "src": "/images/projects/d-cosmos-damansara-perdana-04.webp",
        "alt": "D’Cosmos @ Damansara Perdana — project image 4",
        "width": 624,
        "height": 900
      },
      {
        "src": "/images/projects/d-cosmos-damansara-perdana-05.webp",
        "alt": "D’Cosmos @ Damansara Perdana — project image 5",
        "width": 1274,
        "height": 900
      }
    ],
    "image": "/images/projects/d-cosmos-damansara-perdana-01.webp"
  },
  {
    "id": "rimbayu-robin-teluk-panglima",
    "title": "Rimbayu Robin @ Teluk Panglima",
    "location": "Teluk Panglima, Selangor",
    "category": "Residential",
    "description": "Landed-home interiors, kitchen details, storage and staircase features.",
    "images": [
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-01.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 1",
        "width": 1020,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-02.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 2",
        "width": 1017,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-03.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 3",
        "width": 498,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-04.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 4",
        "width": 498,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-05.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 5",
        "width": 1019,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-06.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 6",
        "width": 989,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-07.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 7",
        "width": 988,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-08.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 8",
        "width": 1123,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-09.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 9",
        "width": 1123,
        "height": 720
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-10.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 10",
        "width": 958,
        "height": 810
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-11.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 11",
        "width": 810,
        "height": 742
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-12.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 12",
        "width": 810,
        "height": 742
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-13.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 13",
        "width": 810,
        "height": 634
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-14.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 14",
        "width": 1080,
        "height": 771
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-15.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 15",
        "width": 810,
        "height": 890
      },
      {
        "src": "/images/projects/rimbayu-robin-teluk-panglima-16.webp",
        "alt": "Rimbayu Robin @ Teluk Panglima — project image 16",
        "width": 810,
        "height": 603
      }
    ],
    "image": "/images/projects/rimbayu-robin-teluk-panglima-01.webp"
  },
  {
    "id": "serene-mont-kiara",
    "title": "Serene @ Mont Kiara",
    "location": "Mont Kiara, Kuala Lumpur",
    "category": "Residential",
    "description": "Residential design views with soft finishes and thoughtful built-in storage.",
    "images": [
      {
        "src": "/images/projects/serene-mont-kiara-01.webp",
        "alt": "Serene @ Mont Kiara — project image 1",
        "width": 1242,
        "height": 720
      },
      {
        "src": "/images/projects/serene-mont-kiara-02.webp",
        "alt": "Serene @ Mont Kiara — project image 2",
        "width": 945,
        "height": 720
      },
      {
        "src": "/images/projects/serene-mont-kiara-03.webp",
        "alt": "Serene @ Mont Kiara — project image 3",
        "width": 943,
        "height": 720
      },
      {
        "src": "/images/projects/serene-mont-kiara-04.webp",
        "alt": "Serene @ Mont Kiara — project image 4",
        "width": 1242,
        "height": 720
      },
      {
        "src": "/images/projects/serene-mont-kiara-05.webp",
        "alt": "Serene @ Mont Kiara — project image 5",
        "width": 990,
        "height": 720
      },
      {
        "src": "/images/projects/serene-mont-kiara-06.webp",
        "alt": "Serene @ Mont Kiara — project image 6",
        "width": 988,
        "height": 720
      },
      {
        "src": "/images/projects/serene-mont-kiara-07.webp",
        "alt": "Serene @ Mont Kiara — project image 7",
        "width": 1123,
        "height": 720
      },
      {
        "src": "/images/projects/serene-mont-kiara-08.webp",
        "alt": "Serene @ Mont Kiara — project image 8",
        "width": 1122,
        "height": 720
      }
    ],
    "image": "/images/projects/serene-mont-kiara-01.webp"
  },
  {
    "id": "ikhasas-group-hq",
    "title": "Ikhasas Group @ HQ",
    "location": "Corporate headquarters",
    "category": "Commercial",
    "description": "Office and shared-space design, from reception to meeting and working areas.",
    "images": [
      {
        "src": "/images/projects/ikhasas-group-hq-01.webp",
        "alt": "Ikhasas Group @ HQ — project image 1",
        "width": 594,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-02.webp",
        "alt": "Ikhasas Group @ HQ — project image 2",
        "width": 1101,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-03.webp",
        "alt": "Ikhasas Group @ HQ — project image 3",
        "width": 1102,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-04.webp",
        "alt": "Ikhasas Group @ HQ — project image 4",
        "width": 1103,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-05.webp",
        "alt": "Ikhasas Group @ HQ — project image 5",
        "width": 1125,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-06.webp",
        "alt": "Ikhasas Group @ HQ — project image 6",
        "width": 1125,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-07.webp",
        "alt": "Ikhasas Group @ HQ — project image 7",
        "width": 1121,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-08.webp",
        "alt": "Ikhasas Group @ HQ — project image 8",
        "width": 1121,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-09.webp",
        "alt": "Ikhasas Group @ HQ — project image 9",
        "width": 1200,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-10.webp",
        "alt": "Ikhasas Group @ HQ — project image 10",
        "width": 1200,
        "height": 720
      },
      {
        "src": "/images/projects/ikhasas-group-hq-11.webp",
        "alt": "Ikhasas Group @ HQ — project image 11",
        "width": 1200,
        "height": 720
      }
    ],
    "image": "/images/projects/ikhasas-group-hq-01.webp"
  },
  {
    "id": "laurel-resident-bangsar-south",
    "title": "Laurel Resident @ Bangsar South",
    "location": "Bangsar South, Kuala Lumpur",
    "category": "Residential",
    "description": "Living, kitchen and bedroom interiors with practical space planning.",
    "images": [
      {
        "src": "/images/projects/laurel-resident-bangsar-south-01.webp",
        "alt": "Laurel Resident @ Bangsar South — project image 1",
        "width": 1619,
        "height": 1800
      },
      {
        "src": "/images/projects/laurel-resident-bangsar-south-02.webp",
        "alt": "Laurel Resident @ Bangsar South — project image 2",
        "width": 1033,
        "height": 1800
      },
      {
        "src": "/images/projects/laurel-resident-bangsar-south-03.webp",
        "alt": "Laurel Resident @ Bangsar South — project image 3",
        "width": 1114,
        "height": 1800
      },
      {
        "src": "/images/projects/laurel-resident-bangsar-south-04.webp",
        "alt": "Laurel Resident @ Bangsar South — project image 4",
        "width": 1800,
        "height": 1370
      },
      {
        "src": "/images/projects/laurel-resident-bangsar-south-05.webp",
        "alt": "Laurel Resident @ Bangsar South — project image 5",
        "width": 1800,
        "height": 890
      },
      {
        "src": "/images/projects/laurel-resident-bangsar-south-06.webp",
        "alt": "Laurel Resident @ Bangsar South — project image 6",
        "width": 1477,
        "height": 1800
      }
    ],
    "image": "/images/projects/laurel-resident-bangsar-south-01.webp"
  },
  {
    "id": "cantara-residence-ara-damansara",
    "title": "Cantara Residence @ Ara Damansara",
    "location": "Ara Damansara",
    "category": "Residential",
    "description": "Residential rooms, kitchen joinery, storage and bathroom details.",
    "images": [
      {
        "src": "/images/projects/cantara-residence-ara-damansara-01.webp",
        "alt": "Cantara Residence @ Ara Damansara — project image 1",
        "width": 1231,
        "height": 1800
      },
      {
        "src": "/images/projects/cantara-residence-ara-damansara-02.webp",
        "alt": "Cantara Residence @ Ara Damansara — project image 2",
        "width": 1304,
        "height": 1800
      },
      {
        "src": "/images/projects/cantara-residence-ara-damansara-03.webp",
        "alt": "Cantara Residence @ Ara Damansara — project image 3",
        "width": 1800,
        "height": 1176
      },
      {
        "src": "/images/projects/cantara-residence-ara-damansara-04.webp",
        "alt": "Cantara Residence @ Ara Damansara — project image 4",
        "width": 1341,
        "height": 1800
      },
      {
        "src": "/images/projects/cantara-residence-ara-damansara-05.webp",
        "alt": "Cantara Residence @ Ara Damansara — project image 5",
        "width": 1800,
        "height": 1282
      },
      {
        "src": "/images/projects/cantara-residence-ara-damansara-06.webp",
        "alt": "Cantara Residence @ Ara Damansara — project image 6",
        "width": 1301,
        "height": 1800
      },
      {
        "src": "/images/projects/cantara-residence-ara-damansara-07.webp",
        "alt": "Cantara Residence @ Ara Damansara — project image 7",
        "width": 1376,
        "height": 1800
      },
      {
        "src": "/images/projects/cantara-residence-ara-damansara-08.webp",
        "alt": "Cantara Residence @ Ara Damansara — project image 8",
        "width": 1281,
        "height": 1800
      }
    ],
    "image": "/images/projects/cantara-residence-ara-damansara-01.webp"
  },
  {
    "id": "damansara-heights-kl",
    "title": "Damansara Heights @ Kuala Lumpur",
    "location": "Damansara Heights, Kuala Lumpur",
    "category": "Renovation",
    "description": "Exterior and landscape views of a residential property.",
    "images": [
      {
        "src": "/images/projects/damansara-heights-kl-01.webp",
        "alt": "Damansara Heights @ Kuala Lumpur — project image 1",
        "width": 558,
        "height": 419
      },
      {
        "src": "/images/projects/damansara-heights-kl-02.webp",
        "alt": "Damansara Heights @ Kuala Lumpur — project image 2",
        "width": 803,
        "height": 602
      },
      {
        "src": "/images/projects/damansara-heights-kl-03.webp",
        "alt": "Damansara Heights @ Kuala Lumpur — project image 3",
        "width": 542,
        "height": 406
      },
      {
        "src": "/images/projects/damansara-heights-kl-04.webp",
        "alt": "Damansara Heights @ Kuala Lumpur — project image 4",
        "width": 637,
        "height": 508
      },
      {
        "src": "/images/projects/damansara-heights-kl-05.webp",
        "alt": "Damansara Heights @ Kuala Lumpur — project image 5",
        "width": 812,
        "height": 609
      },
      {
        "src": "/images/projects/damansara-heights-kl-06.webp",
        "alt": "Damansara Heights @ Kuala Lumpur — project image 6",
        "width": 1027,
        "height": 771
      }
    ],
    "image": "/images/projects/damansara-heights-kl-01.webp"
  },
  {
    "id": "taman-melawati-kl",
    "title": "Taman Melawati @ Kuala Lumpur",
    "location": "Taman Melawati, Kuala Lumpur",
    "category": "Renovation",
    "description": "Garden, outdoor living and landscape details around a residential property.",
    "images": [
      {
        "src": "/images/projects/taman-melawati-kl-01.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 1",
        "width": 1449,
        "height": 1087
      },
      {
        "src": "/images/projects/taman-melawati-kl-02.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 2",
        "width": 683,
        "height": 910
      },
      {
        "src": "/images/projects/taman-melawati-kl-03.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 3",
        "width": 756,
        "height": 567
      },
      {
        "src": "/images/projects/taman-melawati-kl-04.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 4",
        "width": 689,
        "height": 517
      },
      {
        "src": "/images/projects/taman-melawati-kl-05.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 5",
        "width": 729,
        "height": 547
      },
      {
        "src": "/images/projects/taman-melawati-kl-06.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 6",
        "width": 728,
        "height": 546
      },
      {
        "src": "/images/projects/taman-melawati-kl-07.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 7",
        "width": 841,
        "height": 631
      },
      {
        "src": "/images/projects/taman-melawati-kl-08.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 8",
        "width": 567,
        "height": 426
      },
      {
        "src": "/images/projects/taman-melawati-kl-09.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 9",
        "width": 739,
        "height": 554
      },
      {
        "src": "/images/projects/taman-melawati-kl-10.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 10",
        "width": 664,
        "height": 498
      },
      {
        "src": "/images/projects/taman-melawati-kl-11.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 11",
        "width": 735,
        "height": 551
      },
      {
        "src": "/images/projects/taman-melawati-kl-12.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 12",
        "width": 657,
        "height": 493
      },
      {
        "src": "/images/projects/taman-melawati-kl-13.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 13",
        "width": 747,
        "height": 561
      },
      {
        "src": "/images/projects/taman-melawati-kl-14.webp",
        "alt": "Taman Melawati @ Kuala Lumpur — project image 14",
        "width": 682,
        "height": 511
      }
    ],
    "image": "/images/projects/taman-melawati-kl-01.webp"
  },
  {
    "id": "inside-style-pj-ss2",
    "title": "Inside Style @ Petaling Jaya SS2",
    "location": "SS2, Petaling Jaya",
    "category": "Commercial",
    "description": "Office interiors and working areas in Petaling Jaya.",
    "images": [
      {
        "src": "/images/projects/inside-style-pj-ss2-01.webp",
        "alt": "Inside Style @ Petaling Jaya SS2 — project image 1",
        "width": 1800,
        "height": 1217
      },
      {
        "src": "/images/projects/inside-style-pj-ss2-02.webp",
        "alt": "Inside Style @ Petaling Jaya SS2 — project image 2",
        "width": 1800,
        "height": 982
      },
      {
        "src": "/images/projects/inside-style-pj-ss2-03.webp",
        "alt": "Inside Style @ Petaling Jaya SS2 — project image 3",
        "width": 1800,
        "height": 1370
      },
      {
        "src": "/images/projects/inside-style-pj-ss2-04.webp",
        "alt": "Inside Style @ Petaling Jaya SS2 — project image 4",
        "width": 1800,
        "height": 890
      },
      {
        "src": "/images/projects/inside-style-pj-ss2-05.webp",
        "alt": "Inside Style @ Petaling Jaya SS2 — project image 5",
        "width": 1477,
        "height": 1800
      }
    ],
    "image": "/images/projects/inside-style-pj-ss2-01.webp"
  },
  {
    "id": "suria-north-kiara",
    "title": "Suria @ North Kiara",
    "location": "North Kiara",
    "category": "Commercial",
    "description": "Commercial interior views and installation work.",
    "images": [
      {
        "src": "/images/projects/suria-north-kiara-01.webp",
        "alt": "Suria @ North Kiara — project image 1",
        "width": 608,
        "height": 727
      },
      {
        "src": "/images/projects/suria-north-kiara-02.webp",
        "alt": "Suria @ North Kiara — project image 2",
        "width": 1280,
        "height": 855
      },
      {
        "src": "/images/projects/suria-north-kiara-03.webp",
        "alt": "Suria @ North Kiara — project image 3",
        "width": 1080,
        "height": 722
      },
      {
        "src": "/images/projects/suria-north-kiara-04.webp",
        "alt": "Suria @ North Kiara — project image 4",
        "width": 1280,
        "height": 855
      }
    ],
    "image": "/images/projects/suria-north-kiara-01.webp"
  },
  {
    "id": "hong-leong-yamaha-sungai-buloh",
    "title": "Hong Leong Yamaha Motor @ Sungai Buloh",
    "location": "Sungai Buloh",
    "category": "Commercial",
    "description": "Industrial-site exterior, covered structures and construction details.",
    "images": [
      {
        "src": "/images/projects/hong-leong-yamaha-sungai-buloh-01.webp",
        "alt": "Hong Leong Yamaha Motor @ Sungai Buloh — project image 1",
        "width": 1800,
        "height": 1337
      },
      {
        "src": "/images/projects/hong-leong-yamaha-sungai-buloh-02.webp",
        "alt": "Hong Leong Yamaha Motor @ Sungai Buloh — project image 2",
        "width": 1580,
        "height": 1800
      },
      {
        "src": "/images/projects/hong-leong-yamaha-sungai-buloh-03.webp",
        "alt": "Hong Leong Yamaha Motor @ Sungai Buloh — project image 3",
        "width": 1800,
        "height": 892
      },
      {
        "src": "/images/projects/hong-leong-yamaha-sungai-buloh-04.webp",
        "alt": "Hong Leong Yamaha Motor @ Sungai Buloh — project image 4",
        "width": 1350,
        "height": 1800
      },
      {
        "src": "/images/projects/hong-leong-yamaha-sungai-buloh-05.webp",
        "alt": "Hong Leong Yamaha Motor @ Sungai Buloh — project image 5",
        "width": 1350,
        "height": 1800
      }
    ],
    "image": "/images/projects/hong-leong-yamaha-sungai-buloh-01.webp"
  },
  {
    "id": "menara-keck-seng-bukit-bintang",
    "title": "Menara Keck Seng @ Bukit Bintang",
    "location": "Bukit Bintang, Kuala Lumpur",
    "category": "Commercial",
    "description": "Office workspaces, meeting areas and interior fit-out details.",
    "images": [
      {
        "src": "/images/projects/menara-keck-seng-bukit-bintang-01.webp",
        "alt": "Menara Keck Seng @ Bukit Bintang — project image 1",
        "width": 1190,
        "height": 1800
      },
      {
        "src": "/images/projects/menara-keck-seng-bukit-bintang-02.webp",
        "alt": "Menara Keck Seng @ Bukit Bintang — project image 2",
        "width": 1193,
        "height": 1800
      },
      {
        "src": "/images/projects/menara-keck-seng-bukit-bintang-03.webp",
        "alt": "Menara Keck Seng @ Bukit Bintang — project image 3",
        "width": 1193,
        "height": 1800
      },
      {
        "src": "/images/projects/menara-keck-seng-bukit-bintang-04.webp",
        "alt": "Menara Keck Seng @ Bukit Bintang — project image 4",
        "width": 1800,
        "height": 1349
      },
      {
        "src": "/images/projects/menara-keck-seng-bukit-bintang-05.webp",
        "alt": "Menara Keck Seng @ Bukit Bintang — project image 5",
        "width": 1800,
        "height": 1349
      },
      {
        "src": "/images/projects/menara-keck-seng-bukit-bintang-06.webp",
        "alt": "Menara Keck Seng @ Bukit Bintang — project image 6",
        "width": 1800,
        "height": 1349
      },
      {
        "src": "/images/projects/menara-keck-seng-bukit-bintang-07.webp",
        "alt": "Menara Keck Seng @ Bukit Bintang — project image 7",
        "width": 1800,
        "height": 1349
      }
    ],
    "image": "/images/projects/menara-keck-seng-bukit-bintang-01.webp"
  },
  {
    "id": "rotiboy-awam-besar",
    "title": "Rotiboy @ R&R Awam Besar",
    "location": "R&R Awam Besar",
    "category": "Commercial",
    "description": "Retail bakery frontage, serving counter and shop interior.",
    "images": [
      {
        "src": "/images/projects/rotiboy-awam-besar-01.webp",
        "alt": "Rotiboy @ R&R Awam Besar — project image 1",
        "width": 1080,
        "height": 802
      },
      {
        "src": "/images/projects/rotiboy-awam-besar-02.webp",
        "alt": "Rotiboy @ R&R Awam Besar — project image 2",
        "width": 810,
        "height": 923
      },
      {
        "src": "/images/projects/rotiboy-awam-besar-03.webp",
        "alt": "Rotiboy @ R&R Awam Besar — project image 3",
        "width": 1080,
        "height": 535
      }
    ],
    "image": "/images/projects/rotiboy-awam-besar-01.webp"
  },
  {
    "id": "d-quince-damansara-perdana",
    "title": "D’Quince @ Damansara Perdana",
    "location": "Damansara Perdana",
    "category": "Residential",
    "description": "Residential interior views, kitchen storage and room details.",
    "images": [
      {
        "src": "/images/projects/d-quince-damansara-perdana-01.webp",
        "alt": "D’Quince @ Damansara Perdana — project image 1",
        "width": 810,
        "height": 607
      },
      {
        "src": "/images/projects/d-quince-damansara-perdana-02.webp",
        "alt": "D’Quince @ Damansara Perdana — project image 2",
        "width": 810,
        "height": 997
      },
      {
        "src": "/images/projects/d-quince-damansara-perdana-03.webp",
        "alt": "D’Quince @ Damansara Perdana — project image 3",
        "width": 810,
        "height": 1003
      },
      {
        "src": "/images/projects/d-quince-damansara-perdana-04.webp",
        "alt": "D’Quince @ Damansara Perdana — project image 4",
        "width": 810,
        "height": 634
      },
      {
        "src": "/images/projects/d-quince-damansara-perdana-05.webp",
        "alt": "D’Quince @ Damansara Perdana — project image 5",
        "width": 810,
        "height": 578
      },
      {
        "src": "/images/projects/d-quince-damansara-perdana-06.webp",
        "alt": "D’Quince @ Damansara Perdana — project image 6",
        "width": 810,
        "height": 891
      },
      {
        "src": "/images/projects/d-quince-damansara-perdana-07.webp",
        "alt": "D’Quince @ Damansara Perdana — project image 7",
        "width": 810,
        "height": 603
      }
    ],
    "image": "/images/projects/d-quince-damansara-perdana-01.webp"
  },
  {
    "id": "desa-villa-taman-desa",
    "title": "Desa Villa @ Taman Desa",
    "location": "Taman Desa, Kuala Lumpur",
    "category": "Residential",
    "description": "Interior design views, kitchen cabinetry and bathroom details.",
    "images": [
      {
        "src": "/images/projects/desa-villa-taman-desa-01.webp",
        "alt": "Desa Villa @ Taman Desa — project image 1",
        "width": 1212,
        "height": 900
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-02.webp",
        "alt": "Desa Villa @ Taman Desa — project image 2",
        "width": 790,
        "height": 900
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-03.webp",
        "alt": "Desa Villa @ Taman Desa — project image 3",
        "width": 1500,
        "height": 744
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-04.webp",
        "alt": "Desa Villa @ Taman Desa — project image 4",
        "width": 889,
        "height": 810
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-05.webp",
        "alt": "Desa Villa @ Taman Desa — project image 5",
        "width": 889,
        "height": 810
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-06.webp",
        "alt": "Desa Villa @ Taman Desa — project image 6",
        "width": 889,
        "height": 810
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-07.webp",
        "alt": "Desa Villa @ Taman Desa — project image 7",
        "width": 890,
        "height": 810
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-08.webp",
        "alt": "Desa Villa @ Taman Desa — project image 8",
        "width": 810,
        "height": 607
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-09.webp",
        "alt": "Desa Villa @ Taman Desa — project image 9",
        "width": 810,
        "height": 608
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-10.webp",
        "alt": "Desa Villa @ Taman Desa — project image 10",
        "width": 1080,
        "height": 810
      },
      {
        "src": "/images/projects/desa-villa-taman-desa-11.webp",
        "alt": "Desa Villa @ Taman Desa — project image 11",
        "width": 1080,
        "height": 810
      }
    ],
    "image": "/images/projects/desa-villa-taman-desa-01.webp"
  },
  {
    "id": "dahlia-rawang",
    "title": "Dahlia @ Rawang",
    "location": "Rawang, Selangor",
    "category": "Residential",
    "description": "Home kitchen, storage and utility-space details.",
    "images": [
      {
        "src": "/images/projects/dahlia-rawang-01.webp",
        "alt": "Dahlia @ Rawang — project image 1",
        "width": 810,
        "height": 847
      },
      {
        "src": "/images/projects/dahlia-rawang-02.webp",
        "alt": "Dahlia @ Rawang — project image 2",
        "width": 679,
        "height": 810
      },
      {
        "src": "/images/projects/dahlia-rawang-03.webp",
        "alt": "Dahlia @ Rawang — project image 3",
        "width": 589,
        "height": 1080
      },
      {
        "src": "/images/projects/dahlia-rawang-04.webp",
        "alt": "Dahlia @ Rawang — project image 4",
        "width": 810,
        "height": 488
      },
      {
        "src": "/images/projects/dahlia-rawang-05.webp",
        "alt": "Dahlia @ Rawang — project image 5",
        "width": 810,
        "height": 489
      },
      {
        "src": "/images/projects/dahlia-rawang-06.webp",
        "alt": "Dahlia @ Rawang — project image 6",
        "width": 810,
        "height": 1080
      },
      {
        "src": "/images/projects/dahlia-rawang-07.webp",
        "alt": "Dahlia @ Rawang — project image 7",
        "width": 810,
        "height": 1080
      }
    ],
    "image": "/images/projects/dahlia-rawang-01.webp"
  },
  {
    "id": "shuyi-tanjung-malim",
    "title": "ShuYi @ Tanjung Malim",
    "location": "Tanjung Malim",
    "category": "Construction",
    "description": "A gallery of site preparation, structural work, buildings and interior spaces.",
    "images": [
      {
        "src": "/images/projects/shuyi-tanjung-malim-01.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 1",
        "width": 1800,
        "height": 872
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-02.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 2",
        "width": 1800,
        "height": 747
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-03.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 3",
        "width": 1800,
        "height": 892
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-04.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 4",
        "width": 1800,
        "height": 925
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-05.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 5",
        "width": 1800,
        "height": 1370
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-06.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 6",
        "width": 1800,
        "height": 890
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-07.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 7",
        "width": 728,
        "height": 889
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-08.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 8",
        "width": 1800,
        "height": 1180
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-09.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 9",
        "width": 1281,
        "height": 1800
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-10.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 10",
        "width": 1800,
        "height": 1276
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-11.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 11",
        "width": 1800,
        "height": 987
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-12.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 12",
        "width": 1800,
        "height": 1370
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-13.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 13",
        "width": 1800,
        "height": 890
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-14.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 14",
        "width": 1800,
        "height": 1450
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-15.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 15",
        "width": 1800,
        "height": 1311
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-16.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 16",
        "width": 1800,
        "height": 1155
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-17.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 17",
        "width": 1281,
        "height": 1800
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-18.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 18",
        "width": 1428,
        "height": 1706
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-19.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 19",
        "width": 1679,
        "height": 1706
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-20.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 20",
        "width": 1678,
        "height": 1706
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-21.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 21",
        "width": 1679,
        "height": 1706
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-22.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 22",
        "width": 1679,
        "height": 1706
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-23.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 23",
        "width": 1428,
        "height": 1706
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-24.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 24",
        "width": 1800,
        "height": 1274
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-25.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 25",
        "width": 1800,
        "height": 1178
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-26.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 26",
        "width": 1217,
        "height": 1706
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-27.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 27",
        "width": 1265,
        "height": 1706
      },
      {
        "src": "/images/projects/shuyi-tanjung-malim-28.webp",
        "alt": "ShuYi @ Tanjung Malim — project image 28",
        "width": 1266,
        "height": 1706
      }
    ],
    "image": "/images/projects/shuyi-tanjung-malim-01.webp"
  },
  {
    "id": "diamond-residence-semenyih",
    "title": "Diamond Residence @ Semenyih",
    "location": "Semenyih, Selangor",
    "category": "Construction",
    "description": "Architectural views and construction-stage site photographs.",
    "images": [
      {
        "src": "/images/projects/diamond-residence-semenyih-01.webp",
        "alt": "Diamond Residence @ Semenyih — project image 1",
        "width": 919,
        "height": 800
      },
      {
        "src": "/images/projects/diamond-residence-semenyih-02.webp",
        "alt": "Diamond Residence @ Semenyih — project image 2",
        "width": 924,
        "height": 819
      },
      {
        "src": "/images/projects/diamond-residence-semenyih-03.webp",
        "alt": "Diamond Residence @ Semenyih — project image 3",
        "width": 1280,
        "height": 742
      },
      {
        "src": "/images/projects/diamond-residence-semenyih-04.webp",
        "alt": "Diamond Residence @ Semenyih — project image 4",
        "width": 960,
        "height": 731
      },
      {
        "src": "/images/projects/diamond-residence-semenyih-05.webp",
        "alt": "Diamond Residence @ Semenyih — project image 5",
        "width": 960,
        "height": 733
      },
      {
        "src": "/images/projects/diamond-residence-semenyih-06.webp",
        "alt": "Diamond Residence @ Semenyih — project image 6",
        "width": 1280,
        "height": 742
      },
      {
        "src": "/images/projects/diamond-residence-semenyih-07.webp",
        "alt": "Diamond Residence @ Semenyih — project image 7",
        "width": 1800,
        "height": 1370
      },
      {
        "src": "/images/projects/diamond-residence-semenyih-08.webp",
        "alt": "Diamond Residence @ Semenyih — project image 8",
        "width": 1800,
        "height": 890
      },
      {
        "src": "/images/projects/diamond-residence-semenyih-09.webp",
        "alt": "Diamond Residence @ Semenyih — project image 9",
        "width": 1477,
        "height": 1800
      }
    ],
    "image": "/images/projects/diamond-residence-semenyih-01.webp"
  },
  {
    "id": "logistics-warehouse-teluk-gong",
    "title": "Logistics Warehouse @ Teluk Gong",
    "location": "Teluk Gong, Selangor",
    "category": "Construction",
    "description": "Warehouse architectural concepts and site preparation.",
    "images": [
      {
        "src": "/images/projects/logistics-warehouse-teluk-gong-01.webp",
        "alt": "Logistics Warehouse @ Teluk Gong — project image 1",
        "width": 1201,
        "height": 900
      },
      {
        "src": "/images/projects/logistics-warehouse-teluk-gong-02.webp",
        "alt": "Logistics Warehouse @ Teluk Gong — project image 2",
        "width": 1201,
        "height": 900
      },
      {
        "src": "/images/projects/logistics-warehouse-teluk-gong-03.webp",
        "alt": "Logistics Warehouse @ Teluk Gong — project image 3",
        "width": 1201,
        "height": 900
      },
      {
        "src": "/images/projects/logistics-warehouse-teluk-gong-04.webp",
        "alt": "Logistics Warehouse @ Teluk Gong — project image 4",
        "width": 1201,
        "height": 900
      },
      {
        "src": "/images/projects/logistics-warehouse-teluk-gong-05.webp",
        "alt": "Logistics Warehouse @ Teluk Gong — project image 5",
        "width": 1080,
        "height": 810
      }
    ],
    "image": "/images/projects/logistics-warehouse-teluk-gong-01.webp"
  },
  {
    "id": "pulau-ketam-floating-fish-cage",
    "title": "Floating Fish Cage Transformation @ Pulau Ketam",
    "location": "Pulau Ketam",
    "category": "Design Concepts",
    "description": "Site plans, structural drawings and proposed floating-space interiors.",
    "images": [
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-01.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 1",
        "width": 559,
        "height": 841
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-02.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 2",
        "width": 548,
        "height": 832
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-03.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 3",
        "width": 733,
        "height": 834
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-04.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 4",
        "width": 1080,
        "height": 541
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-05.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 5",
        "width": 662,
        "height": 497
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-06.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 6",
        "width": 973,
        "height": 729
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-07.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 7",
        "width": 875,
        "height": 655
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-08.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 8",
        "width": 644,
        "height": 484
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-09.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 9",
        "width": 531,
        "height": 600
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-10.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 10",
        "width": 534,
        "height": 600
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-11.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 11",
        "width": 532,
        "height": 600
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-12.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 12",
        "width": 531,
        "height": 600
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-13.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 13",
        "width": 534,
        "height": 600
      },
      {
        "src": "/images/projects/pulau-ketam-floating-fish-cage-14.webp",
        "alt": "Floating Fish Cage Transformation @ Pulau Ketam — project image 14",
        "width": 530,
        "height": 600
      }
    ],
    "image": "/images/projects/pulau-ketam-floating-fish-cage-01.webp"
  },
  {
    "id": "the-pearl-klcc",
    "title": "The Pearl @ KLCC",
    "location": "KLCC, Kuala Lumpur",
    "category": "Design Concepts",
    "description": "Design concepts for shared amenities, outdoor areas and recreational spaces.",
    "images": [
      {
        "src": "/images/projects/the-pearl-klcc-01.webp",
        "alt": "The Pearl @ KLCC — project image 1",
        "width": 1469,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-02.webp",
        "alt": "The Pearl @ KLCC — project image 2",
        "width": 1361,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-03.webp",
        "alt": "The Pearl @ KLCC — project image 3",
        "width": 1378,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-04.webp",
        "alt": "The Pearl @ KLCC — project image 4",
        "width": 1378,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-05.webp",
        "alt": "The Pearl @ KLCC — project image 5",
        "width": 1758,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-06.webp",
        "alt": "The Pearl @ KLCC — project image 6",
        "width": 1757,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-07.webp",
        "alt": "The Pearl @ KLCC — project image 7",
        "width": 1752,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-08.webp",
        "alt": "The Pearl @ KLCC — project image 8",
        "width": 1751,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-09.webp",
        "alt": "The Pearl @ KLCC — project image 9",
        "width": 1547,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-10.webp",
        "alt": "The Pearl @ KLCC — project image 10",
        "width": 1545,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-11.webp",
        "alt": "The Pearl @ KLCC — project image 11",
        "width": 1755,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-12.webp",
        "alt": "The Pearl @ KLCC — project image 12",
        "width": 1753,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-13.webp",
        "alt": "The Pearl @ KLCC — project image 13",
        "width": 1396,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-14.webp",
        "alt": "The Pearl @ KLCC — project image 14",
        "width": 1775,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-15.webp",
        "alt": "The Pearl @ KLCC — project image 15",
        "width": 1800,
        "height": 1095
      },
      {
        "src": "/images/projects/the-pearl-klcc-16.webp",
        "alt": "The Pearl @ KLCC — project image 16",
        "width": 1704,
        "height": 1127
      },
      {
        "src": "/images/projects/the-pearl-klcc-17.webp",
        "alt": "The Pearl @ KLCC — project image 17",
        "width": 1800,
        "height": 738
      }
    ],
    "image": "/images/projects/the-pearl-klcc-01.webp"
  }
];
