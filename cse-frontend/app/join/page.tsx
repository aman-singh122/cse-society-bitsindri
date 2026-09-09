"use client";

import React, { FormEvent, useState } from "react";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechMarquee from "@/components/ui/TechMarquee";
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, User, BookOpen, Code2 } from "lucide-react";

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

export default function JoinPage() {
  const [domain, setDomain] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    } catch (error: any) {
      console.error("Application submission failed:", error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong while submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24 w-full overflow-x-hidden">
      {/* Hero Header */}
      <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <TechnicalLabel index="APPLICATION / 01" title="SOCIETY MEMBERSHIP" category="BIT SINDRI" />

          <div className="mt-8 max-w-6xl">
            <h1 className="text-clamp-hero font-semibold tracking-[-0.055em] text-[#141413]">
              Join the <br />
              <span className="text-neutral-400 font-normal">community.</span>
            </h1>
          </div>

          <div className="mt-14 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-base leading-8 text-neutral-600 sm:text-lg">
                Tell us about yourself and your technical interests. Join a community of curious minds exploring technology, building software projects, and learning together at BIT Sindri.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">
                MEMBERSHIP
              </span>
              <p className="mt-1 font-mono text-2xl font-bold tracking-tight text-[#141413]">
                CSE SOCIETY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <TechMarquee
        items={["APPLY NOW", "WEB DEV", "AI / ML", "COMPETITIVE PROGRAMMING", "CYBERSECURITY", "OPEN SOURCE", "BIT SINDRI"]}
        speed={28}
        variant="dark"
      />

      {/* Main Form Section */}
      <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form Sidebar Info */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <div className="border border-black/15 bg-[#f5f3ee] p-7">
                <TechnicalLabel index="FORM" title="INSTRUCTIONS" />
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#141413]">
                  Application Guidelines
                </h3>
                <p className="mt-4 text-xs leading-6 text-neutral-600">
                  Please complete the form with accurate academic details and primary technical interests. Fields marked with <span className="text-black font-bold">*</span> are required.
                </p>

                <div className="mt-8 space-y-4 border-t border-black/10 pt-6 font-mono text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-black" />
                    <span>Open to all CSE years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-black" />
                    <span>Direct society onboarding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-8">
              {status === "success" ? (
                <AnimatedSection>
                  <div className="border border-black/20 bg-[#f5f3ee] p-8 sm:p-14">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                      <CheckCircle2 size={24} />
                    </div>

                    <p className="mt-6 font-mono text-xs uppercase tracking-[0.24em] text-neutral-400">
                      APPLICATION RECEIVED
                    </p>

                    <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#141413] sm:text-4xl">
                      Thank you for applying.
                    </h2>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-600">
                      Your application has been received. The CSE Society team will review your details and contact you regarding upcoming onboarding and events.
                    </p>

                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 border border-black/20 bg-[#141413] px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f5f3ee] transition-all hover:bg-neutral-800"
                    >
                      Submit another application
                    </button>
                  </div>
                </AnimatedSection>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Step 01: Personal Information */}
                  <div className="border border-black/15 bg-[#f5f3ee] p-7 sm:p-10">
                    <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-4">
                      <div className="flex items-center gap-3">
                        <User size={18} className="text-black" />
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#141413]">
                          01 / PERSONAL INFORMATION
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400">STEP 1 OF 3</span>
                    </div>

                    <div className="space-y-8">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700"
                        >
                          Full Name <span className="text-black font-bold">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className="mt-2 w-full border-b-2 border-black/20 bg-transparent py-3 font-sans text-base text-[#141413] outline-none placeholder:text-neutral-400 focus:border-black transition-colors"
                        />
                      </div>

                      {/* Primary Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700"
                        >
                          Email Address <span className="text-black font-bold">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="mt-2 w-full border-b-2 border-black/20 bg-transparent py-3 font-sans text-base text-[#141413] outline-none placeholder:text-neutral-400 focus:border-black transition-colors"
                        />
                      </div>

                      {/* Student Email */}
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="studentEmail"
                            className="block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700"
                          >
                            Student Email ID
                          </label>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                            OPTIONAL
                          </span>
                        </div>
                        <input
                          id="studentEmail"
                          name="studentEmail"
                          type="email"
                          autoComplete="email"
                          placeholder="your@student-email"
                          className="mt-2 w-full border-b-2 border-black/20 bg-transparent py-3 font-sans text-base text-[#141413] outline-none placeholder:text-neutral-400 focus:border-black transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 02: Academic Information */}
                  <div className="border border-black/15 bg-[#f5f3ee] p-7 sm:p-10">
                    <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-4">
                      <div className="flex items-center gap-3">
                        <BookOpen size={18} className="text-black" />
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#141413]">
                          02 / ACADEMIC INFORMATION
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400">STEP 2 OF 3</span>
                    </div>

                    <div className="space-y-8">
                      {/* Registration Number */}
                      <div>
                        <label
                          htmlFor="registrationNumber"
                          className="block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700"
                        >
                          Registration Number <span className="text-black font-bold">*</span>
                        </label>
                        <input
                          id="registrationNumber"
                          name="registrationNumber"
                          type="text"
                          required
                          placeholder="Enter your institute reg. number"
                          className="mt-2 w-full border-b-2 border-black/20 bg-transparent py-3 font-sans text-base text-[#141413] outline-none placeholder:text-neutral-400 focus:border-black transition-colors"
                        />
                      </div>

                      {/* Year of Study */}
                      <div>
                        <label
                          htmlFor="year"
                          className="block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700"
                        >
                          Year of Study <span className="text-black font-bold">*</span>
                        </label>
                        <select
                          id="year"
                          name="year"
                          required
                          defaultValue=""
                          className="mt-2 w-full border-b-2 border-black/20 bg-transparent py-3 font-sans text-base text-[#141413] outline-none focus:border-black transition-colors"
                        >
                          <option value="" disabled className="bg-[#f5f3ee] text-neutral-500">
                            Select your current year
                          </option>
                          {years.map((yr) => (
                            <option key={yr} value={yr} className="bg-[#f5f3ee] text-[#141413]">
                              {yr}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 03: Technical Interests */}
                  <div className="border border-black/15 bg-[#f5f3ee] p-7 sm:p-10">
                    <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-4">
                      <div className="flex items-center gap-3">
                        <Code2 size={18} className="text-black" />
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#141413]">
                          03 / TECHNICAL INTERESTS
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-400">STEP 3 OF 3</span>
                    </div>

                    <div className="space-y-8">
                      {/* Primary Domain Select */}
                      <div>
                        <label
                          htmlFor="domain"
                          className="block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2"
                        >
                          Primary Domain <span className="text-black font-bold">*</span>
                        </label>
                        
                        <select
                          id="domain"
                          name="domain"
                          required
                          value={domain}
                          onChange={(e) => setDomain(e.target.value)}
                          className="w-full border-b-2 border-black/20 bg-transparent py-3 font-sans text-base text-[#141413] outline-none focus:border-black transition-colors"
                        >
                          <option value="" disabled className="bg-[#f5f3ee] text-neutral-500">
                            Select your primary domain of interest
                          </option>
                          {domains.map((item) => (
                            <option key={item} value={item} className="bg-[#f5f3ee] text-[#141413]">
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Other Domain conditional input */}
                      {domain === "Other" && (
                        <div>
                          <label
                            htmlFor="otherDomain"
                            className="block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700"
                          >
                            Specify Your Domain <span className="text-black font-bold">*</span>
                          </label>
                          <input
                            id="otherDomain"
                            name="otherDomain"
                            type="text"
                            required
                            placeholder="Specify your technical domain"
                            className="mt-2 w-full border-b-2 border-black/20 bg-transparent py-3 font-sans text-base text-[#141413] outline-none placeholder:text-neutral-400 focus:border-black transition-colors"
                          />
                        </div>
                      )}

                      {/* Profile URL */}
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="profileUrl"
                            className="block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-700"
                          >
                            GitHub / LinkedIn / Portfolio URL
                          </label>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                            OPTIONAL
                          </span>
                        </div>
                        <input
                          id="profileUrl"
                          name="profileUrl"
                          type="url"
                          placeholder="https://github.com/yourhandle"
                          className="mt-2 w-full border-b-2 border-black/20 bg-transparent py-3 font-sans text-base text-[#141413] outline-none placeholder:text-neutral-400 focus:border-black transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Bar */}
                  <div className="border border-black/15 bg-[#f5f3ee] p-7">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-md text-xs leading-5 text-neutral-500">
                        By submitting this application, you confirm that your academic details are accurate and you agree to receive society communications.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#141413] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f5f3ee] transition-all hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>SUBMITTING...</span>
                        ) : (
                          <>
                            <span>SUBMIT APPLICATION</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Error Banner */}
                    {status === "error" && (
                      <div className="mt-6 flex items-center gap-3 border border-red-500/20 bg-red-50 p-4 text-red-900">
                        <AlertCircle size={18} className="shrink-0 text-red-600" />
                        <p className="text-xs font-medium">
                          {errorMessage}
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}