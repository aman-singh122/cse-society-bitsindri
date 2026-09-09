import Hero from "@/components/home/Hero";
import TechMarquee from "@/components/ui/TechMarquee";
import Intro from "@/components/home/Intro";
import Impact from "@/components/home/Impact";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import WorkshopsPreview from "@/components/home/WorkshopsPreview";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import CseAtBits from "@/components/home/CseAtBits";
import AlumniPreview from "@/components/home/AlumniPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import JoinCta from "@/components/home/JoinCta";

const primaryTechStack = [
  "TYPESCRIPT",
  "PYTHON",
  "C++",
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "MONGODB",
  "DOCKER",
  "GIT & GITHUB",
  "AI & ML",
  "CYBERSECURITY",
  "SYSTEM ARCHITECTURE",
];

const secondaryDomains = [
  "COMPETITIVE PROGRAMMING",
  "OPEN SOURCE",
  "CLOUD DEPLOYMENT",
  "DEEP LEARNING",
  "FULL STACK ENGINEERING",
  "DISTRIBUTED SYSTEMS",
];

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Technology Marquee */}
      <div className="border-b border-black/15 bg-[#141413] py-1 text-white">
        <TechMarquee
          items={primaryTechStack}
          direction="left"
          speed={28}
          variant="dark"
        />
      </div>

      {/* 3. Introduction */}
      <Intro />

      {/* 4. Interactive Society Pillars */}
      <Impact />

      {/* 5. Featured Events */}
      <FeaturedEvents />

      {/* 6. Workshops */}
      <WorkshopsPreview />

      {/* 7. What We Build */}
      <ProjectShowcase />

      {/* 8. Secondary Domain Marquee */}
      <div className="border-y border-black/15 bg-[#faf9f6]">
        <TechMarquee
          items={secondaryDomains}
          direction="right"
          speed={32}
          variant="default"
        />
      </div>

      {/* 9. CSE @ BIT Sindri */}
      <CseAtBits />

      {/* 10. Alumni */}
      <AlumniPreview />

      {/* 11. Gallery */}
      <GalleryPreview />

      {/* 12. Final CTA */}
      <JoinCta />
    </main>
  );
}