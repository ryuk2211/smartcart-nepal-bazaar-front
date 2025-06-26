
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  inStock: boolean;
  description: string;
}

interface CategoryModalProps {
  category: {
    id: number;
    name: string;
    icon: string;
    description: string;
    items: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (product: Product) => void;
}

const categoryProducts: { [key: string]: Product[] } = {
  "Food & Snacks": [
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
      description: "High-quality basmati rice with long grains and aromatic fragrance. Perfect for biryanis and special occasions."
    },
    {
      id: 2,
      name: "Organic Lentils Mix",
      price: 320,
      originalPrice: 400,
      image: "🫘",
      rating: 4.3,
      reviews: 89,
      discount: 20,
      inStock: true,
      description: "Nutritious mix of organic lentils, rich in protein and fiber. Great for dal and healthy meals."
    },
    {
      id: 3,
      name: "Traditional Spice Mix",
      price: 280,
      originalPrice: 350,
      image: "🌶️",
      rating: 4.7,
      reviews: 156,
      discount: 20,
      inStock: true,
      description: "Authentic Nepali spice blend with cardamom, cinnamon, and cloves. Perfect for traditional cooking."
    }
  ],
  "Beverages": [
    {
      id: 4,
      name: "Himalayan Green Tea",
      price: 450,
      originalPrice: 600,
      image: "🍵",
      rating: 4.7,
      reviews: 89,
      discount: 25,
      inStock: true,
      description: "Premium green tea from the Himalayan region. Rich in antioxidants and natural flavor."
    },
    {
      id: 5,
      name: "Fresh Milk",
      price: 65,
      originalPrice: 75,
      image: "🥛",
      rating: 4.6,
      reviews: 234,
      discount: 13,
      inStock: true,
      description: "Fresh dairy milk from local farms. Rich in calcium and essential nutrients."
    },
    {
      id: 6,
      name: "Natural Fruit Juice",
      price: 120,
      originalPrice: 150,
      image: "🧃",
      rating: 4.4,
      reviews: 78,
      discount: 20,
      inStock: true,
      description: "100% natural fruit juice with no added preservatives. Refreshing and healthy."
    }
  ],
  "Beauty & Care": [
    {
      id: 7,
      name: "Herbal Face Cream",
      price: 580,
      originalPrice: 750,
      image: "🧴",
      rating: 4.5,
      reviews: 134,
      discount: 23,
      inStock: true,
      description: "Natural herbal face cream with Himalayan herbs. Moisturizes and nourishes skin naturally."
    },
    {
      id: 8,
      name: "Organic Shampoo",
      price: 420,
      originalPrice: 500,
      image: "🧴",
      rating: 4.3,
      reviews: 98,
      discount: 16,
      inStock: true,
      description: "Organic shampoo with natural ingredients. Gentle on hair and scalp."
    },
    {
      id: 9,
      name: "Natural Soap Bar",
      price: 150,
      originalPrice: 200,
      image: "🧼",
      rating: 4.6,
      reviews: 187,
      discount: 25,
      inStock: true,
      description: "Handmade natural soap with essential oils. Gentle and moisturizing for all skin types."
    }
  ],
  "Daily Essentials": [
    {
      id: 10,
      name: "Toilet Paper Pack",
      price: 180,
      originalPrice: 220,
      image: "🧻",
      rating: 4.2,
      reviews: 156,
      discount: 18,
      inStock: true,
      description: "Soft and strong toilet paper pack. Essential for daily hygiene needs."
    },
    {
      id: 11,
      name: "Laundry Detergent",
      price: 320,
      originalPrice: 400,
      image: "🧴",
      rating: 4.4,
      reviews: 203,
      discount: 20,
      inStock: true,
      description: "Powerful laundry detergent that removes tough stains and keeps clothes fresh."
    },
    {
      id: 12,
      name: "Toothpaste",
      price: 85,
      originalPrice: 100,
      image: "🦷",
      rating: 4.5,
      reviews: 289,
      discount: 15,
      inStock: true,
      description: "Fluoride toothpaste for complete oral care. Prevents cavities and freshens breath."
    }
  ],
  "Household Items": [
    {
      id: 13,
      name: "Kitchen Utensil Set",
      price: 850,
      originalPrice: 1200,
      image: "🍴",
      rating: 4.6,
      reviews: 145,
      discount: 29,
      inStock: true,
      description: "Complete kitchen utensil set with spoons, forks, and knives. Durable and practical."
    },
    {
      id: 14,
      name: "Cleaning Cloth Set",
      price: 180,
      originalPrice: 220,
      image: "🧽",
      rating: 4.3,
      reviews: 167,
      discount: 18,
      inStock: true,
      description: "Microfiber cleaning cloths for all surfaces. Highly absorbent and reusable."
    },
    {
      id: 15,
      name: "Storage Containers",
      price: 450,
      originalPrice: 600,
      image: "📦",
      rating: 4.5,
      reviews: 198,
      discount: 25,
      inStock: true,
      description: "Set of airtight storage containers. Perfect for keeping food fresh and organized."
    }
  ],
  "Electronics": [
    {
      id: 16,
      name: "LED Light Bulb",
      price: 280,
      originalPrice: 350,
      image: "💡",
      rating: 4.4,
      reviews: 124,
      discount: 20,
      inStock: true,
      description: "Energy-efficient LED bulb with long lifespan. Bright white light for home and office."
    },
    {
      id: 17,
      name: "Phone Charger",
      price: 650,
      originalPrice: 800,
      image: "🔌",
      rating: 4.2,
      reviews: 89,
      discount: 19,
      inStock: true,
      description: "Fast charging cable compatible with most smartphones. Durable and reliable."
    },
    {
      id: 18,
      name: "Bluetooth Speaker",
      price: 2800,
      originalPrice: 3500,
      image: "🔊",
      rating: 4.7,
      reviews: 234,
      discount: 20,
      inStock: true,
      description: "Portable Bluetooth speaker with excellent sound quality. Perfect for music lovers."
    }
  ]
};

const CategoryModal = ({ category, isOpen, onClose, onProductClick }: CategoryModalProps) => {
  if (!isOpen || !category) return null;

  const products = categoryProducts[category.name] || [];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
                <span className="text-sm text-orange-600 font-medium">{category.items}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onProductClick(product)}
              >
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center text-4xl mb-3">
                    {product.image}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-orange-600">Rs. {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">Rs. {product.originalPrice}</span>
                      )}
                    </div>
                    {product.discount && (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No products available in this category yet.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryModal;
