import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Alumni", href: "/alumni" },
  { name: "Team", href: "/team" },
  { name: "Join Society", href: "/join" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/15 bg-[#f5f3ee] px-6 pb-12 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Top Header */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Brand & Identity */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center bg-[#141413] font-mono text-base font-bold text-[#f5f3ee]">
                C
              </div>
              <div className="leading-none">
                <p className="font-mono text-sm font-bold tracking-tight text-[#141413]">
                  CSE SOCIETY
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-neutral-500">
                  BIT SINDRI
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-600">
              The official Computer Science & Engineering Society of BIT Sindri. A student community of curious minds, ambitious builders, and technical leaders shaping the future of computation.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 border border-black/10 bg-[#faf9f6] px-3.5 py-1.5 font-mono text-xs text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>23.6558° N, 86.4711° E · SINDRI</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Navigation
            </p>

            <ul className="mt-6 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-neutral-700 transition-colors hover:text-black"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Connect & Inquiry
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Department
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  Dept. of Computer Science & Engineering
                </p>
                <p className="text-xs text-neutral-500">
                  BIT Sindri, Dhanbad, Jharkhand 828123
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Official Email
                </p>
                <a
                  href="mailto:cse.society@bitsindri.ac.in"
                  className="mt-1 inline-block text-sm font-medium text-[#141413] hover:underline"
                >
                  cse.society@bitsindri.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Big Typographic Graphic Tag */}
        <div className="mt-20 border-t border-black/10 pt-12 text-center lg:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            COMPUTE • COLLABORATE • INNOVATE • SINDRI
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-neutral-500">
            © {currentYear} CSE Society, BIT Sindri. All rights reserved.
          </p>
          <p className="font-mono text-xs text-neutral-400">
            EST. 1987 · BIT SINDRI
          </p>
        </div>
      </div>
    </footer>
  );
}