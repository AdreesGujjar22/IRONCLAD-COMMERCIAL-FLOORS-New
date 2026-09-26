import { seo } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { locations } from "@/data/locations";
import { PageHero, Section, CTABand, LinkCard } from "@/components/site/Blocks";
import polished from "@/assets/polished.jpg";

export const Route = createFileRoute("/locations")({
  head: () =>
    seo({
      path: "/locations",
      title: "Service Areas Across Metro Vancouver | Ironclad",
      description: "Ironclad Commercial Floors serves Vancouver, Burnaby, Coquitlam, New Westminster, and Port Coquitlam with flooring installation, repair, and epoxy coatings.",
      crumbs: [{ name: "Service Areas", path: "/locations" }],
    }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Where Ironclad Works Across Metro Vancouver"
        intro="Our crews are based in East Vancouver, which means a site visit usually happens the same week you call, anywhere from Gastown to Port Coquitlam."
        image={polished}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <LinkCard
              key={l.slug}
              to="/location/$slug"
              params={{ slug: l.slug }}
              tag="British Columbia"
              title={`${l.name}, BC`}
              text={l.blurb}
            />
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
