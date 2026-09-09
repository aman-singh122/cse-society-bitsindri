"use client";

import React, { useState } from "react";
import Link from "next/link";
import { events } from "@/data/events";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechMarquee from "@/components/ui/TechMarquee";
import { ArrowRight, ArrowUpRight, Calendar, MapPin, Search } from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(events.map((e) => e.category)))];

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((e) => e.category === selectedCategory);

  return (
    <main className="pt-24 w-full overflow-x-hidden">
      {/* Hero */}
      <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <TechnicalLabel index="EVENTS / 01" title="SOCIETY CALENDAR" category="BIT SINDRI" />

          <div className="mt-8 max-w-6xl">
            <h1 className="text-clamp-hero font-semibold tracking-[-0.055em] text-[#141413]">
              Ideas into <br />
              <span className="text-neutral-400 font-normal">experiences.</span>
            </h1>
          </div>

          <div className="mt-14 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-base leading-8 text-neutral-600 sm:text-lg">
                Technical hackathons, competitive coding tournaments, system workshops, and guest lectures designed to foster technical depth, problem-solving, and collaboration.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">
                TOTAL EVENTS
              </span>
              <p className="mt-1 font-mono text-5xl font-bold tracking-tight text-[#141413]">
                {events.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <TechMarquee
        items={["HACKATHONS", "CODESPRINT", "TECHTALKS", "PROJECT SHOWCASE", "OPEN SOURCE DAY", "CODE & COFFEE"]}
        speed={30}
        variant="default"
      />

      {/* Filterable Events Browser */}
      <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 border-b border-black/15 pb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] transition-all ${
                    selectedCategory === cat
                      ? "bg-[#141413] text-white shadow-md"
                      : "border border-black/15 bg-[#f5f3ee] text-neutral-700 hover:border-black hover:bg-black hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Event List Index */}
            <div className="mt-12 space-y-6">
              {filteredEvents.map((event) => (
                <article
                  key={event.id}
                  className="group relative border border-black/15 bg-[#f5f3ee] p-7 transition-all duration-300 hover:border-black hover:shadow-xl sm:p-9"
                >
                  <div className="grid gap-6 md:grid-cols-12 md:items-center">
                    {/* ID */}
                    <div className="md:col-span-1">
                      <span className="font-mono text-base font-bold text-neutral-400 group-hover:text-black">
                        {event.id}
                      </span>
                    </div>

                    {/* Category & Title */}
                    <div className="md:col-span-4">
                      <span className="border border-black/10 bg-[#faf9f6] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                        {event.category}
                      </span>

                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#141413] group-hover:text-black sm:text-3xl">
                        {event.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-4">
                      <p className="text-sm leading-6 text-neutral-600">
                        {event.description}
                      </p>
                    </div>

                    {/* Date & Venue */}
                    <div className="md:col-span-3 md:text-right">
                      <div className="flex flex-col md:items-end font-mono text-xs text-neutral-600 space-y-1">
                        <span className="flex items-center gap-1.5 font-semibold text-black">
                          <Calendar size={13} />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1 text-neutral-400">
                          <MapPin size={13} />
                          {event.venue}
                        </span>
                      </div>

                      <div className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Workshop Callout */}
      <section className="bg-[#141413] px-4 py-20 text-[#f5f3ee] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="03" title="PRACTICAL TRAINING" category="WORKSHOPS" dark />

            <h2 className="mt-6 text-clamp-display font-medium tracking-tight text-[#f5f3ee]">
              Want hands-on masterclasses?
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
              Explore society bootcamps in full-stack engineering, machine learning pipelines, git workflows, and cybersecurity.
            </p>

            <Link
              href="/join"
              className="mt-8 inline-flex items-center gap-3 bg-white px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#141413] transition-all hover:bg-neutral-200"
            >
              <span>APPLY TO JOIN SOCIETY</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}