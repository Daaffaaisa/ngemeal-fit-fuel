import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const GoalCategories = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "BULKING",
      subtitle: "Tinggi Kalori & Protein",
      description: "Dirancang untuk membangun massa otot dengan surplus kalori terkontrol.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: TrendingDown,
      title: "CUTTING",
      subtitle: "Rendah Kalori, Tinggi Protein",
      description: "Membakar lemak sambil mempertahankan massa otot dengan defisit kalori.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Activity,
      title: "MAINTENANCE",
      subtitle: "Kalori & Makro Seimbang",
      description: "Menjaga berat badan ideal dengan nutrisi seimbang setiap hari.",
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilih Tujuanmu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dirancang Sesuai Tujuan Kebugaranmu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-smooth hover:scale-105 border border-border"
            >
              <div className={`h-32 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                <category.icon className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {category.subtitle}
                </p>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                <Button 
                  onClick={scrollToOrder}
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Lihat Menu
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalCategories;
