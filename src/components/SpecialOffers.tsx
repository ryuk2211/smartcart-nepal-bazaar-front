
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const offers = [
  {
    title: "Flash Sale",
    titleNp: "फ्ल्यास सेल",
    description: "Up to 60% OFF",
    descriptionNp: "६०% सम्म छुट",
    time: "Ends in 4:32:18",
    bg: "from-red-500 to-pink-600",
    icon: "⚡"
  },
  {
    title: "Free Delivery",
    titleNp: "निःशुल्क डेलिभरी",
    description: "On orders above रू 1500",
    descriptionNp: "रू १५०० भन्दा माथि",
    time: "All day offer",
    bg: "from-green-500 to-emerald-600",
    icon: "🚚"
  },
  {
    title: "Festival Special",
    titleNp: "पर्व विशेष",
    description: "Tihar combo packs",
    descriptionNp: "तिहार कम्बो प्याक",
    time: "Limited stock",
    bg: "from-purple-500 to-indigo-600",
    icon: "🎁"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Offers</h2>
          <p className="text-xl text-gray-600">विशेष अफरहरू - Limited time deals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${offer.bg} text-white p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{offer.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-sm opacity-90 mb-1">{offer.titleNp}</p>
                    <p className="text-xl font-semibold mb-1">{offer.description}</p>
                    <p className="text-sm opacity-90 mb-4">{offer.descriptionNp}</p>
                    <p className="text-xs font-medium bg-white/20 rounded-full px-3 py-1 inline-block">
                      {offer.time}
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <Button className="w-full bg-nepali-saffron hover:bg-nepali-gold text-white font-semibold">
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
