import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  image_url: string;
  base_calories: number;
  base_protein: number;
  base_carbs: number;
  base_fats: number;
  base_price: number;
  category: string;
}

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", label: "Semua" },
    { id: "High Protein", label: "High Protein" },
    { id: "Low Carb", label: "Low Carb" },
    { id: "Balanced", label: "Balanced" },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true);

    if (error) {
      toast.error('Gagal memuat produk');
      console.error(error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="order-section" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mulai Pesan Menu-mu
          </h2>
          <p className="text-lg text-muted-foreground">
            Pilih menu favoritmu dan kustomisasi sesuai kebutuhan
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.id)}
              className={selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Memuat produk...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Tidak ada produk tersedia</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image_url}
                calories={product.base_calories}
                protein={product.base_protein}
                carbs={product.base_carbs}
                fats={product.base_fats}
                price={product.base_price}
                category={product.category}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
