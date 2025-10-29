import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GoalCategories from "@/components/GoalCategories";
import PortionSizes from "@/components/PortionSizes";
import MenuSection from "@/components/MenuSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <GoalCategories />
      <PortionSizes />
      <MenuSection />
      <GuaranteeSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
