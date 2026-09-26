import { seo } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { services, categories } from "@/data/services";
import { PageHero, Section, CTABand, LinkCard } from "@/components/site/Blocks";
import epoxy from "@/assets/epoxy.jpg";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      path: "/services",
      title: "Commercial Flooring Services in Vancouver, BC",
      description: "Browse every commercial flooring service Ironclad offers in Vancouver, BC, from epoxy and polished concrete to vinyl, carpet, tile, repairs, and maintenance.",
      crumbs: [{ name: "Services", path: "/services" }],
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Commercial Flooring Services in Vancouver, BC"
        intro="Every system we install, repair, and maintain, grouped by the kind of problem it solves. If you are not sure which one fits, call us and describe the space."
        image={epoxy}
      />

      {categories.map((cat, i) => {
        const items = services.filter((s) => s.category === cat);
        if (!items.length) return null;
        return (
          <Section key={cat} tone={i % 2 === 1 ? "surface" : "light"}>
            <p className="eyebrow">{cat}</p>
            <h2 className="mt-2 text-2xl md:text-3xl">{cat} services</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <LinkCard
                  key={s.slug}
                  to="/service/$slug"
                  params={{ slug: s.slug }}
                  title={s.name}
                  text={s.short}
                />
              ))}
            </div>
          </Section>
        );
      })}

      <CTABand />
    </>
  );
}
