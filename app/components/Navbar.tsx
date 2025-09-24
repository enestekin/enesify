"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 h-15 border-b border-neutral-800 text-sm font-semibold text-neutral-400">
      <div className="container flex h-full items-center justify-between">
        <div>
          <Link href="#">Enes Tekin</Link>
        </div>

        <div className="hidden md:flex">
          <ul className="flex list-none items-center gap-4">
            <li className="px-3 py-[19px] font-bold hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="px-3 py-[19px] font-bold hover:text-white">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="px-3 py-[19px] font-bold hover:text-white">
              <Link href="/uses">Uses</Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="border-primary text-primary hover:bg-primary inline-flex h-[36px] items-center space-x-1 rounded-md border px-3 py-1 hover:text-black"
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
                  className="lucide lucide-hand-icon lucide-hand"
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

        <button
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

      {isOpen && (
        <div className="font- fixed inset-x-0 top-[60px] bottom-0 z-10 block max-h-[100vh] bg-neutral-950">
          <div className="max-h-full overflow-y-auto p-5">
            <ul>
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="border-border-primary block border-b px-3 py-[19px] font-bold hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="border-border-primary block border-b px-3 py-[19px] font-bold hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/uses"
                  onClick={() => setIsOpen(false)}
                  className="border-border-primary block border-b px-3 py-[19px] font-bold hover:text-white"
                >
                  Uses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-primary hover:bg-primary my-[19px] flex h-[48px] items-center justify-center rounded-md border px-3 px-4 py-2 hover:text-black"
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
                    className="lucide lucide-hand-icon lucide-hand"
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
