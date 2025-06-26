
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b-2 border-gray-100">
      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">SC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SmartCart</h1>
              <p className="text-sm text-gray-600">स्मार्ट किनमेल</p>
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
                placeholder="खाना, सौन्दर्य, घरायसी सामान खोज्नुहोस्..."
                className="pl-12 pr-4 py-3 w-full border-2 border-gray-300 focus:border-blue-500 rounded-xl text-base"
              />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-xl"
              aria-label="User account"
            >
              <User className="h-6 w-6 text-gray-700" />
              <span className="text-xs text-gray-700 font-medium">Account</span>
            </Button>
            <Button 
              variant="ghost" 
              className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-xl relative"
              aria-label="Wishlist"
            >
              <Heart className="h-6 w-6 text-gray-700" />
              <span className="text-xs text-gray-700 font-medium">Wishlist</span>
            </Button>
            <Button 
              variant="ghost" 
              className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-xl relative"
              aria-label="Shopping cart with 3 items"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="text-xs text-gray-700 font-medium">Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">
                सबै श्रेणी
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">
                खाना र पेय
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">
                दैनिक आवश्यकता
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">
                सौन्दर्य उत्पादन
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">
                घरायसी सामान
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <span className="font-medium">🇳🇵 Nepal</span>
              <span>•</span>
              <span>नेपाली | EN</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
