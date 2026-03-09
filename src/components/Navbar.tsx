import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/newsletters", label: "Newsletters" },
  { to: "/media", label: "Media" },
  { to: "/documents", label: "Documents" },
  { to: "/secretariat", label: "Secretariat" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold" style={{ fontFamily: 'system-ui, sans-serif' }}>✝</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-tight text-foreground" style={{ fontFamily: 'system-ui, sans-serif' }}>
              St. Augustine Cursillo
            </span>
            <span className="text-[11px] italic text-primary/80">De Colores!</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm transition-colors",
                location.pathname === link.to
                  ? "bg-primary/10 text-primary font-medium"
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
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background">
            <SheetTitle className="flex items-center gap-2 mb-8 px-1">
              <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">✝</span>
              </div>
              <span style={{ fontFamily: 'system-ui, sans-serif' }}>Menu</span>
            </SheetTitle>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-sm transition-colors",
                    location.pathname === link.to
                      ? "bg-primary/10 text-primary font-medium"
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
    </header>
  );
};

export default Navbar;
