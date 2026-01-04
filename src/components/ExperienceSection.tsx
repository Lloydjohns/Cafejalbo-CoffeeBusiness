import { Wifi, Music, Armchair } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import cafeInterior from "@/assets/cafe-interior.jpg";

const features = [
  {
    icon: Armchair,
    title: "Cozy Ambiance",
    description: "Enjoy our warm, inviting interior designed to make every visit feel like a retreat. Comfortable seating, soft lighting, and the aroma of fresh coffee.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi & Work-Friendly",
    description: "Perfect for students, remote workers, or anyone looking for a productive space with great coffee. Power outlets at every table.",
  },
  {
    icon: Music,
    title: "Live Music & Events",
    description: "Join us for live acoustic sessions, open mic nights, and community events. Check our event calendar for upcoming performances.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-current rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-current rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-current rounded-full" />
      </div>

      <div className="container-narrow mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="text-terracotta-light font-medium tracking-wide uppercase text-sm">
                The Experience
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
                More Than Just{" "}
                <span className="italic text-terracotta-light">Coffee</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
                At Cafejalbó, it's all about the experience. Whether you're here 
                for a quick coffee break or to hang out with friends, our café is 
                designed to make you feel at home.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} animation="slide-right" delay={(index + 1) * 150}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-terracotta/30 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-terracotta-light" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                      <p className="text-primary-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <ScrollReveal animation="slide-left" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-terracotta/20 rounded-3xl rotate-2" />
              <img
                src={cafeInterior}
                alt="Cozy café interior with people relaxing"
                className="relative rounded-2xl shadow-glow w-full aspect-[4/3] object-cover"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm text-foreground px-6 py-4 rounded-xl shadow-medium grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="block font-display text-2xl text-primary">50+</span>
                  <span className="text-sm text-muted-foreground">Seats</span>
                </div>
                <div className="text-center border-x border-border">
                  <span className="block font-display text-2xl text-primary">24</span>
                  <span className="text-sm text-muted-foreground">Power Outlets</span>
                </div>
                <div className="text-center">
                  <span className="block font-display text-2xl text-primary">100+</span>
                  <span className="text-sm text-muted-foreground">Mbps WiFi</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
