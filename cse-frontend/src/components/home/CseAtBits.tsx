import React from "react";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const disciplines = [
  { id: "01", name: "ALGORITHMS & DATA STRUCTURES", desc: "Complexity, optimization, graph theoretical models" },
  { id: "02", name: "ARTIFICIAL INTELLIGENCE", desc: "Machine learning, neural networks, computer vision" },
  { id: "03", name: "COMPUTER NETWORKS", desc: "Protocols, distributed systems, internet architecture" },
  { id: "04", name: "DATABASE SYSTEMS", desc: "Relational algebra, NoSQL indexing, query tuning" },
  { id: "05", name: "WEB TECHNOLOGIES", desc: "Full-stack frameworks, microservices, cloud deployments" },
  { id: "06", name: "OPERATING SYSTEMS", desc: "Kernel concurrency, memory management, file systems" },
  { id: "07", name: "COMPILER DESIGN", desc: "Lexical analysis, AST parsing, bytecode generation" },
  { id: "08", name: "SOFTWARE ENGINEERING", desc: "Agile methodologies, testing pipelines, CI/CD" },
];

export default function CseAtBits() {
  return (
    <section className="relative overflow-hidden border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-36">
      {/* Giant 1987 Watermark */}
      <div className="pointer-events-none absolute -right-10 top-10 select-none font-mono text-[14rem] font-bold text-black/[0.035] leading-none sm:text-[22rem]">
        1987
      </div>

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection>
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <TechnicalLabel index="07" title="DEPARTMENTAL ACADEMICS" category="CSE @ BIT SINDRI" />
              <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
                CSE @ BIT Sindri
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-600 sm:text-xl">
                A department built around rigorous engineering, computational thinking, and real-world problem solving since 1987.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right font-mono text-xs text-neutral-500">
              <p className="font-semibold text-black uppercase tracking-widest">ESTABLISHED IN 1987</p>
              <p className="mt-1">BIT SINDRI, DHANBAD</p>
            </div>
          </div>

          {/* Editorial Discipline Grid */}
          <div className="mt-16 grid border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((disc) => (
              <div
                key={disc.id}
                className="group cursor-pointer border-b border-r border-black/15 bg-transparent p-7 transition-all duration-300 hover:bg-[#faf9f6] hover:shadow-lg"
              >
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400 group-hover:text-black">
                  <span>{disc.id}</span>
                  <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    →
                  </span>
                </div>

                <h3 className="mt-6 font-mono text-sm font-bold tracking-wider text-[#141413] group-hover:text-black">
                  {disc.name}
                </h3>

                <p className="mt-3 text-xs leading-5 text-neutral-500">
                  {disc.desc}
                </p>

                <div className="mt-6 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}