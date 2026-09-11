"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  MapPin,
  Play,
  Terminal,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import { events } from "@/data/events";

/* =========================================================
   TYPES
========================================================= */

type PatternKind = "spark" | "race" | "network" | "gear" | "pulse";

type CategoryTheme = {
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  accent: string;
  rgb: string;
  pattern: PatternKind;
};

/* =========================================================
   CATEGORY THEMES
========================================================= */

const THEMES: Array<{
  test: (value: string) => boolean;
  theme: CategoryTheme;
}> = [
  {
    test: (value) =>
      value.includes("hackathon") || value.includes("innovation"),
    theme: {
      Icon: Zap,
      accent: "#ffb648",
      rgb: "255,182,72",
      pattern: "spark",
    },
  },
  {
    test: (value) =>
      value.includes("competitive") ||
      value.includes("coding") ||
      value.includes("programming"),
    theme: {
      Icon: Code2,
      accent: "#20c997",
      rgb: "32,201,151",
      pattern: "race",
    },
  },
  {
    test: (value) =>
      value.includes("community") || value.includes("open"),
    theme: {
      Icon: Users,
      accent: "#4dabf7",
      rgb: "77,171,247",
      pattern: "network",
    },
  },
  {
    test: (value) =>
      value.includes("technical") ||
      value.includes("workshop") ||
      value.includes("session"),
    theme: {
      Icon: Cpu,
      accent: "#b197fc",
      rgb: "177,151,252",
      pattern: "gear",
    },
  },
];

const DEFAULT_THEME: CategoryTheme = {
  Icon: Terminal,
  accent: "#20c997",
  rgb: "32,201,151",
  pattern: "pulse",
};

function getTheme(category: string): CategoryTheme {
  const value = category.toLowerCase();
  return (
    THEMES.find((entry) => entry.test(value))?.theme ?? DEFAULT_THEME
  );
}

/* =========================================================
   REVEAL
   Only used below the first viewport.
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`events-reveal ${
        visible ? "events-reveal-visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="event-section-label">
      <span>{number}</span>
      <i />
      <strong>{children}</strong>
    </div>
  );
}

/* =========================================================
   MAGNETIC
========================================================= */

function Magnetic({
  children,
  strength = 0.18,
  max = 7,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      (event.clientX - (rect.left + rect.width / 2)) * strength;

    const y =
      (event.clientY - (rect.top + rect.height / 2)) * strength;

    const limitedX = Math.max(-max, Math.min(max, x));
    const limitedY = Math.max(-max, Math.min(max, y));

    element.style.transform = `translate3d(${limitedX}px, ${limitedY}px, 0)`;
  };

  const leave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={`event-magnetic ${className}`}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {children}
    </div>
  );
}

/* =========================================================
   SCROLL PROGRESS
========================================================= */

function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const documentElement = document.documentElement;
      const max =
        documentElement.scrollHeight - documentElement.clientHeight;

      const progress =
        max > 0
          ? (documentElement.scrollTop / max) * 100
          : 0;

      if (ref.current) {
        ref.current.style.width = `${progress}%`;
      }

      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="event-progress">
      <div ref={ref} />
    </div>
  );
}

/* =========================================================
   CODE STREAM
========================================================= */

