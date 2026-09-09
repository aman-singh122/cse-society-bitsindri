import React from "react";
import Link from "next/link";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechMarquee from "@/components/ui/TechMarquee";
import { ArrowRight, ArrowUpRight, Code, Shield, Users, Zap } from "lucide-react";

const roles = [
  {
    number: "01",
    title: "Society Leadership",
    tag: "STRATEGY & DIRECTION",
    description:
      "Student office bearers responsible for guiding the society, shaping technical initiatives, and maintaining faculty & alumni alignment.",
  },
  {
    number: "02",
    title: "Technical Team",
    tag: "ENGINEERING & BOOTCAMPS",
    description:
      "Engineers and competitive coders leading workshops, managing society platforms, organizing hackathons, and mentoring junior batches.",
  },
  {
    number: "03",
    title: "Creative & Media",
    tag: "DESIGN & IDENTITY",
    description:
      "Designers, visual storytellers, and web developers preserving the editorial visual identity, brand consistency, and digital presence.",
  },
  {
    number: "04",
    title: "Operations & Logistics",
    tag: "EVENTS & EXECUTION",
    description:
      "The team managing event execution, venue coordination, sponsorship outreach, and smooth competition logistics.",
  },
];

const teamDomains = [
  { title: "Leadership Team", desc: "Student President & General Secretaries", tag: "MANAGEMENT" },
  { title: "Technical Leads", desc: "Full Stack, AI/ML, and CP Leads", tag: "ENGINEERING" },
  { title: "Creative & UI/UX", desc: "Digital Identity, Web, & Media", tag: "DESIGN" },
  { title: "Events & Logistics", desc: "Hackathons & Contest Ops", tag: "OPERATIONS" },
  { title: "Alumni Relations", desc: "Mentorship & Corporate Linkage", tag: "NETWORK" },
  { title: "Junior Associates", desc: "Active Contributor Cohort", tag: "CONTRIBUTORS" },
];

export default function TeamPage() {
  return (
    <main className="pt-24 w-full overflow-x-hidden">
      {/* Hero */}
      <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <TechnicalLabel index="TEAM / 01" title="STUDENT COMMUNITY" category="BIT SINDRI" />

          <div className="mt-8 max-w-6xl">
            <h1 className="text-clamp-hero font-semibold tracking-[-0.055em] text-[#141413]">
              People behind <br />
              <span className="text-neutral-400 font-normal">the community.</span>
            </h1>
          </div>

          <div className="mt-14 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-base leading-8 text-neutral-600 sm:text-lg">
                A student-led technical society is defined by the energy, dedication, and problem-solving drive of its members. Meet the teams powering our platforms, hackathons, and workshops.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">
                ORGANIZATION
              </span>
              <p className="mt-1 font-mono text-3xl font-bold tracking-tight text-[#141413]">
                STUDENT-LED
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <TechMarquee
        items={["LEADERSHIP", "TECHNICAL TEAM", "CREATIVE & MEDIA", "OPERATIONS", "COMMUNITY", "CSE SOCIETY"]}
        speed={28}
        variant="default"
      />

      {/* Team Structure */}
      <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="02" title="ROLE HIERARCHY" category="STRUCTURE" />
            <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
              Different roles. <span className="text-neutral-400 font-normal">One vision.</span>
            </h2>

            <div className="mt-14 border-t border-black/15">
              {roles.map((role) => (
                <div
                  key={role.number}
                  className="group grid gap-6 border-b border-black/15 py-9 transition-colors hover:bg-black/[0.015] md:grid-cols-12 md:items-start"
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-base font-bold text-neutral-400 group-hover:text-black">
                      {role.number}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <span className="border border-black/10 bg-[#f5f3ee] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                      {role.tag}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#141413] group-hover:text-black sm:text-3xl">
                      {role.title}
                    </h3>
                  </div>

                  <div className="md:col-span-7">
                    <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                      {role.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Domain Cards Grid */}
      <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="03" title="TEAMS & WINGS" category="ORGANIZATION" />
            <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
              Active wings.
            </h2>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamDomains.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex min-h-[220px] flex-col justify-between border border-black/15 bg-[#faf9f6] p-7 transition-all duration-300 hover:border-black hover:shadow-xl"
                >
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="border border-black/10 bg-[#f5f3ee] px-2 py-0.5 uppercase tracking-wider text-[10px] text-neutral-700">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#141413]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-neutral-500">
                      {item.desc}
                    </p>
                  </div>

                  <div className="border-t border-black/10 pt-4 font-mono text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-black">
                    CSE SOCIETY · BIT SINDRI
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-[#141413] px-4 py-20 text-[#f5f3ee] sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="04" title="RECRUITMENT" category="CONTRIBUTE" dark />

            <h2 className="mt-6 text-clamp-display font-medium tracking-tight text-[#f5f3ee]">
              The next chapter <br />
              <span className="text-white/40">could be yours.</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
              Applications for student members and domain contributors are open. Become part of BIT Sindri's premier technology organization.
            </p>

            <Link
              href="/join"
              className="mt-8 inline-flex items-center gap-3 bg-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#141413] transition-all hover:bg-neutral-200"
            >
              <span>APPLY TO JOIN THE TEAM</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}