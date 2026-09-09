"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Alumni", href: "/alumni" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <nav
          className="flex h-16 items-center justify-between border border-black/20 bg-[#f5f3ee]/95 px-4 shadow-md backdrop-blur-xl sm:px-6"
          aria-label="Main Navigation"
        >
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3.5"
          >
            <div className="flex h-9 w-9 items-center justify-center bg-[#141413] font-mono text-sm font-bold text-[#f5f3ee] transition-transform duration-300 group-hover:scale-105">
              C
            </div>

            <div className="leading-none">
              <p className="font-mono text-xs font-semibold tracking-tight text-[#141413] group-hover:text-black">
                CSE SOCIETY
              </p>
              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.26em] text-neutral-500">
                BIT SINDRI
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? "text-[#141413]"
                      : "text-neutral-500 hover:text-[#141413]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#141413]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Join CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/join"
              className="group inline-flex items-center gap-2 border border-black/20 bg-[#141413] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#f5f3ee] transition-all duration-300 hover:bg-neutral-800 hover:shadow-md"
            >
              <span>Join Society</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center border border-black/15 bg-transparent text-[#141413] transition-colors hover:bg-black/5 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="mt-2 border border-black/15 bg-[#f5f3ee]/95 px-6 py-6 backdrop-blur-lg shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between border-b border-black/10 pb-3 font-mono text-sm uppercase tracking-[0.2em] ${
                      isActive
                        ? "font-bold text-black"
                        : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-black" />}
                  </Link>
                );
              })}

              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-[#141413] py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f3ee]"
              >
                <span>Join Society</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}