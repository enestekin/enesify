import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import readingTime from "reading-time";

export type PostMeta = {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  readingTime?: string;
};

const postsPath = path.join(process.cwd(), "content/blog");

export async function getPostBySlug(slug: string) {
  const safeSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(postsPath, `${safeSlug}.mdx`);
  console.log("slug", slug);
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  const { content: mdxContent } = await compileMDX<PostMeta>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight],
      },
    },
  });

  return {
    slug,
    meta: {
      ...(data as PostMeta),
      readingTime: readingTime(content).text,
    },
    content: mdxContent,
  };
}

export function getAllPosts() {
  const files = fs.readdirSync(postsPath);
  return files.map((file) => {
    const source = fs.readFileSync(path.join(postsPath, file), "utf8");
    const { data, content } = matter(source);
    const slug = file.replace(/\.mdx$/, "");
    return {
      slug,
      meta: {
        ...(data as PostMeta),
        readingTime: readingTime(content).text,
      },
    };
  });
}
