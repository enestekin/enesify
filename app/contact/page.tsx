import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Enes Tekin",
  description:
    "Get in touch with Enes Tekin. Reach out via email, LinkedIn, GitHub, or Twitter to discuss projects, collaborations, or new opportunities.",
  openGraph: {
    title: "Contact | Enes Tekin",
    description:
      "Want to collaborate or just say hello? Contact Enes Tekin via email, LinkedIn, GitHub, or Twitter.",
    url: "https://enesify.com/contact", // kendi domainine göre güncelle
    siteName: "Enes Tekin Portfolio",
    images: [
      {
        url: "https://enesify.com/og-contact.png", // bir OG görsel eklemeni öneririm
        width: 1200,
        height: 630,
        alt: "Contact Enes Tekin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Enes Tekin",
    description:
      "Reach out to Enes Tekin via email, LinkedIn, GitHub, or Twitter.",
    images: ["https://enesify.com/og-contact.png"], // og görsel ile aynı olabilir
    creator: "@tekindotjs", // Twitter hesabın varsa ekle
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-neutral-400">
      <header className="mb-10">
        <h1 className="text-3xl text-white md:text-5xl">Get in Touch</h1>
      </header>

      <section aria-labelledby="contact-heading" className="text-lg">
        <h2 id="contact-heading" className="sr-only">
          Contact Information
        </h2>
        <p className="leading-7">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you have a question,
          want to collaborate, or just want to say hello, feel free to reach
          out!
        </p>

        <address className="mt-6 not-italic">
          <ul className="list-disc space-y-4 pl-5 text-lg">
            <li>
              <Link
                href="mailto:zenestekin@gmail.com"
                className="underline hover:text-white"
              >
                zenestekin@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/enestekin/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/enestekin/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/tekindotjs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </address>
      </section>
    </main>
  );
}
