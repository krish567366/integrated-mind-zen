import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { EditorialH2, EditorialSection, InsetWide } from "@/components/editorial/Editorial";

export const Footer = () => {
  return (
    <footer className="border-t border-foreground/[0.06]">
      <EditorialSection tight>
        <InsetWide align="center" className="space-y-8">
          <EditorialH2 center>
            Reimagine. Reclaim. Rebirth. Unleash <em>Your</em> Light.
          </EditorialH2>
          <p className="font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light leading-[1.85] text-foreground/80 text-center max-w-2xl mx-auto">
            For the past two decades, Vibhu has been supporting awakening seekers, heart-led leaders,
            and modern-day mystics come home to the unique expression of who they are. To get started,
            explore the programs and offers.
          </p>
        </InsetWide>
      </EditorialSection>

      <div className="mx-auto max-w-[1040px] px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-foreground/[0.06]">
          <div>
            <p className="font-body text-[0.6875rem] tracking-[0.18em] uppercase text-foreground mb-5">
              Work With Vibhu
            </p>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "All Services", path: "/services" },
                { label: "Workshops", path: "/workshops" },
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
                { label: "Blog", path: "/blog" },
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
