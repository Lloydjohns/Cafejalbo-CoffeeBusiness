import { useState } from "react";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Welcome to the family! ☕",
      description: "You'll receive our exclusive offers and updates soon.",
    });

    setEmail("");
    setName("");
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta/20 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-terracotta" />
            </div>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              Stay in the{" "}
              <span className="italic text-coffee-medium">Loop!</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-muted-foreground text-lg mb-10">
              Sign up for our newsletter to get exclusive offers, event updates, 
              and the latest news. Be the first to know about new menu items and 
              seasonal specials!
            </p>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={300}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background"
                />
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                <Mail className="w-5 h-5 mr-2" />
                {isSubmitting ? "Joining..." : "Join Now"}
              </Button>
            </form>
          </ScrollReveal>

          {/* Trust Badges */}
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage rounded-full" />
                No spam, ever
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage rounded-full" />
                Unsubscribe anytime
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage rounded-full" />
                Exclusive deals
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
