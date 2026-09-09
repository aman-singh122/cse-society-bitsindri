import Link from "next/link";

const galleryItems = [
  {
    id: "01",
    title: "Technical Sessions",
    category: "LEARNING",
    size: "large",
  },
  {
    id: "02",
    title: "Hackathons & Competitions",
    category: "BUILD",
    size: "small",
  },
  {
    id: "03",
    title: "Community & Collaboration",
    category: "COMMUNITY",
    size: "small",
  },
  {
    id: "04",
    title: "Workshops & Experiences",
    category: "EXPERIENCE",
    size: "large",
  },
];

export default function GalleryPreview() {
  return (
    <section className="border-t border-black/10 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                07
              </span>

              <span className="h-px w-8 bg-black/20" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Gallery
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[4.25rem]">
              Moments that
              <br />
              <span className="text-neutral-400">define the community.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-neutral-600">
              From classrooms and workshops to competitions and celebrations,
              these are the experiences that bring the CSE community together.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden bg-[#e9e7e0] ${
                item.size === "large"
                  ? "min-h-[360px] md:min-h-[500px]"
                  : "min-h-[280px] md:min-h-[360px]"
              }`}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="text-center">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400">
                    CSE Society
                  </p>

                  <p className="mt-3 text-xl font-medium tracking-tight text-neutral-600 sm:text-2xl">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Overlay information */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-lg font-medium text-neutral-800">
                    {item.title}
                  </h3>
                </div>

                <span className="text-xs tracking-[0.2em] text-neutral-400">
                  {item.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-end">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-sm font-medium text-neutral-900"
          >
            <span className="border-b border-black pb-1">
              Explore the gallery
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