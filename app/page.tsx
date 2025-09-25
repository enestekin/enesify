import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <section className="mx-auto max-w-screen-md py-16 md:py-24 md:text-center lg:py-48">
        <header>
          <h1 className="mb-8 text-4xl font-black md:text-6xl">
            Hey, I&apos;m <span className="text-primary">Enes Tekin</span>
            <span className="inline-block">Software Developer</span>
          </h1>
          <p className="tracking-light text-xl text-neutral-400 md:text-2xl md:leading-9">
            Creating modern web apps that balance speed, design, and
            functionality with real impact.
          </p>
        </header>

        <div className="mt-14 flex flex-col items-center justify-center gap-6 text-lg font-semibold md:flex-row md:gap-10">
          <Link
            href="hello"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#404040] py-4 md:w-auto md:px-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
              <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
            <span className="ml-2">Say Hello</span>
          </Link>
          <Link
            href="blog"
            className="inline-block w-full text-center text-neutral-300 hover:text-white md:w-auto"
          >
            Read the blog
          </Link>
        </div>
      </section>
    </div>
  );
}
