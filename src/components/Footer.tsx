
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SmartCart</h3>
                <p className="text-sm text-gray-400">स्मार्ट किनमेल</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nepal's most trusted online shopping destination. Quality products, 
              competitive prices, and reliable delivery across the country.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+977-1-4567890</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>support@smartcart.com.np</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Track Your Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">About SmartCart</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Press & Media</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Investor Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white">Sustainability</a></li>
            </ul>
          </div>

          {/* Services & Payment */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-sm font-medium mb-3 text-gray-300">Payment Methods</h5>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">eSewa</div>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">Khalti</div>
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">IME Pay</div>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-medium mb-3 text-gray-300">Delivery Areas</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Kathmandu Valley, Pokhara, Chitwan, Butwal, Biratnagar, and expanding nationwide
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Clock className="h-4 w-4" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>© 2024 SmartCart Nepal. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:text-white">Cookie Policy</a>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <span>🇳🇵</span>
                <span>Made in Nepal</span>
              </span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
