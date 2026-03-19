"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/why-csvbox", label: "Why CSVbox" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "https://help.csvbox.io/", label: "Docs", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="CSVbox home">
          <Image
            src="https://umsousercontent.com/lib_khTFGMonhWqcPLFG/ghFUuOArjfddplUQ.png"
            alt="CSVbox logo"
            width={28}
            height={28}
            className="w-7 h-7"
            priority
          />
          <span className="font-bold text-gray-900 text-[15px]">CSVbox</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="https://app.csvbox.io/login"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
          >
            Login
          </Link>
          <Link
            href="https://app.csvbox.io/register"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
          >
            Sign Up
            <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true">
              <path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" />
            </svg>
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle mobile menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="https://app.csvbox.io/login"
                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                href="https://app.csvbox.io/register"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                Sign Up
                <svg width="12" height="10" viewBox="0 0 15 12" fill="currentColor" aria-hidden="true">
                  <path d="M9.6 7H1a1 1 0 1 1 0-2h8.6L7 2.4A1 1 0 0 1 8.4 1l4.3 4.2c.2.3.3.5.3.8 0 .3-.1.5-.3.7L8.4 11A1 1 0 1 1 7 9.5L9.6 7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
