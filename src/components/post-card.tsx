import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/posts";

type PostCardProps = {
  post: BlogPost;
  variant?: "default" | "featured";
};

export function PostCard({ post, variant = "default" }: PostCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 ${
        isFeatured ? "md:col-span-2" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-56 w-full overflow-hidden md:h-64">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            priority={isFeatured}
            sizes={
              isFeatured
                ? "(min-width: 768px) 60vw, 100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
          />
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>{post.readingTime}</span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight transition group-hover:text-zinc-900 dark:group-hover:text-white">
            {post.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition group-hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
