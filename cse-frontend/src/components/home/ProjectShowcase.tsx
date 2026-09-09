"use client";

import React from "react";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

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
  const featuredProject =
    projects.find((project) => project.featured) || projects[0];

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      className="
        relative overflow-hidden
        border-b cse-border
        bg-[var(--cse-bg)]
        px-4 py-20
        sm:px-6
        lg:px-10 lg:py-28
      "
    >
      {/* Background grid */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          cse-grid
          opacity-60
          [background-size:48px_48px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel
                index="06"
                title="STUDENT PROJECTS"
                category="WHAT WE BUILD"
              />

              <h2
                className="
                  mt-4
                  text-clamp-display
                  font-medium
                  tracking-tight
                  cse-text-strong
                "
              >
                Code, systems &{" "}
                <span className="cse-text-muted">
                  real engineering.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-md
                font-mono
                text-[10px]
                leading-5
                cse-text-soft
              "
            >
              [ Production-grade student software, algorithmic
              tools, and open research ]
            </p>
          </div>


          {/* =================================================
              PROJECT GRID
          ================================================== */}

          <div className="mt-14 grid gap-7 lg:grid-cols-12 lg:items-stretch">

            {/* =================================================
                FEATURED PROJECT
            ================================================== */}

            <div
              className="
                group
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                border
                cse-border
                bg-[var(--cse-surface)]
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[var(--cse-text)]
                hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]
                lg:col-span-7
                lg:p-8
              "
            >

              {/* subtle corner */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-24
                  w-24
                  border-b
                  border-l
                  cse-border
                  opacity-40
                "
              />

              <div>

                {/* top metadata */}

                <div className="flex items-center justify-between gap-4 font-mono text-[9px]">

                  <span className="font-bold tracking-[0.14em] cse-text">
                    {featuredProject.id} / FEATURED SYSTEM
                  </span>

                  <span
                    className="
                      border
                      cse-border
                      bg-[var(--cse-text)]
                      px-2.5
                      py-1
                      text-[8px]
                      uppercase
                      tracking-[0.12em]
                      text-[var(--cse-bg)]
                    "
                  >
                    {featuredProject.category}
                  </span>

                </div>


                {/* =================================================
                    CODE PREVIEW
                ================================================== */}

                <div
                  className="
                    relative
                    mt-8
                    overflow-hidden
                    border
                    border-white/10
                    bg-[#141413]
                    p-5
                    font-mono
                    text-xs
                    text-[#f5f3ee]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.01]
                  "
                >

                  {/* grid */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-[0.07]
                    "
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          rgba(255,255,255,0.5) 1px,
                          transparent 1px
                        ),
                        linear-gradient(
                          90deg,
                          rgba(255,255,255,0.5) 1px,
                          transparent 1px
                        )
                      `,
                      backgroundSize: "32px 32px",
                    }}
                  />

                  <div className="relative z-10">

                    <div className="flex items-center justify-between border-b border-white/15 pb-3">

                      <div className="flex items-center gap-2">

                        <span className="h-2 w-2 rounded-full bg-red-500/80" />

                        <span className="h-2 w-2 rounded-full bg-yellow-500/80" />

                        <span className="h-2 w-2 rounded-full bg-green-500/80" />

                      </div>

                      <span className="text-[9px] text-white/40">
                        main.ts — cse-society
                      </span>

                    </div>

                    <div className="mt-4 space-y-2 text-white/70">

                      <p>
                        <span className="text-purple-400">
                          const
                        </span>{" "}
                        society ={" "}
                        <span className="text-yellow-300">
                          new
                        </span>{" "}
                        CSESociety({"{"}
                      </p>

                      <p className="pl-4">
                        campus:{" "}
                        <span className="text-green-300">
                          &quot;BIT Sindri&quot;
                        </span>
                        ,
                      </p>

                      <p className="pl-4">
                        status:{" "}
                        <span className="text-green-300">
                          &quot;Building future software&quot;
                        </span>
                      </p>

                      <p>
                        {"}"});
                      </p>

                    </div>

                  </div>
                </div>


                {/* title */}

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-semibold
                    tracking-tight
                    cse-text-strong
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    sm:text-3xl
                  "
                >
                  {featuredProject.title}
                </h3>


                {/* description */}

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-7
                    cse-text-muted
                  "
                >
                  {featuredProject.description}
                </p>

              </div>


              {/* =================================================
                  FEATURED FOOTER
              ================================================== */}

              <div className="mt-8 border-t cse-border pt-6">

                <div className="flex flex-wrap items-center gap-2">

                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        border
                        cse-border
                        bg-[var(--cse-surface-2)]
                        px-3
                        py-1
                        font-mono
                        text-[10px]
                        font-medium
                        cse-text
                        transition-colors
                        duration-300
                        group-hover:border-[var(--cse-text)]
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>


                <div className="mt-6 flex items-center justify-between">

                  <span className="font-mono text-[9px] font-semibold tracking-[0.12em] cse-text-soft">
                    {featuredProject.metrics}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--cse-text)]
                      text-[var(--cse-bg)]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <ArrowUpRight size={16} />
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                SECONDARY PROJECTS
            ================================================== */}

            <div className="flex flex-col gap-7 lg:col-span-5">

              {otherProjects.map((project) => (

                <div
                  key={project.id}
                  className="
                    group
                    flex
                    flex-1
                    flex-col
                    justify-between
                    border
                    cse-border
                    bg-[var(--cse-surface)]
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[var(--cse-text)]
                    hover:shadow-[0_20px_55px_rgba(0,0,0,0.1)]
                  "
                >

                  <div>

                    {/* metadata */}

                    <div className="flex items-center justify-between gap-4 font-mono text-[9px]">

                      <span className="font-bold tracking-[0.12em] cse-text">
                        {project.id}
                      </span>

                      <span
                        className="
                          border
                          cse-border
                          bg-[var(--cse-surface-2)]
                          px-2.5
                          py-1
                          text-[8px]
                          uppercase
                          tracking-[0.1em]
                          cse-text-muted
                        "
                      >
                        {project.category}
                      </span>

                    </div>


                    {/* title */}

                    <h4
                      className="
                        mt-5
                        text-xl
                        font-semibold
                        tracking-tight
                        cse-text-strong
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        sm:text-2xl
                      "
                    >
                      {project.title}
                    </h4>


                    {/* description */}

                    <p
                      className="
                        mt-3
                        text-xs
                        leading-6
                        cse-text-muted
                      "
                    >
                      {project.description}
                    </p>

                  </div>


                  {/* footer */}

                  <div className="mt-6 border-t cse-border pt-4">

                    <div className="flex flex-wrap gap-1.5">

                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            border
                            cse-border
                            bg-[var(--cse-surface-2)]
                            px-2.5
                            py-0.5
                            font-mono
                            text-[9px]
                            cse-text
                          "
                        >
                          {tech}
                        </span>
                      ))}

                    </div>


                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                        font-mono
                        text-[9px]
                        cse-text-soft
                      "
                    >

                      <span>
                        {project.metrics}
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:cse-text-strong
                        "
                      />

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* =================================================
              STATUS FOOTER
          ================================================== */}

          <div className="mt-6 flex items-center justify-between border-t cse-border pt-5">

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full cse-accent-bg" />

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] cse-text-soft">
                PROJECT INDEX / 001 — 003
              </span>

            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] cse-text-soft sm:block">
              BUILD / SHIP / ITERATE
            </span>

          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}