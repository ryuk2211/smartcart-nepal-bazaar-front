
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-nepali-crimson via-nepali-saffron to-nepali-gold text-white py-16 px-4 animate-fade-in">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            🪔 तिहार विशेष 🪔
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Festival Special Offers
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Celebrate this Tihar with amazing discounts up to 70% OFF
            <br />
            Free home delivery across Kathmandu Valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-nepali-crimson hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Shop Festival Deals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nepali-crimson font-semibold px-8 py-4 text-lg">
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
