import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Impact from "@/components/home/Impact";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import WorkshopsPreview from "@/components/home/WorkshopsPreview";
import CseAtBits from "@/components/home/CseAtBits";
import AlumniPreview from "@/components/home/AlumniPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import JoinCta from "@/components/home/JoinCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Impact />
      <FeaturedEvents />
      <WorkshopsPreview />
      <CseAtBits />
      <AlumniPreview />
      <GalleryPreview />
      <JoinCta />
    </main>
  );
}