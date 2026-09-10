import { skills } from "@/data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="SKILLS"
      title="The toolkit I reach for."
      intro="Grouped by where they live in the stack rather than by how well I know them."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-border/70 bg-card/40 p-6 transition-colors hover:border-border hover:bg-card/70"
          >
            <h3 className="text-sm font-medium tracking-wide text-foreground">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
