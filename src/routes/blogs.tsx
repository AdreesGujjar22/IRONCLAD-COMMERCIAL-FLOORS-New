import { seo } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/blog";
import { PageHero, Section, CTABand } from "@/components/site/Blocks";
import repair from "@/assets/repair.jpg";

export const Route = createFileRoute("/blogs")({
  head: () =>
    seo({
      path: "/blogs",
      title: "Commercial Flooring Blog | Ironclad Vancouver",
      description: "Practical guides from our Vancouver flooring crew on polished concrete versus epoxy, subfloor moisture testing in BC, and how overnight installs really work.",
      crumbs: [{ name: "Blog", path: "/blogs" }],
    }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Field Notes on Commercial Flooring"
        intro="Written by the crew, not a copywriter. Practical guidance on the decisions that actually affect cost, downtime, and whether your floor lasts."
        image={repair}
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="flex h-full flex-col border border-border bg-card p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {new Date(p.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                · {p.readMinutes} min read
              </p>
              <h2 className="mt-3 text-xl font-bold text-ink">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="btn-base btn-outline mt-6 self-start"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
