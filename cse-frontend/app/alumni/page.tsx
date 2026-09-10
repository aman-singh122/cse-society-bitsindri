"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { alumni, Alumni } from "@/data/alumni";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

export default function AlumniPage() {
  const [activeAlumni, setActiveAlumni] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlumni = useMemo(() => {
    if (!searchQuery.trim()) return alumni;
    const q = searchQuery.toLowerCase();
    return alumni.filter(
      (person) =>
        person.name.toLowerCase().includes(q) ||
        person.company.toLowerCase().includes(q) ||
        person.role.toLowerCase().includes(q) ||
        person.batch.toString().includes(q)
    );
  }, [searchQuery]);

  const featuredAlumni = alumni.slice(0, 4);

  const companyMarquee = useMemo(() => {
    const companies = Array.from(
      new Set(alumni.map((a) => a.company.toUpperCase()))
    );
    return [...companies, ...companies];
  }, []);

  return (
    <main className="alumni-page w-full overflow-x-hidden bg-[#f7f6f1] text-[#151514]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="border-b border-black/10 px-5 pb-12 pt-28 sm:px-8 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.24em] text-neutral-400 sm:text-[9px]">
            <span>01</span>
            <span className="h-px w-8 bg-black/20" />
            <span className="font-semibold text-neutral-600">
              ALUMNI NETWORK & COMMUNITY
            </span>
            <span className="text-neutral-300">/</span>
            <span>BIT SINDRI</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="max-w-5xl text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.8] tracking-[-0.08em]">
                Built here.
                <br />
                <span className="text-black/25">Impact beyond.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
                The Department of Computer Science & Engineering at BIT Sindri boasts an exceptional, tightly-knit alumni network holding key positions globally—from tech giants like Microsoft, Google, AWS, PayPal, Samsung, and JPMorgan Chase to prominent public sector institutions. Hundreds of accomplished alumni continue actively giving back, mentoring students, and connecting the CSE community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-5 lg:col-span-4 lg:border-t-0 lg:pt-0">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                  PROFILES FEATURED
                </span>

                <div className="mt-1 text-4xl font-medium tracking-[-0.06em]">
                  {String(alumni.length).padStart(2, "0")}+
                </div>
              </div>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                  ALUMNI BOND
                </span>

                <div className="mt-2 font-mono text-[9px] leading-4 tracking-[0.12em] text-neutral-600">
                  STRONG CONNECTION
                  <br />
                  TOP GLOBAL POSTS
                  <br />
                  ACTIVE MENTORSHIP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MARQUEE
      ========================================================= */}

      <div className="overflow-hidden border-b border-black/10 bg-[#151514] py-2.5 text-white">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-10 whitespace-nowrap font-mono text-[9px] tracking-[0.2em] text-white/60">
          {companyMarquee.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-10">
              {item}
              <span className="text-white/20">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================
          FEATURED STORIES
      ========================================================= */}

      <section className="border-b border-black/10 bg-[#faf9f6] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                <span>02</span>
                <span className="h-px w-7 bg-black/20" />
                <span>FEATURED ALUMNI</span>
              </div>

              <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                Pioneers in <span className="text-black/25">industry.</span>
              </h2>
            </div>

            <Link
              href="/join"
              className="hidden items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] sm:flex"
            >
              CONNECT WITH US
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {featuredAlumni.map((person, index) => {
              const active = activeAlumni === person.name;

              return (
                <article
                  key={person.name}
                  onMouseEnter={() => setActiveAlumni(person.name)}
                  onMouseLeave={() => setActiveAlumni(null)}
                  className="group relative min-h-[300px] overflow-hidden border border-black/10 bg-[#f5f3ee] p-6 transition-all duration-500 hover:border-black hover:shadow-xl sm:p-8 flex flex-col justify-between"
                >
                  {/* Watermark */}
                  <div
                    className={`pointer-events-none absolute -bottom-3 right-3 select-none font-mono text-6xl font-black tracking-[-0.08em] text-black/[0.035] transition-all duration-700 sm:text-7xl ${
                      active ? "translate-x-2 scale-105 text-black/[0.07]" : ""
                    }`}
                  >
                    {person.company.toUpperCase().slice(0, 10)}
                  </div>

                  {/* Top */}
                  <div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] font-semibold text-neutral-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-6 bg-black/15" />

                        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                          BIT SINDRI · BATCH '{String(person.batch).slice(-2)}
                        </span>
                      </div>

                      <span className="border border-black/10 bg-[#faf9f6] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#151514]">
                        {person.company}
                      </span>
                    </div>

                    {/* Name & Role */}
                    <div className="relative z-10 mt-8">
                      <h3 className="text-[clamp(2.2rem,3.5vw,3.8rem)] font-medium leading-[0.9] tracking-[-0.07em]">
                        {person.name}
                      </h3>

                      <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-neutral-600">
                        {person.role}
                      </p>

                      <p className="mt-1 font-mono text-[11px] text-neutral-500">
                        {person.company}
                      </p>
                    </div>
                  </div>

                  {/* Bottom LinkedIn CTA */}
                  <div className="relative z-10 mt-8 flex items-center justify-between border-t border-black/10 pt-4">
                    <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500">
                      <BriefcaseBusiness size={12} />
                      {person.company}
                    </div>

                    <a
                      href={person.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-black/15 bg-black px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-md"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECTORY
      ========================================================= */}

      <section className="border-b border-black/10 bg-[#f7f6f1] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                <span>03</span>
                <span className="h-px w-7 bg-black/20" />
                <span>ALUMNI DIRECTORY</span>
              </div>

              <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                A network that <span className="text-black/25">keeps growing.</span>
              </h2>
            </div>

            {/* Search Box */}
            <div className="flex items-center gap-4">
              <div className="relative w-full sm:w-64">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Search alumni or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-black/15 bg-white py-2 pl-9 pr-3 font-mono text-xs text-[#151514] placeholder-neutral-400 outline-none transition-all duration-300 focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              <span className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                {String(filteredAlumni.length).padStart(2, "0")} PROFILES
              </span>
            </div>
          </div>

          {/* Directory Rows */}
          <div className="mt-9 border-t border-black/10">
            {filteredAlumni.length === 0 ? (
              <div className="py-12 text-center font-mono text-xs text-neutral-500">
                No alumni profiles matching "{searchQuery}"
              </div>
            ) : (
              filteredAlumni.map((person, index) => (
                <article
                  key={`${person.name}-${index}`}
                  className="group grid gap-3 border-b border-black/10 py-5 transition-all duration-300 hover:bg-black/[0.025] sm:grid-cols-12 sm:items-center sm:gap-5 sm:px-3"
                >
                  <div className="sm:col-span-1">
                    <span className="font-mono text-[9px] font-semibold text-neutral-400 group-hover:text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="sm:col-span-4">
                    <h3 className="text-lg font-medium tracking-tight text-[#151514] group-hover:text-black">
                      {person.name}
                    </h3>

                    <span className="inline-block mt-0.5 rounded-full border border-black/10 bg-[#faf9f6] px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-600">
                      B.Tech. '{String(person.batch).slice(-2)}
                    </span>
                  </div>

                  <div className="sm:col-span-4">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-700">
                      {person.role}
                    </p>

                    <p className="mt-0.5 font-mono text-xs text-neutral-500">
                      {person.company}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:col-span-3 sm:justify-end sm:gap-4">
                    <a
                      href={person.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-black/15 bg-white px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#151514] transition-all duration-300 hover:border-black hover:bg-[#151514] hover:text-white shadow-sm"
                      title={`View ${person.name}'s LinkedIn profile`}
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight size={13} strokeWidth={2} />
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* EXPANSIVE NETWORK NOTE */}
          <div className="alumni-callout-box mt-12 rounded-none border border-black/15 bg-[#faf9f6] p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  <Globe2 size={13} className="text-black" />
                  <span>EXPANSIVE ALUMNI FOOTPRINT</span>
                </div>

                <h3 className="mt-3 text-2xl font-medium tracking-tight text-[#151514] sm:text-3xl">
                  Hundreds more alumni across leadership & engineering roles
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Beyond the spotlight directory, hundreds of BIT Sindri Computer Science & Engineering alumni hold distinguished positions as Vice Presidents, Senior Software Engineers, Engineering Leads, AI Researchers, and Founders in major technology companies and public sector organizations worldwide. The CSE department takes immense pride in maintaining a strong, active alumni network that continuously fosters mentorship, career guidance, and industry collaboration for current students.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 border-t border-black/10 pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#151514]">
                  <HeartHandshake size={14} className="text-black" />
                  <span>Strong Alumni Bond</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#151514]">
                  <Users size={14} className="text-black" />
                  <span>Active Mentorship</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#151514]">
                  <BriefcaseBusiness size={14} className="text-black" />
                  <span>Global Industry Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MENTORSHIP CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#151514] px-5 py-12 text-[#f7f6f1] sm:px-8 lg:px-10 lg:py-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/[0.05]" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full border border-dashed border-white/[0.05]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
            <span>04</span>
            <span className="h-px w-7 bg-white/15" />
            <span>ALUMNI ENGAGEMENT</span>
            <span>/</span>
            <span>MENTORSHIP</span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.85] tracking-[-0.07em]">
                The connection
                <br />
                <span className="text-white/25">continues.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-[13px] leading-relaxed text-white/55 sm:text-[14px]">
                With a rich history spanning decades, our alumni hold prestigious positions across leading tech giants and enterprises globally. The strong CSE alumni bond ensures continuous mentorship, technical guidance, and career opportunities for every aspiring engineer at BIT Sindri.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/join"
                className="group inline-flex w-fit items-center gap-3 bg-[#f7f6f1] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#151514] transition-all duration-300 hover:-translate-y-1"
              >
                Connect With Society
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* local animation */}
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}