import { Link } from "react-router-dom";
import RainbowStrip from "./RainbowStrip";
import CursilloLogo from "./CursilloLogo";

const Footer = () => {
  return (
    <footer className="relative" style={{ background: "hsl(var(--charcoal))", color: "rgba(255,255,255,0.6)" }}>
      <RainbowStrip className="absolute top-0 left-0 right-0" />
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/[0.08] mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3.5 mb-3">
              <CursilloLogo width={32} height={41} variant="gold" />
              <div>
                <span className="text-white font-serif text-xl font-semibold block leading-tight">
                  St. Augustine Cursillo
                </span>
                <span className="text-sm">Jacksonville, Florida</span>
              </div>
            </div>
            <span
              className="font-serif italic text-lg font-medium mt-2"
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
