import { Coffee, UtensilsCrossed, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortionSizes = () => {
  const portions = [
    {
      icon: Coffee,
      title: "NgeMeal Bites",
      subtitle: "Camilan Sehat",
      description: "Untuk camilan sehat di kantor atau di perjalanan.",
      price: "Mulai dari Rp 25.000",
    },
    {
      icon: UtensilsCrossed,
      title: "NgeMeal Standard",
      subtitle: "Porsi Personal",
      description: "Porsi personal lengkap untuk satu kali makan.",
      price: "Mulai dari Rp 50.000",
      featured: true,
    },
    {
      icon: Users,
      title: "NgeMeal Family Plan",
      subtitle: "Sharing 3-4 Orang",
      description: "Untuk sharing dengan keluarga atau teman.",
      price: "Mulai dari Rp 180.000",
    },
  ];

  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilihan Porsi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Satu Menu, Beragam Ukuran
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {portions.map((portion, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-6 border transition-smooth hover:scale-105 ${
                portion.featured
                  ? 'border-primary shadow-card'
                  : 'border-border shadow-soft'
              }`}
            >
              {portion.featured && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    PALING POPULER
                  </span>
                </div>
              )}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                portion.featured ? 'gradient-primary' : 'bg-secondary'
              }`}>
                <portion.icon className={`h-6 w-6 ${portion.featured ? 'text-white' : 'text-primary'}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {portion.title}
              </h3>
              <p className="text-sm text-primary font-semibold mb-3">
                {portion.subtitle}
              </p>
              <p className="text-muted-foreground mb-4 min-h-[3rem]">
                {portion.description}
              </p>
              <p className="text-lg font-bold text-foreground mb-4">
                {portion.price}
              </p>
              <Button 
                onClick={scrollToOrder}
                variant={portion.featured ? "default" : "outline"}
                className={`w-full ${portion.featured ? 'bg-accent hover:bg-accent/90' : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'}`}
              >
                Pesan Sekarang
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortionSizes;
