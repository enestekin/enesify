import { render, screen } from "@testing-library/react";
import BlogPage from "@/blog/page";

// lib/mdx içindeki getAllPosts fonksiyonunu mockluyoruz
jest.mock("../lib/mdx", () => ({
  getAllPosts: jest.fn(),
}));

import { getAllPosts } from "@/lib/mdx";

describe("BlogPage", () => {
  it("renders blog posts when available", () => {
    (getAllPosts as jest.Mock).mockReturnValue([
      {
        slug: "hello-world",
        meta: {
          title: "Hello World",
          summary: "My first blog post",
          date: "2025-09-01",
          readingTime: "3 min read",
        },
      },
    ]);

    render(<BlogPage />);

    // Ana başlık
    expect(screen.getByRole("heading", { name: /Blog/i })).toBeInTheDocument();

    // Post başlığı
    expect(
      screen.getByRole("heading", { name: /Hello World/i }),
    ).toBeInTheDocument();

    // Özet
    expect(screen.getByText(/My first blog post/i)).toBeInTheDocument();

    // Tarih ve reading time
    expect(screen.getByText(/2025-09-01/i)).toBeInTheDocument();
    expect(screen.getByText(/3 min read/i)).toBeInTheDocument();

    // Link doğru mu?
    expect(screen.getByRole("link", { name: /Hello World/i })).toHaveAttribute(
      "href",
      "/blog/hello-world",
    );
  });

  // it("renders empty state when no posts", () => {
  //   (getAllPosts as jest.Mock).mockReturnValue([]);

  //   render(<BlogPage />);

  //   expect(
  //     screen.getByText(/No posts yet. Check back soon!/i),
  //   ).toBeInTheDocument();
  // });
});
