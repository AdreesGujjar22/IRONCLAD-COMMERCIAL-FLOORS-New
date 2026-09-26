export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  body: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "polished-concrete-vs-epoxy-vancouver-warehouses",
    title: "Polished Concrete vs Epoxy for a Vancouver Warehouse",
    excerpt:
      "Both finishes get sold as the tough option for a Vancouver warehouse. The right choice depends on your slab, your chemicals, and how long you can close the floor.",
    date: "2026-08-14",
    readMinutes: 6,
    body: [
      {
        paragraphs: [
          "Every second warehouse manager we meet has been quoted for both, usually with wildly different numbers, and no one has explained why. The honest answer is that the two finishes solve different problems, and the slab underneath decides more than the brochure does.",
        ],
      },
      {
        heading: "Polished concrete: cheap to own, fussy to start",
        paragraphs: [
          "Polishing uses the slab you already have. Diamond tooling cuts the surface, densifier hardens it, and successive passes bring up the sheen. There is nothing to peel because there is no coating, and maintenance is a scrubber with clean water.",
          "The catch is the slab itself. If the concrete is soft, patched in twenty places, or was power-troweled too hard, polishing will show every one of those stories. We take a scratch test before quoting so nobody is surprised.",
        ],
      },
      {
        heading: "Epoxy: a new surface with rules",
        paragraphs: [
          "Epoxy builds a new wearing surface on top of the slab, which makes it the right call when you need chemical resistance, a colour, or a seamless washdown floor. It also hides a slab that polishing would expose.",
          "Epoxy fails for two reasons: moisture from below and poor preparation. Vancouver slabs often sit on damp ground with no vapour barrier, so we test relative humidity in the slab before writing a spec. If the reading is high, a moisture-mitigating primer goes in the budget from day one.",
        ],
      },
      {
        heading: "Downtime, honestly",
        paragraphs: [
          "Polishing is dry work and you can often run in one half of the building while we cut the other. Epoxy needs the area empty and clean, and standard systems want 24 hours before foot traffic and 48 to 72 before forklifts. Polyaspartic topcoats shorten that dramatically but cost more per square foot.",
        ],
      },
      {
        heading: "A quick rule of thumb",
        paragraphs: [
          "Dry storage, decent slab, tight budget over ten years: polish it. Chemicals, washdowns, colour coding, or a slab that needs covering: coat it. If you are somewhere in the middle, a densified and sealed floor with epoxy only in the wet zones is usually the sensible compromise.",
        ],
      },
    ],
  },
  {
    slug: "subfloor-moisture-testing-bc-climate",
    title: "Why Subfloor Moisture Testing Matters in BC",
    excerpt:
      "Most flooring failures we get called to fix were never installation mistakes. They were moisture problems in the slab that nobody measured before the job started.",
    date: "2026-07-22",
    readMinutes: 5,
    body: [
      {
        paragraphs: [
          "When a vinyl floor bubbles or an adhesive turns to soup, the finger usually points at the installer. In our experience the real culprit was in the slab the whole time, and a two hundred dollar test would have caught it.",
        ],
      },
      {
        heading: "What we actually measure",
        paragraphs: [
          "We use in-slab relative humidity probes to ASTM F2170 rather than surface calcium chloride tests alone. Probes read the moisture deep in the slab, which is what will eventually reach the adhesive, and they keep reading as the slab dries.",
          "For older buildings we add a simple plastic sheet test and a look underneath wherever access allows. Groundwater, missing vapour barriers, and failed perimeter drainage are common in buildings poured before the 1990s.",
        ],
      },
      {
        heading: "What the numbers mean",
        paragraphs: [
          "Most resilient flooring manufacturers cap installation at 75 to 85 percent internal RH. Go above that and you void the warranty, whatever the adhesive salesman says. New slabs need roughly thirty days of drying per inch of thickness in good conditions, and a rainy Lower Mainland winter is not good conditions.",
        ],
      },
      {
        heading: "Fixing a wet slab",
        paragraphs: [
          "You have three options: wait, mitigate, or change the system. Waiting is free but rarely available. Mitigation means an epoxy moisture barrier primer, which adds cost but carries its own warranty. Changing the system means choosing a breathable or moisture-tolerant floor instead.",
          "We put the test results and the recommendation in writing before any material is ordered. It makes the conversation with your insurer much shorter if something ever does go wrong.",
        ],
      },
    ],
  },
  {
    slug: "overnight-commercial-flooring-zero-downtime",
    title: "How Overnight Commercial Flooring Installs Work",
    excerpt:
      "Zero-downtime commercial flooring installs are not marketing talk. They are a sequencing exercise, and here is exactly how our Vancouver crews plan one.",
    date: "2026-06-30",
    readMinutes: 5,
    body: [
      {
        paragraphs: [
          "A retail client once told us they could not close for even one day, and asked whether that made new flooring impossible. It does not. It just moves the difficulty from the install to the planning.",
        ],
      },
      {
        heading: "Phasing the floor",
        paragraphs: [
          "We divide the space into zones sized to what a crew can demolish, prep, install, and clean inside the closed window. Fixtures move into the completed zone each night, which means the store opens each morning with a finished section and a hoarded one.",
        ],
      },
      {
        heading: "Materials that cooperate",
        paragraphs: [
          "Fast-set patching compounds, pressure-sensitive adhesives, and polyaspartic coatings exist precisely for this. They cost more per unit and they buy you hours, which is the whole point when closing for a day costs more than the floor.",
        ],
      },
      {
        heading: "The honest trade-offs",
        paragraphs: [
          "Night work carries a labour premium, usually fifteen to thirty percent. Zones mean more transitions and more setup time overall. And the schedule has no slack, so a surprise in the subfloor can push a phase to the following night.",
          "We quote overnight work as its own line item so you can see exactly what the convenience costs and decide whether a single weekend shutdown would serve you better.",
        ],
      },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
