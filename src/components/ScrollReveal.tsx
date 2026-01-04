import { useState, useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  animation = "fade-up", 
  delay = 0,
  className = "" 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClass = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
    "scale-in": "animate-scale-in",
  }[animation];

  const delayClass = {
    0: "",
    100: "delay-100",
    200: "delay-200",
    300: "delay-300",
    400: "delay-400",
    500: "delay-500",
    600: "delay-600",
  }[delay] || "";

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `${animationClass} ${delayClass}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
