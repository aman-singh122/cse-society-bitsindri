import React from "react";
import Link from "next/link";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function JoinCta() {
  return (
    <section className="relative overflow-hidden bg-[#141413] px-4 py-24 text-[#f5f3ee] sm:px-6 lg:px-10 lg:py-40">
      {/* Background Dot pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-dot-pattern" />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          <TechnicalLabel index="10" title="JOIN THE COMMUNITY" category="MEMBERSHIP" dark />

          <div className="mt-10 max-w-6xl">
            <h2 className="text-clamp-hero font-medium tracking-[-0.055em] text-[#f5f3ee]">
              BUILD SOMETHING <br />
              <span className="text-white/40 italic">WORTH REMEMBERING.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="text-base leading-8 text-white/70 sm:text-lg">
                Whether you are passionate about full-stack engineering, competitive programming, AI research, or digital design, the CSE Society offers a community of peers and mentors to build with.
              </p>

              <div className="mt-4 font-mono text-xs text-white/50">
                <span>OPEN TO ALL CSE STUDENTS · BIT SINDRI</span>
              </div>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end lg:col-span-6">
              <Link
                href="/join"
                className="group inline-flex items-center gap-4 bg-white px-9 py-5 font-mono text-sm font-bold uppercase tracking-[0.2em] text-[#141413] transition-all duration-300 hover:bg-neutral-200 hover:shadow-2xl hover:-translate-y-1"
              >
                <span>JOIN THE CSE SOCIETY</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}