
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WelcomeSection />
        <CategoryGrid />
        <FeaturedProducts />
        <SpecialOffers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
