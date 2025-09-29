import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses | Enes Tekin",
  description:
    "Explore the tools and technologies Enes Tekin uses daily — from frontend frameworks and desk setup to performance monitoring and security tools.",
};

export default function UsesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-neutral-400">
      <header className="mb-16">
        <h1 className="text-3xl text-white md:text-5xl">What Enes Uses</h1>
        <p className="mt-2 text-2xl text-neutral-400">
          The tools and technologies I rely on daily.
        </p>
      </header>

      {/* Tech */}
      <section aria-labelledby="tech-heading" className="mb-16">
        <h2
          id="tech-heading"
          className="text-2xl font-semibold text-white md:text-3xl"
        >
          Tech
        </h2>
        <ul className="mt-6 ml-4 list-disc space-y-2 text-neutral-400 md:px-0">
          <li>React — My go-to UI library for building modern web apps.</li>
          <li>Next.js — The best React framework for production-grade apps.</li>
          <li>
            TypeScript — Strongly typed JavaScript that makes coding safer.
          </li>
          <li>TailwindCSS — Utility-first CSS for fast and clean styling.</li>
          <li>Prettier — Keeps my code clean and consistently formatted.</li>
          <li>
            React Testing Library — For testing UI the way users interact with
            it.
          </li>
          <li>Playwright — My favorite tool for end-to-end testing.</li>
          <li>Git & GitHub — Version control, collaboration, and CI/CD.</li>
          <li>NPM — The package manager powering all my projects.</li>
          <li>VSCode — My daily driver code editor.</li>
          <li>Notion — My second brain for notes and project planning.</li>
          <li>Discord — For staying connected with dev communities.</li>
          <li>
            GitHub Copilot / CodeWhisperer — AI pair programmers that boost
            productivity.
          </li>
          <li>MDX — Markdown with React components for rich content.</li>
        </ul>
      </section>

      {/* Desk Setup */}
      <section aria-labelledby="desk-setup-heading" className="mb-16">
        <h2
          id="desk-setup-heading"
          className="text-2xl font-semibold text-white md:text-3xl"
        >
          Desk Setup
        </h2>
        <ul className="mt-6 ml-4 list-disc space-y-2 text-neutral-400 md:px-0">
          <li>M2 MacBook Pro 14-inch (2023) — My main development machine.</li>
          <li>Keychron K2 Keyboard — A solid mechanical keyboard.</li>
          <li>
            Apple Magic Keyboard — Slim and minimal, great for portability.
          </li>
          <li>
            Logitech MX Master Mouse — Ergonomic and perfect for long coding
            sessions.
          </li>
          <li>Acer Nitro ED320QXbi 31.5” Monitor</li>
          <li>JBL Tune 510BT Headphones</li>
        </ul>
      </section>

      {/* Performance & Monitoring */}
      <section aria-labelledby="performance-heading" className="mb-16">
        <h2
          id="performance-heading"
          className="text-2xl font-semibold text-white md:text-3xl"
        >
          Web Performance, Security & Monitoring
        </h2>
        <ul className="mt-6 ml-4 list-disc space-y-2 text-neutral-400 md:px-0">
          <li>
            Google Lighthouse — Auditing web performance and best practices.
          </li>
          <li>Sentry — Application monitoring and error tracking.</li>
          <li>Google Analytics — Tracking user behavior and performance.</li>
          <li>WebPageTest — In-depth web performance testing.</li>
          <li>PageSpeed Insights — Optimizing page speed.</li>
        </ul>
      </section>
    </main>
  );
}
