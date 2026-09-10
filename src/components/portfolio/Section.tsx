import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 px-6 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.7rem] font-medium tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
