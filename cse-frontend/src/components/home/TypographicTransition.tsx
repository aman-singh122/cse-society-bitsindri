"use client";

import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const words = [
  { id: "01", text: "LEARN.", desc: "Foundational algorithms & systems" },
  { id: "02", text: "BUILD.", desc: "Full-stack apps & AI software" },
  { id: "03", text: "COMPETE.", desc: "Competitive coding & hackathons" },
  { id: "04", text: "CONNECT.", desc: "Global alumni & tech community" },
];

export default function TypographicTransition() {
  return (
    <section className="border-b border-black/15 bg-[#141413] px-4 py-20 text-[#f5f3ee] sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex items-center justify-between border-b border-white/15 pb-6 font-mono text-xs text-white/50">
            <span className="uppercase tracking-[0.24em]">FOUNDATIONAL PILLARS</span>
            <span>02 / CULTURE</span>
          </div>

          <div className="mt-12 space-y-8 sm:space-y-12">
            {words.map((item, idx) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between border-b border-white/10 pb-8 transition-colors duration-300 hover:border-white/40 md:flex-row md:items-baseline"
              >
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="font-mono text-xs tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                    {item.id}
                  </span>
                  <h3 className="text-4xl font-semibold tracking-[-0.04em] text-[#f5f3ee] transition-all duration-300 group-hover:translate-x-2 sm:text-6xl md:text-7xl lg:text-8xl">
                    {item.text}
                  </h3>
                </div>

                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-white/50 md:mt-0 md:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
