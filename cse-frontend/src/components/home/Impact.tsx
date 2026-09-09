const pillars = [
  {
    number: "01",
    title: "Learn",
    description:
      "Explore new technologies, strengthen your fundamentals and learn from peers, mentors and industry experiences.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn ideas into working solutions through projects, experimentation and hands-on technical initiatives.",
  },
  {
    number: "03",
    title: "Compete",
    description:
      "Challenge yourself through hackathons, coding competitions and problem-solving experiences.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Build meaningful connections with fellow students, alumni, mentors and the wider technology community.",
  },
];

export default function Impact() {
  return (
    <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                02
              </span>

              <span className="h-px w-8 bg-black/20" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                What Drives Us
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Technology is only the beginning.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-500">
              We create an environment where students can explore ideas,
              develop practical skills and grow together beyond the
              classroom.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 border-t border-black/10">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group grid gap-6 border-b border-black/10 py-8 transition-colors duration-300 hover:bg-black/[0.02] lg:grid-cols-12 lg:items-start lg:gap-8"
            >
              <div className="lg:col-span-2">
                <span className="text-xs tracking-[0.2em] text-neutral-400">
                  {pillar.number}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-950">
                  {pillar.title}
                </h3>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="max-w-lg text-sm leading-6 text-neutral-500">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}