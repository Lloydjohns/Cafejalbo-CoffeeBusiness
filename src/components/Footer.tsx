import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Menu", href: "#menu" },
    { label: "About Us", href: "#about" },
    { label: "Order Online", href: "#order" },
    { label: "Contact Us", href: "#contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow mx-auto section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-cream/20 rounded-full">
                <Coffee className="w-6 h-6 text-cream" />
              </div>
              <span className="font-display text-2xl font-semibold">
                Cafejalbó
              </span>
            </a>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">
              Where every sip feels like home. Join us for artisan coffee, 
              fresh pastries, and a warm, welcoming atmosphere.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Location */}
          <div>
            <h4 className="font-display text-lg mb-5">Hours & Location</h4>
            <div className="space-y-4 text-primary-foreground/70">
              <div>
                <p className="font-medium text-primary-foreground mb-1">Hours</p>
                <p>Mon - Fri: 7am - 8pm</p>
                <p>Sat - Sun: 8am - 9pm</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground mb-1">Address</p>
                <p>123 Coffee Street</p>
                <p>Downtown, City 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Cafejalbó. All rights reserved.</p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
