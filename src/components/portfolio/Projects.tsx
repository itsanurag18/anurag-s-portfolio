import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Section } from "./Section";

function Links({ demo, github }: { demo?: string; github?: string }) {
  return (
    <div className="mt-6 flex items-center gap-3">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Live demo
          <ArrowUpRight className="size-3.5" />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View source on GitHub"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="size-3.5" />
          Code
        </a>
      )}
    </div>
  );
}

function Tags({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border/70 bg-background/40 px-2.5 py-1 text-[0.7rem] text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [hero, ...rest] = projects;

  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title="Things I've designed and shipped."
      intro="A selection of work — each one taught me something I now do differently."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hero && (
          <article className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/50 p-7 transition-colors hover:border-border md:col-span-2 lg:row-span-2 lg:p-9">
            <div
              aria-hidden
              className="glow-orb absolute -top-40 -right-24 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="text-[0.7rem] tracking-[0.18em] text-primary">FEATURED</span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
              {hero.name}
            </h3>
            <p className="mt-1 text-sm text-foreground/70">{hero.tagline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {hero.description}
            </p>
            <Tags tech={hero.tech} />
            <Links demo={hero.demo} github={hero.github} />
          </article>
        )}

        {rest.map((p, i) => (
          <article
            key={p.name}
            className={cn(
              "group rounded-3xl border border-border/70 bg-card/40 p-6 transition-colors hover:border-border hover:bg-card/70",
              i === 0 && "md:col-span-1",
            )}
          >
            <h3 className="text-lg font-medium text-foreground">{p.name}</h3>
            <p className="mt-1 text-sm text-foreground/60">{p.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <Tags tech={p.tech} />
            <Links demo={p.demo} github={p.github} />
          </article>
        ))}
      </div>
    </Section>
  );
}
