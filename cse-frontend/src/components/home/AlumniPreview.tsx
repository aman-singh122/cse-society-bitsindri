import React from "react";
import Link from "next/link";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const featuredAlumni = [
  {
    number: "01",
    name: "Swati Jha",
    company: "Microsoft",
    tagline: "BIT Sindri Alumna",
    description: "Built her professional engineering career in the tech industry.",
    companyBg: "MICROSOFT",
  },
  {
    number: "02",
    name: "Ruma Karn",
    company: "Amazon",
    tagline: "BIT Sindri Alumna",
    description: "Working in the technology industry at Amazon.",
    companyBg: "AMAZON",
  },
];

export default function AlumniPreview() {
  return (
    <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel index="08" title="ALUMNI NETWORK" category="FEATURED STORIES" />
              <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
                Built here. <span className="text-neutral-400 font-normal">Impact beyond.</span>
              </h2>
            </div>

            <Link
              href="/alumni"
              className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#141413] hover:underline"
            >
              <span>Explore Alumni Network</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {featuredAlumni.map((alum) => (
              <div
                key={alum.name}
                className="group relative overflow-hidden border border-black/15 bg-[#f5f3ee] p-8 transition-all duration-500 hover:border-black hover:shadow-2xl sm:p-12"
              >
                {/* Background Watermark */}
                <div className="pointer-events-none absolute right-4 bottom-2 font-mono text-6xl font-black uppercase text-black/[0.04] select-none transition-all duration-500 group-hover:scale-105 group-hover:text-black/[0.08] sm:text-8xl">
                  {alum.companyBg}
                </div>

                <div className="relative z-10 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                      <span className="font-bold text-black">{alum.number}</span>
                      <span className="border border-black/15 bg-[#faf9f6] px-3 py-1 uppercase tracking-wider text-black font-semibold">
                        {alum.company}
                      </span>
                    </div>

                    <h3 className="mt-10 text-4xl font-medium tracking-tight text-[#141413] sm:text-5xl lg:text-6xl">
                      {alum.name}
                    </h3>

                    <p className="mt-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
                      {alum.tagline} — {alum.company}
                    </p>
                  </div>

                  <div className="mt-12 border-t border-black/10 pt-6">
                    <p className="text-sm leading-6 text-neutral-600">
                      {alum.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between font-mono text-xs text-neutral-400">
                      <span>CSE / BIT SINDRI</span>
                      <ArrowUpRight size={16} className="text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}