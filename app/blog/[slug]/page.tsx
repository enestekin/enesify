import { getPostBySlug } from "@/lib/mdx";
import "highlight.js/styles/github-dark.css";

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const { content, meta } = await getPostBySlug(slug);

  return (
    <article className="prose prose-invert mx-auto max-w-3xl px-4 py-16">
      <h1>{meta.title}</h1>
      <p className="text-sm text-neutral-500">
        {meta.date} • {meta.readingTime}
      </p>
      <div className="mt-6">{content}</div>
    </article>
  );
}
