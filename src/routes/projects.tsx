import { seo } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, CTABand } from "@/components/site/Blocks";
import hero from "@/assets/hero-install.jpg";
import epoxy from "@/assets/epoxy.jpg";
import repair from "@/assets/repair.jpg";
import polished from "@/assets/polished.jpg";

export const Route = createFileRoute("/projects")({
  head: () =>
    seo({
      path: "/projects",
      title: "Recent Flooring Projects in Vancouver, BC",
      description: "See recent commercial flooring projects across Metro Vancouver: warehouse epoxy, retail overnight installs, kitchen urethane cement, and polished concrete.",
      crumbs: [{ name: "Projects", path: "/projects" }],
    }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "18,000 sq ft distribution floor, Burnaby",
    image: epoxy,
    system: "Epoxy build coats with urethane topcoat",
    downtime: "Three weekends, zero shipping days lost",
    story:
      "Two previous quotes ignored a high in-slab humidity reading. We installed a moisture-mitigating primer, armoured every control joint, and phased the coating aisle by aisle so pickers kept working through the week.",
  },
  {
    title: "Retail flagship refit, Metrotown",
    image: hero,
    system: "Glue-down luxury vinyl plank, 4,200 sq ft",
    downtime: "Five overnight shifts, store open every day",
    story:
      "Seven hour windows between closing and opening. Fast-set levelling compound and pressure-sensitive adhesive let us hand back a finished, fixture-loaded zone every morning.",
  },
  {
    title: "Brewery production floor, Mount Pleasant",
    image: repair,
    system: "Urethane cement with pitched screed and coving",
    downtime: "Nine days around a planned brew pause",
    story:
      "The existing floor had no fall to the drains, so wash water pooled against the walls. We rebuilt the falls, coved the perimeter, and installed a slip-rated surface that passes a wet boot test.",
  },
  {
    title: "Auto showroom, Coquitlam",
    image: polished,
    system: "Polished concrete, 320 grit with guard",
    downtime: "Two weeks, showroom relocated to lot",
    story:
      "The slab was patched in a dozen places from an old rack layout. We honed, filled with a matched aggregate grout, and chose a sheen that photographs well without showing every tire mark.",
  },
  {
    title: "Care home corridors, New Westminster",
    image: hero,
    system: "Heat-welded sheet vinyl with coved base",
    downtime: "Wing by wing, residents never relocated",
    story:
      "Infection control drove everything: hoarding, negative air, daily clean-down, and disinfectant-compatible material. Handover included the welding and cleaning documentation the health authority asked for.",
  },
  {
    title: "Strata parkade, Downtown Vancouver",
    image: epoxy,
    system: "Polyaspartic coating with line marking",
    downtime: "Bay by bay overnight, residents kept parking",
    story:
      "Road salt had etched the deck badly. We ground back to sound concrete, rebuilt spalled areas, and used a UV-stable polyaspartic so the ramp edges do not yellow.",
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Recent Commercial Flooring Projects"
        intro="A sample of what we have finished recently, including what made each job awkward and how long the client was actually out of use."
        image={polished}
      />

      <Section>
        <SectionHead
          eyebrow="Case Notes"
          title="Real jobs, real constraints"
          intro="We list the downtime as well as the finish, because that is usually the number that decides the project."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="border border-border bg-card">
              <img src={p.image} alt={p.title} loading="lazy" className="aspect-16/10 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                <dl className="mt-4 grid gap-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-mono text-xs uppercase tracking-widest text-primary">System</dt>
                    <dd className="text-muted-foreground">{p.system}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-mono text-xs uppercase tracking-widest text-primary">Downtime</dt>
                    <dd className="text-muted-foreground">{p.downtime}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-muted-foreground">{p.story}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABand
        title="Want a reference from a job like yours?"
        text="Tell us your building type and we will put you in touch with a client who had the same problem."
      />
    </>
  );
}
