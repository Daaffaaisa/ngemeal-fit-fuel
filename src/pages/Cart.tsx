import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems, loading, updateQuantity, removeItem, totalAmount } = useCart();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Memuat keranjang...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Keranjang Belanja</h1>
        </div>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Keranjang Kosong</h2>
            <p className="text-muted-foreground mb-6">Belum ada item di keranjang Anda</p>
            <Button onClick={() => navigate('/')}>Mulai Belanja</Button>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex gap-4">
                    <img 
                      src={item.image_url || '/placeholder.svg'} 
                      alt={item.product_name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{item.product_name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Protein: {item.protein_grams}g | Carbs: {item.carb_grams}g
                      </p>
                      <p className="text-lg font-bold text-primary">
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>

                      <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-4">Ringkasan Pesanan</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>Rp {totalAmount.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Ongkir</span>
                    <span>Gratis</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>Rp {totalAmount.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Checkout
                </Button>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
