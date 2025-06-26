
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  inStock: boolean;
  description: string;
  category: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center text-8xl">
              {product.image}
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-sm text-gray-500 uppercase">{product.category}</span>
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-orange-600">Rs. {product.price}</span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through">Rs. {product.originalPrice}</span>
                  )}
                </div>
                {product.discount && (
                  <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="pt-4">
                <Button
                  size="lg"
                  className={`w-full ${
                    product.inStock 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                  onClick={() => onAddToCart(product)}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductModal;
