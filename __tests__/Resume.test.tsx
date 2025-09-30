import { render, screen } from "@testing-library/react";
import Resume from "@/app/resume/page";

describe("Resume", () => {
  it("renders the main landmark", () => {
    render(<Resume />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders a single h1 heading", () => {
    render(<Resume />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/Resume/i);
  });

  it("renders the Professional Experience section", () => {
    render(<Resume />);
    const expHeading = screen.getByRole("heading", {
      name: /Professional Experience/i,
    });
    expect(expHeading).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Professional Experience/i }),
    ).toBeInTheDocument();
  });

  it("renders the Education section", () => {
    render(<Resume />);
    const eduHeading = screen.getByRole("heading", {
      name: /Education/i,
    });
    expect(eduHeading).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Education/i }),
    ).toBeInTheDocument();
  });

  it("renders company names as h3 headings", () => {
    render(<Resume />);
    expect(
      screen.getByRole("heading", { level: 3, name: /Akinon/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /Trive/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /Denebunu/i }),
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Resume />);
    expect(container).toMatchSnapshot();
  });
});
