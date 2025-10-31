import Link from "next/link";
import type { BlogPost } from "@/data/posts";

type PostTickerProps = {
  posts: BlogPost[];
};

export function PostTicker({ posts }: PostTickerProps) {
  return (
    <div className="relative overflow-hidden rounded-full border border-zinc-200 bg-white py-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="animate-marquee whitespace-nowrap text-sm font-medium text-zinc-600 dark:text-zinc-300">
        {posts.concat(posts).map((post, index) => (
          <Link
            key={`${post.slug}-${index}`}
            href={`/blog/${post.slug}`}
            className="mx-4 inline-flex items-center gap-2 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-amber-500">
              New
            </span>
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
