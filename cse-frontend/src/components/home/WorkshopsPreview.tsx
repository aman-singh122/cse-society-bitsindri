import React from "react";
import Link from "next/link";
import { workshops } from "@/data/workshops";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import InteractiveRow from "@/components/ui/InteractiveRow";

export default function WorkshopsPreview() {
  return (
    <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel index="05" title="TECHNICAL WORKSHOPS" category="BOOTCAMPS" />
              <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
                Learn by <span className="text-neutral-400 font-normal">doing.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-neutral-600 font-mono">
              [ Practical bootcamps & masterclasses led by senior student engineers ]
            </p>
          </div>

          <div className="mt-14 border-t border-black/15">
            {workshops.map((ws, idx) => (
              <InteractiveRow
                key={ws.id}
                number={ws.id}
                title={ws.title}
                subtitle={`${ws.category} • DURATION: ${ws.duration}`}
                description={ws.description}
                tags={[ws.category, ws.duration, "Hands-on"]}
                defaultExpanded={idx === 0}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}