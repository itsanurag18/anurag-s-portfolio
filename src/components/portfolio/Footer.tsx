import { profile, sections } from "@/data/portfolio";
import { scrollToId } from "./Navbar";

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {profile.name}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-1 max-w-sm text-xs text-muted-foreground">{profile.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToId(s.id)}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
