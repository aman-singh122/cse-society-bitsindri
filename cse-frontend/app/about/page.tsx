import React from "react";
import Link from "next/link";
import TechnicalLabel from "@/components/ui/TechnicalLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechMarquee from "@/components/ui/TechMarquee";
import { ArrowRight, ArrowUpRight, Award, Beaker, BookOpen, Clock } from "lucide-react";

const areas = [
  "Algorithms & Data Structures",
  "Artificial Intelligence",
  "Computer Networks",
  "Database Systems",
  "Operating Systems",
  "Software Engineering",
  "Compiler Design",
  "Advanced Programming",
];

const labs = [
  "DBMS Lab",
  "DAA Lab",
  "Operating System Lab",
  "Compiler Design Lab",
  "Computer Architecture Lab",
  "Computer Networks Lab",
  "Artificial Intelligence Lab",
  "Software Engineering Lab",
];

const timeline = [
  { year: "1987", title: "Department Established", desc: "Founding of the Department of Computer Science & Engineering at BIT Sindri." },
  { year: "1991", title: "First Batch Graduated", desc: "First cohort of B.Tech CSE graduates entered leading tech industries and academia." },
  { year: "2010s", title: "Expansion of Computing Infrastructure", desc: "State-of-the-art labs and high-speed network facilities added across campus." },
  { year: "Present", title: "Student Society & AI Era", desc: "Active student community building modern web platforms, competitive programming culture, and AI research." },
];

export default function AboutPage() {
  return (
    <main className="pt-24 w-full overflow-x-hidden">
      {/* Hero */}
      <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <TechnicalLabel index="ABOUT / 01" title="DEPARTMENT & SOCIETY" category="BIT SINDRI" />

          <div className="mt-8 max-w-6xl">
            <h1 className="text-clamp-hero font-semibold tracking-[-0.055em] text-[#141413]">
              Computer Science <br />
              <span className="text-neutral-400 font-normal">& Engineering.</span>
            </h1>
          </div>

          <div className="mt-14 grid gap-8 border-t border-black/15 pt-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">
                FOUNDATION YEAR
              </p>
              <p className="mt-2 font-mono text-6xl font-bold tracking-tight text-[#141413] sm:text-7xl">
                1987
              </p>
            </div>

            <div className="lg:col-span-8 lg:pl-6">
              <p className="text-base leading-8 text-neutral-600 sm:text-lg">
                The Department of Computer Science & Engineering at BIT Sindri has been a cornerstone of engineering education since 1987. We combine deep theoretical computer science with evolving software paradigms, empowering students to innovate across web technologies, systems programming, and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Accent */}
      <TechMarquee
        items={["EST. 1987", "BIT SINDRI", "COMPUTATIONAL EXCELLENCE", "SOFTWARE ENGINEERING", "SYSTEM DESIGN"]}
        speed={25}
        variant="dark"
      />

      {/* History Timeline Section */}
      <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="02" title="DEPARTMENT LEGACY" category="TIMELINE" />
            <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
              Four decades of <span className="text-neutral-400 font-normal">engineering education.</span>
            </h2>

            <div className="mt-16 border-t border-black/15">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className="group grid gap-6 border-b border-black/15 py-8 md:grid-cols-12 md:items-center"
                >
                  <div className="md:col-span-3">
                    <span className="font-mono text-3xl font-bold tracking-tight text-neutral-400 group-hover:text-black transition-colors">
                      {item.year}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-xl font-semibold text-[#141413] group-hover:text-black">
                      {item.title}
                    </h3>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-sm leading-6 text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Academic Disciplines Grid */}
      <section className="border-b border-black/15 bg-[#f5f3ee] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="03" title="CURRICULUM FOCUS" category="AREAS OF STUDY" />
            <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
              From fundamentals <span className="text-neutral-400 font-normal">to modern tech.</span>
            </h2>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area, index) => (
                <div
                  key={area}
                  className="group flex flex-col justify-between border border-black/15 bg-[#faf9f6] p-6 transition-all duration-300 hover:border-black hover:shadow-lg"
                >
                  <span className="font-mono text-xs font-semibold text-neutral-400 group-hover:text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-8">
                    <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#141413]">
                      {area}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Laboratories Catalog */}
      <section className="border-b border-black/15 bg-[#faf9f6] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="04" title="INFRASTRUCTURE" category="LABORATORIES" />
            <h2 className="mt-4 text-clamp-display font-medium tracking-tight text-[#141413]">
              Dedicated computing <span className="text-neutral-400 font-normal">labs.</span>
            </h2>

            <div className="mt-14 border-t border-black/15">
              {labs.map((lab, index) => (
                <div
                  key={lab}
                  className="group flex items-center justify-between border-b border-black/15 py-6 transition-colors hover:bg-black/[0.015]"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold text-[#141413]">
                      {lab}
                    </span>
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 group-hover:text-black">
                    DEPT OF CSE · BIT SINDRI
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Society Vision Dark CTA */}
      <section className="bg-[#141413] px-4 py-20 text-[#f5f3ee] sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <TechnicalLabel index="05" title="SOCIETY MANDATE" category="VISION" dark />

            <h2 className="mt-8 max-w-4xl text-clamp-section font-medium leading-tight text-[#f5f3ee]">
              The department provides the foundation. <br />
              <span className="text-white/40">The community takes it forward.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/70">
              The CSE Society is a student-run ecosystem fostering continuous learning, competition, project development, and alumni mentorship beyond classroom bounds.
            </p>

            <div className="mt-10">
              <Link
                href="/events"
                className="group inline-flex items-center gap-3 bg-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#141413] transition-all hover:bg-neutral-200"
              >
                <span>EXPLORE SOCIETY ACTIVITIES</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}