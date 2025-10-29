import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/ngemeal-logo.jpg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="NgeMeal Logo" className="h-16 mb-4" />
            <p className="text-muted-foreground mb-4 max-w-md">
              Makanan sehat presisi dengan jaminan keamanan pangan tertinggi. 
              Dari peternakan kami ke meja Anda.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="mailto:info@ngemeal.com" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('order-section')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Pesan Sekarang
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('jaminan-section')} className="text-muted-foreground hover:text-primary transition-smooth">
                  Jaminan Kami
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq-section')} className="text-muted-foreground hover:text-primary transition-smooth">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>info@ngemeal.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 NgeMeal. Semua hak dilindungi. HACCP & SLHS Certified.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
