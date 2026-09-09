"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Code2,
  Cpu,
  Trophy,
  Users,
} from "lucide-react";

import AnimatedSection from "@/components/ui/AnimatedSection";

const pillars = [
  {
    number: "01",
    title: "LEARN",
    subtitle: "KNOWLEDGE & MASTERCLASSES",
    description:
      "Deep-dive technical workshops, peer learning sessions, and hands-on bootcamps covering modern web development, algorithms, artificial intelligence, and operating systems.",
    tags: [
      "Algorithms",
      "System Design",
      "Machine Learning",
      "Web Architecture",
    ],
    icon: Cpu,
  },
  {
    number: "02",
    title: "BUILD",
    subtitle: "SOFTWARE & OPEN SOURCE",
    description:
      "Transforming theoretical concepts into functional products. Students collaborate on web platforms, CLI tools, utility APIs, and open-source contributions to real-world codebases.",
    tags: [
      "Next.js",
      "TypeScript",
      "Python",
      "Docker",
      "Git Workflow",
    ],
    icon: Code2,
  },
  {
    number: "03",
    title: "COMPETE",
    subtitle: "HACKATHONS & ALGORITHMS",
    description:
      "Organizing high-stakes hackathons, speed programming rounds, and algorithm challenges that hone critical thinking, problem-solving, and team execution under pressure.",
    tags: [
      "CodeSprint",
      "Hackathon",
      "Competitive Coding",
      "Data Structures",
    ],
    icon: Trophy,
  },
  {
    number: "04",
    title: "CONNECT",
    subtitle: "ALUMNI & INDUSTRY NETWORK",
    description:
      "Bridging campus talent with global industry leadership through mentorship programs, tech talks, resume reviews, and career insights from alumni working at top tech firms.",
    tags: [
      "Microsoft",
      "Amazon",
      "Tech Talks",
      "Mentorship",
    ],
    icon: Users,
  },
];

