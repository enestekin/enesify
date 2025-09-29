import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Blog</h1>
        <p className="mt-3 text-lg text-neutral-400">
          Thoughts on web development, coding, and technology
        </p>
      </header>

      <div className="space-y-6">
        {posts.map(({ slug, meta }, index) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="group block rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white transition-colors group-hover:text-blue-400">
                  {meta.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-neutral-300">
                  {meta.summary}
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm text-neutral-500">
                  <time dateTime={meta.date}>{meta.date}</time>
                  <span>•</span>
                  <span>{meta.readingTime}</span>
                </div>
              </div>

              <div className="flex-shrink-0 text-neutral-600 transition-all group-hover:translate-x-1 group-hover:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg text-neutral-500">
            No posts yet. Check back soon!
          </p>
        </div>
      )}
    </section>
  );
}
