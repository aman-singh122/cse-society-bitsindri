"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Terminal, Code2, Cpu, Zap, ShieldCheck } from "lucide-react";
import FloatingTechElements from "@/components/ui/FloatingTechElements";
import TechnicalLabel from "@/components/ui/TechnicalLabel";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden border-b border-black/15 bg-[#f5f3ee] px-4 pt-28 pb-16 sm:px-6 lg:px-10 lg:pt-36 lg:pb-24">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Floating technical elements */}
      <FloatingTechElements />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-between">
        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-3 border border-black/15 bg-[#faf9f6]/90 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <TechnicalLabel
              index="01 / INDEX"
              title="BIT SINDRI"
              category="COMPUTER SCIENCE & ENGINEERING"
            />
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-neutral-500">
            <span className="border border-black/10 bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
              LIVE SYSTEM v2.6
            </span>
            <span className="flex items-center gap-1.5 text-neutral-600">
              <ShieldCheck size={14} className="text-emerald-700" />
              OFFICIAL SOCIETY PORTAL
            </span>
          </div>
        </div>

        {/* Hero Main Content Grid */}
        <div className="my-10 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headlines & Subtitle */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              <Code2 size={14} className="text-black" />
              INNOVATION & ACADEMIC EXCELLENCE
            </div>

            <h1 className="text-clamp-hero font-extrabold tracking-[-0.055em] text-[#141413] leading-[0.92]">
              COMPUTER SCIENCE <br />
              <span className="text-neutral-400 font-normal">& ENGINEERING</span>
            </h1>

            <div className="mt-6 max-w-2xl">
              <p className="text-clamp-section font-semibold tracking-tight text-[#141413]">
                Where ideas <span className="text-neutral-500 italic font-serif">become impact.</span>
              </p>
              <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                The premier official technology organization at BIT Sindri. We cultivate software engineers, competitive coders, AI researchers, and open-source contributors.
              </p>
            </div>
          </div>

          {/* Right Column: Live Interactive Developer Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="relative border border-black/20 bg-[#141413] p-6 text-[#f5f3ee] shadow-2xl transition-all duration-300 hover:shadow-3xl">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/90" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/90" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/90" />
                </div>
                <span className="font-mono text-[11px] tracking-widest text-neutral-400">
                  cse-bitsindri:~ terminal
                </span>
              </div>

              {/* Terminal Code Content */}
              <div className="mt-4 space-y-3 font-mono text-xs leading-relaxed text-neutral-300">
                <p className="text-emerald-400 flex items-center gap-1.5">
                  <Terminal size={14} /> $ cse-society init --batch=2026
                </p>
                <div className="pl-4 space-y-1 text-neutral-400">
                  <p>✔ Department: <span className="text-white font-semibold">CSE @ BIT Sindri</span></p>
                  <p>✔ Established: <span className="text-amber-300">1987</span></p>
                  <p>✔ Active Alumni: <span className="text-white">1000+ Worldwide</span></p>
                  <p>✔ Domains: <span className="text-sky-300">AI/ML, CP, Web, DevOps</span></p>
                </div>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-amber-300 font-medium animate-pulse flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    ❯ Ready to build the future of tech.
                  </p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/15 pt-4 text-center">
                <div className="border-r border-white/10 pr-2">
                  <p className="font-mono text-lg font-bold text-white">500+</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">Members</p>
                </div>
                <div className="border-r border-white/10 pr-2">
                  <p className="font-mono text-lg font-bold text-emerald-400">45+</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">Hackathons</p>
                </div>
                <div>
                  <p className="font-mono text-lg font-bold text-sky-300">100%</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">Student Run</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Asymmetric CTA Row */}
        <div className="grid gap-8 border-t border-black/15 pt-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center gap-4 font-mono text-xs text-neutral-600">
              <span className="flex items-center gap-1.5 font-bold text-black">
                <Cpu size={15} />
                EST. 1987
              </span>
              <span>•</span>
              <span className="font-semibold text-neutral-800">1000+ ALUMNI NETWORK</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <Zap size={13} /> ACTIVE
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center md:col-span-6 md:justify-end lg:col-span-7">
            <Link
              href="/join"
              className="group inline-flex items-center justify-center gap-3 border border-black/20 bg-[#141413] px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f3ee] transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl"
            >
              <span>Join Society</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/events"
              className="group inline-flex items-center justify-center gap-3 border border-black/20 bg-white px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#141413] transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:shadow-lg"
            >
              <span>Explore Events</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Footer Metadata */}
        <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-black animate-ping" />
            SCROLL TO EXPLORE ↓
          </span>
          <span className="hidden sm:inline-block">CSE / BIT SINDRI · 2026 EDITION</span>
        </div>
      </div>
    </section>
  );
}