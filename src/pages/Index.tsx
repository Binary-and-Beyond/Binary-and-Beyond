import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Stacked sticky sections with spacers to advance scroll */}
      <div className="relative">
        <div className="sticky top-0 h-screen z-[10] overflow-hidden bg-background">
          <HeroSection />
        </div>
        <div className="h-screen" />

        <div className="sticky top-0 h-screen z-[20] overflow-hidden bg-background">
          <ServicesSection />
        </div>
        <div className="h-screen" />

        <div className="sticky top-0 h-screen z-[30] overflow-hidden bg-background">
          <TeamSection />
        </div>
        <div className="h-screen" />

        <div className="sticky top-0 h-screen z-[40] overflow-hidden bg-background">
          <PortfolioSection />
        </div>
        <div className="h-[40vh]" />

        <div className="sticky top-0 h-screen z-[50] overflow-hidden bg-background">
          <ContactSection />
        </div>
        {/* Final spacer so footer appears after last pinned section */}
        <div className="h-[24vh]" />
      </div>
      <div className="relative z-[60]">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
