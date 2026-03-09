import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import cursilloLogo from "@/assets/cursillo-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Rainbow stripe */}
      <div className="h-1 flex">
        <div className="flex-1 bg-rainbow-red" />
        <div className="flex-1 bg-rainbow-orange" />
        <div className="flex-1 bg-rainbow-yellow" />
        <div className="flex-1 bg-rainbow-green" />
        <div className="flex-1 bg-rainbow-blue" />
        <div className="flex-1 bg-rainbow-purple" />
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={cursilloLogo} alt="Cursillo" className="h-10 w-auto rounded" />
              <div>
                <span className="text-sm font-bold block" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  St. Augustine Cursillo
                </span>
                <span className="text-xs opacity-70">Jacksonville, Florida</span>
              </div>
            </div>
            <p className="text-lg italic font-semibold text-amber-400 mt-1">De Colores!</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Pages
            </h3>
            <nav className="flex flex-col gap-1.5">
              {[
                { to: "/events", label: "Cursillo Events" },
                { to: "/newsletters", label: "Newsletters" },
                { to: "/documents", label: "Documents" },
                { to: "/secretariat", label: "Secretariat" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span>Diocese of St. Augustine, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <a href="mailto:info@staugustinecursillo.org" className="hover:opacity-100 transition-opacity">
                  info@staugustinecursillo.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-background/10 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Cursillo Movement — Diocese of St. Augustine
        </div>
      </div>
    </footer>
  );
};

export default Footer;
