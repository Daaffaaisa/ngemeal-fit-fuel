import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/hooks/useCart";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-border shadow-soft' 
        : 'bg-transparent border-transparent'
    }`}>
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
            {user ? (
              <>
                <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/cart')}>
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => signOut()}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate('/auth')}>
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/cart')}>
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
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
              {user ? (
                <Button variant="outline" className="w-full" onClick={() => { signOut(); setMobileMenuOpen(false); }}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <Button className="w-full" onClick={() => { navigate('/auth'); setMobileMenuOpen(false); }}>
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
