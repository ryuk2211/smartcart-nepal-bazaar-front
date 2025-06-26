
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Percent, Gift } from "lucide-react";

const offers = [
  {
    title: "Weekend Sale",
    titleNp: "सप्ताहन्त सेल",
    description: "Up to 50% OFF",
    descriptionNp: "५०% सम्म छुट",
    time: "Ends in 2 days",
    icon: <Percent className="h-8 w-8" />,
    color: "from-purple-500 to-blue-600"
  },
  {
    title: "Free Delivery",
    titleNp: "निःशुल्क डेलिभरी",
    description: "On orders above रू 1500",
    descriptionNp: "रू १५०० भन्दा माथि",
    time: "All week offer",
    icon: <Timer className="h-8 w-8" />,
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Bundle Deals",
    titleNp: "बन्डल डिल",
    description: "Buy 2 Get 1 Free",
    descriptionNp: "२ किन्नुहोस् १ फ्री पाउनुहोस्",
    time: "Limited offer",
    icon: <Gift className="h-8 w-8" />,
    color: "from-orange-500 to-red-600"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
          <p className="text-xl text-gray-600">विशेष अफरहरू - Don't miss out on these deals!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${offer.color} text-white p-8 relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <div className="scale-150">
                      {offer.icon}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-white mb-4">
                      {offer.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-lg opacity-90 mb-1">{offer.titleNp}</p>
                    <p className="text-xl font-semibold mb-1">{offer.description}</p>
                    <p className="text-sm opacity-90 mb-4">{offer.descriptionNp}</p>
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <p className="text-sm font-medium">{offer.time}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
