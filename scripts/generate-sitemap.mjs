// Generates public/sitemap.xml from the site's own data files so it can
// never drift out of sync with the pages that actually exist.
// Run manually with: node scripts/generate-sitemap.mjs
// Wired up to run automatically after every `npm run build` (see package.json "postbuild").
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SITE_URL = "https://ironcladcommercialfloors.ca";

function extractSlugs(file) {
  const content = readFileSync(path.join(root, file), "utf8");
  return [...content.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function extractLandingKeys(file) {
  const content = readFileSync(path.join(root, file), "utf8");
  return [...content.matchAll(/^\s*"([a-z0-9-]+)":\s*\{/gm)].map((m) => m[1]);
}

const serviceSlugs = extractSlugs("src/data/services.ts");
const locationSlugs = extractSlugs("src/data/locations.ts");
const blogSlugs = extractSlugs("src/data/blog.ts");
const landingKeys = extractLandingKeys("src/data/landing.ts");

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/locations", priority: "0.8", changefreq: "monthly" },
  { path: "/projects", priority: "0.6", changefreq: "monthly" },
  { path: "/blogs", priority: "0.6", changefreq: "weekly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
];

const routes = [
  ...staticRoutes,
  ...landingKeys.map((key) => ({ path: `/${key}`, priority: "0.9", changefreq: "monthly" })),
  ...serviceSlugs.map((slug) => ({ path: `/service/${slug}`, priority: "0.7", changefreq: "monthly" })),
  ...locationSlugs.map((slug) => ({ path: `/location/${slug}`, priority: "0.7", changefreq: "monthly" })),
  ...blogSlugs.map((slug) => ({ path: `/blog/${slug}`, priority: "0.5", changefreq: "yearly" })),
];

const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(path.join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml written with ${routes.length} URLs.`);
