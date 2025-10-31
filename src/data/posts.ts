export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  tags: string[];
  heroImage: string;
  heroAlt: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "designing-a-thoughtful-digital-garden",
    title: "Designing a Thoughtful Digital Garden",
    excerpt:
      "How to craft an intentional online home for your ideas using a lightweight, evergreen publishing workflow.",
    publishedAt: "2024-05-19",
    readingTime: "7 min read",
    tags: ["Design Systems", "Content Strategy", "Personal Knowledge"],
    heroImage:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Illustration of a garden made of interface components.",
    content: `
## Why a digital garden?

Blogs grow chronologically. A digital garden grows organically. Entries are allowed to overlap, evolve, and link together in surprising ways. The garden mindset encourages publishing ideas before they feel complete, then pruning and enriching them over time.

### Principles for a great garden

1. **Intentional structure** – Start with flexible categories or tags that reflect how you actually think, not how you think people expect you to think. The information architecture can remain lightweight, as long as it is consistent.
2. **Small, frequent updates** – The garden thrives on iterative changes. Add small insights without waiting for the "perfect" article.
3. **Visible change history** – Communicate when an idea is still sprouting or has been recently updated. That context builds trust.

### A workflow you can maintain

- Draft in plain text or Markdown. The tooling should never get in the way.
- Publish directly from your notebook or repository. Automate whenever possible.
- Keep a running changelog to summarize new seeds you have planted or tended to recently.

## What to plant next?

Aim for a balance of evergreen resources and timely reflections. Link your notes generously and resurface older entries in your newsletter or social posts. Over time, readers will navigate laterally as often as they scroll chronologically.
`,
  },
  {
    slug: "crafting-accessible-color-palettes",
    title: "Crafting Accessible Color Palettes",
    excerpt:
      "A repeatable process for producing expressive, AA-compliant color systems without sacrificing personality.",
    publishedAt: "2024-04-03",
    readingTime: "9 min read",
    tags: ["Accessibility", "Design Systems"],
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Color swatches arranged in a gradient grid.",
    content: `
## Start with purpose, not hex codes

Before picking colors, define the jobs they need to do: brand storytelling, interaction feedback, data visualization, and legibility. Each job deserves a primary hue, a scale of supporting tones, and clear usage rules.

### Build tonal scales first

1. Choose a core hue and adjust saturation/value to create at least eight stops.
2. Test the extremes for vibrancy and depth, then tweak mid-tones for harmony.
3. Validate contrast ratios in real UI components, not just swatches.

### Encode accessibility into the system

- Annotate each token with its minimum viable contrast.
- Provide safe pairings for backgrounds, text, and borders.
- Document exceptions and remediation steps when contrast cannot be met.

## Keep iterating with real users

Ship your palette with tooling: Figma libraries, a color audit script, and high-level guidance. Then collect feedback from assistive tech users to uncover hidden issues. Accessibility is an ongoing investment, not a box to tick.
`,
  },
  {
    slug: "shipping-fast-with-lean-content-ops",
    title: "Shipping Fast with Lean Content Ops",
    excerpt:
      "Transform your publishing cadence by aligning tooling, team rituals, and measurement around a shared narrative engine.",
    publishedAt: "2024-02-14",
    readingTime: "6 min read",
    tags: ["Content Strategy", "Operations"],
    heroImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Team collaborating around kanban board with content cards.",
    content: `
## Map content to business outcomes

Great content ops start with clarity. Define the outcomes you want to move—activation, retention, or expansion—and connect each piece of content to a measurable checkpoint.

### Establish a single source of truth

- A lightweight CMS or even a structured spreadsheet can work if everyone honors it as the canonical plan.
- Keep ideation, drafts, and performance data in one workflow to reduce handoffs.
- Automate status updates with notifications or dashboards.

### Rituals that compound

1. Weekly standups to unblock creators and align on priorities.
2. Monthly retros where you evolve the editorial calendar based on results, not vibes.
3. Quarterly experiments to test new formats and distribution channels.

## Measure, learn, and rebalance

Track leading indicators (production velocity, review cycle time) alongside lagging metrics (traffic quality, influenced revenue). Share the narrative behind the numbers so everyone understands the why—not just the what—of each campaign.
`,
  },
  {
    slug: "building-trust-with-transparent-roadmaps",
    title: "Building Trust with Transparent Roadmaps",
    excerpt:
      "Open product roadmaps can deepen customer trust—if they are intentional, honest, and paired with consistent delivery.",
    publishedAt: "2023-12-08",
    readingTime: "5 min read",
    tags: ["Product Strategy", "Leadership"],
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Open roadmap pinned on a wall with sticky notes and timelines.",
    content: `
## Transparency is a promise

Sharing your roadmap is a commitment to accountability. Frame it as a conversation, not a decree. Clarify what is exploratory, what is committed, and what feedback you are actively seeking.

### Build a feedback loop

- Provide explicit channels for feedback, and respond quickly.
- Summarize what you heard and how it shaped the roadmap.
- Highlight risks or dependencies that might influence delivery.

### Deliver consistently

Even small wins matter. Release incremental improvements, narrate what changed, and tie progress back to the roadmap. Consistency proves that transparency is more than a marketing move.

## When to adjust course

Be honest when priorities shift. Customers appreciate being looped in early, especially when you explain the trade-offs and new learnings. Trust compounds when you treat roadmap updates as opportunities to build partnership, not spin.
`,
  },
];
