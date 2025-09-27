import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="container text-neutral-400">
      <div className="pb-16 md:mx-[10vw]">
        <div>
          <header className="py-16">
            <h1 className="text-3xl text-white md:text-5xl">
              Hey, I&apos;m Enes Tekin
            </h1>
            <p className="mt-2 text-2xl font-medium text-neutral-400">
              Software Engineer
            </p>
          </header>
          <div className="text-lg">
            <p className="leading-7">
              I&apos;m a Software Engineer focused on{" "}
              <span className="text-white">JavaScript</span> and
              <span className="text-white"> web development</span>. passionate
              about building modern, scalable, and user-focused web
              applications. I enjoy crafting clean, performant UIs and solving
              complex problems with simple, elegant solutions.
            </p>
            <p className="mt-5 leading-7">
              I graduated with a{" "}
              <span className="text-white">B.Sc. in Computer Sciences</span>{" "}
              from Canakkale Onsekiz Mart University. Since then, I’ve worked
              with multiple companies like Akinon, Trive, and Denebunu, focusing
              on e-commerce platforms, dashboards, and interactive user
              experiences.
            </p>
            <p className="mt-5 leading-7">
              My main stack includes{" "}
              <span className="text-white">
                React.js, Next.js, TypeScript, and TailwindCSS
              </span>
              , but I also have experience with{" "}
              <span className="text-white">
                Node.js, Express.js, MongoDB, SQL
              </span>
              , and <span className="text-white">GraphQL</span> on the backend.
              In the past, I’ve worked with technologies like jQuery, Bootstrap,
              and SCSS, which gave me a strong foundation for writing
              maintainable code today.
            </p>
            <p className="mt-5 leading-7">
              Beyond coding, I’m constantly exploring new tools, testing best
              practices, and improving my skills in both frontend and fullstack
              development.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl text-white md:text-3xl">What I Do</h3>
          <ul className="list-disc space-y-4 pt-5 pl-5 text-lg leading-7">
            <li>
              <p className="text-white">
                <strong>Frontend Engineering & Scalable Applications</strong>
              </p>

              <p>
                I build scalable, maintainable, and high-performing frontend
                applications with React, Next.js, and TypeScript. My focus is on
                creating user interfaces that balance clean design,
                accessibility, and technical robustness, ensuring products can
                grow alongside business needs.
              </p>
            </li>
            <li>
              <p className="text-white">
                <strong>E-Commerce & Performance Optimization</strong>
              </p>

              <p>
                With strong experience in e-commerce platforms, I specialize in
                optimizing checkout flows, product detail pages, and customer
                journeys. I work on improving performance metrics, SEO, and
                conversion rates, enabling businesses to reach wider audiences
                with faster and more reliable web experiences.
              </p>
            </li>
            <li>
              <p className="text-white">
                <strong>Collaboration & Technical Leadership</strong>
              </p>

              <p>
                I thrive in collaborative environments, partnering with
                designers, backend developers, and product teams to deliver
                end-to-end solutions. I bring expertise in state management,
                testing, and CI/CD pipelines, and contribute to building
                engineering practices that raise overall code quality and team
                efficiency.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-20 border-t border-neutral-800 pt-10">
          <h3 className="mb-6 text-2xl text-white md:text-3xl">
            Let’s Connect
          </h3>

          <p className="mb-8 max-w-2xl text-lg leading-7">
            Interested in collaborating, discussing new ideas, or exploring
            potential opportunities where my expertise in frontend engineering,
            e-commerce optimization, and scalable web applications can add
            value? Feel free to reach out — I’d love to connect.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/enestekin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/enestekin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com/tekindotjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
