import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import cursilloLogo from "@/assets/cursillo-logo.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Cursillo Events" },
  { to: "/newsletters", label: "Newsletters" },
  { to: "/media", label: "Media" },
  { to: "/documents", label: "Documents" },
  { to: "/secretariat", label: "Secretariat" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={cursilloLogo} alt="Cursillo Logo" className="h-10 w-auto rounded" />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold leading-tight text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Cursillos in Christianity
            </span>
            <span className="text-xs text-secondary font-semibold italic">Diocese of St. Augustine</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 text-sm transition-colors",
                location.pathname === link.to
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <SheetTitle className="flex items-center gap-3 mb-6">
              <img src={cursilloLogo} alt="Cursillo" className="h-9 w-auto rounded" />
              <span style={{ fontFamily: 'system-ui, sans-serif' }} className="text-sm font-bold">Cursillo</span>
            </SheetTitle>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2.5 rounded-md text-sm transition-colors",
                    location.pathname === link.to
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      {/* Rainbow stripe */}
      <div className="h-1 flex">
        <div className="flex-1 bg-rainbow-red" />
        <div className="flex-1 bg-rainbow-orange" />
        <div className="flex-1 bg-rainbow-yellow" />
        <div className="flex-1 bg-rainbow-green" />
        <div className="flex-1 bg-rainbow-blue" />
        <div className="flex-1 bg-rainbow-purple" />
      </div>
    </header>
  );
};

export default Navbar;
