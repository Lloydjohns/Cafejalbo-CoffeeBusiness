import ScrollReveal from "@/components/ScrollReveal";
import latteArt from "@/assets/latte-art.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-warm">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal animation="slide-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-terracotta/10 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-sage/10 rounded-3xl -rotate-2" />
              <img
                src={latteArt}
                alt="Beautiful latte art"
                className="relative rounded-2xl shadow-medium w-full aspect-square object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-medium">
                <span className="font-display text-3xl font-bold">10+</span>
                <span className="block text-sm opacity-90">Years of Passion</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="lg:pl-8">
            <ScrollReveal animation="fade-up">
              <span className="text-accent font-medium tracking-wide uppercase text-sm">
                Our Story
              </span>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
                Crafting Moments,{" "}
                <span className="italic text-coffee-medium">One Cup at a Time</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Cafejalbó, we're not just serving coffee; we're creating memories. 
                We believe that every cup should bring a smile, whether it's your morning 
                pick-me-up or an afternoon break.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With locally sourced ingredients, expert baristas, and a warm, welcoming 
                environment, we're here to make every visit special. Our beans are 
                ethically sourced from small farms around the world, roasted to perfection 
                right here in our café.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-terracotta/20 rounded-full flex items-center justify-center">
                    <span className="text-terracotta text-xl">☕</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">Premium Beans</span>
                    <span className="text-sm text-muted-foreground">Ethically sourced</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                    <span className="text-sage text-xl">🌿</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">Fresh & Local</span>
                    <span className="text-sm text-muted-foreground">Daily baked goods</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
