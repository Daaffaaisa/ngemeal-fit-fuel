import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface CartItem {
  id: string;
  product_id: string;
  product_name: string;
  protein_grams: number;
  carb_grams: number;
  quantity: number;
  price: number;
  image_url?: string;
}

export const useCart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('cart_items')
      .select(`
        id,
        product_id,
        protein_grams,
        carb_grams,
        quantity,
        price,
        products (name, image_url)
      `)
      .eq('user_id', user.id);

    if (error) {
      toast.error('Gagal memuat keranjang');
      console.error(error);
    } else {
      const formattedItems = data.map((item: any) => ({
        id: item.id,
        product_id: item.product_id,
        product_name: item.products.name,
        protein_grams: item.protein_grams,
        carb_grams: item.carb_grams,
        quantity: item.quantity,
        price: item.price,
        image_url: item.products.image_url,
      }));
      setCartItems(formattedItems);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCartItems([]);
    }
  }, [user]);

  const addToCart = async (
    productId: string,
    productName: string,
    proteinGrams: number,
    carbGrams: number,
    price: number
  ) => {
    if (!user) {
      toast.error('Silakan login terlebih dahulu');
      return;
    }

    const { error } = await supabase
      .from('cart_items')
      .upsert({
        user_id: user.id,
        product_id: productId,
        protein_grams: proteinGrams,
        carb_grams: carbGrams,
        quantity: 1,
        price: price,
      }, {
        onConflict: 'user_id,product_id,protein_grams,carb_grams',
      });

    if (error) {
      toast.error('Gagal menambahkan ke keranjang');
      console.error(error);
    } else {
      toast.success('Ditambahkan ke keranjang!');
      fetchCart();
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (quantity < 1) {
      await removeItem(itemId);
      return;
    }

    const { error } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('id', itemId);

    if (error) {
      toast.error('Gagal update jumlah');
      console.error(error);
    } else {
      fetchCart();
    }
  };

  const removeItem = async (itemId: string) => {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', itemId);

    if (error) {
      toast.error('Gagal menghapus item');
      console.error(error);
    } else {
      toast.success('Item dihapus dari keranjang');
      fetchCart();
    }
  };

  const clearCart = async () => {
    if (!user) return;

    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', user.id);

    if (error) {
      toast.error('Gagal mengosongkan keranjang');
      console.error(error);
    } else {
      setCartItems([]);
    }
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    loading,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalAmount,
    totalItems,
    refreshCart: fetchCart,
  };
};
