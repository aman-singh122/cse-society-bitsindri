"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Crown,
  Edit3,
  Landmark,
  Palette,
  Search,
  Shield,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechMarquee from "@/components/ui/TechMarquee";

/* =========================================================
   TEAM DATA
   ---------------------------------------------------------
   Replace ONLY the values inside these objects later.
   The layout does not need to be changed.
========================================================= */

const leadership = [
  {
    number: "01",
    position: "PRESIDENT",
    short: "President",
    name: "To be updated",
    batch: "4TH YEAR",
    domain: "SOCIAL LEADERSHIP",
    description:
      "Leads the society's overall direction, represents the student body, and coordinates major technical and community initiatives.",
    image: null,
    accent: "dark",
  },
  {
    number: "02",
    position: "VICE PRESIDENT",
    short: "Vice President",
    name: "To be updated",
    batch: "4TH YEAR",
    domain: "LEADERSHIP",
    description:
      "Supports the President and helps coordinate society operations, initiatives, and cross-team execution.",
    image: null,
    accent: "light",
  },
  {
    number: "03",
    position: "GENERAL SECRETARY",
    short: "General Secretary",
    name: "To be updated",
    batch: "4TH YEAR",
    domain: "ADMINISTRATION",
    description:
      "Coordinates communication, documentation, meetings, internal workflows, and society-wide execution.",
    image: null,
    accent: "light",
  },
  {
    number: "04",
    position: "JOINT SECRETARY",
    short: "Joint Secretary",
    name: "To be updated",
    batch: "3RD / 4TH YEAR",
    domain: "COORDINATION",
    description:
      "Works with the secretarial team to maintain communication and coordinate activities across society wings.",
    image: null,
    accent: "light",
  },
  {
    number: "05",
    position: "TREASURER",
    short: "Treasurer",
    name: "To be updated",
    batch: "3RD / 4TH YEAR",
    domain: "FINANCIAL AFFAIRS",
    description:
      "Handles financial planning, records, budgeting, and coordination of society-related financial activities.",
    image: null,
    accent: "light",
  },
];

const wings = [
  {
    id: "editorial",
    number: "01",
    title: "Editorial & Media",
    tag: "COMMUNICATION",
    icon: Edit3,
    description:
      "Handles editorial work, announcements, social media, documentation, storytelling, and the society's public communication.",
    lead: "Lead to be updated",
    members: "Members to be added",
  },
  {
    id: "alumni",
    number: "02",
    title: "Alumni Affairs",
    tag: "NETWORK",
    icon: Users,
    description:
      "Builds meaningful connections with alumni and supports mentorship, interactions, outreach, and professional networking.",
    lead: "Lead to be updated",
    members: "Members to be added",
  },
  {
    id: "research",
    number: "03",
    title: "Research & Development",
    tag: "R&D",
    icon: Sparkles,
    description:
      "Explores emerging technologies, research ideas, technical experimentation, and long-term student-led projects.",
    lead: "Lead to be updated",
    members: "Members to be added",
  },
  {
    id: "technical",
    number: "04",
    title: "Design & Technical",
    tag: "ENGINEERING",
    icon: Wrench,
    description:
      "Builds and maintains digital platforms while contributing to design systems, development, technical events, and society infrastructure.",
    lead: "Lead to be updated",
    members: "Members to be added",
  },
  {
    id: "sports",
    number: "05",
    title: "Sports & Cultural",
    tag: "COMMUNITY",
    icon: Trophy,
    description:
      "Coordinates sports, cultural participation, community activities, and initiatives that bring members together beyond technical work.",
    lead: "Lead to be updated",
    members: "Members to be added",
  },
  {
    id: "operations",
    number: "06",
    title: "Events & Operations",
    tag: "EXECUTION",
    icon: Landmark,
    description:
      "Supports event planning, logistics, venue coordination, registrations, execution, and on-ground society operations.",
    lead: "Lead to be updated",
    members: "Members to be added",
  },
];

