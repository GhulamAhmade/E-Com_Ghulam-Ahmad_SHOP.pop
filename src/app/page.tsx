import Image from "next/image";
import { Hero } from "./components/Hero";
import { MensSection } from "./components/MensSection";
import { Testimonial } from "./components/Testimonial";
import { WomensSection } from "./components/HotOffers";

export default function Home() {
  return (
    <main>
      <Hero />
      <MensSection />
      <WomensSection />
      <Testimonial />
    </main>
  );
}
