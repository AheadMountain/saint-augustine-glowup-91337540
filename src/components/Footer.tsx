import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>
              St. Augustine Cursillo
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cursillos in Christianity<br />Diocese of St. Augustine, Florida
            </p>
            <p className="text-base italic text-primary mt-1">De Colores!</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Pages
            </h3>
            <nav className="flex flex-col gap-1.5">
              {[
                { to: "/events", label: "Events & Schedule" },
                { to: "/newsletters", label: "Newsletters" },
                { to: "/documents", label: "Documents" },
                { to: "/secretariat", label: "Secretariat" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Diocese of St. Augustine, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <a href="mailto:info@staugustinecursillo.org" className="hover:text-primary transition-colors">
                  info@staugustinecursillo.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Cursillo Movement — Diocese of St. Augustine
        </div>
      </div>
    </footer>
  );
};

export default Footer;
