"use client";

import React from "react";
import Link from "next/link";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  ArrowRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

export default function JoinCta() {
  return (
    <section
      className="
        group/cta
        relative
        overflow-hidden
        border-b
        border-white/10
        bg-[#141413]
        px-5
        py-20
        text-[#f5f3ee]
        sm:px-7
        sm:py-24
        lg:px-10
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND DOT GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-dot-pattern
          opacity-[0.08]
        "
      />

      {/* =====================================================
          LARGE ORBITAL SYSTEM
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-36
          -top-36
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-white/[0.06]
          transition-transform
          duration-[1800ms]
          ease-out
          group-hover/cta:scale-105
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-dashed
          border-white/[0.07]
          animate-[spin_45s_linear_infinite]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[13%]
          top-[22%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#20c997]
          opacity-80
          shadow-[0_0_0_7px_rgba(32,201,151,0.08)]
          animate-pulse
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>

          {/* =================================================
              TOP LABEL
          ================================================== */}

          <div className="flex items-center justify-between">

            <TechnicalLabel
              index="10"
              title="JOIN THE COMMUNITY"
              category="MEMBERSHIP"
              dark
            />

            <span
              className="
                hidden
                font-mono
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-white/30
                sm:block
              "
            >
              CSE / BIT SINDRI
            </span>

          </div>


          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <div className="mt-9 max-w-6xl">

            <h2
              className="
                text-[clamp(3.2rem,7vw,7rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.065em]
                text-[#f5f3ee]
              "
            >
              BUILD SOMETHING
              <br />

              <span
                className="
                  italic
                  text-white/35
                  transition-colors
                  duration-700
                  group-hover/cta:text-white/55
                "
              >
                WORTH REMEMBERING.
              </span>
            </h2>

          </div>


          {/* =================================================
              LOWER CONTENT
          ================================================== */}

          <div
            className="
              mt-12
              grid
              gap-10
              border-t
              border-white/15
              pt-8
              md:grid-cols-12
              md:items-end
              lg:mt-14
              lg:pt-10
            "
          >

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <div className="md:col-span-7 lg:col-span-6">

              <p
                className="
                  max-w-2xl
                  text-[14px]
                  leading-7
                  text-white/65
                  sm:text-base
                  sm:leading-8
                "
              >
                Whether you are passionate about full-stack
                engineering, competitive programming, AI
                research, or digital design, the CSE Society
                offers a community of peers and mentors to
                build with.
              </p>


              {/* availability */}

              <div className="mt-5 flex items-center gap-3">

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#20c997]
                    shadow-[0_0_0_5px_rgba(32,201,151,0.07)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  OPEN TO ALL CSE STUDENTS · BIT SINDRI
                </span>

              </div>

            </div>


            {/* =================================================
                CTA
            ================================================== */}

            <div
              className="
                md:col-span-5
                md:flex
                md:justify-end
                lg:col-span-6
              "
            >

              <Link
                href="/join"
                className="
                  group/btn
                  relative
                  inline-flex
                  w-full
                  items-center
                  justify-between
                  gap-8
                  overflow-hidden
                  bg-[#f5f3ee]
                  px-7
                  py-5
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#141413]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_20px_55px_rgba(0,0,0,0.35)]
                  sm:w-fit
                  sm:min-w-[280px]
                  sm:px-8
                "
              >

                {/* hover fill */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-0.5
                    w-0
                    bg-[#20c997]
                    transition-all
                    duration-500
                    group-hover/btn:w-full
                  "
                />

                <span>
                  JOIN THE CSE SOCIETY
                </span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    border
                    border-black/10
                    transition-transform
                    duration-500
                    group-hover/btn:translate-x-1
                  "
                >
                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                  />
                </span>

              </Link>

            </div>

          </div>


          {/* =================================================
              BOTTOM SYSTEM ROW
          ================================================== */}

          <div
            className="
              mt-12
              flex
              flex-col
              gap-4
              border-t
              border-white/10
              pt-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div className="flex items-center gap-4">

              <span className="font-mono text-[8px] tracking-[0.2em] text-white/25">
                10
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
                NEXT CHAPTER
              </span>

            </div>


            <div className="flex items-center gap-2">

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                READY TO BUILD?
              </span>

              <MoveUpRight
                size={12}
                strokeWidth={1.2}
                className="
                  text-white/30
                  transition-transform
                  duration-300
                  group-hover/cta:translate-x-0.5
                  group-hover/cta:-translate-y-0.5
                "
              />

            </div>

          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}