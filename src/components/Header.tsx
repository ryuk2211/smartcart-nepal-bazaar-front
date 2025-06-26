import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-nepali-crimson to-nepali-saffron text-white text-center py-2 text-sm">
        🎉 दशैं विशेष छुट - Up to 50% OFF on all categories! Free delivery above रू 2000
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-nepali-crimson to-nepali-saffron rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-nepali-crimson">SmartCart</h1>
              <p className="text-xs text-gray-600">Your Smart Shopping Destination</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 focus:border-nepali-saffron rounded-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-nepali-saffron hover:bg-nepali-gold text-white px-6">
                खोज्नुहोस्
              </Button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="flex flex-col items-center p-2">
              <User className="h-6 w-6 text-gray-600" />
              <span className="text-xs text-gray-600">Account</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center p-2 relative">
              <Heart className="h-6 w-6 text-gray-600" />
              <span className="text-xs text-gray-600">Wishlist</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center p-2 relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="text-xs text-gray-600">Cart</span>
              <span className="absolute -top-1 -right-1 bg-nepali-crimson text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-nepali-crimson font-medium transition-colors">All Categories</a>
              <a href="#" className="text-gray-700 hover:text-nepali-crimson font-medium transition-colors">Food & Beverages</a>
              <a href="#" className="text-gray-700 hover:text-nepali-crimson font-medium transition-colors">Daily Essentials</a>
              <a href="#" className="text-gray-700 hover:text-nepali-crimson font-medium transition-colors">Beauty & Care</a>
              <a href="#" className="text-gray-700 hover:text-nepali-crimson font-medium transition-colors">Household</a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>🇳🇵</span>
              <span>नेपाली | English</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
