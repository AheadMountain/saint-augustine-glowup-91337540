import { Link } from "react-router-dom";
import RainbowStrip from "./RainbowStrip";

const Footer = () => {
  return (
    <footer className="relative" style={{ background: "hsl(18, 8%, 16%)", color: "rgba(255,255,255,0.6)" }}>
      <RainbowStrip className="absolute top-0 left-0 right-0" />
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/[0.08] mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-3">
              <svg width="28" height="36" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="0" width="8" height="42" rx="1" fill="hsl(348, 70%, 33%)" />
                <rect x="0" y="10" width="32" height="8" rx="1" fill="hsl(348, 70%, 33%)" />
              </svg>
              <div>
                <span className="text-white font-serif text-xl font-semibold block leading-tight">
                  St. Augustine Cursillo
                </span>
                <span className="text-sm">Jacksonville, Florida</span>
              </div>
            </div>
            <span
              className="font-serif italic text-lg font-medium mt-1"
              style={{
                background: "linear-gradient(90deg, hsl(4,65%,48%), hsl(28,80%,52%), hsl(46,88%,50%), hsl(145,63%,42%), hsl(204,60%,44%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              De Colores!
            </span>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-4 font-sans">
              Pages
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { to: "/events", label: "Cursillo Events" },
                { to: "/newsletters", label: "Newsletters" },
                { to: "/documents", label: "Documents" },
                { to: "/secretariat", label: "Secretariat" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/60 hover:text-white transition-colors font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.12em] text-white/40 font-semibold mb-4 font-sans">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <span>Diocese of St. Augustine, FL</span>
              <a
                href="mailto:info@staugustinecursillo.org"
                className="hover:text-white transition-colors"
              >
                info@staugustinecursillo.org
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/30 gap-2">
          <span>© {new Date().getFullYear()} Cursillo Movement — Diocese of St. Augustine</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
