"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  GitBranch,
  Globe2,
  Layers3,
  Sparkles,
} from "lucide-react";

type Domain = {
  id: string;
  label: string;
  sub: string;
  icon: React.ElementType;
  x: string;
  y: string;
};

const domains: Domain[] = [
  {
    id: "ai",
    label: "AI / ML",
    sub: "INTELLIGENCE",
    icon: BrainCircuit,
    x: "14%",
    y: "19%",
  },
  {
    id: "web",
    label: "WEB",
    sub: "DIGITAL SYSTEMS",
    icon: Globe2,
    x: "86%",
    y: "19%",
  },
  {
    id: "systems",
    label: "SYSTEMS",
    sub: "ENGINEERING",
    icon: Cpu,
    x: "13%",
    y: "61%",
  },
  {
    id: "cp",
    label: "CP",
    sub: "PROBLEM SOLVING",
    icon: Code2,
    x: "87%",
    y: "61%",
  },
  {
    id: "opensource",
    label: "OPEN SOURCE",
    sub: "COLLABORATION",
    icon: GitBranch,
    x: "50%",
    y: "82%",
  },
];

const backgroundSymbols = [
  {
    text: "</>",
    x: "4%",
    y: "14%",
    size: "text-[34px]",
  },
  {
    text: "{ }",
    x: "8%",
    y: "4%",
    size: "text-[28px]",
  },
  {
    text: "C++",
    x: "7%",
    y: "31%",
    size: "text-[11px]",
  },
  {
    text: "01",
    x: "92%",
    y: "30%",
    size: "text-[27px]",
  },
  {
    text: "SQL",
    x: "89%",
    y: "52%",
    size: "text-[11px]",
  },
  {
    text: "λ",
    x: "3%",
    y: "68%",
    size: "text-[40px]",
  },
  {
    text: "1010",
    x: "22%",
    y: "88%",
    size: "text-[10px]",
  },
  {
    text: "AI / ML",
    x: "87%",
    y: "82%",
    size: "text-[10px]",
  },
  {
    text: "NET",
    x: "74%",
    y: "7%",
    size: "text-[10px]",
  },
  {
    text: "API",
    x: "79%",
    y: "91%",
    size: "text-[9px]",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const [activeDomain, setActiveDomain] = useState("ai");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (window.innerWidth < 768) return;

      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();

        const x =
          ((event.clientX - rect.left) / rect.width) * 100;

        const y =
          ((event.clientY - rect.top) / rect.height) * 100;

        hero.style.setProperty("--mouse-x", `${x}%`);
        hero.style.setProperty("--mouse-y", `${y}%`);

        hero.style.setProperty(
          "--rotate-x",
          `${(y - 50) * -0.012}deg`
        );

        hero.style.setProperty(
          "--rotate-y",
          `${(x - 50) * 0.012}deg`
        );
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Very subtle scroll movement.
   * The hero stays stable instead of flying away.
   */
  const titleParallax = Math.max(
    -30,
    Math.min(0, scrollY * -0.035)
  );

  const visualParallax = Math.min(scrollY * 0.045, 32);

  const backgroundParallax = Math.max(
    -14,
    Math.min(0, scrollY * -0.016)
  );

  return (
    <section
      ref={heroRef}
      className="hero-premium relative min-h-[100svh] overflow-hidden bg-[#f8f7f2] pt-28 md:pt-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="hero-grid pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      />

      <div
        className="hero-spotlight pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      <div
        className="hero-atmosphere pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* =====================================================
          BACKGROUND TECHNICAL LANGUAGE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          transform: `translate3d(0, ${backgroundParallax}px, 0)`,
        }}
        aria-hidden="true"
      >
        {backgroundSymbols.map((item, index) => (
          <span
            key={`${item.text}-${index}`}
            className={`hero-tech-symbol absolute font-mono font-medium uppercase tracking-[0.22em] ${item.size}`}
            style={{
              left: item.x,
              top: item.y,
              animationDelay: `${index * 0.45}s`,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      {/* =====================================================
          TECHNICAL CORNER MARKS
      ====================================================== */}

      <div className="pointer-events-none absolute left-[5%] top-[19%] z-[3] hidden md:block">
        <div className="h-20 w-px bg-black/18" />
        <div className="h-px w-20 bg-black/18" />

        <span className="absolute -left-1 -top-1 h-2 w-2 bg-black/35" />
      </div>

      <div className="pointer-events-none absolute bottom-[16%] right-[5%] z-[3] hidden md:block">
        <div className="ml-auto h-20 w-px bg-black/18" />
        <div className="ml-auto h-px w-20 bg-black/18" />

        <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-black/35" />
      </div>

      {/* =====================================================
          TOP INDEX BAR
      ====================================================== */}

      <div className="relative z-30 mx-auto flex w-[91%] max-w-[1180px] items-center justify-between">
        <div className="hero-meta flex items-center gap-3 border border-black/16 bg-[#f8f7f2]/95 px-3.5 py-2.5 shadow-[0_5px_20px_rgba(0,0,0,0.025)] backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-black/70">
            01 / INDEX
          </span>

          <span className="h-px w-9 bg-black/25" />

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-black/60 sm:inline">
            BIT SINDRI
          </span>

          <span className="hidden text-black/35 sm:inline">
            /
          </span>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-black/55 lg:inline">
            COMPUTER SCIENCE & ENGINEERING
          </span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <span className="border border-black/16 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-black/70">
            LIVE / 2026
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/50">
            SOCIETY PORTAL
          </span>
        </div>
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto mt-10 grid w-[91%] max-w-[1180px] grid-cols-1 items-start gap-8 lg:mt-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="relative z-20"
          style={{
            transform: `translate3d(0, ${titleParallax}px, 0)`,
          }}
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.25em] text-black/65">
              &lt;/&gt; INNOVATION
            </span>

            <span className="h-px w-8 bg-black/25" />

            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.25em] text-black/60">
              ENGINEERING
            </span>

            <span className="h-px w-8 bg-black/25" />

            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.25em] text-black/60">
              COMMUNITY
            </span>
          </div>

          <h1 className="hero-title select-none font-black uppercase tracking-[-0.075em] text-[#41413f]">
            <span className="block text-[clamp(3.65rem,6.9vw,7rem)] leading-[0.82]">
              Computer
            </span>

            <span className="block text-[clamp(3.65rem,6.9vw,7rem)] leading-[0.82]">
              Science
            </span>

            <span className="hero-engineering block text-[clamp(3.05rem,5.6vw,5.75rem)] font-light leading-[0.9] tracking-[-0.065em] text-black/[0.38]">
              & Engineering
            </span>
          </h1>

          {/* =================================================
              INTRO
          ================================================== */}

          <div className="mt-8 max-w-[570px] border-l border-black/28 pl-5 sm:mt-10 sm:pl-6">
            <h2 className="text-[clamp(2rem,3.2vw,3.35rem)] font-medium leading-[0.96] tracking-[-0.045em] text-[#3f3f3d]">
              Where ideas{" "}
              <span className="font-serif italic text-black/60">
                become
              </span>{" "}
              impact.
            </h2>

            <p className="mt-5 max-w-[540px] text-[14px] leading-7 text-black/66 sm:text-[15px]">
              A student-driven technology community at BIT
              Sindri, bringing together builders, problem solvers
              and curious minds around computer science and
              engineering.
            </p>
          </div>
        </div>

        {/* =================================================
            SYSTEM MAP
        ================================================== */}

        <div
          className="relative z-10 mx-auto mt-2 w-full max-w-[650px] lg:mt-8"
          style={{
            transform: `
              translate3d(0, ${visualParallax}px, 0)
              rotateX(var(--rotate-x))
              rotateY(var(--rotate-y))
            `,
            transformStyle: "preserve-3d",
            transition: "transform 180ms ease-out",
          }}
        >
          <div className="relative aspect-square w-full">
            {/* Main orbital rings */}

            <div className="absolute inset-[1%] rounded-full border border-black/[0.16]" />

            <div className="hero-orbit-slow absolute inset-[7%] rounded-full border border-dashed border-black/[0.19]" />

            <div className="absolute inset-[16%] rounded-full border border-black/[0.13]" />

            <div className="hero-orbit-reverse absolute inset-[25%] rounded-full border border-dashed border-black/[0.16]" />

            <div className="hero-cross-ring absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.08]" />

            {/* =================================================
                CONNECTION LINES
            ================================================== */}

            <svg
              viewBox="0 0 700 700"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="heroNetwork"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(20,20,18,0.06)"
                  />

                  <stop
                    offset="50%"
                    stopColor="rgba(20,20,18,0.28)"
                  />

                  <stop
                    offset="100%"
                    stopColor="rgba(20,20,18,0.06)"
                  />
                </linearGradient>
              </defs>

              <line
                x1="350"
                y1="350"
                x2="100"
                y2="135"
                stroke="url(#heroNetwork)"
                strokeWidth="1.2"
              />

              <line
                x1="350"
                y1="350"
                x2="600"
                y2="135"
                stroke="url(#heroNetwork)"
                strokeWidth="1.2"
              />

              <line
                x1="350"
                y1="350"
                x2="95"
                y2="430"
                stroke="url(#heroNetwork)"
                strokeWidth="1.2"
              />

              <line
                x1="350"
                y1="350"
                x2="605"
                y2="430"
                stroke="url(#heroNetwork)"
                strokeWidth="1.2"
              />

              <line
                x1="350"
                y1="350"
                x2="350"
                y2="585"
                stroke="url(#heroNetwork)"
                strokeWidth="1.2"
              />

              <circle
                cx="100"
                cy="135"
                r="4"
                fill="rgba(20,20,18,0.38)"
              />

              <circle
                cx="600"
                cy="135"
                r="4"
                fill="rgba(20,20,18,0.38)"
              />

              <circle
                cx="95"
                cy="430"
                r="4"
                fill="rgba(20,20,18,0.38)"
              />

              <circle
                cx="605"
                cy="430"
                r="4"
                fill="rgba(20,20,18,0.38)"
              />

              <circle
                cx="350"
                cy="585"
                r="4"
                fill="rgba(20,20,18,0.38)"
              />
            </svg>

            {/* =================================================
                MOVING NODES
            ================================================== */}

            <span className="hero-orbit-dot hero-dot-one" />
            <span className="hero-orbit-dot hero-dot-two" />
            <span className="hero-orbit-dot hero-dot-three" />

            {/* =================================================
                CENTER
            ================================================== */}

            <div className="hero-core absolute left-1/2 top-1/2 z-20 flex h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/24 bg-[#f8f7f2]/96 shadow-[0_25px_85px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:h-[235px] sm:w-[235px]">
              <div className="absolute inset-3 rounded-full border border-black/[0.10]" />

              <div className="hero-core-spin absolute inset-7 rounded-full border border-dashed border-black/[0.13]" />

              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-black/22 bg-white/45">
                  <Layers3
                    size={19}
                    strokeWidth={1.35}
                  />
                </div>

                <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-black/52">
                  COMPUTER SCIENCE
                </p>

                <p className="mt-1 text-[23px] font-semibold tracking-[-0.055em] text-black/82">
                  BIT SINDRI
                </p>

                <div className="mx-auto my-3 h-px w-12 bg-black/25" />

                <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-black/50">
                  ESTABLISHED / 1987
                </p>
              </div>
            </div>

            {/* =================================================
                DOMAIN CARDS
            ================================================== */}

            {domains.map((domain) => {
              const Icon = domain.icon;
              const active = activeDomain === domain.id;

              return (
                <button
                  key={domain.id}
                  type="button"
                  onMouseEnter={() =>
                    setActiveDomain(domain.id)
                  }
                  onFocus={() =>
                    setActiveDomain(domain.id)
                  }
                  className={`hero-domain absolute z-30 -translate-x-1/2 -translate-y-1/2 ${
                    active ? "scale-[1.055]" : "scale-100"
                  }`}
                  style={{
                    left: domain.x,
                    top: domain.y,
                  }}
                  aria-label={`Explore ${domain.label}`}
                >
                  <div
                    className={`relative flex min-w-[145px] items-center gap-3 border px-3.5 py-3.5 transition-all duration-500 sm:min-w-[165px] ${
                      active
                        ? "border-black/40 bg-[#181817] text-[#f8f7f2] shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
                        : "border-black/[0.20] bg-[#f8f7f2]/97 text-black/82 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border ${
                        active
                          ? "border-white/25"
                          : "border-black/18"
                      }`}
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.35}
                      />
                    </div>

                    <div className="text-left">
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em]">
                        {domain.label}
                      </p>

                      <p
                        className={`mt-1 font-mono text-[7px] uppercase tracking-[0.13em] ${
                          active
                            ? "text-white/55"
                            : "text-black/48"
                        }`}
                      >
                        {domain.sub}
                      </p>
                    </div>

                    {active && (
                      <span className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                    )}
                  </div>
                </button>
              );
            })}

            {/* =================================================
                STATUS
            ================================================== */}

            <div className="absolute bottom-[1%] left-1/2 z-40 -translate-x-1/2">
              <div className="flex items-center gap-2.5 whitespace-nowrap border border-black/18 bg-[#f8f7f2]/97 px-4 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.08)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                <span className="font-mono text-[7px] font-medium uppercase tracking-[0.25em] text-black/58">
                  SYSTEM ACTIVE
                </span>

                <span className="text-black/25">
                  /
                </span>

                <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.2em] text-black/75">
                  {activeDomain}
                </span>
              </div>
            </div>

            {/* =================================================
                SYSTEM LABELS
            ================================================== */}

            <div className="absolute left-[3%] top-[49%] hidden font-mono text-[7px] font-medium uppercase tracking-[0.25em] text-black/48 sm:block">
              NETWORK / 01
            </div>

            <div className="absolute right-[2%] top-[49%] hidden font-mono text-[7px] font-medium uppercase tracking-[0.25em] text-black/48 sm:block">
              NODE / 05
            </div>

            <div className="absolute left-1/2 top-[1%] -translate-x-1/2 whitespace-nowrap font-mono text-[7px] font-medium uppercase tracking-[0.3em] text-black/48">
              CSE / SYSTEM MAP
            </div>

            <div className="absolute right-[8%] top-[27%] font-mono text-[8px] uppercase tracking-[0.22em] text-black/42">
              01
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          LOWER ACTION BAR
      ====================================================== */}

      <div className="relative z-20 mx-auto mt-7 flex w-[91%] max-w-[1180px] flex-col gap-6 border-t border-black/15 py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[8px] font-medium uppercase tracking-[0.22em] text-black/55">
          <span className="flex items-center gap-2">
            <Cpu size={11} />
            EST. 1987
          </span>

          <span>/</span>
          <span>AI / ML</span>

          <span>/</span>
          <span>WEB</span>

          <span>/</span>
          <span>SYSTEMS</span>

          <span>/</span>
          <span>CP</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/join"
            className="group inline-flex items-center gap-4 bg-[#171716] px-5 py-3.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f8f7f2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
          >
            Join Society

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/events"
            className="group inline-flex items-center gap-4 border border-black/20 bg-[#f8f7f2]/90 px-5 py-3.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-black/72 transition-all duration-300 hover:-translate-y-1 hover:border-black/40"
          >
            Explore Events

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <div className="relative z-20 mx-auto flex w-[91%] max-w-[1180px] items-center justify-between pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/18">
            <ArrowDown
              size={11}
              className="animate-bounce"
            />
          </div>

          <span className="font-mono text-[8px] font-medium uppercase tracking-[0.25em] text-black/50">
            Scroll to explore
          </span>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Sparkles
            size={11}
            className="text-black/40"
          />

          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-black/42">
            CSE / BIT SINDRI · 2026 EDITION
          </span>
        </div>
      </div>
    </section>
  );
}