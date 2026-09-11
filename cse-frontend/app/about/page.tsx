"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Globe2,
  GitBranch,
  Network,
  Server,
  Terminal,
} from "lucide-react";

const disciplines = [
  {
    id: "01",
    title: "Algorithms & Data Structures",
    icon: GitBranch,
  },
  {
    id: "02",
    title: "Artificial Intelligence",
    icon: BrainCircuit,
  },
  {
    id: "03",
    title: "Computer Networks",
    icon: Network,
  },
  {
    id: "04",
    title: "Database Systems",
    icon: Database,
  },
  {
    id: "05",
    title: "Operating Systems",
    icon: Server,
  },
  {
    id: "06",
    title: "Software Engineering",
    icon: Code2,
  },
  {
    id: "07",
    title: "Compiler Design",
    icon: Terminal,
  },
  {
    id: "08",
    title: "Web Technologies",
    icon: Globe2,
  },
];

const labsLeft = [
  "DBMS Lab",
  "DAA Lab",
  "Operating System Lab",
  "Compiler Design Lab",
];

const labsRight = [
  "Computer Architecture Lab",
  "Computer Networks Lab",
  "Artificial Intelligence Lab",
  "Software Engineering Lab",
];

const timeline = [
  {
    year: "1987",
    title: "Department Established",
    text: "The Department of Computer Science & Engineering was established at BIT Sindri.",
  },
  {
    year: "1991",
    title: "First Batch Graduated",
    text: "The first undergraduate batch of Computer Science & Engineering completed its programme.",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`about-reveal ${
        visible ? "about-reveal-visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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

      <span className="h-px w-6 bg-black/15 dark:bg-white/15 sm:w-7" />

      <span className="font-semibold text-neutral-500">
        {title}
      </span>

      <span className="text-neutral-300 dark:text-white/20">
        /
      </span>

      <span>{category}</span>
    </div>
  );
}

function TechnicalVisual({
  activeDiscipline,
}: {
  activeDiscipline: number;
}) {
  const ActiveIcon = disciplines[activeDiscipline].icon;

  return (
    <div className="about-domain-visual relative min-h-[300px] overflow-hidden bg-[#141413] text-white sm:min-h-[350px] lg:min-h-[390px]">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.55) 1px, transparent 1px)
          `,
          backgroundSize: "38px 38px",
        }}
      />

      {/* Moving scan line */}
      <div className="about-scan-line pointer-events-none absolute left-0 right-0 h-px bg-white/10" />

      {/* Decorative coordinates */}
      <div className="absolute left-4 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-white/30 sm:left-5 sm:top-5">
        DOMAIN / {disciplines[activeDiscipline].id}
      </div>

      <div className="absolute right-4 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-white/30 sm:right-5 sm:top-5">
        CSE / ACADEMICS
      </div>

      <div className="absolute bottom-[94px] left-4 font-mono text-[7px] text-white/20 sm:left-5">
        23°47′N
      </div>

      <div className="absolute bottom-[94px] right-4 font-mono text-[7px] text-white/20 sm:right-5">
        86°26′E
      </div>

      {/* Central system */}
      <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2">
        <div className="about-orbit-outer flex h-36 w-36 items-center justify-center rounded-full border border-white/10 sm:h-44 sm:w-44">
          <div className="absolute h-full w-full rounded-full border border-dashed border-white/[0.08]" />

          <div className="about-orbit-inner flex h-24 w-24 items-center justify-center rounded-full border border-white/15 sm:h-28 sm:w-28">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] sm:h-20 sm:w-20">
              <ActiveIcon
                key={disciplines[activeDiscipline].id}
                size={27}
                strokeWidth={1.05}
                className="about-active-icon"
              />
            </div>
          </div>

          {/* orbit nodes */}
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400" />
          <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/40" />
          <span className="absolute left-0 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30" />
          <span className="absolute right-0 top-1/2 h-1 w-1 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/10 p-4 backdrop-blur-[2px] sm:p-5">
        <div className="flex items-end justify-between gap-5">
          <div className="min-w-0">
            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/30">
              ACTIVE DISCIPLINE
            </span>

            <h3 className="mt-1.5 truncate text-base font-medium tracking-tight sm:text-lg">
              {disciplines[activeDiscipline].title}
            </h3>
          </div>

          <span className="flex shrink-0 items-center gap-2 font-mono text-[7px] uppercase tracking-[0.2em] text-white/35">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [activeDiscipline, setActiveDiscipline] = useState(1);

  return (
    <main className="about-page w-full overflow-x-hidden bg-[var(--cse-bg)] text-[var(--cse-text)]">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="about-hero border-b border-black/10 px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <SectionLabel
              number="01"
              title="ABOUT"
              category="DEPARTMENT & SOCIETY"
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">

            {/* LEFT */}
            <div className="lg:col-span-6">

              <Reveal delay={80}>
                <h1 className="max-w-4xl text-[clamp(3.7rem,8vw,8.2rem)] font-medium leading-[0.82] tracking-[-0.075em]">
                  Computer
                  <br />
                  Science
                  <br />
                  <span className="text-[var(--cse-text-soft)]">
                    & Engineering.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-7 max-w-lg text-[13px] leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-8 sm:text-[15px]">
                  A department rooted in rigorous engineering,
                  computational thinking, and real-world problem
                  solving since 1987.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-7 flex items-center gap-6 sm:mt-8 sm:gap-8">

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                      ESTABLISHED
                    </p>

                    <p className="mt-1 text-2xl font-medium tracking-tight sm:text-3xl">
                      1987
                    </p>
                  </div>

                  <div className="h-9 w-px bg-black/10 dark:bg-white/10 sm:h-10" />

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                      FIRST BATCH
                    </p>

                    <p className="mt-1 text-2xl font-medium tracking-tight sm:text-3xl">
                      1991
                    </p>
                  </div>

                </div>
              </Reveal>

              <Reveal delay={280}>
                <Link
                  href="#legacy"
                  className="group mt-8 inline-flex items-center gap-3 bg-[#141413] px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                  Explore Our Journey

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>

            </div>

            {/* HERO IMAGE */}
            <Reveal
              delay={180}
              className="relative lg:col-span-6"
            >
              <div className="about-image-frame group relative mx-auto w-full max-w-[520px] overflow-visible lg:ml-auto">

                {/* offset frame */}
                <div className="absolute -bottom-3 -right-3 h-full w-full border border-black/10 dark:border-white/10 sm:-bottom-4 sm:-right-4" />

                <div className="relative aspect-[4/3] overflow-hidden border border-black/10 bg-neutral-200 dark:border-white/10 dark:bg-neutral-900 sm:aspect-[5/4] lg:aspect-[4/5]">

                  <Image
                    src="/images/about/about.png"
                    alt="BIT Sindri campus"
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                  {/* image scan */}
                  <div className="about-image-scan absolute left-0 right-0 h-px bg-white/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute left-4 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-white/60 sm:left-5 sm:top-5">
                    BIT SINDRI / CSE
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white sm:bottom-5 sm:left-5 sm:right-5">
                    <div>
                      <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/50">
                        EST.
                      </span>
                      <span className="ml-2 font-mono text-[9px] tracking-[0.1em]">
                        1987
                      </span>
                    </div>

                    <ArrowUpRight size={15} />
                  </div>

                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* =========================================================
          LEGACY
      ========================================================== */}

      <section
        id="legacy"
        className="about-legacy border-b border-black/10 bg-[var(--cse-surface)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <SectionLabel
              number="02"
              title="DEPARTMENT LEGACY"
              category="HISTORY"
            />
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">

            <Reveal
              delay={80}
              className="lg:col-span-7"
            >
              <h2 className="text-[clamp(3rem,5.5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                A foundation built
                <br />
                <span className="text-[var(--cse-text-soft)]">
                  over decades.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={150}
              className="lg:col-span-4 lg:col-start-9"
            >
              <p className="text-[12px] leading-5 text-neutral-500 dark:text-neutral-400 sm:text-[13px]">
                The Department of Computer Science &
                Engineering was established in 1987 at BIT
                Sindri, creating a foundation for generations
                of computer science education.
              </p>
            </Reveal>

          </div>

          <div className="relative mt-10 border-t border-black/10 dark:border-white/10">

            {/* central timeline line on desktop */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-black/10 dark:bg-white/10 md:block" />

            <div className="grid md:grid-cols-2">

              {timeline.map((item, index) => (
                <Reveal
                  key={item.year}
                  delay={index * 100}
                >
                  <div
                    className={`relative grid gap-5 border-b border-black/10 py-8 dark:border-white/10 sm:grid-cols-[100px_1fr] ${
                      index === 0
                        ? "md:border-r md:pr-10"
                        : "md:pl-10"
                    }`}
                  >

                    <div>
                      <span className="font-mono text-[9px] tracking-[0.16em] text-neutral-400">
                        MILESTONE
                      </span>

                      <span className="mt-1 block text-3xl font-medium tracking-[-0.05em] text-black/30 dark:text-white/30">
                        {item.year}
                      </span>
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-neutral-400">
                          VERIFIED MILESTONE
                        </span>
                      </div>

                      <h3 className="text-[15px] font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-sm text-[11px] leading-5 text-neutral-500 dark:text-neutral-400">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </Reveal>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          DISCIPLINES
      ========================================================== */}

      <section className="about-disciplines border-b border-black/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <SectionLabel
              number="03"
              title="CURRICULUM FOCUS"
              category="AREAS OF STUDY"
            />
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">

            <Reveal
              delay={80}
              className="lg:col-span-7"
            >
              <h2 className="text-[clamp(3rem,5.5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                The disciplines
                <br />
                <span className="text-[var(--cse-text-soft)]">
                  behind the craft.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={140}
              className="lg:col-span-4 lg:col-start-9"
            >
              <p className="text-[12px] leading-5 text-neutral-500 dark:text-neutral-400">
                From algorithms and systems to artificial
                intelligence, networks, databases and software
                engineering, the department covers core areas
                of computer science.
              </p>
            </Reveal>

          </div>

          <div className="mt-10 grid gap-3 lg:grid-cols-12">

            {/* CARDS */}
            <div className="grid gap-2 sm:grid-cols-2 lg:col-span-7">

              {disciplines.map((item, index) => {
                const Icon = item.icon;
                const active = activeDiscipline === index;

                return (
                  <Reveal
                    key={item.id}
                    delay={index * 35}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDiscipline(index)}
                      onFocus={() => setActiveDiscipline(index)}
                      aria-pressed={active}
                      className={`about-discipline-card group flex min-h-[86px] w-full items-center gap-4 border px-4 py-4 text-left transition-all duration-300 sm:min-h-[94px] ${
                        active
                          ? "border-[#141413] bg-[#141413] text-white shadow-lg dark:border-white/20"
                          : "border-black/10 bg-transparent hover:-translate-y-0.5 hover:border-black/25 hover:bg-black/[0.025] dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/[0.035]"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border ${
                          active
                            ? "border-white/10 bg-white/[0.06]"
                            : "border-black/10 dark:border-white/10"
                        }`}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.3}
                          className={
                            active
                              ? "text-white"
                              : "text-neutral-500"
                          }
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span
                          className={`font-mono text-[7px] tracking-[0.18em] ${
                            active
                              ? "text-white/35"
                              : "text-neutral-400"
                          }`}
                        >
                          {item.id}
                        </span>

                        <h3 className="mt-1 text-[12px] font-semibold leading-4 sm:text-[13px]">
                          {item.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        size={13}
                        className={`shrink-0 transition-all duration-300 ${
                          active
                            ? "translate-x-0 opacity-100"
                            : "translate-x-1 opacity-30 group-hover:translate-x-0 group-hover:opacity-70"
                        }`}
                      />
                    </button>
                  </Reveal>
                );
              })}

            </div>

            {/* VISUAL */}
            <Reveal
              delay={120}
              className="lg:col-span-5"
            >
              <TechnicalVisual
                activeDiscipline={activeDiscipline}
              />
            </Reveal>

          </div>
        </div>
      </section>


      {/* =========================================================
          LABS
      ========================================================== */}

      <section className="about-labs border-b border-black/10 bg-[var(--cse-surface)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <SectionLabel
              number="04"
              title="INFRASTRUCTURE"
              category="LABORATORIES"
            />
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-start">

            <Reveal
              delay={80}
              className="lg:col-span-5"
            >
              <h2 className="text-[clamp(3rem,5.5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                Where theory
                <br />
                meets{" "}
                <span className="text-[var(--cse-text-soft)]">
                  practice.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={130}
              className="lg:col-span-3"
            >
              <p className="text-[12px] leading-5 text-neutral-500 dark:text-neutral-400">
                Dedicated laboratories support practical
                exploration across core Computer Science &
                Engineering disciplines.
              </p>
            </Reveal>

            {/* SECOND RESPONSIVE IMAGE */}
            <Reveal
              delay={180}
              className="lg:col-span-4"
            >
              <div className="group relative aspect-[4/3] overflow-hidden border border-black/10 bg-neutral-900 dark:border-white/10 sm:aspect-[16/10] lg:aspect-square">

                <Image
                  src="/images/about/about.png"
                  alt="Computer Science laboratory"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute left-4 top-4 font-mono text-[7px] uppercase tracking-[0.18em] text-white/45">
                  INFRASTRUCTURE / 04
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                  <span className="max-w-[75%] font-mono text-[7px] uppercase tracking-[0.18em] text-white/80">
                    IDEAS INTO REAL-WORLD SOLUTIONS
                  </span>

                  <ArrowUpRight size={14} />
                </div>

              </div>
            </Reveal>

          </div>

          <div className="mt-10 grid gap-x-10 md:grid-cols-2">

            {/* LEFT */}
            <div className="border-t border-black/10 dark:border-white/10">
              {labsLeft.map((lab, index) => (
                <Reveal
                  key={lab}
                  delay={index * 50}
                >
                  <div className="group flex items-center justify-between border-b border-black/10 py-4 dark:border-white/10">
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="font-mono text-[7px] text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] font-medium">
                        {lab}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={12}
                      className="shrink-0 text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black dark:text-neutral-600 dark:group-hover:text-white"
                    />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* RIGHT */}
            <div className="border-t border-black/10 dark:border-white/10">
              {labsRight.map((lab, index) => (
                <Reveal
                  key={lab}
                  delay={index * 50}
                >
                  <div className="group flex items-center justify-between border-b border-black/10 py-4 dark:border-white/10">
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="font-mono text-[7px] text-neutral-400">
                        {String(index + 5).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] font-medium">
                        {lab}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={12}
                      className="shrink-0 text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black dark:text-neutral-600 dark:group-hover:text-white"
                    />
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SOCIETY CTA
      ========================================================== */}

      <section className="about-cta relative overflow-hidden bg-[#141413] px-5 py-16 text-[#f7f5f0] sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* orbital decoration */}
        <div className="pointer-events-none absolute -right-32 -top-40 h-[430px] w-[430px] rounded-full border border-white/[0.05] sm:h-[560px] sm:w-[560px]" />

        <div className="pointer-events-none absolute -right-20 -top-28 h-[330px] w-[330px] rounded-full border border-dashed border-white/[0.07] animate-[spin_35s_linear_infinite] sm:h-[430px] sm:w-[430px]" />

        <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[350px] w-[350px] rounded-full border border-white/[0.035]" />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <SectionLabel
              number="05"
              title="CSE SOCIETY"
              category="COMMUNITY"
            />
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end">

            <Reveal
              delay={80}
              className="lg:col-span-8"
            >
              <h2 className="text-[clamp(3rem,5.5vw,5.8rem)] font-medium leading-[0.86] tracking-[-0.065em]">
                The department
                <br />
                gives us the{" "}
                <span className="text-white/25">
                  foundation.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-[12px] leading-6 text-white/50 sm:text-[13px]">
                The CSE Society extends that foundation into
                a student-driven environment for continuous
                learning, project development, competition,
                and connection.
              </p>
            </Reveal>

            {/* MOBILE + DESKTOP ORBIT */}
            <Reveal
              delay={160}
              className="lg:col-span-4"
            >
              <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56">

                <div className="absolute inset-0 rounded-full border border-white/10" />

                <div className="about-cta-orbit absolute inset-6 rounded-full border border-dashed border-white/10" />

                <div className="absolute inset-[31%] rounded-full border border-white/10 bg-white/[0.025]" />

                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,.25)]" />

                <div className="absolute right-2 top-[28%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  LEARN
                </div>

                <div className="absolute right-[-2px] top-[46%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  BUILD
                </div>

                <div className="absolute right-2 top-[64%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  COMPETE
                </div>

                <div className="absolute right-6 top-[82%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  CONNECT
                </div>

              </div>
            </Reveal>

          </div>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <Link
                href="/events"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#f7f5f0] px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#141413] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:w-fit"
              >
                Explore Society Activities

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/team"
                className="group inline-flex w-full items-center justify-center gap-3 border border-white/20 px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-fit"
              >
                Meet The Team

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =========================================================
          LOCAL MOTION
      ========================================================== */}

      <style jsx global>{`
        .about-reveal {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
          transition:
            opacity 750ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-reveal-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .about-image-scan {
          top: 0;
          animation: aboutImageScan 4.5s ease-in-out infinite;
        }

        .about-scan-line {
          top: 0;
          animation: aboutScan 5s ease-in-out infinite;
        }

        .about-orbit-outer {
          animation: aboutFloat 6s ease-in-out infinite;
        }

        .about-orbit-inner {
          animation: aboutOrbit 12s linear infinite;
        }

        .about-active-icon {
          animation: aboutIconIn 420ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-cta-orbit {
          animation: aboutOrbit 24s linear infinite;
        }

        @keyframes aboutImageScan {
          0%,
          100% {
            transform: translateY(-10%);
          }

          50% {
            transform: translateY(1100%);
          }
        }

        @keyframes aboutScan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(390px);
            opacity: 0;
          }
        }

        @keyframes aboutFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes aboutOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aboutIconIn {
          from {
            opacity: 0;
            transform: scale(0.65) rotate(-10deg);
          }

          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @media (max-width: 640px) {
          .about-reveal {
            transform: translate3d(0, 16px, 0);
          }

          .about-reveal-visible {
            transform: translate3d(0, 0, 0);
          }

          .about-image-scan {
            animation-duration: 6s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-reveal-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .about-image-scan,
          .about-scan-line,
          .about-orbit-outer,
          .about-orbit-inner,
          .about-active-icon,
          .about-cta-orbit {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}