import { Check } from "lucide-react";

import { about } from "@/data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="ABOUT" title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>

        <div className="rounded-3xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm">
          <h3 className="text-sm font-medium text-foreground">Current technical focus</h3>
          <ul className="mt-4 space-y-3">
            {about.focus.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {about.highlights.map((h) => (
          <div
            key={h.title}
            className="group rounded-3xl border border-border/70 bg-card/40 p-6 transition-colors hover:border-border hover:bg-card/70"
          >
            <h3 className="text-base font-medium text-foreground">{h.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
