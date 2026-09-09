import Hero from "@/components/home/Hero";
import TechMarquee from "@/components/ui/TechMarquee";
import Intro from "@/components/home/Intro";
import TypographicTransition from "@/components/home/TypographicTransition";
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
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Signature Single Tech Marquee Banner */}
      <div className="border-b border-black/15 bg-[#141413] py-1 text-white">
        <TechMarquee items={primaryTechStack} direction="left" speed={28} variant="dark" />
      </div>

      {/* 3. Introduction Editorial Section */}
      <Intro />

      {/* 4. Typographic Transition Sequence */}
      <TypographicTransition />

      {/* 5. Impact Pillars */}
      <Impact />

      {/* 6. Featured Events Showcase */}
      <FeaturedEvents />

      {/* 7. Workshops Technical Index */}
      <WorkshopsPreview />

      {/* 8. Student Projects ("WHAT WE BUILD") */}
      <ProjectShowcase />

      {/* 9. Domain Tech Ticker Strip */}
      <div className="border-y border-black/15 bg-[#faf9f6]">
        <TechMarquee items={secondaryDomains} direction="right" speed={32} variant="default" />
      </div>

      {/* 10. CSE @ BIT Sindri Departmental Academics */}
      <CseAtBits />

      {/* 11. Featured Alumni Stories */}
      <AlumniPreview />

      {/* 12. Culture & Moments Gallery */}
      <GalleryPreview />

      {/* 13. Final High-Impact CTA */}
      <JoinCta />
    </main>
  );
}