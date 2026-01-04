import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import caramelMacchiato from "@/assets/caramel-macchiato.jpg";
import matchaLatte from "@/assets/matcha-latte.jpg";

const specialtyDrinks = [
  {
    name: "Caramel Cloud",
    description: "A dreamy blend of rich espresso, velvety caramel, and our signature house-made whipped cream. Topped with a drizzle of butterscotch and a sprinkle of sea salt.",
    ingredients: ["Double espresso", "House caramel", "Oat milk foam", "Sea salt"],
    image: caramelMacchiato,
    price: "$6.50",
  },
  {
    name: "Zen Garden Matcha",
    description: "Premium ceremonial grade matcha whisked to perfection with your choice of milk. A vibrant, earthy experience that's as beautiful as it is delicious.",
    ingredients: ["Ceremonial matcha", "Oat or almond milk", "Light honey", "Vanilla"],
    image: matchaLatte,
    price: "$5.75",
  },
];

const SpecialtySection = () => {
  return (
    <section id="specialty" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Signature Creations
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Our{" "}
              <span className="italic text-coffee-medium">Specialty</span> Drinks
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Try something unique with our signature drinks! Each one is crafted 
              with love, combining the finest ingredients and a touch of creativity.
            </p>
          </ScrollReveal>
        </div>

        {/* Specialty Drinks Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {specialtyDrinks.map((drink, index) => (
            <ScrollReveal
              key={drink.name}
              animation={index % 2 === 0 ? "slide-right" : "slide-left"}
              delay={index * 200}
            >
              <div className="group bg-secondary rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square md:aspect-auto">
                    <img
                      src={drink.image}
                      alt={drink.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/80 opacity-0 md:opacity-100" />
                    
                    {/* Price Badge */}
                    <div className="absolute bottom-4 left-4 md:hidden bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                      {drink.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="hidden md:block text-terracotta font-semibold text-lg mb-2">
                      {drink.price}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                      {drink.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {drink.description}
                    </p>
                    
                    {/* Ingredients */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {drink.ingredients.map((ingredient) => (
                        <span
                          key={ingredient}
                          className="bg-sage/20 text-sage px-3 py-1 rounded-full text-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" className="self-start">
                      Order This
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
