"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
} from "@/components/ui/SocialIcons";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Alumni", href: "/alumni" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 30) {
        setIsScrolled(false);
        setIsHidden(false);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      setIsScrolled(currentScrollY > 55);

      const difference = currentScrollY - lastScrollY;

      if (Math.abs(difference) > 5) {
        if (difference > 0 && currentScrollY > 140) {
          setIsHidden(true);
        } else if (difference < 0) {
          setIsHidden(false);
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    updateNavbar();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-[100] w-full
        transition-all duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          isHidden && !isOpen
            ? "-translate-y-[120%] opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      {/* MAIN NAVBAR - FULL WIDTH */}
      <nav
        aria-label="Main Navigation"
        className={`
          cse-navbar
          relative flex w-full items-center justify-between
          overflow-hidden
          border-b border-black/15
          bg-[#f5f3ee]/96
          backdrop-blur-xl
          transition-all duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            isScrolled
              ? `
                h-16
                px-4 sm:px-6 lg:px-10 xl:px-12
                shadow-[0_12px_35px_rgba(0,0,0,0.09)]
              `
              : `
                h-20
                px-4 sm:px-6 lg:px-10 xl:px-12
                shadow-[0_6px_24px_rgba(0,0,0,0.055)]
              `
          }
        `}
      >
        {/* SUBTLE TOP SHINE */}
        <span
          className="
            pointer-events-none
            absolute inset-x-0 top-0 h-px
            bg-black/10
          "
        />

        {/* BRAND */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="
            group flex shrink-0 items-center gap-3.5
          "
          aria-label="Computer Science & Engineering Society home"
        >
          <div
            className={`
              flex items-center justify-center
              bg-[#141413]
              font-mono font-bold
              text-[#f5f3ee]
              shadow-sm
              transition-all duration-500
              group-hover:-translate-y-0.5
              group-hover:shadow-[0_7px_18px_rgba(0,0,0,0.14)]
              ${
                isScrolled
                  ? "h-9 w-9 text-sm sm:h-10 sm:w-10 sm:text-base"
                  : "h-10 w-10 text-base sm:h-11 sm:w-11 sm:text-lg"
              }
            `}
          >
            C
          </div>

          <div className="hidden leading-tight min-[420px]:block">
            <p className="font-mono text-sm font-bold tracking-[0.01em] text-[#141413] sm:text-base lg:text-lg">
              Computer Science & Engineering Society
            </p>

            <p className="mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-black/65 sm:text-[10px]">
              BIT SINDRI
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div
          className="
            desktop-nav-links
            hidden items-center gap-2 md:flex lg:gap-4 xl:gap-6
          "
        >
          {navLinks.map((link) => {
            const isActive = isActiveRoute(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  nav-link group relative flex items-center gap-2
                  overflow-hidden rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5
                  font-mono text-xs font-bold uppercase md:text-sm lg:text-base
                  tracking-[0.14em]
                  transition-all duration-300
                  ${isActive ? "nav-link-active" : "nav-link-inactive"}
                `}
              >
                <span
                  className={`
                    nav-link-bg absolute inset-0 z-0 rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }
                  `}
                />

                <span
                  className={`
                    nav-link-dot relative z-10 h-2 w-2 rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "scale-100 bg-emerald-500 opacity-100"
                        : "scale-0 bg-black opacity-0 group-hover:scale-100 group-hover:opacity-40"
                    }
                  `}
                />

                <span className="relative z-10">{link.name}</span>

                <span
                  className={`
                    nav-link-line absolute bottom-1.5 z-10 left-3 right-3 h-px
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "nav-link-line-active scale-x-100"
                        : "nav-link-line-inactive scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="desktop-nav-actions hidden items-center gap-3 md:flex lg:gap-4">
          <div className="nav-live hidden items-center gap-2 border-r border-black/10 pr-3 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/50" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </div>

          {/* SOCIALS */}
          <div
            className="
              flex items-center gap-1
              border-r border-black/10
              pr-3
            "
          >
            <a
              href="https://instagram.com/csesociety_bits"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="
                flex h-9 w-9 items-center justify-center
                text-black/65
                transition-all duration-300
                hover:-translate-y-0.5
                hover:text-[#141413]
              "
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>

            <a
              href="https://linkedin.com/company/csesociety-bitsindri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="
                flex h-9 w-9 items-center justify-center
                text-black/65
                transition-all duration-300
                hover:-translate-y-0.5
                hover:text-[#141413]
              "
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          {/* THEME */}
          <ThemeToggle />

          {/* JOIN */}
          <Link
            href="/join"
            className="
              group inline-flex shrink-0
              items-center gap-2.5
              border border-[#141413]
              bg-[#141413]
              px-4 py-2.5 sm:px-5 sm:py-3
              font-mono text-xs font-bold uppercase md:text-sm lg:text-base
              tracking-[0.16em]
              text-[#f5f3ee]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-neutral-800
              hover:shadow-[0_9px_25px_rgba(0,0,0,0.16)]
            "
          >
            <span>Join Society</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setIsOpen((previous) => !previous);
            setIsHidden(false);
          }}
          className="
            relative flex h-11 w-11 shrink-0
            items-center justify-center
            border border-black/15
            text-[#141413]
            transition-all duration-300
            hover:bg-black/[0.04]
            active:scale-95
            md:hidden
          "
        >
          <span
            className={`
              absolute transition-all duration-300
              ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
            `}
          >
            <Menu size={22} strokeWidth={2} />
          </span>

          <span
            className={`
              absolute transition-all duration-300
              ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}
            `}
          >
            <X size={22} strokeWidth={2} />
          </span>
        </button>
      </nav>

      {/* MOBILE MENU - FULL WIDTH */}
      <div
        id="mobile-navigation"
        className={`
          w-full overflow-hidden
          transition-all duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]
          md:hidden
          ${
            isOpen
              ? "pointer-events-auto max-h-[600px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            w-full
            border-b border-black/15
            bg-[#f5f3ee]/98
            px-5 py-6 sm:px-8
            shadow-[0_18px_45px_rgba(0,0,0,0.10)]
            backdrop-blur-xl
          "
        >
          {/* MENU HEADER */}
          <div
            className="
              mb-5 flex items-center justify-between
              border-b border-black/10
              pb-4
            "
          >
            <span
              className="
                font-mono text-xs
                font-bold uppercase
                tracking-[0.2em]
                text-black/60
              "
            >
              COMPUTER SCIENCE & ENGINEERING SOCIETY / NAVIGATION
            </span>

            <span className="font-mono text-xs font-semibold text-black/60">
              {String(navLinks.length + 1).padStart(2, "0")} ITEMS
            </span>
          </div>

          {/* LINKS */}
          <div className="flex flex-col">
            {navLinks.map((link, index) => {
              const isActive = isActiveRoute(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    nav-mobile-link group flex min-h-[58px]
                    items-center justify-between
                    border-b border-black/10
                    transition-colors duration-300
                  `}
                  style={{
                    transitionDelay: isOpen ? `${index * 55}ms` : "0ms",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold text-black/52">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        font-mono text-base sm:text-lg
                        uppercase tracking-[0.16em]
                        transition-all duration-300
                        ${
                          isActive
                            ? "font-extrabold text-[#141413]"
                            : "font-bold text-black/72 group-hover:translate-x-1 group-hover:text-[#141413]"
                        }
                      `}
                    >
                      {link.name}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className={`
                      transition-all duration-300
                      ${
                        isActive
                          ? "translate-x-0 text-[#141413] opacity-100"
                          : "text-black/52 opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* SOCIALS */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <a
              href="https://instagram.com/csesociety_bits"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex min-h-12
                items-center justify-center gap-2
                border border-black/10
                font-mono text-xs font-semibold
                uppercase tracking-[0.12em]
                text-black/65
                transition-all duration-300
                hover:border-black/20
                hover:text-[#141413]
              "
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>

            <a
              href="https://linkedin.com/company/csesociety-bitsindri"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex min-h-12
                items-center justify-center gap-2
                border border-black/10
                font-mono text-xs font-semibold
                uppercase tracking-[0.12em]
                text-black/65
                transition-all duration-300
                hover:border-black/20
                hover:text-[#141413]
              "
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/cse-bitsindri"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex min-h-12
                items-center justify-center gap-2
                border border-black/10
                font-mono text-xs font-semibold
                uppercase tracking-[0.12em]
                text-black/65
                transition-all duration-300
                hover:border-black/20
                hover:text-[#141413]
              "
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* MOBILE THEME */}
          <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-black/60">
              Appearance
            </span>
            <ThemeToggle />
          </div>

          {/* MOBILE CTA */}
          <Link
            href="/join"
            onClick={() => setIsOpen(false)}
            className="
              group mt-4
              flex min-h-14
              items-center justify-center gap-2.5
              bg-[#141413]
              px-5
              font-mono text-xs sm:text-sm
              font-bold uppercase
              tracking-[0.2em]
              text-[#f5f3ee]
              transition-all duration-300
              active:scale-[0.99]
            "
          >
            <span>Join Society</span>

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
