"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logoIcon } from "@/assets";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Portal", href: "#portal" },
  { label: "Workforce Hub", href: "#workforce" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#540C1D] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoIcon}
            alt="Elimi Logo"
            width={120}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-[#f9a825]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-white transition-colors hover:text-[#f9a825]"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-[#f9a825] px-5 py-2 text-sm font-semibold text-[#1e1e1e] transition-all hover:bg-[#e0931b]"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md p-2 text-white hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#540C1D] px-4 pt-3 pb-6 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-medium text-white/90 hover:text-[#f9a825]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 text-base font-medium text-white hover:text-[#f9a825]"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-[#f9a825] py-2.5 text-center text-base font-semibold text-[#1e1e1e]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
