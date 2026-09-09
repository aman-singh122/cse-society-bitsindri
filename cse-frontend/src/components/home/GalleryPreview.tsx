import React from "react";
import Image from "next/image";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const galleryItems = [
  {
    id: "01",
    title: "Computer Science Laboratory Session",
    category: "LABORATORY",
    aspect: "aspect-[16/10]",
    imagePath: "/images/gallery/lab_session.png",
    colSpan: "lg:col-span-8",
  },
  {
    id: "02",
    title: "Annual Hackathon & Problem Solving",
    category: "COMPETITION",
    aspect: "aspect-[4/5]",
    colSpan: "lg:col-span-4",
  },
  {
    id: "03",
    title: "Technical Masterclass & Bootcamps",
    category: "WORKSHOP",
    aspect: "aspect-[4/3]",
    colSpan: "lg:col-span-5",
  },
  {
    id: "04",
    title: "Student Project Demos & Innovation",
    category: "SHOWCASE",
    aspect: "aspect-[16/9]",
    colSpan: "lg:col-span-7",
  },
];

export default function GalleryPreview() {
  return (
    <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel index="09" title="CULTURE & MOMENTS" category="GALLERY" />
              <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
                Life inside <span className="text-neutral-400 font-normal">the society.</span>
              </h2>
            </div>
            <p className="max-w-md font-mono text-xs text-neutral-500">
              [ Moments of collaboration, coding, hackathons, and technical presentations ]
            </p>
          </div>

          {/* Asymmetric Gallery Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-12">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden border border-black/15 bg-[#141413] text-[#f5f3ee] ${item.colSpan}`}
              >
                {/* Visual Area */}
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-neutral-900`}>
                  {item.imagePath ? (
                    <Image
                      src={item.imagePath}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    /* High-tech stylized placeholder graphic */
                    <div className="absolute inset-0 flex flex-col justify-between p-6 bg-tech-grid opacity-80 transition-transform duration-700 group-hover:scale-105">
                      <div className="flex items-center justify-between font-mono text-xs text-white/50">
                        <span>{item.id}</span>
                        <span className="border border-white/20 px-2 py-0.5 uppercase tracking-wider text-[10px]">
                          {item.category}
                        </span>
                      </div>

                      <div className="font-mono text-4xl font-bold text-white/10 select-none">
                        CSE / BIT SINDRI
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 transition-transform duration-300">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-xl font-medium text-white sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}