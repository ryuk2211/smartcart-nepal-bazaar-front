
import { Button } from "@/components/ui/button";
import { Truck, Shield, Clock } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            स्वागत छ SmartCart मा
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Nepal's most trusted online marketplace for daily essentials, fresh groceries, and household items. 
            Quality products delivered to your doorstep.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            अहिले किनमेल गर्नुहोस्
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Delivery</h3>
            <p className="text-gray-600">रू 1500 भन्दा माथिको अर्डरमा निःशुल्क डेलिभरी</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Shopping</h3>
            <p className="text-gray-600">eSewa र Khalti मार्फत सुरक्षित भुक्तानी</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Delivery</h3>
            <p className="text-gray-600">काठमाडौं उपत्यकामा २४ घण्टा भित्र डेलिभरी</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
