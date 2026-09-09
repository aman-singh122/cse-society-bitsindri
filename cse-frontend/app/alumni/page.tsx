import React from "react";
import Link from "next/link";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechMarquee from "@/components/ui/TechMarquee";
import { ArrowRight, ArrowUpRight, Briefcase, GraduationCap, MapPin } from "lucide-react";

const featuredAlumni = [
  {
    year: "BIT Sindri",
    name: "Swati Jha",
    role: "Microsoft",
    companyBg: "MICROSOFT",
    description:
      "An alumna of BIT Sindri who has built her professional career in the technology industry at Microsoft.",
  },
  {
    year: "BIT Sindri",
    name: "Ruma Karn",
    role: "Amazon",
    companyBg: "AMAZON",
    description:
      "An alumna of BIT Sindri working in the technology industry at Amazon.",
  },
];

const alumniDirectory = [
  {
    name: "Sujeet Srivastava",
    batch: "B.Tech. '93",
    role: "CEO · Arenyam Technologies",
    location: "Technology Leadership",
  },
  {
    name: "Pratik Kumar",
    batch: "B.Tech. '11",
    role: "Full Stack Developer · ML / GenAI",
    location: "AI & Full Stack",
  },
  {
    name: "Ravi Shankar",
    batch: "B.Tech. '22",
    role: "Associate Software Engineer · Xiaomi India",
    location: "Consumer Tech",
  },
  {
    name: "Kumar Abhishek",
    batch: "B.Tech. '24",
    role: "Software Engineer · Samsung R&D",
    location: "R&D Engineering",
  },
];

export default function AlumniPage() {
  return (
    <main className="pt-24 w-full overflow-x-hidden">
      {/* Hero */}
      <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <TechnicalLabel index="ALUMNI / 01" title="GLOBAL NETWORK" category="BIT SINDRI" />

          <div className="mt-8 max-w-6xl">
            <h1 className="text-clamp-hero font-semibold tracking-[-0.055em] text-[#141413]">
              Built here. <br />
              <span className="text-neutral-400 font-normal">Making an impact beyond.</span>
            </h1>
          </div>

          <div className="mt-14 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-base leading-8 text-neutral-600 sm:text-lg">
                The CSE community extends far beyond campus walls. Our graduates lead software engineering teams, build startups, research AI systems, and mentor students across global technology hubs.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">
                GRADUATING CLASS SINCE
              </span>
              <p className="mt-1 font-mono text-5xl font-bold tracking-tight text-[#141413]">
                1987
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <TechMarquee
        items={["MICROSOFT", "AMAZON", "SAMSUNG R&D", "XIAOMI INDIA", "ARENYAM TECH", "FULL STACK", "GEN AI"]}
        speed={30}
        variant="dark"
      />

      {/* Featured Alumni Stories */}
      <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="02" title="FEATURED STORIES" category="ALUMNI HIGHLIGHTS" />
            <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
              Pioneers in industry.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {featuredAlumni.map((person) => (
                <div
                  key={person.name}
                  className="group relative overflow-hidden border border-black/15 bg-[#f5f3ee] p-8 transition-all duration-500 hover:border-black hover:shadow-2xl sm:p-12"
                >
                  <div className="pointer-events-none absolute right-4 bottom-2 font-mono text-7xl font-black uppercase text-black/[0.04] select-none transition-all duration-500 group-hover:scale-105 group-hover:text-black/[0.08]">
                    {person.companyBg}
                  </div>

                  <div className="relative z-10 flex flex-col justify-between min-h-[280px]">
                    <div>
                      <span className="border border-black/15 bg-[#faf9f6] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-black">
                        {person.role}
                      </span>

                      <h3 className="mt-8 text-4xl font-medium tracking-tight text-[#141413] sm:text-5xl">
                        {person.name}
                      </h3>

                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
                        {person.year} — {person.role}
                      </p>
                    </div>

                    <div className="mt-8 border-t border-black/10 pt-6">
                      <p className="text-sm leading-6 text-neutral-600">
                        {person.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Directory Table */}
      <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="03" title="ALUMNI DIRECTORY" category="COMMUNITY" />
            <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
              A network that keeps <span className="text-neutral-400 font-normal">growing.</span>
            </h2>

            <div className="mt-14 border-t border-black/15">
              {alumniDirectory.map((person) => (
                <div
                  key={person.name}
                  className="group grid gap-4 border-b border-black/15 py-7 transition-colors hover:bg-black/[0.015] sm:grid-cols-12 sm:items-center"
                >
                  <div className="sm:col-span-2">
                    <span className="font-mono text-xs font-semibold text-neutral-400 group-hover:text-black">
                      {person.batch}
                    </span>
                  </div>

                  <div className="sm:col-span-4">
                    <h3 className="text-xl font-semibold text-[#141413]">
                      {person.name}
                    </h3>
                  </div>

                  <div className="sm:col-span-6 sm:text-right">
                    <p className="font-mono text-xs font-medium uppercase tracking-wider text-neutral-700">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Connect Banner */}
      <section className="bg-[#141413] px-4 py-20 text-[#f5f3ee] sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="04" title="ALUMNI ENGAGEMENT" category="MENTORSHIP" dark />

            <h2 className="mt-8 max-w-4xl text-clamp-section font-medium leading-tight text-[#f5f3ee]">
              The connection doesn't end <br />
              <span className="text-white/40">when you leave campus.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
              Alumni interaction, mentorship programs, resume reviews, and techtalks bridge different generations of BIT Sindri CSE engineers.
            </p>

            <Link
              href="/join"
              className="mt-10 inline-flex items-center gap-3 bg-white px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#141413] transition-all hover:bg-neutral-200"
            >
              <span>CONNECT WITH THE SOCIETY</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}