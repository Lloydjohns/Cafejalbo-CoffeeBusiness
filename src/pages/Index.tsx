import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import SpecialtySection from "@/components/SpecialtySection";
import ExperienceSection from "@/components/ExperienceSection";
import ReviewsSection from "@/components/ReviewsSection";
import OrderSection from "@/components/OrderSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <SpecialtySection />
      <ExperienceSection />
      <ReviewsSection />
      <OrderSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
