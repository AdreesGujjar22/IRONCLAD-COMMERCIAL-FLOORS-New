import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock, Mail, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { services, categories } from "@/data/services";
import { locations } from "@/data/locations";

const navLink =
  "px-1 py-2 text-sm font-medium text-ink transition-colors hover:text-primary";

export function Header() {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<"services" | "areas" | null>(null);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-ink-foreground">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-xs md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-primary">
              <Phone className="size-3.5 text-primary" /> {site.phone}
            </a>
            <span className="hidden items-center gap-2 md:flex">
              <MapPin className="size-3.5 text-primary" /> {site.address}
            </span>
            <span className="hidden items-center gap-2 lg:flex">
              <Clock className="size-3.5 text-primary" /> {site.hours}
            </span>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-2 hover:text-primary md:flex"
          >
            <Mail className="size-3.5 text-primary" /> {site.email}
          </a>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="container-x flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-ink font-mono text-lg font-bold text-primary">
              IC
            </span>
            <span className="leading-tight">
              <span className="block font-mono text-base font-bold tracking-[0.18em] text-ink">
                IRONCLAD
              </span>
              <span className="block font-mono text-[0.6rem] tracking-[0.22em] text-muted-foreground">
                COMMERCIAL FLOORS
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link to="/" className={navLink}>
              Home
            </Link>
            <Link to="/about" className={navLink}>
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setPanel("services")}
              onMouseLeave={() => setPanel(null)}
            >
              <Link to="/services" className={`${navLink} inline-flex items-center gap-1`}>
                Services <ChevronDown className="size-3.5" />
              </Link>
              {panel === "services" && (
                <div className="absolute left-1/2 top-full w-[56rem] -translate-x-1/2 border border-border bg-background p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-6">
                    {categories.map((cat) => (
                      <div key={cat}>
                        <p className="eyebrow mb-2">{cat}</p>
                        <ul className="space-y-1">
                          {services
                            .filter((s) => s.category === cat)
                            .map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to="/service/$slug"
                                  params={{ slug: s.slug }}
                                  className="text-sm text-muted-foreground hover:text-primary"
                                >
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/projects" className={navLink}>
              Projects
            </Link>
            <Link to="/blogs" className={navLink}>
              Blogs
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setPanel("areas")}
              onMouseLeave={() => setPanel(null)}
            >
              <Link to="/locations" className={`${navLink} inline-flex items-center gap-1`}>
                Service Areas <ChevronDown className="size-3.5" />
              </Link>
              {panel === "areas" && (
                <div className="absolute right-0 top-full w-64 border border-border bg-background p-4 shadow-xl">
                  <ul className="space-y-1">
                    {locations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to="/location/$slug"
                          params={{ slug: l.slug }}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {l.name}, BC
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link to="/contact" className={navLink}>
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className="btn-base btn-primary hidden md:inline-flex">
              <Phone className="size-4" /> Call Now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-md border border-border lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container-x grid gap-1 py-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/blogs", label: "Blogs" },
                { to: "/locations", label: "Service Areas" },
                { to: "/contact", label: "Contact Us" },
              ].map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-2.5 text-sm font-medium text-ink"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