function CodeStream() {
  const lines = [
    "const idea = build();",
    "git commit -m 'ship'",
    "while(problem) solve();",
    "npm run innovate",
    "if (ready) deploy();",
    "function createImpact()",
    "return experience;",
    ">> CSE / BIT SINDRI",
  ];

  return (
    <div className="event-code-stream" aria-hidden="true">
      <div className="event-code-column">
        {lines.map((line, index) => (
          <span key={`${line}-${index}`}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            {line}
          </span>
        ))}
      </div>

      <div className="event-code-column event-code-column-alt">
        {[...lines].reverse().map((line, index) => (
          <span key={`${line}-alt-${index}`}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   HERO SYSTEM VISUAL
========================================================= */

function HeroSystemVisual() {
  return (
    <div className="hero-system">
      <div className="hero-system-grid" />
      <div className="hero-system-glow" />

      <div className="hero-system-top">
        <span>EVENT ENGINE</span>
        <span>SYS / 01</span>
      </div>

      <div className="hero-system-center">
        <div className="hero-system-ring ring-a" />
        <div className="hero-system-ring ring-b" />
        <div className="hero-system-ring ring-c" />

        <div className="hero-system-core">
          <Code2 size={25} strokeWidth={1.3} />
        </div>

        <div className="hero-system-node node-a" />
        <div className="hero-system-node node-b" />
        <div className="hero-system-node node-c" />
        <div className="hero-system-node node-d" />
      </div>

      <div className="hero-system-lines">
        <div>
          <span>01</span>
          <i />
          <b>IDEA</b>
          <em>READY</em>
        </div>

        <div>
          <span>02</span>
          <i />
          <b>BUILD</b>
          <em>ACTIVE</em>
        </div>

        <div>
          <span>03</span>
          <i />
          <b>IMPACT</b>
          <em>OPEN</em>
        </div>
      </div>

      <div className="hero-system-bottom">
        <span>
          <i />
          LIVE SYSTEM
        </span>

        <span>SCROLL TO EXPLORE ↓</span>
      </div>

      <div className="hero-cross cross-a" />
      <div className="hero-cross cross-b" />
    </div>
  );
}

/* =========================================================
   EVENT VISUAL
========================================================= */

function EventVisual({
  event,
}: {
  event: (typeof events)[number];
}) {
  const theme = getTheme(event.category);
  const { Icon } = theme;

  return (
    <div
      className="event-visual"
      style={
        {
          "--event-accent": theme.accent,
          "--event-rgb": theme.rgb,
        } as React.CSSProperties
      }
    >
      <div className="event-visual-grid" />
      <div className="event-visual-glow" />

      {theme.pattern === "spark" && (
        <div className="visual-spark">
          <div className="visual-spark-ring ring-1" />
          <div className="visual-spark-ring ring-2" />

          <div className="visual-spark-core">
            <Icon size={28} strokeWidth={1.4} />
          </div>

          <div className="spark-particles">
            {Array.from({ length: 8 }).map((_, index) => (
              <i
                key={index}
                style={
                  {
                    "--particle": index,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      )}

      {theme.pattern === "race" && (
        <div className="visual-race">
          <div className="visual-race-icon">
            <Icon size={23} strokeWidth={1.4} />
          </div>

          <div className="race-lines">
            {[0, 1, 2, 3].map((item) => (
              <div className="race-line" key={item}>
                <span
                  style={
                    {
                      "--race-delay": `${item * 0.2}s`,
                    } as React.CSSProperties
                  }
                />
              </div>
            ))}
          </div>

          <div className="race-command">
            <span>run --challenge</span>
            <i />
          </div>
        </div>
      )}

      {theme.pattern === "network" && (
        <div className="visual-network">
          <svg viewBox="0 0 240 240" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => {
              const angle =
                (index / 6) * Math.PI * 2 - Math.PI / 2;

              const x = 120 + Math.cos(angle) * 82;
              const y = 120 + Math.sin(angle) * 82;

              return (
                <line
                  key={`line-${index}`}
                  x1="120"
                  y1="120"
                  x2={x}
                  y2={y}
                  className="network-line"
                  style={
                    {
                      "--network-delay": `${index * 0.25}s`,
                    } as React.CSSProperties
                  }
                />
              );
            })}

            {Array.from({ length: 6 }).map((_, index) => {
              const angle =
                (index / 6) * Math.PI * 2 - Math.PI / 2;

              const x = 120 + Math.cos(angle) * 82;
              const y = 120 + Math.sin(angle) * 82;

              return (
                <circle
                  key={`node-${index}`}
                  cx={x}
                  cy={y}
                  r="5"
                  className="network-node"
                  style={
                    {
                      "--network-delay": `${index * 0.18}s`,
                    } as React.CSSProperties
                  }
                />
              );
            })}
          </svg>

          <div className="network-core">
            <Icon size={22} strokeWidth={1.4} />
          </div>
        </div>
      )}

      {theme.pattern === "gear" && (
        <div className="visual-gear">
          <div className="gear gear-outer">
            {Array.from({ length: 12 }).map((_, index) => (
              <i
                key={index}
                style={
                  {
                    "--gear-index": index,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          <div className="gear gear-inner">
            {Array.from({ length: 8 }).map((_, index) => (
              <i
                key={index}
                style={
                  {
                    "--gear-index": index,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          <div className="gear-core">
            <Icon size={22} strokeWidth={1.4} />
          </div>
        </div>
      )}

      {theme.pattern === "pulse" && (
        <div className="visual-pulse">
          <div className="pulse-ring pulse-1" />
          <div className="pulse-ring pulse-2" />
          <div className="pulse-ring pulse-3" />

          <div className="pulse-core">
            <Icon size={24} strokeWidth={1.3} />
          </div>
        </div>
      )}

      <span className="visual-code visual-code-a">
        {"</>"}
      </span>

      <span className="visual-code visual-code-b">
        {"{ }"}
      </span>

      <span className="visual-code visual-code-c">
        {"//"}
      </span>

      <span className="visual-label visual-label-a">
        EVENT / ACTIVE
      </span>

      <span className="visual-label visual-label-b">
        SYSTEM / 001
      </span>

      <div className="visual-scan" />
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeEventId, setActiveEventId] = useState<string | null>(
    null
  );

  const heroRef = useRef<HTMLElement | null>(null);
  const heroGlowRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLElement | null>(null);

  /* -------------------------------------------------------
     HERO CURSOR GLOW
  ------------------------------------------------------- */

  useEffect(() => {
    const hero = heroRef.current;
    const glow = heroGlowRef.current;

    if (!hero || !glow) return;

    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)")
        .matches
    ) {
      return;
    }

    let raf = 0;

    const target = {
      x: 50,
      y: 50,
    };

    const current = {
      x: 50,
      y: 50,
    };

    const move = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();

      target.x =
        ((event.clientX - rect.left) / rect.width) * 100;

      target.y =
        ((event.clientY - rect.top) / rect.height) * 100;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;

      glow.style.left = `${current.x}%`;
      glow.style.top = `${current.y}%`;

      raf = window.requestAnimationFrame(tick);
    };

    hero.addEventListener("pointermove", move);
    raf = window.requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener("pointermove", move);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  /* -------------------------------------------------------
     FEATURED TILT
  ------------------------------------------------------- */

  const moveFeatured = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const element = featuredRef.current;

    if (!element) return;

    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)")
        .matches
    ) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty(
      "--tilt-x",
      `${(-y * 2.5).toFixed(2)}deg`
    );

    element.style.setProperty(
      "--tilt-y",
      `${(x * 2.5).toFixed(2)}deg`
    );
  };

  const resetFeatured = () => {
    const element = featuredRef.current;

    if (!element) return;

    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
  };

  /* -------------------------------------------------------
     CATEGORIES
  ------------------------------------------------------- */

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(events.map((event) => event.category))
      ),
    ],
    []
  );

  /* -------------------------------------------------------
     FILTER
  ------------------------------------------------------- */

  const filteredEvents = useMemo(() => {
    if (selectedCategory === "All") {
      return events;
    }

    return events.filter(
      (event) => event.category === selectedCategory
    );
  }, [selectedCategory]);

  const featuredEvent = filteredEvents[0] ?? null;
  const listEvents = filteredEvents.slice(1);

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <main className="events-page">
      <ScrollProgress />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="events-hero"
      >
        <div className="hero-background">
          <div className="hero-grid" />
          <div className="hero-vignette" />
          <div
            ref={heroGlowRef}
            className="hero-cursor-glow"
          />
          <div className="hero-scan" />
          <CodeStream />
        </div>

        <div className="hero-container">
          {/* TOP BAR */}

          <div className="hero-topbar">
            <div className="hero-top-left">
              <span className="hero-live-dot" />
              <span>HACK / BUILD / COMPETE / CONNECT</span>
            </div>

            <div className="hero-top-center">
              CSE SOCIETY / BIT SINDRI
            </div>

            <div className="hero-top-right">
              <span>EVENTS</span>
              <span>2026</span>
            </div>
          </div>

          {/* HERO GRID */}

          <div className="hero-main">
            <div className="hero-copy">
              <div className="hero-label">
                <SectionLabel number="01">
                  EVENTS / EXPERIENCES
                </SectionLabel>
              </div>

              <div className="hero-eyebrow">
                <span />
                LIVE / EXPERIENCES / ARCHIVE
              </div>

              <h1 className="hero-title">
                <span>Where ideas</span>
                <span className="hero-title-accent">
                  get moving.
                </span>
              </h1>

              <p className="hero-description">
                Events built around technology, problem-solving,
                competition and hands-on learning.
              </p>

              <Magnetic strength={0.12} max={5}>
                <a
                  href="#event-explorer"
                  className="hero-command"
                >
                  <span>$</span>
                  <strong>explore --events</strong>
                  <i />
                  <ArrowRight
                    size={12}
                    strokeWidth={1.6}
                  />
                </a>
              </Magnetic>
            </div>

            {/* RIGHT SYSTEM */}

            <div className="hero-visual-column">
              <HeroSystemVisual />
            </div>
          </div>

          {/* BOTTOM MARQUEE */}

          <div className="hero-marquee">
            <div className="hero-marquee-track">
              {[...events, ...events].map((event, index) => (
                <span
                  key={`${event.id}-${index}`}
                >
                  <b>{event.category}</b>
                  <i />
                  {event.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EVENT EXPLORER
      ===================================================== */}

      <section
        id="event-explorer"
        className="event-explorer"
      >
        <div className="event-container">
          <Reveal>
            <div className="explorer-heading">
              <SectionLabel number="02">
                EXPLORE THE EVENTS
              </SectionLabel>

              <div className="explorer-count">
                <strong>
                  {String(filteredEvents.length).padStart(
                    2,
                    "0"
                  )}
                </strong>

                <span>EVENTS</span>
              </div>
            </div>
          </Reveal>

          {/* FILTERS */}

          <Reveal delay={70}>
            <div className="filter-bar">
              <span className="filter-heading">
                FILTER
              </span>

              <div className="filters">
                {categories.map((category) => {
                  const active =
                    selectedCategory === category;

                  const theme =
                    category === "All"
                      ? DEFAULT_THEME
                      : getTheme(category);

                  return (
                    <Magnetic
                      key={category}
                      strength={0.1}
                      max={4}
                    >
                      <button
                        type="button"
                        className={`event-filter ${
                          active ? "active" : ""
                        }`}
                        onClick={() =>
                          setSelectedCategory(category)
                        }
                        style={
                          {
                            "--filter-accent":
                              theme.accent,
                          } as React.CSSProperties
                        }
                      >
                        <span />
                        {category}

                        {active && (
                          <i className="filter-active-dot" />
                        )}
                      </button>
                    </Magnetic>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* =================================================
              FEATURED EVENT
          ================================================= */}

          {featuredEvent && (
            <Reveal delay={120}>
              <article
                ref={featuredRef}
                className="featured-event"
                onMouseMove={moveFeatured}
                onMouseLeave={() => {
                  setActiveEventId(null);
                  resetFeatured();
                }}
                style={
                  {
                    "--event-accent":
                      getTheme(
                        featuredEvent.category
                      ).accent,
                    "--event-rgb":
                      getTheme(
                        featuredEvent.category
                      ).rgb,
                    "--tilt-x": "0deg",
                    "--tilt-y": "0deg",
                  } as React.CSSProperties
                }
              >
                <div className="featured-bg">
                  <div className="featured-grid" />
                  <div className="featured-glow featured-glow-a" />
                  <div className="featured-glow featured-glow-b" />
                </div>

                <div className="featured-topline">
                  <span>EVENT / 001</span>
                  <span>EXPERIENCE / ARCHIVE</span>
                </div>

                <div className="featured-content">
                  <div className="featured-info">
                    <div className="featured-meta">
                      <span className="featured-category">
                        {React.createElement(
                          getTheme(
                            featuredEvent.category
                          ).Icon,
                          {
                            size: 12,
                            strokeWidth: 1.4,
                          }
                        )}

                        {featuredEvent.category}
                      </span>

                      <span className="featured-status">
                        <i />
                        FEATURED
                      </span>
                    </div>

                    <h2>
                      {featuredEvent.title}
                    </h2>

                    <p>
                      {featuredEvent.description}
                    </p>

                    <div className="featured-details">
                      <span>
                        <CalendarDays
                          size={13}
                          strokeWidth={1.5}
                        />
                        {featuredEvent.date}
                      </span>

                      <span>
                        <MapPin
                          size={13}
                          strokeWidth={1.5}
                        />
                        {featuredEvent.venue}
                      </span>
                    </div>
                  </div>

                  <div className="featured-visual">
                    <EventVisual event={featuredEvent} />

                    <div className="featured-play-wrap">
                      <button
                        type="button"
                        className={`featured-play ${
                          activeEventId ===
                          featuredEvent.id
                            ? "active"
                            : ""
                        }`}
                        onMouseEnter={() =>
                          setActiveEventId(
                            featuredEvent.id
                          )
                        }
                        aria-label={`Explore ${featuredEvent.title}`}
                      >
                        <Play
                          size={15}
                          fill="currentColor"
                          strokeWidth={1.2}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="featured-bottom">
                  <span>CSE / EVENTS / 001</span>

                  <span>
                    <i />
                    MOTION / EXPERIENCE
                  </span>
                </div>
              </article>
            </Reveal>
          )}

          {/* =================================================
              EVENT RAIL
          ================================================= */}

          {filteredEvents.length > 1 && (
            <Reveal delay={170}>
              <div className="event-rail-section">
                <div className="rail-heading">
                  <span>UPCOMING / ARCHIVE</span>

                  <span>
                    {String(filteredEvents.length).padStart(
                      2,
                      "0"
                    )}{" "}
                    EVENTS
                  </span>
                </div>

                <div className="event-rail">
                  {filteredEvents.map(
                    (event, index) => {
                      const theme =
                        getTheme(event.category);

                      const active =
                        activeEventId === event.id;

                      return (
                        <button
                          type="button"
                          key={event.id}
                          className={`rail-card ${
                            active ? "active" : ""
                          }`}
                          style={
                            {
                              "--event-accent":
                                theme.accent,
                            } as React.CSSProperties
                          }
                          onClick={() =>
                            setActiveEventId(event.id)
                          }
                          onMouseEnter={() =>
                            setActiveEventId(event.id)
                          }
                          onMouseLeave={() =>
                            setActiveEventId(null)
                          }
                        >
                          <div className="rail-number">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </div>

                          <div className="rail-icon">
                            {React.createElement(
                              theme.Icon,
                              {
                                size: 14,
                                strokeWidth: 1.4,
                              }
                            )}
                          </div>

                          <strong>
                            {event.title}
                          </strong>

                          <span>
                            {event.category}
                          </span>

                          <ArrowUpRight
                            className="rail-arrow"
                            size={14}
                            strokeWidth={1.4}
                          />
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </Reveal>
          )}

          {/* =================================================
              DIRECTORY
          ================================================= */}

          {listEvents.length > 0 && (
            <div className="event-directory">
              <Reveal>
                <div className="directory-heading">
                  <span>EVENT DIRECTORY</span>
                  <span>SELECT / EXPLORE</span>
                </div>
              </Reveal>

              {listEvents.map((event, index) => {
                const theme = getTheme(
                  event.category
                );

                const active =
                  activeEventId === event.id;

                return (
                  <Reveal
                    key={event.id}
                    delay={Math.min(index * 55, 280)}
                  >
                    <article
                      className={`directory-row ${
                        active ? "active" : ""
                      }`}
                      style={
                        {
                          "--event-accent":
                            theme.accent,
                        } as React.CSSProperties
                      }
                      onMouseEnter={() =>
                        setActiveEventId(event.id)
                      }
                      onMouseLeave={() =>
                        setActiveEventId(null)
                      }
                    >
                      <span className="directory-number">
                        {String(index + 2).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div className="directory-title">
                        <span>
                          {React.createElement(
                            theme.Icon,
                            {
                              size: 12,
                              strokeWidth: 1.4,
                            }
                          )}
                          {event.category}
                        </span>

                        <h3>{event.title}</h3>
                      </div>

                      <p>
                        {event.description}
                      </p>

                      <div className="directory-meta">
                        <span>
                          <CalendarDays
                            size={12}
                            strokeWidth={1.4}
                          />
                          {event.date}
                        </span>

                        <span>
                          <MapPin
                            size={12}
                            strokeWidth={1.4}
                          />
                          {event.venue}
                        </span>
                      </div>

                      <div
                        className={`directory-arrow ${
                          active ? "active" : ""
                        }`}
                      >
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.4}
                        />
                      </div>

                      <div className="directory-accent-line" />
                    </article>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="event-cta">
        <div className="cta-background">
          <div className="cta-grid" />
          <div className="cta-orbit orbit-a" />
          <div className="cta-orbit orbit-b" />
          <div className="cta-glow" />
        </div>

        <div className="event-container cta-container">
          <Reveal>
            <SectionLabel number="03">
              NEXT EXPERIENCE
            </SectionLabel>
          </Reveal>

          <div className="cta-main">
            <Reveal delay={80}>
              <div className="cta-title-wrap">
                <span className="cta-live">
                  <i />
                  LEARNING / IN MOTION
                </span>

                <h2>
                  Learn.
                  <br />
                  <span>Build.</span>
                  <br />
                  Repeat.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="cta-copy">
                <p>
                  Stay close to the next workshop,
                  competition, hackathon or technical
                  experience.
                </p>

                <Magnetic strength={0.12} max={5}>
                  <Link
                    href="/join"
                    className="cta-button"
                  >
                    <span>Join The Society</span>

                    <i>
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                      />
                    </i>
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <div className="cta-footer">
              <span>
                CSE SOCIETY / BIT SINDRI
              </span>

              <span>
                <Trophy
                  size={11}
                  strokeWidth={1.3}
                />
                BUILD SOMETHING WORTH REMEMBERING
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx global>{`
        /* =====================================================
           RESET / BASE
        ===================================================== */

        .events-page {
          --event-green: #20c997;
          --event-white: #f5f5f1;
          --event-muted: rgba(245, 245, 241, 0.48);
          --event-soft: rgba(245, 245, 241, 0.28);
          --event-line: rgba(255, 255, 255, 0.09);

          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--cse-bg, #090b0c);
          color: var(--cse-text, #f5f5f1);
        }

        .events-page *,
        .events-page *::before,
        .events-page *::after {
          box-sizing: border-box;
        }

        .events-page button,
        .events-page a {
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .events-page button:disabled {
          cursor: not-allowed;
        }

        .event-container {
          width: min(1500px, calc(100% - 56px));
          margin-inline: auto;
        }

        /* =====================================================
           PROGRESS
        ===================================================== */

        .event-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 999;
          background: rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }

        .event-progress > div {
          width: 0;
          height: 100%;
          background: linear-gradient(
            90deg,
            #20c997,
            #76c7ad,
            #4dabf7
          );
          box-shadow: 0 0 16px rgba(32, 201, 151, 0.55);
        }

        /* =====================================================
           MAGNETIC
        ===================================================== */

        .event-magnetic {
          display: inline-flex;
          transition:
            transform 260ms cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
          will-change: transform;
        }

        /* =====================================================
           REVEAL
        ===================================================== */

        .events-reveal {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
          transition:
            opacity 700ms cubic-bezier(
              0.22,
              1,
              0.36,
              1
            ),
            transform 700ms cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .events-reveal-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* =====================================================
           SECTION LABEL
        ===================================================== */

        .event-section-label {
          display: flex;
          align-items: center;
          gap: 11px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 8px;
          line-height: 1;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.4);
        }

        .event-section-label > span {
          color: rgba(255, 255, 255, 0.25);
        }

        .event-section-label > i {
          width: 30px;
          height: 1px;
          background: rgba(255, 255, 255, 0.16);
        }

        .event-section-label strong {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .events-hero {
          position: relative;
          min-height: min(850px, 92vh);
          overflow: hidden;

          background:
            radial-gradient(
              circle at 78% 48%,
              rgba(32, 201, 151, 0.07),
              transparent 28%
            ),
            #090b0c;

          color: var(--event-white);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-grid {
          position: absolute;
          inset: -80px;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            );

          background-size: 64px 64px;

          opacity: 0.55;

          animation: heroGridDrift 22s linear infinite;
        }

        @keyframes heroGridDrift {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(64px, 64px, 0);
          }
        }

        .hero-vignette {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(9, 11, 12, 0.15),
              transparent 45%,
              rgba(9, 11, 12, 0.25)
            ),
            linear-gradient(
              180deg,
              rgba(9, 11, 12, 0.25),
              transparent 35%,
              rgba(9, 11, 12, 0.65)
            );
        }

        .hero-cursor-glow {
          position: absolute;
          width: 520px;
          height: 520px;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(32, 201, 151, 0.11),
            transparent 68%
          );

          filter: blur(18px);

          transition: opacity 300ms ease;
          will-change: left, top;
        }

        .hero-scan {
          position: absolute;
          left: -10%;
          right: -10%;
          top: -5%;

          height: 1px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(32, 201, 151, 0.65),
            transparent
          );

          box-shadow:
            0 0 18px rgba(32, 201, 151, 0.28);

          animation: heroScan 8s
            cubic-bezier(0.45, 0, 0.55, 1)
            infinite;
        }

        @keyframes heroScan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          12% {
            opacity: 0.8;
          }

          55% {
            opacity: 0.35;
          }

          100% {
            transform: translateY(850px);
            opacity: 0;
          }
        }

        /* =====================================================
           CODE STREAM
        ===================================================== */

        .event-code-stream {
          position: absolute;
          right: 2%;
          top: 12%;

          display: flex;
          gap: 90px;

          opacity: 0.09;

          transform: rotate(-8deg);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          pointer-events: none;
        }

        .event-code-column {
          display: flex;
          flex-direction: column;
          gap: 17px;

          white-space: nowrap;

          animation: codeDrift 18s linear infinite;
        }

        .event-code-column-alt {
          opacity: 0.65;
          animation-duration: 24s;
          animation-direction: reverse;
        }

        .event-code-column span {
          display: flex;
          gap: 12px;

          font-size: 9px;
          color: #dce3df;
        }

        .event-code-column b {
          color: #20c997;
          font-weight: 400;
        }

        @keyframes codeDrift {
          from {
            transform: translateY(-50px);
          }

          to {
            transform: translateY(240px);
          }
        }

        /* =====================================================
           HERO CONTAINER
        ===================================================== */

        .hero-container {
          position: relative;
          z-index: 5;

          width: min(1500px, calc(100% - 56px));
          min-height: min(850px, 92vh);

          margin-inline: auto;

          display: flex;
          flex-direction: column;
        }

        /* =====================================================
           HERO TOPBAR
        ===================================================== */

        .hero-topbar {
          min-height: 66px;

          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.34);
        }

        .hero-top-left,
        .hero-top-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hero-top-right {
          justify-content: flex-end;
          gap: 20px;
        }

        .hero-top-center {
          color: rgba(255, 255, 255, 0.5);
        }

        .hero-live-dot {
          position: relative;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #20c997;

          box-shadow:
            0 0 0 5px rgba(32, 201, 151, 0.07),
            0 0 14px rgba(32, 201, 151, 0.6);
        }

        .hero-live-dot::after {
          content: "";

          position: absolute;
          inset: -5px;

          border: 1px solid
            rgba(32, 201, 151, 0.35);

          border-radius: 50%;

          animation: liveRing 2s ease-out infinite;
        }

        @keyframes liveRing {
          from {
            opacity: 0.7;
            transform: scale(0.7);
          }

          to {
            opacity: 0;
            transform: scale(1.7);
          }
        }

        /* =====================================================
           HERO MAIN
        ===================================================== */

.hero-main {
  flex: 1;
  min-width: 0;

  display: grid;
  grid-template-columns:
    minmax(0, 1.08fr)
    minmax(390px, 0.92fr);

  /* Keep the hero content visually anchored near the top.
     This prevents the large empty gap seen above the heading. */
  align-items: start;

  gap: clamp(32px, 4vw, 72px);

  padding: 46px 0 40px;
}

.hero-copy {
  min-width: 0;
  position: relative;
  z-index: 3;
}

.hero-visual-column {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  width: 100%;
  min-width: 0;
  position: relative;
  z-index: 2;
}

.hero-system {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  width: 100%;
}

        .hero-copy {
          min-width: 0;
        }

        .hero-label {
          margin-bottom: 30px;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 16px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 8px;
          letter-spacing: 0.19em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.34);
        }

        .hero-eyebrow span {
          width: 5px;
          height: 5px;
          border-radius: 50%;

          background: #20c997;

          box-shadow:
            0 0 0 4px rgba(32, 201, 151, 0.08),
            0 0 12px rgba(32, 201, 151, 0.55);
        }

        .hero-title {
          position: relative;
          z-index: 4;
          display: block;
          max-width: 820px;
          margin: 0;

          color: #f5f5f1;
          font-family: var(--font-sans, Inter, Arial, Helvetica, sans-serif);
          font-size: clamp(4.4rem, 6.9vw, 7.6rem);
          font-weight: 500;
          line-height: 0.84;
          letter-spacing: -0.082em;
          text-wrap: balance;

          opacity: 1;
          visibility: visible;
        }

        .hero-title > span {
          display: block;
        }

                .hero-title-accent {
          display: block;
          position: relative;
          z-index: 5;
          margin-left: clamp(0px, 2.5vw, 34px);

          color: #86d2bf;
          font-family: var(--font-sans, Inter, Arial, Helvetica, sans-serif);
          font-weight: 500;

          /* Keep text opaque; do not rely on transparent gradient clipping. */
          background: none;
          background-image: none;
          -webkit-background-clip: border-box;
          background-clip: border-box;
          -webkit-text-fill-color: #86d2bf;

          opacity: 1;
          visibility: visible;
        }

@keyframes titleShimmer {
          to {
            background-position: -220% center;
          }
        }

        .hero-description {
          max-width: 540px;

          margin: 28px 0 0;

          font-size: 15px;
          line-height: 1.72;

          color: rgba(255, 255, 255, 0.48);
        }

        .hero-command {
          position: relative;

          width: fit-content;

          margin-top: 28px;

          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 12px 15px;

          border: 1px solid
            rgba(255, 255, 255, 0.12);

          background: rgba(255, 255, 255, 0.025);

          color: rgba(255, 255, 255, 0.62);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 8px;
          letter-spacing: 0.08em;

          text-decoration: none;

          overflow: hidden;

          transition:
            border-color 300ms ease,
            background 300ms ease,
            color 300ms ease;
        }

        .hero-command::before {
          content: "";

          position: absolute;
          inset: 0;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(32, 201, 151, 0.08),
            transparent
          );

          transform: translateX(-100%);

          transition: transform 500ms ease;
        }

        .hero-command:hover {
          border-color: rgba(32, 201, 151, 0.4);
          background: rgba(32, 201, 151, 0.05);
          color: white;
        }

        .hero-command:hover::before {
          transform: translateX(100%);
        }

        .hero-command > span {
          color: #20c997;
        }

        .hero-command strong {
          position: relative;
          z-index: 1;
          font-weight: 400;
        }

        .hero-command > i {
          width: 5px;
          height: 11px;

          background: #20c997;

          animation: commandBlink 1s
            steps(2, jump-none) infinite;
        }

        .hero-command svg {
          transition:
            transform 300ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        .hero-command:hover svg {
          transform: translateX(3px);
        }

        @keyframes commandBlink {
          50% {
            opacity: 0;
          }
        }

        /* =====================================================
           HERO SYSTEM VISUAL
        ===================================================== */

        .hero-visual-column {
          width: 100%;
          min-width: 0;
        }

        .hero-system {
          position: relative;

          width: 100%;
          min-height: 430px;

          border: 1px solid
            rgba(255, 255, 255, 0.11);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.045),
              rgba(255, 255, 255, 0.012)
            );

          overflow: hidden;

          box-shadow:
            0 40px 100px
              rgba(0, 0, 0, 0.28);

          transition:
            transform 500ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            border-color 300ms ease;
        }

        .hero-system:hover {
          transform: translateY(-5px);
          border-color: rgba(32, 201, 151, 0.25);
        }

        .hero-system-grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );

          background-size: 38px 38px;

          animation: systemGrid 16s linear infinite;
        }

        @keyframes systemGrid {
          to {
            transform: translate3d(38px, 38px, 0);
          }
        }

        .hero-system-glow {
          position: absolute;

          width: 330px;
          height: 330px;

          left: 50%;
          top: 48%;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(32, 201, 151, 0.14),
            transparent 68%
          );

          filter: blur(12px);

          animation: systemGlow 6s ease-in-out
            infinite;
        }

        @keyframes systemGlow {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(0.9);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.08);
          }
        }

        .hero-system-top {
          position: absolute;

          left: 20px;
          right: 20px;
          top: 18px;

          display: flex;
          justify-content: space-between;

          padding-bottom: 14px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.18em;

          color: rgba(255, 255, 255, 0.32);
        }

        .hero-system-center {
          position: absolute;

          left: 50%;
          top: 48%;

          width: 250px;
          height: 250px;

          transform: translate(-50%, -50%);
        }

        .hero-system-ring {
          position: absolute;

          left: 50%;
          top: 50%;

          border: 1px solid
            rgba(32, 201, 151, 0.25);

          border-radius: 50%;

          transform: translate(-50%, -50%);
        }

        .ring-a {
          width: 250px;
          height: 250px;

          animation: ringRotate 18s linear
            infinite;
        }

        .ring-b {
          width: 185px;
          height: 185px;

          border-style: dashed;

          animation: ringRotateReverse 13s
            linear infinite;
        }

        .ring-c {
          width: 112px;
          height: 112px;

          border-color: rgba(
            255,
            255,
            255,
            0.12
          );

          animation: ringRotate 9s linear
            infinite;
        }

        @keyframes ringRotate {
          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes ringRotateReverse {
          to {
            transform:
              translate(-50%, -50%)
              rotate(-360deg);
          }
        }

        .hero-system-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 72px;
          height: 72px;

          transform: translate(-50%, -50%);

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #20c997;
          border-radius: 50%;

          color: #20c997;

          background: rgba(
            32,
            201,
            151,
            0.08
          );

          box-shadow:
            0 0 45px
              rgba(32, 201, 151, 0.18);

          animation: corePulse 3.2s
            ease-in-out infinite;
        }

        @keyframes corePulse {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.06);
          }
        }

        .hero-system-node {
          position: absolute;

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #20c997;

          box-shadow:
            0 0 12px
              rgba(32, 201, 151, 0.8);
        }

        .node-a {
          left: 50%;
          top: 0;
          transform: translateX(-50%);
        }

        .node-b {
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .node-c {
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }

        .node-d {
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .hero-system-lines {
          position: absolute;

          left: 22px;
          right: 22px;
          bottom: 55px;

          display: grid;
          gap: 7px;
        }

        .hero-system-lines > div {
          display: grid;
          grid-template-columns:
            24px 20px 1fr auto;

          align-items: center;
          gap: 8px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.12em;
        }

        .hero-system-lines span {
          color: rgba(255, 255, 255, 0.22);
        }

        .hero-system-lines i {
          width: 8px;
          height: 1px;
          background: rgba(255, 255, 255, 0.14);
        }

        .hero-system-lines b {
          color: rgba(255, 255, 255, 0.45);
          font-weight: 400;
        }

        .hero-system-lines em {
          color: #20c997;
          font-style: normal;
          opacity: 0.75;
        }

        .hero-system-bottom {
          position: absolute;

          left: 20px;
          right: 20px;
          bottom: 18px;

          display: flex;
          justify-content: space-between;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.18em;

          color: rgba(255, 255, 255, 0.24);
        }

        .hero-system-bottom span:first-child {
          display: flex;
          align-items: center;
          gap: 7px;

          color: #20c997;
        }

        .hero-system-bottom i {
          width: 5px;
          height: 5px;
          border-radius: 50%;

          background: #20c997;

          box-shadow:
            0 0 9px
              rgba(32, 201, 151, 0.8);
        }

        .hero-cross {
          position: absolute;

          width: 12px;
          height: 12px;
        }

        .hero-cross::before,
        .hero-cross::after {
          content: "";

          position: absolute;

          background: rgba(
            255,
            255,
            255,
            0.18
          );
        }

        .hero-cross::before {
          left: 50%;
          top: 0;
          width: 1px;
          height: 100%;
        }

        .hero-cross::after {
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
        }

        .cross-a {
          top: 27%;
          left: 10%;
        }

        .cross-b {
          right: 9%;
          bottom: 24%;
        }

        /* =====================================================
           HERO MARQUEE
        ===================================================== */

        .hero-marquee {
          position: relative;

          width: 100%;

          overflow: hidden;

          border-top: 1px solid
            rgba(255, 255, 255, 0.08);

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .hero-marquee-track {
          display: flex;
          width: max-content;

          animation: heroMarquee 28s
            linear infinite;
        }

        .hero-marquee:hover
          .hero-marquee-track {
          animation-play-state: paused;
        }

        .hero-marquee span {
          display: flex;
          align-items: center;
          gap: 15px;

          padding: 12px 20px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.15em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.28);

          white-space: nowrap;
        }

        .hero-marquee b {
          color: rgba(255, 255, 255, 0.52);
          font-weight: 400;
        }

        .hero-marquee i {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #20c997;
        }

        @keyframes heroMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =====================================================
           EXPLORER
        ===================================================== */

        .event-explorer {
          position: relative;
          background: var(--cse-bg);
        }

        .event-explorer::before {
          content: "";

          position: absolute;
          inset: 0;

          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(128, 128, 128, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(128, 128, 128, 0.025) 1px,
              transparent 1px
            );

          background-size: 80px 80px;
        }

        .event-container {
          position: relative;
          z-index: 2;
        }

        .event-explorer
          > .event-container {
          padding-top: 82px;
          padding-bottom: 100px;
        }

        .explorer-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          padding-bottom: 20px;

          border-bottom: 1px solid
            rgba(128, 128, 128, 0.14);
        }

        .explorer-count {
          display: flex;
          align-items: baseline;
          gap: 8px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          text-transform: uppercase;
        }

        .explorer-count strong {
          font-size: 32px;
          line-height: 1;

          font-weight: 500;

          letter-spacing: -0.08em;

          color: var(--cse-text);
        }

        .explorer-count span {
          font-size: 7px;
          letter-spacing: 0.18em;
          color: var(--cse-text-soft);
        }

        /* =====================================================
           FILTERS
        ===================================================== */

        .filter-bar {
          display: flex;
          align-items: center;
          gap: 26px;

          width: 100%;
          margin: 22px 0 30px;

          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 2px;
        }

        .filter-bar::-webkit-scrollbar {
          display: none;
        }

        .filter-heading {
          flex-shrink: 0;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.18em;

          color: var(--cse-text-soft);
        }

        .filters {
          display: flex;
          align-items: stretch;
          gap: 10px;
          flex: 1 0 auto;
          min-width: max-content;
        }

        .event-filter {
          --filter-accent: #20c997;

          position: relative;

          flex: 0 0 auto;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          min-height: 40px;
          padding: 0 18px;

          border: 1px solid
            rgba(128, 128, 128, 0.16);

          background: transparent;

          color: var(--cse-text-soft);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 8px;
          letter-spacing: 0.11em;
          text-transform: uppercase;

          transition:
            color 250ms ease,
            border-color 250ms ease,
            background 250ms ease,
            transform 250ms ease;
        }

        .event-filter > span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: var(--filter-accent);

          opacity: 0.7;
        }

        .event-filter:hover {
          color: var(--cse-text);
          border-color: var(--filter-accent);
          transform: translateY(-2px);
        }

        .event-filter.active {
          color: #07100d;
          border-color: var(--filter-accent);
          background: var(--filter-accent);
        }

        .event-filter.active > span {
          background: #07100d;
          opacity: 1;
        }

        .filter-active-dot {
          width: 4px;
          height: 4px;

          margin-left: 2px;

          border-radius: 50%;

          background: #07100d;
        }

        /* =====================================================
           FEATURED EVENT
        ===================================================== */

        .featured-event {
          --event-accent: #20c997;
          --event-rgb: 32, 201, 151;
          --tilt-x: 0deg;
          --tilt-y: 0deg;

          position: relative;

          min-height: 500px;

          overflow: hidden;

          border: 1px solid
            rgba(128, 128, 128, 0.15);

          background: #0f1212;
          color: #f5f5f1;

          transform:
            perspective(1500px)
            rotateX(var(--tilt-x))
            rotateY(var(--tilt-y));

          transition:
            transform 180ms ease-out,
            border-color 350ms ease,
            box-shadow 500ms ease;
        }

        .featured-event:hover {
          border-color: color-mix(
            in srgb,
            var(--event-accent) 40%,
            transparent
          );

          box-shadow:
            0 35px 100px
              rgba(0, 0, 0, 0.22);
        }

        .featured-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .featured-grid {
          position: absolute;
          inset: -50px;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );

          background-size: 48px 48px;

          animation: featuredGridMove 18s
            linear infinite;
        }

        @keyframes featuredGridMove {
          to {
            transform: translate3d(48px, 48px, 0);
          }
        }

        .featured-glow {
          position: absolute;

          width: 520px;
          height: 520px;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(
              var(--event-rgb),
              0.16
            ),
            transparent 68%
          );

          filter: blur(5px);

          animation: featuredGlow 8s
            ease-in-out infinite;
        }

        .featured-glow-a {
          right: -180px;
          top: -260px;
        }

        .featured-glow-b {
          left: -300px;
          bottom: -360px;

          opacity: 0.45;

          animation-delay: 2s;
        }

        @keyframes featuredGlow {
          0%,
          100% {
            transform: scale(0.9)
              translate3d(0, 0, 0);
          }

          50% {
            transform: scale(1.08)
              translate3d(-18px, 18px, 0);
          }
        }

        .featured-topline {
          position: relative;
          z-index: 3;

          display: flex;
          justify-content: space-between;

          padding: 18px 22px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.18em;

          color: rgba(255, 255, 255, 0.22);
        }

        .featured-content {
          position: relative;
          z-index: 2;

          min-height: 445px;

          display: grid;
          grid-template-columns:
            minmax(0, 1.1fr)
            minmax(320px, 0.9fr);
        }

        .featured-info {
          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 45px 46px 60px;
        }

        .featured-meta {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .featured-category {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 7px 9px;

          border: 1px solid
            rgba(255, 255, 255, 0.12);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.6);
        }

        .featured-category svg {
          color: var(--event-accent);
        }

        .featured-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.15em;

          color: rgba(255, 255, 255, 0.24);
        }

        .featured-status i {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: var(--event-accent);

          box-shadow:
            0 0 9px
              var(--event-accent);
        }

        .featured-info h2 {
          max-width: 780px;

          margin: 24px 0 0;

          font-size: clamp(
            3.1rem,
            5.8vw,
            6.6rem
          );

          line-height: 0.82;

          letter-spacing: -0.075em;

          font-weight: 500;

          transition:
            transform 500ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        .featured-event:hover
          .featured-info h2 {
          transform: translateX(8px);
        }

        .featured-info p {
          max-width: 560px;

          margin: 24px 0 0;

          font-size: 12px;
          line-height: 1.7;

          color: rgba(255, 255, 255, 0.44);
        }

        .featured-details {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;

          margin-top: 28px;
        }

        .featured-details span {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.4);
        }

        .featured-details svg {
          color: var(--event-accent);
        }

        /* =====================================================
           FEATURED VISUAL
        ===================================================== */

        .featured-visual {
          position: relative;

          min-height: 445px;

          border-left: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .event-visual {
          --event-accent: #20c997;
          --event-rgb: 32, 201, 151;

          position: relative;

          width: 100%;
          height: 100%;
          min-height: 445px;

          overflow: hidden;
        }

        .event-visual-grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );

          background-size: 38px 38px;
        }

        .event-visual-glow {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 320px;
          height: 320px;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(
              var(--event-rgb),
              0.14
            ),
            transparent 68%
          );

          animation: eventVisualGlow 5s
            ease-in-out infinite;
        }

        @keyframes eventVisualGlow {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(0.88);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.08);
          }
        }

        /* =====================================================
           SPARK
        ===================================================== */

        .visual-spark {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 180px;
          height: 180px;

          transform: translate(-50%, -50%);
        }

        .visual-spark-ring {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 120px;
          height: 120px;

          border: 1px solid
            rgba(
              var(--event-rgb),
              0.32
            );

          border-radius: 50%;

          transform:
            translate(-50%, -50%)
            scale(0.5);

          animation: sparkExpand 2.6s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            infinite;
        }

        .visual-spark-ring.ring-2 {
          animation-delay: 1.3s;
        }

        @keyframes sparkExpand {
          0% {
            opacity: 0.9;
            transform:
              translate(-50%, -50%)
              scale(0.45);
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(1.65);
          }
        }

        .visual-spark-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 76px;
          height: 76px;

          transform: translate(-50%, -50%);

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid var(--event-accent);
          border-radius: 50%;

          color: var(--event-accent);

          background: rgba(
            var(--event-rgb),
            0.08
          );

          box-shadow:
            0 0 50px
              rgba(
                var(--event-rgb),
                0.28
              );

          animation: sparkCore 3s
            ease-in-out infinite;
        }

        @keyframes sparkCore {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.06);
          }
        }

        .spark-particles i {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: var(--event-accent);

          box-shadow:
            0 0 8px
              var(--event-accent);

          transform:
            rotate(
              calc(
                var(--particle) * 45deg
              )
            )
            translateY(-40px);

          animation:
            sparkParticle 2.2s
              ease-out infinite;

          animation-delay:
            calc(
              var(--particle) * 0.13s
            );
        }

        @keyframes sparkParticle {
          0% {
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;

            transform:
              rotate(
                calc(
                  var(--particle) * 45deg
                )
              )
              translateY(-100px);
          }
        }

        /* =====================================================
           RACE
        ===================================================== */

        .visual-race {
          position: absolute;

          left: 50%;
          top: 50%;

          width: min(280px, 70%);

          transform: translate(-50%, -50%);
        }

        .visual-race-icon {
          width: 62px;
          height: 62px;

          margin: 0 auto 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid var(--event-accent);

          background: rgba(
            var(--event-rgb),
            0.08
          );

          color: var(--event-accent);

          box-shadow:
            0 0 30px
              rgba(
                var(--event-rgb),
                0.18
              );
        }

        .race-lines {
          display: grid;
          gap: 9px;
        }

        .race-line {
          height: 6px;

          overflow: hidden;

          border-radius: 10px;

          background: rgba(
            255,
            255,
            255,
            0.06
          );
        }

        .race-line span {
          display: block;

          width: 100%;
          height: 100%;

          transform-origin: left;

          background: linear-gradient(
            90deg,
            var(--event-accent),
            rgba(
              var(--event-rgb),
              0.2
            )
          );

          animation: raceRun 2.5s
            ease-in-out infinite;

          animation-delay: var(
            --race-delay
          );
        }

        @keyframes raceRun {
          0% {
            transform: scaleX(0.05);
          }

          45%,
          72% {
            transform: scaleX(1);
          }

          100% {
            transform: scaleX(0.05);
          }
        }

        .race-command {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-top: 18px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 8px;
          letter-spacing: 0.08em;

          color: rgba(255, 255, 255, 0.38);
        }

        .race-command i {
          width: 5px;
          height: 10px;

          background: var(--event-accent);

          animation: commandBlink 1s
            steps(2, jump-none) infinite;
        }

        /* =====================================================
           NETWORK
        ===================================================== */

        .visual-network {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 250px;
          height: 250px;

          transform: translate(-50%, -50%);
        }

        .visual-network svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .network-line {
          stroke: var(--event-accent);
          stroke-width: 1;

          opacity: 0.35;

          stroke-dasharray: 90;
          stroke-dashoffset: 90;

          animation: networkDraw 3.5s
            ease-in-out infinite;

          animation-delay: var(
            --network-delay
          );
        }

        @keyframes networkDraw {
          0% {
            opacity: 0;
            stroke-dashoffset: 90;
          }

          35% {
            opacity: 0.45;
          }

          65%,
          80% {
            opacity: 0.35;
            stroke-dashoffset: 0;
          }

          100% {
            opacity: 0;
            stroke-dashoffset: 0;
          }
        }

        .network-node {
          fill: var(--event-accent);

          filter: drop-shadow(
            0 0 6px
              rgba(
                var(--event-rgb),
                0.8
              )
          );

          animation: networkNode 2.5s
            ease-in-out infinite;

          animation-delay: var(
            --network-delay
          );
        }

        @keyframes networkNode {
          0%,
          100% {
            opacity: 0.65;
          }

          50% {
            opacity: 1;
          }
        }

        .network-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 62px;
          height: 62px;

          transform: translate(-50%, -50%);

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid var(--event-accent);
          border-radius: 50%;

          background: rgba(
            var(--event-rgb),
            0.08
          );

          color: var(--event-accent);

          box-shadow:
            0 0 35px
              rgba(
                var(--event-rgb),
                0.2
              );
        }

        /* =====================================================
           GEAR
        ===================================================== */

        .visual-gear {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 220px;
          height: 220px;

          transform: translate(-50%, -50%);
        }

        .gear {
          position: absolute;

          left: 50%;
          top: 50%;

          border: 1px solid
            rgba(
              var(--event-rgb),
              0.35
            );

          border-radius: 50%;

          transform: translate(-50%, -50%);
        }

        .gear-outer {
          width: 190px;
          height: 190px;

          animation: ringRotate 20s
            linear infinite;
        }

        .gear-inner {
          width: 120px;
          height: 120px;

          border-style: dashed;

          animation: ringRotateReverse 13s
            linear infinite;
        }

        .gear i {
          position: absolute;

          left: 50%;
          top: -3px;

          width: 6px;
          height: 6px;

          background: var(--event-accent);

          transform:
            rotate(
              calc(
                var(--gear-index) * 30deg
              )
            )
            translateX(-3px);

          transform-origin:
            3px 98px;
        }

        .gear-inner i {
          transform:
            rotate(
              calc(
                var(--gear-index) * 45deg
              )
            )
            translateX(-3px);

          transform-origin:
            3px 63px;
        }

        .gear-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 64px;
          height: 64px;

          transform: translate(-50%, -50%);

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid var(--event-accent);
          border-radius: 50%;

          background: rgba(
            var(--event-rgb),
            0.08
          );

          color: var(--event-accent);

          animation: corePulse 4s
            ease-in-out infinite;
        }

        /* =====================================================
           PULSE
        ===================================================== */

        .visual-pulse {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 250px;
          height: 250px;

          transform: translate(-50%, -50%);
        }

        .pulse-ring {
          position: absolute;

          left: 50%;
          top: 50%;

          border: 1px solid
            rgba(
              var(--event-rgb),
              0.28
            );

          border-radius: 50%;

          transform: translate(-50%, -50%);

          animation: pulseRing 5s
            ease-out infinite;
        }

        .pulse-1 {
          width: 110px;
          height: 110px;
        }

        .pulse-2 {
          width: 175px;
          height: 175px;

          animation-delay: 1s;
        }

        .pulse-3 {
          width: 240px;
          height: 240px;

          animation-delay: 2s;
        }

        @keyframes pulseRing {
          0% {
            opacity: 0.6;
            transform:
              translate(-50%, -50%)
              scale(0.72);
          }

          100% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(1.08);
          }
        }

        .pulse-core {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 72px;
          height: 72px;

          transform: translate(-50%, -50%);

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid var(--event-accent);
          border-radius: 50%;

          background: rgba(
            var(--event-rgb),
            0.08
          );

          color: var(--event-accent);

          box-shadow:
            0 0 40px
              rgba(
                var(--event-rgb),
                0.18
              );
        }

        /* =====================================================
           VISUAL CHROME
        ===================================================== */

        .visual-code {
          position: absolute;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 20px;

          color: rgba(
            var(--event-rgb),
            0.28
          );

          animation: chromeFloat 5s
            ease-in-out infinite;
        }

        .visual-code-a {
          left: 12%;
          top: 24%;
        }

        .visual-code-b {
          right: 13%;
          top: 19%;

          animation-delay: 1s;
        }

        .visual-code-c {
          right: 18%;
          bottom: 23%;

          animation-delay: 1.7s;
        }

        @keyframes chromeFloat {
          0%,
          100% {
            transform:
              translate3d(0, 0, 0);
          }

          50% {
            transform:
              translate3d(0, -9px, 0);
          }
        }

        .visual-label {
          position: absolute;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.17em;

          color: rgba(255, 255, 255, 0.2);
        }

        .visual-label-a {
          left: 18px;
          top: 18px;
        }

        .visual-label-b {
          right: 18px;
          bottom: 18px;
        }

        .visual-scan {
          position: absolute;

          top: 0;
          bottom: 0;
          left: -20px;

          width: 1px;

          background: linear-gradient(
            to bottom,
            transparent,
            var(--event-accent),
            transparent
          );

          opacity: 0.55;

          animation: visualScan 5s
            ease-in-out infinite;
        }

        @keyframes visualScan {
          0% {
            transform: translateX(0);
            opacity: 0;
          }

          20% {
            opacity: 0.7;
          }

          70% {
            opacity: 0.2;
          }

          100% {
            transform: translateX(500px);
            opacity: 0;
          }
        }

        /* =====================================================
           FEATURED PLAY
        ===================================================== */

        .featured-play-wrap {
          position: absolute;

          right: 25px;
          bottom: 42px;
        }

        .featured-play {
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(255, 255, 255, 0.16);

          border-radius: 50%;

          background: rgba(
            255,
            255,
            255,
            0.04
          );

          color: white;

          transition:
            transform 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            background 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .featured-play:hover,
        .featured-play.active {
          transform: scale(1.1);

          border-color: var(--event-accent);

          background: var(--event-accent);

          color: #07100d;

          box-shadow:
            0 0 30px
              rgba(
                var(--event-rgb),
                0.25
              );
        }

        .featured-bottom {
          position: absolute;

          z-index: 4;

          left: 0;
          right: 0;
          bottom: 0;

          height: 35px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 22px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.08);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.18em;

          color: rgba(255, 255, 255, 0.2);
        }

        .featured-bottom span:last-child {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .featured-bottom i {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: var(--event-accent);
        }

        /* =====================================================
           EVENT RAIL
        ===================================================== */

        .event-rail-section {
          margin-top: 42px;
        }

        .rail-heading {
          display: flex;
          justify-content: space-between;

          margin-bottom: 11px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.17em;
          text-transform: uppercase;

          color: var(--cse-text-soft);
        }

        .event-rail {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns:
            minmax(210px, 1fr);

          gap: 8px;

          overflow-x: auto;

          scrollbar-width: none;
        }

        .event-rail::-webkit-scrollbar {
          display: none;
        }

        .rail-card {
          --event-accent: #20c997;

          position: relative;

          min-height: 158px;

          padding: 16px;

          overflow: hidden;

          text-align: left;

          border: 1px solid
            rgba(128, 128, 128, 0.15);

          background: var(--cse-surface);

          color: var(--cse-text);

          transition:
            transform 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            border-color 300ms ease,
            background 300ms ease;
        }

        .rail-card::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 0;
          height: 2px;

          background: var(--event-accent);

          transition: width 500ms
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .rail-card:hover,
        .rail-card.active {
          transform: translateY(-6px);

          border-color: var(--event-accent);

          background: color-mix(
            in srgb,
            var(--cse-surface) 92%,
            var(--event-accent) 8%
          );
        }

        .rail-card:hover::after,
        .rail-card.active::after {
          width: 100%;
        }

        .rail-number {
          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;

          color: var(--cse-text-soft);
        }

        .rail-icon {
          position: absolute;

          right: 14px;
          top: 14px;

          color: var(--event-accent);
        }

        .rail-card strong {
          display: block;

          max-width: 185px;

          margin-top: 34px;

          font-size: 19px;
          line-height: 0.96;

          font-weight: 500;

          letter-spacing: -0.045em;
        }

        .rail-card > span {
          position: absolute;

          left: 16px;
          bottom: 15px;

          max-width: 160px;

          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: var(--cse-text-soft);
        }

        .rail-arrow {
          position: absolute;

          right: 14px;
          bottom: 13px;

          color: var(--cse-text-soft);

          transition:
            transform 350ms ease,
            color 350ms ease;
        }

        .rail-card:hover .rail-arrow,
        .rail-card.active .rail-arrow {
          color: var(--event-accent);

          transform:
            translate(3px, -3px);
        }

        /* =====================================================
           DIRECTORY
        ===================================================== */

        .event-directory {
          margin-top: 62px;
        }

        .directory-heading {
          display: flex;
          justify-content: space-between;

          padding-bottom: 12px;

          border-bottom: 1px solid
            rgba(128, 128, 128, 0.14);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.18em;
          text-transform: uppercase;

          color: var(--cse-text-soft);
        }

        .directory-row {
          --event-accent: #20c997;

          position: relative;

          display: grid;

          grid-template-columns:
            50px
            minmax(220px, 1.1fr)
            minmax(190px, 0.85fr)
            minmax(170px, 0.7fr)
            38px;

          align-items: center;

          gap: 20px;

          min-height: 122px;

          padding: 17px 4px;

          border-bottom: 1px solid
            rgba(128, 128, 128, 0.13);

          transition:
            padding 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            background 300ms ease;
        }

        .directory-row:hover,
        .directory-row.active {
          padding-left: 14px;

          background: color-mix(
            in srgb,
            var(--cse-bg) 95%,
            var(--event-accent) 5%
          );
        }

        .directory-number {
          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 8px;

          color: var(--cse-text-soft);

          transition: color 250ms ease;
        }

        .directory-row:hover
          .directory-number,
        .directory-row.active
          .directory-number {
          color: var(--event-accent);
        }

        .directory-title > span {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 8px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          color: var(--cse-text-soft);
        }

        .directory-title > span svg {
          color: var(--event-accent);
        }

        .directory-title h3 {
          margin: 0;

          font-size: 24px;
          line-height: 1;

          font-weight: 500;

          letter-spacing: -0.045em;

          transition:
            transform 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        .directory-row:hover
          .directory-title h3 {
          transform: translateX(6px);
        }

        .directory-row p {
          margin: 0;

          font-size: 10px;
          line-height: 1.6;

          color: var(--cse-text-muted);
        }

        .directory-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: var(--cse-text-soft);
        }

        .directory-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .directory-meta svg {
          color: var(--event-accent);
        }

        .directory-arrow {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(128, 128, 128, 0.16);

          border-radius: 50%;

          color: var(--cse-text-soft);

          transition:
            transform 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            color 300ms ease,
            background 300ms ease,
            border-color 300ms ease;
        }

        .directory-row:hover
          .directory-arrow,
        .directory-arrow.active {
          transform:
            translate(3px, -3px)
            rotate(5deg);

          color: #07100d;

          background: var(--event-accent);

          border-color: var(--event-accent);
        }

        .directory-accent-line {
          position: absolute;

          left: 0;
          right: 0;
          bottom: -1px;

          width: 0;
          height: 1px;

          background: var(--event-accent);

          transition: width 600ms
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .directory-row:hover
          .directory-accent-line,
        .directory-row.active
          .directory-accent-line {
          width: 100%;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .event-cta {
          position: relative;

          min-height: 520px;

          overflow: hidden;

          background: #090b0c;

          color: var(--event-white);
        }

        .cta-background {
          position: absolute;
          inset: 0;

          pointer-events: none;
        }

        .cta-grid {
          position: absolute;
          inset: -50px;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );

          background-size: 55px 55px;

          opacity: 0.6;

          animation: heroGridDrift 20s
            linear infinite;
        }

        .cta-orbit {
          position: absolute;

          border: 1px solid
            rgba(32, 201, 151, 0.12);

          border-radius: 50%;

          animation: ringRotate 24s
            linear infinite;
        }

        .orbit-a {
          width: 650px;
          height: 650px;

          right: -280px;
          top: -290px;
        }

        .orbit-b {
          width: 500px;
          height: 500px;

          right: -205px;
          top: -215px;

          border-style: dashed;

          animation-duration: 17s;
          animation-direction: reverse;
        }

        .cta-glow {
          position: absolute;

          width: 550px;
          height: 550px;

          right: -160px;
          top: -170px;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(32, 201, 151, 0.1),
            transparent 68%
          );

          filter: blur(10px);

          animation: systemGlow 7s
            ease-in-out infinite;
        }

        .cta-container {
          padding-top: 70px;
          padding-bottom: 30px;
        }

        .cta-main {
          display: grid;

          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(260px, 0.65fr);

          align-items: end;

          gap: 60px;

          padding: 75px 0 65px;
        }

        .cta-live {
          display: flex;
          align-items: center;
          gap: 8px;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          letter-spacing: 0.18em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.3);
        }

        .cta-live i {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #20c997;

          box-shadow:
            0 0 10px
              rgba(32, 201, 151, 0.7);
        }

        .cta-title-wrap h2 {
          margin: 18px 0 0;

          font-size: clamp(
            4rem,
            7vw,
            7.6rem
          );

          line-height: 0.76;

          letter-spacing: -0.08em;

          font-weight: 500;
        }

        .cta-title-wrap h2 span {
          color: rgba(255, 255, 255, 0.17);
        }

        .cta-copy {
          padding-bottom: 4px;
        }

        .cta-copy p {
          max-width: 350px;

          margin: 0 0 26px;

          font-size: 12px;
          line-height: 1.7;

          color: rgba(255, 255, 255, 0.4);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;

          gap: 28px;

          min-width: 210px;

          padding: 12px 13px 12px 17px;

          background: #f5f5f1;

          color: #090b0c;

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;

          text-decoration: none;

          transition:
            box-shadow 350ms ease,
            transform 350ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        .cta-button:hover {
          box-shadow:
            0 22px 50px
              rgba(0, 0, 0, 0.32);

          transform: translateY(-2px);
        }

        .cta-button i {
          width: 27px;
          height: 27px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #090b0c;

          color: #f5f5f1;

          transition:
            transform 350ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        .cta-button:hover i {
          transform:
            translate(3px, -3px)
            rotate(-7deg);
        }

        .cta-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-top: 14px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.1);

          font-family: var(--font-mono, "SFMono-Regular"), "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 6px;
          letter-spacing: 0.18em;

          color: rgba(255, 255, 255, 0.2);
        }

        .cta-footer span:last-child {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        /* =====================================================
           TABLET
        ===================================================== */

@media (max-width: 1100px) {
  .hero-main {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(320px, 0.78fr);

    align-items: start;
    gap: 30px;
    padding-top: 34px;
    padding-bottom: 32px;
  }

  .hero-title {
    font-size: clamp(
      3.8rem,
      6.8vw,
      6.4rem
    );
  }

  .hero-system {
    min-height: 330px;
  }

  .hero-system-center {
    transform:
      translate(-50%, -50%)
      scale(0.78);
  }
}

/* =====================================================
   DESKTOP / TABLET REFINEMENT
===================================================== */
@media (max-width: 1200px) {
  .hero-title {
    font-size: clamp(4.4rem, 7.8vw, 7.6rem);
  }

  .hero-system {
    min-height: 340px;
  }

  .hero-system-center {
    transform: translate(-50%, -50%) scale(0.82);
  }

  .featured-content {
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.8fr);
  }

  .featured-info {
    padding-inline: 32px;
  }

  .directory-row {
    grid-template-columns:
      42px
      minmax(190px, 1.1fr)
      minmax(160px, 0.8fr)
      38px;
  }

  .directory-row p {
    display: none;
  }
}

/* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 900px) {

          .filter-bar {
            gap: 18px;
            margin-top: 20px;
            margin-bottom: 26px;
          }

          .filters {
            gap: 8px;
          }

          .event-filter {
            min-height: 42px;
            padding-inline: 16px;
            font-size: 8px;
          }


          .event-container,
          .hero-container {
            width: min(
              100% - 40px,
              760px
            );
          }

          .events-hero {
            min-height: auto;
          }

          .hero-container {
            min-height: auto;
          }

          .hero-topbar {
            min-height: 58px;
          }

          .hero-top-center {
            display: none;
          }

          .hero-topbar {
            grid-template-columns: 1fr auto;
          }

          .hero-main {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 48px;

            padding-top: 58px;
            padding-bottom: 48px;
          }

          .hero-title {
            max-width: 760px;

            font-size: clamp(
              4rem,
              10vw,
              7rem
            );
          }

          .hero-description {
            max-width: 600px;
          }

          .hero-visual-column {
            max-width: 620px;
            margin-left: auto;
          }

          .hero-system {
            min-height: 340px;
          }

          .event-explorer
            > .event-container {
            padding-top: 65px;
            padding-bottom: 75px;
          }

          .featured-content {
            grid-template-columns: 1fr;
          }

          .featured-visual {
            min-height: 340px;

            border-top: 1px solid
              rgba(255, 255, 255, 0.08);

            border-left: 0;
          }

          .event-visual {
            min-height: 340px;
          }

          .featured-info h2 {
            font-size: clamp(
              3rem,
              8vw,
              5.5rem
            );
          }

          .cta-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .event-container,
          .hero-container {
            width: calc(100% - 32px);
          }

          .hero-topbar {
            font-size: 6px;
            letter-spacing: 0.14em;
          }

          .hero-top-left span:last-child {
            max-width: 180px;

            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .hero-top-right {
            gap: 11px;
          }

          .hero-main {
            gap: 38px;

            padding-top: 45px;
            padding-bottom: 36px;
          }

          .hero-label {
            margin-bottom: 28px;
          }

          .event-section-label {
            font-size: 7px;
            gap: 8px;
          }

          .event-section-label > i {
            width: 22px;
          }

          .hero-eyebrow {
            font-size: 7px;
            letter-spacing: 0.13em;
          }

          .hero-title {
            font-size: clamp(
              3.65rem,
              17vw,
              5.8rem
            );

            line-height: 0.82;
            letter-spacing: -0.085em;
          }

          .hero-title-accent {
            margin-left: 0;
            color: #86d2bf;
            background: none;
            background-image: none;
            -webkit-text-fill-color: #86d2bf;
          }

          .hero-description {
            margin-top: 22px;

            font-size: 12px;
            line-height: 1.65;
          }

          .hero-command {
            margin-top: 23px;

            padding: 11px 12px;

            font-size: 7px;
          }

          .hero-system {
            min-height: 330px;
          }

          .hero-system-center {
            transform:
              translate(-50%, -50%)
              scale(0.68);
          }

          .hero-system-lines {
            left: 15px;
            right: 15px;
            bottom: 50px;
          }

          .hero-system-bottom {
            left: 15px;
            right: 15px;
            bottom: 15px;
          }

          .hero-marquee span {
            padding: 11px 15px;
            font-size: 6px;
          }

          .event-explorer
            > .event-container {
            padding-top: 50px;
            padding-bottom: 60px;
          }

          .explorer-heading {
            align-items: center;
          }

          .explorer-count {
            display: none;
          }

          .filter-bar {
            margin-top: 17px;
            margin-bottom: 22px;
          }

          .filter-heading {
            display: none;
          }

          .event-filter {
            padding: 8px 10px;
            font-size: 6px;
          }

          .featured-event {
            min-height: auto;
          }

          .featured-topline {
            padding: 15px;
            font-size: 5px;
          }

          .featured-info {
            padding: 45px 19px 34px;
          }

          .featured-meta {
            gap: 10px;
            flex-wrap: wrap;
          }

          .featured-category {
            padding: 6px 8px;
            font-size: 6px;
          }

          .featured-status {
            font-size: 5px;
          }

          .featured-info h2 {
            margin-top: 21px;

            font-size: clamp(
              3rem,
              15vw,
              5rem
            );
          }

          .featured-info p {
            margin-top: 19px;
            font-size: 10px;
          }

          .featured-details {
            flex-direction: column;
            gap: 9px;
            margin-top: 22px;
          }

          .featured-details span {
            font-size: 6px;
          }

          .featured-visual {
            min-height: 285px;
          }

          .event-visual {
            min-height: 285px;
          }

          .visual-network,
          .visual-pulse {
            transform:
              translate(-50%, -50%)
              scale(0.82);
          }

          .visual-spark {
            transform:
              translate(-50%, -50%)
              scale(0.82);
          }

          .visual-gear {
            transform:
              translate(-50%, -50%)
              scale(0.8);
          }

          .visual-code {
            font-size: 15px;
          }

          .featured-play-wrap {
            right: 17px;
            bottom: 40px;
          }

          .featured-play {
            width: 43px;
            height: 43px;
          }

          .featured-bottom {
            padding-inline: 15px;
            font-size: 5px;
          }

          .featured-bottom span:last-child {
            display: none;
          }

          .event-rail-section {
            margin-top: 30px;
          }

          .event-rail {
            grid-auto-columns: 76%;
          }

          .rail-card {
            min-height: 145px;
          }

          .event-directory {
            margin-top: 42px;
          }

          .directory-heading {
            font-size: 6px;
          }

          .directory-heading span:last-child {
            display: none;
          }

          .directory-row {
            grid-template-columns:
              28px
              minmax(0, 1fr)
              34px;

            gap: 10px;

            min-height: 104px;

            padding: 15px 2px;
          }

          .directory-row:hover,
          .directory-row.active {
            padding-left: 7px;
          }

          .directory-title > span {
            margin-bottom: 7px;
            font-size: 5px;
          }

          .directory-title h3 {
            font-size: 19px;
          }

          .directory-row p,
          .directory-meta {
            display: none;
          }

          .directory-arrow {
            width: 31px;
            height: 31px;
          }

          .event-cta {
            min-height: 470px;
          }

          .cta-container {
            padding-top: 48px;
          }

          .cta-main {
            padding: 55px 0 48px;
          }

          .cta-title-wrap h2 {
            font-size: clamp(
              3.7rem,
              17vw,
              5.8rem
            );
          }

          .cta-copy p {
            font-size: 11px;
          }

          .cta-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;

            font-size: 5px;
          }

          .cta-footer span:last-child {
            display: none;
          }

          .orbit-a {
            width: 480px;
            height: 480px;

            right: -270px;
            top: -190px;
          }

          .orbit-b {
            width: 360px;
            height: 360px;

            right: -210px;
            top: -130px;
          }
        }

        /* =====================================================
           VERY SMALL PHONES
        ===================================================== */

        @media (max-width: 390px) {
          .hero-title {
            font-size: 3.45rem;
          }

          .hero-system {
            min-height: 275px;
          }

          .hero-system-center {
            transform:
              translate(-50%, -50%)
              scale(0.59);
          }

          .hero-system-lines {
            bottom: 45px;
          }

          .hero-system-lines > div {
            grid-template-columns:
              18px 12px 1fr auto;

            font-size: 5px;
          }

          .featured-info h2 {
            font-size: 2.9rem;
          }

          .rail-card {
            min-height: 138px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .events-page *,
          .events-page *::before,
          .events-page *::after {
            scroll-behavior: auto !important;
          }

          .events-reveal,
          .events-reveal-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .hero-grid,
          .hero-scan,
          .event-code-column,
          .hero-cursor-glow,
          .hero-live-dot::after,
          .hero-title-accent,
          .hero-system-grid,
          .hero-system-glow,
          .ring-a,
          .ring-b,
          .ring-c,
          .hero-system-core,
          .hero-marquee-track,
          .featured-grid,
          .featured-glow,
          .event-visual-glow,
          .visual-spark-ring,
          .visual-spark-core,
          .spark-particles i,
          .race-line span,
          .network-line,
          .network-node,
          .gear,
          .gear-core,
          .pulse-ring,
          .visual-code,
          .visual-scan,
          .cta-grid,
          .cta-orbit,
          .cta-glow {
            animation: none !important;
          }

          .event-magnetic,
          .featured-event,
          .hero-system,
          .rail-card,
          .directory-row,
          .cta-button {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}