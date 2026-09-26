import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-primary font-mono text-lg font-bold text-primary-foreground">
              IC
            </span>
            <span className="font-mono text-base font-bold tracking-[0.18em]">IRONCLAD</span>
          </div>
          <p className="mt-4 text-sm text-ink-foreground/70">
            Commercial flooring contractor working across Vancouver and the Lower Mainland.
            Installation, repair, replacement, epoxy, and maintenance for buildings that
            cannot afford long shutdowns.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-primary">
              <Phone className="size-4 text-primary" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-primary">
              <Mail className="size-4 text-primary" /> {site.email}
            </a>
            <p className="flex items-start gap-2 text-ink-foreground/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> {site.address}
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Popular Services</p>
          <ul className="space-y-2 text-sm text-ink-foreground/70">
            {services.slice(0, 10).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/service/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-primary"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Service Areas</p>
          <ul className="space-y-2 text-sm text-ink-foreground/70">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/location/$slug"
                  params={{ slug: l.slug }}
                  className="hover:text-primary"
                >
                  {l.name}, BC
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2 text-sm text-ink-foreground/70">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary">All Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/blogs" className="hover:text-primary">Blogs</Link></li>
            <li><Link to="/locations" className="hover:text-primary">Locations</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
            <li>
              <Link to="/flooring-installation-vancouver-bc" className="hover:text-primary">
                Flooring Installation Vancouver
              </Link>
            </li>
            <li>
              <Link to="/commercial-epoxy-flooring-vancouver-bc" className="hover:text-primary">
                Commercial Epoxy Vancouver
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Red Seal certified · WCB insured · Serving the Lower Mainland</p>
        </div>
      </div>
    </footer>
  );
}
