import Link from "next/link";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-28 pt-20 lg:px-10 lg:pb-36 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-black/25" />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              CSE Society · Events
            </p>
          </div>

          <div className="mt-10 max-w-6xl">
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
              Ideas into
              <br />
              <span className="text-neutral-400">experiences.</span>
            </h1>
          </div>

          <div className="mt-14 grid border-t border-black/10 pt-7 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="max-w-xl text-[15px] leading-7 text-neutral-600">
                Technical events, competitions and community experiences
                designed to bring students together around technology,
                problem-solving and learning.
              </p>
            </div>

            <div className="mt-8 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Events
              </p>

              <p className="mt-2 text-4xl font-medium tracking-tight text-neutral-950">
                {events.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              01
            </span>

            <span className="h-px w-8 bg-black/20" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Upcoming & Featured
            </p>
          </div>

          <div className="mt-12 border-t border-black/10">
            {events.map((event) => (
              <article
                key={event.id}
                className="group border-b border-black/10 py-9 transition-colors duration-300 hover:bg-black/[0.02]"
              >
                <div className="grid gap-7 lg:grid-cols-12 lg:items-center lg:gap-8">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <span className="text-xs tracking-[0.2em] text-neutral-400">
                      {event.id}
                    </span>
                  </div>

                  {/* Event */}
                  <div className="lg:col-span-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
                      {event.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
                      {event.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="max-w-lg text-sm leading-6 text-neutral-500">
                      {event.description}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="lg:col-span-3 lg:text-right">
                    <p className="text-sm font-medium text-neutral-900">
                      {event.date}
                    </p>

                    <p className="mt-1 text-xs text-neutral-400">
                      {event.venue}
                    </p>

                    <span className="mt-5 inline-block text-xl text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                Beyond Events
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-5">
              <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                Learn by
                <span className="text-neutral-400"> doing.</span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-neutral-600">
                Explore practical workshops covering development, artificial
                intelligence, open source and other areas of modern
                technology.
              </p>

              <Link
                href="/"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
              >
                <span className="border-b border-black pb-1">
                  Explore workshops
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}