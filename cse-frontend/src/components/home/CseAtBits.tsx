import Link from "next/link";

export default function CseAtBits() {
  return (
    <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            05
          </span>

          <span className="h-px w-8 bg-black/20" />

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            CSE @ BIT Sindri
          </p>
        </div>

        {/* Main content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-end">

          {/* Heading */}
          <div className="lg:col-span-7">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[4.25rem]">
              A legacy of engineering.
              <br />
              <span className="text-neutral-400">
                A future shaped by technology.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-7 text-neutral-600">
              Rooted in the legacy of BIT Sindri, the Computer Science and
              Engineering community continues to evolve with the changing
              landscape of technology, education and innovation.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
            >
              <span className="border-b border-black pb-1">
                Explore our story
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="mt-20 overflow-hidden bg-[#e9e7e0]">
          <div className="flex aspect-[16/7] items-center justify-center">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                BIT Sindri
              </p>

              <p className="mt-3 text-2xl font-medium tracking-tight text-neutral-700 sm:text-3xl">
                Computer Science & Engineering
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}