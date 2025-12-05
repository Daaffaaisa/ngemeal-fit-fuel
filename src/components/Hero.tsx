import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToOrder = () => {
    const element = document.getElementById('order-section');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="gradient-hero py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="NgeMeal Logo" 
              className="h-32 md:h-40 w-auto opacity-90 mix-blend-multiply dark:mix-blend-screen"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Makanan Sehat Presisi <br className="hidden md:block" />
            <span className="text-foreground font-bold">Sesuai Targetmu</span>
          </h1>

          {/* Sub Heading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Atur sendiri porsi protein & karbohidratmu. Dijamin segar dan tersertifikasi keamanan pangan <strong className="text-foreground">HACCP & SLHS</strong>.
          </p>

          {/* Sub Heading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Atur sendiri porsi protein & karbohidratmu. Dijamin segar dan tersertifikasi keamanan pangan <strong className="text-foreground">HACCP & SLHS</strong>.
          </p>

          {/* CTA Button */}
          <div className="mb-8 md:mb-12">
            <Button 
              onClick={scrollToOrder}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-smooth"
            >
              Pesan Sekarang
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-soft border border-border">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold text-foreground">HACCP Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-soft border border-border">
              <Award className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold text-foreground">SLHS</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-soft border border-border">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold text-foreground">Halal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
