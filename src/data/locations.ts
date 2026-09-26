export type Location = {
  slug: string;
  name: string;
  blurb: string;
  body: string[];
  highlights: string[];
};

export const locations: Location[] = [
  {
    slug: "vancouver",
    name: "Vancouver",
    blurb:
      "From Kingsway warehouses to Broadway office towers, we schedule around your trading hours.",
    body: [
      "Vancouver floors take a beating that most cities never see: rain tracked in eleven months a year, tight loading bays, and buildings that were poured long before anyone worried about vapour barriers. Our crews work out of East Vancouver, so a moisture test or a damage assessment usually happens the same week you call.",
      "We handle everything from a 600 square foot clinic reception to a 40,000 square foot distribution floor, and we sequence the work so your doors stay open. Night pours, weekend grinds, and phased hand-overs are normal here, not an upcharge we spring on you at the end.",
    ],
    highlights: [
      "Crews based 15 minutes from downtown",
      "Permit-aware night work in mixed-use buildings",
      "Moisture and RH testing before every install",
    ],
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    blurb:
      "Big-box retail, light industrial parks, and institutional buildings across Burnaby.",
    body: [
      "Burnaby's industrial belt along Still Creek and Lake City keeps us busy with epoxy, urethane cement, and heavy-traffic resilient flooring. These are slabs that carry forklifts all day, so prep matters more than the topcoat, and we never skip the grind to save an afternoon.",
      "On the institutional side we work in schools, care homes, and labs where infection control and slip resistance drive the spec. We supply the test data and the warranty paperwork your facility team needs for their records.",
    ],
    highlights: [
      "Forklift-rated coating systems",
      "Low-odour products for occupied buildings",
      "Documented slip-resistance ratings",
    ],
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    blurb:
      "Heritage buildings and riverfront commercial space need careful subfloor work.",
    body: [
      "Half the commercial stock in New West sits on old slabs, wood structural floors, or three layers of previous flooring. We start with a core sample and a moisture reading instead of guessing, because that is where most failed installs in this city begin.",
      "Once we know what is underneath, we level, patch, and prime properly, then install a system that suits the building rather than the cheapest option on the shelf.",
    ],
    highlights: [
      "Core sampling on heritage slabs",
      "Wood subfloor assessment and reinforcement",
      "Quiet-hours scheduling for mixed residential",
    ],
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    blurb: "Warehouse coatings, retail fit-outs, and fleet garage epoxy.",
    body: [
      "Coquitlam's newer industrial parks give us good slabs to work with, which means we can put the time into the finish instead of the repair. Polyaspartic and polyurethane topcoats cure fast enough that a fleet garage can be back in service the next morning.",
      "For retail and restaurant fit-outs we coordinate directly with your general contractor so flooring lands in the schedule where it belongs, not squeezed into the last weekend before opening.",
    ],
    highlights: [
      "Next-morning return to service options",
      "GC schedule coordination",
      "Line marking and safety zoning",
    ],
  },
  {
    slug: "port-coquitlam",
    name: "Port Coquitlam",
    blurb: "Manufacturing plants and food-processing floors built to pass inspection.",
    body: [
      "Food and beverage floors in Port Coquitlam have to survive hot washdowns, caustic cleaners, and daily inspection. We install urethane cement and troweled systems with proper coving and drain detailing so water goes where it should.",
      "Everything is documented: product data sheets, thickness checks, and cure logs handed over at the end of the job.",
    ],
    highlights: [
      "Washdown-rated urethane cement",
      "Integral coving and drain detailing",
      "Full documentation package",
    ],
  },
  {
    slug: "downtown-vancouver",
    name: "Downtown Vancouver",
    blurb: "Tower floors installed after hours with building management on side.",
    body: [
      "Downtown work is logistics first. Freight elevator bookings, hoarding, dust control, and noise windows all get sorted before a single roll of vinyl leaves our shop. Building managers tend to remember contractors who get that part right.",
      "We install carpet tile, LVT, and polished concrete on occupied office floors overnight, and your staff walk in to a finished space rather than a construction site.",
    ],
    highlights: [
      "After-hours freight and hoarding coordination",
      "HEPA dust containment",
      "Occupied-floor phasing",
    ],
  },
  {
    slug: "gastown",
    name: "Gastown",
    blurb: "Brick-and-beam interiors where the floor is part of the design.",
    body: [
      "Gastown spaces are usually old timber or uneven concrete with a lot of character and very little level. We use self-levelling compounds and flexible underlayments that respect movement in the structure instead of fighting it.",
      "For restaurants and studios here we often polish and seal the existing slab, which keeps the raw look and costs less than covering it.",
    ],
    highlights: [
      "Self-levelling over uneven heritage slabs",
      "Existing-slab polishing and sealing",
      "Design-led finish selection",
    ],
  },
  {
    slug: "yaletown",
    name: "Yaletown",
    blurb: "Showrooms, clinics, and offices that need a finish clients notice.",
    body: [
      "Yaletown clients care how the floor reads under lighting, so we mock up finishes on site before committing. Sheen level, seam layout, and transitions get agreed in advance and put in writing.",
      "Installations run evenings and weekends so your showroom never sits dark during business hours.",
    ],
    highlights: [
      "On-site finish mock-ups",
      "Seam and transition planning",
      "Evening and weekend installs",
    ],
  },
  {
    slug: "mount-pleasant",
    name: "Mount Pleasant",
    blurb: "Breweries, studios, and creative offices in converted industrial stock.",
    body: [
      "Brewery floors need slip resistance when wet, chemical tolerance, and drainage that actually works. We build those floors with pitched screeds and coved urethane rather than rolling a coating over a flat slab and hoping.",
      "Creative offices in the same buildings get polished concrete or LVT that holds up to bikes, dollies, and constant furniture changes.",
    ],
    highlights: [
      "Pitched screeds and working drainage",
      "Wet-area slip resistance",
      "Durable finishes for high-churn offices",
    ],
  },
  {
    slug: "metrotown",
    name: "Metrotown",
    blurb: "Retail flooring installed between closing and opening.",
    body: [
      "Mall retail gives you a seven hour window, and we plan the whole job around it. Materials are staged, adhesives are chosen for their open time, and the crew size matches the square footage so the store opens on time.",
      "We also handle mall landlord requirements, from insurance certificates to after-hours access forms.",
    ],
    highlights: [
      "Overnight retail turnarounds",
      "Landlord compliance paperwork",
      "Fast-set adhesive systems",
    ],
  },
  {
    slug: "queensborough",
    name: "Queensborough",
    blurb: "Distribution centres and industrial slabs with real traffic loads.",
    body: [
      "Queensborough is warehouse country, and warehouse floors fail at the joints first. We saw, fill, and armour control joints with semi-rigid epoxy so forklift wheels stop chipping the edges.",
      "Where slabs have already spalled we resurface rather than replace, which usually saves a week of downtime and a large share of the budget.",
    ],
    highlights: [
      "Joint armouring for forklift traffic",
      "Slab resurfacing instead of replacement",
      "Traffic-lane line marking",
    ],
  },
];

export const locationBySlug = (slug: string) =>
  locations.find((l) => l.slug === slug);
