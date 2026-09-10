import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

import { profile } from "@/data/portfolio";
import { Section } from "./Section";

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message ready to send", {
        description: `Thanks for reaching out — I'll reply at ${profile.email}.`,
      });
    }, 700);
  };

  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="Have an idea? Let's build it."
      intro="Open to internships, freelance work and collaborations. The fastest way to reach me is email."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="flex items-center gap-4 rounded-3xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-border hover:bg-card/70"
            >
              <s.icon className="size-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{s.label}</span>
              <span className="ml-auto truncate text-xs text-muted-foreground">
                {s.href.replace(/^mailto:|^https?:\/\//, "")}
              </span>
            </a>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/50 p-6 sm:p-8"
        >
          <div aria-hidden className="glow-orb absolute -top-44 -right-24 opacity-50" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="message" className="text-xs text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about the project…"
              className="resize-none rounded-xl border border-border/80 bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send message"}
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}
