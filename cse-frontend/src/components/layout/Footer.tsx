import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, GithubIcon, YoutubeIcon, TwitterIcon } from "@/components/ui/SocialIcons";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Alumni", href: "/alumni" },
  { name: "Team", href: "/team" },
  { name: "Join Society", href: "/join" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/csesociety_bits",
    icon: InstagramIcon,
    color: "hover:text-pink-600 hover:border-pink-600/40",
    label: "@csesociety_bits",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/csesociety-bitsindri",
    icon: LinkedinIcon,
    color: "hover:text-sky-600 hover:border-sky-600/40",
    label: "CSE Society BIT Sindri",
  },
  {
    name: "GitHub",
    href: "https://github.com/cse-bitsindri",
    icon: GithubIcon,
    color: "hover:text-black hover:border-black/50",
    label: "cse-bitsindri",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@csesocietybitsindri",
    icon: YoutubeIcon,
    color: "hover:text-red-600 hover:border-red-600/40",
    label: "CSE Society Channel",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/csesociety_bits",
    icon: TwitterIcon,
    color: "hover:text-sky-500 hover:border-sky-500/40",
    label: "@csesociety_bits",
  },
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
              <div className="flex h-10 w-10 items-center justify-center bg-[#141413] font-mono text-base font-bold text-[#f5f3ee] shadow-sm">
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

            <div className="mt-6 inline-flex items-center gap-2 border border-black/10 bg-[#faf9f6] px-3.5 py-1.5 font-mono text-xs text-neutral-600">
              <MapPin size={13} className="text-rose-600" />
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>23.6558° N, 86.4711° E · SINDRI, DHANBAD</span>
            </div>

            {/* Social Icons Row */}
            <div className="mt-8">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 mb-3">
                OFFICIAL SOCIAL HANDLES
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className={`flex h-10 items-center gap-2 border border-black/15 bg-white px-3.5 py-2 font-mono text-xs font-semibold text-neutral-700 transition-all duration-200 shadow-xs hover:shadow-md ${s.color}`}
                    >
                      <Icon size={16} />
                      <span className="hidden sm:inline-block">{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-neutral-400">
              SOCIETY DIRECTORY
            </p>

            <ul className="mt-6 space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-black"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-40 transition-opacity duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-neutral-400">
              CONTACT & INQUIRY
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                  Department
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-800">
                  Dept. of Computer Science & Engineering
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  BIT Sindri, Dhanbad, Jharkhand 828123
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                  Official Email
                </p>
                <a
                  href="mailto:cse.society@bitsindri.ac.in"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-[#141413] hover:underline"
                >
                  <Mail size={14} />
                  <span>cse.society@bitsindri.ac.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Big Typographic Graphic Tag */}
        <div className="mt-20 border-t border-black/10 pt-12 text-center lg:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 font-semibold">
            COMPUTE • COLLABORATE • INNOVATE • BIT SINDRI 1987-2026
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-neutral-500">
            © {currentYear} Computer Science & Engineering Society, BIT Sindri. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-mono text-xs text-neutral-500">
            <span>EST. 1987</span>
            <span>•</span>
            <span>BIT SINDRI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}