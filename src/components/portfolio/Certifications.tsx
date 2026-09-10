import { ArrowUpRight, BadgeCheck } from "lucide-react";

import { certifications, stats } from "@/data/portfolio";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="CREDENTIALS"
      title="Certifications & numbers."
      intro="Courses completed, plus a rough measure of the work behind them."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card/40 p-6 transition-colors hover:border-border hover:bg-card/70"
          >
            <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <h3 className="text-base font-medium text-foreground">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {c.issuer} · {c.year}
              </p>
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground"
                >
                  View credential
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-3xl border border-border/70 bg-card/40 p-6 text-center"
          >
            <dt className="order-2 mt-2 text-xs tracking-[0.14em] text-muted-foreground">
              {s.label}
            </dt>
            <dd className="text-3xl font-semibold tracking-tight text-foreground">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
