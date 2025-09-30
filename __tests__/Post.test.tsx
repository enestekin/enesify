import { render, screen } from "@testing-library/react";
import PostPage from "@/app/blog/[slug]/page";

jest.mock("../lib/mdx", () => ({
  getPostBySlug: jest.fn(),
}));

import { getPostBySlug } from "@/lib/mdx";

describe("PostPage", () => {
  it("renders blog post correctly", async () => {
    (getPostBySlug as jest.Mock).mockResolvedValue({
      meta: {
        title: "Test Post",
        date: "2025-09-01",
        readingTime: "5 min read",
      },
      content: <p>This is mock content</p>,
    });

    render(await PostPage({ params: { slug: "test-post" } }));

    expect(
      screen.getByRole("heading", { name: /Test Post/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/2025-09-01/i)).toBeInTheDocument();
    expect(screen.getByText(/5 min read/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock content/i)).toBeInTheDocument();
  });
});
