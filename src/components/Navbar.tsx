import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ngemeal-logo.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="NgeMeal Logo" className="h-12 md:h-14 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-smooth">
              Home
            </button>
            <button onClick={() => scrollToSection('order-section')} className="text-foreground hover:text-primary transition-smooth">
              Pesan Sekarang
            </button>
            <button onClick={() => scrollToSection('jaminan-section')} className="text-foreground hover:text-primary transition-smooth">
              Jaminan Kami
            </button>
            <button onClick={() => scrollToSection('faq-section')} className="text-foreground hover:text-primary transition-smooth">
              FAQ
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-smooth text-left py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('order-section')} className="text-foreground hover:text-primary transition-smooth text-left py-2">
                Pesan Sekarang
              </button>
              <button onClick={() => scrollToSection('jaminan-section')} className="text-foreground hover:text-primary transition-smooth text-left py-2">
                Jaminan Kami
              </button>
              <button onClick={() => scrollToSection('faq-section')} className="text-foreground hover:text-primary transition-smooth text-left py-2">
                FAQ
              </button>
              <Button variant="outline" className="w-full">Login</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