const members = [
  {
    name: "Member name",
    batch: "4TH YEAR",
    domain: "Domain / Responsibility",
    role: "Member",
    image: null,
  },
  {
    name: "Member name",
    batch: "4TH YEAR",
    domain: "Domain / Responsibility",
    role: "Member",
    image: null,
  },
  {
    name: "Member name",
    batch: "3RD YEAR",
    domain: "Domain / Responsibility",
    role: "Member",
    image: null,
  },
  {
    name: "Member name",
    batch: "3RD YEAR",
    domain: "Domain / Responsibility",
    role: "Member",
    image: null,
  },
  {
    name: "Member name",
    batch: "3RD YEAR",
    domain: "Domain / Responsibility",
    role: "Member",
    image: null,
  },
  {
    name: "Member name",
    batch: "3RD YEAR",
    domain: "Domain / Responsibility",
    role: "Member",
    image: null,
  },
];

const successes = [
  {
    number: "01",
    title: "Achievement headline",
    person: "Member name",
    meta: "YEAR · DOMAIN",
    description:
      "Add a short description of the achievement, competition, internship, project, research work, or recognition here.",
    image: null,
  },
  {
    number: "02",
    title: "Project / Competition success",
    person: "Member name",
    meta: "YEAR · DOMAIN",
    description:
      "A compact achievement story can live here with a supporting photograph or event image.",
    image: null,
  },
  {
    number: "03",
    title: "Career milestone",
    person: "Member name",
    meta: "YEAR · DOMAIN",
    description:
      "Use this space for notable placements, internships, research outcomes, open-source work, or other verified milestones.",
    image: null,
  },
];

type SectionKey = "council" | "wings" | "members" | "success";

