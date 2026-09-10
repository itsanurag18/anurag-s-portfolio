/**
 * Central portfolio data. Swap placeholder values for real content here —
 * every section on the page reads from this file.
 */

export const profile = {
  name: "Anurag",
  role: "Software Developer",
  eyebrow: "SOFTWARE DEVELOPER • BUILDER • PROBLEM SOLVER",
  statusBadge: "Currently learning & building",
  headline: "Building modern digital experiences with code.",
  subtitle:
    "I build thoughtful, scalable and user-focused digital experiences while continuously learning and exploring modern technologies.",
  tagline: "Designing and shipping software, one thoughtful detail at a time.",
  location: "India",
  email: "anurag@example.com",
  socials: {
    github: "https://github.com/anurag",
    linkedin: "https://linkedin.com/in/anurag",
  },
};

export const about = {
  title: "More than just code.",
  paragraphs: [
    "I care about how software feels. A fast page, a clear empty state, a form that tells you exactly what went wrong — those details are the difference between a project that works and a product people trust.",
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
      title: "Product-minded",
      description:
        "I start from the user's job to be done, not the framework, then work backwards to the architecture.",
    },
    {
      title: "Detail obsessed",
      description:
        "Motion, spacing, contrast and copy get the same review as the business logic behind them.",
    },
    {
      title: "Always learning",
      description:
        "A steady rhythm of building, breaking and reading — every project ends with notes on what to do better.",
    },
  ],
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2026 — Present",
    title: "Freelance Developer",
    organization: "Independent",
    description:
      "Designing and shipping full-stack web applications for small teams, from first wireframe to deployed product.",
  },
  {
    period: "2025",
    title: "Software Development Intern",
    organization: "Tech Startup",
    description:
      "Built internal dashboards in React and TypeScript, wrote REST endpoints, and cut a key page's load time by half.",
  },
  {
    period: "2024",
    title: "Open Source Contributor",
    organization: "Community Projects",
    description:
      "Contributed bug fixes, docs and small features to JavaScript tooling projects and learned to work through code review.",
  },
  {
    period: "2023",
    title: "Started Building for the Web",
    organization: "Self-taught",
    description:
      "Moved from tutorials to real projects — first deployment, first database, first user who wasn't me.",
  },
];

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
    name: "Nimbus Analytics",
    tagline: "Realtime product analytics dashboard",
    description:
      "A full-stack analytics tool with event ingestion, live charts and shareable reports. Built to stay readable at a million rows.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    demo: "https://example.com",
    github: "https://github.com/anurag",
    featured: true,
  },
  {
    name: "Kanban Flow",
    tagline: "Collaborative task board",
    description: "Drag-and-drop boards with optimistic updates and role-based sharing.",
    tech: ["React", "Zustand", "Supabase"],
    demo: "https://example.com",
    github: "https://github.com/anurag",
  },
  {
    name: "DevNotes",
    tagline: "Markdown notes for engineers",
    description: "Offline-first notes with code blocks, tags and instant fuzzy search.",
    tech: ["Next.js", "IndexedDB", "MDX"],
    github: "https://github.com/anurag",
  },
  {
    name: "PromptKit",
    tagline: "AI prompt workbench",
    description: "Compare model outputs side by side and version the prompts that work.",
    tech: ["TypeScript", "OpenAI API", "Vite"],
    demo: "https://example.com",
  },
  {
    name: "ShipLog",
    tagline: "Tiny changelog service",
    description: "A drop-in changelog widget with an API and a one-file editor.",
    tech: ["Node.js", "SQLite", "Hono"],
    github: "https://github.com/anurag",
  },
];

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

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Full-Stack Web Development",
    issuer: "Coursera",
    year: "2025",
    credentialUrl: "https://example.com",
  },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2025" },
  {
    name: "Data Structures & Algorithms",
    issuer: "Udemy",
    year: "2024",
    credentialUrl: "https://example.com",
  },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023" },
];

export const stats = [
  { label: "Projects", value: "18+" },
  { label: "Technologies", value: "25+" },
  { label: "Hours of Coding", value: "3,000+" },
  { label: "Certifications", value: "4" },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
