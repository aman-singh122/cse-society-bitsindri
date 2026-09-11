"use client";

import React, { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  GraduationCap,
  Handshake,
  Mail,
  Sparkles,
  UserRound,
  Users,
  Building2,
  Globe2,
  Phone,
  Send,
  Terminal,
} from "lucide-react";

import TechMarquee from "@/components/ui/TechMarquee";

/* =========================================================
   DATA
========================================================= */

const domains = [
  "Web Development",
  "App Development",
  "AI / Machine Learning",
  "Data Science",
  "Competitive Programming",
  "Cybersecurity",
  "Cloud & DevOps",
  "Blockchain / Web3",
  "UI/UX & Design",
  "Open Source",
  "Research",
  "Other",
];

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

const partnershipTypes = [
  "Event Sponsorship",
  "Workshop / Tech Talk",
  "Hackathon Partnership",
  "Internship / Recruitment",
  "Mentorship",
  "Brand Collaboration",
  "Other",
];

/* =========================================================
   PAGE
========================================================= */

export default function JoinPage() {
  /* -------------------------------------------------------
     MEMBERSHIP
  ------------------------------------------------------- */

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [domain, setDomain] = useState("");
  const [year, setYear] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  /* -------------------------------------------------------
     PARTNERSHIP
  ------------------------------------------------------- */

  const [partnershipSubmitting, setPartnershipSubmitting] = useState(false);
  const [partnershipStatus, setPartnershipStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [partnershipError, setPartnershipError] = useState("");

  /* -------------------------------------------------------
     PROGRESS
  ------------------------------------------------------- */

  const progress = useMemo(() => {
    const fields = [
      fullName,
      email,
      registrationNumber,
      year,
      domain,
    ];

    const completed = fields.filter(
      (value) => value.trim().length > 0
    ).length;

    return Math.round((completed / fields.length) * 100);
  }, [fullName, email, registrationNumber, year, domain]);

  /* =========================================================
     PARTNERSHIP SUBMIT
  ========================================================= */

  const handlePartnershipSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setPartnershipSubmitting(true);
    setPartnershipStatus("idle");
    setPartnershipError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      organizationName: formData.get("organizationName"),
      contactPerson: formData.get("contactPerson"),
      workEmail: formData.get("workEmail"),
      phone: formData.get("phone") || null,
      website: formData.get("website") || null,
      partnershipType: formData.get("partnershipType"),
      message: formData.get("message"),
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("API configuration is missing.");
      }

      const response = await fetch(
        `${apiUrl}/api/partnerships`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to submit partnership request."
        );
      }

      setPartnershipStatus("success");
      form.reset();
    } catch (error: unknown) {
      console.error("Partnership submission failed:", error);

      setPartnershipStatus("error");

      setPartnershipError(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your request."
      );
    } finally {
      setPartnershipSubmitting(false);
    }
  };

  /* =========================================================
     MEMBERSHIP SUBMIT
  ========================================================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      studentEmail: formData.get("studentEmail") || null,
      registrationNumber: formData.get("registrationNumber"),
      year: formData.get("year"),
      domain: formData.get("domain"),
      otherDomain: formData.get("otherDomain") || null,
      profileUrl: formData.get("profileUrl") || null,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("API configuration is missing.");
      }

      const response = await fetch(
        `${apiUrl}/api/applications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to submit application."
        );
      }

      setStatus("success");

      form.reset();

      setFullName("");
      setEmail("");
      setRegistrationNumber("");
      setDomain("");
      setYear("");
    } catch (error: unknown) {
      console.error("Application submission failed:", error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your application."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="join-page">
      <style jsx global>{`
        .join-page {
          --join-radius: 2px;
          overflow-x: hidden;
          background: var(--cse-bg);
          color: var(--cse-text);
        }

        .join-page * {
          box-sizing: border-box;
        }

        .join-shell {
          width: min(1380px, calc(100% - 48px));
          margin: 0 auto;
        }

        .join-grid {
          background-image:
            linear-gradient(
              rgba(128, 128, 128, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(128, 128, 128, 0.055) 1px,
              transparent 1px
            );
          background-size: 52px 52px;
        }

        .join-reveal {
          animation: joinReveal 0.8s cubic-bezier(.2,.7,.2,1) both;
        }

        .join-delay-1 {
          animation-delay: 120ms;
        }

        .join-delay-2 {
          animation-delay: 220ms;
        }

        .join-delay-3 {
          animation-delay: 320ms;
        }

        @keyframes joinReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes joinFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 0);
          }
        }

        @keyframes joinPulse {
          0%, 100% {
            opacity: .35;
            transform: scale(.92);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        .join-float {
          animation: joinFloat 5s ease-in-out infinite;
        }

        .join-pulse {
          animation: joinPulse 2.4s ease-in-out infinite;
        }

        .join-card {
          border: 1px solid var(--cse-border);
          background: var(--cse-surface);
          transition:
            border-color .3s ease,
            transform .3s ease,
            background .3s ease,
            box-shadow .3s ease;
        }

        .join-card:hover {
          border-color: rgba(32, 201, 151, .38);
          background: var(--cse-surface-2);
        }

.join-input {
  width: 100%;
  min-height: 54px;
  border: 1px solid var(--cse-border);
  border-radius: 0;
  background: var(--cse-surface-2);
  color: var(--cse-text-strong);
  padding: 0 16px !important;
  outline: none;
  transition:
    border-color .25s ease,
    background .25s ease,
    box-shadow .25s ease,
    transform .25s ease;
}

.join-input--icon {
  padding-left: 46px !important;
}

.join-input--select {
  padding-right: 48px !important;
}

        .join-input::placeholder {
          color: var(--cse-text-soft);
        }

        .join-input:hover {
          border-color: rgba(128, 128, 128, .45);
        }

        .join-input:focus {
          border-color: var(--cse-accent);
          background: var(--cse-bg);
          box-shadow: 0 0 0 3px rgba(32, 201, 151, .08);
        }

        .join-select {
          appearance: none;
          padding-right: 48px;
          cursor: pointer;
        }

        .join-button {
          cursor: pointer;
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            background .25s ease,
            border-color .25s ease;
        }

        .join-button:hover {
          transform: translateY(-2px);
        }

        .join-button:active {
          transform: translateY(0);
        }

        .join-number {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: .14em;
          color: var(--cse-text-soft);
        }

        .join-label {
          display: block;
          margin-bottom: 9px;
          font-family: var(--font-mono);
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--cse-text-muted);
        }

        .join-section-title {
          font-size: clamp(2.2rem, 5vw, 5rem);
          line-height: .9;
          letter-spacing: -.055em;
          font-weight: 500;
        }

        .join-section-copy {
          max-width: 650px;
          color: var(--cse-text-muted);
          font-size: 15px;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .join-shell {
            width: min(100% - 28px, 1380px);
          }

          .join-grid {
            background-size: 36px 36px;
          }

          .join-input {
            min-height: 52px;
          }

          .join-label {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .join-reveal,
          .join-float,
          .join-pulse {
            animation: none !important;
          }

          .join-card,
          .join-input,
          .join-button {
            transition: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          TOP HERO
      ====================================================== */}

      <section className="join-grid relative overflow-hidden border-b border-[var(--cse-border)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-48 top-[-180px] h-[620px] w-[620px] rounded-full border border-[var(--cse-border)] opacity-50" />
          <div className="absolute -right-12 top-[-20px] h-[410px] w-[410px] rounded-full border border-emerald-400/20 opacity-60" />

          <div className="join-float absolute right-[18%] top-[28%]">
            <div className="h-2 w-2 rounded-full bg-[var(--cse-accent)] shadow-[0_0_25px_rgba(32,201,151,.8)]" />
          </div>

          <div className="absolute left-[12%] top-[45%] hidden h-32 w-32 rounded-full border border-[var(--cse-border)] lg:block" />
        </div>

        <div className="join-shell relative py-20 sm:py-24 lg:py-28">
          <div className="join-reveal flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--cse-accent)]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[var(--cse-text-muted)]">
                  CSE SOCIETY / CONNECT
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(3.6rem,9vw,9rem)] font-medium leading-[.82] tracking-[-.075em] text-[var(--cse-text-strong)]">
                Join what
                <br />
                <span className="text-[var(--cse-text-soft)]">
                  comes next.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-7 text-[var(--cse-text-muted)] sm:text-lg">
                Join the CSE Society, or bring your organisation into
                the community. From hackathons and workshops to
                mentorship and recruitment, there is room to build
                something meaningful together.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#partnerships"
                  className="join-button inline-flex min-h-12 items-center gap-3 bg-[var(--cse-text-strong)] px-6 font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[var(--cse-bg)]"
                >
                  Partner With Us
                  <ArrowRight size={15} />
                </a>

                <a
                  href="#membership"
                  className="join-button inline-flex min-h-12 items-center gap-3 border border-[var(--cse-border)] px-6 font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[var(--cse-text)] hover:border-[var(--cse-accent)]"
                >
                  Join Society
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="hidden w-64 pt-2 lg:block">
              <div className="border-l border-[var(--cse-border)] pl-5">
                <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[var(--cse-text-soft)]">
                  TWO WAYS IN
                </div>

                <div className="mt-5 space-y-4">
                  <MiniHeroItem
                    number="01"
                    title="PARTNERSHIP"
                    text="Build with the society."
                  />
                  <MiniHeroItem
                    number="02"
                    title="MEMBERSHIP"
                    text="Build within the community."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero stats */}

          <div className="join-reveal join-delay-2 mt-16 grid border-y border-[var(--cse-border)] sm:grid-cols-3">
            <HeroStat
              number="01"
              title="PARTNER"
              text="Events, workshops & collaboration"
            />
            <HeroStat
              number="02"
              title="JOIN"
              text="Learn, contribute & grow"
            />
            <HeroStat
              number="03"
              title="CONNECT"
              text="Students, mentors & industry"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP
      ====================================================== */}

      <section
        id="partnerships"
        className="relative overflow-hidden border-b border-[var(--cse-border)] bg-[var(--cse-surface)]"
      >
        <div className="join-shell py-16 sm:py-20 lg:py-24">
          <SectionEyebrow
            number="01"
            title="PARTNER WITH THE SOCIETY"
            icon={<Handshake size={14} />}
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div className="join-reveal">
              <h2 className="join-section-title text-[var(--cse-text-strong)]">
                Let&apos;s build
                <br />
                <span className="text-[var(--cse-text-soft)]">
                  something real.
                </span>
              </h2>

              <p className="join-section-copy mt-7">
                We work with companies, organisations, founders,
                professionals and communities to create meaningful
                opportunities for students at BIT Sindri.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-px border border-[var(--cse-border)] bg-[var(--cse-border)]">
                <InfoTile
                  icon={<Building2 size={16} />}
                  title="ORGANISATIONS"
                  text="Companies & teams"
                />
                <InfoTile
                  icon={<Globe2 size={16} />}
                  title="OPPORTUNITIES"
                  text="Industry & community"
                />
                <InfoTile
                  icon={<Users size={16} />}
                  title="STUDENTS"
                  text="Talent & collaboration"
                />
                <InfoTile
                  icon={<Terminal size={16} />}
                  title="TECH"
                  text="Build & learn"
                />
              </div>
            </div>

            {/* Partnership form */}

            <div className="join-reveal join-delay-1">
              {partnershipStatus === "success" ? (
                <PartnershipSuccess
                  onReset={() => setPartnershipStatus("idle")}
                />
              ) : (
                <form
                  onSubmit={handlePartnershipSubmit}
                  className="join-card overflow-hidden"
                >
                  <div className="flex flex-col gap-4 border-b border-[var(--cse-border)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[.17em] text-[var(--cse-accent)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--cse-accent)]" />
                        COLLABORATION REQUEST
                      </div>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--cse-text-strong)] sm:text-2xl">
                        Tell us about the opportunity.
                      </h3>
                    </div>

                    <div className="font-mono text-[9px] uppercase tracking-[.16em] text-[var(--cse-text-soft)]">
                      OPEN / CSE
                    </div>
                  </div>

                  <div className="grid gap-6 p-5 sm:grid-cols-2 sm:p-7">
                    <FormField
                      label="Organization / Company Name"
                      required
                    >
                      <input
                        name="organizationName"
                        type="text"
                        required
                        autoComplete="organization"
                        placeholder="Company or organization"
                        className="join-input"
                      />
                    </FormField>

                    <FormField
                      label="Contact Person"
                      required
                    >
                      <input
                        name="contactPerson"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="join-input"
                      />
                    </FormField>

                    <FormField label="Work Email" required>
                      <div className="relative">
                        <Mail
                          size={15}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--cse-text-soft)]"
                        />

                        <input
                          name="workEmail"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@company.com"
                          className="join-input join-input--icon"
                        />
                      </div>
                    </FormField>

                    <FormField label="Phone Number" optional>
                      <div className="relative">
                        <Phone
                          size={15}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--cse-text-soft)]"
                        />

                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 ..."
                          className="join-input join-input--icon"
                        />
                      </div>
                    </FormField>

                    <FormField label="Website" optional>
                      <div className="relative">
                        <Globe2
                          size={15}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--cse-text-soft)]"
                        />

                        <input
                          name="website"
                          type="url"
                          placeholder="https://company.com"
                          className="join-input join-input--icon"
                        />
                      </div>
                    </FormField>

                    <FormField
                      label="Partnership Type"
                      required
                    >
                      <div className="relative">
                        <select
                          name="partnershipType"
                          required
                          defaultValue=""
                          className="join-input join-select join-input--select"
                        >
                          <option value="" disabled>
                            Select an opportunity
                          </option>

                          {partnershipTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--cse-text-soft)]"
                        />
                      </div>
                    </FormField>

                    <FormField
                      label="Tell us about the opportunity"
                      required
                      className="sm:col-span-2"
                    >
                      <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us about the collaboration, event, opportunity or idea..."
                        className="join-input min-h-36 resize-y py-4"
                      />
                    </FormField>
                  </div>

                  {partnershipStatus === "error" && (
                    <ErrorMessage message={partnershipError} />
                  )}

                  <div className="flex flex-col gap-5 border-t border-[var(--cse-border)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div>
                      <div className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[var(--cse-text-soft)]">
                        NEXT STEP
                      </div>

                      <p className="mt-2 text-xs leading-5 text-[var(--cse-text-muted)]">
                        Share the essentials. Our team will review
                        your request and get back to you.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={partnershipSubmitting}
                      className="join-button inline-flex min-h-13 shrink-0 cursor-pointer items-center justify-center gap-3 bg-[var(--cse-text-strong)] px-7 font-mono text-[10px] font-bold uppercase tracking-[.15em] text-[var(--cse-bg)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {partnershipSubmitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Request
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP MARQUEE
      ====================================================== */}

      <div className="border-b border-[var(--cse-border)] bg-[var(--cse-surface-2)]">
        <TechMarquee
          items={[
            "COLLABORATE",
            "HACKATHONS",
            "TECH TALKS",
            "WORKSHOPS",
            "MENTORSHIP",
            "RECRUITMENT",
            "OPEN SOURCE",
            "BIT SINDRI",
          ]}
          speed={32}
          variant="dark"
        />
      </div>

      {/* =====================================================
          MEMBERSHIP
      ====================================================== */}

      <section
        id="membership"
        className="join-grid relative overflow-hidden border-b border-[var(--cse-border)]"
      >
        <div className="join-shell py-16 sm:py-20 lg:py-24">
          <SectionEyebrow
            number="02"
            title="JOIN THE CSE SOCIETY"
            icon={<Users size={14} />}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            {/* Intro */}

            <div className="join-reveal">
              <h2 className="join-section-title text-[var(--cse-text-strong)]">
                Become part
                <br />
                <span className="text-[var(--cse-text-soft)]">
                  of the community.
                </span>
              </h2>

              <p className="join-section-copy mt-7">
                Tell us about yourself, your academic background
                and the technical areas you want to explore,
                contribute to and grow in.
              </p>

              {/* Progress */}

              <div className="mt-10 border border-[var(--cse-border)] bg-[var(--cse-surface)] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[var(--cse-text-soft)]">
                    APPLICATION PROGRESS
                  </span>

                  <span className="font-mono text-sm font-bold text-[var(--cse-text-strong)]">
                    {progress}%
                  </span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden bg-[var(--cse-surface-2)]">
                  <div
                    className="h-full bg-[var(--cse-accent)] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-4 text-xs leading-5 text-[var(--cse-text-muted)]">
                  Complete the required fields and submit your
                  application when you&apos;re ready.
                </p>
              </div>

              {/* Steps */}

              <div className="mt-5 grid gap-px border border-[var(--cse-border)] bg-[var(--cse-border)] sm:grid-cols-3 lg:grid-cols-1">
                <StepItem
                  number="01"
                  icon={<UserRound size={15} />}
                  title="Personal"
                  text="Who you are"
                />

                <StepItem
                  number="02"
                  icon={<GraduationCap size={15} />}
                  title="Academic"
                  text="Where you are"
                />

                <StepItem
                  number="03"
                  icon={<Code2 size={15} />}
                  title="Technical"
                  text="What you build"
                />
              </div>
            </div>

            {/* Membership form */}

            <div className="join-reveal join-delay-1">
              {status === "success" ? (
                <MembershipSuccess
                  onReset={() => setStatus("idle")}
                />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* PERSONAL */}

                  <ApplicationSection
                    number="01"
                    title="Personal information"
                    description="Basic details so we know who you are."
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        label="Full Name"
                        required
                        className="sm:col-span-2"
                      >
                        <input
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                          value={fullName}
                          onChange={(e) =>
                            setFullName(e.target.value)
                          }
                          className="join-input"
                        />
                      </FormField>

                      <FormField
                        label="Email Address"
                        required
                      >
                        <input
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          className="join-input"
                        />
                      </FormField>

                      <FormField
                        label="Student Email"
                        optional
                      >
                        <input
                          name="studentEmail"
                          type="email"
                          autoComplete="email"
                          placeholder="Institutional email"
                          className="join-input"
                        />
                      </FormField>
                    </div>
                  </ApplicationSection>

                  {/* ACADEMIC */}

                  <ApplicationSection
                    number="02"
                    title="Academic information"
                    description="A little context about your current academic stage."
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        label="Registration Number"
                        required
                      >
                        <input
                          name="registrationNumber"
                          type="text"
                          required
                          placeholder="Institute registration number"
                          value={registrationNumber}
                          onChange={(e) =>
                            setRegistrationNumber(e.target.value)
                          }
                          className="join-input"
                        />
                      </FormField>

                      <FormField
                        label="Year of Study"
                        required
                      >
                        <div className="relative">
                          <select
                            name="year"
                            required
                            value={year}
                            onChange={(e) =>
                              setYear(e.target.value)
                            }
                            className="join-input join-select join-input--select"
                          >
                            <option value="" disabled>
                              Select current year
                            </option>

                            {years.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>

                          <ChevronDown
                            size={16}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--cse-text-soft)]"
                          />
                        </div>
                      </FormField>
                    </div>
                  </ApplicationSection>

                  {/* TECHNICAL */}

                  <ApplicationSection
                    number="03"
                    title="Technical interests"
                    description="Choose where you want to contribute and grow."
                  >
                    <div className="space-y-6">
                      <FormField
                        label="Primary Domain"
                        required
                      >
                        <div className="relative">
                          <select
                            name="domain"
                            required
                            value={domain}
                            onChange={(e) =>
                              setDomain(e.target.value)
                            }
                            className="join-input join-select join-input--select"
                          >
                            <option value="" disabled>
                              Select your primary domain
                            </option>

                            {domains.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>

                          <ChevronDown
                            size={16}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--cse-text-soft)]"
                          />
                        </div>
                      </FormField>

                      {domain === "Other" && (
                        <FormField
                          label="Specify Your Domain"
                          required
                        >
                          <input
                            name="otherDomain"
                            type="text"
                            required
                            placeholder="Your technical domain"
                            className="join-input"
                          />
                        </FormField>
                      )}

                      <FormField
                        label="Profile URL"
                        optional
                      >
                        <div className="relative">
                          <ExternalLink
                            size={15}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--cse-text-soft)]"
                          />

                          <input
                            name="profileUrl"
                            type="url"
                            placeholder="GitHub, LinkedIn or portfolio"
                            className="join-input join-input--icon"
                          />
                        </div>
                      </FormField>
                    </div>
                  </ApplicationSection>

                  {/* SUBMIT */}

                  <div className="overflow-hidden border border-[var(--cse-border)] bg-[var(--cse-surface)]">
                    <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                      <div>
                        <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[var(--cse-accent)]">
                          <Check size={13} />
                          READY TO SUBMIT
                        </div>

                        <p className="mt-2 max-w-xl text-xs leading-5 text-[var(--cse-text-muted)]">
                          By submitting, you confirm that the
                          information provided is accurate and
                          agree to receive society communications.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="join-button inline-flex min-h-13 shrink-0 cursor-pointer items-center justify-center gap-3 bg-[var(--cse-text-strong)] px-7 font-mono text-[10px] font-bold uppercase tracking-[.15em] text-[var(--cse-bg)] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>
                    </div>

                    {status === "error" && (
                      <ErrorMessage message={errorMessage} />
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL STRIP
      ====================================================== */}

      <section className="border-b border-[var(--cse-border)]">
        <div className="join-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[var(--cse-text-soft)]">
              CSE SOCIETY / BIT SINDRI
            </div>

            <p className="mt-2 text-sm text-[var(--cse-text-muted)]">
              Questions about the society or collaboration?
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#partnerships"
              className="join-button inline-flex cursor-pointer items-center gap-2 border border-[var(--cse-border)] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[var(--cse-text)] hover:border-[var(--cse-accent)]"
            >
              Partnership
              <ArrowRight size={12} />
            </a>

            <Link
              href="/"
              className="join-button inline-flex cursor-pointer items-center gap-2 border border-[var(--cse-border)] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[var(--cse-text)] hover:border-[var(--cse-accent)]"
            >
              Back Home
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionEyebrow({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="join-number">{number}</span>

      <span className="h-px w-8 bg-[var(--cse-border)]" />

      <span className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[.19em] text-[var(--cse-text-muted)]">
        <span className="text-[var(--cse-accent)]">{icon}</span>
        {title}
      </span>
    </div>
  );
}

function MiniHeroItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <div className="font-mono text-[8px] tracking-[.15em] text-[var(--cse-text-soft)]">
        {number}
      </div>

      <div className="mt-1 text-[11px] font-semibold tracking-wide text-[var(--cse-text-strong)]">
        {title}
      </div>

      <div className="mt-1 text-xs text-[var(--cse-text-muted)]">
        {text}
      </div>
    </div>
  );
}

