import { useRef, type ReactNode, type CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Trigger reveal immediately (above-the-fold hero content) */
  immediate?: boolean;
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  immediate = false,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(ref, { threshold: 0.15 });
  const revealed = immediate || isVisible;

  const style: CSSProperties | undefined =
    revealed && delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={immediate ? undefined : ref}
      className={cn(!revealed && "opacity-0", revealed && "animate-reveal", className)}
      style={style}
    >
      {children}
    </div>
  );
};
