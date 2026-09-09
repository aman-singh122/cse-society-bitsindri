"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Alumni", href: "/alumni" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between border border-black/10 bg-[#f5f3ee]/90 px-4 backdrop-blur-md sm:px-5">
          
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center bg-black text-sm font-semibold text-white">
              C
            </div>

            <div className="leading-none">
              <p className="text-sm font-semibold tracking-tight text-neutral-950">
                CSE SOCIETY
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-neutral-500">
                BIT SINDRI
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-950"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/join"
            className="hidden bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 md:block"
          >
            Join Society
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center border border-black/10 md:hidden"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-x border-b border-black/10 bg-[#f5f3ee] px-5 py-5 md:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-black/10 py-4 text-sm font-medium text-neutral-700"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="mt-5 bg-black px-5 py-3 text-center text-sm font-medium text-white"
              >
                Join Society
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}