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
  Search,
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

   Later, when actual names/images are ready, update ONLY
   these data objects.

   IMAGE EXAMPLE:
   image: "/images/team/president.jpg"

   Keep image: null until the actual image exists.
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

type SectionKey =
  | "council"
  | "wings"
  | "members"
  | "success";

/* =========================================================
   PAGE
========================================================= */

export default function TeamPage() {
  const [activeSection, setActiveSection] =
    useState<SectionKey>("council");

  const [query, setQuery] = useState("");

  const [openWing, setOpenWing] =
    useState<string | null>(null);

  const filteredMembers = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return members;

    return members.filter((member) =>
      `${member.name} ${member.batch} ${member.domain} ${member.role}`
        .toLowerCase()
        .includes(value)
    );
  }, [query]);

  const scrollToSection = (
    section: SectionKey
  ) => {
    setActiveSection(section);

    const target = document.getElementById(
      `team-${section}`
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="team-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="team-hero">
        <div className="team-hero-grid" />

        <div className="team-hero-glow team-glow-one" />
        <div className="team-hero-glow team-glow-two" />

        <div className="team-hero-code" aria-hidden="true">
          <span>TEAM.init()</span>
          <span>people.create()</span>
          <span>ideas.connect()</span>
          <span>community.build()</span>
          <span>impact.ship()</span>
        </div>

        <div className="team-container team-hero-inner">
          <div className="team-hero-top">
            <TechnicalLabel
              index="TEAM / 01"
              title="STUDENT COMMUNITY"
              category="BIT SINDRI"
            />

            <div className="team-system-meta">
              <span>ORGANIZATIONAL SYSTEM</span>
              <strong>CSE / SOCIETY</strong>
            </div>
          </div>

          <div className="team-hero-heading">
            <div className="team-hero-kicker">
              <i />
              PEOPLE / LEADERSHIP / COMMUNITY
            </div>

            <h1>
              People behind
              <br />
              <span>the community.</span>
            </h1>
          </div>

          <div className="team-hero-bottom">
            <p>
              A student-led community is built by people
              who take responsibility, create things,
              organize ideas, and move the society forward.
              Explore the council, functional wings,
              active members, and the achievements they
              create.
            </p>

            <div className="team-hero-stats">
              <div>
                <strong>05</strong>
                <span>CORE ROLES</span>
              </div>

              <div>
                <strong>06</strong>
                <span>SOCIETY WINGS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STICKY NAV
      ===================================================== */}

      <div className="team-nav">
        <div className="team-container team-nav-inner">
          {[
            ["council", "CORE COUNCIL"],
            ["wings", "SOCIETY WINGS"],
            ["members", "MEMBERS"],
            ["success", "SUCCESS / IMPACT"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() =>
                scrollToSection(
                  id as SectionKey
                )
              }
              className={
                activeSection === id
                  ? "active"
                  : ""
              }
            >
              <span>
                {id === "council"
                  ? "01"
                  : id === "wings"
                    ? "02"
                    : id === "members"
                      ? "03"
                      : "04"}
              </span>

              {label}
            </button>
          ))}

          <div className="team-nav-info">
            CSE SOCIETY · TEAM DIRECTORY
          </div>
        </div>
      </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <div className="team-marquee">
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
            "EVENTS & OPERATIONS",
          ]}
          speed={30}
          variant="dark"
        />
      </div>

      {/* =====================================================
          CORE COUNCIL
      ===================================================== */}

      <section
        id="team-council"
        className="team-section team-council-section"
      >
        <div className="team-container">
          <AnimatedSection>
            <div className="section-heading">
              <div>
                <TechnicalLabel
                  index="02"
                  title="CORE COUNCIL"
                  category="LEADERSHIP"
                />

                <h2>
                  The people who
                  <span> steer it.</span>
                </h2>
              </div>

              <p>
                OFFICE BEARERS
                <br />
                STUDENT LEADERSHIP
                <br />
                <em>
                  Names and profiles can be
                  updated later.
                </em>
              </p>
            </div>

            {/* PRESIDENT + VP */}

            <div className="leadership-feature-grid">
              {leadership
                .slice(0, 2)
                .map((person, index) => (
                  <PersonCard
                    key={person.number}
                    person={person}
                    featured={index === 0}
                  />
                ))}
            </div>

            {/* OTHER OFFICE BEARERS */}

            <div className="leadership-small-grid">
              {leadership
                .slice(2)
                .map((person) => (
                  <PersonCard
                    key={person.number}
                    person={person}
                  />
                ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =====================================================
          WINGS
      ===================================================== */}

      <section
        id="team-wings"
        className="team-section team-wings-section"
      >
        <div className="team-container">
          <AnimatedSection>
            <div className="section-heading">
              <div>
                <TechnicalLabel
                  index="03"
                  title="SOCIETY WINGS"
                  category="FUNCTIONAL TEAMS"
                />

                <h2>
                  Different strengths.
                  <span> One team.</span>
                </h2>
              </div>

              <p className="normal-copy">
                Each wing has a distinct
                responsibility. Add the actual
                leads and members once the
                current committee is finalized.
              </p>
            </div>

            <div className="wings-list">
              {wings.map((wing) => {
                const Icon = wing.icon;

                const isOpen =
                  openWing === wing.id;

                return (
                  <div
                    key={wing.id}
                    className={`wing-row ${
                      isOpen ? "open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenWing(
                          isOpen
                            ? null
                            : wing.id
                        )
                      }
                      className="wing-trigger"
                    >
                      <span className="wing-number">
                        {wing.number}
                      </span>

                      <span className="wing-icon">
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                        />
                      </span>

                      <span className="wing-title">
                        <strong>
                          {wing.title}
                        </strong>

                        <small>
                          {wing.tag}
                        </small>
                      </span>

                      <span className="wing-description">
                        {wing.description}
                      </span>

                      <span className="wing-chevron">
                        <ChevronDown
                          size={17}
                          strokeWidth={1.5}
                        />
                      </span>
                    </button>

                    <div
                      className={`wing-details ${
                        isOpen
                          ? "visible"
                          : ""
                      }`}
                    >
                      <div className="wing-details-inner">
                        <div>
                          <span>
                            RESPONSIBILITY
                          </span>

                          <p>
                            {wing.description}
                          </p>
                        </div>

                        <div>
                          <span>
                            WING LEAD
                          </span>

                          <strong>
                            {wing.lead}
                          </strong>
                        </div>

                        <div>
                          <span>
                            MEMBERS
                          </span>

                          <strong>
                            {wing.members}
                          </strong>
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
      ===================================================== */}

      <section
        id="team-members"
        className="team-section team-members-section"
      >
        <div className="team-container">
          <AnimatedSection>
            <div className="section-heading">
              <div>
                <TechnicalLabel
                  index="04"
                  title="ACTIVE MEMBERS"
                  category="CONTRIBUTORS"
                />

                <h2>
                  The wider
                  <span> community.</span>
                </h2>
              </div>

              <div className="member-search">
                <Search
                  size={14}
                  strokeWidth={1.5}
                />

                <input
                  value={query}
                  onChange={(event) =>
                    setQuery(
                      event.target.value
                    )
                  }
                  placeholder="SEARCH MEMBERS"
                  aria-label="Search members"
                />
              </div>
            </div>

            <div className="members-grid">
              {filteredMembers.length > 0 ? (
                filteredMembers.map(
                  (member, index) => (
                    <MemberCard
                      key={`${member.name}-${index}`}
                      member={member}
                      index={index}
                    />
                  )
                )
              ) : (
                <div className="members-empty">
                  <Search
                    size={18}
                    strokeWidth={1.4}
                  />

                  <span>
                    NO MEMBER FOUND
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuery("")
                    }
                  >
                    CLEAR SEARCH
                  </button>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =====================================================
          SUCCESS
      ===================================================== */}

      <section
        id="team-success"
        className="team-section team-success-section"
      >
        <div className="team-container">
          <AnimatedSection>
            <div className="section-heading">
              <div>
                <TechnicalLabel
                  index="05"
                  title="SUCCESS STORIES"
                  category="PEOPLE · IMPACT"
                />

                <h2>
                  People doing
                  <span> meaningful work.</span>
                </h2>
              </div>

              <p className="normal-copy">
                A visual archive for notable
                achievements, internships,
                competitions, projects,
                research, placements, and
                other verified milestones.
              </p>
            </div>

            <div className="success-grid">
              {successes.map((success) => (
                <SuccessCard
                  key={success.number}
                  success={success}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =====================================================
          JOIN CTA
      ===================================================== */}

      <section className="team-join">
        <div className="team-join-grid" />

        <div className="team-join-orbit team-join-orbit-one" />
        <div className="team-join-orbit team-join-orbit-two" />

        <div className="team-container">
          <div className="team-join-content">
            <div>
              <TechnicalLabel
                index="06"
                title="BECOME PART OF IT"
                category="CONTRIBUTE"
                dark
              />

              <h2>
                The next chapter
                <br />
                <span>could be yours.</span>
              </h2>
            </div>

            <div className="team-join-copy">
              <p>
                Join the community, contribute
                to a wing, work on technical
                projects, and grow alongside
                other students at BIT Sindri.
              </p>

              <Link
                href="/join"
                className="team-join-button"
              >
                <span>
                  JOIN THE SOCIETY
                </span>

                <i>
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                  />
                </i>
              </Link>
            </div>
          </div>

          <div className="team-join-footer">
            <span>
              CSE SOCIETY / BIT SINDRI
            </span>

            <span>
              PEOPLE · IDEAS · IMPACT
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx global>{`
        /* =====================================================
           PAGE
        ===================================================== */

        .team-page {
          --team-bg: var(--cse-bg);
          --team-surface: var(--cse-surface);
          --team-surface-2: var(--cse-surface-2);

          --team-text: var(--cse-text);
          --team-strong: var(--cse-text-strong);
          --team-muted: var(--cse-text-muted);
          --team-soft: var(--cse-text-soft);

          --team-border: var(--cse-border);

          --team-accent: #20c997;

          width: 100%;
          min-height: 100vh;

          overflow-x: hidden;

          background: var(--team-bg);
          color: var(--team-text);
        }

        .team-page *,
        .team-page *::before,
        .team-page *::after {
          box-sizing: border-box;
        }

        .team-page button,
        .team-page a {
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .team-container {
          position: relative;

          width: min(
            1380px,
            calc(100% - 64px)
          );

          margin-inline: auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .team-hero {
          position: relative;

          min-height: min(
            760px,
            88vh
          );

          overflow: hidden;

          background:
            radial-gradient(
              circle at 78% 35%,
              rgba(32, 201, 151, 0.08),
              transparent 28%
            ),
            #090b0c;

          color: #f5f5f1;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.09);
        }

        .team-hero-grid {
          position: absolute;
          inset: -50px;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );

          background-size: 58px 58px;

          opacity: 0.65;

          animation: teamGridMove 20s
            linear infinite;
        }

        @keyframes teamGridMove {
          to {
            transform: translate3d(
              58px,
              58px,
              0
            );
          }
        }

        .team-hero-glow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(15px);
        }

        .team-glow-one {
          width: 460px;
          height: 460px;

          right: -150px;
          top: -170px;

          background: radial-gradient(
            circle,
            rgba(32, 201, 151, 0.12),
            transparent 70%
          );

          animation: teamGlow 8s
            ease-in-out infinite;
        }

        .team-glow-two {
          width: 360px;
          height: 360px;

          left: -220px;
          bottom: -230px;

          background: radial-gradient(
            circle,
            rgba(77, 171, 247, 0.06),
            transparent 70%
          );

          animation: teamGlow 10s
            ease-in-out infinite reverse;
        }

        @keyframes teamGlow {
          0%,
          100% {
            transform: scale(0.92);
          }

          50% {
            transform: scale(1.08);
          }
        }

        .team-hero-code {
          position: absolute;

          right: 5%;
          top: 20%;

          display: flex;
          flex-direction: column;

          gap: 14px;

          opacity: 0.07;

          transform: rotate(-8deg);

          font-family: var(--font-mono),
            monospace;

          font-size: 9px;
          letter-spacing: 0.1em;

          pointer-events: none;

          animation: codeFloat 15s
            linear infinite;
        }

        .team-hero-code span {
          white-space: nowrap;
        }

        .team-hero-code span:nth-child(odd) {
          color: #20c997;
        }

        @keyframes codeFloat {
          from {
            transform:
              rotate(-8deg)
              translateY(-30px);
          }

          to {
            transform:
              rotate(-8deg)
              translateY(100px);
          }
        }

        .team-hero-inner {
          min-height: min(
            760px,
            88vh
          );

          display: flex;
          flex-direction: column;

          padding-top: 30px;
          padding-bottom: 45px;
        }

        .team-hero-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          padding-bottom: 18px;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.09);
        }

        .team-system-meta {
          display: flex;
          flex-direction: column;

          gap: 5px;

          text-align: right;

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          line-height: 1.5;

          letter-spacing: 0.18em;
          text-transform: uppercase;

          color: rgba(
            255,
            255,
            255,
            0.25
          );
        }

        .team-system-meta strong {
          color: rgba(
            255,
            255,
            255,
            0.55
          );

          font-weight: 400;
        }

        .team-hero-heading {
          flex: 1;

          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 75px 0 65px;
        }

        .team-hero-kicker {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-bottom: 19px;

          font-family: var(--font-mono),
            monospace;

          font-size: 7px;
          letter-spacing: 0.18em;

          color: rgba(
            255,
            255,
            255,
            0.3
          );
        }

        .team-hero-kicker i {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #20c997;

          box-shadow:
            0 0 12px
              rgba(
                32,
                201,
                151,
                0.7
              );
        }

        .team-hero-heading h1 {
          margin: 0;

          max-width: 1100px;

          font-size: clamp(
            4.3rem,
            8.5vw,
            8.8rem
          );

          line-height: 0.81;

          letter-spacing: -0.085em;

          font-weight: 500;
        }

        .team-hero-heading h1 span {
          color: rgba(
            255,
            255,
            255,
            0.25
          );
        }

        .team-hero-bottom {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            auto;

          align-items: end;

          gap: 40px;

          padding-top: 18px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.09);
        }

        .team-hero-bottom p {
          max-width: 680px;

          margin: 0;

          font-size: 12px;
          line-height: 1.75;

          color: rgba(
            255,
            255,
            255,
            0.42
          );
        }

        .team-hero-stats {
          display: flex;
          gap: 45px;
        }

        .team-hero-stats div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .team-hero-stats strong {
          font-family: var(--font-mono),
            monospace;

          font-size: 28px;
          line-height: 1;

          font-weight: 400;

          letter-spacing: -0.08em;

          color: rgba(
            255,
            255,
            255,
            0.8
          );
        }

        .team-hero-stats span {
          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.16em;

          color: rgba(
            255,
            255,
            255,
            0.25
          );
        }

        /* =====================================================
           NAV
        ===================================================== */

        .team-nav {
          position: sticky;
          top: 0;
          z-index: 50;

          border-bottom: 1px solid
            var(--team-border);

          background: color-mix(
            in srgb,
            var(--team-bg) 92%,
            transparent
          );

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .team-nav-inner {
          display: flex;
          align-items: center;

          gap: 5px;

          overflow-x: auto;

          scrollbar-width: none;

          padding: 7px 0;
        }

        .team-nav-inner::-webkit-scrollbar {
          display: none;
        }

        .team-nav button {
          flex-shrink: 0;

          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 9px 11px;

          border: 1px solid
            color-mix(
              in srgb,
              var(--team-text) 10%,
              transparent
            );

          background: color-mix(
            in srgb,
            var(--team-surface) 55%,
            transparent
          );

          color: var(--team-soft);

          font-family: var(--font-mono),
            monospace;

          font-size: 7px;
          font-weight: 500;

          letter-spacing: 0.12em;

          transition:
            color 250ms ease,
            background 250ms ease,
            border-color 250ms ease,
            transform 250ms ease;
        }

        .team-nav button span {
          opacity: 0.45;
        }

        .team-nav button:hover {
          color: var(--team-text);

          border-color: color-mix(
            in srgb,
            var(--team-text) 25%,
            transparent
          );

          transform: translateY(-1px);
        }

        .team-nav button.active {
          color: var(--cse-bg);

          background: var(--team-text);

          border-color: var(--team-text);
        }

        .team-nav button.active span {
          opacity: 0.55;
        }

        .team-nav-info {
          margin-left: auto;

          flex-shrink: 0;

          padding-left: 20px;

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.17em;

          color: var(--team-soft);
        }

        /* =====================================================
           MARQUEE
        ===================================================== */

        .team-marquee {
          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);

          background: #0c0e0f;

          color: #f5f5f1;
        }

        /* =====================================================
           COMMON SECTION
        ===================================================== */

        .team-section {
          position: relative;

          /*
           * The section nav is sticky. Without scroll-margin-top,
           * scrollIntoView() can place the heading underneath the nav.
           */
          scroll-margin-top: 76px;

          border-bottom: 1px solid
            var(--team-border);
        }

        .team-council-section {
          padding: 90px 0 105px;
        }

  .team-wings-section,
.team-members-section,
.team-success-section {
  padding: 78px 0 88px;
}

        .team-wings-section,
        .team-success-section {
          background: color-mix(
            in srgb,
            var(--team-surface) 45%,
            var(--team-bg)
          );
        }

        .section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 40px;

          padding-bottom: 25px;

          border-bottom: 1px solid
            var(--team-border);
        }

        .section-heading h2 {
          margin: 16px 0 0;

          /*
           * Keep the editorial scale, but prevent the title from
           * becoming so tall that the first line feels clipped or
           * collides with the sticky navigation on smaller screens.
           */
          font-size: clamp(
            2.25rem,
            3.65vw,
            4rem
          );

          line-height: 0.92;

          letter-spacing: -0.062em;

          font-weight: 500;

          color: var(--team-strong);
        }

        .section-heading h2 span {
          color: var(--team-soft);

          font-weight: 400;
        }

        .section-heading > p {
          max-width: 270px;

          margin: 0;

          font-family: var(--font-mono),
            monospace;

          font-size: 7px;
          line-height: 1.8;

          letter-spacing: 0.15em;

          color: var(--team-soft);

          text-align: right;
        }

        .section-heading > p em {
          display: block;

          margin-top: 7px;

          font-style: normal;

          color: var(--team-muted);
        }

        .normal-copy {
          font-family: inherit !important;

          font-size: 11px !important;
          line-height: 1.7 !important;

          letter-spacing: normal !important;

          text-transform: none;

          color: var(--team-muted) !important;
        }

        /* =====================================================
           LEADERSHIP GRID
        ===================================================== */

        .leadership-feature-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(0, 0.9fr);

          gap: 8px;

          margin-top: 28px;
        }

        .leadership-small-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 8px;

          margin-top: 8px;
        }

        /* =====================================================
           PERSON CARD
        ===================================================== */

        .person-card {
          --person-accent: #20c997;

          position: relative;

          min-height: 445px;

          overflow: hidden;

          border: 1px solid
            color-mix(
              in srgb,
              var(--team-text) 12%,
              transparent
            );

          background: var(--team-surface);

          color: var(--team-text);

          isolation: isolate;

          transition:
            transform 500ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            border-color 350ms ease,
            box-shadow 500ms ease;
        }

        .person-card.featured {
          min-height: 510px;

          background: #111313;

          color: #f5f5f1;

          border-color:
            rgba(255, 255, 255, 0.12);
        }

        .person-card:hover {
          transform: translateY(-6px);

          border-color: color-mix(
            in srgb,
            var(--person-accent) 42%,
            transparent
          );

          box-shadow:
            0 35px 90px
              rgba(0, 0, 0, 0.18);
        }

        .person-image {
          position: absolute;

          inset: 0 0 auto 0;

          height: 63%;

          overflow: hidden;

          background: var(--team-surface-2);
        }

        .person-card.featured
          .person-image {
          background: #181b1b;
        }

        .person-image::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0.9)
            );

          pointer-events: none;
        }

        .person-image img {
          transition:
            transform 900ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            filter 700ms ease;
        }

        .person-card:hover
          .person-image img {
          transform: scale(1.045);
        }

        .person-placeholder {
          position: absolute;
          inset: 0;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 68% 28%,
              rgba(
                32,
                201,
                151,
                0.11
              ),
              transparent 20%
            ),
            linear-gradient(
              135deg,
              #171a19,
              #0e1010
            );
        }

        .person-card:not(.featured)
          .person-placeholder {
          background:
            radial-gradient(
              circle at 70% 28%,
              color-mix(
                in srgb,
                var(--person-accent) 10%,
                transparent
              ),
              transparent 20%
            ),
            linear-gradient(
              135deg,
              var(--team-surface-2),
              var(--team-surface)
            );
        }

        .person-placeholder-grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            );

          background-size: 35px 35px;

          opacity: 0.6;

          animation: placeholderGrid 15s
            linear infinite;
        }

        @keyframes placeholderGrid {
          to {
            transform: translate3d(
              35px,
              35px,
              0
            );
          }
        }

        .person-placeholder-glow {
          position: absolute;

          width: 220px;
          height: 220px;

          left: 50%;
          top: 45%;

          transform: translate(
            -50%,
            -50%
          );

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(
              32,
              201,
              151,
              0.08
            ),
            transparent 70%
          );

          animation: placeholderGlow 5s
            ease-in-out infinite;
        }

        @keyframes placeholderGlow {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(0.9);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.1);
          }
        }

        .person-placeholder-icon {
          position: absolute;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);

          width: 78px;
          height: 78px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(32, 201, 151, 0.28);

          border-radius: 50%;

          color: rgba(
            32,
            201,
            151,
            0.65
          );

          background: rgba(
            32,
            201,
            151,
            0.04
          );

          box-shadow:
            0 0 45px
              rgba(32, 201, 151, 0.1);

          animation:
            placeholderIcon 4s
            ease-in-out infinite;
        }

        @keyframes placeholderIcon {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.06);
          }
        }

        .person-placeholder-icon::before,
        .person-placeholder-icon::after {
          content: "";

          position: absolute;

          border: 1px solid
            rgba(32, 201, 151, 0.16);

          border-radius: 50%;
        }

        .person-placeholder-icon::before {
          width: 108px;
          height: 108px;
        }

        .person-placeholder-icon::after {
          width: 145px;
          height: 145px;

          border-style: dashed;

          animation: placeholderRing 12s
            linear infinite;
        }

        @keyframes placeholderRing {
          to {
            transform: rotate(360deg);
          }
        }

        .person-placeholder-label {
          position: absolute;

          left: 18px;
          bottom: 18px;

          z-index: 2;

          display: flex;
          align-items: center;
          gap: 7px;

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.16em;

          color: rgba(
            255,
            255,
            255,
            0.28
          );
        }

        .person-placeholder-label i {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #20c997;

          box-shadow:
            0 0 8px
              rgba(
                32,
                201,
                151,
                0.7
              );
        }

        .person-image-scan {
          position: absolute;

          z-index: 4;

          left: -10%;
          right: -10%;
          top: 0;

          height: 1px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(
              32,
              201,
              151,
              0.6
            ),
            transparent
          );

          animation: imageScan 5s
            ease-in-out infinite;
        }

        @keyframes imageScan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          15% {
            opacity: 0.7;
          }

          75% {
            opacity: 0.25;
          }

          100% {
            transform: translateY(330px);
            opacity: 0;
          }
        }

        .person-top {
          position: absolute;

          z-index: 8;

          left: 18px;
          right: 18px;
          top: 18px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .person-number {
          font-family: var(--font-mono),
            monospace;

          font-size: 7px;

          color: var(--team-soft);
        }

        .person-card.featured
          .person-number {
          color: rgba(
            255,
            255,
            255,
            0.3
          );
        }

        .person-domain {
          padding: 6px 8px;

          border: 1px solid
            color-mix(
              in srgb,
              var(--team-text) 12%,
              transparent
            );

          background: color-mix(
            in srgb,
            var(--team-surface) 75%,
            transparent
          );

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.12em;

          color: var(--team-muted);
        }

        .person-card.featured
          .person-domain {
          border-color:
            rgba(255, 255, 255, 0.13);

          background:
            rgba(255, 255, 255, 0.05);

          color: rgba(
            255,
            255,
            255,
            0.5
          );
        }

        .person-content {
          position: absolute;

          z-index: 10;

          left: 0;
          right: 0;
          bottom: 0;

          padding: 70px 20px 20px;

          background:
            linear-gradient(
              180deg,
              transparent,
              var(--team-surface) 34%
            );
        }

        .person-card.featured
          .person-content {
          background:
            linear-gradient(
              180deg,
              transparent,
              #111313 34%
            );
        }

        .person-position {
          margin: 0;

          font-family: var(--font-mono),
            monospace;

          font-size: 7px;
          letter-spacing: 0.18em;

          color: var(--team-soft);
        }

        .person-card.featured
          .person-position {
          color: rgba(
            255,
            255,
            255,
            0.38
          );
        }

        .person-name-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 15px;

          margin-top: 4px;
        }

        .person-name {
          margin: 0;

          font-size: clamp(
            1.55rem,
            2.3vw,
            2.3rem
          );

          line-height: 0.95;

          letter-spacing: -0.045em;

          font-weight: 600;

          color: var(--team-strong);
        }

        .person-card.featured
          .person-name {
          color: white;
        }

        .person-arrow {
          width: 35px;
          height: 35px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            color-mix(
              in srgb,
              var(--team-text) 14%,
              transparent
            );

          border-radius: 50%;

          color: var(--team-soft);

          transition:
            transform 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            color 300ms ease,
            border-color 300ms ease,
            background 300ms ease;
        }

        .person-card.featured
          .person-arrow {
          border-color:
            rgba(255, 255, 255, 0.13);

          color: rgba(
            255,
            255,
            255,
            0.55
          );
        }

        .person-card:hover
          .person-arrow {
          transform:
            translate(3px, -3px)
            rotate(5deg);

          color: #07100d;

          background: #20c997;

          border-color: #20c997;
        }

        .person-batch {
          margin-top: 5px;

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.16em;

          color: var(--team-soft);
        }

        .person-card.featured
          .person-batch {
          color: rgba(
            255,
            255,
            255,
            0.3
          );
        }

        .person-description {
          max-width: 650px;

          margin: 12px 0 0;

          font-size: 10px;
          line-height: 1.65;

          color: var(--team-muted);
        }

        .person-card.featured
          .person-description {
          color: rgba(
            255,
            255,
            255,
            0.45
          );
        }

        /* =====================================================
           WINGS
        ===================================================== */

        .wings-list {
          margin-top: 30px;

          border-top: 1px solid
            var(--team-border);
        }

        .wing-row {
          border-bottom: 1px solid
            var(--team-border);
        }

        .wing-trigger {
          width: 100%;

          cursor: pointer;

          display: grid;

          grid-template-columns:
            45px
            42px
            minmax(200px, 1fr)
            minmax(250px, 0.9fr)
            35px;

          align-items: center;

          gap: 14px;

          padding: 18px 3px;

          border: 0;

          background: transparent;

          color: var(--team-text);

          text-align: left;

          transition:
            padding 350ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            background 250ms ease;
        }

        .wing-trigger:hover {
          padding-left: 10px;

          background: color-mix(
            in srgb,
            var(--team-text) 3%,
            transparent
          );
        }

        .wing-number {
          font-family: var(--font-mono),
            monospace;

          font-size: 7px;

          color: var(--team-soft);
        }

        .wing-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            var(--team-border);

          background: var(--team-surface);

          color: var(--team-muted);

          transition:
            transform 350ms ease,
            color 300ms ease,
            border-color 300ms ease;
        }

        .wing-trigger:hover
          .wing-icon {
          transform:
            rotate(-7deg);

          color: var(--team-accent);

          border-color:
            rgba(32, 201, 151, 0.35);
        }

        .wing-title {
          min-width: 0;

          display: flex;
          flex-direction: column;

          gap: 5px;
        }

        .wing-title strong {
          font-size: 18px;
          line-height: 1;

          letter-spacing: -0.035em;

          font-weight: 600;
        }

        .wing-title small {
          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.15em;

          color: var(--team-soft);
        }

        .wing-description {
          max-width: 420px;

          justify-self: end;

          font-size: 10px;
          line-height: 1.55;

          color: var(--team-muted);

          text-align: right;
        }

        .wing-chevron {
          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            var(--team-border);

          border-radius: 50%;

          color: var(--team-soft);

          transition:
            transform 350ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            background 250ms ease,
            color 250ms ease;
        }

        .wing-row.open
          .wing-chevron {
          transform: rotate(180deg);

          color: var(--cse-bg);

          background: var(--team-text);
        }

        .wing-row.open .wing-trigger {
          background:
            linear-gradient(
              90deg,
              color-mix(
                in srgb,
                var(--team-accent) 3%,
                transparent
              ),
              transparent 48%
            );
        }

        .wing-row.open .wing-icon {
          color: var(--team-accent);
          border-color: rgba(32, 201, 151, 0.35);
        }

        .wing-details {
          display: grid;

          grid-template-rows: 0fr;

          transition:
            grid-template-rows 450ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        .wing-details.visible {
          grid-template-rows: 1fr;
        }

        .wing-details-inner {
          overflow: hidden;

          min-height: 0;

          display: grid;

          grid-template-columns:
            1.4fr
            0.8fr
            0.8fr;

          gap: 25px;

          margin-left: 101px;

          padding: 0 0 0 20px;

          border-left: 1px solid
            var(--team-border);

          opacity: 0;

          transform: translateY(-8px);

          transition:
            opacity 350ms ease,
            transform 450ms ease,
            padding 450ms ease;
        }

        .wing-details.visible
          .wing-details-inner {
          padding-bottom: 22px;

          opacity: 1;

          transform: translateY(0);
        }

        .wing-details-inner > div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .wing-details-inner span {
          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.16em;

          color: var(--team-soft);
        }

        .wing-details-inner p,
        .wing-details-inner strong {
          margin: 0;

          font-size: 10px;
          line-height: 1.55;

          color: var(--team-muted);
        }

        .wing-details-inner strong {
          color: var(--team-text);
          font-weight: 500;
        }

        /* =====================================================
           MEMBER SEARCH
        ===================================================== */

        .member-search {
          position: relative;

          width: min(
            100%,
            280px
          );
        }

        .member-search svg {
          position: absolute;

          left: 12px;
          top: 50%;

          transform: translateY(-50%);

          color: var(--team-soft);
        }

        .member-search input {
          width: 100%;

          cursor: text;

          height: 38px;

          padding: 0 12px 0 34px;

          border: 1px solid
            var(--team-border);

          outline: none;

          background: var(--team-surface);

          color: var(--team-text);

          font-family: var(--font-mono),
            monospace;

          font-size: 7px;
          letter-spacing: 0.12em;

          transition:
            border-color 250ms ease,
            box-shadow 250ms ease;
        }

        .member-search input::placeholder {
          color: var(--team-soft);
        }

        .member-search input:focus {
          border-color:
            rgba(32, 201, 151, 0.5);

          box-shadow:
            0 0 0 3px
              rgba(32, 201, 151, 0.06);
        }

        /* =====================================================
           MEMBERS
        ===================================================== */

        .members-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 1px;

          margin-top: 30px;

          border: 1px solid
            var(--team-border);

          background: var(--team-border);
        }

        .member-card {
          position: relative;

          min-height: 235px;

          padding: 18px;

          overflow: hidden;

          background: var(--team-surface);

          color: var(--team-text);

          transition:
            background 400ms ease,
            color 400ms ease;
        }

        .member-card:hover {
          background: #101313;
          color: #f5f5f1;
        }

        .member-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .member-label {
          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.16em;

          color: var(--team-soft);
        }

        .member-arrow {
          color: var(--team-soft);

          transition:
            transform 350ms ease,
            color 250ms ease;
        }

        .member-card:hover
          .member-arrow {
          transform:
            translate(3px, -3px);

          color: #20c997;
        }

        .member-avatar {
          position: absolute;

          left: 18px;
          bottom: 18px;

          width: 50px;
          height: 50px;

          overflow: hidden;

          border: 1px solid
            var(--team-border);

          border-radius: 50%;

          background: var(--team-surface-2);
        }

        .member-avatar img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          filter: grayscale(1);

          transition:
            transform 500ms ease,
            filter 500ms ease;
        }

        .member-card:hover
          .member-avatar img {
          transform: scale(1.08);
          filter: grayscale(0);
        }

        .member-avatar-placeholder {
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;

          color: var(--team-soft);
        }

        .member-info {
          position: absolute;

          left: 18px;
          right: 18px;
          bottom: 18px;

          padding-left: 66px;
        }

        .member-info h3 {
          margin: 0;

          font-size: 18px;
          line-height: 1;

          letter-spacing: -0.04em;

          font-weight: 600;
        }

        .member-meta {
          display: flex;
          flex-wrap: wrap;

          gap: 7px;

          margin-top: 7px;

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.12em;

          color: var(--team-soft);
        }

        .member-domain {
          margin-top: 9px;

          font-size: 9px;

          color: var(--team-muted);
        }

        .member-card:hover
          .member-domain {
          color: rgba(
            255,
            255,
            255,
            0.48
          );
        }

        .members-empty {
          grid-column: 1 / -1;

          min-height: 240px;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 12px;

          background: var(--team-surface);

          color: var(--team-soft);

          font-family: var(--font-mono),
            monospace;

          font-size: 7px;
          letter-spacing: 0.15em;
        }

        .members-empty svg {
          color: var(--team-accent);
        }

        .members-empty button {
          padding: 8px 11px;

          border: 1px solid
            var(--team-border);

          background: transparent;

          color: var(--team-muted);

          font-family: inherit;

          font-size: 6px;
          letter-spacing: 0.12em;

          transition:
            border-color 250ms ease,
            color 250ms ease;
        }

        .members-empty button:hover {
          border-color:
            rgba(32, 201, 151, 0.4);

          color: var(--team-accent);
        }

        /* =====================================================
           SUCCESS
        ===================================================== */

        .success-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 8px;

          margin-top: 30px;
        }

        .success-card {
          overflow: hidden;

          border: 1px solid
            var(--team-border);

          background: var(--team-bg);

          transition:
            transform 500ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            border-color 300ms ease,
            box-shadow 500ms ease;
        }

        .success-card:hover {
          transform: translateY(-5px);

          border-color:
            rgba(32, 201, 151, 0.3);

          box-shadow:
            0 25px 65px
              rgba(0, 0, 0, 0.12);
        }

        .success-image {
          position: relative;

          height: 245px;

          overflow: hidden;

          background: var(--team-surface-2);
        }

        .success-image img {
          transition:
            transform 800ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            filter 600ms ease;
        }

        .success-card:hover
          .success-image img {
          transform: scale(1.05);
          filter: grayscale(0);
        }

        .success-placeholder {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              135deg,
              color-mix(
                in srgb,
                var(--team-text) 5%,
                transparent
              )
              25%,
              transparent 25%
            ),
            linear-gradient(
              45deg,
              transparent 74%,
              color-mix(
                in srgb,
                var(--team-text) 4%,
                transparent
              )
              74%
            );

          background-size: 36px 36px;

          animation: successPattern 18s
            linear infinite;
        }

        @keyframes successPattern {
          to {
            background-position:
              36px 36px;
          }
        }

        .success-placeholder-icon {
          position: absolute;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);

          color: var(--team-soft);

          opacity: 0.45;
        }

        .success-placeholder-label {
          position: absolute;

          left: 15px;
          bottom: 15px;

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.15em;

          color: var(--team-soft);
        }

        .success-number {
          position: absolute;

          left: 15px;
          top: 15px;

          z-index: 4;

          padding: 6px 8px;

          border: 1px solid
            var(--team-border);

          background: color-mix(
            in srgb,
            var(--team-bg) 85%,
            transparent
          );

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;

          color: var(--team-muted);
        }

        .success-content {
          padding: 18px;
        }

        .success-meta {
          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.15em;

          color: var(--team-soft);
        }

        .success-content h3 {
          margin: 9px 0 0;

          font-size: 21px;
          line-height: 1;

          letter-spacing: -0.045em;

          font-weight: 600;
        }

        .success-person {
          margin-top: 6px;

          font-size: 9px;

          color: var(--team-muted);
        }

        .success-description {
          margin: 17px 0 0;

          font-size: 9px;
          line-height: 1.65;

          color: var(--team-muted);
        }

        .success-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 18px;

          padding-top: 11px;

          border-top: 1px solid
            var(--team-border);

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.13em;

          color: var(--team-soft);
        }

        .success-footer svg {
          transition:
            transform 300ms ease,
            color 250ms ease;
        }

        .success-card:hover
          .success-footer svg {
          transform:
            translate(3px, -3px);

          color: var(--team-accent);
        }

        /* =====================================================
           JOIN
        ===================================================== */

        .team-join {
          position: relative;

          min-height: 500px;

          overflow: hidden;

          background: #090b0c;

          color: #f5f5f1;
        }

        .team-join-grid {
          position: absolute;
          inset: -50px;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );

          background-size: 58px 58px;

          opacity: 0.55;

          animation: teamGridMove 20s
            linear infinite;
        }

        .team-join-orbit {
          position: absolute;

          border: 1px solid
            rgba(32, 201, 151, 0.14);

          border-radius: 50%;

          animation: ringRotate 24s
            linear infinite;
        }

        .team-join-orbit-one {
          width: 620px;
          height: 620px;

          right: -280px;
          top: -260px;
        }

        .team-join-orbit-two {
          width: 460px;
          height: 460px;

          right: -200px;
          top: -180px;

          border-style: dashed;

          animation-direction: reverse;

          animation-duration: 17s;
        }

        @keyframes ringRotate {
          to {
            transform: rotate(360deg);
          }
        }

        .team-join
          .team-container {
          padding-top: 75px;
          padding-bottom: 28px;
        }

        .team-join-content {
          position: relative;
          z-index: 2;

          display: grid;

          grid-template-columns:
            minmax(0, 1.3fr)
            minmax(280px, 0.7fr);

          align-items: end;

          gap: 70px;

          padding: 75px 0 70px;
        }

        .team-join-content h2 {
          margin: 20px 0 0;

          font-size: clamp(
            4rem,
            7vw,
            7.4rem
          );

          line-height: 0.76;

          letter-spacing: -0.08em;

          font-weight: 500;
        }

        .team-join-content h2 span {
          color: rgba(
            255,
            255,
            255,
            0.2
          );
        }

        .team-join-copy p {
          max-width: 360px;

          margin: 0 0 25px;

          font-size: 11px;
          line-height: 1.7;

          color: rgba(
            255,
            255,
            255,
            0.4
          );
        }

        .team-join-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;

          min-width: 210px;

          gap: 28px;

          padding: 11px 12px 11px 16px;

          background: #f5f5f1;

          color: #090b0c;

          text-decoration: none;

          font-family: var(--font-mono),
            monospace;

          font-size: 7px;
          font-weight: 700;

          letter-spacing: 0.14em;

          transition:
            transform 350ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            box-shadow 350ms ease;
        }

        .team-join-button:hover {
          transform: translateY(-3px);

          box-shadow:
            0 22px 50px
              rgba(0, 0, 0, 0.3);
        }

        .team-join-button i {
          width: 27px;
          height: 27px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #090b0c;

          color: #f5f5f1;

          transition:
            transform 350ms ease;
        }

        .team-join-button:hover i {
          transform:
            translate(3px, -3px)
            rotate(-6deg);
        }

        .team-join-footer {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-top: 13px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.1);

          font-family: var(--font-mono),
            monospace;

          font-size: 6px;
          letter-spacing: 0.17em;

          color: rgba(
            255,
            255,
            255,
            0.22
          );
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {
          .team-container {
            width: min(
              100% - 44px,
              900px
            );
          }

          .team-hero-heading h1 {
            font-size: clamp(
              4.2rem,
              10vw,
              7rem
            );
          }

          .leadership-feature-grid {
            grid-template-columns:
              1fr 1fr;
          }

          .leadership-small-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .wing-trigger {
            grid-template-columns:
              40px
              42px
              minmax(180px, 1fr)
              35px;
          }

          .wing-description {
            display: none;
          }

          .members-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .success-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .team-join-content {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .team-container {
            width: calc(100% - 32px);
          }

          .team-hero {
            min-height: auto;
          }

          .team-hero-inner {
            min-height: auto;

            padding-top: 22px;
            padding-bottom: 28px;
          }

          .team-system-meta {
            display: none;
          }

          .team-hero-heading {
            padding: 65px 0 55px;
          }

          .team-hero-heading h1 {
            font-size: clamp(
              3.6rem,
              17vw,
              5.8rem
            );

            line-height: 0.82;
          }

          .team-hero-bottom {
            grid-template-columns: 1fr;

            gap: 28px;
          }

          .team-hero-bottom p {
            font-size: 11px;
          }

          .team-hero-stats {
            gap: 35px;
          }

          .team-hero-stats strong {
            font-size: 24px;
          }

          .team-nav-info {
            display: none;
          }

          .team-nav-inner {
            width: 100%;

            padding-inline: 16px;
          }

          .team-nav button {
            font-size: 6px;

            padding: 8px 9px;
          }

          .team-council-section,
          .team-wings-section,
          .team-members-section,
          .team-success-section {
            padding: 60px 0 65px;
            scroll-margin-top: 58px;
          }

          .section-heading {
            flex-direction: column;
            align-items: flex-start;

            gap: 22px;
          }

.section-heading h2 {
  font-size: clamp(
    2.35rem,
    10vw,
    3.6rem
  );
}

          .section-heading > p {
            max-width: 100%;

            text-align: left;
          }

          .leadership-feature-grid,
          .leadership-small-grid {
            grid-template-columns: 1fr;

            gap: 7px;
          }

          .person-card,
          .person-card.featured {
            min-height: 410px;
          }

          .person-image {
            height: 62%;
          }

          .person-content {
            padding: 62px 16px 16px;
          }

          .person-top {
            left: 14px;
            right: 14px;
            top: 14px;
          }

          .person-name {
            font-size: 24px;
          }

          .person-description {
            font-size: 9px;
          }

          .wing-trigger {
            grid-template-columns:
              28px
              38px
              minmax(0, 1fr)
              31px;

            gap: 9px;

            padding: 15px 0;
          }

          .wing-number {
            font-size: 6px;
          }

          .wing-icon {
            width: 34px;
            height: 34px;
          }

          .wing-title strong {
            font-size: 15px;
          }

          .wing-title small {
            font-size: 5px;
          }

          .wing-details-inner {
            grid-template-columns: 1fr;

            gap: 17px;

            margin-left: 75px;
          }

          .member-search {
            width: 100%;
          }

          .members-grid {
            grid-template-columns: 1fr;
          }

          .member-card {
            min-height: 205px;
          }

          .success-grid {
            grid-template-columns: 1fr;
          }

          .success-image {
            height: 220px;
          }

          .team-join {
            min-height: 480px;
          }

          .team-join
            .team-container {
            padding-top: 55px;
          }

          .team-join-content {
            padding: 55px 0 50px;
          }

          .team-join-content h2 {
            font-size: clamp(
              3.6rem,
              17vw,
              5.8rem
            );
          }

          .team-join-copy p {
            font-size: 10px;
          }

          .team-join-footer {
            align-items: flex-start;

            flex-direction: column;

            gap: 9px;
          }

          .team-join-footer span:last-child {
            display: none;
          }

          .team-join-orbit-one {
            width: 480px;
            height: 480px;

            right: -270px;
            top: -190px;
          }

          .team-join-orbit-two {
            width: 360px;
            height: 360px;

            right: -210px;
            top: -130px;
          }
        }

        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 390px) {
          .team-container {
            width: calc(100% - 24px);
          }

          .team-hero-heading h1 {
            font-size: 3.35rem;
          }

          .person-card,
          .person-card.featured {
            min-height: 390px;
          }

          .person-name {
            font-size: 21px;
          }

          .wing-trigger {
            grid-template-columns:
              23px
              34px
              minmax(0, 1fr)
              28px;
          }

          .wing-title strong {
            font-size: 14px;
          }

          .member-card {
            min-height: 195px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .team-page *,
          .team-page *::before,
          .team-page *::after {
            animation: none !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
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
    <article
      className={`person-card ${
        featured ? "featured" : ""
      }`}
    >
      {/* IMAGE AREA */}

      <div className="person-image">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="
              (max-width: 700px) 100vw,
              (max-width: 1050px) 50vw,
              60vw
            "
            className="object-cover grayscale"
          />
        ) : (
          <div className="person-placeholder">
            <div className="person-placeholder-grid" />

            <div className="person-placeholder-glow" />

            <div className="person-placeholder-icon">
              <Crown
                size={29}
                strokeWidth={0.85}
              />
            </div>

            <span className="person-placeholder-label">
              <i />
              PROFILE / IMAGE PENDING
            </span>
          </div>
        )}

        <div className="person-image-scan" />
      </div>

      {/* TOP INFO */}

      <div className="person-top">
        <span className="person-number">
          {person.number}
        </span>

        <span className="person-domain">
          {person.domain}
        </span>
      </div>

      {/* CONTENT */}

      <div className="person-content">
        <p className="person-position">
          {person.position}
        </p>

        <div className="person-name-row">
          <div>
            <h3 className="person-name">
              {person.name}
            </h3>

            <div className="person-batch">
              {person.batch}
            </div>
          </div>

          <span className="person-arrow">
            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
            />
          </span>
        </div>

        <p className="person-description">
          {person.description}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   MEMBER CARD
========================================================= */

function MemberCard({
  member,
  index,
}: {
  member: (typeof members)[number];
  index: number;
}) {
  return (
    <article className="member-card">
      <div className="member-card-top">
        <span className="member-label">
          MEMBER /{" "}
          {String(index + 1).padStart(2, "0")}
        </span>

        <ArrowUpRight
          size={15}
          strokeWidth={1.4}
          className="member-arrow"
        />
      </div>

      <div className="member-avatar">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            width={50}
            height={50}
          />
        ) : (
          <div className="member-avatar-placeholder">
            IMG
          </div>
        )}
      </div>

      <div className="member-info">
        <h3>{member.name}</h3>

        <div className="member-meta">
          <span>{member.batch}</span>
          <span>·</span>
          <span>{member.role}</span>
        </div>

        <p className="member-domain">
          {member.domain}
        </p>
      </div>
    </article>
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
    <article className="success-card">
      <div className="success-image">
        {success.image ? (
          <Image
            src={success.image}
            alt={success.title}
            fill
            sizes="
              (max-width: 700px) 100vw,
              (max-width: 1050px) 50vw,
              33vw
            "
            className="object-cover grayscale"
          />
        ) : (
          <>
            <div className="success-placeholder" />

            <div className="success-placeholder-icon">
              <Trophy
                size={58}
                strokeWidth={0.65}
              />
            </div>

            <span className="success-placeholder-label">
              SUCCESS IMAGE / TO BE ADDED
            </span>
          </>
        )}

        <span className="success-number">
          {success.number}
        </span>
      </div>

      <div className="success-content">
        <div className="success-meta">
          {success.meta}
        </div>

        <h3>{success.title}</h3>

        <p className="success-person">
          {success.person}
        </p>

        <p className="success-description">
          {success.description}
        </p>

        <div className="success-footer">
          <span>CSE SOCIETY</span>

          <ArrowUpRight
            size={14}
            strokeWidth={1.4}
          />
        </div>
      </div>
    </article>
  );
}