import { seo } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, BulletList, CTABand } from "@/components/site/Blocks";
import { affiliations, partners } from "@/data/site";
import hero from "@/assets/hero-install.jpg";
import repair from "@/assets/repair.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      path: "/about",
      title: "Our Story | Ironclad Commercial Floors Vancouver",
      description: "Meet the owner-operated Vancouver crew behind Ironclad Commercial Floors: Red Seal installers, five million dollar WCB coverage, and a ten-year bonded warranty.",
      crumbs: [{ name: "About", path: "/about" }],
    }),
  component: AboutPage,
});

const steps = [
  {
    n: "01",
    title: "Site visit and testing",
    text: "Laser measurement, in-slab moisture probes, flatness check, and photographs of every problem area.",
  },
  {
    n: "02",
    title: "Written proposal",
    text: "Itemised prep scope, system recommendation, day-by-day schedule, and the test data behind it.",
  },
  {
    n: "03",
    title: "Preparation",
    text: "Grinding or shot blasting, crack and joint repair, levelling to tolerance, and priming.",
  },
  {
    n: "04",
    title: "Installation",
    text: "One crew, phased around your hours, with hoarding and dust control in occupied buildings.",
  },
  {
    n: "05",
    title: "Handover",
    text: "Cure logs, product data, maintenance schedule, labelled attic stock, and the warranty document.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Vancouver Flooring Crew Built Around Preparation"
        intro="We started Ironclad because too many businesses were waiting weeks for work that should have taken nights, and paying for finishes laid over subfloors nobody checked."
        image={hero}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Our story, without the marketing</h2>
            <p className="mt-5 text-muted-foreground">
              Between us we spent years installing for larger outfits across the Lower
              Mainland, and we kept seeing the same three failures: quotes that skipped the
              prep to win the job, crews pulled off site mid-project for something more
              urgent, and facility managers left explaining delays they had no control over.
            </p>
            <p className="mt-4 text-muted-foreground">
              So we built a company deliberately small enough that the person who quotes your
              job is on site while it runs. If something in the slab changes the number, you
              hear it that afternoon with options, not at invoicing.
            </p>
            <p className="mt-4 text-muted-foreground">
              Epoxy is our specialty and we build it tough enough for oil, tires, and heavy
              daily traffic. But the honest goal is simpler than that: we want clients to call
              us once and not need another flooring contractor for a decade.
            </p>
          </div>
          <div>
            <img src={repair} alt="Ironclad crew preparing a concrete floor" loading="lazy" className="aspect-4/3 w-full object-cover" />
            <div className="mt-6 border border-border bg-surface p-6">
              <p className="eyebrow">Credentials</p>
              <div className="mt-4">
                <BulletList
                  items={[
                    "Red Seal certified installation crews",
                    "$5M WCB and liability coverage, certificates on request",
                    "Ten-year bonded warranty on installed systems",
                    "WorkSafeBC compliant site procedures",
                    "Manufacturer-trained on Sika, Mapei, and Ardex systems",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Process"
          title="How a job runs from first call to handover"
          intro="Same five steps whether it is a 600 square foot clinic or a 40,000 square foot distribution floor."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className="border border-border bg-card p-6">
              <span className="font-mono text-2xl font-bold text-primary">{s.n}</span>
              <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Standards" title="Affiliations and manufacturer partners" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[...affiliations, ...partners].map((a) => (
            <span key={a} className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {a}
            </span>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
