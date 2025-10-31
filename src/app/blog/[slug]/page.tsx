import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return undefined;
  }

  const title = `${post.title} · Orbit Notes`;
  const description = post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
      url: `https://agentic-8180759f.vercel.app/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-12 px-6 pb-24 pt-24">
      <header className="space-y-6">
        <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {post.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="relative h-80 w-full overflow-hidden rounded-[28px]">
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 768px, 100vw"
          priority
        />
      </div>

      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
