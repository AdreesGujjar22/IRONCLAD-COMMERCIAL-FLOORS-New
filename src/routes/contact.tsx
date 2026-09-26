import { seo, localBusinessSchema, websiteSchema } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";
import { PageHero, Section } from "@/components/site/Blocks";
import hero from "@/assets/hero-install.jpg";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      path: "/contact",
      title: "Contact Us | Ironclad Commercial Floors Vancouver",
      description: "Book a free on-site measurement and moisture test with Ironclad Commercial Floors in Vancouver, BC. Call (604) 540-3999 or send your project details today.",
      schemas: [localBusinessSchema],
      crumbs: [{ name: "Contact", path: "/contact" }],
    }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const input = "w-full border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none";
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell Us About Your Floor" intro="Send the basics and we will call back within one business day to book a site visit. No sales scripts, just someone who has actually installed floors." image={hero} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {[
              [Phone, site.phone, site.phoneHref],
              [Mail, site.email, `mailto:${site.email}`],
              [MapPin, site.address, undefined],
              [Clock, site.hours, undefined],
            ].map(([Icon, text, href]) => {
              const I = Icon as typeof Phone;
              return (
                <div key={text as string} className="flex gap-4">
                  <I className="mt-1 size-5 text-primary" />
                  {href ? <a href={href as string} className="font-semibold text-ink">{text as string}</a> : <p className="font-semibold text-ink">{text as string}</p>}
                </div>
              );
            })}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="grid gap-4 border border-border bg-surface p-7 md:grid-cols-2"
          >
            {sent ? (
              <p className="md:col-span-2 text-ink">Thanks — we have your details and will be in touch shortly.</p>
            ) : (
              <>
                <input required placeholder="Name" className={input} />
                <input required type="email" placeholder="Email" className={input} />
                <input placeholder="Phone" className={input} />
                <input placeholder="Approx. square footage" className={input} />
                <textarea required rows={5} placeholder="What's the project?" className={`${input} md:col-span-2`} />
                <button type="submit" className="btn-base btn-primary md:col-span-2">Request Quote</button>
              </>
            )}
          </form>
        </div>
      </Section>
      <Section tone="surface">
        <h2 className="text-2xl md:text-3xl">Find Ironclad Commercial Floors</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.1947230914134!2d-123.088378!3d49.2158341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486751bef21a57d%3A0x41cd6e337360bab!2sIRONCLAD%20COMMERCIAL%20FLOORS!5e0!3m2!1sen!2sca!4v1790464561227!5m2!1sen!2sca"
          title="IRONCLAD COMMERCIAL FLOORS on Google Maps"
          className="mt-6 h-[320px] w-full border-0 md:h-[450px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </Section>
    </>
  );
}
