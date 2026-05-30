import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TextLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

/** Secondary CTA with smooth underline growth on hover */
export const TextLink = ({ to, children, className }: TextLinkProps) => {
  return (
    <Link to={to} className={cn("link-underline text-foreground", className)}>
      {children}
    </Link>
  );
};
