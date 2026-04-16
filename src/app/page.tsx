import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PainPointsSection from "@/components/PainPointsSection";
import ProgramsSection from "@/components/ProgramsSection";
import PricingSection from "@/components/PricingSection";
import TransformationSection from "@/components/TransformationSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-gym-dark text-gym-text">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PainPointsSection />
      <ProgramsSection />
      <PricingSection />
      <TransformationSection />
      <GallerySection />
      <FAQSection />
      <CTAFinalSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
