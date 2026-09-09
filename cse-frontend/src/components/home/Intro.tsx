"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Crosshair,
  MoveUpRight,
  ScanLine,
} from "lucide-react";

export default function Intro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

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
        threshold: 0.18,
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
        border-b border-black/10
        bg-[#f7f5f0]
        px-5 py-20
        sm:px-7 sm:py-24
        lg:px-10 lg:py-32
        transition-all duration-1000
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }
      `}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none absolute inset-0
          opacity-50
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(20,20,19,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,20,19,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Large technical circle */}

      <div
        className="
          pointer-events-none absolute
          -right-40 top-20
          h-[620px] w-[620px]
          rounded-full
          border border-black/[0.045]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-12 top-48
          h-[420px] w-[420px]
          rounded-full
          border border-dashed border-black/[0.06]
          animate-[spin_40s_linear_infinite]
        "
      />

      {/* Moving point */}

      <div
        className="
          pointer-events-none absolute
          right-[18%] top-[29%]
          h-2 w-2
          rounded-full
          bg-[#141413]/30
          shadow-[0_0_0_7px_rgba(20,20,19,0.035)]
          animate-[floatPoint_4s_ease-in-out_infinite]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            TOP LABEL
        ================================================== */}

        <div
          className={`
            flex items-center justify-between
            border-b border-black/10
            pb-5
            transition-all duration-700 delay-100
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] font-semibold tracking-[0.24em] text-neutral-500">
              01
            </span>

            <span className="h-px w-8 bg-black/20" />

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-[#141413]">
              WHO WE ARE
            </span>

            <span className="text-neutral-300">/</span>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-400 sm:block">
              PURPOSE & CULTURE
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />

            <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-neutral-400">
              SYSTEM / 01
            </span>
          </div>
        </div>

        {/* =================================================
            MAIN EDITORIAL GRID
        ================================================== */}

        <div className="grid grid-cols-1 gap-14 pt-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20 lg:pt-14">
          {/* =================================================
              LEFT — TYPOGRAPHY
          ================================================== */}

          <div className="relative">
            {/* vertical editorial marker */}

            <div
              className={`
                absolute -left-4 top-1 hidden h-[calc(100%-8px)]
                w-px bg-black/15
                transition-all duration-1000 delay-300
                lg:block
                ${
                  visible
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                }
              `}
              style={{
                transformOrigin: "top",
              }}
            />

            <h2
              className={`
                max-w-[900px]
                text-[clamp(3.1rem,6.4vw,7rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.065em]
                text-[#141413]
                transition-all duration-1000 delay-200
                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              A community built
              <br />
              around{" "}
              <span className="text-black/30">
                curiosity,
              </span>
              <br />
              <span className="text-black/30">
                technology
              </span>{" "}
              &<br />
              <span className="text-black/30">
                engineering
              </span>
              <br />
              <span className="text-black/30">
                excellence.
              </span>
            </h2>

            {/* tiny moving underline */}

            <div
              className={`
                mt-9 flex items-center gap-3
                transition-all duration-700 delay-500
                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }
              `}
            >
              <span className="h-px w-14 bg-black/20" />

              <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-neutral-400">
                BUILT FOR CURIOSITY
              </span>

              <MoveUpRight
                size={12}
                strokeWidth={1.4}
                className="text-neutral-400"
              />
            </div>
          </div>

          {/* =================================================
              RIGHT — EDITORIAL INFO
          ================================================== */}

          <div
            className={`
              flex flex-col justify-between
              transition-all duration-1000 delay-300
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            {/* INFO */}

            <div>
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-neutral-400">
                  SOCIETY / 001
                </span>

                <ScanLine
                  size={15}
                  strokeWidth={1.2}
                  className="text-neutral-400"
                />
              </div>

              <p className="max-w-md text-[15px] leading-7 text-neutral-600 sm:text-[16px] sm:leading-7">
                Founded within the Department of Computer
                Science & Engineering at BIT Sindri, the
                society serves as an incubator for student
                initiative. We bridge classroom fundamentals
                with real-world software engineering,
                competitive coding, open-source building,
                and AI research.
              </p>
            </div>

            {/* =================================================
                INTERACTIVE STATUS CARD
            ================================================== */}

            <div
              className="
                group relative mt-12
                overflow-hidden
                border border-black/10
                bg-white/35
                transition-all duration-500
                hover:-translate-y-1
                hover:border-black/20
                hover:bg-white/55
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.055)]
              "
            >
              {/* corner */}

              <span className="absolute right-0 top-0 h-5 w-5 border-b border-l border-black/15" />

              <span className="absolute bottom-0 left-0 h-5 w-5 border-r border-t border-black/15" />

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-neutral-400">
                      CULTURE / FRAMEWORK
                    </p>

                    <p className="mt-3 text-lg font-medium tracking-tight text-[#141413]">
                      Student driven.
                    </p>
                  </div>

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10">
                    <Crosshair
                      size={17}
                      strokeWidth={1.1}
                      className="
                        text-neutral-500
                        transition-transform duration-700
                        group-hover:rotate-90
                      "
                    />
                  </div>
                </div>

                <div className="mt-6 h-px bg-black/10" />

                <div className="mt-5 grid grid-cols-2 gap-5">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                      GUIDANCE
                    </p>

                    <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#141413]">
                      Faculty
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                      OWNERSHIP
                    </p>

                    <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#141413]">
                      Students
                    </p>
                  </div>
                </div>
              </div>

              {/* hover line */}

              <div
                className="
                  absolute bottom-0 left-0 h-[2px] w-0
                  bg-[#141413]
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM SYSTEM BAR
        ================================================== */}

        <div
          className={`
            mt-16
            grid grid-cols-1
            border-t border-black/10
            transition-all duration-700 delay-500
            sm:grid-cols-3
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          {/* ITEM */}

          <div className="flex items-center gap-3 border-b border-black/10 py-5 sm:border-b-0 sm:border-r sm:pr-6">
            <span className="font-mono text-[8px] text-neutral-400">
              01
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
              LEARN
            </span>
          </div>

          {/* ITEM */}

          <div className="flex items-center gap-3 border-b border-black/10 py-5 sm:border-b-0 sm:px-6 sm:border-r">
            <span className="font-mono text-[8px] text-neutral-400">
              02
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
              BUILD
            </span>
          </div>

          {/* ITEM */}

          <div className="flex items-center justify-between py-5 sm:pl-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[8px] text-neutral-400">
                03
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                CONNECT
              </span>
            </div>

            <ArrowUpRight
              size={14}
              strokeWidth={1.2}
              className="
                text-neutral-400
                transition-all duration-300
                group-hover:text-[#141413]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}