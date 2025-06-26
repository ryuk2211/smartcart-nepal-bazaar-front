
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CategoryModal from "./CategoryModal";
import ProductModal from "./ProductModal";

const categories = [
  {
    id: 1,
    name: "Food & Snacks",
    icon: "🍽️",
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    lightColor: "bg-gradient-to-br from-orange-50 to-red-50",
    items: "2000+ items",
    description: "Fresh groceries & snacks"
  },
  {
    id: 2,
    name: "Beverages",
    icon: "🥤",
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    lightColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    items: "500+ items",
    description: "Drinks & beverages"
  },
  {
    id: 3,
    name: "Beauty & Care",
    icon: "💄",
    color: "bg-gradient-to-br from-pink-400 to-purple-500",
    lightColor: "bg-gradient-to-br from-pink-50 to-purple-50",
    items: "800+ items",
    description: "Beauty & personal care"
  },
  {
    id: 4,
    name: "Daily Essentials",
    icon: "🧴",
    color: "bg-gradient-to-br from-green-400 to-teal-500",
    lightColor: "bg-gradient-to-br from-green-50 to-teal-50",
    items: "1200+ items",
    description: "Daily necessities"
  },
  {
    id: 5,
    name: "Household Items",
    icon: "🏠",
    color: "bg-gradient-to-br from-indigo-400 to-purple-500",
    lightColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    items: "900+ items",
    description: "Home & kitchen"
  },
  {
    id: 6,
    name: "Electronics",
    icon: "📱",
    color: "bg-gradient-to-br from-gray-500 to-gray-700",
    lightColor: "bg-gradient-to-br from-gray-50 to-slate-50",
    items: "300+ items",
    description: "Electronics & gadgets"
  }
];

const CategoryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleCategoryClick = (category: typeof categories[0]) => {
    console.log(`Opening category: ${category.name}`);
    setSelectedCategory(category);
  };

  const handleProductClick = (product: any) => {
    console.log(`Opening product: ${product.name}`);
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: any) => {
    console.log(`Adding to cart: ${product.name}`);
    setSelectedProduct(null);
    // Here you would typically add the product to cart state
  };

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Choose from our wide range of categories</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card 
                key={category.id} 
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white shadow-lg overflow-hidden transform hover:scale-105"
                onClick={() => handleCategoryClick(category)}
                role="button"
                tabIndex={0}
                aria-label={`Browse ${category.name} category with ${category.items}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCategoryClick(category);
                  }
                }}
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 ${category.lightColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{category.description}</p>
                    <div className={`inline-block ${category.color} text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg`}>
                      {category.items}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
};

export default CategoryGrid;
