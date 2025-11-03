"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Uses", href: "/uses" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav className="relative z-50 border-b border-neutral-800 text-sm font-semibold text-neutral-400">
      <div className="container flex h-[60px] items-center justify-between">
        <div>
          <Link href="/">
            <svg
              viewBox="0 0 200 200"
              width="70"
              height="70"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ffffff", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ffffff", stopOpacity: 0.7 }}
                  />
                </linearGradient>
              </defs>

              <path
                d="M 70 60 L 70 140 L 130 140 L 130 125 L 85 125 L 85 107 L 120 107 L 120 93 L 85 93 L 85 75 L 130 75 L 130 60 Z"
                fill="url(#logoGradient)"
              />

              <path
                d="M 95 50 L 145 50 L 145 65 L 127 65 L 127 130 L 112 130 L 112 65 L 95 65 Z"
                fill="white"
                opacity="0.9"
              />

              <rect
                x="70"
                y="145"
                width="75"
                height="3"
                fill="white"
                opacity="0.5"
              />
            </svg>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex list-none items-center gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-[19px] font-bold transition-colors ${
                    pathname === item.href ? "text-white" : "hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                className="border-primary text-primary hover:bg-primary inline-flex h-10 items-center rounded-md border px-4 transition-colors hover:text-black"
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
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          aria-label="Toggle navigation menu"
          className="z-50 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-neutral-950">
          <div className="max-h-full overflow-y-auto p-5">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`border-border-primary block border-b px-3 py-4 font-bold transition-colors ${
                      pathname === item.href ? "text-white" : "hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-primary hover:bg-primary mt-4 flex h-12 items-center justify-center rounded-md border px-4 transition-colors hover:text-black"
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
                  <span className="ml-3 tracking-widest">Say Hello</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
