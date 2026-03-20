import CircuitBackground from "@/components/CircuitBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import MethodSection from "@/components/MethodSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AuthoritySection from "@/components/AuthoritySection";
import ScarcitySection from "@/components/ScarcitySection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CircuitBackground />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <MethodSection />
      <ServicesSection />
      <SocialProofSection />
      <TestimonialsSection />
      <AuthoritySection />
      <ScarcitySection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
