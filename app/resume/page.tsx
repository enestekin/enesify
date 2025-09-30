import type { Metadata } from "next";
import Note from "@/components/Note";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Enes Tekin",
  description:
    "Explore Enes Tekin's professional resume. Frontend Engineer with experience in React, Next.js, TypeScript, TailwindCSS, and modern web technologies. Background in e-commerce, performance optimization, and scalable applications.",
  openGraph: {
    title: "Resume | Enes Tekin",
    description:
      "Frontend Engineer specialized in scalable web apps and e-commerce platforms. View Enes Tekin's resume including professional experience and education.",
    url: "https://enesify.com/resume", // kendi domainine göre güncelle
    siteName: "Enes Tekin Portfolio",
    images: [
      {
        url: "https://enesify.com/og-resume.png", // OG görsel ekle
        width: 1200,
        height: 630,
        alt: "Enes Tekin Resume",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Enes Tekin",
    description:
      "Frontend Engineer with experience in React, Next.js, and modern web development. View Enes Tekin's resume.",
    images: ["https://enesify.com/og-resume.png"], // OG görsel ekle
    creator: "@tekindotjs",
  },
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-neutral-400">
      <header className="mb-10">
        <h1 className="text-3xl text-white md:text-5xl">Resume</h1>
        <Note>
          You can also{" "}
          <Link href="/enestekin.pdf" target="_blank" className="underline">
            download my CV as PDF
          </Link>
          .
        </Note>
      </header>

      <section aria-labelledby="experience-heading" className="mb-16">
        <h2
          id="experience-heading"
          className="mb-6 text-2xl font-semibold text-white"
        >
          Professional Experience
        </h2>
        <div className="space-y-12">
          <article>
            <h3 className="font-bold text-white">Akinon</h3>
            <p className="text-white">
              <i>
                Front End Developer | <time dateTime="2024-09">Sep 2024</time> –{" "}
                <time dateTime="2024-12">Dec 2024</time>
              </i>
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-400">
              <li>
                Designed and implemented scalable e-commerce websites using
                Omnitron Headless CMS.
              </li>
              <li>
                Improved performance and responsiveness, achieving a 12%
                increase in interaction metrics.
              </li>
              <li>Delivered complete solutions from design to deployment.</li>
              <li>
                Built landing pages, category listing pages, product detail
                pages, and checkout flows.
              </li>
              <li>Stack: React.js, Next.js, Redux, TypeScript, TailwindCSS</li>
            </ul>
          </article>

          <article>
            <h3 className="font-bold text-white">Trive</h3>
            <p className="text-white">
              <i>
                Front End Developer | <time dateTime="2023-11">Nov 2023</time> –{" "}
                <time dateTime="2024-01">Jan 2024</time>
              </i>
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-400">
              <li>
                Debugged and resolved application issues using VSCode and
                browser dev tools.
              </li>
              <li>Refactored legacy components, reducing load times by 15%.</li>
              <li>
                Collaborated with analysts and backend developers to deliver new
                features.
              </li>
              <li>
                Stack: React.js, Styled Components, Redux-Saga, TypeScript,
                Semantic UI React
              </li>
            </ul>
          </article>

          <article>
            <h3 className="font-bold text-white">Denebunu</h3>
            <p className="text-white">
              <i>
                Front End Developer | <time dateTime="2022-12">Dec 2022</time> –{" "}
                <time dateTime="2023-11">Nov 2023</time>
              </i>
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-400">
              <li>
                Led development of “Sorbunu”, a research platform with an admin
                dashboard.
              </li>
              <li>
                Built interactive chart components for survey data
                visualization.
              </li>
              <li>Integrated iyzico payments and enabled CSV/Excel exports.</li>
              <li>
                Migrated Redux-Thunk to Redux-Saga, reducing complexity by 20%.
              </li>
              <li>
                Implemented Sentry monitoring, cutting error response time by
                30%.
              </li>
              <li>
                Stack: React.js, Next.js, TailwindCSS, Redux-Saga, Axios,
                HeadlessUI, i18n
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section aria-labelledby="education-heading">
        <h2
          id="education-heading"
          className="mb-6 text-2xl font-semibold text-white"
        >
          Education
        </h2>
        <article>
          <h3 className="text-xl font-medium text-white">
            B.Sc. in Computer Science
          </h3>
          <p className="text-sm text-neutral-500">
            Çanakkale Onsekiz Mart University
          </p>
        </article>
      </section>
    </main>
  );
}
