"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

const featuredAlumni = [
  {
    number: "01",
    name: "Swati Jha",
    company: "Microsoft",
    meta: "BIT SINDRI · CSE",
    description:
      "Software Engineer at Microsoft, with a background in computer science, competitive coding and technical community leadership.",
    watermark: "MICROSOFT",
  },
  {
    number: "02",
    name: "Ruma Karn",
    company: "Amazon",
    meta: "BIT SINDRI · CSE",
    description:
      "A CSE alumna whose journey reflects the strong technical foundation and industry opportunities built at BIT Sindri.",
    watermark: "AMAZON",
  },
];

const alumniDirectory = [
  {
    name: "Kumar Abhishek",
    batch: "B.Tech. '24",
    role: "Software Engineer",
    company: "Samsung R&D",
    domain: "R&D ENGINEERING",
  },
  {
    name: "Ravi Shankar",
    batch: "B.Tech. '22",
    role: "Associate Software Engineer",
    company: "Xiaomi India",
    domain: "CONSUMER TECH",
  },
  {
    name: "Pratik Kumar",
    batch: "B.Tech. '11",
    role: "Full Stack Developer",
    company: "ML · GenAI",
    domain: "FULL STACK / AI",
  },
  {
    name: "Sujeet Srivastava",
    batch: "B.Tech. '93",
    role: "CEO",
    company: "Arenyam Technologies",
    domain: "TECH LEADERSHIP",
  },
];

