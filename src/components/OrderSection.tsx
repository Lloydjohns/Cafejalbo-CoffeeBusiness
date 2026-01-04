import { ShoppingBag, Clock, Truck, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { id: 1, name: "Espresso", description: "Strong and bold shot of coffee.", price: 3.5 },
  { id: 2, name: "Cappuccino", description: "Espresso with steamed milk and foam.", price: 4.5 },
  { id: 3, name: "Latte", description: "Creamy espresso with lots of milk.", price: 5.0 },
  { id: 4, name: "Croissant", description: "Buttery flaky pastry.", price: 2.5 },
  { id: 5, name: "Blueberry Muffin", description: "Sweet muffin with fresh blueberries.", price: 3.0 },
];

const OrderSection = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", items: "", instructions: "" });
  const [quantities, setQuantities] = useState(MENU_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}));

  const handleQtyChange = (id, delta) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) }));
  };

  const totalPrice = MENU_ITEMS.reduce(
    (sum, item) => sum + (quantities[item.id] || 0) * item.price,
    0
  );

  const handleMenuOrderNow = () => {
    const orderedItems = MENU_ITEMS.filter(item => quantities[item.id] > 0)
      .map(item => `${quantities[item.id]}x ${item.name} ($${item.price.toFixed(2)} each)`)
      .join("\n");
    setFormData(prev => ({ ...prev, items: orderedItems, instructions: "" }));
    setMenuModalOpen(false);
    setOrderModalOpen(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank you! Your order has been received.");
    setFormData({ name: "", email: "", phone: "", items: "", instructions: "" });
    setOrderModalOpen(false);
    setQuantities(MENU_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}));
  };

  return (
    <section id="order" className="section-padding bg-gradient-warm relative overflow-hidden">
      <div className="container-narrow mx-auto relative">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-glow">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 text-primary-foreground">
              <ScrollReveal>
                <span className="font-medium tracking-wide uppercase text-sm" style={{ color: "#5c3b23" }}>
                  Order Online
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6" style={{ color: "#5c3b23" }}>
                  Craving Our Coffee?{" "}
                  <span className="italic block" style={{ color: "#d9b2a5" }}>Order Online!</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "#98a7b5" }}>
                  Can't make it to the café? No problem! Order your favorite drinks 
                  and snacks online for pickup or delivery. Freshly brewed and ready 
                  when you are.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                  <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ backgroundColor: "#f0f4f5" }}>
                    <ShoppingBag className="w-8 h-8 mb-3" style={{ color: "#5c3b23" }} />
                    <span className="font-medium" style={{ color: "#5c3b23" }}>Easy Ordering</span>
                    <span className="text-sm" style={{ color: "#98a7b5" }}>Quick & simple</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ backgroundColor: "#f0f4f5" }}>
                    <Clock className="w-8 h-8 mb-3" style={{ color: "#5c3b23" }} />
                    <span className="font-medium" style={{ color: "#5c3b23" }}>Ready in 15min</span>
                    <span className="text-sm" style={{ color: "#98a7b5" }}>For pickup</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl" style={{ backgroundColor: "#f0f4f5" }}>
                    <Truck className="w-8 h-8 mb-3" style={{ color: "#5c3b23" }} />
                    <span className="font-medium" style={{ color: "#5c3b23" }}>Free Delivery</span>
                    <span className="text-sm" style={{ color: "#98a7b5" }}>On orders $25+</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  {/* Internal navigation buttons */}
                  <Button
                    onClick={() => setOrderModalOpen(true)}
                    className="transition-transform hover:scale-105 focus:scale-105"
                    style={{ backgroundColor: "#5c3b23", color: "#f0f4f5" }}
                  >
                    Order Now
                  </Button>

                    <Button
                    onClick={() => setMenuModalOpen(true)}
                    className="transition-transform hover:scale-105 focus:scale-105"
                    style={{ backgroundColor: "#fff", color: "#5c3b23", border: "1px solid #d9b2a5" }}
                    >
                    Open OrderPos
                    </Button>

                    {menuModalOpen && (
                    <div
                      className="fixed inset-0 z-50 flex items-center justify-center"
                      style={{ backgroundColor: "rgba(217,178,165,0.3)" }}
                      onClick={() => setMenuModalOpen(false)}
                    >
                      <div
                      className="relative w-full max-w-4xl p-6 rounded-2xl shadow-lg overflow-hidden"
                      style={{ backgroundColor: "#f0f4f5", color: "#5c3b23" }}
                      onClick={(e) => e.stopPropagation()}
                      >
                      <button onClick={() => setMenuModalOpen(false)} className="absolute top-4 right-4" style={{ color: "#5c3b23" }}>
                        <X className="w-6 h-6" />
                      </button>
                      <div className="w-full h-[70vh]">
                        <iframe
                        src="/orderpos"
                        title="OrderPos"
                        className="w-full h-full border-none rounded-lg"
                        />
                      </div>
                      </div>
                    </div>
                    )}

                  <Link to="/full-menu">
                    <Button
                      className="transition-transform hover:scale-105 focus:scale-105"
                      style={{ backgroundColor: "#5c3b23", color: "#f0f4f5" }}
                    >
                      View Full Menu
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Decorative Side */}
            <div className="hidden lg:flex items-center justify-center p-12 relative" style={{ backgroundColor: "#d9b2a5" }}>
              <div className="text-center" style={{ color: "#5c3b23" }}>
                <div className="text-8xl mb-4 animate-pulse">☕</div>
                <div className="font-display text-4xl mb-2">Fresh & Hot</div>
                <div className="text-lg" style={{ color: "#98a7b5" }}>Made with love, delivered to you</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(217,178,165,0.3)" }} onClick={() => setOrderModalOpen(false)}>
          <div className="relative w-full max-w-lg p-10 rounded-2xl shadow-lg overflow-y-auto max-h-[90vh]" style={{ backgroundColor: "#f0f4f5", color: "#5c3b23" }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setOrderModalOpen(false)} className="absolute top-5 right-5" style={{ color: "#5c3b23" }}><X className="w-6 h-6" /></button>
            <h3 className="text-3xl font-extrabold mb-6 tracking-wide">Order Your Coffee</h3>
            <form onSubmit={handleSubmit} className="grid gap-5">
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="rounded-lg focus:ring-2 focus:ring-[#d9b2a5]" style={{ borderColor:"#d9b2a5", backgroundColor:"#fff", color:"#5c3b23" }} />
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="rounded-lg focus:ring-2 focus:ring-[#d9b2a5]" style={{ borderColor:"#d9b2a5", backgroundColor:"#fff", color:"#5c3b23" }} />
              <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="rounded-lg focus:ring-2 focus:ring-[#d9b2a5]" style={{ borderColor:"#d9b2a5", backgroundColor:"#fff", color:"#5c3b23" }} />
              <Textarea name="items" value={formData.items} onChange={handleChange} placeholder="Order Items" required className="rounded-lg focus:ring-2 focus:ring-[#d9b2a5] resize-none" style={{ borderColor:"#d9b2a5", backgroundColor:"#fff", color:"#5c3b23" }} />
              <Textarea name="instructions" value={formData.instructions} onChange={handleChange} placeholder="Special Instructions (optional)" className="rounded-lg focus:ring-2 focus:ring-[#d9b2a5] resize-none" style={{ borderColor:"#d9b2a5", backgroundColor:"#fff", color:"#5c3b23" }} />
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default OrderSection;
