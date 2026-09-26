import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { name: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface">
      <ol className="container-x flex flex-wrap items-center gap-1 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-primary">Home</Link>
        </li>
        {items.map((c) => (
          <li key={c.name} className="flex items-center gap-1">
            <ChevronRight className="size-3" aria-hidden />
            {c.to ? (
              <Link to={c.to} className="hover:text-primary">{c.name}</Link>
            ) : (
              <span aria-current="page" className="text-ink">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
