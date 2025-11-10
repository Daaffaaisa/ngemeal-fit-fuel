import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ShoppingCart } from "lucide-react";

interface CustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  basePrice: number;
  baseCalories: number;
  baseProtein: number;
  baseCarbs: number;
  baseFats: number;
}

const CustomizationModal = ({
  isOpen,
  onClose,
  productName,
  basePrice,
  baseCalories,
  baseProtein,
  baseCarbs,
  baseFats,
}: CustomizationModalProps) => {
  // Slider ranges: Protein 100-300g, Carbs 50-200g
  const [proteinGrams, setProteinGrams] = useState([150]);
  const [carbGrams, setCarbGrams] = useState([100]);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [totalCalories, setTotalCalories] = useState(baseCalories);
  const [totalProtein, setTotalProtein] = useState(baseProtein);
  const [totalCarbs, setTotalCarbs] = useState(baseCarbs);

  // Pricing: Rp 200/g for protein above 150g, Rp 100/g for carbs above 100g
  const calculatePrice = (protein: number, carbs: number) => {
    let price = basePrice;
    
    // Protein pricing
    if (protein > 150) {
      price += (protein - 150) * 200;
    } else if (protein < 150) {
      price -= (150 - protein) * 200;
    }
    
    // Carbs pricing
    if (carbs > 100) {
      price += (carbs - 100) * 100;
    } else if (carbs < 100) {
      price -= (100 - carbs) * 100;
    }
    
    return price;
  };

  useEffect(() => {
    const protein = proteinGrams[0];
    const carbs = carbGrams[0];
    
    // Calculate price
    const newPrice = calculatePrice(protein, carbs);
    
    // Calculate macros (approximate)
    // Protein gram difference from base (150g standard)
    const proteinDiff = protein - 150;
    const proteinMacroDiff = Math.round(proteinDiff * 0.26); // ~26% protein content in meat
    
    // Carbs gram difference from base (100g standard)
    const carbDiff = carbs - 100;
    const carbMacroDiff = Math.round(carbDiff * 1); // Rice is mostly carbs
    
    const newProtein = baseProtein + proteinMacroDiff;
    const newCarbs = baseCarbs + carbMacroDiff;
    
    // Calorie calculation: protein = 4 cal/g, carbs = 4 cal/g
    const proteinCals = proteinMacroDiff * 4;
    const carbCals = carbMacroDiff * 4;
    const newCalories = baseCalories + proteinCals + carbCals;
    
    setTotalPrice(newPrice);
    setTotalCalories(newCalories);
    setTotalProtein(newProtein);
    setTotalCarbs(newCarbs);
  }, [proteinGrams, carbGrams]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-popover border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {productName}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Kustomisasi Makro "Personal-Fit"
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Protein Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold text-foreground">
                Porsi Protein
              </Label>
              <span className="text-lg font-bold text-primary">{proteinGrams[0]}g</span>
            </div>
            <Slider
              value={proteinGrams}
              onValueChange={setProteinGrams}
              min={100}
              max={300}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>100g</span>
              <span>150g (Standar)</span>
              <span>300g</span>
            </div>
          </div>

          {/* Carbs Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold text-foreground">
                Porsi Karbohidrat
              </Label>
              <span className="text-lg font-bold text-primary">{carbGrams[0]}g</span>
            </div>
            <Slider
              value={carbGrams}
              onValueChange={setCarbGrams}
              min={50}
              max={200}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>50g (Low-Carb)</span>
              <span>100g (Standar)</span>
              <span>200g</span>
            </div>
          </div>

          {/* Live Calculation Display */}
          <div className="bg-secondary rounded-lg p-4 border border-primary/20">
            <h4 className="font-semibold text-foreground mb-3">Ringkasan</h4>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-muted-foreground">Total Kalori:</span>
                <span className="font-semibold text-foreground">{totalCalories} kkal</span>
              </p>
              <p className="flex justify-between">
                <span className="text-muted-foreground">Makro:</span>
                <span className="font-semibold text-foreground">P: {totalProtein}g | C: {totalCarbs}g | F: {baseFats}g</span>
              </p>
              <div className="border-t border-border pt-2 mt-2">
                <p className="flex justify-between text-lg">
                  <span className="font-semibold text-foreground">Total Harga:</span>
                  <span className="font-bold text-primary">Rp {totalPrice.toLocaleString('id-ID')}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            size="lg"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Tambahkan ke Keranjang
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomizationModal;
