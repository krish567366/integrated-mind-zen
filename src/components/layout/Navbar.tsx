import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLeft = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Workshops", path: "/workshops" },
];

const navRight = [
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = ({ overlay = false }: { overlay?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
        <div className="relative flex h-[4.5rem] md:h-20 items-center justify-between">
          {/* Mobile menu */}
          <button
            type="button"
            className="md:hidden p-1 text-foreground/70"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
          </button>

          {/* Desktop left nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 flex-1">
            {navLeft.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Center logo — absolutely centered */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-heading text-[1.05rem] md:text-lg font-normal text-foreground whitespace-nowrap transition-opacity duration-500 hover:opacity-60"
          >
            Integrated Mind
          </Link>

          {/* Desktop right nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 flex-1 justify-end">
            {navRight.map((link) => (
              <Link key={link.path} to={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden w-5" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[4.5rem] bg-background z-40 flex flex-col items-center justify-center gap-10">
          {[...navLeft, ...navRight].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-heading text-2xl font-normal text-foreground/80 hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
