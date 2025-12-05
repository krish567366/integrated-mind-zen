import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                <span className="font-heading text-forest text-xl font-bold">IM</span>
              </div>
              <span className="font-heading text-xl font-semibold">Integrated Mind</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Guiding you towards cognitive clarity, emotional healing, and spiritual transformation through mindfulness and holistic wellness practices.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Workshops", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {["Cognitive Thinking", "Meditation Therapy", "Mindfulness Coaching", "Emotional Resilience", "1:1 Consultation"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Serenity Lane, Mindful City, MC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:hello@integratedmind.com" className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm">
                  hello@integratedmind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Integrated Mind. All rights reserved. Crafted with intention and care.
          </p>
        </div>
      </div>
    </footer>
  );
};
