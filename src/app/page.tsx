import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import FlavorsSection from "@/sections/FlavorsSection";
import LifestyleSection from "@/sections/LifestyleSection";
import WhereToBuySection from "@/sections/WhereToBuySection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FlavorsSection />
        <LifestyleSection />
        <WhereToBuySection />
        <FooterSection />
      </main>
    </SmoothScroll>
  );
}
