import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-20 lg:px-10">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center pb-20">

        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-black/25" />

          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
            BIT Sindri · Computer Science & Engineering
          </p>
        </div>

        {/* Heading */}
        <h1 className="max-w-6xl text-[clamp(3.4rem,8vw,8.2rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-neutral-950">
          Where ideas
          <br />
          become{" "}
          <span className="text-neutral-400">
            impact.
          </span>
        </h1>

        {/* Bottom content */}
        <div className="mt-14 grid gap-10 border-t border-black/10 pt-7 lg:grid-cols-12 lg:items-end">
          
          <div className="lg:col-span-5">
            <p className="max-w-xl text-[15px] leading-7 text-neutral-600">
              The CSE Society at BIT Sindri brings together curious minds,
              ambitious builders and future leaders through technology,
              collaboration and meaningful experiences.
            </p>
          </div>

          <div className="flex items-center gap-3 lg:col-span-7 lg:justify-end">
            <Link
              href="/events"
              className="bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Explore Events
            </Link>

            <Link
              href="/join"
              className="border border-black/15 bg-transparent px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
            >
              Join Society
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-6 hidden items-center gap-3 lg:flex">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
            Scroll to explore
          </span>

          <span className="h-10 w-px bg-black/20" />
        </div>
      </div>
    </section>
  );
}