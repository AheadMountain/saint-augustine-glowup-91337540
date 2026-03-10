import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import RainbowStrip from "./RainbowStrip";
import CursilloLogo from "./CursilloLogo";

interface NavItem {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
}

const navLinks: NavItem[] = [
  { to: "/", label: "Home", children: [
    { to: "/contact", label: "Contact Us" },
    { to: "/mail-list", label: "Mail List" },
    { to: "/mail-list-espanol", label: "Mail List Español" },
  ]},
  { to: "/events", label: "Events", children: [
    { to: "/upcoming-weekends", label: "Upcoming Weekends" },
    { to: "/the-3-day-weekend", label: "The 3-Day Weekend" },
    { to: "/memorial-mass", label: "Advent Memorial Mass" },
    { to: "/school-of-leaders", label: "School of Leaders" },
    { to: "/ultreya", label: "Ultreya" },
    { to: "/pre-cursillo", label: "Pre-Cursillo" },
    { to: "/post-cursillo", label: "Post-Cursillo" },
    { to: "/your-4th-day", label: "Your 4th Day" },
    { to: "/group-reunions", label: "Group Reunions" },
    { to: "/day-of-reflection", label: "Day of Reflection" },
    { to: "/regional-encounter-photos", label: "Regional Encounter Photos" },
  ]},
  { to: "/newsletters", label: "Newsletters", children: [
    { to: "/testimonials", label: "Testimonials" },
    { to: "/in-remembrance", label: "In Remembrance" },
  ]},
  { to: "/media", label: "Media", children: [
    { to: "/photo-gallery", label: "Photo Gallery" },
    { to: "/links", label: "Links" },
    { to: "/videos", label: "Videos" },
  ]},
  { to: "/documents", label: "Documents" },
  { to: "/secretariat", label: "Secretariat" },
];

const DropdownMenu = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  if (!item.children) {
    return (
      <Link
        to={item.to}
        className={cn(
          "text-sm font-medium font-sans transition-colors link-underline",
          isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        to={item.to}
        className={cn(
          "text-sm font-medium font-sans transition-colors link-underline inline-flex items-center gap-1",
          isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")} />
      </Link>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="bg-popover border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-fade-in">
            {item.children.map((child) => (
              <Link
                key={child.to}
                to={child.to}
                className={cn(
                  "block px-4 py-2 text-sm font-sans transition-colors",
                  location.pathname === child.to
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:bg-accent hover:text-primary"
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setMobileExpanded(null);
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
              <DropdownMenu
                key={link.to}
                item={link}
                isActive={location.pathname === link.to}
              />
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
              <div key={link.to}>
                <div className="flex items-center justify-between border-b border-border">
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "py-3.5 px-0 text-lg font-medium font-sans transition-colors flex-1",
                      location.pathname === link.to ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.to ? null : link.to)}
                      className="p-2"
                      aria-label={`Expand ${link.label}`}
                    >
                      <ChevronDown className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform duration-200",
                        mobileExpanded === link.to && "rotate-180"
                      )} />
                    </button>
                  )}
                </div>
                {link.children && mobileExpanded === link.to && (
                  <div className="pl-4 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block py-2.5 text-base font-sans transition-colors",
                          location.pathname === child.to ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
