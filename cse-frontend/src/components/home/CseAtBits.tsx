"use client";

import { useState } from "react";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const disciplines = [
  {
    id: "01",
    name: "ALGORITHMS & DATA STRUCTURES",
    desc: "Complexity, optimization, graph theoretical models",
  },
  {
    id: "02",
    name: "ARTIFICIAL INTELLIGENCE",
    desc: "Machine learning, neural networks, computer vision",
  },
  {
    id: "03",
    name: "COMPUTER NETWORKS",
    desc: "Protocols, distributed systems, internet architecture",
  },
  {
    id: "04",
    name: "DATABASE SYSTEMS",
    desc: "Relational algebra, NoSQL indexing, query tuning",
  },
  {
    id: "05",
    name: "WEB TECHNOLOGIES",
    desc: "Full-stack frameworks, microservices, cloud deployments",
  },
  {
    id: "06",
    name: "OPERATING SYSTEMS",
    desc: "Kernel concurrency, memory management, file systems",
  },
  {
    id: "07",
    name: "COMPILER DESIGN",
    desc: "Lexical analysis, AST parsing, bytecode generation",
  },
  {
    id: "08",
    name: "SOFTWARE ENGINEERING",
    desc: "Agile methodologies, testing pipelines, CI/CD",
  },
];

export default function CseAtBits() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      className="
        relative overflow-hidden
        border-b cse-border
        bg-[var(--cse-bg)]
        px-4 py-20
        sm:px-6
        lg:px-10 lg:py-28
      "
    >
      {/* =====================================================
          GIANT 1987 WATERMARK
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute
          -right-10 top-6
          select-none
          font-mono font-bold
          text-[12rem]
          leading-none
          tracking-[-0.08em]
          text-[var(--cse-text)]
          opacity-[0.035]
          sm:text-[20rem]
          lg:text-[24rem]
        "
      >
        1987
      </div>

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute inset-0
          cse-grid
          opacity-70
          [background-size:48px_48px]
          sm:[background-size:52px_52px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            {/* LEFT */}

            <div className="lg:col-span-8">
              <TechnicalLabel
                index="07"
                title="DEPARTMENTAL ACADEMICS"
                category="CSE @ BIT SINDRI"
              />

              <h2
                className="
                  mt-4
                  text-clamp-display
                  font-medium
                  tracking-tight
                  cse-text-strong
                "
              >
                CSE @ BIT Sindri
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-base
                  leading-7
                  cse-text-muted
                  sm:text-lg
                  sm:leading-8
                "
              >
                A department built around rigorous engineering,
                computational thinking, and real-world problem
                solving since 1987.
              </p>
            </div>

            {/* RIGHT */}

            <div
              className="
                font-mono
                text-[10px]
                tracking-[0.14em]
                cse-text-soft
                lg:col-span-4
                lg:text-right
              "
            >
              <p
                className="
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  cse-text-strong
                "
              >
                ESTABLISHED IN 1987
              </p>

              <p className="mt-1">
                BIT SINDRI, DHANBAD
              </p>
            </div>
          </div>

          {/* =================================================
              DISCIPLINE GRID
          ================================================== */}

          <div
            className="
              mt-14
              grid
              border-l border-t
              cse-border
              sm:grid-cols-2
              lg:mt-16
              lg:grid-cols-4
            "
          >
            {disciplines.map((disc) => {
              const active = activeId === disc.id;

              return (
                <button
                  key={disc.id}
                  type="button"
                  onClick={() =>
                    setActiveId(active ? null : disc.id)
                  }
                  className={`
                    group relative
                    min-h-[225px]
                    cursor-pointer
                    border-b border-r
                    cse-border
                    p-6
                    text-left
                    transition-all
                    duration-500
                    sm:p-7
                    lg:min-h-[240px]
                    ${
                      active
                        ? "bg-[var(--cse-text)]"
                        : "bg-transparent hover:bg-[var(--cse-surface)]"
                    }
                  `}
                >
                  {/* TOP ROW */}

                  <div
                    className={`
                      flex
                      items-center
                      justify-between
                      font-mono
                      text-[10px]
                      transition-colors
                      duration-300
                      ${
                        active
                          ? "text-[var(--cse-bg)]"
                          : "cse-text-soft group-hover:cse-text-strong"
                      }
                    `}
                  >
                    <span>{disc.id}</span>

                    <span
                      className={`
                        text-sm
                        transition-all
                        duration-300
                        ${
                          active
                            ? "translate-x-0 opacity-100"
                            : "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }
                      `}
                    >
                      →
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className={`
                      mt-7
                      font-mono
                      text-[12px]
                      font-bold
                      leading-5
                      tracking-[0.08em]
                      transition-colors
                      duration-300
                      sm:text-sm
                      ${
                        active
                          ? "text-[var(--cse-bg)]"
                          : "cse-text-strong"
                      }
                    `}
                  >
                    {disc.name}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className={`
                      mt-4
                      max-w-[300px]
                      text-[12px]
                      leading-5
                      transition-colors
                      duration-300
                      ${
                        active
                          ? "text-[var(--cse-bg)] opacity-75"
                          : "cse-text-muted"
                      }
                    `}
                  >
                    {disc.desc}
                  </p>

                  {/* ACTIVE / HOVER LINE */}

                  <div
                    className={`
                      absolute
                      bottom-0
                      left-6
                      h-[2px]
                      transition-all
                      duration-500
                      sm:left-7
                      ${
                        active
                          ? "w-[calc(100%-3.5rem)] bg-[var(--cse-bg)]"
                          : "w-0 bg-[var(--cse-text)] group-hover:w-[calc(100%-3.5rem)]"
                      }
                    `}
                  />

                  {/* CORNER MARKER */}

                  <span
                    className={`
                      pointer-events-none
                      absolute
                      right-0
                      top-0
                      h-5
                      w-5
                      border-b
                      border-l
                      transition-colors
                      duration-300
                      ${
                        active
                          ? "border-[var(--cse-bg)] opacity-40"
                          : "cse-border opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* =================================================
              ACTIVE STATUS
          ================================================== */}

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  cse-accent-bg
                  animate-pulse
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  cse-text-soft
                "
              >
                {activeId
                  ? `DISCIPLINE / ${activeId} SELECTED`
                  : "SELECT A DISCIPLINE"}
              </span>
            </div>

            <span
              className="
                hidden
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                cse-text-soft
                sm:block
              "
            >
              08 AREAS
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}