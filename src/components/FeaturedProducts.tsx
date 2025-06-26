
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import ProductModal from "./ProductModal";

const products = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    price: 850,
    originalPrice: 1200,
    image: "🌾",
    rating: 4.5,
    reviews: 142,
    discount: 29,
    inStock: true,
    description: "High-quality basmati rice with long grains and aromatic fragrance. Perfect for biryanis and special occasions.",
    category: "Food & Snacks"
  },
  {
    id: 2,
    name: "Organic Tea Leaves",
    price: 450,
    originalPrice: 600,
    image: "🍵",
    rating: 4.7,
    reviews: 89,
    discount: 25,
    inStock: true,
    description: "Premium green tea from the Himalayan region. Rich in antioxidants and natural flavor.",
    category: "Beverages"
  },
  {
    id: 3,
    name: "Fresh Vegetables Mix",
    price: 320,
    originalPrice: 400,
    image: "🥬",
    rating: 4.3,
    reviews: 67,
    discount: 20,
    inStock: true,
    description: "Fresh seasonal vegetables sourced from local farms. Nutritious and organic.",
    category: "Food & Snacks"
  },
  {
    id: 4,
    name: "Dairy Fresh Milk",
    price: 65,
    originalPrice: 75,
    image: "🥛",
    rating: 4.6,
    reviews: 234,
    discount: 13,
    inStock: false,
    description: "Fresh dairy milk from local farms. Rich in calcium and essential nutrients.",
    category: "Beverages"
  },
  {
    id: 5,
    name: "Himalayan Honey",
    price: 1200,
    originalPrice: 1500,
    image: "🍯",
    rating: 4.8,
    reviews: 156,
    discount: 20,
    inStock: true,
    description: "Pure Himalayan honey harvested from mountain regions. Natural sweetener with health benefits.",
    category: "Food & Snacks"
  },
  {
    id: 6,
    name: "Spice Collection",
    price: 680,
    originalPrice: 850,
    image: "🌶️",
    rating: 4.4,
    reviews: 98,
    discount: 20,
    inStock: true,
    description: "Traditional Nepali spice collection with authentic flavors for your cooking needs.",
    category: "Food & Snacks"
  }
];

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const handleProductClick = (product: typeof products[0]) => {
    console.log(`Viewing product: ${product.name} (ID: ${product.id})`);
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    console.log(`Adding to cart: ${product.name} (ID: ${product.id})`);
    setSelectedProduct(null);
    // Here you would typically add the product to cart
  };

  const handleWishlistToggle = (product: typeof products[0], event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Toggling wishlist for: ${product.name} (ID: ${product.id})`);
    // Here you would typically toggle wishlist status
  };

  const handleQuickAddToCart = (product: typeof products[0], event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Quick adding to cart: ${product.name} (ID: ${product.id})`);
    // Here you would typically add the product to cart
  };

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Best selling items at great prices</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 bg-white overflow-hidden transform hover:scale-105"
                onClick={() => handleProductClick(product)}
                role="button"
                tabIndex={0}
                aria-label={`View ${product.name} details`}
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                      {product.image}
                    </div>
                    {product.discount > 0 && (
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg">
                        -{product.discount}%
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="absolute top-3 right-3 bg-gray-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        Out of Stock
                      </span>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute bottom-3 right-3 w-10 h-10 p-0 hover:bg-red-50 hover:text-red-500 rounded-full"
                      onClick={(e) => handleWishlistToggle(product, e)}
                      aria-label={`Add ${product.name} to wishlist`}
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{product.name}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-orange-600">Rs. {product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-lg text-gray-500 line-through">Rs. {product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className={`w-full mt-4 rounded-xl font-semibold transition-all duration-300 ${
                        product.inStock 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:shadow-lg transform hover:scale-105' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                      onClick={(e) => handleQuickAddToCart(product, e)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default FeaturedProducts;