export default function TeamPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("council");
  const [query, setQuery] = useState("");
  const [openWing, setOpenWing] = useState<string | null>(null);

  const filteredMembers = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return members;

    return members.filter((member) =>
      `${member.name} ${member.batch} ${member.domain} ${member.role}`
        .toLowerCase()
        .includes(value)
    );
  }, [query]);

  const scrollToSection = (section: SectionKey) => {
    setActiveSection(section);

    const target = document.getElementById(`team-${section}`);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#f5f3ee] text-[#141413]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-black/15 pt-24">
        {/* technical background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.42]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(20,20,19,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,19,0.045) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
        </div>

        <div className="pointer-events-none absolute -right-20 top-20 hidden h-80 w-80 rounded-full border border-black/10 lg:block" />
        <div className="pointer-events-none absolute -right-10 top-30 hidden h-60 w-60 rounded-full border border-black/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="flex items-start justify-between gap-8">
            <TechnicalLabel
              index="TEAM / 01"
              title="STUDENT COMMUNITY"
              category="BIT SINDRI"
            />

            <div className="hidden text-right font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 sm:block">
              <div>ORGANIZATIONAL SYSTEM</div>
              <div className="mt-1 text-neutral-700">CSE / SOCIETY</div>
            </div>
          </div>

          <div className="mt-10 max-w-5xl">
            <h1 className="text-[clamp(3.5rem,8vw,7.8rem)] font-medium leading-[0.86] tracking-[-0.065em]">
              People behind
              <br />
              <span className="font-normal text-neutral-400">
                the community.
              </span>
            </h1>
          </div>

          <div className="mt-12 grid gap-8 border-t border-black/15 pt-7 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base">
                A student-led community is built by people who take
                responsibility, create things, organize ideas, and move the
                society forward. Explore the council, functional wings, active
                members, and the achievements they create.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400 md:col-span-4 md:text-right">
              <div>
                <span className="block text-2xl font-semibold tracking-tight text-[#141413]">
                  05
                </span>
                <span>Core roles</span>
              </div>

              <div>
                <span className="block text-2xl font-semibold tracking-tight text-[#141413]">
                  06
                </span>
                <span>Society wings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NAVIGATION STRIP
      ====================================================== */}
      <div className="sticky top-0 z-30 border-b border-black/15 bg-[#f5f3ee]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-2.5 scrollbar-none sm:px-6 lg:px-10">
          {[
            ["council", "CORE COUNCIL"],
            ["wings", "SOCIETY WINGS"],
            ["members", "MEMBERS"],
            ["success", "SUCCESS / IMPACT"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id as SectionKey)}
              className={`shrink-0 border px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] transition-all ${
                activeSection === id
                  ? "border-[#141413] bg-[#141413] text-[#f5f3ee]"
                  : "border-black/10 bg-white/30 text-neutral-500 hover:border-black/30 hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}

          <div className="ml-auto hidden shrink-0 font-mono text-[10px] uppercase tracking-widest text-neutral-400 lg:block">
            CSE SOCIETY · TEAM DIRECTORY
          </div>
        </div>
      </div>

      {/* =====================================================
          MARQUEE
      ====================================================== */}
      <div className="border-b border-black/15 bg-[#141413] py-1 text-[#f5f3ee]">
        <TechMarquee
          items={[
            "PRESIDENT",
            "VICE PRESIDENT",
            "SECRETARY",
            "TREASURER",
            "EDITORIAL",
            "ALUMNI AFFAIRS",
            "R&D",
            "DESIGN & TECHNICAL",
            "SPORTS & CULTURAL",
          ]}
          speed={30}
          variant="dark"
        />
      </div>

      {/* =====================================================
          CORE COUNCIL
      ====================================================== */}
      <section
        id="team-council"
        className="scroll-mt-16 border-b border-black/15 px-4 py-14 sm:px-6 lg:px-10 lg:py-18"
      >
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <TechnicalLabel
                  index="02"
                  title="CORE COUNCIL"
                  category="LEADERSHIP"
                />

                <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] font-medium tracking-[-0.045em]">
                  The people who
                  <span className="font-normal text-neutral-400">
                    {" "}
                    steer it.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm font-mono text-[10px] uppercase leading-5 tracking-widest text-neutral-400 sm:text-right">
                Office bearers &nbsp;·&nbsp; Student leadership
                <br />
                Names and profiles can be updated later.
              </p>
            </div>

            {/* President / Vice President */}
            <div className="mt-10 grid gap-3 lg:grid-cols-12">
              {leadership.slice(0, 2).map((person, index) => (
                <PersonCard
                  key={person.number}
                  person={person}
                  featured={index === 0}
                />
              ))}
            </div>

            {/* Secretaries + Treasurer */}
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.slice(2).map((person) => (
                <PersonCard key={person.number} person={person} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =====================================================
          WINGS
      ====================================================== */}
      <section
        id="team-wings"
        className="scroll-mt-16 border-b border-black/15 bg-[#faf9f6] px-4 py-14 sm:px-6 lg:px-10 lg:py-18"
      >
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <TechnicalLabel
                  index="03"
                  title="SOCIETY WINGS"
                  category="FUNCTIONAL TEAMS"
                />

                <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] font-medium tracking-[-0.045em]">
                  Different strengths.
                  <span className="font-normal text-neutral-400">
                    {" "}
                    One team.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-neutral-500">
                Each wing has a distinct responsibility. Add the actual leads
                and members once the current committee is finalized.
              </p>
            </div>

            <div className="mt-9 border-t border-black/15">
              {wings.map((wing) => {
                const Icon = wing.icon;
                const isOpen = openWing === wing.id;

                return (
                  <div
                    key={wing.id}
                    className="border-b border-black/15"
                  >
                    <button
                      onClick={() =>
                        setOpenWing(isOpen ? null : wing.id)
                      }
                      className="group flex w-full cursor-pointer items-center gap-4 py-5 text-left"
                    >
                      <span className="w-8 shrink-0 font-mono text-[10px] text-neutral-400">
                        {wing.number}
                      </span>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/10 bg-[#f5f3ee] transition-transform duration-300 group-hover:-rotate-6">
                        <Icon size={15} strokeWidth={1.6} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-lg font-semibold tracking-tight sm:text-xl">
                          {wing.title}
                        </span>

                        <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                          {wing.tag}
                        </span>
                      </span>

                      <span className="hidden max-w-sm text-right text-xs leading-5 text-neutral-500 md:block">
                        {wing.description}
                      </span>

                      <ChevronDown
                        size={17}
                        className={`shrink-0 text-neutral-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-black" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] pb-5"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-12 grid gap-4 border-l border-black/10 pl-5 md:grid-cols-3">
                          <div>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                              RESPONSIBILITY
                            </span>
                            <p className="mt-1 text-xs leading-5 text-neutral-600">
                              {wing.description}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                              WING LEAD
                            </span>
                            <p className="mt-1 text-sm font-medium">
                              {wing.lead}
                            </p>
                          </div>

                          <div>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                              MEMBERS
                            </span>
                            <p className="mt-1 text-sm font-medium">
                              {wing.members}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =====================================================
          MEMBERS
      ====================================================== */}
      <section
        id="team-members"
        className="scroll-mt-16 border-b border-black/15 px-4 py-14 sm:px-6 lg:px-10 lg:py-18"
      >
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <TechnicalLabel
                  index="04"
                  title="ACTIVE MEMBERS"
                  category="CONTRIBUTORS"
                />

                <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] font-medium tracking-[-0.045em]">
                  The wider
                  <span className="font-normal text-neutral-400">
                    {" "}
                    community.
                  </span>
                </h2>
              </div>

              <div className="relative w-full md:w-72">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="SEARCH MEMBERS"
                  className="w-full border border-black/15 bg-[#faf9f6] py-3 pl-9 pr-3 font-mono text-[10px] uppercase tracking-widest outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
                />
              </div>
            </div>

            <div className="mt-9 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member, index) => (
                <MemberCard key={`${member.name}-${index}`} member={member} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =====================================================
          SUCCESS / ACHIEVEMENTS
      ====================================================== */}
      <section
        id="team-success"
        className="scroll-mt-16 border-b border-black/15 bg-[#faf9f6] px-4 py-14 sm:px-6 lg:px-10 lg:py-18"
      >
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <TechnicalLabel
                  index="05"
                  title="SUCCESS STORIES"
                  category="PEOPLE · IMPACT"
                />

                <h2 className="mt-3 text-[clamp(2.2rem,4vw,4rem)] font-medium tracking-[-0.045em]">
                  People doing
                  <span className="font-normal text-neutral-400">
                    {" "}
                    meaningful work.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-neutral-500">
                A visual archive for notable achievements, internships,
                competitions, projects, research, placements, and other
                verified milestones.
              </p>
            </div>

            <div className="mt-9 grid gap-3 lg:grid-cols-3">
              {successes.map((success) => (
                <SuccessCard key={success.number} success={success} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =====================================================
          JOIN CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#141413] px-4 py-14 text-[#f5f3ee] sm:px-6 lg:px-10 lg:py-18">
        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-60 w-60 rounded-full border border-white/10" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <TechnicalLabel
              index="06"
              title="BECOME PART OF IT"
              category="CONTRIBUTE"
              dark
            />

            <h2 className="mt-5 max-w-3xl text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.94] tracking-[-0.055em]">
              The next chapter
              <br />
              <span className="text-white/35">could be yours.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-6 text-white/60">
              Join the community, contribute to a wing, work on technical
              projects, and grow alongside other students at BIT Sindri.
            </p>

            <Link
              href="/join"
              className="group mt-6 inline-flex cursor-pointer items-center gap-3 bg-[#f5f3ee] px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#141413] transition-all hover:bg-white"
            >
              JOIN THE SOCIETY
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   PERSON CARD
========================================================= */

function PersonCard({
  person,
  featured = false,
}: {
  person: (typeof leadership)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden border border-black/15 ${
        featured
          ? "min-h-[390px] bg-[#141413] text-[#f5f3ee] lg:col-span-7"
          : "min-h-[390px] bg-[#faf9f6] lg:col-span-5"
      }`}
    >
      {/* image / visual area */}
      <div
        className={`absolute inset-x-0 top-0 h-[57%] overflow-hidden ${
          featured ? "bg-[#1c1c1a]" : "bg-[#e8e5de]"
        }`}
      >
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        ) : (
          <>
            <div
              className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${
                featured
                  ? "bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,#242421,#111110)]"
                  : "bg-[radial-gradient(circle_at_70%_35%,rgba(0,0,0,0.09),transparent_25%),linear-gradient(135deg,#eeece6,#dedbd3)]"
              }`}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <Crown
                size={featured ? 76 : 62}
                strokeWidth={0.65}
                className={
                  featured ? "text-white/15" : "text-black/[0.08]"
                }
              />
            </div>

            <span
              className={`absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.18em] ${
                featured ? "text-white/35" : "text-black/30"
              }`}
            >
              PHOTO / TO BE ADDED
            </span>
          </>
        )}
      </div>

      {/* top metadata */}
      <div className="relative z-10 flex items-center justify-between p-5">
        <span
          className={`font-mono text-[10px] font-bold ${
            featured ? "text-white/35" : "text-neutral-400"
          }`}
        >
          {person.number}
        </span>

        <span
          className={`border px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.13em] ${
            featured
              ? "border-white/15 bg-white/5 text-white/55"
              : "border-black/10 bg-white/50 text-neutral-500"
          }`}
        >
          {person.domain}
        </span>
      </div>

      {/* content */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 p-5 ${
          featured
            ? "bg-gradient-to-t from-[#141413] via-[#141413] to-transparent pt-16"
            : "bg-gradient-to-t from-[#faf9f6] via-[#faf9f6] to-transparent pt-16"
        }`}
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p
              className={`font-mono text-[9px] font-semibold uppercase tracking-[0.18em] ${
                featured ? "text-white/40" : "text-neutral-400"
              }`}
            >
              {person.position}
            </p>

            <h3
              className={`mt-1 text-2xl font-semibold tracking-[-0.035em] ${
                featured ? "text-white" : "text-[#141413]"
              }`}
            >
              {person.name}
            </h3>

            <div
              className={`mt-1 font-mono text-[9px] uppercase tracking-widest ${
                featured ? "text-white/35" : "text-neutral-400"
              }`}
            >
              {person.batch}
            </div>
          </div>

          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45 ${
              featured
                ? "border-white/15 text-white/60"
                : "border-black/10 text-neutral-400"
            }`}
          >
            <ArrowUpRight size={15} />
          </div>
        </div>

        <p
          className={`mt-3 max-w-xl text-xs leading-5 ${
            featured ? "text-white/55" : "text-neutral-500"
          }`}
        >
          {person.description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MEMBER CARD
========================================================= */

function MemberCard({
  member,
}: {
  member: (typeof members)[number];
}) {
  return (
    <div className="group relative min-h-[205px] cursor-pointer bg-[#faf9f6] p-5 transition-all duration-300 hover:bg-[#141413] hover:text-white">
      <div className="flex items-start justify-between">
        <span className="font-mono text-[9px] text-neutral-400 group-hover:text-white/35">
          MEMBER
        </span>

        <ArrowUpRight
          size={15}
          className="text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/60"
        />
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <div className="mb-4 h-12 w-12 overflow-hidden rounded-full border border-black/10 bg-[#e8e5de] transition-transform duration-500 group-hover:scale-105 group-hover:border-white/20">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              width={48}
              height={48}
              className="h-full w-full object-cover grayscale"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-[10px] text-neutral-400">
              IMG
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold tracking-tight">
          {member.name}
        </h3>

        <div className="mt-1 flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-wider text-neutral-400 group-hover:text-white/40">
          <span>{member.batch}</span>
          <span>·</span>
          <span>{member.role}</span>
        </div>

        <p className="mt-2 text-xs text-neutral-500 group-hover:text-white/55">
          {member.domain}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SUCCESS CARD
========================================================= */

function SuccessCard({
  success,
}: {
  success: (typeof successes)[number];
}) {
  return (
    <article className="group overflow-hidden border border-black/15 bg-[#f5f3ee]">
      <div className="relative h-52 overflow-hidden bg-[#dedbd3]">
        {success.image ? (
          <Image
            src={success.image}
            alt={success.title}
            fill
            className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#e9e6df_25%,#d9d6ce_25%,#d9d6ce_50%,#e9e6df_50%,#e9e6df_75%,#d9d6ce_75%)] bg-[length:34px_34px] opacity-40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <Trophy
                size={58}
                strokeWidth={0.7}
                className="text-black/10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-black/30">
              SUCCESS IMAGE / TO BE ADDED
            </span>
          </>
        )}

        <span className="absolute left-4 top-4 border border-black/10 bg-[#f5f3ee]/90 px-2 py-1 font-mono text-[9px] font-bold">
          {success.number}
        </span>
      </div>

      <div className="p-5">
        <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
          {success.meta}
        </div>

        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          {success.title}
        </h3>

        <p className="mt-1 text-xs font-medium text-neutral-500">
          {success.person}
        </p>

        <p className="mt-4 text-xs leading-5 text-neutral-500">
          {success.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-3 font-mono text-[9px] uppercase tracking-widest text-neutral-400">
          <span>CSE SOCIETY</span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
          />
        </div>
      </div>
    </article>
  );
}