
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onCategoryClick?: (categoryName: string) => void;
}

const Header = ({ onCategoryClick }: HeaderProps) => {
  const handleCategoryNavClick = (categoryName: string) => {
    if (onCategoryClick) {
      onCategoryClick(categoryName);
    }
  };

  return (
    <header className="bg-white shadow-md border-b-2 border-orange-100">
      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">SC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SmartCart</h1>
              <p className="text-sm text-gray-600">Smart Shopping</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <label htmlFor="search" className="sr-only">Search products</label>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="search"
                type="text"
                placeholder="Search for food, beauty, household items..."
                className="pl-12 pr-4 py-3 w-full border-2 border-gray-300 focus:border-orange-500 rounded-xl text-base"
              />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              className="flex flex-col items-center p-3 hover:bg-orange-50 rounded-xl transition-colors"
              aria-label="User account"
            >
              <User className="h-6 w-6 text-gray-700" />
              <span className="text-xs text-gray-700 font-medium">Account</span>
            </Button>
            <Button 
              variant="ghost" 
              className="flex flex-col items-center p-3 hover:bg-orange-50 rounded-xl relative transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="h-6 w-6 text-gray-700" />
              <span className="text-xs text-gray-700 font-medium">Wishlist</span>
            </Button>
            <Button 
              variant="ghost" 
              className="flex flex-col items-center p-3 hover:bg-orange-50 rounded-xl relative transition-colors"
              aria-label="Shopping cart with 3 items"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="text-xs text-gray-700 font-medium">Cart</span>
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-orange-50 to-red-50 border-t" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-8">
              <button 
                onClick={() => handleCategoryNavClick("All Categories")}
                className="text-gray-800 hover:text-orange-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                All Categories
              </button>
              <button 
                onClick={() => handleCategoryNavClick("Food & Snacks")}
                className="text-gray-800 hover:text-orange-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                Food & Beverages
              </button>
              <button 
                onClick={() => handleCategoryNavClick("Daily Essentials")}
                className="text-gray-800 hover:text-orange-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                Daily Essentials
              </button>
              <button 
                onClick={() => handleCategoryNavClick("Beauty & Care")}
                className="text-gray-800 hover:text-orange-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                Beauty Products
              </button>
              <button 
                onClick={() => handleCategoryNavClick("Household Items")}
                className="text-gray-800 hover:text-orange-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                Household Items
              </button>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <span className="font-medium">🇳🇵 Nepal</span>
              <span>•</span>
              <span>English | नेपाली</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
