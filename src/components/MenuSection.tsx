import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import latteArt from "@/assets/latte-art.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import pastries from "@/assets/pastries.jpg";
import espresso from "@/assets/espresso.jpg";
import Capuccino from "@/assets/Cappuccino.jpg";
import Latte from "@/assets/Latte.jpg";
import Mocha from "@/assets/Mocha.jpg";
import icedlatte from "@/assets/iced-latte.jpg";
import coldbrew from "@/assets/coldbrew.jpg";
import smoothie from "@/assets/smoothie.jpg";
import lemonade from "@/assets/lemonade.jpg";
import painauchocolat from "@/assets/painauchocolat.jpg";
import avocadoToast from "@/assets/avocadotoast.jpg";
import vegancookie from "@/assets/vegancookie.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

interface MenuCategory {
  title: string;
  icon: string;
  description: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "Espresso & Coffee",
    icon: "☕",
    description: "All brewed to perfection with premium beans",
    items: [
      { name: "Espresso", description: "Rich, bold, and aromatic", price: "$3.50", image: espresso },
      { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$4.50", image: Capuccino },
      { name: "Latte", description: "Smooth espresso with silky milk", price: "$4.75", image: Latte, tag: "Popular" },
      { name: "Mocha", description: "Chocolate meets espresso", price: "$5.25", image: Mocha },
      { name: "Americano", description: "Espresso diluted with hot water", price: "$3.75", image: espresso },
      { name: "Flat White", description: "Velvety milk with rich espresso", price: "$4.50", image: Latte },
      { name: "Macchiato", description: "Espresso marked with foam", price: "$3.95", image: espresso },
      { name: "Affogato", description: "Espresso poured over vanilla ice cream", price: "$5.75", image: latteArt, tag: "Special" },
    ],
  },
  {
    title: "Cold Beverages",
    icon: "🧊",
    description: "Perfect for a refreshing break",
    items: [
      { name: "Iced Latte", description: "Chilled espresso with cold milk", price: "$5.00", image: icedlatte, tag: "New" },
      { name: "Cold Brew", description: "Smooth, slow-steeped coffee", price: "$4.75", image: coldbrew, tag: "Bestseller" },
      { name: "Iced Mocha", description: "Cold chocolate espresso blend", price: "$5.50", image: icedCoffee },
      { name: "Vanilla Iced Coffee", description: "Sweet vanilla-infused brew", price: "$4.50", image: icedCoffee },
      { name: "Smoothie", description: "Fresh fruit blend", price: "$6.00", image: smoothie },
      { name: "Lemonade", description: "House-made refreshment", price: "$3.50", image: lemonade },
      { name: "Strawberry Lemonade", description: "Lemonade with fresh strawberries", price: "$4.25", image: lemonade },
      { name: "Iced Matcha Latte", description: "Earthy matcha with cold milk", price: "$5.25", image: icedlatte, tag: "Trending" },
    ],
  },
  {
    title: "Pastries & Snacks",
    icon: "🥐",
    description: "Freshly baked daily to satisfy your cravings",
    items: [
      { name: "Croissant", description: "Buttery, flaky perfection", price: "$3.75", image: pastries, tag: "Fresh" },
      { name: "Pain au Chocolat", description: "Chocolate-filled pastry", price: "$4.25", image: painauchocolat },
      { name: "Avocado Toast", description: "Multigrain with fresh avocado", price: "$8.50", image: avocadoToast },
      { name: "Vegan Cookie", description: "Plant-based deliciousness", price: "$3.00", image: vegancookie },
      { name: "Blueberry Muffin", description: "Soft muffin with fresh blueberries", price: "$3.50", image: pastries },
      { name: "Banana Bread", description: "Moist loaf with ripe bananas", price: "$3.75", image: pastries },
      { name: "Cheese Danish", description: "Creamy cheese-filled pastry", price: "$4.00", image: pastries },
      { name: "Chocolate Brownie", description: "Rich and fudgy chocolate treat", price: "$3.95", image: pastries, tag: "Favorite" },
    ],
  },
];


const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");

  // Filtered categories based on active button
  const displayedCategories = activeCategory === "All"
    ? menuCategories
    : menuCategories.filter(category => category.title === activeCategory);

  return (
    <section id="menu" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Our Menu
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Brewed to{" "}
              <span className="italic text-coffee-medium">Perfection</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our menu features a variety of carefully crafted beverages and 
              homemade treats to complement your coffee experience.
            </p>
          </ScrollReveal>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeCategory === "All" ? "bg-accent text-background" : "bg-background text-foreground border"
            }`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {menuCategories.map(category => (
            <button
              key={category.title}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeCategory === category.title
                  ? "bg-accent text-background"
                  : "bg-background text-foreground border"
              }`}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {displayedCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <ScrollReveal delay={categoryIndex * 100}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <ScrollReveal
                    key={item.name}
                    animation="scale-in"
                    delay={(itemIndex + 1) * 100}
                  >
                    <div className="group bg-background rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                      <div className="relative overflow-hidden aspect-square">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {item.tag && (
                          <span className="absolute top-3 right-3 bg-terracotta text-cream text-xs font-semibold px-3 py-1 rounded-full">
                            {item.tag}
                          </span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          <span className="font-semibold text-terracotta">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
