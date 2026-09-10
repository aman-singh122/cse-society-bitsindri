"use client";

import React, { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";

import TechnicalLabel from "@/components/ui/TechnicalLabel";
import TechMarquee from "@/components/ui/TechMarquee";
import AnimatedSection from "@/components/ui/AnimatedSection";

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

const steps = [
  {
    number: "01",
    title: "Personal",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Academic",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Technical",
    icon: Code2,
  },
];

export default function JoinPage() {
  const [domain, setDomain] = useState("");
  const [year, setYear] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const progress = useMemo(() => {
    let completed = 0;

    if (typeof window !== "undefined") {
      const form = document.querySelector("form");

      if (form) {
        const requiredFields = Array.from(
          form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
            "[required]"
          )
        );

        completed = requiredFields.filter((field) => field.value.trim()).length;
      }
    }

    return Math.min(Math.round((completed / 5) * 100), 100);
  }, [domain, year]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/applications`,
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
      setDomain("");
      setYear("");
    } catch (error: any) {
      console.error("Application submission failed:", error);

      setStatus("error");
      setErrorMessage(
        error.message ||
          "Something went wrong while submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#f5f3ee] text-[#141413]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-black/15 pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(20,20,19,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,19,.045) 1px, transparent 1px)",
              backgroundSize: "54px 54px",
            }}
          />
        </div>

        <div className="pointer-events-none absolute right-[-120px] top-20 hidden h-[420px] w-[420px] rounded-full border border-black/10 lg:block" />
        <div className="pointer-events-none absolute right-[-70px] top-45 hidden h-[320px] w-[320px] rounded-full border border-black/10 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-17">
          <div className="flex items-start justify-between">
            <TechnicalLabel
              index="APPLICATION / 01"
              title="SOCIETY MEMBERSHIP"
              category="BIT SINDRI"
            />

            <div className="hidden text-right font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400 sm:block">
              <div>APPLICATION SYSTEM</div>
              <div className="mt-1 text-neutral-700">CSE / SOCIETY</div>
            </div>
          </div>

          <div className="mt-9 max-w-5xl">
            <h1 className="text-[clamp(3.5rem,8vw,7.4rem)] font-medium leading-[0.86] tracking-[-0.065em]">
              Join the
              <br />
              <span className="font-normal text-neutral-400">
                community.
              </span>
            </h1>
          </div>

          <div className="mt-10 grid gap-7 border-t border-black/15 pt-6 md:grid-cols-12 md:items-end">
            <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base md:col-span-8">
              Tell us about yourself, your academic background, and the
              technical areas you want to explore with the CSE Society.
            </p>

            <div className="grid grid-cols-2 gap-6 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400 md:col-span-4 md:text-right">
              <div>
                <span className="block text-xl font-semibold tracking-tight text-[#141413]">
                  03
                </span>
                <span>Application steps</span>
              </div>

              <div>
                <span className="block text-xl font-semibold tracking-tight text-[#141413]">
                  12
                </span>
                <span>Technical domains</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARQUEE
      ====================================================== */}
      <div className="border-b border-black/15 bg-[#141413] py-1 text-[#f5f3ee]">
        <TechMarquee
          items={[
            "APPLY NOW",
            "WEB DEVELOPMENT",
            "AI / ML",
            "COMPETITIVE PROGRAMMING",
            "CYBERSECURITY",
            "OPEN SOURCE",
            "RESEARCH",
            "BIT SINDRI",
          ]}
          speed={30}
          variant="dark"
        />
      </div>

      {/* =====================================================
          APPLICATION AREA
      ====================================================== */}
      <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          {status === "success" ? (
            <SuccessState onReset={() => setStatus("idle")} />
          ) : (
            <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
              {/* =================================================
                  LEFT APPLICATION NAV
              ================================================== */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <TechnicalLabel
                    index="FORM"
                    title="APPLICATION"
                    category="03 STEPS"
                  />

                  <div className="mt-6 border-y border-black/15">
                    {steps.map((step, index) => {
                      const Icon = step.icon;

                      return (
                        <div
                          key={step.number}
                          className="group flex items-center gap-3 border-b border-black/10 py-4 last:border-b-0"
                        >
                          <div className="flex h-8 w-8 items-center justify-center border border-black/10 bg-[#f5f3ee] transition-colors group-hover:border-black">
                            <Icon size={14} strokeWidth={1.7} />
                          </div>

                          <div className="min-w-0">
                            <span className="block font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                              STEP {step.number}
                            </span>

                            <span className="text-sm font-medium">
                              {step.title}
                            </span>
                          </div>

                          {index < steps.length - 1 && (
                            <ChevronRight
                              size={13}
                              className="ml-auto text-neutral-300"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 border border-black/10 bg-[#f5f3ee] p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                        FORM STATUS
                      </span>

                      <span className="font-mono text-[9px] font-bold">
                        {progress}%
                      </span>
                    </div>

                    <div className="mt-3 h-1 bg-black/10">
                      <div
                        className="h-full bg-[#141413] transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <p className="mt-3 text-[11px] leading-5 text-neutral-500">
                      Complete the required fields before submitting your
                      application.
                    </p>
                  </div>

                  <div className="mt-5 font-mono text-[9px] uppercase leading-5 tracking-wider text-neutral-400">
                    CSE SOCIETY
                    <br />
                    BIT SINDRI
                  </div>
                </div>
              </aside>

              {/* =================================================
                  FORM
              ================================================== */}
              <div className="min-w-0">
                <AnimatedSection>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* -----------------------------------------
                        STEP 01
                    ------------------------------------------ */}
                    <FormSection
                      number="01"
                      title="Personal information"
                      description="Basic details so we know who you are."
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field
                          label="Full Name"
                          required
                          htmlFor="fullName"
                          className="sm:col-span-2"
                        >
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Your full name"
                            className={inputClass}
                          />
                        </Field>

                        <Field
                          label="Email Address"
                          required
                          htmlFor="email"
                        >
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={inputClass}
                          />
                        </Field>

                        <Field
                          label="Student Email"
                          optional
                          htmlFor="studentEmail"
                        >
                          <input
                            id="studentEmail"
                            name="studentEmail"
                            type="email"
                            autoComplete="email"
                            placeholder="Institutional email"
                            className={inputClass}
                          />
                        </Field>
                      </div>
                    </FormSection>

                    {/* -----------------------------------------
                        STEP 02
                    ------------------------------------------ */}
                    <FormSection
                      number="02"
                      title="Academic information"
                      description="A little context about your current academic stage."
                    >
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field
                          label="Registration Number"
                          required
                          htmlFor="registrationNumber"
                        >
                          <input
                            id="registrationNumber"
                            name="registrationNumber"
                            type="text"
                            required
                            placeholder="Institute registration number"
                            className={inputClass}
                          />
                        </Field>

                        <Field
                          label="Year of Study"
                          required
                          htmlFor="year"
                        >
                          <select
                            id="year"
                            name="year"
                            required
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className={inputClass}
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
                        </Field>
                      </div>
                    </FormSection>

                    {/* -----------------------------------------
                        STEP 03
                    ------------------------------------------ */}
                    <FormSection
                      number="03"
                      title="Technical interests"
                      description="Choose the area where you want to contribute and grow."
                    >
                      <div className="space-y-7">
                        <Field
                          label="Primary Domain"
                          required
                          htmlFor="domain"
                        >
                          <div className="relative">
                            <select
                              id="domain"
                              name="domain"
                              required
                              value={domain}
                              onChange={(e) => setDomain(e.target.value)}
                              className={`${inputClass} pr-10 cursor-pointer`}
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
                          </div>
                        </Field>

                        {domain === "Other" && (
                          <Field
                            label="Specify Your Domain"
                            required
                            htmlFor="otherDomain"
                          >
                            <input
                              id="otherDomain"
                              name="otherDomain"
                              type="text"
                              required
                              placeholder="Your technical domain"
                              className={inputClass}
                            />
                          </Field>
                        )}

                        <Field
                          label="Profile URL"
                          optional
                          htmlFor="profileUrl"
                        >
                          <div className="relative">
                            <ExternalLink
                              size={14}
                              className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-neutral-400"
                            />

                            <input
                              id="profileUrl"
                              name="profileUrl"
                              type="url"
                              placeholder="GitHub, LinkedIn or portfolio"
                              className={`${inputClass} pl-6`}
                            />
                          </div>
                        </Field>
                      </div>
                    </FormSection>

                    {/* -----------------------------------------
                        SUBMIT
                    ------------------------------------------ */}
                    <div className="border border-black/15 bg-[#141413] p-5 text-[#f5f3ee] sm:p-6">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="max-w-lg">
                          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                            <Check size={12} />
                            READY TO SUBMIT
                          </div>

                          <p className="mt-2 text-xs leading-5 text-white/55">
                            By submitting, you confirm that the information
                            provided is accurate and agree to receive society
                            communications.
                          </p>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-3 bg-[#f5f3ee] px-6 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#141413] transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="h-3 w-3 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                              SUBMITTING
                            </>
                          ) : (
                            <>
                              SUBMIT APPLICATION
                              <ArrowRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </>
                          )}
                        </button>
                      </div>

                      {status === "error" && (
                        <div className="mt-5 flex gap-3 border border-red-300/30 bg-red-50/10 p-3 text-red-200">
                          <AlertCircle
                            size={16}
                            className="mt-0.5 shrink-0"
                          />

                          <p className="text-xs leading-5">
                            {errorMessage}
                          </p>
                        </div>
                      )}
                    </div>
                  </form>
                </AnimatedSection>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          BOTTOM MICRO CTA
      ====================================================== */}
      {status !== "success" && (
        <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
            <span>QUESTIONS ABOUT THE SOCIETY?</span>

            <Link
              href="/"
              className="group inline-flex w-fit items-center gap-2 text-neutral-700 transition-colors hover:text-black"
            >
              BACK TO CSE SOCIETY
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}

/* =========================================================
   FORM SECTION
========================================================= */

function FormSection({
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
    <section className="border border-black/15 bg-[#f5f3ee]">
      <div className="flex items-start gap-4 border-b border-black/10 px-5 py-4 sm:px-6">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#141413] font-mono text-[9px] font-bold text-[#f5f3ee]">
          {number}
        </span>

        <div className="min-w-0">
          <h2 className="text-sm font-semibold tracking-tight sm:text-base">
            {title}
          </h2>

          <p className="mt-0.5 text-[11px] leading-5 text-neutral-500">
            {description}
          </p>
        </div>
      </div>

      <div className="px-5 py-6 sm:px-6 sm:py-7">
        {children}
      </div>
    </section>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  required,
  optional,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-3">
        <label
          htmlFor={htmlFor}
          className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-black">*</span>
          )}
        </label>

        {optional && (
          <span className="font-mono text-[8px] uppercase tracking-widest text-neutral-400">
            OPTIONAL
          </span>
        )}
      </div>

      <div className="mt-2">{children}</div>
    </div>
  );
}

/* =========================================================
   SUCCESS STATE
========================================================= */

function SuccessState({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <AnimatedSection>
      <div className="mx-auto max-w-4xl border border-black/15 bg-[#f5f3ee]">
        <div className="grid md:grid-cols-[180px_1fr]">
          <div className="flex min-h-44 items-center justify-center border-b border-black/10 bg-[#141413] text-[#f5f3ee] md:border-b-0 md:border-r">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15">
                <CheckCircle2 size={27} strokeWidth={1.5} />
              </div>

              <span className="mt-4 block font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
                RECEIVED
              </span>
            </div>
          </div>

          <div className="p-7 sm:p-10">
            <TechnicalLabel
              index="APPLICATION / COMPLETE"
              title="SUBMISSION RECEIVED"
              category="CSE SOCIETY"
            />

            <h1 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              Thank you for
              <br />
              <span className="text-neutral-400">
                applying.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600">
              Your application has been received successfully. The CSE
              Society team will review your details and contact you regarding
              onboarding and upcoming activities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onReset}
                className="group inline-flex cursor-pointer items-center gap-3 bg-[#141413] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#f5f3ee] transition-colors hover:bg-black"
              >
                SUBMIT ANOTHER
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <Link
                href="/"
                className="inline-flex cursor-pointer items-center gap-2 border border-black/15 px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] transition-colors hover:border-black"
              >
                BACK HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

const inputClass =
  "w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm text-[#141413] outline-none transition-all placeholder:text-neutral-400 hover:border-black/35 focus:border-black focus:ring-0";