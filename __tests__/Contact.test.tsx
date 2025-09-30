import { render, screen } from "@testing-library/react";
import Contact from "@/contact/page";

describe("Contact", () => {
  it("renders a single heading", () => {
    render(<Contact />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/Get in touch/i);
  });

  it("renders the links ", () => {
    render(<Contact />);
    const emailLink = screen.getByRole("link", {
      name: /zenestekin@gmail.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:zenestekin@gmail.com");

    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/enestekin/",
    );

    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/enestekin/");

    const twitterLink = screen.getByRole("link", { name: /Twitter/i });
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute("href", "https://x.com/tekindotjs");
  });
});
