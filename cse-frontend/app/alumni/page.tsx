import Link from "next/link";

const alumni = [
  {
    year: "BIT Sindri",
    name: "Swati Jha",
    role: "Microsoft",
    description:
      "An alumna of BIT Sindri who has built her professional career in the technology industry.",
  },
  {
    year: "BIT Sindri",
    name: "Ruma Karn",
    role: "Amazon",
    description:
      "An alumna of BIT Sindri working in the technology industry at Amazon.",
  },
];

const alumniDirectory = [
  {
    name: "Sujeet Srivastava",
    batch: "B.Tech. '93",
    role: "CEO · Arenyam Technologies",
  },
  {
    name: "Pratik Kumar",
    batch: "B.Tech. '11",
    role: "Full Stack Developer · ML / GenAI",
  },
  {
    name: "Ravi Shankar",
    batch: "B.Tech. '22",
    role: "Associate Software Engineer · Xiaomi India",
  },
  {
    name: "Kumar Abhishek",
    batch: "B.Tech. '24",
    role: "Software Engineer · Samsung R&D",
  },
];

export default function AlumniPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-28 pt-20 lg:px-10 lg:pb-36 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-black/25" />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              CSE Society · Alumni
            </p>
          </div>

          <div className="mt-10 max-w-6xl">
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
              Built here.
              <br />
              <span className="text-neutral-400">
                Making an impact beyond.
              </span>
            </h1>
          </div>

          <div className="mt-14 grid border-t border-black/10 pt-7 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="max-w-xl text-[15px] leading-7 text-neutral-600">
                The CSE community extends far beyond the campus. Our alumni
                carry the foundation built at BIT Sindri into technology,
                entrepreneurship, leadership and professional life.
              </p>
            </div>

            <div className="mt-8 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Since
              </p>

              <p className="mt-2 text-4xl font-medium tracking-tight text-neutral-950">
                1987
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              01
            </span>

            <span className="h-px w-8 bg-black/20" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Alumni Stories
            </p>
          </div>

          <div className="mt-12 border-t border-black/10">
            {alumni.map((person) => (
              <article
                key={person.name}
                className="grid gap-8 border-b border-black/10 py-10 lg:grid-cols-12 lg:items-start"
              >
                <div className="lg:col-span-2">
                  <p className="text-xs tracking-[0.2em] text-neutral-400">
                    {person.year}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-medium tracking-[-0.03em] text-neutral-950">
                    {person.name}
                  </h2>

                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                    {person.role}
                  </p>
                </div>

                <div className="lg:col-span-4 lg:col-start-9">
                  <p className="text-sm leading-6 text-neutral-500">
                    {person.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  02
                </span>

                <span className="h-px w-8 bg-black/20" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Community
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                A network that
                <span className="text-neutral-400">
                  {" "}
                  keeps growing.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-neutral-600">
                Alumni from BIT Sindri's computer science community are working
                across software engineering, technology, business and
                entrepreneurship.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-black/10">
            {alumniDirectory.map((person) => (
              <div
                key={person.name}
                className="grid gap-4 border-b border-black/10 py-7 sm:grid-cols-12 sm:items-center"
              >
                <p className="text-xs tracking-[0.18em] text-neutral-400 sm:col-span-2">
                  {person.batch}
                </p>

                <p className="text-base font-medium text-neutral-950 sm:col-span-4">
                  {person.name}
                </p>

                <p className="text-sm text-neutral-500 sm:col-span-6 sm:text-right">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Connection */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="bg-black px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              Stay Connected
            </p>

            <h2 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              The connection doesn't end
              <br />
              <span className="text-white/40">
                when you leave campus.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/60">
              Alumni interactions, mentorship and shared experiences help
              connect different generations of the CSE community.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
            >
              Connect with us
              <span className="ml-4">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}