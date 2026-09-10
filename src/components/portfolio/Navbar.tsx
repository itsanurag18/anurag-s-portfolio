import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { profile, sections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-4xl items-center justify-between rounded-full border border-border/70 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-5",
          scrolled ? "bg-card/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]" : "bg-card/40",
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {profile.name}
          <span className="text-primary">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden rounded-full border border-border/80 bg-secondary/60 px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary md:inline-flex"
        >
          Get in touch
        </button>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-accent/60 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-in mx-auto mt-2 max-w-4xl overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-2 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className="w-full rounded-2xl px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export { scrollToId };
