import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LangTicker from "@/components/LangTicker";
import ThesisBand from "@/components/ThesisBand";
import HowItWorks from "@/components/HowItWorks";
import WhyTutur from "@/components/WhyTutur";
import CueSystem from "@/components/CueSystem";
import Testimonial from "@/components/Testimonial";
import Pilot from "@/components/Pilot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LangTicker />
      <ThesisBand />
      <HowItWorks />
      <WhyTutur />
      <CueSystem />
      <Testimonial />
      <Pilot />
      <Footer />
    </>
  );
}
