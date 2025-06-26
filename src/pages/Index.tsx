
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <SpecialOffers />
      <Footer />
    </div>
  );
};

export default Index;
