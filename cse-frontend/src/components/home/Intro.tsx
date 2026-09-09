import React from "react";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Code, Trophy, Users } from "lucide-react";

export default function Intro() {
  return (
    <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          {/* Section Numbering */}
          <TechnicalLabel index="01" title="WHO WE ARE" category="PURPOSE & CULTURE" />

          {/* Main Statement */}
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <h2 className="text-clamp-display font-semibold tracking-tight text-[#141413]">
                A community built around{" "}
                <span className="text-neutral-400 font-normal">
                  curiosity, technology & engineering excellence.
                </span>
              </h2>
            </div>

            <div className="space-y-6 lg:col-span-4 lg:pt-4">
              <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                Founded within the Department of Computer Science & Engineering at BIT Sindri, the society serves as an incubator for student initiative. We bridge classroom fundamentals with real-world software engineering, competitive coding, open-source building, and AI research.
              </p>

              <div className="border-t border-black/15 pt-4">
                <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                  <span className="font-semibold text-black">FACULTY GUIDANCE</span>
                  <span>•</span>
                  <span className="font-semibold text-black">100% STUDENT DRIVEN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid Highlights with Cards */}
          <div className="mt-16 grid gap-6 border-t border-black/15 pt-10 sm:grid-cols-3">
            <div className="group relative border border-black/15 bg-[#f5f3ee] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  01 / CODE & INFRA
                </span>
                <Code size={18} className="text-neutral-700 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="mt-4 text-lg font-bold text-[#141413]">
                Hands-on Engineering
              </p>
              <p className="mt-2 text-xs leading-6 text-neutral-600">
                Building scalable web apps, backend microservices, cloud deployments, and AI workflows.
              </p>
            </div>

            <div className="group relative border border-black/15 bg-[#f5f3ee] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  02 / COMPETITION
                </span>
                <Trophy size={18} className="text-amber-700 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="mt-4 text-lg font-bold text-[#141413]">
                Hackathons & Contests
              </p>
              <p className="mt-2 text-xs leading-6 text-neutral-600">
                Organizing CodeSprint, national hackathons, algorithm practice, and ICPC preparatory tracks.
              </p>
            </div>

            <div className="group relative border border-black/15 bg-[#f5f3ee] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  03 / MENTORSHIP
                </span>
                <Users size={18} className="text-emerald-700 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="mt-4 text-lg font-bold text-[#141413]">
                Alumni Synergy
              </p>
              <p className="mt-2 text-xs leading-6 text-neutral-600">
                Connecting current students directly with alumni at Microsoft, Amazon, Google, and top tech startups.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}