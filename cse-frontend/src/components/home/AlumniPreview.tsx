"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  MoveUpRight,
} from "lucide-react";

const featuredAlumni = [
  {
    number: "01",
    name: "Swati Jha",
    company: "Microsoft",
    tagline: "BIT Sindri Alumna",
    description:
      "Built her professional engineering career in the tech industry.",
    companyBg: "MICROSOFT",
  },
  {
    number: "02",
    name: "Ruma Karn",
    company: "Amazon",
    tagline: "BIT Sindri Alumna",
    description:
      "Working in the technology industry at Amazon.",
    companyBg: "AMAZON",
  },
];

export default function AlumniPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

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
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        relative overflow-hidden
        border-b border-black/10
        bg-[#faf9f6]
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
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[30%] opacity-40">
        <div className="absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full border border-black/[0.04]" />
        <div className="absolute right-[-50px] top-[20px] h-[280px] w-[280px] rounded-full border border-dashed border-black/[0.05] animate-[spin_42s_linear_infinite]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}

        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[9px] font-semibold tracking-[0.24em] text-neutral-400">
                08
              </span>

              <span className="h-px w-8 bg-black/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-500">
                ALUMNI NETWORK
              </span>

              <span className="text-neutral-300">/</span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                FEATURED STORIES
              </span>
            </div>

            <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.065em] text-[#141413]">
              Built here.
              <span className="text-black/25">
                {" "}
                Impact beyond.
              </span>
            </h2>
          </div>

          <Link
            href="/alumni"
            className="
              group inline-flex w-fit items-center gap-3
              border-b border-black/20 pb-2
              font-mono text-[9px] font-semibold
              uppercase tracking-[0.2em]
              text-[#141413]
              transition-colors
              hover:border-black
            "
          >
            Explore Alumni Network
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Alumni cards */}

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featuredAlumni.map((alum, index) => {
            const isActive = active === index;

            return (
              <article
                key={alum.name}
                onMouseEnter={() => setActive(index)}
                className="
                  group relative min-h-[360px]
                  overflow-hidden
                  border border-black/10
                  bg-[#f5f3ee]
                  p-6
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-black/25
                  hover:shadow-[0_22px_60px_rgba(0,0,0,0.07)]
                  sm:p-8
                  lg:p-10
                "
              >
                {/* Giant watermark */}

                <div
                  className="
                    pointer-events-none absolute
                    -bottom-5 -right-6
                    select-none
                    font-mono text-[5rem]
                    font-bold
                    leading-none
                    tracking-[-0.08em]
                    text-black/[0.035]
                    transition-all duration-700
                    group-hover:-translate-x-3
                    group-hover:text-black/[0.065]
                    sm:text-[7rem]
                  "
                >
                  {alum.companyBg}
                </div>

                {/* Top */}

                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-400">
                    {alum.number}
                  </span>

                  <div className="flex items-center gap-2 border border-black/10 bg-white/40 px-3 py-1.5">
                    <Building2
                      size={11}
                      strokeWidth={1.2}
                    />

                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em]">
                      {alum.company}
                    </span>
                  </div>
                </div>

                {/* Name */}

                <div className="relative z-10 mt-20">
                  <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                    {alum.tagline}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[clamp(2.5rem,4vw,4.5rem)]
                      font-medium
                      leading-none
                      tracking-[-0.06em]
                      text-[#141413]
                      transition-transform duration-500
                      group-hover:translate-x-1
                    "
                  >
                    {alum.name}
                  </h3>
                </div>

                {/* Bottom */}

                <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-black/10 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="max-w-md text-[12px] leading-5 text-neutral-600">
                        {alum.description}
                      </p>

                      <p className="mt-4 font-mono text-[7px] uppercase tracking-[0.22em] text-neutral-400">
                        CSE / BIT SINDRI
                      </p>
                    </div>

                    <div
                      className={`
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full border border-black/10
                        transition-all duration-500
                        ${
                          isActive
                            ? "bg-[#141413] text-white"
                            : "text-neutral-500"
                        }
                      `}
                    >
                      <MoveUpRight
                        size={14}
                        strokeWidth={1.2}
                      />
                    </div>
                  </div>
                </div>

                {/* Active bottom line */}

                <div
                  className="
                    absolute bottom-0 left-0
                    h-[2px] w-0
                    bg-[#141413]
                    transition-all duration-700
                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}