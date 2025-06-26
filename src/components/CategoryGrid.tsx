
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Food & Snacks",
    nameNp: "खाना र खाजा",
    icon: "🍽️",
    color: "from-orange-400 to-red-500",
    items: "2000+ items"
  },
  {
    name: "Beverages",
    nameNp: "पेय पदार्थ",
    icon: "🥤",
    color: "from-blue-400 to-blue-600",
    items: "500+ items"
  },
  {
    name: "Beauty & Care",
    nameNp: "सौन्दर्य र हेरचाह",
    icon: "💄",
    color: "from-pink-400 to-purple-500",
    items: "800+ items"
  },
  {
    name: "Daily Essentials",
    nameNp: "दैनिक आवश्यकता",
    icon: "🧴",
    color: "from-green-400 to-teal-500",
    items: "1200+ items"
  },
  {
    name: "Household Items",
    nameNp: "घरायसी सामान",
    icon: "🏠",
    color: "from-indigo-400 to-purple-600",
    items: "900+ items"
  },
  {
    name: "Electronics",
    nameNp: "इलेक्ट्रोनिक्स",
    icon: "📱",
    color: "from-gray-600 to-gray-800",
    items: "300+ items"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600">श्रेणी अनुसार किनमेल गर्नुहोस्</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.nameNp}</p>
                <p className="text-xs text-nepali-saffron font-medium">{category.items}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
