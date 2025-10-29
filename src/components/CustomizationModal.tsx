import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  const [proteinSize, setProteinSize] = useState("150");
  const [carbSize, setCarbSize] = useState("100");
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [totalCalories, setTotalCalories] = useState(baseCalories);
  const [totalProtein, setTotalProtein] = useState(baseProtein);
  const [totalCarbs, setTotalCarbs] = useState(baseCarbs);

  const proteinOptions = [
    { value: "100", label: "100g", priceAdd: 0, proteinAdd: -13 },
    { value: "150", label: "150g (Standar)", priceAdd: 0, proteinAdd: 0 },
    { value: "200", label: "200g", priceAdd: 10000, proteinAdd: 13 },
    { value: "250", label: "250g", priceAdd: 20000, proteinAdd: 27 },
  ];

  const carbOptions = [
    { value: "50", label: "50g (Low-Carb)", priceAdd: 0, carbAdd: -50 },
    { value: "100", label: "100g (Standar)", priceAdd: 0, carbAdd: 0 },
    { value: "150", label: "150g", priceAdd: 5000, carbAdd: 50 },
  ];

  useEffect(() => {
    const selectedProtein = proteinOptions.find(opt => opt.value === proteinSize);
    const selectedCarb = carbOptions.find(opt => opt.value === carbSize);

    if (selectedProtein && selectedCarb) {
      const newPrice = basePrice + selectedProtein.priceAdd + selectedCarb.priceAdd;
      const newProtein = baseProtein + selectedProtein.proteinAdd;
      const newCarbs = baseCarbs + selectedCarb.carbAdd;
      
      // Rough calorie calculation: protein = 4 cal/g, carbs = 4 cal/g
      const proteinCals = selectedProtein.proteinAdd * 4;
      const carbCals = selectedCarb.carbAdd * 4;
      const newCalories = baseCalories + proteinCals + carbCals;

      setTotalPrice(newPrice);
      setTotalCalories(newCalories);
      setTotalProtein(newProtein);
      setTotalCarbs(newCarbs);
    }
  }, [proteinSize, carbSize]);

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
          {/* Protein Selection */}
          <div>
            <Label className="text-base font-semibold text-foreground mb-3 block">
              Pilih Porsi Protein
            </Label>
            <RadioGroup value={proteinSize} onValueChange={setProteinSize}>
              {proteinOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-secondary transition-smooth border border-transparent hover:border-primary">
                  <RadioGroupItem value={option.value} id={`protein-${option.value}`} />
                  <Label htmlFor={`protein-${option.value}`} className="flex-1 cursor-pointer">
                    {option.label}
                    {option.priceAdd > 0 && (
                      <span className="text-accent ml-2">+Rp {option.priceAdd.toLocaleString('id-ID')}</span>
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Carbs Selection */}
          <div>
            <Label className="text-base font-semibold text-foreground mb-3 block">
              Pilih Porsi Karbohidrat
            </Label>
            <RadioGroup value={carbSize} onValueChange={setCarbSize}>
              {carbOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-secondary transition-smooth border border-transparent hover:border-primary">
                  <RadioGroupItem value={option.value} id={`carb-${option.value}`} />
                  <Label htmlFor={`carb-${option.value}`} className="flex-1 cursor-pointer">
                    {option.label}
                    {option.priceAdd > 0 && (
                      <span className="text-accent ml-2">+Rp {option.priceAdd.toLocaleString('id-ID')}</span>
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
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
