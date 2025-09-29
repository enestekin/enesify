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
              width="50"
              height="50"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform hover:scale-105"
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="#0F172A"
                stroke="#3B82F6"
                strokeWidth="2"
              />

              <path
                d="M 60 70 L 140 70 L 140 75 L 65 75 L 65 97 L 130 97 L 130 102 L 65 102 L 65 125 L 140 125 L 140 130 L 60 130 Z"
                fill="#3B82F6"
              />

              <path
                d="M 105 70 L 135 70 L 135 75 L 122 75 L 122 130 L 117 130 L 117 75 L 105 75 Z"
                fill="#60A5FA"
              />

              <path
                d="M 45 85 L 50 90 L 45 95 M 155 85 L 150 90 L 155 95"
                stroke="#3B82F6"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M 45 105 L 50 110 L 45 115 M 155 105 L 150 110 L 155 115"
                stroke="#60A5FA"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />

              <circle cx="85" cy="145" r="2.5" fill="#3B82F6" />
              <circle cx="95" cy="145" r="2.5" fill="#60A5FA" />
              <circle cx="105" cy="145" r="2.5" fill="#3B82F6" />
              <circle cx="115" cy="145" r="2.5" fill="#60A5FA" />
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
