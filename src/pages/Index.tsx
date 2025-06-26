
import { useState } from "react";
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footer";
import CategoryModal from "@/components/CategoryModal";
import ProductModal from "@/components/ProductModal";

const categories = [
  {
    id: 1,
    name: "Food & Snacks",
    icon: "🍽️",
    description: "Fresh groceries & snacks",
    items: "35+ items"
  },
  {
    id: 2,
    name: "Beverages",
    icon: "🥤",
    description: "Drinks & beverages",
    items: "25+ items"
  },
  {
    id: 3,
    name: "Beauty & Care",
    icon: "💄",
    description: "Beauty & personal care",
    items: "30+ items"
  },
  {
    id: 4,
    name: "Daily Essentials",
    icon: "🧴",
    description: "Daily necessities",
    items: "40+ items"
  },
  {
    id: 5,
    name: "Household Items",
    icon: "🏠",
    description: "Home & kitchen",
    items: "32+ items"
  },
  {
    id: 6,
    name: "Electronics",
    icon: "📱",
    description: "Electronics & gadgets",
    items: "28+ items"
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleCategoryClick = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    if (category) {
      console.log(`Opening category from header: ${categoryName}`);
      setSelectedCategory(category);
    }
  };

  const handleProductClick = (product: any) => {
    console.log(`Opening product from header navigation: ${product.name}`);
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: any) => {
    console.log(`Adding to cart from header navigation: ${product.name}`);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onCategoryClick={handleCategoryClick} />
      <main>
        <WelcomeSection />
        <CategoryGrid />
        <FeaturedProducts />
        <SpecialOffers />
      </main>
      <Footer />
      
      <CategoryModal
        category={selectedCategory}
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onProductClick={handleProductClick}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Index;
