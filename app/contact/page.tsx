import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-neutral-400">
      <div>
        <header className="mb-10">
          <h1 className="text-3xl text-white md:text-5xl">Get in Touch</h1>
        </header>
        <div className="text-lg">
          <p className="leading-7">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Whether you have a
            question, want to collaborate, or just want to say hello, feel free
            to reach out!
          </p>
          <ul className="mt-5 list-disc space-y-4 pl-5 text-lg">
            <li>
              <Link
                href="mailto:zenestekin@gmail.com"
                className="text-underline hover:text-white"
              >
                Mail me!
              </Link>
              <strong>
                <i> zenestekin@gmail.com</i>
              </strong>
            </li>
            <li className="hover:text-white">
              <Link href="https://www.linkedin.com/in/enestekin/">
                LinkedIn
              </Link>
            </li>
            <li className="hover:text-white">
              <Link href="https://github.com/enestekin/">Github</Link>
            </li>
            <li className="hover:text-white">
              <Link href="https://x.com/tekindotjs">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
