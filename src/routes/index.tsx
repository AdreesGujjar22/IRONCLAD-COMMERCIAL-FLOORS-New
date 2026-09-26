import { seo, localBusinessSchema, websiteSchema } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Shield, Clock, BadgeCheck, Award, Star } from "lucide-react";
import { site, trustBadges } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { posts } from "@/data/blog";
import { Section, SectionHead, CTABand, LinkCard, BulletList } from "@/components/site/Blocks";
import hero from "@/assets/hero-install.jpg";
import epoxy from "@/assets/epoxy.jpg";
import repair from "@/assets/repair.jpg";
import polished from "@/assets/polished.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      path: "/",
      title: "Commercial Flooring In Vancouver | Ironclad Commercial Floors",
      description: "Commercial Flooring In Vancouver: Ironclad installs epoxy, concrete, vinyl, and carpet floors for local businesses, with estimates and flexible scheduling.",
      schemas: [localBusinessSchema, websiteSchema],
    }),
  component: Home,
});

const pillars = [
  {
    icon: Shield,
    title: "Licensed and insured",
    text: "$5M WCB coverage and full liability documentation supplied before we mobilise.",
  },
  {
    icon: BadgeCheck,
    title: "Free on-site estimates",
    text: "Laser measurement, slab moisture testing, and an itemised proposal within two business days.",
  },
  {
    icon: Clock,
    title: "Downtime kept short",
    text: "Night pours, weekend grinds, and zone phasing so your doors stay open through the job.",
  },
  {
    icon: Award,
    title: "Ten-year bonded warranty",
    text: "Written prep scope and test data behind every system we install.",
  },
];

const reviews = [
  {
    name: "Dana Whitmore",
    role: "Facility Manager, Burnaby distribution centre",
    text: "They found a moisture problem two other contractors missed, priced the mitigation honestly, and had 18,000 square feet coated across three weekends without stopping a single shipment.",
  },
  {
    name: "Rahul Menon",
    role: "General Contractor, Vancouver",
    text: "Flooring is usually the trade that blows my schedule. Ironclad showed up when they said, finished a day early, and left the site cleaner than they found it.",
  },
  {
    name: "Claire Bergeron",
    role: "Owner, Mount Pleasant restaurant group",
    text: "Our kitchen floor passed inspection first time. They explained coving and drainage in language I actually understood and did the whole thing between a Sunday close and Tuesday open.",
  },
];

function Home() {
  const featured = [
    services.find((s) => s.slug === "epoxy-floor-coating")!,
    services.find((s) => s.slug === "commercial-flooring")!,
    services.find((s) => s.slug === "commercial-luxury-vinyl-flooring-installation")!,
    services.find((s) => s.slug === "warehouse-epoxy-flooring")!,
    services.find((s) => s.slug === "commercial-concrete-floor-repair")!,
    services.find((s) => s.slug === "restaurant-flooring-installation")!,
  ];

  return (
    <>
      <section className="relative bg-ink text-ink-foreground">
        <img
          src={hero}
          alt="Installer laying commercial vinyl plank flooring in Vancouver"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="container-x relative py-20 md:py-32">
          <h1 className="max-w-3xl text-4xl leading-[1.05] md:text-6xl">
            Commercial Flooring Contractor in Vancouver, BC
          </h1>
          <p className="mt-6 max-w-2xl text-ink-foreground/80">
            Epoxy, polished concrete, vinyl, and carpet systems installed, repaired, and
            replaced by Red Seal crews — scheduled around your business hours, not ours.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-base btn-primary">
              Make Appointment
            </Link>
            <a href={site.phoneHref} className="btn-base btn-ink border border-white/20">
              <Phone className="size-4" /> Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-background">
        <div className="container-x grid gap-3 py-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((b) => (
            <div key={b} className="flex items-center justify-center gap-2 text-ink">
              <BadgeCheck className="size-4 text-primary" /> {b}
            </div>
          ))}
        </div>
      </div>

      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src={polished} alt="Polished concrete showroom floor" loading="lazy" className="aspect-3/4 w-full object-cover" />
            <img src={repair} alt="Concrete floor repair in progress" loading="lazy" className="mt-8 aspect-3/4 w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              We started Ironclad because good floors were taking far too long
            </h2>
            <p className="mt-5 text-muted-foreground">
              Too many Vancouver businesses were waiting weeks for flooring work that should
              have taken nights. We built a crew that preps properly, works after hours, and
              answers the phone when something needs sorting — epoxy is our specialty, built
              tough enough for oil, tires, and daily forklift traffic.
            </p>
            <div className="mt-6">
              <Link to="/about" className="btn-base btn-ink">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Services"
          title="Commercial flooring services in Vancouver, BC"
          intro="A full range of flooring systems, each specified from your traffic, chemicals, and downtime limits rather than a catalogue page."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <LinkCard
              key={s.slug}
              to="/service/$slug"
              params={{ slug: s.slug }}
              tag={s.category}
              title={s.name}
              text={s.short}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="btn-base btn-primary">
            View All Services
          </Link>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why Ironclad</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Why Vancouver businesses keep our number
            </h2>
            <p className="mt-4 text-ink-foreground/75">
              Engineered for the moisture levels, traffic, and tight schedules of commercial
              real estate in British Columbia.
            </p>
            <img src={epoxy} alt="Epoxy floor coating applied in a warehouse" loading="lazy" className="mt-8 aspect-16/10 w-full object-cover" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="border border-white/10 bg-white/5 p-6">
                <p.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-foreground/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Coverage</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Areas we serve near Vancouver</h2>
            <p className="mt-4 text-muted-foreground">
              Crews mobilise across Vancouver, Burnaby, Coquitlam, New Westminster, and the
              surrounding communities, usually within the same week you call.
            </p>
            <div className="mt-6 border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Head Office
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{site.address}</p>
              <a href={site.phoneHref} className="mt-2 block font-bold text-ink">
                Direct line: {site.phone}
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {locations.slice(0, 6).map((l) => (
              <Link
                key={l.slug}
                to="/location/$slug"
                params={{ slug: l.slug }}
                className="border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <h3 className="font-bold text-ink">{l.name}, BC</h3>
                <p className="mt-1 text-sm text-muted-foreground">{l.blurb}</p>
              </Link>
            ))}
            <Link
              to="/locations"
              className="flex items-center justify-center border border-dashed border-border p-5 text-sm font-semibold text-primary transition-colors hover:border-primary"
            >
              View all {locations.length} areas we serve →
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Scope Guide</p>
          <h2 className="mt-2 text-3xl md:text-4xl">
            What goes into a commercial flooring estimate
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every proposal we write is built from the same five inputs. Knowing them before
            you call makes the site visit faster and the number more accurate.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <BulletList
            items={[
              "Area in square feet and the number of separate rooms or zones",
              "Current floor and what is underneath it",
              "Subfloor condition: level, cracked, spalled, or previously coated",
              "Traffic type: foot, pallet jack, forklift, or vehicle",
              "Downtime you can offer: weekday, overnight, or full shutdown",
            ]}
          />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Reviews"
          title="What contractors and facility managers tell us"
          intro="Feedback from the people who have to live with the floor after we leave."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex h-full flex-col border border-border bg-card p-6">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-muted-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="block font-bold text-ink">{r.name}</span>
                <span className="text-muted-foreground">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Blogs" title="Field notes from our crews" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <LinkCard
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              tag={`${p.readMinutes} min read`}
              title={p.title}
              text={p.excerpt}
            />
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
