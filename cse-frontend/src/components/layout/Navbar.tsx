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

      /*
       * Top of page
       * Always show the full navigation.
       */
      if (currentScrollY <= 30) {
        setIsScrolled(false);
        setIsHidden(false);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      setIsScrolled(currentScrollY > 55);

      /*
       * Small threshold prevents jitter when
       * the user makes tiny scroll movements.
       */
      const difference = currentScrollY - lastScrollY;

      if (Math.abs(difference) > 5) {
        if (difference > 0 && currentScrollY > 140) {
          // scrolling down
          setIsHidden(true);
        } else if (difference < 0) {
          // scrolling up
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

  /*
   * Lock page scroll when mobile menu is open.
   */
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

  /*
   * Active route.
   */
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-[100]
        transition-all duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          isHidden && !isOpen
            ? "-translate-y-[120%] opacity-0"
            : "translate-y-0 opacity-100"
        }
        ${
          isScrolled
            ? "pt-2"
            : "pt-3 sm:pt-4"
        }
      `}
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-3 sm:px-5 lg:px-7
        "
      >
        {/* =================================================
            MAIN NAVBAR
        ================================================== */}

        <nav
          aria-label="Main Navigation"
          className={`
            relative flex items-center justify-between
            overflow-hidden
            border border-black/15
            bg-[#f5f3ee]/96
            backdrop-blur-xl
            transition-all duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              isScrolled
                ? `
                  h-14
                  px-3
                  shadow-[0_12px_35px_rgba(0,0,0,0.09)]
                  sm:h-[58px]
                  sm:px-5
                `
                : `
                  h-16
                  px-3.5
                  shadow-[0_6px_24px_rgba(0,0,0,0.055)]
                  sm:h-[66px]
                  sm:px-5
                `
            }
          `}
        >
          {/* =================================================
              SUBTLE TOP SHINE
          ================================================== */}

          <span
            className="
              pointer-events-none
              absolute inset-x-0 top-0 h-px
              bg-black/10
            "
          />

          {/* =================================================
              BRAND
          ================================================== */}

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="
              group flex shrink-0 items-center gap-3
            "
            aria-label="CSE Society home"
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
                    ? "h-8 w-8 text-xs"
                    : "h-9 w-9 text-sm"
                }
              `}
            >
              C
            </div>

            <div className="hidden leading-none min-[420px]:block">
              <p className="font-mono text-[11px] font-semibold tracking-[0.02em] text-[#141413] sm:text-xs">
                CSE SOCIETY
              </p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.28em] text-neutral-500">
                BIT SINDRI
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div
            className="
              absolute left-1/2
              hidden -translate-x-1/2
              items-center gap-7
              md:flex
              lg:gap-9
            "
          >
            {navLinks.map((link) => {
              const isActive = isActiveRoute(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    group relative py-2
                    font-mono text-[11px]
                    font-semibold uppercase
                    tracking-[0.18em]
                    transition-colors duration-300
                    ${
                      isActive
                        ? "text-[#141413]"
                        : "text-neutral-500 hover:text-[#141413]"
                    }
                  `}
                >
                  <span>{link.name}</span>

                  <span
                    className={`
                      absolute bottom-0 left-0 h-px
                      bg-[#141413]
                      transition-all duration-300
                      ease-out
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP RIGHT SIDE
          ================================================== */}

          <div className="ml-auto hidden items-center gap-3 md:flex">
            {/* SOCIALS */}

            <div
              className="
                flex items-center gap-0.5
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
                  flex h-8 w-8 items-center justify-center
                  text-neutral-500
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:text-[#141413]
                "
              >
                <InstagramIcon className="h-[15px] w-[15px]" />
              </a>

              <a
                href="https://linkedin.com/company/csesociety-bitsindri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="
                  flex h-8 w-8 items-center justify-center
                  text-neutral-500
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:text-[#141413]
                "
              >
                <LinkedinIcon className="h-[15px] w-[15px]" />
              </a>

              <a
                href="https://github.com/cse-bitsindri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="
                  flex h-8 w-8 items-center justify-center
                  text-neutral-500
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:text-[#141413]
                "
              >
                <GithubIcon className="h-[15px] w-[15px]" />
              </a>
            </div>

            {/* JOIN */}

            <Link
              href="/join"
              className="
                group inline-flex shrink-0
                items-center gap-2
                border border-[#141413]
                bg-[#141413]
                px-4 py-2.5
                font-mono text-[10px]
                font-bold uppercase
                tracking-[0.18em]
                text-[#f5f3ee]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-neutral-800
                hover:shadow-[0_9px_25px_rgba(0,0,0,0.16)]
                lg:px-5
              "
            >
              <span>Join Society</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

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
              relative flex h-10 w-10 shrink-0
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
                ${
                  isOpen
                    ? "rotate-90 opacity-0"
                    : "rotate-0 opacity-100"
                }
              `}
            >
              <Menu
                size={19}
                strokeWidth={1.7}
              />
            </span>

            <span
              className={`
                absolute transition-all duration-300
                ${
                  isOpen
                    ? "rotate-0 opacity-100"
                    : "-rotate-90 opacity-0"
                }
              `}
            >
              <X
                size={19}
                strokeWidth={1.7}
              />
            </span>
          </button>
        </nav>

        {/* =================================================
            MOBILE MENU
        ================================================== */}

        <div
          id="mobile-navigation"
          className={`
            overflow-hidden
            transition-all duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]
            md:hidden
            ${
              isOpen
                ? "pointer-events-auto max-h-[520px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              mt-2
              border border-black/15
              bg-[#f5f3ee]/98
              p-5
              shadow-[0_18px_45px_rgba(0,0,0,0.10)]
              backdrop-blur-xl
              sm:p-6
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
                  font-mono text-[9px]
                  font-semibold uppercase
                  tracking-[0.24em]
                  text-neutral-400
                "
              >
                CSE SOCIETY / NAVIGATION
              </span>

              <span className="font-mono text-[9px] text-neutral-400">
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
                    className="
                      group flex min-h-[54px]
                      items-center justify-between
                      border-b border-black/10
                      transition-colors duration-300
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[9px] text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          font-mono text-sm
                          uppercase tracking-[0.16em]
                          transition-all duration-300
                          ${
                            isActive
                              ? "font-bold text-[#141413]"
                              : "text-neutral-600 group-hover:translate-x-1 group-hover:text-[#141413]"
                          }
                        `}
                      >
                        {link.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      className={`
                        transition-all duration-300
                        ${
                          isActive
                            ? "translate-x-0 text-[#141413] opacity-100"
                            : "text-neutral-400 opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* SOCIALS */}

            <div className="mt-5 grid grid-cols-3 gap-2">
              <a
                href="https://instagram.com/csesociety_bits"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex min-h-11
                  items-center justify-center gap-2
                  border border-black/10
                  font-mono text-[9px]
                  uppercase tracking-[0.12em]
                  text-neutral-500
                  transition-all duration-300
                  hover:border-black/20
                  hover:text-[#141413]
                "
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                Instagram
              </a>

              <a
                href="https://linkedin.com/company/csesociety-bitsindri"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex min-h-11
                  items-center justify-center gap-2
                  border border-black/10
                  font-mono text-[9px]
                  uppercase tracking-[0.12em]
                  text-neutral-500
                  transition-all duration-300
                  hover:border-black/20
                  hover:text-[#141413]
                "
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                LinkedIn
              </a>

              <a
                href="https://github.com/cse-bitsindri"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex min-h-11
                  items-center justify-center gap-2
                  border border-black/10
                  font-mono text-[9px]
                  uppercase tracking-[0.12em]
                  text-neutral-500
                  transition-all duration-300
                  hover:border-black/20
                  hover:text-[#141413]
                "
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            </div>

            {/* MOBILE CTA */}

            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="
                group mt-3
                flex min-h-12
                items-center justify-center gap-2
                bg-[#141413]
                px-5
                font-mono text-[10px]
                font-bold uppercase
                tracking-[0.2em]
                text-[#f5f3ee]
                transition-all duration-300
                active:scale-[0.99]
              "
            >
              <span>Join Society</span>

              <ArrowUpRight
                size={14}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}