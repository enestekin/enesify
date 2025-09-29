export default function UsesPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div>
        <header>
          <div className="mb-30">
            <h2 className="text-3xl md:text-5xl">What Enes uses</h2>
            <p className="mt-2 text-2xl text-neutral-400">
              The tools Enes Tekin uses
            </p>
          </div>
        </header>

        <div className="mb-30">
          <h4 className="text-3xl">Tech</h4>
          <ul className="mt-10 ml-4 list-disc space-y-2 text-neutral-400 md:px-0">
            <li>React - My go-to UI library for building modern web apps.</li>
            <li>
              Next.js - The best React framework for production-grade apps.
            </li>
            <li>
              Typescript - Strongly typed JavaScript that makes coding safer.
            </li>
            <li>TailwindCSS: Utility-first CSS for fast and clean styling.</li>
            <li>Prettier - Keeps my code clean and consistently formatted.</li>
            <li>
              React Testing Library - For testing UI the way users interact with
              it.
            </li>
            <li>Playwright - My favorite tool for end-to-end testing.</li>
            <li>Git - Version control I can’t live without.</li>
            <li>
              GitHub - Where I host, share, and collaborate on projects. I also
              run CI/CD pipelines via GitHub Actions.
            </li>
            <li>NPM - The package manager powering all my projects.</li>
            <li>VSCode - My daily driver code editor.</li>
            <li>Notion - My second brain for notes and project planning.</li>
            <li>Discord - For staying connected with dev communities.</li>
            <li>
              GitHub Copilot / CodeWhisperer - AI pair programmers that boost
              productivity.
            </li>
            <li>MDX - Markdown with React components for rich content.</li>
          </ul>
        </div>

        <div className="mb-30">
          <h4 className="text-3xl">Desk Setup</h4>
          <ul className="mt-10 ml-4 list-disc space-y-2 text-neutral-400 md:px-0">
            <li>
              M2 MacBook Pro 14-inch (2023) - My main development machine.
            </li>
            <li>
              Keychron K2 Keyboard - A solid mechanical keyboard for daily
              typing.
            </li>
            <li>
              Apple Magic Keyboard - Slim and minimal, great for portability.
            </li>
            <li>
              Logitech MX Master Mouse - Ergonomic and perfect for long coding
              sessions.
            </li>
            <li>Monitor - Acer Nitro ED320QXbi 31,5</li>
            <li>Headphones - JBL Tune 510BT</li>
          </ul>
        </div>

        <div className="mb-30">
          <h4 className="text-3xl">Web Performance & Security & Monitoring</h4>
          <ul className="mt-10 ml-4 list-disc space-y-2 text-neutral-400 md:px-0">
            <li>
              Google Lighthouse - For auditing web performance and best
              practices.
            </li>
            <li>
              Sentry - Application monitoring and error tracking for my apps.
            </li>
            <li>
              Google Analytics - Tracking user behavior and site performance.
            </li>
            <li>WebPageTest - In-depth web performance testing.</li>
            <li>PageSpeed Insights - Analyzing and optimizing page speed.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
