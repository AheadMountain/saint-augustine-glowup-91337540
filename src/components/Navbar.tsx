import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import RainbowStrip from "./RainbowStrip";
import CursilloLogo from "./CursilloLogo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/newsletters", label: "Newsletters" },
  { to: "/documents", label: "Documents" },
  { to: "/secretariat", label: "Secretariat" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <RainbowStrip className="fixed top-0 left-0 right-0 z-[200]" />

      <header
        className={cn(
          "fixed top-[5px] left-0 right-0 z-[100] bg-background/95 backdrop-blur-md border-b transition-shadow duration-300",
          scrolled && "shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
        )}
      >
        <div className="container flex h-[68px] items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <CursilloLogo width={36} height={46} variant="dark" />
            <div>
              <span className="text-lg font-semibold font-serif text-foreground leading-tight block">
                Cursillo
              </span>
              <span className="text-xs text-muted-foreground font-sans">
                Diocese of St. Augustine
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium font-sans transition-colors link-underline",
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/documents"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold font-sans hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply Now
            </Link>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed top-[73px] inset-x-0 bottom-0 bg-background z-[99] p-6 lg:hidden overflow-y-auto animate-fade-in">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3.5 px-0 text-lg font-medium font-sans border-b border-border transition-colors",
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/documents"
              onClick={() => setOpen(false)}
              className="mt-6 bg-primary text-primary-foreground py-3.5 rounded-lg text-center text-base font-semibold font-sans"
            >
              Apply for a Weekend
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
