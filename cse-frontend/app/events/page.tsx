"use client";

import React, { useState } from "react";
import Link from "next/link";
import { events } from "@/data/events";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(events.map((event) => event.category))),
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const featuredEvent = filteredEvents[0];
  const remainingEvents = filteredEvents.slice(1);

  return (
    <main className="w-full overflow-x-hidden bg-[#f7f6f1] text-[#151514]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="border-b border-black/10 px-5 pb-12 pt-28 sm:px-8 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          {/* Technical header */}

          <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.24em] text-neutral-400 sm:text-[9px]">
            <span className="text-neutral-500">01</span>
            <span className="h-px w-8 bg-black/20" />
            <span className="font-semibold text-neutral-600">
              SOCIETY CALENDAR
            </span>
            <span className="text-neutral-300">/</span>
            <span>BIT SINDRI</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            {/* Main heading */}

            <div className="lg:col-span-8">
              <h1 className="max-w-5xl text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.8] tracking-[-0.08em]">
                Ideas into
                <br />
                <span className="text-black/25">experiences.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[13px] leading-6 text-neutral-600 sm:text-[14px]">
                Hackathons, technical sessions, competitions and workshops
                designed to turn curiosity into practical experience.
              </p>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-5 lg:col-span-4 lg:border-t-0 lg:pt-0">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                  TOTAL EVENTS
                </span>

                <div className="mt-1 text-4xl font-medium tracking-[-0.06em]">
                  {events.length.toString().padStart(2, "0")}
                </div>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                  FORMAT
                </span>

                <div className="mt-2 font-mono text-[9px] leading-4 tracking-[0.12em] text-neutral-600">
                  LEARN
                  <br />
                  BUILD
                  <br />
                  COMPETE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT BROWSER
      ========================================================= */}

      <section className="border-b border-black/10 bg-[#faf9f6] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          {/* Filter bar */}

          <div className="flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={13} className="text-neutral-400" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                EVENT INDEX
              </span>

              <span className="font-mono text-[8px] text-neutral-300">
                /
              </span>

              <span className="font-mono text-[8px] text-neutral-400">
                {filteredEvents.length.toString().padStart(2, "0")} FOUND
              </span>
            </div>

            {/* Categories */}

            <div className="flex max-w-full gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`shrink-0 cursor-pointer border px-3 py-2 font-mono text-[8px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ${
                      active
                        ? "border-[#151514] bg-[#151514] text-white"
                        : "border-black/10 bg-[#f7f6f1] text-neutral-500 hover:border-black/40 hover:bg-white hover:text-black"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              FEATURED EVENT
          ===================================================== */}

          {featuredEvent && (
            <article
              onMouseEnter={() => setHoveredEvent(featuredEvent.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              className="group relative mt-7 cursor-pointer overflow-hidden border border-black/10 bg-[#151514] text-[#f7f6f1]"
            >
              {/* Orbital graphics */}

              <div
                className={`pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/[0.07] transition-transform duration-[1400ms] ${
                  hoveredEvent === featuredEvent.id
                    ? "rotate-12 scale-110"
                    : ""
                }`}
              />

              <div
                className={`pointer-events-none absolute right-[-5px] top-[-55px] h-52 w-52 rounded-full border border-dashed border-white/[0.08] transition-transform duration-[1800ms] ${
                  hoveredEvent === featuredEvent.id
                    ? "-rotate-12 scale-105"
                    : ""
                }`}
              />

              {/* Small technical marks */}

              <span className="pointer-events-none absolute right-8 top-7 font-mono text-[8px] tracking-[0.2em] text-white/20">
                01 / SYSTEM
              </span>

              <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-6 lg:p-9">
                {/* Number */}

                <div className="lg:col-span-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
                    FEATURED
                  </span>

                  <div className="mt-3 flex h-9 w-9 items-center justify-center border border-white/15 font-mono text-[9px] text-white/70">
                    {featuredEvent.id}
                  </div>

                  <span className="mt-8 hidden font-mono text-[8px] uppercase leading-4 tracking-[0.16em] text-white/20 lg:block">
                    CSE SOCIETY
                    <br />
                    BIT SINDRI
                  </span>
                </div>

                {/* Main */}

                <div className="lg:col-span-7">
                  <span className="inline-flex border border-white/15 px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    {featuredEvent.category}
                  </span>

                  <h2 className="mt-4 max-w-2xl text-[clamp(2.4rem,4.5vw,4.7rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                    {featuredEvent.title}
                  </h2>

                  <p className="mt-5 max-w-xl text-[12px] leading-6 text-white/55 sm:text-[13px]">
                    {featuredEvent.description}
                  </p>
                </div>

                {/* Meta */}

                <div className="flex flex-col justify-between lg:col-span-3 lg:items-end">
                  <div className="space-y-3 font-mono text-[8px] uppercase tracking-[0.14em] text-white/45 lg:text-right">
                    <div className="flex items-center gap-2 lg:justify-end">
                      <CalendarDays size={12} />
                      <span>{featuredEvent.date}</span>
                    </div>

                    <div className="flex items-center gap-2 lg:justify-end">
                      <MapPin size={12} />
                      <span>{featuredEvent.venue}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* =====================================================
              EVENT LIST
          ===================================================== */}

          {remainingEvents.length > 0 && (
            <div className="mt-2 border-t border-black/10">
              {remainingEvents.map((event) => (
                <article
                  key={event.id}
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  className="group cursor-pointer border-b border-black/10 py-6 transition-all duration-300 hover:bg-white/70 sm:py-7 sm:hover:px-3"
                >
                  <div className="grid gap-4 lg:grid-cols-12 lg:items-center lg:gap-6">
                    {/* ID */}

                    <div className="lg:col-span-1">
                      <span className="font-mono text-[9px] text-neutral-400 transition-colors group-hover:text-black">
                        {event.id}
                      </span>
                    </div>

                    {/* Title */}

                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-neutral-400">
                          {event.category}
                        </span>

                        <span className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/40" />
                      </div>

                      <h2 className="mt-2 text-xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 sm:text-[23px]">
                        {event.title}
                      </h2>
                    </div>

                    {/* Description */}

                    <div className="lg:col-span-3">
                      <p className="max-w-sm text-[11px] leading-5 text-neutral-500">
                        {event.description}
                      </p>
                    </div>

                    {/* Date */}

                    <div className="flex items-center justify-between lg:col-span-3 lg:justify-end lg:gap-6">
                      <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-neutral-500 lg:text-right">
                        <div>{event.date}</div>

                        <div className="mt-1 text-neutral-400">
                          {event.venue}
                        </div>
                      </div>

                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-all duration-300 ${
                          hoveredEvent === event.id
                            ? "border-black bg-black text-white"
                            : "text-neutral-300"
                        }`}
                      >
                        <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Empty state */}

          {filteredEvents.length === 0 && (
            <div className="border-b border-black/10 py-16 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                NO EVENTS FOUND
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          WORKSHOP CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#151514] px-5 py-12 text-[#f7f6f1] sm:px-8 lg:px-10 lg:py-14">
        {/* Background detail */}

        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/[0.05]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
                <span>03</span>
                <span className="h-px w-7 bg-white/15" />
                <span>WORKSHOPS</span>
                <span>/</span>
                <span>PRACTICAL TRAINING</span>
              </div>

              <h2 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[0.86] tracking-[-0.07em]">
                Learn by{" "}
                <span className="text-white/25">
                  building.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-[12px] leading-6 text-white/45">
                Hands-on sessions covering full-stack engineering,
                machine learning, Git workflows and cybersecurity.
              </p>
            </div>

            <Link
              href="/join"
              className="group inline-flex w-fit cursor-pointer items-center gap-3 bg-[#f7f6f1] px-5 py-3.5 font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#151514] transition-all duration-300 hover:-translate-y-1"
            >
              Apply To Join Society

              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}