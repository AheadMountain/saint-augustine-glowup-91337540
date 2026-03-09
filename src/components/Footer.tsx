import { Cross, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Cross className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold" style={{ fontFamily: 'system-ui, sans-serif' }}>
                St. Augustine Cursillo
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Cursillos in Christianity — Diocese of St. Augustine, Florida
            </p>
            <p className="text-lg italic text-primary font-semibold">De Colores!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/events", label: "Events & Schedule" },
                { to: "/newsletters", label: "Newsletters" },
                { to: "/documents", label: "Documents & Applications" },
                { to: "/secretariat", label: "Secretariat" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3 text-sm uppercase tracking-wider" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Diocese of St. Augustine, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@staugustinecursillo.org" className="hover:text-primary transition-colors">
                  info@staugustinecursillo.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} Cursillo Movement — Diocese of St. Augustine. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
