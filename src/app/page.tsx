import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProgramsSection from "@/components/ProgramsSection";
import PricingSection from "@/components/PricingSection";
import TransformationSection from "@/components/TransformationSection";
import GallerySection from "@/components/GallerySection";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gym-dark text-gym-text">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <PricingSection />
      <TransformationSection />
      <GallerySection />
      <CTAFinalSection />
      <Footer />
    </main>
  );
}
