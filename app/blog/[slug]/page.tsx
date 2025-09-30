import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import "highlight.js/styles/tokyo-night-dark.css";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, meta } = await getPostBySlug(slug);

  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <Link
          href="/blog"
          className="text-bold group inline-flex items-center gap-2 font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:-translate-x-1"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <header>
        <div className="mx-auto max-w-4xl px-4 pb-4">
          <h1 className="text-4xl text-white">{meta.title}</h1>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-lg font-bold text-neutral-400">
            <time dateTime={meta.date}>{meta.date}</time>-
            <span>{meta.readingTime}</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-12 leading-7">
        <div className="prose prose-invert prose-lg max-w-none">{content}</div>
      </article>
    </div>
  );
}
