import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#specialty", label: "Specialty" },
    { href: "#experience", label: "Experience" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-full transition-colors duration-300 ${
              isScrolled ? "bg-primary" : "bg-cream/20"
            }`}>
              <Coffee className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? "text-primary-foreground" : "text-cream"
              }`} />
            </div>
            <span className={`font-display text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-cream"
            }`}>
              Cafejalbó
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 hover:opacity-70 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled 
                    ? "text-foreground after:bg-primary" 
                    : "text-cream/90 after:bg-cream"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant={isScrolled ? "default" : "heroOutline"}
              size="sm"
              asChild
            >
              <a href="#order">Order Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-cream"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-cream"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`flex flex-col gap-4 py-4 px-2 rounded-lg ${
            isScrolled ? "bg-secondary" : "bg-coffee-dark/90 backdrop-blur-sm"
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium py-2 px-4 rounded-md transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:bg-muted" 
                    : "text-cream hover:bg-cream/10"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="lg" className="mt-2" asChild>
              <a href="#order">Order Now</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
