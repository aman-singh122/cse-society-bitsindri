import Link from "next/link";

const areas = [
  "Algorithms & Data Structures",
  "Artificial Intelligence",
  "Computer Networks",
  "Database Systems",
  "Operating Systems",
  "Software Engineering",
  "Compiler Design",
  "Advanced Programming",
];

const labs = [
  "DBMS Lab",
  "DAA Lab",
  "Operating System Lab",
  "Compiler Design Lab",
  "Computer Architecture Lab",
  "Computer Networks Lab",
  "Artificial Intelligence Lab",
  "Software Engineering Lab",
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-28 pt-20 lg:px-10 lg:pb-40 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-black/25" />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              CSE · BIT Sindri
            </p>
          </div>

          <div className="mt-10 max-w-6xl">
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
              Computer Science
              <br />
              <span className="text-neutral-400">
                & Engineering.
              </span>
            </h1>
          </div>

          <div className="mt-16 grid border-t border-black/10 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                Established
              </p>

              <p className="mt-3 text-5xl font-medium tracking-[-0.04em] text-neutral-950">
                1987
              </p>
            </div>

            <div className="mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0">
              <p className="text-[15px] leading-7 text-neutral-600">
                The Department of Computer Science & Engineering at BIT Sindri
                has been part of the institute's engineering education journey
                since 1987, combining foundational computer science education
                with practical and evolving areas of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  01
                </span>

                <span className="h-px w-8 bg-black/20" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Legacy
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl">
                Four decades of
                <span className="text-neutral-400">
                  {" "}
                  computer science education.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-[15px] leading-7 text-neutral-600">
                Established in 1987, the department has grown alongside the
                changing landscape of computing. Its academic foundation
                continues to span core computer science disciplines while
                opening opportunities to explore emerging technologies.
              </p>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-neutral-600">
                The department's first undergraduate batch graduated in 1991,
                marking the beginning of a long line of graduates who have
                moved into professional and academic careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  02
                </span>

                <span className="h-px w-8 bg-black/20" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Areas of Study
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                From fundamentals
                <br />
                <span className="text-neutral-400">
                  to emerging technologies.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-neutral-600">
                Computer science at BIT Sindri spans the fundamental systems
                and software disciplines that form the foundation of modern
                computing.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, index) => (
              <div
                key={area}
                className="border-b border-black/10 px-1 py-7 sm:px-5"
              >
                <span className="text-[10px] tracking-[0.2em] text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 text-sm font-medium text-neutral-900">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  03
                </span>

                <span className="h-px w-8 bg-black/20" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Laboratories
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                Learning doesn't stop
                <span className="text-neutral-400">
                  {" "}
                  at the lecture.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-neutral-600">
                Practical work is an important part of computer science
                education. The department lists dedicated laboratories across
                core areas of computing and software engineering.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-black/10">
            {labs.map((lab, index) => (
              <div
                key={lab}
                className="grid grid-cols-12 items-center border-b border-black/10 py-6"
              >
                <span className="col-span-2 text-xs tracking-[0.2em] text-neutral-400 lg:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="col-span-9 text-base font-medium text-neutral-900 lg:col-span-6">
                  {lab}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Society */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="bg-black px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              CSE Society
            </p>

            <h2 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              The department gives us
              <br />
              the foundation.
              <br />
              <span className="text-white/40">
                The community takes it forward.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-[15px] leading-7 text-white/60">
              The CSE Society provides a student-driven space for technical
              exploration, collaboration, events and experiences beyond the
              formal curriculum.
            </p>

            <Link
              href="/events"
              className="mt-10 inline-flex bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore our activities
              <span className="ml-4">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}