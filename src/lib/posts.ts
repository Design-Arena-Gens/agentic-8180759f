import type { BlogPost } from "@/data/posts";
import { posts } from "@/data/posts";

export function getAllPosts(): BlogPost[] {
  return posts
    .slice()
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return getAllPosts()[0];
}

export function getRecentPosts(limit = 3): BlogPost[] {
  return getAllPosts().slice(1, limit + 1);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
}
