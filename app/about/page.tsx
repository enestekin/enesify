import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Enes Tekin",
  description:
    "Learn more about Enes Tekin, a Software Engineer specializing in JavaScript, React, Next.js, and scalable web applications.",
  openGraph: {
    title: "About Me | Enes Tekin",
    description:
      "Enes Tekin is a Software Engineer focused on building modern, scalable, and user-focused web applications using React, Next.js, and TypeScript.",
    url: "https://enesify.com/about", // kendi domainine göre güncelle
    siteName: "Enes Tekin Portfolio",
    images: [
      {
        url: "https://enesify.com/og-image.png", // bir og-image eklemeni öneririm
        width: 1200,
        height: 630,
        alt: "Enes Tekin - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Enes Tekin",
    description:
      "Software Engineer specializing in React, Next.js, and scalable web applications.",
    images: ["https://enesify.com/og-image.png"], // og-image ile aynı olabilir
    creator: "@tekindotjs", // Twitter hesabın varsa ekle
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-neutral-400">
      <header className="mb-10">
        <h1 className="text-3xl text-white md:text-5xl">
          Hey, I&apos;m Enes Tekin
        </h1>
        <h2 className="mt-2 text-2xl text-neutral-400">Software Engineer</h2>
      </header>

      <section aria-labelledby="about-heading" className="space-y-5 text-lg">
        <h2 id="about-heading" className="sr-only">
          About Me
        </h2>
        <p className="leading-7">
          I&apos;m a Software Engineer focused on{" "}
          <strong className="text-white">JavaScript</strong> and
          <strong className="text-white"> web development</strong>, passionate
          about building modern, scalable, and user-focused web applications. I
          enjoy crafting clean, performant UIs and solving complex problems with
          simple, elegant solutions.
        </p>
        <p className="leading-7">
          I graduated with a{" "}
          <strong className="text-white">B.Sc. in Computer Sciences</strong>{" "}
          from Canakkale Onsekiz Mart University. Since then, I’ve worked with
          multiple companies like Akinon, Trive, and Denebunu, focusing on
          e-commerce platforms, dashboards, and interactive user experiences.
        </p>
        <p className="leading-7">
          My main stack includes{" "}
          <strong className="text-white">
            React.js, Next.js, TypeScript, and TailwindCSS
          </strong>
          , but I also have experience with{" "}
          <strong className="text-white">
            Node.js, Express.js, MongoDB, SQL
          </strong>
          , and <strong className="text-white">GraphQL</strong> on the backend.
          In the past, I’ve worked with technologies like jQuery, Bootstrap, and
          SCSS, which gave me a strong foundation for writing maintainable code
          today.
        </p>
        <p className="leading-7">
          Beyond coding, I’m constantly exploring new tools, testing best
          practices, and improving my skills in both frontend and fullstack
          development.
        </p>
      </section>

      <section aria-labelledby="what-i-do-heading" className="mt-10">
        <h2 id="what-i-do-heading" className="text-2xl text-white md:text-3xl">
          What I Do
        </h2>
        <div className="space-y-8 pt-5 text-lg leading-7">
          <article>
            <h3 className="font-semibold text-white">
              Frontend Engineering &amp; Scalable Applications
            </h3>
            <p>
              I build scalable, maintainable, and high-performing frontend
              applications with React, Next.js, and TypeScript. My focus is on
              creating user interfaces that balance clean design, accessibility,
              and technical robustness, ensuring products can grow alongside
              business needs.
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-white">
              E-Commerce &amp; Performance Optimization
            </h3>
            <p>
              With strong experience in e-commerce platforms, I specialize in
              optimizing checkout flows, product detail pages, and customer
              journeys. I work on improving performance metrics, SEO, and
              conversion rates, enabling businesses to reach wider audiences
              with faster and more reliable web experiences.
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-white">
              Collaboration &amp; Technical Leadership
            </h3>
            <p>
              I thrive in collaborative environments, partnering with designers,
              backend developers, and product teams to deliver end-to-end
              solutions. I bring expertise in state management, testing, and
              CI/CD pipelines, and contribute to building engineering practices
              that raise overall code quality and team efficiency.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
