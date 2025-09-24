import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-15 border-b border-neutral-800 text-sm font-semibold">
      <div className="container flex h-full items-center justify-between">
        <div>
          <Link href="#">Enes Tekin</Link>
        </div>
        <div className="text-neutral-400">
          <ul className="flex list-none items-center gap-4">
            <li className="px-3 py-[19px] font-bold hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="px-3 py-[19px] font-bold hover:text-white">
              <Link href="/about">Blog</Link>
            </li>
            <li className="px-3 py-[19px] font-bold hover:text-white">
              <Link href="/about">Uses</Link>
            </li>
            <li>
              <Link
                href="/about"
                className="border-primary text-primary hover:bg-primary inline-flex h-[36px] items-center space-x-1 rounded-md border px-3 py-1 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                <span className="ml-1">Say Hello</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
