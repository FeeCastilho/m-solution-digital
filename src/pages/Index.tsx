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
import SectionDivider from "@/components/SectionDivider";

const white = "hsl(220 20% 97%)";
const soft = "hsl(220 18% 94%)";
const warm = "hsl(215 20% 92%)";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CircuitBackground />
      <Header />

      {/* Hero — default bg */}
      <HeroSection />
      <SectionDivider variant="wave" from={white} to={soft} />

      {/* Problems — soft bg */}
      <div style={{ background: soft }}>
        <ProblemsSection />
      </div>
      <SectionDivider variant="curve" from={soft} to={white} />

      {/* Solution — default bg */}
      <SolutionSection />
      <SectionDivider variant="wave" from={white} to={warm} />

      {/* Method — warm bg */}
      <div style={{ background: warm }}>
        <MethodSection />
      </div>
      <SectionDivider variant="curve" from={warm} to={white} />

      {/* Services — default bg */}
      <ServicesSection />
      <SectionDivider variant="wave" from={white} to={soft} />

      {/* Social Proof — soft bg */}
      <div style={{ background: soft }}>
        <SocialProofSection />
      </div>
      <SectionDivider variant="curve" from={soft} to={white} />

      {/* Testimonials — default bg */}
      <TestimonialsSection />
      <SectionDivider variant="wave" from={white} to={warm} />

      {/* Authority — warm bg */}
      <div style={{ background: warm }}>
        <AuthoritySection />
      </div>
      <SectionDivider variant="curve" from={warm} to={white} />

      {/* Scarcity */}
      <ScarcitySection />
      <SectionDivider variant="wave" from={white} to={soft} />

      {/* FAQ — soft bg */}
      <div style={{ background: soft }}>
        <FaqSection />
      </div>
      <SectionDivider variant="curve" from={soft} to={white} />

      {/* Final CTA */}
      <FinalCtaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
