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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0"
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
    <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400 sm:text-[9px]">
      <span>{number}</span>

      <span className="h-px w-7 bg-black/20" />

      <span className="font-semibold text-neutral-500">
        {title}
      </span>

      <span className="text-neutral-300">/</span>

      <span>{category}</span>
    </div>
  );
}

export default function AboutPage() {
  const [activeDiscipline, setActiveDiscipline] = useState(1);

  const ActiveIcon = disciplines[activeDiscipline].icon;

  return (
    <main className="about-page w-full overflow-x-hidden bg-[#f7f5f0] text-[#141413]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero border-b border-black/10 px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <SectionLabel
              number="01"
              title="ABOUT"
              category="DEPARTMENT & SOCIETY"
            />
          </Reveal>

          <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:items-center">

            {/* LEFT */}

            <div className="lg:col-span-6">

              <Reveal delay={80}>
                <h1 className="text-[clamp(4rem,8vw,8.2rem)] font-medium leading-[0.82] tracking-[-0.075em]">
                  Computer
                  <br />
                  Science
                  <br />

                  <span className="text-black/25">
                    & Engineering.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 max-w-lg text-[14px] leading-6 text-neutral-600 sm:text-[15px]">
                  A department rooted in rigorous engineering,
                  computational thinking, and real-world
                  problem solving since 1987.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-8 flex items-center gap-8">

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                      ESTABLISHED
                    </p>

                    <p className="mt-1 text-3xl font-medium tracking-tight">
                      1987
                    </p>
                  </div>

                  <div className="h-10 w-px bg-black/15" />

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                      FIRST BATCH
                    </p>

                    <p className="mt-1 text-3xl font-medium tracking-tight">
                      1991
                    </p>
                  </div>

                </div>
              </Reveal>

              <Reveal delay={280}>
                <Link
                  href="#legacy"
                  className="group mt-8 inline-flex items-center gap-3 bg-[#141413] px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore Our Journey

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Reveal>

            </div>

            {/* RIGHT IMAGE */}

            <Reveal
              delay={180}
              className="relative lg:col-span-6 flex justify-center"
            >
              <div className="group relative -mt-50 w-full max-w-[450px] overflow-hidden border border-black/10 bg-[#dedbd2]">

                <div className="relative aspect-square overflow-hidden">

                  <Image
                    src="/images/about/about.png"
                    alt="BIT Sindri campus"
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  <div className="absolute left-5 top-5">
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <ArrowUpRight size={15} />
                  </div>

                </div>
              </div>

              {/* Small side marker */}

              <div className="absolute -right-1 bottom-[-34px] hidden border-l border-black/20 pl-5 font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400 lg:block">
                <span className="block">TECHNOLOGY</span>
                <span className="block">PEOPLE</span>
                <span className="block">PURPOSE</span>
              </div>

            </Reveal>

          </div>
        </div>
      </section>


      {/* =====================================================
          LEGACY
      ====================================================== */}

      <section
        id="legacy"
        className="about-legacy border-b border-black/10 bg-[#faf9f6] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
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

                <span className="text-black/25">
                  over decades.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={150}
              className="lg:col-span-4 lg:col-start-9"
            >
              <p className="text-[12px] leading-5 text-neutral-500 sm:text-[13px]">
                The Department of Computer Science &
                Engineering was established in 1987 at BIT
                Sindri, creating a foundation for generations
                of computer science education.
              </p>
            </Reveal>

          </div>

          <div className="mt-10 grid border-t border-black/10 md:grid-cols-2">

            {timeline.map((item, index) => (
              <Reveal
                key={item.year}
                delay={index * 100}
              >
                <div
                  className={`grid gap-5 border-b border-black/10 py-7 sm:grid-cols-[100px_1fr] ${
                    index === 0
                      ? "md:border-r md:pr-8"
                      : "md:pl-8"
                  }`}
                >

                  <span className="text-3xl font-medium tracking-[-0.05em] text-black/35">
                    {item.year}
                  </span>

                  <div>

                    <h3 className="text-[15px] font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-[11px] leading-5 text-neutral-500">
                      {item.text}
                    </p>

                  </div>

                </div>
              </Reveal>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DISCIPLINES
      ====================================================== */}

      <section className="about-disciplines border-b border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
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

                <span className="text-black/25">
                  behind the craft.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={140}
              className="lg:col-span-4 lg:col-start-9"
            >
              <p className="text-[12px] leading-5 text-neutral-500">
                From algorithms and systems to artificial
                intelligence, networks, databases and software
                engineering, the department covers core areas
                of computer science.
              </p>
            </Reveal>

          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">

            {/* Cards */}

            <div className="grid gap-2 sm:grid-cols-2 lg:col-span-8">

              {disciplines.map((item, index) => {
                const Icon = item.icon;
                const active = activeDiscipline === index;

                return (
                  <Reveal
                    key={item.id}
                    delay={index * 40}
                  >
                    <button
                      type="button"
                      onMouseEnter={() =>
                        setActiveDiscipline(index)
                      }
                      onFocus={() =>
                        setActiveDiscipline(index)
                      }
                      onClick={() =>
                        setActiveDiscipline(index)
                      }
                      className={`
                        group flex min-h-[92px] w-full
                        items-center gap-4
                        border border-black/10
                        px-4 text-left
                        transition-all duration-300
                        ${
                          active
                            ? "bg-[#141413] text-white"
                            : "bg-transparent hover:bg-white/70"
                        }
                      `}
                    >

                      <Icon
                        size={19}
                        strokeWidth={1.3}
                        className={
                          active
                            ? "text-white"
                            : "text-neutral-500"
                        }
                      />

                      <div className="flex-1">

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
                        className={`transition-all duration-300 ${
                          active
                            ? "translate-x-0 opacity-100"
                            : "translate-x-1 opacity-0"
                        }`}
                      />

                    </button>
                  </Reveal>
                );
              })}

            </div>


            {/* Visual */}

            <Reveal
              delay={120}
              className="hidden lg:col-span-4 lg:block"
            >
              <div className="relative h-full min-h-[382px] overflow-hidden bg-[#141413] text-white">

                <div
                  className="absolute inset-0 opacity-[0.09]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="absolute left-5 top-5 font-mono text-[7px] uppercase tracking-[0.2em] text-white/35">
                  DOMAIN / {disciplines[activeDiscipline].id}
                </div>

                <div className="absolute right-5 top-5 font-mono text-[7px] uppercase tracking-[0.2em] text-white/35">
                  CSE / ACADEMICS
                </div>

                <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2">

                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-white/15">

                      <ActiveIcon
                        key={disciplines[activeDiscipline].id}
                        size={26}
                        strokeWidth={1.1}
                        className="animate-[aboutIcon_450ms_ease-out]"
                      />

                    </div>

                  </div>

                </div>

                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-5">

                  <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/30">
                    ACTIVE DISCIPLINE
                  </span>

                  <h3 className="mt-2 text-lg font-medium">
                    {disciplines[activeDiscipline].title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                      BIT SINDRI / CSE
                    </span>

                    <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.2em] text-white/35">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      ACTIVE

                    </span>

                  </div>

                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* =====================================================
          LABS
      ====================================================== */}

      <section
        className="about-labs border-b border-black/10 bg-[#faf9f6] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <SectionLabel
              number="04"
              title="INFRASTRUCTURE"
              category="LABORATORIES"
            />
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">

            <Reveal
              delay={80}
              className="lg:col-span-6"
            >
              <h2 className="text-[clamp(3rem,5.5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
                Where theory
                <br />

                meets{" "}
                <span className="text-black/25">
                  practice.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={130}
              className="lg:col-span-3"
            >
              <p className="text-[12px] leading-5 text-neutral-500">
                Dedicated laboratories support practical
                exploration across core Computer Science &
                Engineering disciplines.
              </p>
            </Reveal>

            <Reveal
              delay={180}
              className="lg:col-span-3"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-neutral-900">

                <Image
                  src="/images/about/about.png"
                  alt="Computer Science laboratory"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <span className="absolute bottom-4 left-4 font-mono text-[7px] uppercase tracking-[0.18em] text-white">
                  IDEAS INTO REAL-WORLD SOLUTIONS
                </span>

              </div>
            </Reveal>

          </div>

          <div className="mt-10 grid gap-x-10 md:grid-cols-2">

            {/* LEFT LABS */}

            <div className="border-t border-black/10">

              {labsLeft.map((lab, index) => (
                <Reveal
                  key={lab}
                  delay={index * 50}
                >
                  <div className="group flex items-center justify-between border-b border-black/10 py-4">

                    <div className="flex items-center gap-4">

                      <span className="font-mono text-[7px] text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] font-medium">
                        {lab}
                      </span>

                    </div>

                    <ArrowUpRight
                      size={12}
                      className="text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                    />

                  </div>
                </Reveal>
              ))}

            </div>


            {/* RIGHT LABS */}

            <div className="border-t border-black/10">

              {labsRight.map((lab, index) => (
                <Reveal
                  key={lab}
                  delay={index * 50}
                >
                  <div className="group flex items-center justify-between border-b border-black/10 py-4">

                    <div className="flex items-center gap-4">

                      <span className="font-mono text-[7px] text-neutral-400">
                        {String(index + 5).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] font-medium">
                        {lab}
                      </span>

                    </div>

                    <ArrowUpRight
                      size={12}
                      className="text-neutral-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                    />

                  </div>
                </Reveal>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SOCIETY CTA
      ====================================================== */}

      <section
        className="about-cta relative overflow-hidden bg-[#141413] px-5 py-16 text-[#f7f5f0] sm:px-8 lg:px-10 lg:py-20"
      >

        <div className="pointer-events-none absolute right-[-120px] top-[-170px] h-[500px] w-[500px] rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute right-[-70px] top-[-120px] h-[390px] w-[390px] rounded-full border border-dashed border-white/[0.06] animate-[spin_35s_linear_infinite]" />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <SectionLabel
              number="05"
              title="CSE SOCIETY"
              category="COMMUNITY"
            />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">

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

            <Reveal
              delay={160}
              className="lg:col-span-4"
            >
              <div className="relative mx-auto h-48 w-48 lg:h-56 lg:w-56">

                <div className="absolute inset-0 rounded-full border border-white/10" />

                <div className="absolute inset-6 rounded-full border border-dashed border-white/10 animate-[spin_25s_linear_infinite]" />

                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,.25)]" />

                <div className="absolute right-2 top-[35%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  LEARN
                </div>

                <div className="absolute right-[-2px] top-[50%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  BUILD
                </div>

                <div className="absolute right-2 top-[65%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  COMPETE
                </div>

                <div className="absolute right-6 top-[80%] font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  CONNECT
                </div>

              </div>
            </Reveal>

          </div>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="/events"
                className="group inline-flex items-center gap-3 bg-[#f7f5f0] px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#141413] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore Society Activities

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/team"
                className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10"
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

    </main>
  );
}