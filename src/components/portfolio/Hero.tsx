import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { profile } from "@/data/portfolio";
import { scrollToId } from "./Navbar";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div aria-hidden className="mesh-grid absolute inset-0 -z-10" />
      <div aria-hidden className="glow-orb absolute top-[-18rem] left-1/2 -z-10 -translate-x-1/2" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[0.7rem] font-medium tracking-[0.22em] text-muted-foreground sm:text-xs">
          {profile.eyebrow}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {profile.statusBadge}
        </div>

        <h1 className="mt-8 text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
          {profile.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {profile.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => scrollToId("projects")}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            View My Work
            <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={() => scrollToId("contact")}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-accent/60 sm:w-auto"
          >
            Let&apos;s Connect
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
