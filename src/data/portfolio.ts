/**
 * Central portfolio data — single source of truth.
 *
 * Every section on the page reads from this file. Replace the placeholder
 * values below with your real details. Values marked with "REPLACE" are
 * intended to be swapped out; values marked "EDIT" can be fine-tuned.
 */

// -----------------------------------------------------------------------------
// PROFILE / HERO
// -----------------------------------------------------------------------------
// Replace with your real name, role, location, email and social URLs.
export const profile = {
  name: "Anurag",
  role: "B.Tech CSE Student",
  eyebrow: "B.TECH CSE STUDENT • BUILDER • PROBLEM SOLVER",
  statusBadge: "Currently a B.Tech CSE student",
  headline: "Building modern digital experiences with code.",
  subtitle:
    "I am a B.Tech Computer Science and Engineering student passionate about building modern web applications and continuously improving my problem-solving and development skills.",
  tagline: "Designing and shipping software, one thoughtful detail at a time.",
  location: "Your Location",
  email: "your.email@example.com",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
  },
};

// -----------------------------------------------------------------------------
// ABOUT
// -----------------------------------------------------------------------------
// Edit the paragraphs, focus list and highlight cards to reflect your own
// learning focus, core principles and problem-solving mindset.
export const about = {
  title: "More than just code.",
  paragraphs: [
    "I am a software development student passionate about building modern web applications and continuously improving my problem-solving and development skills.",
    "My approach is simple: understand the problem deeply, keep the solution small, and iterate in public. I read source code as often as documentation, and I ship early so real feedback shapes the next version.",
    "Right now I'm sharpening my fundamentals — data structures, systems design, and the parts of the web platform most frameworks abstract away.",
  ],
  focus: [
    "Full-stack TypeScript with React and Node",
    "API design, auth and relational data modelling",
    "Performance, accessibility and design systems",
    "Building with AI tooling as a daily collaborator",
  ],
  highlights: [
    {
      title: "Learning-first mindset",
      description:
        "I treat every project as a chance to understand something new, then document what I learned for the next build.",
    },
    {
      title: "Core principles",
      description:
        "Clarity, consistency and care — I believe good software is built from small decisions made well across the whole stack.",
    },
    {
      title: "Problem solver",
      description:
        "I enjoy breaking complex problems into manageable pieces and finding practical solutions that actually work.",
    },
  ],
};

// -----------------------------------------------------------------------------
// EXPERIENCE / JOURNEY
// -----------------------------------------------------------------------------
// Replace these placeholders with your real academic projects, learning
// milestones and roles. Avoid inventing companies, internships or clients.
export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2026 — Present",
    title: "Software Development Journey",
    organization: "Personal Growth",
    description:
      "Building projects to strengthen full-stack skills, from first wireframe to deployed product.",
  },
  {
    period: "2025",
    title: "Academic Project",
    organization: "Learning Environment",
    description:
      "Developed a structured web application as part of coursework, practicing React, APIs and database design.",
  },
  {
    period: "2024",
    title: "Learning Milestone",
    organization: "Self-directed Study",
    description:
      "Completed guided courses and built small projects to learn modern JavaScript, TypeScript and component-based UI.",
  },
  {
    period: "2023",
    title: "Started Building for the Web",
    organization: "Self-taught",
    description:
      "Moved from tutorials to real projects — first deployment, first database, first user who wasn't me.",
  },
];

// -----------------------------------------------------------------------------
// PROJECTS
// -----------------------------------------------------------------------------
// Replace titles, descriptions, tech stacks and links with your real projects.
// Keep `featured: true` on the project you want to highlight largest.
export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "AI Productivity Assistant",
    tagline: "Smart task and workflow helper",
    description:
      "A productivity tool that uses AI to summarize tasks, suggest priorities and help users plan their day more effectively.",
    tech: ["React", "TypeScript", "Node.js", "OpenAI API", "Tailwind"],
    demo: "https://example.com",
    github: "https://github.com/your-username",
    featured: true,
  },
  {
    name: "Modern E-Commerce Platform",
    tagline: "End-to-end online store",
    description:
      "A responsive storefront with product browsing, cart management and a streamlined checkout experience.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demo: "https://example.com",
    github: "https://github.com/your-username",
  },
  {
    name: "Developer Dashboard",
    tagline: "Analytics and metrics for projects",
    description:
      "A clean dashboard that aggregates project metrics, recent activity and health checks in one place.",
    tech: ["React", "Vite", "Recharts", "REST API"],
    demo: "https://example.com",
    github: "https://github.com/your-username",
  },
  {
    name: "Real-Time Collaboration App",
    tagline: "Shared workspace for teams",
    description:
      "A lightweight collaborative space where users can create, edit and organize content together in real time.",
    tech: ["React", "WebSockets", "Express", "MongoDB"],
    demo: "https://example.com",
    github: "https://github.com/your-username",
  },
];

// -----------------------------------------------------------------------------
// SKILLS
// -----------------------------------------------------------------------------
// Edit the categories and items to match the technologies you actually use.
export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Python", "Authentication", "WebSockets"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Prisma", "SQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Vite", "Postman", "Figma", "Vercel"],
  },
  {
    category: "AI / Dev Tools",
    items: ["OpenAI API", "LangChain basics", "Cursor", "Copilot", "Prompt engineering"],
  },
];

// -----------------------------------------------------------------------------
// CERTIFICATIONS
// -----------------------------------------------------------------------------
// Replace with real credentials when earned. Until then, these are clearly
// marked placeholders and should not be presented as completed achievements.
export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "[Certification Name] — [Issuing Organization/Platform]",
    issuer: "Placeholder entry — replace with real credential",
    year: "YYYY",
  },
  {
    name: "[Certification Name] — [Issuing Organization/Platform]",
    issuer: "Placeholder entry — replace with real credential",
    year: "YYYY",
  },
  {
    name: "[Certification Name] — [Issuing Organization/Platform]",
    issuer: "Placeholder entry — replace with real credential",
    year: "YYYY",
  },
  {
    name: "[Certification Name] — [Issuing Organization/Platform]",
    issuer: "Placeholder entry — replace with real credential",
    year: "YYYY",
  },
];

// -----------------------------------------------------------------------------
// STATISTICS
// -----------------------------------------------------------------------------
// Neutral, editable milestone figures. Update these with your own real numbers
// as your portfolio grows.
export const stats = [
  { label: "Projects Built", value: "04+" },
  { label: "Core Technologies", value: "10+" },
  { label: "Hours of Coding", value: "500+" },
  { label: "Learning Milestones", value: "02+" },
];

// -----------------------------------------------------------------------------
// NAVIGATION SECTIONS
// -----------------------------------------------------------------------------
// Edit labels if you rename or reorder sections; add an entry here only if
// a matching section exists on the page.
export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
