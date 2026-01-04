import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import cafeHeroImage from "@/assets/cafe-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={cafeHeroImage}
          alt="Cozy café interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/70 via-coffee-dark/50 to-coffee-dark/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-terracotta/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-sage/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Steam Animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-1 h-8 bg-cream/30 rounded-full animate-steam" style={{ animationDelay: "0s" }} />
              <div className="w-1 h-6 bg-cream/20 rounded-full animate-steam" style={{ animationDelay: "0.5s" }} />
              <div className="w-1 h-10 bg-cream/30 rounded-full animate-steam" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>

        <span className="inline-block text-cream/80 text-sm sm:text-base tracking-[0.3em] uppercase mb-4 animate-fade-up">
          Artisan Coffee & Cozy Vibes
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6 animate-fade-up delay-100">
          Welcome to{" "}
          <span className="italic text-terracotta-light">Cafejalbó</span>
        </h1>

        <p className="text-cream/90 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
          Where Every Sip Feels Like Home
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <Button variant="default" size="lg" asChild>
            <a href="#menu">Explore Our Menu</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#order">Order Now</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition-colors"
        >
          <span className="text-sm tracking-wider">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
