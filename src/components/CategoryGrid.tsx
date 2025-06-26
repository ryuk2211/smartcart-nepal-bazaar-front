
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Food & Snacks",
    nameNp: "खाना र खाजा",
    icon: "🍽️",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    items: "2000+ items",
    description: "Fresh groceries & snacks"
  },
  {
    name: "Beverages",
    nameNp: "पेय पदार्थ",
    icon: "🥤",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    items: "500+ items",
    description: "Drinks & beverages"
  },
  {
    name: "Beauty & Care",
    nameNp: "सौन्दर्य र हेरचाह",
    icon: "💄",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    items: "800+ items",
    description: "Beauty & personal care"
  },
  {
    name: "Daily Essentials",
    nameNp: "दैनिक आवश्यकता",
    icon: "🧴",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    items: "1200+ items",
    description: "Daily necessities"
  },
  {
    name: "Household Items",
    nameNp: "घरायसी सामान",
    icon: "🏠",
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50",
    items: "900+ items",
    description: "Home & kitchen"
  },
  {
    name: "Electronics",
    nameNp: "इलेक्ट्रोनिक्स",
    icon: "📱",
    color: "bg-gray-600",
    lightColor: "bg-gray-50",
    items: "300+ items",
    description: "Electronics & gadgets"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">श्रेणी अनुसार किनमेल</h2>
          <p className="text-xl text-gray-600">Choose from our wide range of categories</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white shadow-lg overflow-hidden"
              role="button"
              tabIndex={0}
              aria-label={`Browse ${category.name} category`}
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 ${category.lightColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-lg text-gray-600 mb-3">{category.nameNp}</p>
                  <p className="text-sm text-gray-500 mb-2">{category.description}</p>
                  <div className={`inline-block ${category.color} text-white text-sm font-semibold px-4 py-2 rounded-full`}>
                    {category.items}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
