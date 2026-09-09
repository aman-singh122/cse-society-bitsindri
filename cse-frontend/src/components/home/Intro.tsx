import Link from "next/link";

export default function Intro() {
  return (
    <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        
        {/* Section label */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            01
          </span>

          <span className="h-px w-8 bg-black/20" />

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Who We Are
          </p>
        </div>

        {/* Main content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Heading */}
          <div className="lg:col-span-7">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[4.25rem]">
              A community built around{" "}
              <span className="text-neutral-400">
                curiosity, technology and collaboration.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-7 text-neutral-600">
              The CSE Society at BIT Sindri brings together students who
              believe in learning by doing. From technical initiatives and
              workshops to competitions and collaborative projects, we create
              opportunities to explore, build and grow together.
            </p>

            <Link
              href="/about"
              className="group mt-8 flex w-fit items-center gap-3 text-sm font-medium text-neutral-900"
            >
              <span className="border-b border-black pb-1">
                Discover our story
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-black/10 pt-6 lg:mt-32">
          <p className="max-w-2xl text-sm leading-6 text-neutral-500">
            Learn from one another. Build things that matter. Create a
            community that lasts beyond the classroom.
          </p>
        </div>
      </div>
    </section>
  );
}