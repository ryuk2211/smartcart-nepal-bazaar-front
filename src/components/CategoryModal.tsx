
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
    },
    {
      id: 19,
      name: "Himalayan Honey",
      price: 1200,
      originalPrice: 1500,
      image: "🍯",
      rating: 4.8,
      reviews: 156,
      discount: 20,
      inStock: true,
      description: "Pure Himalayan honey harvested from mountain regions. Natural sweetener with health benefits."
    },
    {
      id: 20,
      name: "Instant Noodles",
      price: 45,
      originalPrice: 55,
      image: "🍜",
      rating: 4.2,
      reviews: 89,
      discount: 18,
      inStock: true,
      description: "Quick and tasty instant noodles. Perfect for a quick meal anytime."
    },
    {
      id: 21,
      name: "Biscuit Pack",
      price: 125,
      originalPrice: 150,
      image: "🍪",
      rating: 4.4,
      reviews: 234,
      discount: 17,
      inStock: true,
      description: "Crunchy and delicious biscuits. Great for tea time and snacking."
    },
    {
      id: 22,
      name: "Cooking Oil",
      price: 380,
      originalPrice: 450,
      image: "🫗",
      rating: 4.3,
      reviews: 167,
      discount: 16,
      inStock: true,
      description: "Pure cooking oil for all your frying and cooking needs."
    },
    {
      id: 23,
      name: "Potato Chips",
      price: 85,
      originalPrice: 100,
      image: "🥔",
      rating: 4.1,
      reviews: 123,
      discount: 15,
      inStock: true,
      description: "Crispy and salty potato chips. Perfect snack for any occasion."
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
    },
    {
      id: 24,
      name: "Mineral Water",
      price: 25,
      originalPrice: 30,
      image: "💧",
      rating: 4.5,
      reviews: 345,
      discount: 17,
      inStock: true,
      description: "Pure mineral water sourced from natural springs. Refreshing and clean."
    },
    {
      id: 25,
      name: "Coffee Powder",
      price: 320,
      originalPrice: 400,
      image: "☕",
      rating: 4.6,
      reviews: 167,
      discount: 20,
      inStock: true,
      description: "Premium coffee powder for the perfect morning brew."
    },
    {
      id: 26,
      name: "Energy Drink",
      price: 95,
      originalPrice: 110,
      image: "⚡",
      rating: 4.2,
      reviews: 89,
      discount: 14,
      inStock: true,
      description: "Refreshing energy drink to boost your energy levels."
    },
    {
      id: 27,
      name: "Soft Drink",
      price: 55,
      originalPrice: 65,
      image: "🥤",
      rating: 4.3,
      reviews: 234,
      discount: 15,
      inStock: true,
      description: "Fizzy and refreshing soft drink. Perfect for any occasion."
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
    },
    {
      id: 28,
      name: "Face Wash",
      price: 280,
      originalPrice: 350,
      image: "🧴",
      rating: 4.4,
      reviews: 156,
      discount: 20,
      inStock: true,
      description: "Gentle face wash that cleanses and refreshes your skin."
    },
    {
      id: 29,
      name: "Hair Oil",
      price: 220,
      originalPrice: 280,
      image: "🫗",
      rating: 4.5,
      reviews: 123,
      discount: 21,
      inStock: true,
      description: "Nourishing hair oil with natural herbs for healthy and shiny hair."
    },
    {
      id: 30,
      name: "Body Lotion",
      price: 380,
      originalPrice: 450,
      image: "🧴",
      rating: 4.3,
      reviews: 98,
      discount: 16,
      inStock: true,
      description: "Moisturizing body lotion that keeps your skin soft and smooth."
    },
    {
      id: 31,
      name: "Sunscreen",
      price: 650,
      originalPrice: 800,
      image: "☀️",
      rating: 4.7,
      reviews: 234,
      discount: 19,
      inStock: true,
      description: "SPF 50 sunscreen for complete protection from harmful UV rays."
    },
    {
      id: 32,
      name: "Perfume",
      price: 850,
      originalPrice: 1000,
      image: "🌸",
      rating: 4.6,
      reviews: 167,
      discount: 15,
      inStock: true,
      description: "Long-lasting fragrance with floral notes. Perfect for daily wear."
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
    },
    {
      id: 33,
      name: "Toothbrush",
      price: 55,
      originalPrice: 70,
      image: "🪥",
      rating: 4.3,
      reviews: 234,
      discount: 21,
      inStock: true,
      description: "Soft bristle toothbrush for gentle and effective cleaning."
    },
    {
      id: 34,
      name: "Hand Sanitizer",
      price: 120,
      originalPrice: 150,
      image: "🧴",
      rating: 4.6,
      reviews: 345,
      discount: 20,
      inStock: true,
      description: "Alcohol-based hand sanitizer that kills 99.9% of germs."
    },
    {
      id: 35,
      name: "Tissues",
      price: 75,
      originalPrice: 90,
      image: "🤧",
      rating: 4.2,
      reviews: 167,
      discount: 17,
      inStock: true,
      description: "Soft facial tissues for everyday use. Gentle on skin."
    },
    {
      id: 36,
      name: "Dishwashing Liquid",
      price: 180,
      originalPrice: 220,
      image: "🧽",
      rating: 4.4,
      reviews: 198,
      discount: 18,
      inStock: true,
      description: "Effective dishwashing liquid that cuts through grease and grime."
    },
    {
      id: 37,
      name: "Floor Cleaner",
      price: 220,
      originalPrice: 280,
      image: "🧽",
      rating: 4.3,
      reviews: 145,
      discount: 21,
      inStock: true,
      description: "Multi-surface floor cleaner that leaves floors sparkling clean."
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
    },
    {
      id: 38,
      name: "Plastic Plates Set",
      price: 320,
      originalPrice: 400,
      image: "🍽️",
      rating: 4.2,
      reviews: 123,
      discount: 20,
      inStock: true,
      description: "Durable plastic plates set. Perfect for everyday dining."
    },
    {
      id: 39,
      name: "Glass Set",
      price: 280,
      originalPrice: 350,
      image: "🥛",
      rating: 4.4,
      reviews: 156,
      discount: 20,
      inStock: true,
      description: "Clear glass set for water and beverages. Elegant and practical."
    },
    {
      id: 40,
      name: "Trash Bags",
      price: 95,
      originalPrice: 120,
      image: "🗑️",
      rating: 4.1,
      reviews: 234,
      discount: 21,
      inStock: true,
      description: "Strong and durable trash bags for household waste management."
    },
    {
      id: 41,
      name: "Kitchen Towels",
      price: 150,
      originalPrice: 180,
      image: "🧽",
      rating: 4.3,
      reviews: 167,
      discount: 17,
      inStock: true,
      description: "Absorbent kitchen towels for cleaning and drying."
    },
    {
      id: 42,
      name: "Candles",
      price: 180,
      originalPrice: 220,
      image: "🕯️",
      rating: 4.5,
      reviews: 89,
      discount: 18,
      inStock: true,
      description: "Scented candles for creating a cozy atmosphere at home."
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
    },
    {
      id: 43,
      name: "Power Bank",
      price: 1500,
      originalPrice: 1800,
      image: "🔋",
      rating: 4.5,
      reviews: 167,
      discount: 17,
      inStock: true,
      description: "High-capacity power bank for charging devices on the go."
    },
    {
      id: 44,
      name: "USB Cable",
      price: 250,
      originalPrice: 300,
      image: "🔌",
      rating: 4.3,
      reviews: 123,
      discount: 17,
      inStock: true,
      description: "Universal USB cable for data transfer and charging."
    },
    {
      id: 45,
      name: "Headphones",
      price: 1200,
      originalPrice: 1500,
      image: "🎧",
      rating: 4.6,
      reviews: 198,
      discount: 20,
      inStock: true,
      description: "Comfortable headphones with excellent sound quality."
    },
    {
      id: 46,
      name: "Extension Cord",
      price: 450,
      originalPrice: 550,
      image: "🔌",
      rating: 4.2,
      reviews: 89,
      discount: 18,
      inStock: true,
      description: "Multi-outlet extension cord for your electrical needs."
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
