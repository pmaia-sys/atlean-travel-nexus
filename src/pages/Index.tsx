import Hero from "@/components/Hero";
import SolutionOverview from "@/components/SolutionOverview";
import ModulesSection from "@/components/ModulesSection";
import InvestmentSection from "@/components/InvestmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SolutionOverview />
      <ModulesSection />
      <InvestmentSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
