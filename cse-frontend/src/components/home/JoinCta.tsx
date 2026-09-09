import Link from "next/link";

export default function JoinCta() {
  return (
    <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="bg-black px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            {/* Label */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                  08
                </span>

                <span className="h-px w-8 bg-white/30" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                  Join Society
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[4.5rem]">
                Build something
                <br />
                <span className="text-white/40">worth being part of.</span>
              </h2>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/60">
                Join a community of students who learn, build, compete and
                create together. Your next idea could start here.
              </p>

              <Link
                href="/join"
                className="group mt-10 inline-flex items-center gap-4 bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span>Join the Society</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}