function HeroStat({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group border-b border-[var(--cse-border)] p-5 transition-colors duration-300 hover:bg-[var(--cse-surface)] sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="flex items-center justify-between">
        <span className="join-number">{number}</span>

        <span className="h-1.5 w-1.5 rounded-full bg-[var(--cse-text-soft)] transition-all duration-300 group-hover:bg-[var(--cse-accent)] group-hover:shadow-[0_0_12px_rgba(32,201,151,.7)]" />
      </div>

      <div className="mt-6 text-xs font-bold tracking-wide text-[var(--cse-text-strong)]">
        {title}
      </div>

      <p className="mt-2 text-xs leading-5 text-[var(--cse-text-muted)]">
        {text}
      </p>
    </div>
  );
}

function InfoTile({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[var(--cse-surface)] p-4 transition-colors duration-300 hover:bg-[var(--cse-surface-2)] sm:p-5">
      <div className="text-[var(--cse-accent)]">{icon}</div>

      <div className="mt-5 font-mono text-[9px] font-bold tracking-[.13em] text-[var(--cse-text-strong)]">
        {title}
      </div>

      <p className="mt-1 text-xs text-[var(--cse-text-muted)]">
        {text}
      </p>
    </div>
  );
}

function StepItem({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[var(--cse-surface)] p-4 transition-colors duration-300 hover:bg-[var(--cse-surface-2)]">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center border border-[var(--cse-border)] text-[var(--cse-text-muted)]">
          {icon}
        </span>

        <div>
          <div className="font-mono text-[8px] tracking-[.15em] text-[var(--cse-text-soft)]">
            STEP {number}
          </div>

          <div className="mt-1 text-sm font-semibold text-[var(--cse-text-strong)]">
            {title}
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-[var(--cse-text-muted)]">
        {text}
      </p>
    </div>
  );
}

