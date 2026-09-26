import { createFileRoute } from "@tanstack/react-router";
import { landings } from "@/data/landing";
import { LandingPage } from "@/components/site/LandingPage";
import { seo, faqSchema, serviceSchema, localBusinessSchema } from "@/lib/seo";

const data = landings["flooring-replacement-vancouver-bc"]!;
const path = "/flooring-replacement-vancouver-bc";

export const Route = createFileRoute("/flooring-replacement-vancouver-bc")({
  head: () =>
    seo({
      path,
      title: data.metaTitle,
      description: data.metaDescription,
      crumbs: [{ name: data.eyebrow, path }],
      schemas: [
        data.key.startsWith("about") || data.key.startsWith("contact")
          ? localBusinessSchema
          : serviceSchema(data.h1, data.metaDescription, path),
        faqSchema(data.faqs),
      ],
    }),
  component: () => <LandingPage data={data} />,
});