export default function Impact() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = pillars[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      className="
        relative overflow-hidden
        border-b border-white/10
        bg-[#141413]
        px-4 py-20
        text-[#f5f3ee]
        sm:px-6
        lg:px-10
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          -right-40 top-20
          h-[520px] w-[520px]
          rounded-full
          border border-white/[0.045]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-24 top-36
          h-[390px] w-[390px]
          rounded-full
          border border-dashed border-white/[0.055]
          animate-[spin_35s_linear_infinite]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-5 top-[270px]
          h-2 w-2
          rounded-full
          bg-white/25
          shadow-[0_0_0_7px_rgba(255,255,255,0.025)]
        "
      />

      <div
        className="
          pointer-events-none absolute
          left-[7%] top-[32%]
          h-px w-24
          bg-white/[0.08]
        "
      />

      <div
        className="
          pointer-events-none absolute
          left-[7%] top-[32%]
          h-2 w-2
          -translate-y-1/2
          bg-white/20
        "
      />

      {/* Subtle grid */}

      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-7 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-white/45">
                  02 / CULTURE
                </span>

                <span className="h-px w-10 bg-white/20" />

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
                  FOUNDATIONAL PILLARS
                </span>
              </div>

              <h2 className="max-w-3xl text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                What drives{" "}
                <span className="text-white/35">
                  our society.
                </span>
              </h2>
            </div>

            <div className="hidden max-w-xs text-right md:block">
              <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.19em] text-white/35">
                Interactive pillars
                <br />
                Explore what we learn,
                <br />
                build, compete & connect.
              </p>
            </div>
          </div>

          {/* =================================================
              DESKTOP / TABLET INTERACTIVE SYSTEM
          ================================================== */}

          <div className="mt-8 hidden md:block">
            <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] gap-8">
              {/* LEFT — PILLARS */}

              <div className="border-t border-white/10">
                {pillars.map((pillar, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={pillar.number}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        group relative w-full
                        border-b border-white/10
                        text-left
                        transition-all duration-500
                        ${
                          isActive
                            ? "py-9"
                            : "py-7"
                        }
                      `}
                    >
                      {/* Active line */}

                      <span
                        className={`
                          absolute left-0 top-0
                          h-full w-[2px]
                          origin-top
                          bg-[#f5f3ee]
                          transition-transform duration-500
                          ${
                            isActive
                              ? "scale-y-100"
                              : "scale-y-0"
                          }
                        `}
                      />

                      <div className="flex items-center gap-6 pl-5">
                        {/* Number */}

                        <span
                          className={`
                            w-7 shrink-0
                            font-mono text-[9px]
                            tracking-[0.18em]
                            transition-colors duration-300
                            ${
                              isActive
                                ? "text-white/70"
                                : "text-white/25"
                            }
                          `}
                        >
                          {pillar.number}
                        </span>

                        {/* Main title */}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-4">
                            <h3
                              className={`
                                text-[clamp(2.4rem,5vw,5rem)]
                                font-semibold
                                leading-none
                                tracking-[-0.06em]
                                transition-all duration-500
                                ${
                                  isActive
                                    ? "translate-x-2 text-white"
                                    : "text-white/55 group-hover:text-white/80"
                                }
                              `}
                            >
                              {pillar.title}
                              <span className="text-white/25">
                                .
                              </span>
                            </h3>

                            <ChevronRight
                              size={18}
                              strokeWidth={1.2}
                              className={`
                                transition-all duration-500
                                ${
                                  isActive
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-3 opacity-0"
                                }
                              `}
                            />
                          </div>

                          <div
                            className={`
                              overflow-hidden
                              transition-all duration-500
                              ${
                                isActive
                                  ? "mt-4 max-h-10 opacity-100"
                                  : "mt-0 max-h-0 opacity-0"
                              }
                            `}
                          >
                            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/38">
                              {pillar.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Small icon */}

                        <div
                          className={`
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            border
                            transition-all duration-500
                            ${
                              isActive
                                ? "border-white/25 bg-white/10 text-white"
                                : "border-white/10 text-white/25"
                            }
                          `}
                        >
                          <pillar.icon
                            size={15}
                            strokeWidth={1.3}
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* RIGHT — DETAIL PANEL */}

              <div className="relative min-h-[460px] overflow-hidden border border-white/10 bg-white/[0.025]">
                {/* Decorative coordinates */}

                <div className="absolute left-6 top-5 font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                  PILLAR / {active.number}
                </div>

                <div className="absolute right-6 top-5 font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                  CSE / SYSTEM
                </div>

                {/* Center icon */}

                <div className="absolute left-1/2 top-[32%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10">
                  <div className="absolute inset-2 rounded-full border border-dashed border-white/10 animate-[spin_18s_linear_infinite]" />

                  <ActiveIcon
                    key={active.number}
                    size={25}
                    strokeWidth={1.1}
                    className="animate-[fadeIn_500ms_ease-out]"
                  />
                </div>

                {/* Decorative cross */}

                <div className="absolute left-1/2 top-[32%] h-[150px] w-px -translate-x-1/2 bg-white/[0.055]" />

                <div className="absolute left-1/2 top-[32%] h-px w-[150px] -translate-x-1/2 bg-white/[0.055]" />

                {/* Description */}

                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-7">
                  <p
                    key={active.number}
                    className="
                      animate-[fadeInUp_450ms_ease-out]
                      text-[15px]
                      leading-7
                      text-white/60
                    "
                  >
                    {active.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          border border-white/10
                          px-2.5 py-1.5
                          font-mono text-[7px]
                          uppercase
                          tracking-[0.16em]
                          text-white/38
                          transition-colors
                          hover:border-white/25
                          hover:text-white/65
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                      DOMAIN FOCUS
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="text-white/35"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE
          ================================================== */}

          <div className="mt-8 md:hidden">
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              const Icon = pillar.icon;

              return (
                <button
                  key={pillar.number}
                  type="button"
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className={`
                    relative block w-full
                    border-b border-white/10
                    text-left
                    transition-all duration-500
                    ${
                      isActive
                        ? "bg-white/[0.035]"
                        : ""
                    }
                  `}
                >
                  <span
                    className={`
                      absolute left-0 top-0
                      h-full w-[2px]
                      bg-white
                      transition-transform duration-500
                      ${
                        isActive
                          ? "scale-y-100"
                          : "scale-y-0"
                      }
                    `}
                  />

                  <div className="flex items-center gap-4 px-4 py-6">
                    <span className="w-6 shrink-0 font-mono text-[8px] text-white/30">
                      {pillar.number}
                    </span>

                    <div className="flex-1">
                      <h3
                        className={`
                          text-[2.5rem]
                          font-semibold
                          leading-none
                          tracking-[-0.06em]
                          transition-colors duration-300
                          ${
                            isActive
                              ? "text-white"
                              : "text-white/55"
                          }
                        `}
                      >
                        {pillar.title}
                        <span className="text-white/25">
                          .
                        </span>
                      </h3>

                      <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.17em] text-white/30">
                        {pillar.subtitle}
                      </p>
                    </div>

                    <Icon
                      size={17}
                      strokeWidth={1.25}
                      className={
                        isActive
                          ? "text-white/80"
                          : "text-white/25"
                      }
                    />
                  </div>

                  {/* Mobile expanded content */}

                  <div
                    className={`
                      overflow-hidden
                      transition-all duration-500
                      ${
                        isActive
                          ? "max-h-[320px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="px-4 pb-7 pl-14">
                      <p className="text-[13px] leading-6 text-white/52">
                        {pillar.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {pillar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              border border-white/10
                              px-2 py-1.5
                              font-mono text-[7px]
                              uppercase
                              tracking-[0.13em]
                              text-white/35
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =================================================
              BOTTOM SYSTEM STATUS
          ================================================== */}

          <div className="mt-7 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/40" />

                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/35">
                SOCIETY SYSTEM / ACTIVE
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                LEARN
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                BUILD
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                CONNECT
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}