function FormField({
  label,
  required,
  optional,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-3">
        <label className="join-label mb-0">
          {label}
          {required && (
            <span className="ml-1 text-[var(--cse-accent)]">*</span>
          )}
        </label>

        {optional && (
          <span className="font-mono text-[8px] uppercase tracking-[.14em] text-[var(--cse-text-soft)]">
            Optional
          </span>
        )}
      </div>

      <div className="mt-2">{children}</div>
    </div>
  );
}

function ApplicationSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="join-card overflow-hidden">
      <div className="flex items-start gap-4 border-b border-[var(--cse-border)] p-5 sm:p-6">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[var(--cse-text-strong)] font-mono text-[9px] font-bold text-[var(--cse-bg)]">
          {number}
        </span>

        <div>
          <h3 className="text-base font-semibold tracking-tight text-[var(--cse-text-strong)] sm:text-lg">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-[var(--cse-text-muted)]">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-7">{children}</div>
    </section>
  );
}

function ErrorMessage({
  message,
}: {
  message: string;
}) {
  return (
    <div className="border-t border-red-500/20 bg-red-500/[.06] px-5 py-4 text-sm text-red-300 sm:px-7">
      {message}
    </div>
  );
}

/* =========================================================
   SUCCESS STATES
========================================================= */

function PartnershipSuccess({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="join-card overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="flex min-h-56 items-center justify-center border-b border-[var(--cse-border)] bg-[var(--cse-surface-2)] p-8 sm:w-48 sm:border-b-0 sm:border-r">
          <div className="text-center">
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--cse-accent)]/30">
              <span className="join-pulse absolute inset-2 rounded-full border border-[var(--cse-accent)]/20" />

              <CheckCircle2
                size={28}
                strokeWidth={1.5}
                className="relative text-[var(--cse-accent)]"
              />
            </div>

            <div className="mt-4 font-mono text-[8px] font-bold uppercase tracking-[.16em] text-[var(--cse-text-soft)]">
              REQUEST RECEIVED
            </div>
          </div>
        </div>

        <div className="flex-1 p-7 sm:p-10">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[var(--cse-accent)]">
            PARTNERSHIP / COMPLETE
          </div>

          <h3 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[.9] tracking-[-.06em] text-[var(--cse-text-strong)]">
            Thanks for
            <br />
            <span className="text-[var(--cse-text-soft)]">
              reaching out.
            </span>
          </h3>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--cse-text-muted)]">
            Our team will review your proposal and get back to
            you shortly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onReset}
              className="join-button inline-flex cursor-pointer items-center gap-3 bg-[var(--cse-text-strong)] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[var(--cse-bg)]"
            >
              Send Another
              <ArrowRight size={13} />
            </button>

            <Link
              href="/"
              className="join-button inline-flex cursor-pointer items-center gap-3 border border-[var(--cse-border)] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[var(--cse-text)]"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MembershipSuccess({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="join-card overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="flex min-h-52 items-center justify-center border-b border-[var(--cse-border)] bg-[var(--cse-surface-2)] p-8 sm:w-48 sm:border-b-0 sm:border-r">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--cse-border)]">
              <CheckCircle2
                size={28}
                strokeWidth={1.5}
                className="text-[var(--cse-accent)]"
              />
            </div>

            <div className="mt-4 font-mono text-[8px] font-bold uppercase tracking-[.16em] text-[var(--cse-text-soft)]">
              APPLICATION RECEIVED
            </div>
          </div>
        </div>

        <div className="flex-1 p-7 sm:p-10">
          <div className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[var(--cse-accent)]">
            APPLICATION / COMPLETE
          </div>

          <h3 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[.9] tracking-[-.06em] text-[var(--cse-text-strong)]">
            Thank you for
            <br />
            <span className="text-[var(--cse-text-soft)]">
              applying.
            </span>
          </h3>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--cse-text-muted)]">
            Your application has been received successfully. The
            CSE Society team will review your details and contact
            you regarding onboarding and upcoming activities.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onReset}
              className="join-button inline-flex cursor-pointer items-center gap-3 bg-[var(--cse-text-strong)] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[var(--cse-bg)]"
            >
              Submit Another
              <ArrowRight size={13} />
            </button>

            <Link
              href="/"
              className="join-button inline-flex cursor-pointer items-center gap-3 border border-[var(--cse-border)] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-[var(--cse-text)]"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}