export default function AlumniPage() {
  const [activeAlumni, setActiveAlumni] = useState<string | null>(null);

  return (
    <main className="w-full overflow-x-hidden bg-[#f7f6f1] text-[#151514]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="border-b border-black/10 px-5 pb-12 pt-28 sm:px-8 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.24em] text-neutral-400 sm:text-[9px]">
            <span>01</span>
            <span className="h-px w-8 bg-black/20" />
            <span className="font-semibold text-neutral-600">
              ALUMNI NETWORK
            </span>
            <span className="text-neutral-300">/</span>
            <span>BIT SINDRI</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <h1 className="max-w-5xl text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.8] tracking-[-0.08em]">
                Built here.
                <br />
                <span className="text-black/25">
                  Impact beyond.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-[13px] leading-6 text-neutral-600 sm:text-[14px]">
                From software engineering and AI to technology leadership,
                BIT Sindri alumni continue carrying the community forward.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-5 lg:col-span-4 lg:border-t-0 lg:pt-0">

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                  FEATURED
                </span>

                <div className="mt-1 text-4xl font-medium tracking-[-0.06em]">
                  02
                </div>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                  NETWORK
                </span>

                <div className="mt-2 font-mono text-[9px] leading-4 tracking-[0.12em] text-neutral-600">
                  INDUSTRY
                  <br />
                  RESEARCH
                  <br />
                  LEADERSHIP
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MARQUEE
      ========================================================= */}

      <div className="overflow-hidden border-b border-black/10 bg-[#151514] py-2 text-white">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap font-mono text-[8px] tracking-[0.2em] text-white/50">
          {[
            "MICROSOFT",
            "AMAZON",
            "SAMSUNG R&D",
            "XIAOMI INDIA",
            "GEN AI",
            "FULL STACK",
            "TECH LEADERSHIP",
            "MICROSOFT",
            "AMAZON",
            "SAMSUNG R&D",
          ].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-10">
              {item}
              <span className="text-white/20">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================
          FEATURED STORIES
      ========================================================= */}

      <section className="border-b border-black/10 bg-[#faf9f6] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                <span>02</span>
                <span className="h-px w-7 bg-black/20" />
                <span>FEATURED STORIES</span>
              </div>

              <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                Pioneers in{" "}
                <span className="text-black/25">
                  industry.
                </span>
              </h2>
            </div>

            <Link
              href="/join"
              className="hidden items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[0.18em] sm:flex"
            >
              CONNECT
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">

            {featuredAlumni.map((person) => {
              const active = activeAlumni === person.name;

              return (
                <article
                  key={person.name}
                  onMouseEnter={() => setActiveAlumni(person.name)}
                  onMouseLeave={() => setActiveAlumni(null)}
                  className="group relative min-h-[285px] cursor-pointer overflow-hidden border border-black/10 bg-[#f5f3ee] p-6 transition-all duration-500 hover:border-black hover:shadow-xl sm:p-8"
                >

                  {/* Watermark */}

                  <div
                    className={`pointer-events-none absolute -bottom-3 right-3 select-none font-mono text-6xl font-black tracking-[-0.08em] text-black/[0.035] transition-all duration-700 sm:text-8xl ${
                      active
                        ? "translate-x-2 scale-105 text-black/[0.07]"
                        : ""
                    }`}
                  >
                    {person.watermark}
                  </div>

                  {/* Top */}

                  <div className="relative z-10 flex items-start justify-between">

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] text-neutral-400">
                        {person.number}
                      </span>

                      <span className="h-px w-6 bg-black/15" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-500">
                        {person.meta}
                      </span>
                    </div>

                    <span className="border border-black/10 bg-[#faf9f6] px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.12em]">
                      {person.company}
                    </span>
                  </div>

                  {/* Name */}

                  <div className="relative z-10 mt-12">
                    <h3 className="text-[clamp(2.4rem,4vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
                      {person.name}
                    </h3>

                    <p className="mt-4 max-w-md text-[12px] leading-5 text-neutral-500">
                      {person.description}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between border-t border-black/10 pt-4 sm:left-8 sm:right-8">

                    <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
                      <BriefcaseBusiness size={11} />
                      {person.company}
                    </div>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "border-black bg-black text-white"
                          : "border-black/10"
                      }`}
                    >
                      <ArrowUpRight size={13} />
                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECTORY
      ========================================================= */}

      <section className="border-b border-black/10 bg-[#f7f6f1] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                <span>03</span>
                <span className="h-px w-7 bg-black/20" />
                <span>ALUMNI DIRECTORY</span>
              </div>

              <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                A network that{" "}
                <span className="text-black/25">
                  keeps growing.
                </span>
              </h2>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-400">
              04 PROFILES
            </span>

          </div>

          <div className="mt-9 border-t border-black/10">

            {alumniDirectory.map((person, index) => (
              <article
                key={person.name}
                className="group grid cursor-pointer gap-3 border-b border-black/10 py-5 transition-all duration-300 hover:bg-white/70 sm:grid-cols-12 sm:items-center sm:gap-5 sm:hover:px-3"
              >

                <div className="sm:col-span-1">
                  <span className="font-mono text-[8px] text-neutral-400 group-hover:text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="sm:col-span-4">
                  <h3 className="text-lg font-medium tracking-tight">
                    {person.name}
                  </h3>

                  <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-neutral-400">
                    {person.batch}
                  </span>
                </div>

                <div className="sm:col-span-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-neutral-500">
                    {person.role}
                  </p>

                  <p className="mt-1 text-[11px] text-neutral-400">
                    {person.company}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:col-span-3 sm:justify-end sm:gap-5">

                  <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-neutral-400">
                    {person.domain}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="text-neutral-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                  />

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          MENTORSHIP CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#151514] px-5 py-12 text-[#f7f6f1] sm:px-8 lg:px-10 lg:py-14">

        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/[0.05]" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full border border-dashed border-white/[0.05]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
            <span>04</span>
            <span className="h-px w-7 bg-white/15" />
            <span>ALUMNI ENGAGEMENT</span>
            <span>/</span>
            <span>MENTORSHIP</span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.85] tracking-[-0.07em]">
                The connection
                <br />
                <span className="text-white/25">
                  continues.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[12px] leading-6 text-white/45">
                Mentorship, technical conversations and alumni interaction
                connect different generations of BIT Sindri engineers.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/join"
                className="group inline-flex w-fit items-center gap-3 bg-[#f7f6f1] px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#151514] transition-all duration-300 hover:-translate-y-1"
              >
                Connect With Society
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* tiny local animation */}
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}