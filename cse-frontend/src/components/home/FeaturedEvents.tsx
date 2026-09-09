import Link from "next/link";
import EventCard from "@/components/events/EventCard";
import { events } from "@/data/events";

export default function FeaturedEvents() {
  const featuredEvents = events.filter((event) => event.featured);

  return (
    <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                03
              </span>

              <span className="h-px w-8 bg-black/20" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Events
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-5">
            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Ideas become experiences.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500">
              From competitive challenges to technical conversations, our
              events create spaces for students to learn, collaborate and
              build.
            </p>
          </div>
        </div>

        {/* Events */}
        <div className="mt-20">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}

          <div className="border-t border-black/10 pt-7">
            <Link
              href="/events"
              className="group inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
            >
              <span className="border-b border-black pb-1">
                View all events
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}