import { timeline } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="JOURNEY"
      title="The path so far."
      intro="Roles, milestones and the moments that shaped how I build."
    >
      <ol className="relative border-l border-border/70 pl-8 sm:pl-10">
        {timeline.map((item) => (
          <li key={item.title} className="pb-10 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[5px] mt-2 size-2.5 rounded-full bg-primary shadow-[0_0_0_4px_var(--background),0_0_20px_2px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
            />
            <p className="text-xs tracking-[0.18em] text-muted-foreground">{item.period}</p>
            <h3 className="mt-2 text-lg font-medium text-foreground">{item.title}</h3>
            <p className="text-sm text-primary">{item.organization}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
