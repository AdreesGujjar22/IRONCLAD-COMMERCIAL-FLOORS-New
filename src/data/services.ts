export type Service = {
  slug: string;
  name: string;
  category: string;
  short: string;
  body: string[];
  bullets: string[];
};

export const categories = [
  "Concrete & Epoxy",
  "Resilient & Vinyl",
  "Tile & Carpet",
  "Wood & Laminate",
  "Sector Specific",
  "Repair & Restoration",
  "Coatings & Performance",
];

export const services: Service[] = [
  {
    slug: "commercial-flooring",
    name: "Commercial Flooring",
    category: "Concrete & Epoxy",
    short: "Commercial flooring systems selected for your space, traffic, and operating schedule.",
    body: [
      "From concrete and epoxy to resilient flooring, carpet, and tile, we help you choose a system that suits the way your facility operates. We assess the space, existing slab, traffic, and maintenance needs before recommending materials.",
      "Our team coordinates preparation, installation, and phased scheduling around your business so the finished floor performs without unnecessary disruption.",
    ],
    bullets: [
      "Flooring recommendations matched to your facility",
      "Subfloor assessment and preparation",
      "Installation planned around business operations",
    ],
  },
  {
    slug: "commercial-epoxy-flooring",
    name: "Commercial Epoxy Flooring",
    category: "Concrete & Epoxy",
    short:
      "Durable, seamless epoxy flooring for commercial spaces with demanding traffic and cleaning needs.",
    body: [
      "Commercial epoxy flooring creates a seamless, easy-to-clean surface for warehouses, kitchens, production areas, and other busy facilities. We assess traffic, chemical exposure, moisture, and downtime before recommending the right system.",
      "We prepare the concrete mechanically, address cracks and surface defects, and install the specified primer, epoxy build, and protective topcoat for a durable finish suited to your operation.",
    ],
    bullets: [
      "System selected for traffic and exposure conditions",
      "Mechanically prepared concrete substrate",
      "Coordinated installation and cure schedule",
    ],
  },
  {
    slug: "epoxy-floor-coating",
    name: "Epoxy Floor Coating",
    category: "Concrete & Epoxy",
    short: "Seamless, chemical-tolerant coating systems built on properly prepped slabs.",
    body: [
      "An epoxy floor is only as good as the hour before it goes down. We diamond grind to a measured profile, chase and fill cracks, and prime according to the moisture reading, then build the system in coats rather than one thick pour.",
      "Colour, flake, quartz, and sheen are all specified up front with a sample panel on your own slab, so what you approve is what you walk on.",
    ],
    bullets: [
      "CSP profile documented before priming",
      "In-slab RH testing to ASTM F2170",
      "Sample panel poured on site for approval",
    ],
  },
  {
    slug: "concrete-epoxy-floor-installation",
    name: "Concrete & Epoxy Floor Installation",
    category: "Concrete & Epoxy",
    short: "Full slab-to-finish installation for new builds and gutted shells.",
    body: [
      "On new construction we come in early, review the slab pour schedule, and set the drying and prep window with the general contractor so flooring is not the trade that eats the float at the end.",
      "From there it is one crew for grinding, levelling, priming, and finish, which means no finger-pointing if a detail needs sorting.",
    ],
    bullets: [
      "Early involvement in the construction schedule",
      "Single crew from prep through topcoat",
      "Cure logs and product data on handover",
    ],
  },
  {
    slug: "carpet-tile-installation",
    name: "Carpet Tile Installation",
    category: "Tile & Carpet",
    short: "Modular carpet laid tight, square, and easy to swap one tile at a time.",
    body: [
      "Carpet tile lives or dies on layout. We dry-lay from true centre lines, check pattern direction on every box, and use releasable adhesive so a coffee disaster in year three costs one tile instead of a room.",
      "We keep an attic stock allowance in the quote and label it for your facility team rather than leaving offcuts in a corner.",
    ],
    bullets: [
      "Dry-lay and centre-line layout before glue",
      "Releasable adhesive for single-tile replacement",
      "Labelled attic stock left with your team",
    ],
  },
  {
    slug: "commercial-luxury-vinyl-flooring-installation",
    name: "Commercial Luxury Vinyl Flooring (LVT / LVP)",
    category: "Resilient & Vinyl",
    short: "Glue-down luxury vinyl plank and tile for offices, clinics, and retail.",
    body: [
      "LVT only looks premium if the subfloor is flat. We skim and level to a straightedge tolerance first, because every dip telegraphs through a 2mm plank under raking light.",
      "Plank direction, stagger, and border details are drawn before the first box opens, so seams fall where they read best rather than where they landed.",
    ],
    bullets: [
      "Levelling to a measured flatness tolerance",
      "Planned stagger and seam layout",
      "Heat-welded or dry seams as the space requires",
    ],
  },
  {
    slug: "commercial-sheet-vinyl-flooring-installation",
    name: "Commercial Sheet Vinyl Flooring",
    category: "Resilient & Vinyl",
    short: "Heat-welded sheet goods for clinics, labs, and washroom-adjacent spaces.",
    body: [
      "Sheet vinyl earns its place where you need a floor that water cannot get under. We heat-weld every seam, cove up the wall where the spec calls for it, and cap with a proper termination bar instead of silicone.",
      "Our installers are trained on welding rod temperature and skiving, which is the difference between a seam that disappears and one that catches a mop for the next decade.",
    ],
    bullets: [
      "Heat-welded and skived seams",
      "Integral coving and capping details",
      "Hygienic detailing around drains and fixtures",
    ],
  },
  {
    slug: "commercial-vinyl-composition-tile-installation",
    name: "Vinyl Composition Tile (VCT) Installation",
    category: "Resilient & Vinyl",
    short: "The budget workhorse, installed and finished so it actually lasts.",
    body: [
      "VCT still makes sense for schools, back-of-house, and corridors where replacement cost matters more than appearance. The trick is adhesive open time and a proper initial finish application.",
      "We lay out from centre, roll the field properly, and apply the first coats of finish before the space is handed back so your cleaners inherit a floor in good shape.",
    ],
    bullets: [
      "Correct adhesive open time and rolling",
      "Initial finish coats included",
      "Cost-effective patching for phased replacement",
    ],
  },
  {
    slug: "commercial-rubber-flooring-installation",
    name: "Commercial Rubber Flooring",
    category: "Resilient & Vinyl",
    short: "Sheet and tile rubber for gyms, stairs, and high-impact circulation.",
    body: [
      "Rubber handles impact, muffles sound, and grips underfoot, which is why it ends up in stairwells, weight rooms, and hospital corridors. It is also unforgiving of a dirty subfloor, so prep is thorough.",
      "We relax sheet material on site before cutting and use manufacturer-matched adhesives to avoid the bond failures that cheap glue causes on rubber.",
    ],
    bullets: [
      "Material relaxed on site before cutting",
      "Manufacturer-matched adhesive systems",
      "Stair nosings and transitions installed tight",
    ],
  },
  {
    slug: "commercial-linoleum-flooring-installation",
    name: "Commercial Linoleum Flooring",
    category: "Resilient & Vinyl",
    short: "Natural linoleum for healthcare and education spaces with low-VOC targets.",
    body: [
      "Linoleum is a genuinely different material from vinyl: it is linseed-based, naturally antibacterial, and it moves with humidity. It rewards installers who understand that and punishes those who treat it like sheet vinyl.",
      "We acclimatise it, use the correct adhesive, and allow for its curing amber-cast so nobody panics at the colour on day one.",
    ],
    bullets: [
      "Proper acclimatisation and adhesive selection",
      "Low-VOC systems for occupied healthcare",
      "Welded seams and coved details",
    ],
  },
  {
    slug: "commercial-resilient-flooring-installation",
    name: "Commercial Resilient Flooring",
    category: "Resilient & Vinyl",
    short:
      "One partner for LVT, sheet, VCT, rubber, and linoleum across a whole facility.",
    body: [
      "Larger facilities rarely use one product. A single building might need welded sheet in the wet rooms, LVT in reception, and VCT in storage, all meeting at transitions that have to be flush and safe.",
      "We take the whole package so transitions, levelling, and schedule are coordinated by one crew rather than three subcontractors.",
    ],
    bullets: [
      "Mixed-product packages under one contract",
      "Flush, code-compliant transitions",
      "Single schedule and single warranty",
    ],
  },
  {
    slug: "commercial-carpet-installation",
    name: "Commercial Carpet Installation",
    category: "Tile & Carpet",
    short: "Broadloom installed with proper seams, stretch, and pattern match.",
    body: [
      "Broadloom in a commercial setting is usually direct-glue, and the seam work is what you will notice for the next ten years. We power-stretch where the spec allows and seal every cut edge.",
      "Patterned goods get a proper match calculation before cutting so you are not paying for a wasted roll.",
    ],
    bullets: [
      "Sealed seams and correct glue coverage",
      "Pattern match calculated before cutting",
      "Furniture lift and reset coordinated",
    ],
  },
  {
    slug: "commercial-tile-flooring-installation",
    name: "Commercial Tile Flooring",
    category: "Tile & Carpet",
    short: "Porcelain and ceramic set on uncoupling membranes that stop future cracks.",
    body: [
      "Hard tile fails at the substrate, not the surface. We install uncoupling or crack-isolation membranes over concrete and respect movement joints instead of tiling straight across them.",
      "Grout choice matters as much as tile: epoxy grout in kitchens, high-performance cement grout elsewhere, and colour approved against a real sample.",
    ],
    bullets: [
      "Crack-isolation and uncoupling membranes",
      "Movement joints carried through the tile",
      "Epoxy grout where hygiene demands it",
    ],
  },
  {
    slug: "commercial-terrazzo-flooring-installation",
    name: "Commercial Terrazzo Flooring",
    category: "Tile & Carpet",
    short: "Poured epoxy terrazzo for lobbies and institutions built for the long run",
    body: [
      "Terrazzo is a fifty-year floor. Divider strips, aggregate blends, and grind sequence are all decided in a sample stage, and the pour itself is slow, careful work that cannot be rushed to hit a Friday.",
      "We schedule terrazzo early in a fit-out and protect it properly so following trades do not undo the finish.",
    ],
    bullets: [
      "Sample blends approved before pouring",
      "Divider strip layout drawn to the architecture",
      "Hard protection through following trades",
    ],
  },
  {
    slug: "commercial-hardwood-flooring-installation",
    name: "Commercial Hardwood Flooring",
    category: "Wood & Laminate",
    short: "Engineered and solid wood for boutique retail, offices, and hospitality.",
    body: [
      "Wood in a commercial space needs a moisture strategy and a realistic finish. We measure slab and ambient humidity, acclimatise the material on site, and specify a commercial-grade waterborne finish that can be recoated instead of replaced.",
      "Expansion gaps and perimeter details are planned so the floor can move without cupping or gapping through a Vancouver winter.",
    ],
    bullets: [
      "Slab and ambient moisture readings logged",
      "On-site acclimatisation period",
      "Recoatable commercial finish systems",
    ],
  },
  {
    slug: "commercial-laminate-flooring-installation",
    name: "Commercial Laminate Flooring",
    category: "Wood & Laminate",
    short: "AC4 and AC5 rated laminate where budget and wood look both matter.",
    body: [
      "Commercial laminate only performs at the right abrasion rating, and plenty of what gets sold for offices is residential grade. We specify AC4 or AC5 with an appropriate underlay and honest expectations about wet areas.",
      "Floating installations need proper perimeter gaps and room-size limits, both of which we set out before installation rather than after a buckle appears.",
    ],
    bullets: [
      "Commercial abrasion ratings only",
      "Acoustic underlay for upper floors",
      "Correct expansion gaps and field sizes",
    ],
  },
  {
    slug: "industrial-epoxy-flooring",
    name: "Industrial Epoxy Flooring",
    category: "Sector Specific",
    short:
      "Heavy-duty epoxy flooring designed for industrial loads, impact, and chemical exposure.",
    body: [
      "Industrial epoxy systems are selected around real operating conditions, including wheel and axle loads, impact, temperature changes, and chemical exposure. We assess the concrete and moisture conditions before specifying the primer, epoxy build, and protective finish.",
      "We plan joint details, safety markings, and phased installation with your operations team so the floor is built for the work happening on it and the facility can return to service on schedule.",
    ],
    bullets: [
      "System selected for measured load and exposure conditions",
      "Joint detailing coordinated with the coating system",
      "Safety marking planned with operations",
    ],
  },
  {
    slug: "warehouse-epoxy-flooring",
    name: "Warehouse Epoxy Flooring",
    category: "Sector Specific",
    short:
      "Durable epoxy floors and clear zone markings for forklift traffic and warehouse operations.",
    body: [
      "Warehouse epoxy flooring starts with a review of the slab, joints, forklift traffic, and racking layout. We repair surface defects, prepare the concrete, and specify an epoxy system suited to the traffic and cleaning demands of the facility.",
      "Installation can be phased by aisle or work zone, with racking, pedestrian routes, and staging areas incorporated into the floor-marking plan to help keep operations organized.",
    ],
    bullets: [
      "Slab and joint assessment before coating",
      "Aisle-by-aisle installation planning",
      "Floor markings coordinated with warehouse layout",
    ],
  },
  {
    slug: "retail-epoxy-flooring",
    name: "Retail Epoxy Flooring",
    category: "Sector Specific",
    short: "Attractive, hard-wearing epoxy floors installed around retail opening hours.",
    body: [
      "Retail epoxy flooring combines a seamless, cleanable surface with colour and finish options suited to your store. We review foot traffic, the existing slab, and the desired appearance before preparing a sample and specifying the coating system.",
      "Work is scheduled around store hours, with fixtures protected and installation zones planned to minimize disruption. Cure time and reopening are coordinated before work begins.",
    ],
    bullets: [
      "Finish and colour options reviewed before installation",
      "Work phased around store hours",
      "Cure and reopening schedule coordinated in advance",
    ],
  },
  {
    slug: "office-epoxy-flooring",
    name: "Office Epoxy Flooring",
    category: "Sector Specific",
    short:
      "Seamless epoxy flooring with a clean, durable finish for offices and shared workspaces.",
    body: [
      "Office epoxy flooring offers a durable alternative for reception areas, corridors, and other high-traffic spaces. We assess the concrete, review colour and sheen options, and coordinate product selection with building ventilation and occupancy requirements.",
      "Installation can be phased around staff and furniture moves, with dust-controlled preparation and cure times planned to limit disruption. Floor boxes and transitions are coordinated before coating starts.",
    ],
    bullets: [
      "Colour and sheen selected for the workspace",
      "Phased work around staff and furniture",
      "Floor boxes and transitions planned in advance",
    ],
  },
  {
    slug: "restaurant-flooring-installation",
    name: "Restaurant & Kitchen Flooring",
    category: "Sector Specific",
    short: "Health-inspection-ready kitchen floors and front-of-house finishes.",
    body: [
      "Back of house needs slip resistance when greasy, coving at every wall, and slope to drain. We use urethane cement or troweled epoxy mortar and detail the drains properly, because that is where inspectors look first.",
      "Front of house gets a finish that matches the room, installed with the same waterproofing discipline as the kitchen at the threshold.",
    ],
    bullets: [
      "Wet-and-greasy slip resistance ratings",
      "Coving, slope, and drain detailing",
      "Quick turnaround between service periods",
    ],
  },
  {
    slug: "healthcare-epoxy-flooring",
    name: "Healthcare Epoxy Flooring",
    category: "Sector Specific",
    short:
      "Seamless resin flooring options for clinics and care spaces with demanding cleaning requirements.",
    body: [
      "Healthcare epoxy flooring is specified for the space and its cleaning protocols, with attention to disinfectant compatibility, slip resistance, and the condition of the existing substrate. We coordinate coving and transitions where the selected system and room requirements call for them.",
      "Work is planned with facility staff around access, infection-control measures, ventilation, and cure time, so each area can be safely returned to service according to the product requirements.",
    ],
    bullets: [
      "System selected for cleaning and disinfectant exposure",
      "Coving and transitions coordinated to room requirements",
      "Phasing, ventilation, and cure plan agreed with facilities",
    ],
  },
  {
    slug: "gym-flooring-installation",
    name: "Gym & Fitness Flooring",
    category: "Sector Specific",
    short: "Rubber, vinyl sports surfaces, and platforms that survive dropped iron.",
    body: [
      "Weight areas, studios, and courts each need a different build-up. We spec thickness and density to the actual drop loads and add subfloor isolation where noise transfer to tenants below is a concern.",
      "Platforms, turf strips, and court lines are set out with your trainers so the layout works for programming, not just for the drawing.",
    ],
    bullets: [
      "Thickness matched to real drop loads",
      "Acoustic isolation for tenanted buildings",
      "Turf, platform, and court line layout",
    ],
  },
  {
    slug: "school-flooring-installation",
    name: "School & Education Flooring",
    category: "Sector Specific",
    short: "Summer-window installs across classrooms, gyms, and corridors.",
    body: [
      "School work happens in a fixed window and there is no extending it. We plan the whole summer as a sequence with material on site before the last bell, and daily progress reported to your facilities lead.",
      "Products are picked for abrasion resistance and easy maintenance by in-house custodial teams.",
    ],
    bullets: [
      "Fixed summer-window scheduling",
      "Custodial-friendly maintenance regimes",
      "Progress reporting to facilities staff",
    ],
  },
  {
    slug: "hotel-flooring-installation",
    name: "Hotel & Hospitality Flooring",
    category: "Sector Specific",
    short: "Guest floors, corridors, and back-of-house installed without waking anyone.",
    body: [
      "Hotels stay open, so we work in stacks of rooms with quiet-hours rules, sealed corridors, and elevator bookings agreed with your GM. Guests should not know we are in the building.",
      "Acoustic underlays and threshold details get particular attention, because footfall noise complaints cost more than the flooring.",
    ],
    bullets: [
      "Room-stack phasing with quiet-hours limits",
      "Acoustic underlay and IIC-aware build-ups",
      "Corridor and elevator protection",
    ],
  },
  {
    slug: "showroom-epoxy-flooring",
    name: "Showroom Epoxy Flooring",
    category: "Sector Specific",
    short: "High-performance epoxy finishes for vehicle and equipment showrooms.",
    body: [
      "Showroom epoxy flooring is designed to present well under display lighting while standing up to vehicle traffic and tire contact. We assess the concrete, discuss sheen and colour, and select a coating and protective topcoat suited to the loads and exposure.",
      "A finish sample can be reviewed under your showroom lighting before installation. We coordinate staging and cure time so vehicles can return only when the floor system is ready for service.",
    ],
    bullets: [
      "Finish reviewed under showroom lighting",
      "Topcoat selected for vehicle and tire exposure",
      "Staging and cure schedule coordinated",
    ],
  },
  {
    slug: "garage-epoxy-flooring",
    name: "Garage Epoxy Flooring",
    category: "Sector Specific",
    short:
      "Easy-to-clean epoxy flooring for garages exposed to vehicle traffic, road salt, and oil.",
    body: [
      "Garage epoxy flooring creates a seamless, easier-to-clean surface over properly prepared concrete. We assess slab condition and moisture, repair cracks and defects, and help select a solid colour or decorative flake finish for the space.",
      "The coating and protective topcoat are selected for vehicle use, road salts, and the garage's exposure to sunlight. We explain the cure schedule before installation so vehicles return only when the system is ready.",
    ],
    bullets: [
      "Concrete and moisture assessment before coating",
      "Solid-colour and decorative flake finish options",
      "Protective topcoat and cure schedule matched to the garage",
    ],
  },
  {
    slug: "commercial-epoxy-floor-repair",
    name: "Commercial Epoxy Floor Repair",
    category: "Repair & Restoration",
    short: "Peeling, blistering, or delaminated coatings diagnosed then fixed properly.",
    body: [
      "Before patching anything we find out why the coating let go. Adhesion pull tests, moisture readings, and a look at the failure edge usually tell the story in an hour.",
      "If the original prep was the problem, a patch will fail again, and we will tell you that rather than sell you a short-lived repair.",
    ],
    bullets: [
      "Adhesion and moisture diagnosis first",
      "Feathered, colour-matched patch repairs",
      "Honest advice when recoating is the wrong answer",
    ],
  },
  {
    slug: "commercial-concrete-floor-repair",
    name: "Commercial Concrete Floor Repair",
    category: "Repair & Restoration",
    short: "Cracks, spalls, and blown joints repaired to carry traffic again.",
    body: [
      "We route and fill structural cracks with epoxy or polyurea depending on whether the crack still moves, then rebuild spalled areas with a repair mortar matched to the surrounding strength.",
      "Repairs are ground flush so wheels do not find the edges, which is the usual reason a previous repair looks worse than the original damage.",
    ],
    bullets: [
      "Moving versus static crack assessment",
      "Strength-matched repair mortars",
      "Ground flush to the surrounding slab",
    ],
  },
  {
    slug: "commercial-floor-leveling-and-preparation",
    name: "Floor Levelling & Surface Preparation",
    category: "Repair & Restoration",
    short: "The unglamorous work that decides whether the finish lasts.",
    body: [
      "We shot blast or diamond grind to remove old adhesive and laitance, then apply cementitious levelling compound to a measured flatness tolerance rather than by eye.",
      "Every surface gets primed to the product's requirements, and we record the readings so the flooring manufacturer's warranty holds.",
    ],
    bullets: [
      "Shot blasting and dust-extracted grinding",
      "Levelling to documented flatness tolerance",
      "Primer and moisture readings recorded",
    ],
  },
  {
    slug: "commercial-floor-coating",
    name: "Commercial Floor Coating",
    category: "Coatings & Performance",
    short: "Epoxy, urethane, and hybrid coatings matched to how the space is used.",
    body: [
      "A parkade, a brewery, and a server room all want different coatings. We pick the resin chemistry from the exposure, the traffic, and the cure window you can actually give us.",
      "Thickness is verified with wet film gauges as we go instead of assumed from the material count at the end.",
    ],
    bullets: [
      "Resin chemistry chosen from real exposure data",
      "Wet film thickness verified during application",
      "Cure schedule agreed before mobilising",
    ],
  },
  {
    slug: "commercial-concrete-floor-sealing",
    name: "Commercial Concrete Sealing",
    category: "Coatings & Performance",
    short: "Penetrating and film-forming sealers that keep stains out of the slab.",
    body: [
      "Sealing is the cheapest way to extend the life of a plain concrete floor. Penetrating silicates harden and repel without changing appearance, while film sealers add sheen and stain resistance.",
      "We test absorption first, because an over-troweled slab will not take a penetrating sealer no matter how much you apply.",
    ],
    bullets: [
      "Absorption testing before product selection",
      "Penetrating or film systems as appropriate",
      "Re-seal schedule provided in writing",
    ],
  },
  {
    slug: "commercial-anti-slip-floor-coating",
    name: "Anti-Slip Floor Coating",
    category: "Coatings & Performance",
    short: "Documented slip resistance for ramps, kitchens, and wet processing areas.",
    body: [
      "Slip resistance is a number, not an adjective. We specify aggregate size and broadcast rate to hit a target DCOF or R-rating, then hand you the data sheet for your safety file.",
      "Texture is balanced against cleanability, because a floor too aggressive to mop will be complained about within a month.",
    ],
    bullets: [
      "Target DCOF or R-rating specified and documented",
      "Aggregate graded for cleanability",
      "Ramp, stair, and wet-zone detailing",
    ],
  },
  {
    slug: "commercial-floor-refinishing",
    name: "Commercial Floor Refinishing",
    category: "Repair & Restoration",
    short: "Screen, recoat, and re-polish instead of replacing a serviceable floor.",
    body: [
      "Most tired floors are not worn out, they are worn dull. Screening and recoating wood, or re-burnishing and re-densifying concrete, brings back the finish for a fraction of replacement cost.",
      "We assess remaining wear layer honestly and say so when replacement really is the better spend.",
    ],
    bullets: [
      "Wear-layer assessment before quoting",
      "Overnight recoats with fast-cure finishes",
      "Straight answer when replacement is smarter",
    ],
  },
  {
    slug: "commercial-floor-restoration",
    name: "Commercial Floor Restoration",
    category: "Repair & Restoration",
    short: "Bringing neglected terrazzo, concrete, and stone floors back to life.",
    body: [
      "Restoration is detective work. Layers of old finish, patches, and coatings come off first, then we see what the original floor has left to give and grind up from there.",
      "Heritage and institutional floors often turn out to be far better than the covering that hid them for thirty years.",
    ],
    bullets: [
      "Test patches before full-floor commitment",
      "Coating and adhesive removal",
      "Terrazzo, concrete, and stone honing",
    ],
  },
  {
    slug: "commercial-concrete-resurfacing",
    name: "Commercial Concrete Resurfacing",
    category: "Repair & Restoration",
    short: "A new wearing surface over a tired slab, without demolition.",
    body: [
      "Resurfacing saves the week of downtime and the disposal bill that replacement brings. We bond a cementitious or epoxy mortar overlay to the prepared slab and re-establish falls and joints as we go.",
      "Overlays are only as good as the bond, so we pull-test the prepared substrate before any material is mixed.",
    ],
    bullets: [
      "Bond pull-testing before overlay",
      "Falls and drainage re-established",
      "No demolition or disposal costs",
    ],
  },
  {
    slug: "commercial-floor-maintenance",
    name: "Commercial Floor Maintenance",
    category: "Coatings & Performance",
    short: "Scheduled programs that stop small problems becoming capital projects.",
    body: [
      "We set up a written maintenance plan per floor type: what to clean with, at what dilution, how often to burnish, and when to recoat. Then we either train your team or run the visits ourselves.",
      "Annual condition reports give your facilities budget real numbers instead of surprises.",
    ],
    bullets: [
      "Written per-floor cleaning and recoat schedule",
      "Custodial team training",
      "Annual condition report for budgeting",
    ],
  },
  {
    slug: "commercial-polyaspartic-floor-coating",
    name: "Polyaspartic Floor Coating",
    category: "Coatings & Performance",
    short: "One-day cure systems for floors that cannot stay closed.",
    body: [
      "Polyaspartic cures fast enough to grind, coat, and return a space to traffic inside a single shift, which makes it the go-to for garages, fire halls, and retail that cannot close.",
      "It also holds colour under UV far better than epoxy, so exposed entries and parkade ramps do not yellow.",
    ],
    bullets: [
      "Same-day or overnight return to service",
      "UV stable, non-yellowing finish",
      "Applied over epoxy or direct to prepared slab",
    ],
  },
  {
    slug: "commercial-polyurethane-floor-coating",
    name: "Polyurethane Floor Coating",
    category: "Coatings & Performance",
    short: "Flexible, abrasion-resistant topcoats over epoxy build-coats.",
    body: [
      "Urethane topcoats take the abuse so the epoxy underneath does not. They flex with thermal movement, resist scuffing, and can be matte where glare is a problem.",
      "We use urethane over epoxy as a standard two-part system in warehouses and food areas where scrubbers run daily.",
    ],
    bullets: [
      "Abrasion and scuff resistant wear layer",
      "Matte to gloss sheen options",
      "Thermal movement tolerance",
    ],
  },
  {
    slug: "commercial-waterproof-flooring-installation",
    name: "Waterproof Flooring Installation",
    category: "Coatings & Performance",
    short: "Membranes and welded systems for washrooms, plant rooms, and decks.",
    body: [
      "Waterproofing is detailing, not product. Drains, penetrations, upstands, and thresholds are where water finds its way through, so those get built first and flood tested before the finish goes on.",
      "We provide the flood test record, which is usually the document a building manager actually wants.",
    ],
    bullets: [
      "Liquid-applied membranes and welded sheet",
      "Flood testing with written record",
      "Drain, upstand, and threshold detailing",
    ],
  },
  {
    slug: "commercial-soundproof-flooring-installation",
    name: "Soundproof Flooring Installation",
    category: "Coatings & Performance",
    short: "Acoustic build-ups that keep footfall out of the suite below.",
    body: [
      "Impact noise complaints come from the build-up, not the visible floor. We specify underlays and isolation layers to hit your IIC or ASTC target and detail perimeter isolation so sound does not flank around the edges.",
      "For strata and mixed-use buildings we supply the product acoustic data your building manager needs for approval.",
    ],
    bullets: [
      "Build-ups specified to IIC / ASTC targets",
      "Perimeter isolation to stop flanking",
      "Acoustic data supplied for strata approval",
    ],
  },
  {
    slug: "commercial-static-control-flooring-installation",
    name: "Static Control (ESD) Flooring",
    category: "Coatings & Performance",
    short: "Conductive and dissipative floors for electronics, data, and clean rooms.",
    body: [
      "ESD flooring only works as a system: conductive primer, grounding straps, the right topcoat, and verified resistance readings. We test and record point-to-ground values on completion.",
      "We also set out the maintenance regime, because the wrong polish can take a compliant floor out of spec overnight.",
    ],
    bullets: [
      "Grounding grid installed and documented",
      "Resistance testing records on handover",
      "ESD-safe maintenance instructions",
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
