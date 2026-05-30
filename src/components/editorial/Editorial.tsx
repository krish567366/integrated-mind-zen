import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Full viewport-width image between editorial sections */
export const BleedImage = ({ src, alt = "" }: { src: string; alt?: string }) => (
  <figure className="w-full">
    <img src={src} alt={alt} className="block w-full h-auto object-cover" loading="lazy" />
  </figure>
);

/** Squarespace wide inset — centered on page, left-aligned text inside */
export const InsetWide = ({
  children,
  className,
  align = "left",
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) => (
  <div
    className={cn(
      "mx-auto w-full max-w-[1040px] px-6 md:px-12 lg:px-16",
      align === "center" ? "text-center" : "text-left",
      className,
    )}
  >
    {children}
  </div>
);

/** Editorial section vertical rhythm */
export const EditorialSection = ({
  children,
  className,
  tight,
}: {
  children: ReactNode;
  className?: string;
  tight?: boolean;
}) => (
  <section
    className={cn(
      tight ? "py-12 md:py-16" : "py-20 md:py-28 lg:py-36",
      className,
    )}
  >
    {children}
  </section>
);

export const EditorialH2 = ({
  children,
  className,
  center,
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
}) => (
  <h2
    className={cn(
      "font-heading font-normal text-foreground leading-[1.12] tracking-[-0.01em]",
      "text-[clamp(2rem,5vw,3.5rem)]",
      center && "text-center",
      className,
    )}
  >
    {children}
  </h2>
);

export const EditorialBody = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={cn(
      "font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light leading-[1.85] text-foreground/80 space-y-5",
      className,
    )}
  >
    {children}
  </div>
);