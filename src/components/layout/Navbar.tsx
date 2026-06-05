import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLeft = [
  { name: "About", path: "/about" },
  { name: "How I Work", path: "/how-i-work" },
  { name: "Services", path: "/services" },
  { name: "Sessions", path: "/sessions" },
];

const navRight = [
  { name: "Articles", path: "/articles" },
  { name: "Contact", path: "/contact" },
];

const navLinks = [...navLeft, ...navRight];

export const Navbar = ({ overlay = false }: { overlay?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClass = (path: string) =>
    cn(
      "font-body text-[0.6875rem] tracking-[0.18em] uppercase transition-opacity duration-500 hover:opacity-60",
      location.pathname === path ? "text-foreground" : "text-foreground/55",
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-foreground/[0.06]",
        overlay ? "bg-background/80 backdrop-blur-[2px]" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Mobile header */}
        <div className="relative z-[60] grid grid-cols-3 items-center h-[4.5rem] md:hidden">
          <button
            type="button"
            className="justify-self-start p-2 -ml-2 text-foreground/70"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
          </button>

          <Link
            to="/"
            className="justify-self-center font-heading text-[1.05rem] font-normal text-foreground whitespace-nowrap transition-opacity duration-500 hover:opacity-60"
          >
            Integrated Mind
          </Link>

          <div className="justify-self-end w-9" aria-hidden="true" />
        </div>

        {/* Desktop header */}
        <div className="relative hidden md:flex h-20 items-center justify-between">
          <nav className="flex items-center gap-8 lg:gap-10 flex-1">
            {navLeft.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-heading text-lg font-normal text-foreground whitespace-nowrap transition-opacity duration-500 hover:opacity-60"
          >
            Integrated Mind
          </Link>

          <nav className="flex items-center gap-8 lg:gap-10 flex-1 justify-end">
            {navRight.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[4.5rem] z-[55] bg-background flex flex-col items-center justify-center gap-8 px-6 overflow-y-auto overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-heading text-2xl font-normal py-2 transition-opacity hover:opacity-60",
                location.pathname === link.path ? "text-foreground" : "text-foreground/80",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
