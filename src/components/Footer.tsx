
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-nepali-crimson to-nepali-saffron rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold">SmartCart</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted online shopping destination in Nepal. 
              नेपालको भरपर्दो अनलाइन शपिङ गन्तव्य।
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl">📱</span>
              <span className="text-2xl">📧</span>
              <span className="text-2xl">🌐</span>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-nepali-saffron transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-nepali-saffron transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-nepali-saffron transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-nepali-saffron transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-nepali-saffron transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-nepali-saffron transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-nepali-saffron transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-nepali-saffron transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Payment & Delivery */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Payment & Delivery</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-300 mb-2">We Accept:</p>
                <div className="flex space-x-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">eSewa</div>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold">Khalti</div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-300 mb-2">Delivery Areas:</p>
                <p className="text-sm text-gray-400">Kathmandu Valley, Pokhara, Chitwan and more...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 SmartCart Nepal. All rights reserved. | सबै अधिकार सुरक्षित।
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>🇳🇵 Made in Nepal</span>
            <span>|</span>
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
