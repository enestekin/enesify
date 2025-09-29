import Note from "@/components/Note";
import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-neutral-400">
      <header>
        <h1 className="text-3xl text-white md:text-5xl">Resume</h1>
        <Note>
          You can also{" "}
          <Link href="/enestekin.pdf" target="_blank" className="underline">
            download my CV as PDF
          </Link>
          .
        </Note>
      </header>

      <section className="mb-15">
        <h2 className="mb-15 text-2xl font-semibold text-white">
          Professional Experience
        </h2>
        <div className="space-y-8">
          <div>
            <p className="font-bold text-white">Akinon</p>
            <h3 className="text-white">
              <i>Front End Developer | September, 2024 – December, 2024</i>
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-400">
              <li>
                Designed and implemented scalable e-commerce websites for
                various industries using the Omnitron Headless CMS platform.
              </li>
              <li>
                Developed user-friendly interfaces with a focus on performance
                and responsiveness, achieving a 12% improvement in customer
                interaction metrics.
              </li>
              <li>
                Delivered complete solutions from design to deployment, aligning
                with customer requirements.
              </li>
              <li>
                Played a key role in creating landing pages, category listing
                pages, product detail pages, and checkout processes.
              </li>
              <li>Stack: React.js, Next.js, Redux, TypeScript, TailwindCSS</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white">Trive</p>
            <h3 className="text-white">
              <i>Front End Developer | November, 2023 – January, 2024</i>
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-400">
              <li>
                Identified and resolved application issues using VSCode&apos;s
                debugger and browser developer tools, ensuring optimal
                functionality.
              </li>
              <li>
                Improved app performance by refactoring legacy class components,
                reducing unnecessary renders and network requests, resulting in
                a 15% reduction in page load time.
              </li>
              <li>
                Collaborated with analysts and backend developers to deliver new
                features for client-facing and back-office applications.
              </li>
              <li>
                Stack: React.js, Styled Components, Redux-Saga, TypeScript,
                Semantic UI React
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white">Denebunu</p>
            <h3 className="text-white">
              <i>Front End Developer | December, 2022 – November, 2023</i>
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-400">
              <li>
                Led the development of &quot;Sorbunu&quot; a research platform
                with an admin dashboard, enabling users to define research
                questions for target audiences.
              </li>
              <li>
                Delivered a highly responsive and intuitive user interface by
                leveraging advanced React concepts.
              </li>
              <li>
                Added functionality to visualize survey results using
                interactive chart components, allowing for comparisons and
                detailed insights.
              </li>
              <li>
                Integrated iyzico payment methods to facilitate secure
                transactions within the platform.
              </li>
              <li>
                Migrated the codebase from Redux-Thunk to Redux-Saga using Redux
                Toolkit, improving application maintainability and reducing code
                complexity by 20%.
              </li>
              <li>
                Enabled exporting survey results in formats like CSV and Excel,
                enhancing data accessibility and analysis.
              </li>
              <li>
                Integrated Sentry for real-time performance monitoring and error
                tracking, reducing error response time by 30%.
              </li>
              <li>
                Developed a highly responsive and intuitive user interface by
                leveraging advanced React concepts, designing reusable UI
                components, and architecting a scalable application structure.
              </li>
              <li>
                Built secure authentication flows with Axios interceptors and
                enhanced API interaction efficiency with RESTful services.
              </li>
              <li>
                Stack: React.js, Axios, Formik, HeadlessUI, Redux-Saga, Next.js,
                TailwindCSS, i18n
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white">Akinon</p>
            <h3 className="text-white">
              <i>Front End Developer | October, 2021 – December, 2022</i>
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-400">
              <li>
                Built and maintained e-commerce websites compatible with the
                Omnitron CMS platform, streamlining content updates.
              </li>
              <li>
                Collaborated with brands to design and develop engaging landing
                pages, driving user engagement and increasing conversion rates
                by 10%
              </li>
              <li>
                Enhanced website performance by optimizing Cumulative Layout
                Shift (CLS) and implementing SEO best practices, resulting in a
                20% improvement in Google Lighthouse scores.
              </li>
              <li>
                Implemented secure payment methods like Masterpass, G-pay to
                facilitate smooth customer transactions.
              </li>
              <li>
                Stack: React.js, REST APIs, Webpack, SCSS, LESS, TailwindCSS,
                Jinja, jQuery, Bootstrap
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white">Enoca</p>
            <h3 className="text-white">
              <i>Junior Front End Developer | May, 2021 - November, 2021</i>
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-400">
              <li>
                Built and maintained e-commerce websites compatible with the
                Omnitron CMS platform, streamlining content updates.
              </li>
              <li>
                Collaborated with brands to design and develop engaging landing
                pages, driving user engagement and increasing conversion rates
                by 10%
              </li>
              <li>
                Enhanced website performance by optimizing Cumulative Layout
                Shift (CLS) and implementing SEO best practices, resulting in a
                20% improvement in Google Lighthouse scores.
              </li>
              <li>
                Implemented secure payment methods like Masterpass, G-pay to
                facilitate smooth customer transactions.
              </li>
              <li>
                Stack: React.js, REST APIs, Webpack, SCSS, LESS, TailwindCSS,
                Jinja, jQuery, Bootstrap
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-white">Education</h2>
        <div>
          <h3 className="text-xl font-medium text-white">
            B.Sc. Computer Science
          </h3>
          <p className="text-sm text-neutral-500">
            Çanakkale Onsekiz Mart University
          </p>
        </div>
      </section>
    </section>
  );
}
