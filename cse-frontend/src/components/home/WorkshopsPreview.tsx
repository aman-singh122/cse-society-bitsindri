import Link from "next/link";
import WorkshopCard from "@/components/workshops/WorkshopCard";
import { workshops } from "@/data/workshops";

export default function WorkshopsPreview() {
  return (
    <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                04
              </span>

              <span className="h-px w-8 bg-black/20" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Workshops
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-5">
            <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[4.25rem]">
              Learn beyond the classroom.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-neutral-600">
              Practical sessions designed to help students explore
              technologies, develop useful skills and learn by building.
            </p>
          </div>
        </div>

        {/* Workshop list */}
        <div className="mt-20">
          {workshops.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              workshop={workshop}
            />
          ))}
        </div>

        {/* Bottom link */}
        <div className="border-t border-black/10 pt-7">
          <Link
            href="/events"
            className="group inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
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
    </section>
  );
}