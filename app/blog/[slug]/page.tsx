import { getPostBySlug } from "@/lib/mdx";
import Link from "next/link";
import "highlight.js/styles/tokyo-night-dark.css";

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const { content, meta } = await getPostBySlug(slug);

  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 font-bold text-neutral-300 transition-colors hover:text-white"
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
            className="transition-transform duration-200 group-hover:-translate-x-1"
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

      <article className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-invert prose-lg max-w-none">{content}</div>
      </article>
    </div>
  );
}
