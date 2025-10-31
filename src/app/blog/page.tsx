import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/post-card";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Explore the complete Orbit Notes archive—essays on product strategy, content operations, and leading creative teams.",
};

type BlogPageProps = {
  searchParams?: Promise<{
    tag?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const allTags = getAllTags();
  const tag = resolvedSearchParams.tag;

  if (tag && !allTags.includes(tag)) {
    notFound();
  }

  const posts = getAllPosts().filter((post) =>
    tag ? post.tags.includes(tag) : true,
  );

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-24">
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600 dark:text-amber-300">
            Archive
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Essays for strategic builders.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            Filter the library by topic to uncover frameworks, facilitation
            guides, and reflections for leading teams with clarity.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterButton href="/blog" active={!tag}>
            All topics
          </FilterButton>
          {allTags.map((label) => (
            <FilterButton
              key={label}
              href={`/blog?tag=${encodeURIComponent(label)}`}
              active={tag === label}
            >
              {label}
            </FilterButton>
          ))}
        </div>
      </header>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>

      <div className="rounded-3xl border border-dashed border-amber-400/60 bg-amber-50/50 p-8 text-center dark:border-amber-400/30 dark:bg-amber-950/10">
        <h2 className="text-lg font-semibold text-amber-700 dark:text-amber-300">
          Want more? Submit a question for the next deep dive.
        </h2>
        <p className="mt-3 text-sm text-amber-800/80 dark:text-amber-200/70">
          Email hello@orbitnotes.studio and I&apos;ll explore it in an upcoming
          issue.
        </p>
      </div>
    </div>
  );
}

type FilterButtonProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
};

function FilterButton({ href, active, children }: FilterButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-zinc-900 bg-zinc-900 text-white shadow-sm dark:border-white dark:bg-white dark:text-zinc-900"
          : "border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
      }`}
    >
      {children}
    </Link>
  );
}
