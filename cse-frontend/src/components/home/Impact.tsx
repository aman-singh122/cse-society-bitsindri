import React from "react";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import InteractiveRow from "@/components/ui/InteractiveRow";
import AnimatedSection from "@/components/ui/AnimatedSection";

const pillars = [
  {
    number: "01",
    title: "LEARN",
    subtitle: "KNOWLEDGE & MASTERCLASSES",
    description:
      "Deep-dive technical workshops, peer learning sessions, and hands-on bootcamps covering modern web development, algorithms, artificial intelligence, and operating systems.",
    tags: ["Algorithms", "System Design", "Machine Learning", "Web Architecture"],
  },
  {
    number: "02",
    title: "BUILD",
    subtitle: "SOFTWARE & OPEN SOURCE",
    description:
      "Transforming theoretical concepts into functional products. Students collaborate on web platforms, CLI tools, utility APIs, and open-source contributions to real-world codebases.",
    tags: ["Next.js", "TypeScript", "Python", "Docker", "Git Workflow"],
  },
  {
    number: "03",
    title: "COMPETE",
    subtitle: "HACKATHONS & ALGORITHMS",
    description:
      "Organizing high-stakes hackathons, speed programming rounds, and algorithm challenges that hone critical thinking, problem-solving, and team execution under pressure.",
    tags: ["CodeSprint", "Hackathon", "Competitive Coding", "Data Structures"],
  },
  {
    number: "04",
    title: "CONNECT",
    subtitle: "ALUMNI & INDUSTRY NETWORK",
    description:
      "Bridging campus talent with global industry leadership through mentorship programs, tech talks, resume reviews, and career insights from alumni working at top tech firms.",
    tags: ["Microsoft", "Amazon", "Tech Talks", "Mentorship"],
  },
];

export default function Impact() {
  return (
    <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel index="03" title="OUR IMPACT" category="PILLARS" />
              <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
                What drives <span className="text-neutral-400">our society.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-neutral-600 font-mono">
              [ Interactive rows — Hover or tap to expand detailed domain focus ]
            </p>
          </div>

          <div className="mt-12 border-t border-black/15">
            {pillars.map((pillar, index) => (
              <InteractiveRow
                key={pillar.number}
                number={pillar.number}
                title={pillar.title}
                subtitle={pillar.subtitle}
                description={pillar.description}
                tags={pillar.tags}
                defaultExpanded={index === 0}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}