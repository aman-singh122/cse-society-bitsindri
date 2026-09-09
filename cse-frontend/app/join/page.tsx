"use client";

import { FormEvent, useState } from "react";

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");

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
    } catch (error) {
      console.error("Application submission failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-black/25" />

            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              CSE Society · Membership
            </p>
          </div>

          <div className="mt-10 max-w-6xl">
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
              Join the
              <br />
              <span className="text-neutral-400">community.</span>
            </h1>
          </div>

          <div className="mt-14 grid border-t border-black/10 pt-7 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="max-w-xl text-[15px] leading-7 text-neutral-600">
                Tell us a little about yourself and your interests. Join a
                community of students exploring technology, building projects
                and learning together.
              </p>
            </div>

            <div className="mt-8 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Membership
              </p>

              <p className="mt-2 text-2xl font-medium tracking-tight text-neutral-950">
                CSE Society
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="border-t border-black/10 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form intro */}
            <div className="lg:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                Application
              </p>

              <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-500">
                Complete the form below with your academic details and
                technical interests.
              </p>

              <p className="mt-8 text-xs leading-5 text-neutral-400">
                Fields marked with * are required.
              </p>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 lg:col-start-5">
              {status === "success" ? (
                <div className="border border-black/10 bg-[#eeece6] p-8 sm:p-12">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                    Application Received
                  </p>

                  <h2 className="mt-6 text-3xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-4xl">
                    Thank you for joining us.
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-500">
                    Your application has been received. The society team will
                    review your details and contact you regarding the next
                    steps.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 border border-black/15 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-black hover:bg-black hover:text-white"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Personal Information */}
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="text-xs tracking-[0.2em] text-neutral-400">
                        01
                      </span>

                      <span className="h-px w-8 bg-black/20" />

                      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Personal Information
                      </h2>
                    </div>

                    <div className="space-y-9">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
                        >
                          Full Name{" "}
                          <span className="text-neutral-900">*</span>
                        </label>

                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className="mt-3 w-full border-b border-black/15 bg-transparent py-4 text-base text-neutral-950 outline-none placeholder:text-neutral-300 focus:border-black"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
                        >
                          Email ID{" "}
                          <span className="text-neutral-900">*</span>
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="mt-3 w-full border-b border-black/15 bg-transparent py-4 text-base text-neutral-950 outline-none placeholder:text-neutral-300 focus:border-black"
                        />
                      </div>

                      {/* Student Email */}
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <label
                            htmlFor="studentEmail"
                            className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
                          >
                            Student Email ID
                          </label>

                          <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                            Optional
                          </span>
                        </div>

                        <input
                          id="studentEmail"
                          name="studentEmail"
                          type="email"
                          autoComplete="email"
                          placeholder="your@student-email"
                          className="mt-3 w-full border-b border-black/15 bg-transparent py-4 text-base text-neutral-950 outline-none placeholder:text-neutral-300 focus:border-black"
                        />

                        <p className="mt-3 text-xs leading-5 text-neutral-400">
                          Use your institute email if you have access to one.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="text-xs tracking-[0.2em] text-neutral-400">
                        02
                      </span>

                      <span className="h-px w-8 bg-black/20" />

                      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Academic Information
                      </h2>
                    </div>

                    <div className="space-y-9">
                      {/* Registration Number */}
                      <div>
                        <label
                          htmlFor="registrationNumber"
                          className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
                        >
                          Registration Number{" "}
                          <span className="text-neutral-900">*</span>
                        </label>

                        <input
                          id="registrationNumber"
                          name="registrationNumber"
                          type="text"
                          required
                          placeholder="Enter your registration number"
                          className="mt-3 w-full border-b border-black/15 bg-transparent py-4 text-base text-neutral-950 outline-none placeholder:text-neutral-300 focus:border-black"
                        />
                      </div>

                      {/* Year */}
                      <div>
                        <label
                          htmlFor="year"
                          className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
                        >
                          Year of Study{" "}
                          <span className="text-neutral-900">*</span>
                        </label>

                        <select
                          id="year"
                          name="year"
                          required
                          defaultValue=""
                          className="mt-3 w-full border-b border-black/15 bg-transparent py-4 text-base text-neutral-950 outline-none focus:border-black"
                        >
                          <option value="" disabled>
                            Select your year
                          </option>

                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Technical Interests */}
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="text-xs tracking-[0.2em] text-neutral-400">
                        03
                      </span>

                      <span className="h-px w-8 bg-black/20" />

                      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                        Technical Interests
                      </h2>
                    </div>

                    <div className="space-y-9">
                      {/* Domain */}
                      <div>
                        <label
                          htmlFor="domain"
                          className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
                        >
                          Primary Domain{" "}
                          <span className="text-neutral-900">*</span>
                        </label>

                        <select
                          id="domain"
                          name="domain"
                          required
                          value={domain}
                          onChange={(event) =>
                            setDomain(event.target.value)
                          }
                          className="mt-3 w-full border-b border-black/15 bg-transparent py-4 text-base text-neutral-950 outline-none focus:border-black"
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

                      {/* Other Domain */}
                      {domain === "Other" && (
                        <div>
                          <label
                            htmlFor="otherDomain"
                            className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
                          >
                            Specify Your Domain{" "}
                            <span className="text-neutral-900">*</span>
                          </label>

                          <input
                            id="otherDomain"
                            name="otherDomain"
                            type="text"
                            required
                            placeholder="Enter your area of interest"
                            className="mt-3 w-full border-b border-black/15 bg-transparent py-4 text-base text-neutral-950 outline-none placeholder:text-neutral-300 focus:border-black"
                          />
                        </div>
                      )}

                      {/* Profile */}
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <label
                            htmlFor="profileUrl"
                            className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
                          >
                            GitHub / LinkedIn / Portfolio
                          </label>

                          <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                            Optional
                          </span>
                        </div>

                        <input
                          id="profileUrl"
                          name="profileUrl"
                          type="url"
                          placeholder="https://..."
                          className="mt-3 w-full border-b border-black/15 bg-transparent py-4 text-base text-neutral-950 outline-none placeholder:text-neutral-300 focus:border-black"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="border-t border-black/10 pt-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-md text-xs leading-5 text-neutral-400">
                        By submitting this form, you confirm that the
                        information provided is accurate and may be used by the
                        CSE Society for membership-related communication.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex shrink-0 items-center justify-center gap-5 bg-black px-7 py-4 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting
                          ? "Submitting..."
                          : "Submit Application"}

                        {!isSubmitting && <span>→</span>}
                      </button>
                    </div>
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="border border-red-900/10 bg-red-50 px-5 py-4">
                      <p className="text-sm text-red-800">
                        Something went wrong while submitting your
                        application. Please try again.
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}