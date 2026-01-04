import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Best coffee in town! The staff is friendly, and the atmosphere is perfect for catching up with friends. I come here every weekend.",
    author: "Sarah M.",
    role: "Regular Customer",
    rating: 5,
  },
  {
    quote: "Love the cozy vibe! It's my go-to spot for studying and enjoying a latte. The WiFi is fast and there's always a quiet corner available.",
    author: "James K.",
    role: "University Student",
    rating: 5,
  },
  {
    quote: "The pastries here are amazing — a must-try with your coffee! I've tried everything on the menu and haven't been disappointed once.",
    author: "Emily R.",
    role: "Food Blogger",
    rating: 5,
  },
  {
    quote: "Finally found my perfect remote work café. Great coffee, comfortable seating, and the baristas remember my order. What more could you want?",
    author: "Michael T.",
    role: "Freelance Designer",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="reviews" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-9xl text-primary/5 font-serif">"</div>
      <div className="absolute bottom-20 right-10 text-9xl text-primary/5 font-serif rotate-180">"</div>

      <div className="container-narrow mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Testimonials
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              What Our Customers Are{" "}
              <span className="italic text-coffee-medium">Saying</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonial Carousel */}
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="relative max-w-3xl mx-auto">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-terracotta" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center min-h-[200px] flex flex-col justify-center">
              <p className="text-foreground text-xl md:text-2xl lg:text-3xl font-display leading-relaxed mb-8 transition-opacity duration-500">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-terracotta text-xl">★</span>
                ))}
              </div>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReviewsSection;
