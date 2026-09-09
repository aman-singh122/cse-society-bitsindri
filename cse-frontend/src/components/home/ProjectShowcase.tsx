import React from "react";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowUpRight, Code, Cpu, ExternalLink, Layers } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  featured?: boolean;
  metrics?: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "CSE Society Platform & Application Engine",
    category: "Full Stack Infrastructure",
    description:
      "A high-performance digital hub and application review pipeline built for BIT Sindri's CS society, featuring dynamic applicant triage and real-time backend notifications.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "TailwindCSS"],
    featured: true,
    metrics: "100% Student Engineered",
  },
  {
    id: "02",
    title: "AlgoRank — Real-time Leaderboard",
    category: "Systems & Algorithms",
    description:
      "Automated evaluation engine for competitive coding practice rounds, tracking speed, algorithmic efficiency, and memory consumption.",
    stack: ["C++", "Python", "Docker", "Redis"],
    featured: false,
    metrics: "Sub-second Execution",
  },
  {
    id: "03",
    title: "Campus AI Research Assistant",
    category: "Artificial Intelligence",
    description:
      "Retrieval-augmented intelligence interface indexed over technical research papers and departmental curriculum documentation.",
    stack: ["PyTorch", "LangChain", "VectorDB", "FastAPI"],
    featured: false,
    metrics: "RAG Pipeline",
  },
];

export default function ProjectShowcase() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel index="06" title="STUDENT PROJECTS" category="WHAT WE BUILD" />
              <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
                Code, systems & <span className="text-neutral-400 font-normal">real engineering.</span>
              </h2>
            </div>
            <p className="max-w-md font-mono text-xs text-neutral-500">
              [ Production-grade student software, algorithmic tools, and open research ]
            </p>
          </div>

          {/* Grid Layout: Featured Project + Secondary List */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Featured Main Project */}
            <div className="group relative flex flex-col justify-between border border-black/15 bg-[#f5f3ee] p-8 transition-all duration-300 hover:border-black hover:shadow-2xl lg:col-span-7">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                  <span className="font-bold text-black">{featuredProject.id} / FEATURED SYSTEM</span>
                  <span className="border border-black/10 bg-black text-white px-2.5 py-0.5 uppercase tracking-wider text-[10px]">
                    {featuredProject.category}
                  </span>
                </div>

                {/* Simulated Visual Preview Box */}
                <div className="mt-8 relative overflow-hidden border border-black/15 bg-[#141413] p-6 text-[#f5f3ee] font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-white/40 text-[10px]">main.ts — cse-society</span>
                  </div>
                  <div className="mt-4 space-y-2 text-white/70">
                    <p><span className="text-purple-400">const</span> society = <span className="text-yellow-300">new</span> CSESociety({"{"}</p>
                    <p className="pl-4">campus: <span className="text-green-300">&quot;BIT Sindri&quot;</span>,</p>
                    <p className="pl-4">status: <span className="text-green-300">&quot;Building future software&quot;</span></p>
                    <p>{"}"});</p>
                  </div>
                </div>

                <h3 className="mt-8 text-3xl font-semibold tracking-tight text-[#141413] transition-colors group-hover:text-black">
                  {featuredProject.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {featuredProject.description}
                </p>
              </div>

              {/* Footer Tech Stack */}
              <div className="mt-8 border-t border-black/10 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-black/15 bg-[#faf9f6] px-3 py-1 font-mono text-xs font-medium text-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-neutral-500">
                    {featuredProject.metrics}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Project Cards */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              {otherProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="group flex flex-1 flex-col justify-between border border-black/15 bg-[#f5f3ee] p-7 transition-all duration-300 hover:border-black hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                      <span className="font-bold text-black">{proj.id}</span>
                      <span className="border border-black/10 bg-[#faf9f6] px-2.5 py-0.5 uppercase tracking-wider text-[10px] text-neutral-700">
                        {proj.category}
                      </span>
                    </div>

                    <h4 className="mt-4 text-2xl font-semibold tracking-tight text-[#141413] group-hover:text-black">
                      {proj.title}
                    </h4>

                    <p className="mt-3 text-xs leading-6 text-neutral-600">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-black/10 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-black/10 bg-[#faf9f6] px-2.5 py-0.5 font-mono text-[10px] text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between font-mono text-xs text-neutral-500">
                      <span>{proj.metrics}</span>
                      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
