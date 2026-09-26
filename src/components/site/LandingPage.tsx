import { Link } from "@tanstack/react-router";
import type { Landing } from "@/data/landing";
import { PageHero, Section, SectionHead, BulletList, CTABand } from "./Blocks";
import hero from "@/assets/hero-install.jpg";
import epoxy from "@/assets/epoxy.jpg";
import repair from "@/assets/repair.jpg";
import polished from "@/assets/polished.jpg";
import { locations } from "@/data/locations";
import { Breadcrumbs } from "./Breadcrumbs";

const images = { hero, epoxy, repair, polished };

export function LandingPage({ data }: { data: Landing }) {
  const img = images[data.image];
  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.h1}
        intro={data.intro}
        image={img}
      />

      <Breadcrumbs items={[{ name: data.eyebrow }]} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            {data.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl md:text-3xl">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="mt-4 text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <aside className="h-fit border border-border bg-surface p-7">
            <h2 className="eyebrow">What's included</h2>
            <div className="mt-4">
              <BulletList items={data.bullets} />
            </div>
            <img
              src={img}
              alt={data.h1}
              loading="lazy"
              className="mt-6 aspect-4/3 w-full object-cover"
            />
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead eyebrow="FAQ" title="Questions we get asked most" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {data.faqs.map((f) => (
            <div key={f.q} className="border border-border bg-card p-6">
              <h3 className="text-base font-bold text-ink">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Coverage"
          title="Neighbourhoods and cities we cover"
          intro="Crews mobilise across Vancouver and the Lower Mainland, usually within the same week you call."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {locations.map((l) => (
            <Link
              key={l.slug}
              to="/location/$slug"
              params={{ slug: l.slug }}
              className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:border-primary hover:text-primary"
            >
              {l.name}
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
