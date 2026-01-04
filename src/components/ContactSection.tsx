import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const ScrollReveal = ({ children, delay = 0, animation }: { children: React.ReactNode; delay?: number; animation?: string }) => (
  <div style={{ transitionDelay: `${delay}ms` }}>{children}</div>
);

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["25st Bagbaguin", "Meycauayan City of Bulacan, 3020"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+63 912 345 6789"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["cafejalbo@gmail.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 7am - 8pm", "Sat-Sun: 8am - 9pm"],
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent! ✨",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Contact Us
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Get In{" "}
              <span className="italic text-coffee-medium">Touch</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question, a special 
              request, or just want to say hello, feel free to reach out.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal animation="slide-right">
            <div className="bg-secondary rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="flex w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary transition-all duration-200 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <ScrollReveal animation="slide-left">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-secondary rounded-xl p-5 hover:shadow-soft transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            {/* Google Map */}
<ScrollReveal animation="slide-left" delay={200}>
  <div className="bg-secondary rounded-2xl overflow-hidden h-64 lg:h-80">
    <iframe
      title="Cafe Jalbo Location"
      src="https://www.google.com/maps?q=25st%20Bagbaguin%20Meycauayan%20Bulacan&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
