import { seo, SITE_URL, businessId } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { postBySlug } from "@/data/blog";
import { Section, CTABand } from "@/components/site/Blocks";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = postBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    const path = `/blog/${p.slug}`;
    return seo({
      path,
      type: "article",
      title: `${p.title} | Ironclad`,
      description: p.excerpt,
      crumbs: [{ name: "Blog", path: "/blogs" }, { name: p.title, path }],
      schemas: [{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.title,
        description: p.excerpt,
        datePublished: p.date,
        dateModified: p.date,
        mainEntityOfPage: `${SITE_URL}${path}`,
        author: { "@type": "Organization", name: "Ironclad Commercial Floors" },
        publisher: { "@id": businessId },
      }],
    });
  },
  component: PostPage,
});

function PostPage() {
  const { post: p } = Route.useLoaderData();
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="container-x py-16 md:py-20">
          <Link to="/blogs" className="eyebrow">← All articles</Link>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">{p.title}</h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink-foreground/70">
            {new Date(p.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })} · {p.readMinutes} min read
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ name: "Blog", to: "/blogs" }, { name: p.title }]} />
      <Section>
        <article className="mx-auto max-w-3xl space-y-8">
          {p.body.map((b, i) => (
            <div key={i}>
              {b.heading && <h2 className="text-2xl md:text-3xl">{b.heading}</h2>}
              {b.paragraphs.map((t) => <p key={t.slice(0, 30)} className="mt-4 text-muted-foreground">{t}</p>)}
            </div>
          ))}
        </article>
      </Section>
      <CTABand />
    </>
  );
}
