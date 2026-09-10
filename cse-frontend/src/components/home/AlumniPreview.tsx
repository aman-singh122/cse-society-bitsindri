"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, MoveUpRight } from "lucide-react";
import { alumni } from "@/data/alumni";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

export default function AlumniPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const featuredAlumni = [alumni[0], alumni[5]];

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        relative overflow-hidden
        border-b cse-border
        bg-[var(--cse-bg)]
        px-5 py-20
        sm:px-7 sm:py-24
        lg:px-10 lg:py-28
        transition-all duration-1000
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }
      `}
    >
      {/* BACKGROUND ORBITS */}
      <div
        className="
          pointer-events-none
          absolute right-0 top-0
          h-full w-[32%]
          opacity-70
        "
      >
        <div
          className="
            absolute
            right-[-140px]
            top-[-110px]
            h-[440px]
            w-[440px]
            rounded-full
            border cse-border
            opacity-60
          "
        />

        <div
          className="
            absolute
            right-[-60px]
            top-[10px]
            h-[300px]
            w-[300px]
            rounded-full
            border border-dashed cse-border
            opacity-60
            animate-[spin_42s_linear_infinite]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div
          className={`
            flex flex-col
            justify-between
            gap-7
            transition-all
            duration-800
            md:flex-row
            md:items-end
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          <div>
            {/* LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[9px] font-semibold tracking-[0.24em] cse-text-soft">
                08
              </span>

              <span className="h-px w-8 bg-[var(--cse-border)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] cse-text">
                ALUMNI NETWORK
              </span>

              <span className="cse-text-soft">/</span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] cse-text-soft">
                FEATURED STORIES
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                text-[clamp(3rem,6vw,6rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.065em]
                cse-text-strong
              "
            >
              Built here.
              <span className="cse-text-muted opacity-60"> Impact beyond.</span>
            </h2>
          </div>

          {/* EXPLORE */}
          <Link
            href="/alumni"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              border-b
              cse-border
              pb-2
              font-mono
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              cse-text
              transition-all
              duration-300
              hover:border-[var(--cse-text)]
            "
          >
            Explore Alumni Network
            <ArrowUpRight
              size={13}
              strokeWidth={1.4}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* ALUMNI CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredAlumni.map((alum, index) => {
            const isActive = active === index;

            return (
              <article
                key={alum.name}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`
                  group
                  relative
                  min-h-[360px]
                  cursor-pointer
                  overflow-hidden
                  border
                  cse-border
                  bg-[var(--cse-surface)]
                  p-6
                  transition-all
                  duration-500
                  sm:p-8
                  lg:p-10
                  ${
                    isActive
                      ? "-translate-y-1 shadow-[0_22px_60px_rgba(0,0,0,0.12)]"
                      : "hover:-translate-y-1"
                  }
                `}
              >
                {/* GIANT COMPANY WATERMARK */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-5
                    -right-6
                    select-none
                    font-mono
                    text-[5rem]
                    font-bold
                    leading-none
                    tracking-[-0.08em]
                    cse-text-strong
                    opacity-[0.025]
                    transition-all
                    duration-700
                    group-hover:-translate-x-3
                    group-hover:opacity-[0.06]
                    sm:text-[7rem]
                  "
                >
                  {alum.company.toUpperCase().slice(0, 10)}
                </div>

                {/* TOP */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-mono text-[9px] tracking-[0.2em] cse-text-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border
                      cse-border
                      bg-[var(--cse-surface-2)]
                      px-3
                      py-1.5
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                    "
                  >
                    <Building2
                      size={11}
                      strokeWidth={1.2}
                      className="cse-text-muted"
                    />

                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] cse-text">
                      {alum.company}
                    </span>
                  </div>
                </div>

                {/* NAME */}
                <div className="relative z-10 mt-16">
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] cse-text-soft">
                    BIT Sindri · Batch '{String(alum.batch).slice(-2)}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[clamp(2.5rem,4vw,4.5rem)]
                      font-medium
                      leading-none
                      tracking-[-0.06em]
                      cse-text-strong
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    {alum.name}
                  </h3>
                </div>

                {/* BOTTOM INFO */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    border-t
                    cse-border
                    p-6
                    sm:p-8
                    lg:p-10
                  "
                >
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="max-w-md text-[12px] font-mono uppercase tracking-wide leading-5 cse-text-muted">
                        {alum.role}
                      </p>

                      <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.22em] cse-text-soft">
                        CSE / BIT SINDRI
                      </p>
                    </div>

                    {/* LINKEDIN BUTTON */}
                    <a
                      href={alum.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex
                        h-9
                        items-center
                        gap-2
                        px-3
                        font-mono
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        border
                        cse-border
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "bg-[var(--cse-text)] text-[var(--cse-bg)]"
                            : "cse-text-muted hover:text-black"
                        }
                      `}
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      <span>LinkedIn</span>
                      <MoveUpRight size={12} strokeWidth={1.4} />
                    </a>
                  </div>
                </div>

                {/* ACTIVE LINE */}
                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    cse-accent-bg
                    transition-all
                    duration-700
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </article>
            );
          })}
        </div>

        {/* FOOTER STATUS */}
        <div
          className={`
            mt-6
            flex
            items-center
            justify-between
            transition-all
            duration-700
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }
          `}
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full cse-accent-bg animate-pulse" />

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] cse-text-soft">
              {active !== null
                ? `PROFILE / ${String(active + 1).padStart(2, "0")} ACTIVE`
                : "ALUMNI / FEATURED NETWORK"}
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] cse-text-soft sm:block">
            {alumni.length} ALUMNI TOTAL
          </span>
        </div>
      </div>
    </section>
  );
}