import Link from "next/link";

const roles = [
  {
    number: "01",
    title: "Society Leadership",
    description:
      "The student leadership responsible for guiding the society, shaping its initiatives and building a strong technical community.",
  },
  {
    number: "02",
    title: "Technical Team",
    description:
      "Students who contribute to technical initiatives, workshops, projects and technology-focused activities.",
  },
  {
    number: "03",
    title: "Creative & Media",
    description:
      "The people behind the society's visual identity, communication, documentation and digital presence.",
  },
  {
    number: "04",
    title: "Operations",
    description:
      "The team that coordinates events, logistics and the many details that turn ideas into experiences.",
  },
];

export default function TeamPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-28 pt-20 lg:px-10 lg:pb-36 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-black/25" />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              CSE Society · Team
            </p>
          </div>

          <div className="mt-10 max-w-6xl">
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
              People behind
              <br />
              <span className="text-neutral-400">
                the community.
              </span>
            </h1>
          </div>

          <div className="mt-14 grid border-t border-black/10 pt-7 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="max-w-xl text-[15px] leading-7 text-neutral-600">
                A student community is shaped by the people who contribute
                their time, ideas and energy to make it happen.
              </p>
            </div>

            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                CSE Society
              </p>

              <p className="mt-3 text-2xl font-medium tracking-tight text-neutral-950">
                Student-led
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  01
                </span>

                <span className="h-px w-8 bg-black/20" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Structure
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                Different roles.
                <br />
                <span className="text-neutral-400">
                  One community.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-neutral-600">
                Every successful initiative depends on people working together.
                Our society brings together students with different interests,
                skills and responsibilities.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-black/10">
            {roles.map((role) => (
              <div
                key={role.number}
                className="grid gap-6 border-b border-black/10 py-9 lg:grid-cols-12 lg:items-start lg:gap-8"
              >
                <div className="lg:col-span-1">
                  <span className="text-xs tracking-[0.2em] text-neutral-400">
                    {role.number}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-medium tracking-tight text-neutral-950">
                    {role.title}
                  </h3>
                </div>

                <div className="lg:col-span-5 lg:col-start-7">
                  <p className="max-w-lg text-sm leading-6 text-neutral-500">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Placeholder */}
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
                  Current Team
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                The people
                <span className="text-neutral-400">
                  {" "}
                  making it happen.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-neutral-600">
                The current society team will be featured here with their real
                names, roles and profiles.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Leadership",
              "Technical Team",
              "Creative & Media",
              "Events & Operations",
              "Community",
              "Coming Soon",
            ].map((item, index) => (
              <div
                key={item}
                className="flex min-h-[180px] flex-col justify-between border border-black/10 bg-[#eeece6] p-6"
              >
                <span className="text-xs tracking-[0.2em] text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg font-medium tracking-tight text-neutral-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="bg-black px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
              Be Part Of It
            </p>

            <h2 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              The next chapter
              <br />
              <span className="text-white/40">
                could be yours.
              </span>
            </h2>

            <Link
              href="/join"
              className="mt-10 inline-flex bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
            >
              Join the Society
              <span className="ml-4">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}