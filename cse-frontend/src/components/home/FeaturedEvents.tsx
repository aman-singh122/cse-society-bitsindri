import React from "react";
import Link from "next/link";
import { events } from "@/data/events";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export default function FeaturedEvents() {
  const featuredList = events.filter((e) => e.featured);

  return (
    <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel index="04" title="EVENTS & COMPETITIONS" category="CALENDAR" />
              <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
                Ideas into <span className="text-neutral-400 font-normal">action.</span>
              </h2>
            </div>

            <Link
              href="/events"
              className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#141413] hover:underline"
            >
              <span>View All Events ({events.length})</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredList.map((event) => (
              <div
                key={event.id}
                className="group relative flex min-h-[360px] flex-col justify-between border border-black/15 bg-[#f5f3ee] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                    <span className="font-semibold text-black">{event.id}</span>
                    <span className="uppercase tracking-wider border border-black/10 bg-[#faf9f6] px-2.5 py-0.5">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#141413] transition-colors group-hover:text-black sm:text-3xl">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-neutral-600">
                    {event.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="mt-8 border-t border-black/10 pt-6">
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-black" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin size={13} />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-black">
                      REGISTER / DETAILS
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}