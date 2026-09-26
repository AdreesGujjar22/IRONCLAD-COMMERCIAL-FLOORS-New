import { seo, serviceSchema } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { serviceBySlug, services } from "@/data/services";
import { PageHero, Section, SectionHead, CTABand, LinkCard } from "@/components/site/Blocks";
import hero from "@/assets/hero-install.jpg";

export const Route = createFileRoute("/service/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    const path = `/service/${s.slug}`;
    return seo({
      path,
      title: `${s.name} | Ironclad Vancouver, BC`.slice(0, 60),
      description: `${s.short} Serving commercial properties across Vancouver, BC with Red Seal installers and a bonded warranty.`,
      crumbs: [{ name: "Services", path: "/services" }, { name: s.name, path }],
      schemas: [serviceSchema(s.name, s.short, path)],
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const related = services.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow={s.category} title={`${s.name} in Vancouver, BC`} intro={s.short} image={hero} />
      <Breadcrumbs items={[{ name: "Services", to: "/services" }, { name: s.name }]} />
      <Section>
        <div className="max-w-3xl space-y-4 text-muted-foreground">
          {s.body.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
        </div>
      </Section>
      {related.length > 0 && (
        <Section tone="surface">
          <SectionHead eyebrow="Related" title="Other services in this category" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <LinkCard key={r.slug} to="/service/$slug" params={{ slug: r.slug }} title={r.name} text={r.short} />
            ))}
          </div>
        </Section>
      )}
      <CTABand />
    </>
  );
}
