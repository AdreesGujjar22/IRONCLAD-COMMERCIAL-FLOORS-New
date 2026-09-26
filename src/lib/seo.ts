import { site } from "@/data/site";

export const SITE_URL = "https://ironcladcommercialfloors.ca";

export const businessId = `${SITE_URL}/#business`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": businessId,
  name: site.name,
  url: SITE_URL,
  telephone: "+1-604-540-3999",
  email: site.email,
  priceRange: "$$",
  image: `${SITE_URL}/favicon.ico`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "783 E 60th Ave",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    postalCode: "V5X 2A5",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.2155, longitude: -123.0905 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    "Vancouver", "Burnaby", "New Westminster", "Coquitlam", "Port Coquitlam",
  ].map((n) => ({ "@type": "City", name: n })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: site.name,
  alternateName: site.shortName,
  url: SITE_URL,
  publisher: { "@id": businessId },
};

const BRAND_SUFFIX = " | Ironclad Commercial Floors";
const HOME_TITLE = `Commercial Flooring In Vancouver${BRAND_SUFFIX}`;
const HOME_KEYWORD = "Commercial Flooring In Vancouver";

function titleKeyword(title: string) {
  const stopWords = new Set(["about", "across", "how", "in", "our", "the", "vs", "why"]);
  return title
    .replace(/\s*\|.*$/, "")
    .replace(/[,:]/g, "")
    .trim()
    .split(/\s+/)
    .filter((word) => !stopWords.has(word.toLowerCase()))
    .slice(0, 4)
    .join(" ");
}

function pageTitle(title: string, path: string) {
  if (path === "/") return HOME_TITLE;
  const base = title.replace(/\s*\|.*$/, "").trim();
  const normalized = base.replace(/\bin Vancouver(?:,\s*BC)?\b/i, "In Vancouver");
  const withLocation = /\bIn Vancouver\b/.test(normalized)
    ? normalized
    : `${normalized} In Vancouver`;
  return `${withLocation}${BRAND_SUFFIX}`;
}

function pageDescription(description: string, title: string, path: string) {
  const keyword = path === "/" ? HOME_KEYWORD : titleKeyword(title);
  let result = description.trim();
  if (!result.slice(0, 156).toLowerCase().includes(keyword.toLowerCase())) {
    result = `${keyword}: ${result}`;
  }
  if (result.length < 155) {
    result += " Serving Vancouver and the Lower Mainland. Contact Ironclad for a free estimate.";
  }
  if (result.length > 159) result = `${result.slice(0, 156).trimEnd()}...`;
  return result;
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string, area = "Vancouver, BC") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    provider: { "@id": businessId },
    areaServed: { "@type": "Place", name: area },
  };
}

/** Builds full head(): title, description, canonical, Open Graph, Twitter, JSON-LD. */
export function seo(opts: {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  crumbs?: Crumb[];
  schemas?: object[];
}) {
  const url = `${SITE_URL}${opts.path === "/" ? "" : opts.path}` || SITE_URL;
  const title = pageTitle(opts.title, opts.path);
  const description = pageDescription(opts.description, opts.title, opts.path);
  const schemas = [...(opts.schemas ?? [])];
  if (opts.crumbs?.length) schemas.push(breadcrumbSchema(opts.crumbs));
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "en_CA" },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "geo.region", content: "CA-BC" },
      { name: "geo.placename", content: "Vancouver" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: schemas.map((s) => ({ type: "application/ld+json", children: JSON.stringify(s) })),
  };
}
