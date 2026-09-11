"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Globe2,
  HeartHandshake,
  Search,
  Users,
} from "lucide-react";

import { alumni } from "@/data/alumni";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

const ITEMS_PER_PAGE = 5;

/* =========================================================
   REVEAL
   ========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      className={`alumni-reveal ${
        visible ? "alumni-reveal-visible" : ""
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   SECTION LABEL
   ========================================================= */

function SectionLabel({
  number,
  title,
  category,
}: {
  number: string;
  title: string;
  category: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400 sm:gap-3 sm:text-[9px]">
      <span>{number}</span>

      <span className="h-px w-7 bg-black/15 dark:bg-white/15" />

      <span className="font-semibold text-neutral-500 dark:text-neutral-400">
        {title}
      </span>

      <span className="text-neutral-300 dark:text-white/20">/</span>

      <span>{category}</span>
    </div>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function AlumniPage() {
  const [activeAlumni, setActiveAlumni] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  /* =======================================================
     FILTERED ALUMNI
     ======================================================= */

  const filteredAlumni = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return alumni;
    }

    return alumni.filter(
      (person) =>
        person.name.toLowerCase().includes(query) ||
        person.company.toLowerCase().includes(query) ||
        person.role.toLowerCase().includes(query) ||
        person.batch.toString().includes(query),
    );
  }, [searchQuery]);

  /* =======================================================
     PAGINATION
     ======================================================= */

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAlumni.length / ITEMS_PER_PAGE),
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex =
    (safeCurrentPage - 1) * ITEMS_PER_PAGE;

  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    filteredAlumni.length,
  );

  const paginatedAlumni = filteredAlumni.slice(
    startIndex,
    endIndex,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  /* =======================================================
     FEATURED
     ======================================================= */

  const featuredAlumni = alumni.slice(0, 4);

  /* =======================================================
     COMPANY MARQUEE
     ======================================================= */

  const companyMarquee = useMemo(() => {
    const companies = Array.from(
      new Set(
        alumni.map((person) =>
          person.company.toUpperCase(),
        ),
      ),
    );

    return [...companies, ...companies];
  }, []);

  /* =======================================================
     PAGE NUMBERS
     ======================================================= */

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1,
      );
    }

    if (safeCurrentPage <= 3) {
      return [1, 2, 3, 4, totalPages];
    }

    if (safeCurrentPage >= totalPages - 2) {
      return [
        1,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      safeCurrentPage - 1,
      safeCurrentPage,
      safeCurrentPage + 1,
      totalPages,
    ];
  }, [safeCurrentPage, totalPages]);

  /* =======================================================
     PAGE NAVIGATION
     ======================================================= */

  const goToPage = (page: number) => {
    const nextPage = Math.max(
      1,
      Math.min(page, totalPages),
    );

    setCurrentPage(nextPage);

    requestAnimationFrame(() => {
      document
        .getElementById("alumni-directory")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <main className="alumni-page w-full overflow-x-hidden bg-[var(--cse-bg)] text-[var(--cse-text)]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[650px] overflow-hidden border-b border-black/10 px-5 pb-14 pt-24 dark:border-white/10 sm:min-h-[690px] sm:px-8 sm:pb-16 sm:pt-28 lg:min-h-[720px] lg:px-10 lg:pb-20 lg:pt-32">

        {/* animated technical background */}

        <div className="alumni-tech-field pointer-events-none absolute inset-0">

          <div className="alumni-grid absolute inset-0" />

          <div className="alumni-scan alumni-scan-one absolute left-0 top-0 h-px w-full" />

          <div className="alumni-scan alumni-scan-two absolute left-0 top-0 h-px w-full" />

          <div className="alumni-glow alumni-glow-one absolute left-[18%] top-[28%]" />

          <div className="alumni-glow alumni-glow-two absolute right-[22%] top-[62%]" />

          <span className="alumni-node alumni-node-one absolute left-[24%] top-[38%]" />

          <span className="alumni-node alumni-node-two absolute left-[58%] top-[24%]" />

          <span className="alumni-node alumni-node-three absolute right-[18%] top-[64%]" />

          <span className="alumni-node alumni-node-four absolute left-[72%] top-[82%]" />

        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* section label */}

          <Reveal>
            <SectionLabel
              number="01"
              title="ALUMNI NETWORK & COMMUNITY"
              category="BIT SINDRI"
            />
          </Reveal>

          {/* hero content */}

          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <Reveal delay={80}>

                <h1 className="max-w-5xl text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.8] tracking-[-0.08em]">

                  Built here.

                  <br />

                  <span className="relative inline-block text-[var(--cse-text-soft)]">

                    Impact beyond.

                    <span className="alumni-title-line absolute -bottom-2 left-0 h-px w-0 bg-[#20c997]" />

                  </span>

                </h1>

              </Reveal>

              <Reveal delay={160}>

                <p className="mt-7 max-w-2xl text-[13px] leading-6 text-neutral-600 dark:text-neutral-400 sm:text-[15px]">

                  The Department of Computer Science &
                  Engineering at BIT Sindri boasts an
                  exceptional, tightly-knit alumni network
                  holding key positions globally—from tech
                  giants like Microsoft, Google, AWS, PayPal,
                  Samsung, and JPMorgan Chase to prominent
                  public sector institutions.

                </p>

              </Reveal>

            </div>

            {/* stats */}

            <Reveal
              delay={220}
              className="lg:col-span-4"
            >

              <div className="grid grid-cols-2 gap-6 border-t border-black/10 pt-5 dark:border-white/10 sm:gap-8">

                <div className="alumni-stat">

                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                    PROFILES
                  </span>

                  <div className="mt-1 text-4xl font-medium tracking-[-0.06em]">
                    {String(alumni.length).padStart(2, "0")}+
                  </div>

                  <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-neutral-400">
                    IN DIRECTORY
                  </p>

                </div>

                <div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                    NETWORK
                  </span>

                  <div className="mt-2 space-y-1 font-mono text-[8px] leading-4 tracking-[0.12em] text-neutral-600 dark:text-neutral-400">

                    <div className="alumni-network-word">
                      GLOBAL REACH
                    </div>

                    <div className="alumni-network-word">
                      ACTIVE BOND
                    </div>

                    <div className="alumni-network-word">
                      MENTORSHIP
                    </div>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

          {/* floating network visual */}

          <div className="pointer-events-none absolute bottom-20 right-[6%] hidden h-44 w-44 lg:block">

            <div className="alumni-network-orbit alumni-network-orbit-outer" />

            <div className="alumni-network-orbit alumni-network-orbit-middle" />

            <div className="alumni-network-orbit alumni-network-orbit-inner" />

            <div className="alumni-network-core">
              <span />
            </div>

            <span className="alumni-network-dot alumni-network-dot-a" />
            <span className="alumni-network-dot alumni-network-dot-b" />
            <span className="alumni-network-dot alumni-network-dot-c" />

            <span className="absolute -right-5 top-1/2 font-mono text-[7px] tracking-[0.2em] text-neutral-400">
              NETWORK
            </span>

          </div>

          {/* status */}

          <Reveal delay={280}>

            <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/10">

              <div className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.18em] text-neutral-400">

                <span className="relative flex h-1.5 w-1.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />

                </span>

                CSE ALUMNI NETWORK

              </div>

              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-neutral-300 dark:text-white/20">
                CONNECTIONS BEYOND CAMPUS
              </span>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          COMPANY MARQUEE
      ====================================================== */}

      <div className="alumni-marquee-wrap overflow-hidden border-b border-black/10 bg-[#151514] py-3 text-white dark:border-white/10">

        <div className="flex w-max animate-[alumniMarquee_32s_linear_infinite] gap-10 whitespace-nowrap font-mono text-[8px] tracking-[0.2em] text-white/55 sm:text-[9px]">

          {companyMarquee.map((company, index) => (

            <span
              key={`${company}-${index}`}
              className="flex items-center gap-10"
            >

              {company}

              <span className="text-emerald-400/50">
                ✦
              </span>

            </span>

          ))}

        </div>

      </div>


      {/* =====================================================
          FEATURED ALUMNI
      ====================================================== */}

      <section className="border-b border-black/10 bg-[var(--cse-surface)] px-5 py-14 dark:border-white/10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="flex flex-wrap items-end justify-between gap-6">

              <div>

                <SectionLabel
                  number="02"
                  title="FEATURED ALUMNI"
                  category="CAREERS & JOURNEYS"
                />

                <h2 className="mt-4 text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.07em]">

                  Pioneers in{" "}

                  <span className="text-[var(--cse-text-soft)]">
                    industry.
                  </span>

                </h2>

              </div>

              <Link
                href="/join"
                className="group hidden items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] sm:inline-flex"
              >

                CONNECT WITH US

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />

              </Link>

            </div>

          </Reveal>


          {/* featured cards */}

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            {featuredAlumni.map((person, index) => {

              const active =
                activeAlumni === person.name;

              return (

                <Reveal
                  key={person.name}
                  delay={index * 80}
                >

                  <article
                    onMouseEnter={() =>
                      setActiveAlumni(person.name)
                    }
                    onMouseLeave={() =>
                      setActiveAlumni(null)
                    }
                    className={`alumni-feature-card group relative flex min-h-[300px] flex-col justify-between overflow-hidden border p-6 sm:p-8 ${
                      active
                        ? "border-black bg-[var(--cse-surface-2)] shadow-xl dark:border-white/25"
                        : "border-black/10 bg-[var(--cse-bg)] dark:border-white/10"
                    }`}
                  >

                    {/* animated sweep */}

                    <div className="alumni-card-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-1/3" />


                    {/* corner marker */}

                    <div className="pointer-events-none absolute right-0 top-0 h-16 w-16">

                      <div className="absolute right-4 top-4 h-2 w-2 border-r border-t border-black/20 dark:border-white/20" />

                    </div>


                    {/* watermark */}

                    <div
                      className={`pointer-events-none absolute -bottom-5 right-3 select-none font-mono text-6xl font-black tracking-[-0.08em] transition-all duration-700 sm:text-7xl ${
                        active
                          ? "translate-x-2 scale-105 text-black/[0.07] dark:text-white/[0.055]"
                          : "text-black/[0.025] dark:text-white/[0.025]"
                      }`}
                    >

                      {person.company
                        .toUpperCase()
                        .slice(0, 10)}

                    </div>


                    {/* top */}

                    <div className="relative z-10">

                      <div className="flex items-start justify-between gap-4">

                        <div className="flex min-w-0 items-center gap-3">

                          <span className="font-mono text-[9px] font-semibold text-neutral-400">
                            {String(index + 1).padStart(
                              2,
                              "0",
                            )}
                          </span>

                          <span className="h-px w-6 shrink-0 bg-black/15 dark:bg-white/15" />

                          <span className="truncate font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">

                            BIT SINDRI · BATCH &apos;
                            {String(person.batch).slice(-2)}

                          </span>

                        </div>

                        <span className="shrink-0 border border-black/10 bg-[var(--cse-surface)] px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.12em] dark:border-white/10">

                          {person.company}

                        </span>

                      </div>


                      {/* name */}

                      <div className="mt-9">

                        <h3 className="text-[clamp(2.1rem,3.5vw,3.6rem)] font-medium leading-[0.9] tracking-[-0.07em]">

                          {person.name}

                        </h3>

                        <p className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600 dark:text-neutral-300">

                          {person.role}

                        </p>

                        <p className="mt-1 font-mono text-[10px] text-neutral-500">

                          {person.company}

                        </p>

                      </div>

                    </div>


                    {/* bottom */}

                    <div className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-black/10 pt-4 dark:border-white/10">

                      <div className="flex min-w-0 items-center gap-2 font-mono text-[8px] uppercase tracking-[0.13em] text-neutral-500">

                        <BriefcaseBusiness
                          size={12}
                          className="shrink-0"
                        />

                        <span className="truncate">
                          {person.company}
                        </span>

                      </div>


                      <a
                        href={person.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="alumni-link-button inline-flex shrink-0 items-center gap-2 border border-black/15 bg-[#151514] px-3.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 dark:border-white/15"
                      >

                        <LinkedinIcon className="h-3.5 w-3.5" />

                        <span className="hidden sm:inline">
                          LinkedIn
                        </span>

                        <ArrowUpRight size={12} />

                      </a>

                    </div>

                  </article>

                </Reveal>

              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          DIRECTORY
      ====================================================== */}

      <section
        id="alumni-directory"
        className="scroll-mt-24 border-b border-black/10 px-5 py-14 dark:border-white/10 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

              <div>

                <SectionLabel
                  number="03"
                  title="ALUMNI DIRECTORY"
                  category="SEARCH & EXPLORE"
                />

                <h2 className="mt-4 max-w-4xl text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.07em]">

                  A network that{" "}

                  <span className="text-[var(--cse-text-soft)]">
                    keeps growing.
                  </span>

                </h2>

              </div>


              {/* search */}

              <div className="w-full lg:w-auto">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                  <div className="relative w-full sm:w-72">

                    <Search
                      size={14}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                    />

                    <input
                      type="text"
                      placeholder="Search name, company, role..."
                      value={searchQuery}
                      onChange={(event) =>
                        setSearchQuery(event.target.value)
                      }
                      className="h-10 w-full border border-black/15 bg-[var(--cse-surface)] pl-9 pr-9 font-mono text-[10px] text-[var(--cse-text)] outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black/10 dark:border-white/15 dark:focus:border-white/30"
                    />

                    {searchQuery && (

                      <button
                        type="button"
                        onClick={() =>
                          setSearchQuery("")
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[9px] text-neutral-400 transition-colors hover:text-[var(--cse-text)]"
                        aria-label="Clear search"
                      >
                        ESC
                      </button>

                    )}

                  </div>

                  <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-neutral-500">

                    {String(
                      filteredAlumni.length,
                    ).padStart(2, "0")}{" "}
                    PROFILES

                  </span>

                </div>

              </div>

            </div>

          </Reveal>


          {/* directory meta */}

          <Reveal delay={80}>

            <div className="mt-9 flex flex-col gap-3 border-y border-black/10 py-3 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-400">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span>

                  SHOWING{" "}

                  {filteredAlumni.length === 0
                    ? "00"
                    : String(
                        startIndex + 1,
                      ).padStart(2, "0")}{" "}

                  —{" "}

                  {String(endIndex).padStart(
                    2,
                    "0",
                  )}

                </span>

                <span>/</span>

                <span>

                  {String(
                    filteredAlumni.length,
                  ).padStart(2, "0")}{" "}
                  TOTAL

                </span>

              </div>

              <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-400">

                PAGE{" "}

                {String(
                  safeCurrentPage,
                ).padStart(2, "0")}{" "}

                /{" "}

                {String(totalPages).padStart(
                  2,
                  "0",
                )}

              </div>

            </div>

          </Reveal>


          {/* directory rows */}

          <div className="mt-0 border-t border-black/10 dark:border-white/10">

            {paginatedAlumni.length === 0 ? (

              <Reveal>

                <div className="flex min-h-[260px] flex-col items-center justify-center border-b border-black/10 text-center dark:border-white/10">

                  <div className="mb-4 flex h-12 w-12 items-center justify-center border border-black/10 dark:border-white/10">

                    <Search
                      size={18}
                      className="text-neutral-400"
                    />

                  </div>

                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em]">
                    No matching profiles
                  </p>

                  <p className="mt-2 max-w-xs text-[11px] text-neutral-500">
                    Try searching with another name,
                    company, role, or batch.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSearchQuery("")
                    }
                    className="mt-5 border border-black/15 px-4 py-2 font-mono text-[8px] font-bold uppercase tracking-[0.15em] transition-all hover:bg-black hover:text-white dark:border-white/15 dark:hover:bg-white dark:hover:text-black"
                  >
                    Clear Search
                  </button>

                </div>

              </Reveal>

            ) : (

              paginatedAlumni.map(
                (person, index) => {

                  const globalIndex =
                    startIndex + index;

                  return (

                    <Reveal
                      key={`${person.name}-${globalIndex}`}
                      delay={index * 55}
                    >

                      <article className="alumni-directory-row group relative grid gap-4 border-b border-black/10 py-6 dark:border-white/10 sm:grid-cols-12 sm:items-center sm:gap-5 sm:px-3">

                        {/* animated bottom line */}

                        <span className="alumni-row-line pointer-events-none absolute bottom-0 left-0 h-px w-0" />


                        {/* number */}

                        <div className="relative z-10 sm:col-span-1">

                          <span className="font-mono text-[9px] font-semibold text-neutral-400 transition-colors group-hover:text-[var(--cse-text)]">

                            {String(
                              globalIndex + 1,
                            ).padStart(2, "0")}

                          </span>

                        </div>


                        {/* person */}

                        <div className="relative z-10 min-w-0 sm:col-span-4">

                          <h3 className="text-base font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">

                            {person.name}

                          </h3>

                          <span className="mt-1 inline-block border border-black/10 bg-[var(--cse-surface)] px-2.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:border-white/10">

                            B.Tech. &apos;
                            {String(
                              person.batch,
                            ).slice(-2)}

                          </span>

                        </div>


                        {/* role/company */}

                        <div className="relative z-10 sm:col-span-4">

                          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-700 dark:text-neutral-300">

                            {person.role}

                          </p>

                          <p className="mt-1 font-mono text-[10px] text-neutral-500">

                            {person.company}

                          </p>

                        </div>


                        {/* action */}

                        <div className="relative z-10 flex items-center justify-between gap-4 sm:col-span-3 sm:justify-end">

                          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-neutral-300 transition-colors group-hover:text-neutral-500 dark:text-white/20 dark:group-hover:text-white/40">

                            PROFILE

                          </span>

                          <a
                            href={person.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`View ${person.name}'s LinkedIn profile`}
                            className="alumni-directory-link inline-flex items-center gap-2 border border-black/15 bg-[var(--cse-surface)] px-3.5 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.12em] transition-all duration-300 dark:border-white/15"
                          >

                            <LinkedinIcon className="h-3.5 w-3.5" />

                            <span>
                              LinkedIn
                            </span>

                            <ArrowUpRight
                              size={12}
                              strokeWidth={2}
                            />

                          </a>

                        </div>

                      </article>

                    </Reveal>

                  );
                },
              )

            )}

          </div>


          {/* ===================================================
              PAGINATION
          ==================================================== */}

          {filteredAlumni.length > 0 &&
            totalPages > 1 && (

              <Reveal delay={100}>

                <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">

                  {/* previous */}

                  <button
                    type="button"
                    onClick={() =>
                      goToPage(
                        safeCurrentPage - 1,
                      )
                    }
                    disabled={
                      safeCurrentPage === 1
                    }
                    className="group inline-flex w-fit items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-neutral-500 transition-colors hover:text-[var(--cse-text)] disabled:pointer-events-none disabled:opacity-25"
                  >

                    <ArrowLeft
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    Previous

                  </button>


                  {/* pages */}

                  <div className="flex items-center gap-1">

                    {pageNumbers.map(
                      (page, index) => {

                        const previous =
                          pageNumbers[
                            index - 1
                          ];

                        const needsGap =
                          index > 0 &&
                          page - previous >
                            1;

                        return (

                          <React.Fragment
                            key={page}
                          >

                            {needsGap && (

                              <span className="px-2 font-mono text-[8px] text-neutral-300 dark:text-white/20">
                                …
                              </span>

                            )}

                            <button
                              type="button"
                              onClick={() =>
                                goToPage(page)
                              }
                              aria-current={
                                page ===
                                safeCurrentPage
                                  ? "page"
                                  : undefined
                              }
                              className={`alumni-page-number flex h-8 min-w-8 items-center justify-center border px-2 font-mono text-[8px] font-bold transition-all duration-300 ${
                                page ===
                                safeCurrentPage
                                  ? "border-[#151514] bg-[#151514] text-white shadow-sm dark:border-white dark:bg-white dark:text-black"
                                  : "border-black/10 text-neutral-500 dark:border-white/10"
                              }`}
                            >

                              {String(
                                page,
                              ).padStart(2, "0")}

                            </button>

                          </React.Fragment>

                        );
                      },
                    )}

                  </div>


                  {/* next */}

                  <button
                    type="button"
                    onClick={() =>
                      goToPage(
                        safeCurrentPage + 1,
                      )
                    }
                    disabled={
                      safeCurrentPage ===
                      totalPages
                    }
                    className="group inline-flex w-fit items-center gap-2 self-end font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-neutral-500 transition-colors hover:text-[var(--cse-text)] disabled:pointer-events-none disabled:opacity-25 sm:self-auto"
                  >

                    Next

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </Reveal>

            )}


          {/* mobile indicator */}

          {filteredAlumni.length > 0 &&
            totalPages > 1 && (

              <div className="mt-4 text-center font-mono text-[7px] uppercase tracking-[0.18em] text-neutral-400 sm:hidden">

                {safeCurrentPage} of{" "}
                {totalPages}

              </div>

            )}

        </div>

      </section>


      {/* =====================================================
          NETWORK CALLOUT
      ====================================================== */}

      <section className="border-b border-black/10 bg-[var(--cse-surface)] px-5 py-14 dark:border-white/10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="alumni-callout relative overflow-hidden border border-black/10 bg-[var(--cse-bg)] p-6 dark:border-white/10 sm:p-8 lg:p-10">

              {/* animated technical lines */}

              <div className="alumni-callout-line alumni-callout-line-one pointer-events-none absolute left-0 top-0 h-px w-1/3" />

              <div className="alumni-callout-line alumni-callout-line-two pointer-events-none absolute bottom-0 right-0 h-px w-1/4" />

              <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-black/5 dark:bg-white/5" />

              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

                <div className="lg:col-span-8">

                  <div className="flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-500">

                    <Globe2 size={13} />

                    EXPANSIVE ALUMNI FOOTPRINT

                  </div>

                  <h3 className="mt-4 max-w-3xl text-[clamp(1.8rem,3vw,3rem)] font-medium leading-[0.95] tracking-[-0.05em]">

                    Hundreds more alumni across
                    leadership & engineering roles.

                  </h3>

                  <p className="mt-4 max-w-3xl text-[11px] leading-5 text-neutral-600 dark:text-neutral-400 sm:text-[13px]">

                    Beyond the spotlight directory,
                    BIT Sindri Computer Science &
                    Engineering alumni continue to
                    contribute across engineering,
                    research, technology, leadership and
                    entrepreneurship.

                  </p>

                </div>

                <div className="grid gap-3 border-t border-black/10 pt-5 dark:border-white/10 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

                  <div className="alumni-callout-item flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.14em]">

                    <HeartHandshake size={14} />

                    Strong Alumni Bond

                  </div>

                  <div className="alumni-callout-item flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.14em]">

                    <Users size={14} />

                    Active Mentorship

                  </div>

                  <div className="alumni-callout-item flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.14em]">

                    <BriefcaseBusiness size={14} />

                    Global Industry Reach

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          MENTORSHIP CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#151514] px-5 py-16 text-[#f7f6f1] sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* decorative orbit */}

        <div className="pointer-events-none absolute -right-40 -top-44 h-[430px] w-[430px] rounded-full border border-white/[0.05] sm:h-[560px] sm:w-[560px]" />

        <div className="pointer-events-none absolute -right-24 -top-28 h-[330px] w-[330px] rounded-full border border-dashed border-white/[0.07] animate-[alumniOrbit_30s_linear_infinite] sm:h-[430px] sm:w-[430px]" />

        <div className="pointer-events-none absolute left-[8%] top-[45%] h-px w-24 bg-white/[0.06]" />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>

            <SectionLabel
              number="04"
              title="ALUMNI ENGAGEMENT"
              category="MENTORSHIP"
            />

          </Reveal>


          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">

            <Reveal
              delay={80}
              className="lg:col-span-8"
            >

              <h2 className="text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.85] tracking-[-0.07em]">

                The connection

                <br />

                <span className="text-white/25">
                  continues.
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-[12px] leading-6 text-white/50 sm:text-[14px]">

                With a rich history spanning decades,
                our alumni network creates opportunities
                for mentorship, technical guidance,
                career conversations and meaningful
                connections with current students.

              </p>

            </Reveal>


            {/* orbit */}

            <Reveal
              delay={160}
              className="lg:col-span-4 lg:flex lg:justify-end"
            >

              <div className="relative h-48 w-48 sm:h-56 sm:w-56">

                <div className="absolute inset-0 rounded-full border border-white/10" />

                <div className="absolute inset-5 rounded-full border border-dashed border-white/10 animate-[alumniOrbit_24s_linear_infinite]" />

                <div className="absolute inset-[20%] rounded-full border border-white/[0.06]" />

                <div className="absolute inset-[31%] rounded-full border border-white/10 bg-white/[0.025]" />

                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,.25)] animate-pulse" />

                <span className="absolute right-1 top-[27%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  CONNECT
                </span>

                <span className="absolute right-[-5px] top-[47%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  MENTOR
                </span>

                <span className="absolute right-1 top-[67%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  GUIDE
                </span>

              </div>

            </Reveal>

          </div>


          <Reveal delay={220}>

            <Link
              href="/join"
              className="alumni-main-cta group mt-10 inline-flex w-full items-center justify-center gap-3 bg-[#f7f6f1] px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#151514] transition-all duration-300 sm:w-fit"
            >

              Connect With Society

              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          LOCAL ANIMATION SYSTEM
      ====================================================== */}

      <style jsx global>{`

        /* =====================================================
           BASE
        ====================================================== */

        .alumni-page a,
        .alumni-page button,
        .alumni-page [role="button"] {
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .alumni-page button:disabled {
          cursor: not-allowed;
        }


        /* =====================================================
           REVEAL
        ====================================================== */

        .alumni-reveal {
          opacity: 0;
          transform: translate3d(0, 22px, 0);
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .alumni-reveal-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }


        /* =====================================================
           HERO GRID
        ====================================================== */

        .alumni-tech-field {
          overflow: hidden;
        }

        .alumni-grid {
          position: absolute;
          inset: -80px;
          background-image:
            linear-gradient(
              currentColor 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              currentColor 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          opacity: 0.035;
          animation:
            alumniGridDrift 18s linear infinite;
          will-change: transform;
        }

        html.dark-theme .alumni-grid {
          opacity: 0.055;
        }

        @keyframes alumniGridDrift {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(60px, 60px, 0);
          }
        }


        /* =====================================================
           SCANNING LINES
        ====================================================== */

        .alumni-scan {
          opacity: 0;
          background:
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(32, 201, 151, 0) 20%,
              rgba(32, 201, 151, 0.2) 50%,
              rgba(32, 201, 151, 0) 80%,
              transparent 100%
            );
        }

        .alumni-scan-one {
          animation:
            alumniScan 8s ease-in-out infinite;
        }

        .alumni-scan-two {
          animation:
            alumniScan 11s ease-in-out 3s infinite;
        }

        @keyframes alumniScan {

          0%,
          100% {
            transform: translateY(-20px);
            opacity: 0;
          }

          15% {
            opacity: 0.35;
          }

          50% {
            transform: translateY(430px);
            opacity: 0.5;
          }

          75% {
            opacity: 0;
          }

        }


        /* =====================================================
           HERO NODES
        ====================================================== */

        .alumni-glow {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: rgba(32, 201, 151, 0.65);
          box-shadow:
            0 0 0 4px rgba(32, 201, 151, 0.04),
            0 0 25px rgba(32, 201, 151, 0.25);
        }

        .alumni-glow-one {
          animation:
            alumniFloat 7s ease-in-out infinite;
        }

        .alumni-glow-two {
          animation:
            alumniFloat 9s ease-in-out 1.5s infinite;
        }

        @keyframes alumniFloat {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(18px, -14px, 0)
              scale(1.5);
          }

        }

        .alumni-node {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.35;
          animation:
            alumniNodePulse 4s ease-in-out infinite;
        }

        .alumni-node-two {
          animation-delay: 0.8s;
        }

        .alumni-node-three {
          animation-delay: 1.6s;
        }

        .alumni-node-four {
          animation-delay: 2.4s;
        }

        @keyframes alumniNodePulse {

          0%,
          100% {
            transform: scale(0.7);
            opacity: 0.15;
          }

          50% {
            transform: scale(1.8);
            opacity: 0.65;
          }

        }


        /* =====================================================
           HERO TITLE
        ====================================================== */

        .alumni-title-line {
          transition:
            width 900ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .alumni-page
          .alumni-reveal-visible
          .alumni-title-line {
          width: 100%;
        }


        /* =====================================================
           NETWORK WORDS
        ====================================================== */

        .alumni-network-word {
          position: relative;
          transition:
            transform 350ms ease,
            color 350ms ease;
        }

        .alumni-network-word::before {
          content: "";
          display: inline-block;
          width: 0;
          height: 1px;
          margin-right: 0;
          vertical-align: middle;
          background: #20c997;
          transition:
            width 300ms ease,
            margin-right 300ms ease;
        }

        .alumni-network-word:hover {
          transform: translateX(5px);
          color: var(--cse-text);
        }

        .alumni-network-word:hover::before {
          width: 12px;
          margin-right: 7px;
        }


        /* =====================================================
           HERO NETWORK ORBIT
        ====================================================== */

        .alumni-network-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid currentColor;
          opacity: 0.08;
        }

        .alumni-network-orbit-outer {
          inset: 2%;
          animation:
            alumniOrbitReverse 22s linear infinite;
        }

        .alumni-network-orbit-middle {
          inset: 13%;
          border-style: dashed;
          opacity: 0.07;
          animation:
            alumniOrbit 17s linear infinite;
        }

        .alumni-network-orbit-inner {
          inset: 25%;
          opacity: 0.1;
          animation:
            alumniOrbitReverse 11s linear infinite;
        }

        @keyframes alumniOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        @keyframes alumniOrbitReverse {

          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }

        }

        .alumni-network-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 28px;
          height: 28px;
          transform:
            translate(-50%, -50%);
          display: grid;
          place-items: center;
          border:
            1px solid currentColor;
          border-radius: 50%;
        }

        .alumni-network-core span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #20c997;
          box-shadow:
            0 0 20px
            rgba(32, 201, 151, 0.45);
          animation:
            alumniCorePulse 2.5s ease-in-out infinite;
        }

        @keyframes alumniCorePulse {

          0%,
          100% {
            transform: scale(0.75);
          }

          50% {
            transform: scale(1.35);
          }

        }

        .alumni-network-dot {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.5;
        }

        .alumni-network-dot-a {
          left: 9%;
          top: 44%;
          animation:
            alumniDotA 6s ease-in-out infinite;
        }

        .alumni-network-dot-b {
          right: 9%;
          top: 24%;
          animation:
            alumniDotB 7s ease-in-out infinite;
        }

        .alumni-network-dot-c {
          right: 23%;
          bottom: 8%;
          animation:
            alumniDotC 8s ease-in-out infinite;
        }

        @keyframes alumniDotA {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(20px, -14px);
          }

        }

        @keyframes alumniDotB {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-18px, 16px);
          }

        }

        @keyframes alumniDotC {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-14px, -18px);
          }

        }


        /* =====================================================
           FEATURED CARD
        ====================================================== */

        .alumni-feature-card {
          isolation: isolate;
          transition:
            transform 500ms
              cubic-bezier(0.22, 1, 0.36, 1),
            border-color 350ms ease,
            box-shadow 500ms ease;
        }

        .alumni-feature-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 1px solid transparent;
          transition:
            border-color 350ms ease;
        }

        .alumni-feature-card:hover {
          transform:
            translate3d(0, -7px, 0);
        }

        .alumni-feature-card:hover::after {
          border-color:
            rgba(32, 201, 151, 0.22);
        }

        .alumni-card-sweep {
          transform:
            translateX(-140%);
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(32, 201, 151, 0.07),
              transparent
            );
          transition:
            transform 900ms
              cubic-bezier(0.22, 1, 0.36, 1);
        }

        .alumni-feature-card:hover
          .alumni-card-sweep {
          transform:
            translateX(420%);
        }

        .alumni-feature-card h3 {
          transition:
            transform 500ms
              cubic-bezier(0.22, 1, 0.36, 1),
            letter-spacing 500ms ease;
        }

        .alumni-feature-card:hover h3 {
          transform: translateX(5px);
          letter-spacing: -0.075em;
        }


        /* =====================================================
           FEATURED LINK
        ====================================================== */

        .alumni-link-button {
          position: relative;
          overflow: hidden;
        }

        .alumni-link-button::before {
          content: "";
          position: absolute;
          inset: 0;
          transform:
            translateX(-110%);
          background:
            rgba(32, 201, 151, 0.1);
          transition:
            transform 450ms
              cubic-bezier(0.22, 1, 0.36, 1);
        }

        .alumni-link-button:hover::before {
          transform:
            translateX(0);
        }

        .alumni-link-button > * {
          position: relative;
          z-index: 1;
        }

        .alumni-link-button:hover {
          transform:
            translate3d(0, -2px, 0);
          border-color: #20c997;
        }


        /* =====================================================
           DIRECTORY ROW
        ====================================================== */

        .alumni-directory-row {
          isolation: isolate;
          transition:
            padding-left 350ms
              cubic-bezier(0.22, 1, 0.36, 1),
            padding-right 350ms
              cubic-bezier(0.22, 1, 0.36, 1),
            background-color 350ms ease;
        }

        .alumni-directory-row:hover {
          padding-left: 12px;
          padding-right: 12px;
          background:
            rgba(32, 201, 151, 0.025);
        }

        .alumni-row-line {
          background: #20c997;
          transition:
            width 650ms
              cubic-bezier(0.22, 1, 0.36, 1);
        }

        .alumni-directory-row:hover
          .alumni-row-line {
          width: 100%;
        }

        .alumni-directory-row h3 {
          transition:
            transform 350ms
              cubic-bezier(0.22, 1, 0.36, 1),
            letter-spacing 350ms ease;
        }

        .alumni-directory-row:hover h3 {
          transform: translateX(6px);
          letter-spacing: -0.02em;
        }


        /* =====================================================
           DIRECTORY LINK
        ====================================================== */

        .alumni-directory-link {
          position: relative;
          overflow: hidden;
        }

        .alumni-directory-link::before {
          content: "";
          position: absolute;
          inset: 0;
          transform:
            translateX(-105%);
          background:
            rgba(32, 201, 151, 0.1);
          transition:
            transform 450ms
              cubic-bezier(0.22, 1, 0.36, 1);
        }

        .alumni-directory-link:hover::before {
          transform:
            translateX(0);
        }

        .alumni-directory-link > * {
          position: relative;
          z-index: 1;
        }

        .alumni-directory-link:hover {
          transform:
            translate3d(0, -2px, 0);
          border-color: #20c997;
        }


        /* =====================================================
           PAGINATION
        ====================================================== */

        .alumni-page-number {
          cursor: pointer;
        }

        .alumni-page-number:not(
          [aria-current="page"]
        ):hover {
          transform:
            translate3d(0, -3px, 0);
          border-color:
            rgba(32, 201, 151, 0.45);
          color: var(--cse-text);
          background:
            rgba(32, 201, 151, 0.04);
        }

        .alumni-page-number:active {
          transform:
            translate3d(0, 0, 0)
            scale(0.94);
        }


        /* =====================================================
           MARQUEE
        ====================================================== */

        .alumni-marquee-wrap:hover
          .animate-\[alumniMarquee_32s_linear_infinite\] {
          animation-play-state: paused;
        }

        .alumni-marquee-wrap {
          position: relative;
        }

        .alumni-marquee-wrap::before,
        .alumni-marquee-wrap::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 70px;
          z-index: 2;
          pointer-events: none;
        }

        .alumni-marquee-wrap::before {
          left: 0;
          background:
            linear-gradient(
              90deg,
              #151514,
              transparent
            );
        }

        .alumni-marquee-wrap::after {
          right: 0;
          background:
            linear-gradient(
              270deg,
              #151514,
              transparent
            );
        }

        @keyframes alumniMarquee {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }


        /* =====================================================
           CALLOUT
        ====================================================== */

        .alumni-callout {
          isolation: isolate;
        }

        .alumni-callout-line {
          background: #20c997;
          opacity: 0.55;
        }

        .alumni-callout-line-one {
          animation:
            alumniCalloutLine 6s
            ease-in-out infinite;
        }

        .alumni-callout-line-two {
          animation:
            alumniCalloutLine 8s
            ease-in-out 1s infinite reverse;
        }

        @keyframes alumniCalloutLine {

          0%,
          100% {
            opacity: 0.15;
            transform: scaleX(0.65);
          }

          50% {
            opacity: 0.7;
            transform: scaleX(1);
          }

        }

        .alumni-callout-item {
          transition:
            transform 300ms ease,
            color 300ms ease;
        }

        .alumni-callout-item:hover {
          transform: translateX(6px);
          color: #20c997;
        }


        /* =====================================================
           CTA
        ====================================================== */

        .alumni-main-cta {
          position: relative;
          overflow: hidden;
        }

        .alumni-main-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          transform:
            translateX(-105%);
          background:
            rgba(32, 201, 151, 0.13);
          transition:
            transform 500ms
              cubic-bezier(0.22, 1, 0.36, 1);
        }

        .alumni-main-cta:hover::before {
          transform: translateX(0);
        }

        .alumni-main-cta > * {
          position: relative;
          z-index: 1;
        }

        .alumni-main-cta:hover {
          transform:
            translate3d(0, -4px, 0);
          box-shadow:
            0 18px 45px
            rgba(0, 0, 0, 0.25);
        }


        /* =====================================================
           ACTIVE PRESS FEEDBACK
        ====================================================== */

        .alumni-page button:active,
        .alumni-page a:active {
          transform:
            scale(0.97);
        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 640px) {

          .alumni-reveal {
            transform:
              translate3d(0, 14px, 0);
          }

          .alumni-reveal-visible {
            transform:
              translate3d(0, 0, 0);
          }

          .alumni-grid {
            background-size: 45px 45px;
          }

          .alumni-directory-row:hover {
            padding-left: 5px;
            padding-right: 5px;
          }

          .alumni-feature-card:hover {
            transform:
              translate3d(0, -4px, 0);
          }

        }


        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .alumni-reveal,
          .alumni-reveal-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .alumni-grid,
          .alumni-scan,
          .alumni-glow,
          .alumni-node,
          .alumni-network-orbit,
          .alumni-network-core span,
          .alumni-network-dot,
          .alumni-callout-line,
          .alumni-page
            .animate-\[alumniMarquee_32s_linear_infinite\] {
            animation: none !important;
          }

          .alumni-feature-card:hover,
          .alumni-directory-row:hover,
          .alumni-link-button:hover,
          .alumni-directory-link:hover,
          .alumni-main-cta:hover {
            transform: none;
          }

        }

      `}</style>

    </main>
  );
}