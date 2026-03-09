import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import RainbowStrip from "./RainbowStrip";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/newsletters", label: "Newsletters" },
  { to: "/documents", label: "Documents" },
  { to: "/secretariat", label: "Secretariat" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Fixed rainbow strip */}
      <RainbowStrip className="fixed top-0 left-0 right-0 z-[200]" />

      {/* Nav */}
      <header className="fixed top-[5px] left-0 right-0 z-[100] bg-background/95 backdrop-blur-md border-b">
        <div className="container flex h-[68px] items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            {/* Cross SVG logo mark */}
            <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="0" width="8" height="42" rx="1" fill="hsl(348, 70%, 33%)" />
              <rect x="0" y="10" width="32" height="8" rx="1" fill="hsl(348, 70%, 33%)" />
              <rect x="13" y="1" width="6" height="40" rx="0.5" fill="hsl(43, 50%, 54%)" opacity="0.3" />
            </svg>
            <div>
              <span className="text-lg font-semibold font-serif text-foreground leading-tight block">
                Cursillo
              </span>
              <span className="text-xs text-muted-foreground font-sans">
                Diocese of St. Augustine
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium font-sans transition-colors",
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
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold font-sans hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[73px] inset-x-0 bottom-0 bg-background z-[99] p-6 lg:hidden overflow-y-auto">
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
