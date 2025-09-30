import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";

describe("About Page", () => {
  it("renders a single h1", () => {
    render(<About />);
    const h1 = screen.getByRole("heading", {
      name: /hey, i'm enes tekin/i,
    });
    expect(h1).toBeInTheDocument();
  });

  it("renders multiple h2", () => {
    render(<About />);
    const h2s = screen.getAllByRole("heading", { level: 2 });
    expect(h2s.length).toBeGreaterThanOrEqual(3);
  });

  it("matches snapshot", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
