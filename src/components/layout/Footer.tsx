import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { EditorialH2, EditorialSection, InsetWide } from "@/components/editorial/Editorial";

export const Footer = () => {
  return (
    <footer className="border-t border-foreground/[0.06]">
      <EditorialSection tight>
        <InsetWide align="center" className="space-y-8">
          <EditorialH2 center>Integrated Mind</EditorialH2>
          <p className="font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light leading-[1.85] text-foreground/80 text-center max-w-2xl mx-auto">
            Understanding the patterns of the mind where suffering begins and clarity naturally emerges.
            A thoughtful space for those who wish to understand themselves more deeply through awareness,
            insight, and compassionate understanding.
          </p>
        </InsetWide>
      </EditorialSection>

      <div className="mx-auto max-w-[1040px] px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-foreground/[0.06]">
          <div>
            <p className="font-body text-[0.6875rem] tracking-[0.18em] uppercase text-foreground mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "How I Work", path: "/how-i-work" },
                { label: "All Services", path: "/services" },
                { label: "Sessions", path: "/sessions" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-body text-sm text-foreground/65 font-light hover:opacity-60 transition-opacity duration-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-[0.6875rem] tracking-[0.18em] uppercase text-foreground mb-5">
              Connect & Explore
            </p>
            <ul className="space-y-3">
              {[
                { label: "Articles", path: "/articles" },
                { label: "Meditation", path: "/meditate/why-meditation" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-body text-sm text-foreground/65 font-light hover:opacity-60 transition-opacity duration-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-foreground/[0.06] text-center space-y-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/50 hover:opacity-60 transition-opacity duration-500"
          >
            <Instagram size={14} strokeWidth={1.25} />
            Follow <em>@IntegratedMind</em> on Instagram
          </a>
          <p className="font-body text-xs text-foreground/40 font-light">
            © {new Date().getFullYear()} Integrated Mind. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
