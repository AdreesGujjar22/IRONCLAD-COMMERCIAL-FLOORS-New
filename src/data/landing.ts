export type Landing = {
  key: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: "hero" | "epoxy" | "repair" | "polished";
  sections: { heading: string; paragraphs: string[] }[];
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const landings: Record<string, Landing> = {
  "flooring-installation-vancouver-bc": {
    key: "flooring-installation-vancouver-bc",
    eyebrow: "Installation",
    h1: "Commercial Flooring Installation in Vancouver, BC",
    metaTitle: "Commercial Flooring Installation Vancouver | Ironclad",
    metaDescription:
      "Commercial flooring installation in Vancouver, BC. Vinyl, carpet tile, polished concrete, and epoxy floors installed by Red Seal crews around your business hours.",
    intro:
      "New fit-out or full replacement, we install commercial-grade flooring across Vancouver with the subfloor prep, moisture testing, and scheduling discipline the job actually needs.",
    image: "hero",
    sections: [
      {
        heading: "Prep first, finish second",
        paragraphs: [
          "Almost every failed commercial floor we are called to inspect failed underneath, not on top. So we start with a moisture probe, a flatness check, and a look at whatever the last contractor left behind. Only then do we price the finish.",
          "That order of operations is why our installs hold their manufacturer warranty, and why we can put a ten-year bonded warranty behind the work.",
        ],
      },
      {
        heading: "Installed around your hours",
        paragraphs: [
          "Vancouver businesses cannot lose a trading week to flooring. We phase the work into zones, install overnight or on weekends where it makes sense, and hoard the active area so your staff and customers stay clear of it.",
          "You get a daily schedule at the start of the job and a call the moment anything changes.",
        ],
      },
    ],
    bullets: [
      "Luxury vinyl, sheet vinyl, VCT, carpet tile, rubber, and linoleum",
      "Polished concrete and resin systems",
      "ASTM F2170 in-slab moisture testing",
      "Overnight and weekend installation windows",
      "Red Seal certified installers, $5M WCB coverage",
    ],
    faqs: [
      {
        q: "How long does a commercial flooring installation take?",
        a: "A 2,000 square foot office in good condition is usually two to three nights including prep. Larger warehouse coatings run a week or more because of cure times. We give you a day-by-day schedule with the quote.",
      },
      {
        q: "Do you remove the old flooring?",
        a: "Yes. Demolition, adhesive removal, and disposal are line items in every proposal so you can see exactly what that part costs.",
      },
      {
        q: "Can you work while we stay open?",
        a: "In most cases yes, by working in zones outside business hours. We will tell you honestly when a short full closure would be cheaper and faster for you.",
      },
    ],
  },
  "flooring-repair-vancouver-bc": {
    key: "flooring-repair-vancouver-bc",
    eyebrow: "Repair",
    h1: "Commercial Flooring Repair in Vancouver, BC",
    metaTitle: "Commercial Floor Repair in Vancouver, BC | Ironclad",
    metaDescription:
      "Fast commercial floor repair across Vancouver, BC. We fix cracked concrete, peeling epoxy, and lifted vinyl with 24/7 emergency callouts for safety hazards.",
    intro:
      "Cracks, peeling coatings, lifting planks, and trip hazards get assessed quickly and repaired properly, with an honest answer about whether a patch or a replacement is the better spend.",
    image: "repair",
    sections: [
      {
        heading: "Diagnosis before repair",
        paragraphs: [
          "A blistered coating and a delaminated coating look identical from a metre away and need completely different fixes. We pull-test, moisture-test, and look at the failure edge before quoting, which takes an hour and saves repeating the job in eighteen months.",
        ],
      },
      {
        heading: "Emergency response",
        paragraphs: [
          "A trip hazard in a public area is a liability the same day it appears. We keep a rapid-response crew for safety-critical repairs and can make an area safe immediately, then return for the permanent fix at a time that suits you.",
        ],
      },
    ],
    bullets: [
      "Crack routing, epoxy and polyurea injection",
      "Spall and joint edge rebuilding",
      "Coating delamination diagnosis and recoating",
      "Vinyl, tile, and carpet patching with colour matching",
      "24/7 callout for safety hazards",
    ],
    faqs: [
      {
        q: "Can you match our existing floor?",
        a: "Often yes. We keep records of common commercial product lines and can usually source a close or exact match. Where we cannot, we suggest a feature or zone break so the repair reads as deliberate.",
      },
      {
        q: "How fast can someone attend?",
        a: "For safety hazards in Vancouver we aim for same-day attendance. Non-urgent assessments are usually within two business days.",
      },
      {
        q: "Is repair always cheaper than replacement?",
        a: "Not always. If more than about a third of the floor is affected, or the original prep was the cause, replacement usually costs less over the next five years. We will say so.",
      },
    ],
  },
  "flooring-replacement-vancouver-bc": {
    key: "flooring-replacement-vancouver-bc",
    eyebrow: "Replacement",
    h1: "Commercial Flooring Replacement in Vancouver, BC",
    metaTitle: "Commercial Flooring Replacement Vancouver | Ironclad",
    metaDescription:
      "Full commercial flooring replacement in Vancouver, BC, including removal, disposal, subfloor repair, and a new floor matched to your traffic and downtime limits.",
    intro:
      "When repairs stop making sense, we strip the old floor out, fix what is underneath, and install a system chosen for how your building actually gets used.",
    image: "polished",
    sections: [
      {
        heading: "The part most quotes leave out",
        paragraphs: [
          "Removal is the unpredictable half of a replacement. Old adhesive, three layers of previous flooring, and unexpected slab damage all show up once the top comes off. We allow for it in the quote and flag the risk range up front rather than issuing a change order later.",
        ],
      },
      {
        heading: "Choosing the replacement",
        paragraphs: [
          "We walk the space with you, ask what failed and why, and then recommend a system that addresses it. Sometimes that is a like-for-like replacement. Often it is a different material entirely, because the original spec was wrong for the traffic.",
        ],
      },
    ],
    bullets: [
      "Demolition, adhesive removal, and disposal included",
      "Asbestos-aware procedures on pre-1990 buildings",
      "Subfloor repair and levelling before the new floor",
      "Phased replacement to keep you trading",
      "Ten-year bonded warranty on the installed system",
    ],
    faqs: [
      {
        q: "Do you handle asbestos-containing floor tile?",
        a: "We identify it, stop, and bring in a licensed abatement contractor. We never disturb suspect material ourselves, and we coordinate the schedule around their work.",
      },
      {
        q: "Can you replace one floor at a time in a multi-storey building?",
        a: "Yes, that is the normal approach. We work floor by floor with protected routes and agreed elevator windows.",
      },
      {
        q: "What happens to our furniture?",
        a: "We quote lift-and-shift as a separate line. Most clients have us handle it so there is one point of responsibility if something gets marked.",
      },
    ],
  },
  "commercial-epoxy-flooring-vancouver-bc": {
    key: "commercial-epoxy-flooring-vancouver-bc",
    eyebrow: "Epoxy Systems",
    h1: "Commercial Epoxy Flooring in Vancouver, BC",
    metaTitle: "Commercial Epoxy Flooring Vancouver, BC | Ironclad",
    metaDescription:
      "Industrial-grade commercial epoxy flooring in Vancouver, BC. Seamless, chemical-resistant coatings for warehouses, food plants, and manufacturing floors.",
    intro:
      "Seamless resin floors for warehouses, manufacturing, food production, and labs — specified from your real chemical and load exposure, not from a catalogue.",
    image: "epoxy",
    sections: [
      {
        heading: "Built in layers, not poured in hope",
        paragraphs: [
          "A proper epoxy floor is a system: diamond-ground profile, primer chosen from the slab's moisture reading, build coats to the specified thickness, and a topcoat matched to the exposure. We verify wet film thickness as we go and log it.",
          "Vancouver slabs are frequently damp, so moisture mitigation is a real line item here more often than in drier climates. We test rather than gamble.",
        ],
      },
      {
        heading: "Choosing the right resin",
        paragraphs: [
          "Standard epoxy is excellent for dry industrial use. Urethane cement handles hot washdowns and thermal shock in food plants. Polyaspartic gets you back in service the same day. Novolac epoxy deals with aggressive chemicals. We match the chemistry to your operation and explain the trade-offs in plain terms.",
        ],
      },
    ],
    bullets: [
      "Self-levelling, flake, quartz broadcast, and mortar systems",
      "Urethane cement for washdown and thermal shock",
      "Moisture mitigation primers where RH testing requires it",
      "Anti-slip aggregate to a documented rating",
      "Line marking, coving, and drain detailing",
    ],
    faqs: [
      {
        q: "How long before we can drive on it?",
        a: "Standard epoxy: about 24 hours for foot traffic and 48 to 72 hours for forklifts. Polyaspartic systems can take traffic the next morning.",
      },
      {
        q: "Will epoxy peel off our slab?",
        a: "Only if the prep or the moisture was wrong. We grind to a measured profile and test in-slab humidity before priming, which is why our coatings carry a warranty.",
      },
      {
        q: "Can you coat over an existing epoxy floor?",
        a: "Sometimes. If the existing coating is well bonded we abrade and recoat, which is much cheaper. If adhesion tests fail, it has to come off.",
      },
    ],
  },
  "garage-epoxy-flooring-vancouver-bc": {
    key: "garage-epoxy-flooring-vancouver-bc",
    eyebrow: "Garage & Parkade",
    h1: "Garage Epoxy Flooring in Vancouver, BC",
    metaTitle: "Garage & Parkade Epoxy Flooring Vancouver BC",
    metaDescription:
      "Garage and parkade epoxy flooring in Vancouver, BC. Hot-tire resistant coatings for fleet garages, dealerships, and strata parkades with fast return to service.",
    intro:
      "Fleet garages, dealership service bays, and strata parkades coated with hot-tire resistant systems that go down fast and stay put.",
    image: "epoxy",
    sections: [
      {
        heading: "Hot tires are the real test",
        paragraphs: [
          "Cheap garage coatings lift in circles where the tires sit, because the coating never bonded mechanically and the hot rubber pulls it up. Grinding, not acid etching, is what prevents that, and we grind every time.",
        ],
      },
      {
        heading: "Parkades have their own problems",
        paragraphs: [
          "Parkade decks deal with road salt, water ingress, and traffic membranes that may already be failing. We assess the deck first and will recommend a traffic-bearing membrane rather than a coating when that is what the structure needs.",
        ],
      },
    ],
    bullets: [
      "Diamond grinding, never acid etch",
      "Hot-tire pickup resistant polyaspartic topcoats",
      "Oil, brake fluid, and salt resistance",
      "Stall numbering, arrows, and safety line marking",
      "Overnight turnaround options for working garages",
    ],
    faqs: [
      {
        q: "Can you do a parkade while residents still park there?",
        a: "Yes. We work in bays, post notices in advance, and coordinate with your strata manager so a portion of stalls stays available throughout.",
      },
      {
        q: "How long does a two-car service bay take?",
        a: "With a polyaspartic system, typically one full day plus overnight cure. Standard epoxy needs two to three days.",
      },
      {
        q: "Will oil stains come through?",
        a: "Not if they are removed first. Deep oil contamination is degreased and, where needed, ground out before priming.",
      },
    ],
  },
  "about-ironclad-commercial-floors-vancouver-bc": {
    key: "about-ironclad-commercial-floors-vancouver-bc",
    eyebrow: "Our Company",
    h1: "About Ironclad Commercial Floors, Vancouver BC",
    metaTitle: "About Ironclad Commercial Floors | Vancouver BC",
    metaDescription:
      "Meet Ironclad Commercial Floors, a Vancouver, BC flooring contractor with Red Seal crews, five million dollar WCB coverage, and a ten-year bonded warranty.",
    intro:
      "A Vancouver flooring crew that started because too many businesses were waiting weeks for work that should have taken nights.",
    image: "hero",
    sections: [
      {
        heading: "Why we exist",
        paragraphs: [
          "We spent years working for larger outfits and watching the same pattern: a quote that skipped the prep, a crew that vanished mid-job, and a facility manager left explaining the delay to their boss. Ironclad was built to be the opposite of that experience.",
          "We are deliberately sized so the person who quotes your job is on site while it runs. If something goes sideways, you talk to them, not a call centre.",
        ],
      },
      {
        heading: "How we work",
        paragraphs: [
          "Every proposal includes the prep scope in writing, the test results we based it on, and the schedule day by day. If we discover something in the slab that changes the number, you hear about it that afternoon with options, not at invoicing.",
          "Our installers are Red Seal certified, we carry $5M WCB coverage, and the finished system is backed by a ten-year bonded warranty.",
        ],
      },
    ],
    bullets: [
      "Owner-operated, Vancouver based since day one",
      "Red Seal certified installation crews",
      "$5M WCB and liability coverage",
      "Ten-year bonded warranty on installed systems",
      "Written prep scope and test data with every quote",
    ],
    faqs: [
      {
        q: "What size projects do you take?",
        a: "From a 500 square foot clinic to 50,000 square foot distribution floors. Below about 300 square feet we will usually refer you to someone better suited.",
      },
      {
        q: "Are you insured for work in occupied buildings?",
        a: "Yes, and we provide certificates, WorkSafeBC clearance letters, and safety documentation before mobilising.",
      },
      {
        q: "Do you subcontract the work?",
        a: "Core installation is our own crew. Specialist trades like asbestos abatement are licensed subcontractors, named in the proposal.",
      },
    ],
  },
  "contact-ironclad-commercial-floors-vancouver-bc": {
    key: "contact-ironclad-commercial-floors-vancouver-bc",
    eyebrow: "Get In Touch",
    h1: "Contact Ironclad Commercial Floors in Vancouver, BC",
    metaTitle: "Contact Ironclad Commercial Floors | Vancouver",
    metaDescription:
      "Contact Ironclad Commercial Floors in Vancouver, BC for a free on-site measurement, moisture test, and itemised commercial flooring proposal within two days.",
    intro:
      "Call, email, or send the details of your space. We will arrange a free on-site measurement and give you a written proposal with real dates.",
    image: "polished",
    sections: [
      {
        heading: "What happens after you call",
        paragraphs: [
          "We ask a few questions about the space, the traffic, and your downtime limits, then book a site visit. On site we laser-measure, test slab moisture, photograph problem areas, and talk through the options with whoever runs the building.",
          "Your proposal arrives within two business days, itemised, with the prep scope and the schedule spelled out.",
        ],
      },
    ],
    bullets: [
      "Free on-site measurement and moisture testing",
      "Itemised proposals within two business days",
      "Emergency repair line answered around the clock",
      "Serving Vancouver, Burnaby, Surrey, Richmond, Coquitlam, New Westminster",
    ],
    faqs: [
      {
        q: "Is the site visit really free?",
        a: "Yes, for commercial properties in our service area, with no obligation attached.",
      },
      {
        q: "Do you give phone estimates?",
        a: "We can give a rough per-square-foot range on the phone, but we will not pretend it is a quote until we have seen the slab.",
      },
      {
        q: "How quickly can you start?",
        a: "Typical lead time is one to three weeks depending on materials. Emergency repairs are handled much faster.",
      },
    ],
  },
};
