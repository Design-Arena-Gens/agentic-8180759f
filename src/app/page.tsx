import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PostCard } from "@/components/post-card";
import { getFeaturedPost, getRecentPosts, getAllTags } from "@/lib/posts";
import { posts } from "@/data/posts";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { PostTicker } from "@/components/post-ticker";

export default function Home() {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(2);
  const tags = getAllTags();

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 md:pt-24">
      <PostTicker posts={posts} />
      <section className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div className="relative flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-zinc-900/30 dark:bg-white dark:text-zinc-900 dark:shadow-white/20">
            Fresh ideas, delivered.
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            A journal for product builders who design with narrative clarity.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            I publish twice a month on systems thinking, content operations, and
            the rituals that help teams ship purposeful work. Explore the latest
            essays or join the newsletter to stay in orbit.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 px-3 py-1 transition hover:border-zinc-400 hover:text-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Browse the archive
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#newsletter"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400 dark:hover:text-white"
            >
              Get the newsletter
            </Link>
          </div>
        </div>
        <div className="rounded-[36px] border border-zinc-200 bg-white p-8 shadow-2xl shadow-amber-200/40 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-amber-500/10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Featured Article
          </h2>
          <div className="mt-6">
            <PostCard post={featuredPost} variant="featured" />
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Latest dispatches
        </h2>
        <Link
          href="/blog"
          className="group inline-flex items-center justify-end gap-2 text-sm font-semibold text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        >
          View all articles
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
        {recentPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>

      <section
        id="about"
        className="grid gap-12 rounded-[40px] border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-amber-50 p-12 shadow-lg dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-amber-950/20"
      >
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
            About
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Orbit Notes is a field guide for thoughtful product storytelling.
          </h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            I&apos;m Lina Cheng, a product strategist and former newsroom editor
            helping teams blend story craft with evidence-based decision making.
            Here I share playbooks to align roadmaps, content, and experience
            design around the same north star.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Systems thinking",
              description:
                "Break down complex initiatives into resilient, repeatable rituals.",
            },
            {
              title: "Content operations",
              description:
                "Design editorial workflows that scale without trading away clarity.",
            },
            {
              title: "Team leadership",
              description:
                "Build trust with transparent roadmaps, intentional retros, and shared metrics.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
