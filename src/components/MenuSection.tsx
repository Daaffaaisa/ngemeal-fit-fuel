import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Semua" },
    { id: "bulking", label: "Bulking" },
    { id: "cutting", label: "Cutting" },
    { id: "maintenance", label: "Maintenance" },
  ];

  const products = [
    {
      name: "Grilled Chicken Breast with Quinoa",
      image: "https://placehold.co/600x400/28A745/FFFFFF?text=Grilled+Chicken",
      calories: 450,
      protein: 40,
      carbs: 30,
      fats: 18,
      price: 50000,
      category: "cutting",
    },
    {
      name: "Beef Bulgogi with Brown Rice",
      image: "https://placehold.co/600x400/28A745/FFFFFF?text=Beef+Bulgogi",
      calories: 620,
      protein: 48,
      carbs: 55,
      fats: 22,
      price: 65000,
      category: "bulking",
    },
    {
      name: "Salmon Teriyaki with Edamame",
      image: "https://placehold.co/600x400/28A745/FFFFFF?text=Salmon+Teriyaki",
      calories: 480,
      protein: 38,
      carbs: 35,
      fats: 20,
      price: 75000,
      category: "maintenance",
    },
    {
      name: "Turkey Meatballs with Sweet Potato",
      image: "https://placehold.co/600x400/28A745/FFFFFF?text=Turkey+Meatballs",
      calories: 520,
      protein: 42,
      carbs: 45,
      fats: 16,
      price: 55000,
      category: "maintenance",
    },
    {
      name: "Grilled Tofu with Vegetables",
      image: "https://placehold.co/600x400/28A745/FFFFFF?text=Grilled+Tofu",
      calories: 350,
      protein: 25,
      carbs: 28,
      fats: 14,
      price: 45000,
      category: "cutting",
    },
    {
      name: "Chicken Katsu with Rice",
      image: "https://placehold.co/600x400/28A745/FFFFFF?text=Chicken+Katsu",
      calories: 680,
      protein: 52,
      carbs: 62,
      fats: 24,
      price: 60000,
      category: "bulking",
    },
  ];

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
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
