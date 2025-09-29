import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="mb-10 text-3xl text-white md:text-5xl">Blog</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map(({ slug, meta }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="hover:border-primary block rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition"
          >
            <h2 className="text-xl font-semibold text-white">{meta.title}</h2>
            <p className="mt-1 text-sm text-neutral-500">
              {meta.date} • {meta.readingTime}
            </p>
            <p className="mt-3 text-neutral-300">{meta.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
