import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";

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
    <footer className="border-t border-black/15 bg-[#f5f3ee] px-4 pb-8 pt-12 sm:px-6 lg:px-10 lg:pt-14">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-12">

          {/* BRAND */}
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#141413] font-mono text-base font-bold text-[#f5f3ee] transition-transform duration-300 group-hover:-rotate-3">
                C
              </div>

              <div className="leading-none">
                <p className="font-mono text-sm font-bold tracking-tight text-[#141413]">
                  CSE SOCIETY
                </p>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.28em] text-neutral-500">
                  BIT SINDRI
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-600">
              The official Computer Science & Engineering Society of BIT
              Sindri — a student community built around technology,
              collaboration, problem solving, and continuous learning.
            </p>

            {/* LOCATION */}
            <div className="mt-5 inline-flex max-w-full items-center gap-2 border border-black/10 bg-[#faf9f6] px-3 py-2">
              <MapPin
                size={13}
                className="shrink-0 text-neutral-500"
              />

              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />

              <span className="truncate font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                SINDRI · DHANBAD · JHARKHAND
              </span>
            </div>

            {/* SOCIALS */}
            <div className="mt-7">
              <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                OFFICIAL SOCIAL HANDLES
              </p>

              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      aria-label={social.label}
                      className={`group inline-flex h-9 items-center gap-2 border border-black/12 bg-[#faf9f6] px-3 font-mono text-[9px] font-semibold uppercase tracking-wider text-neutral-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md ${social.color}`}
                    >
                      <Icon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-105" />

                      <span className="hidden sm:inline">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* DIRECTORY */}
          <div className="lg:col-span-2 lg:col-start-7">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              DIRECTORY
            </p>

            <ul className="mt-5 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-neutral-700 transition-colors hover:text-black"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      size={12}
                      className="text-neutral-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              CONTACT
            </p>

            <div className="mt-5 border-l border-black/15 pl-4">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                Department
              </p>

              <p className="mt-1 text-sm font-medium text-neutral-800">
                Computer Science & Engineering
              </p>

              <p className="mt-0.5 text-xs leading-5 text-neutral-500">
                BIT Sindri, Dhanbad, Jharkhand 828123
              </p>
            </div>

            <div className="mt-5 border-l border-black/15 pl-4">
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                Official Email
              </p>

              <a
                href="mailto:cse.society@bitsindri.ac.in"
                className="group mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#141413] transition-colors hover:text-neutral-500"
              >
                <Mail size={13} />

                <span className="break-all">
                  cse.society@bitsindri.ac.in
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            LARGE TYPOGRAPHIC STRIP
        ====================================================== */}
        <div className="mt-10 overflow-hidden border-y border-black/10 py-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              COMPUTE · COLLABORATE · INNOVATE
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-300">
              CSE / BIT SINDRI
            </span>
          </div>

          <div className="mt-1 select-none whitespace-nowrap text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-none tracking-[-0.075em] text-black/[0.055]">
            COMPUTER SCIENCE
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">
            © {currentYear} CSE Society · BIT Sindri
          </p>

          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-wider text-neutral-400">
            <span>EST. 1987</span>
            <span className="text-neutral-300">/</span>
            <span>BIT SINDRI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}