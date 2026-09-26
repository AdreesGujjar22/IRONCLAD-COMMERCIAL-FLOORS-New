import { seo, serviceSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { locationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { PageHero, Section, SectionHead, BulletList, CTABand, LinkCard } from "@/components/site/Blocks";
import polished from "@/assets/polished.jpg";

export const Route = createFileRoute("/location/$slug")({
  loader: ({ params }) => {
    const location = locationBySlug(params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Area not found" }, { name: "robots", content: "noindex" }] };
    const l = loaderData.location;
    const path = `/location/${l.slug}`;
    return seo({
      path,
      title: `Commercial Flooring in ${l.name}, BC | Ironclad`,
      description: `${l.blurb} Red Seal installers, free on-site estimates, and a bonded warranty.`,
      crumbs: [{ name: "Service Areas", path: "/locations" }, { name: l.name, path }],
      schemas: [serviceSchema(`Commercial Flooring in ${l.name}`, l.blurb, path, `${l.name}, BC`)],
    });
  },
  component: LocationPage,
});

function LocationPage() {
  const { location: l } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Service Area" title={`Commercial Flooring Contractor in ${l.name}`} intro={l.blurb} image={polished} />
      <Breadcrumbs items={[{ name: "Service Areas", to: "/locations" }, { name: l.name }]} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-muted-foreground">
            {l.body.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
          </div>
          <aside className="h-fit border border-border bg-surface p-7">
            <h2 className="eyebrow">Why local matters</h2>
            <div className="mt-4"><BulletList items={l.highlights} /></div>
          </aside>
        </div>
      </Section>
      <Section tone="surface">
        <SectionHead eyebrow="Services" title={`Popular services in ${l.name}`} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <LinkCard key={s.slug} to="/service/$slug" params={{ slug: s.slug }} title={s.name} text={s.short} tag={s.category} />
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
