import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Settings } from "lucide-react";
import CustomizationModal from "./CustomizationModal";

interface ProductCardProps {
  name: string;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  price: number;
  category: string;
}

const ProductCard = ({ name, image, calories, protein, carbs, fats, price, category }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-card rounded-xl overflow-hidden shadow-soft border border-border hover:shadow-card transition-smooth">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground mb-3">
            {name}
          </h3>
          
          <div className="bg-secondary/50 rounded-lg p-3 mb-4">
            <p className="text-xs text-muted-foreground mb-1">Standar</p>
            <p className="text-sm font-semibold text-foreground">
              {calories} kkal | P: {protein}g | C: {carbs}g | F: {fats}g
            </p>
          </div>
          
          <p className="text-xl font-bold text-primary mb-4">
            Mulai dari Rp {price.toLocaleString('id-ID')}
          </p>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Tambah
            </Button>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-accent hover:bg-accent/90"
            >
              <Settings className="h-4 w-4 mr-2" />
              Kustomisasi
            </Button>
          </div>
        </div>
      </div>

      <CustomizationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={name}
        basePrice={price}
        baseCalories={calories}
        baseProtein={protein}
        baseCarbs={carbs}
        baseFats={fats}
      />
    </>
  );
};

export default ProductCard;
