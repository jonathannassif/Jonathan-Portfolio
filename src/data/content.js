// ─────────────────────────────────────────────────────────────
// Edit everything in this file to make the site yours.
// Nothing here touches component code — just swap the text,
// links, and placeholders below.
// ─────────────────────────────────────────────────────────────

export const sections = [
  { id: "cover", code: "00", label: "Cover", track: "system" },
  { id: "stack", code: "W-01", label: "Stack", track: "dev" },
  { id: "works", code: "W-02", label: "My Works", track: "dev" },
  { id: "now", code: "W-03", label: "Now", track: "dev" },
  { id: "reading", code: "W-04", label: "Dev Reading", track: "dev" },
  { id: "story", code: "L-01", label: "My Story", track: "life" },
  { id: "acting", code: "L-02", label: "Acting", track: "life" },
  { id: "achievements", code: "L-03", label: "Scholarships", track: "life" },
  { id: "writing", code: "L-04", label: "Writing", track: "life" },
  { id: "help", code: "→", label: "Work Together", track: "system" },
  { id: "contact", code: "C", label: "Contact", track: "system" },
];

export const timeline = [
  {
    date: "2023",
    title: "B.Sc. Computer Engineering",
    detail: "— British University in Egypt",
  },
  { date: "Feb26 · Current", title: "ITA Airways", detail: "— Traffic Agent" },
  { date: "2024 · 2025", title: "Military service", detail: "— completed" },
  {
    date: "Ongoing",
    title: "Aristo Education Platform",
    detail: "— freelance, full build",
  },
  {
    date: "Ongoing",
    title: "Star Website",
    detail: "— freelance, full build",
  },
  {
    date: "Now",
    title: "Going deeper",
    detail: "— React & JS fundamentals, on purpose",
  },
];

export const stackLayers = [
  {
    idx: "LAYER 01",
    title: "Structure",
    items: ["Semantic HTML5", "Accessible markup", "Multi-page architecture"],
  },
  {
    idx: "LAYER 02",
    title: "Style",
    items: ["CSS3 / responsive design", "Tailwind CSS", "Bootstrap"],
  },
  {
    idx: "LAYER 03",
    title: "Behavior",
    items: ["JavaScript (ES6+)", "React.js", "Next.js", "Spring Boot / Java"],
  },
  {
    idx: "LAYER 04",
    title: "Data & Deploy",
    items: ["Supabase", "Git / GitHub", "Vite · Vercel · Pages"],
  },
];

export const workItems = [
  {
    tag: "FREELANCE · EDTECH",
    title: "Aristo Education Platform",
    desc: "Registration, Supabase backend, authenticated admin dashboard — now migrating to React, Vite & Tailwind.",
    tags: ["React", "Supabase", "Vite"],
  },
  {
    tag: "PRODUCT WORK",
    title: "AI Tools Directory",
    desc: "Sidebar filtering, live search, URL-gated admin mode, localStorage persistence, fully responsive.",
    tags: ["JavaScript", "Tailwind", "Vite"],
  },
  {
    tag: "LEARNING PROJECT",
    title: "Expense Tracker",
    desc: "Global state via Context, reducers via useReducer, a component tree built to stay predictable.",
    tags: ["React", "Context API"],
  },
];

export const nowItems = [
  "Migrating the Aristo Education Platform to React + Vite + Tailwind, without breaking any existing Supabase connections.",
  "Going deeper into React patterns — custom hooks, context architecture, performance.",
  "Sharpening core JavaScript fundamentals instead of leaning on framework shortcuts.",
  "Exploring Next.js and server-side rendering for future projects.",
];

// Technical reading only — docs, dev books, engineering blogs.
export const books = [
  {
    status: "Reading now",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    style: "b1",
  },
  {
    status: "Finished",
    title: "Book title here",
    author: "Author name",
    style: "b2",
  },
  {
    status: "Finished",
    title: "Distracted Minds",
    author: "Gabor Mate",
    style: "b3",
  },
  {
    status: "Next up",
    title: "Book title here",
    author: "Author name",
    style: "b4",
  },
];

export const freeHelp = [
  "Portfolio & CV feedback for junior devs",
  "Quick code reviews on React/JS snippets",
  "Pointing you to the right docs, not just the fix",
  "Career advice for breaking into frontend",
];

export const paidHelp = [
  "Frontend builds — React, Next.js, Tailwind",
  "Marketing sites & landing pages",
  "Supabase-backed web apps (auth, dashboards, forms)",
  "Legacy site → modern stack migrations",
];

export const actingRoles = [
  {
    show: "La barca sin pescador",
    role: "Ricardo Jordan",
    venue: "March — 2025",
  },
  {
    show: "Production / play title",
    role: "Role name",
    venue: "Venue or group — year",
  },
  {
    show: "Production / play title",
    role: "Role name",
    venue: "Venue or group — year",
  },
];

export const achievements = [
  {
    year: "20XX",
    title: "Scholarship or award name",
    detail: "Institution or program — add detail",
  },
  { year: "20XX", title: "Academic honor", detail: "Add detail" },
  { year: "20XX", title: "Competition or recognition", detail: "Add detail" },
];

export const writingLinks = [
  {
    title: "Article title here",
    meta: "Medium · 4 min read",
    href: "https://medium.com/@yourhandle",
  },
  {
    title: "Article title here",
    meta: "Medium · 6 min read",
    href: "https://medium.com/@yourhandle",
  },
  {
    title: "A thread worth revisiting",
    meta: "X · thread",
    href: "https://x.com/yourhandle",
  },
];

export const languages = [
  { name: "Arabic", level: "Native", fill: 100 },
  { name: "English", level: "Fluent", fill: 92 },
  { name: "Spanish", level: "Advanced", fill: 78 },
  { name: "Italian", level: "Intermediate", fill: 60 },
];

export const contactLinks = [
  {
    label: "EMAIL",
    text: "jonas2000288@gmail.com",
    href: "mailto:jonas2000288@gmail.com",
    copyable: true,
  },
  {
    label: "GITHUB",
    text: "github.com/jonathannassif",
    href: "https://github.com/jonathannassif",
  },
  {
    label: "LINKEDIN",
    text: "linkedin.com/in/jonathan-nassif",
    href: "https://www.linkedin.com/in/jonathan-nassif/",
  },
  {
    label: "X",
    text: "x.com/jonathannassiff",
    href: "https://x.com/jonathannassiff",
  },
  {
    label: "MEDIUM",
    text: "medium.com/@jonas2000288",
    href: "https://medium.com/@jonas2000288",
  },
  { label: "LOCATION", text: "Cairo, Egypt" },
];
