import { render, screen } from "@testing-library/react";
import Uses from "@/app/uses/page";

describe("Uses", () => {
  it("renders a single h1 heading", () => {
    render(<Uses />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/What Enes Uses/i);
  });

  it("renders multiple section headings", () => {
    render(<Uses />);
    const h2s = screen.getAllByRole("heading", { level: 2 });
    expect(h2s.length).toBeGreaterThanOrEqual(3);

    expect(screen.getByRole("heading", { name: /Tech/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Desk Setup/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Web Performance, Security & Monitoring/i,
      }),
    ).toBeInTheDocument();
  });

  it("labels each section with aria-labelledby", () => {
    render(<Uses />);
    expect(screen.getByRole("region", { name: "Tech" })).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Desk Setup" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", {
        name: "Web Performance, Security & Monitoring",
      }),
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Uses />);
    expect(container).toMatchSnapshot();
  });
});
