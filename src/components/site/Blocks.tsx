import { Link } from "@tanstack/react-router";
import { Phone, Check, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/data/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative bg-ink text-ink-foreground">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover opacity-25"
        />
      )}
      <div className="container-x relative py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-ink-foreground/75">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-base btn-primary">
            Make Appointment
          </Link>
          <a href={site.phoneHref} className="btn-base btn-outline border-white/25 text-ink-foreground">
            <Phone className="size-4" /> Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "surface" | "ink";
  className?: string;
}) {
  const tones = {
    light: "bg-background",
    surface: "bg-surface",
    ink: "bg-ink text-ink-foreground",
  };
  return (
    <section className={`${tones[tone]} py-16 md:py-20 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-sm">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function CTABand({
  title = "Book a free on-site measurement",
  text = "We visit, laser-measure, test the slab for moisture, and send an itemised proposal with a guaranteed turnaround time. No pressure, no fake discounts.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-x flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          <p className="mt-2 text-sm text-primary-foreground/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-base btn-ink">
            Request Quote
          </Link>
          <a href={site.phoneHref} className="btn-base bg-white text-ink">
            <Phone className="size-4" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function LinkCard({
  to,
  params,
  title,
  text,
  tag,
}: {
  to: string;
  params?: Record<string, string>;
  title: string;
  text: string;
  tag?: string;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      className="group flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-primary"
    >
      {tag && <span className="eyebrow">{tag}</span>}
      <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{text}</p>
      <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
        Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
