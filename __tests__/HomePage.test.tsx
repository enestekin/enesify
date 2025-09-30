import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /Hey, I'm Enes Tekin/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    render(<Home />);
    const subheading = screen.getByText(/Software Developer/i);
    expect(subheading).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    render(<Home />);
    const description = screen.getByText(
      /Creating modern web apps that balance speed, design, and functionality with real impact./i,
    );
    expect(description).toBeInTheDocument();
  });

  it("renders the 'Say Hello' link", () => {
    render(<Home />);
    const sayHelloLink = screen.getByRole("link", { name: /Say Hello/i });
    expect(sayHelloLink).toBeInTheDocument();
    expect(sayHelloLink).toHaveAttribute("href", "/contact");
  });

  it("renders the 'Read the blog' link", () => {
    render(<Home />);
    const blogLink = screen.getByRole("link", {
      name: /Read blog posts by Enes Tekin/i,
    });
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute("href", "/blog");
  });
});
