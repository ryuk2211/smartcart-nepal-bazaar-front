import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    nameNp: "प्रिमियम बासमती चामल",
    price: 850,
    originalPrice: 1200,
    image: "🌾",
    rating: 4.5,
    discount: 29
  },
  {
    id: 2,
    name: "Organic Tea Leaves",
    nameNp: "अर्गानिक चिया पत्ति",
    price: 450,
    originalPrice: 600,
    image: "🍵",
    rating: 4.7,
    discount: 25
  },
  {
    id: 3,
    name: "Fresh Vegetables Mix",
    nameNp: "ताजा तरकारी मिक्स",
    price: 320,
    originalPrice: 400,
    image: "🥬",
    rating: 4.3,
    discount: 20
  },
  {
    id: 4,
    name: "Dairy Fresh Milk",
    nameNp: "डेयरी ताजा दूध",
    price: 65,
    originalPrice: 75,
    image: "🥛",
    rating: 4.6,
    discount: 13
  },
  {
    id: 5,
    name: "Himalayan Honey",
    nameNp: "हिमालयन मह",
    price: 1200,
    originalPrice: 1500,
    image: "🍯",
    rating: 4.8,
    discount: 20
  },
  {
    id: 6,
    name: "Spice Collection",
    nameNp: "मसला संग्रह",
    price: 680,
    originalPrice: 850,
    image: "🌶️",
    rating: 4.4,
    discount: 20
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">विशेष उत्पादनहरू - Hand-picked for you</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-nepali-saffron">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-4xl mb-3">
                    {product.image}
                  </div>
                  {product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-nepali-crimson text-white text-xs px-2 py-1 rounded-full font-semibold">
                      -{product.discount}%
                    </span>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 w-8 h-8 p-0 hover:bg-red-50 hover:text-red-500"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-gray-600">{product.nameNp}</p>
                  
                  <div className="flex items-center space-x-1 text-xs">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-600">{product.rating}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-nepali-crimson">रू {product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">रू {product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full bg-nepali-saffron hover:bg-nepali-gold text-white mt-3"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-nepali-crimson text-nepali-crimson hover:bg-nepali-crimson hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
