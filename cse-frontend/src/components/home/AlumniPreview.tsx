import Link from "next/link";

const alumni = [
  {
    id: "01",
    name: "Distinguished Alumni",
    role: "Technology & Industry",
    description:
      "Graduates who have carried the spirit of engineering from BIT Sindri into the wider technology ecosystem.",
  },
  {
    id: "02",
    name: "Industry Leaders",
    role: "Leadership",
    description:
      "Professionals contributing to organisations and teams across technology, engineering and innovation.",
  },
  {
    id: "03",
    name: "Entrepreneurs & Builders",
    role: "Innovation",
    description:
      "Alumni who have transformed ideas into products, ventures and meaningful solutions.",
  },
];

export default function AlumniPreview() {
  return (
    <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                06
              </span>

              <span className="h-px w-8 bg-black/20" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Alumni
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[4.25rem]">
              A legacy that extends
              <br />
              <span className="text-neutral-400">
                far beyond the campus.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-neutral-600">
              Our alumni carry the values of engineering, curiosity and
              problem-solving into organisations, industries and ventures
              across the world.
            </p>
          </div>
        </div>

        {/* Alumni list */}
        <div className="mt-20 border-t border-black/10">
          {alumni.map((alumnus) => (
            <div
              key={alumnus.id}
              className="group grid gap-6 border-b border-black/10 py-9 transition-colors duration-300 hover:bg-black/[0.02] lg:grid-cols-12 lg:items-center lg:gap-8"
            >
              <div className="lg:col-span-1">
                <span className="text-xs tracking-[0.2em] text-neutral-400">
                  {alumnus.id}
                </span>
              </div>

              <div className="lg:col-span-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
                  {alumnus.role}
                </p>

                <h3 className="mt-2 text-2xl font-medium tracking-tight text-neutral-950">
                  {alumnus.name}
                </h3>
              </div>

              <div className="lg:col-span-5 lg:col-start-7">
                <p className="max-w-lg text-[15px] leading-7 text-neutral-600">
                  {alumnus.description}
                </p>
              </div>

              <div className="lg:col-span-1 lg:col-start-12 lg:text-right">
                <span className="text-xl text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/alumni"
            className="group inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
          >
            <span className="border-b border-black pb-1">
              Meet our alumni
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