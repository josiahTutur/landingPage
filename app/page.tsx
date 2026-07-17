import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SkillBand from "@/components/SkillBand";
import CommunityPhoto from "@/components/CommunityPhoto";
import Togetherness from "@/components/Togetherness";
import StatBand from "@/components/StatBand";
import DLDSection from "@/components/DLDSection";
import Pilot from "@/components/Pilot";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SkillBand />
      <CommunityPhoto />
      <Togetherness />
      <StatBand />
      <DLDSection />
      <Pilot />
      <Contact />
    </>
  );
}
