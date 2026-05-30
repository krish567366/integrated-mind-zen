import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const pillClass =
  "inline-block px-9 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-[0.8125rem] font-normal transition-opacity duration-500 hover:opacity-80";

export const EditorialPillLink = ({
  to,
  children,
  uppercase,
  className,
}: {
  to: string;
  children: React.ReactNode;
  uppercase?: boolean;
  className?: string;
}) => (
  <Link
    to={to}
    className={cn(
      pillClass,
      uppercase ? "uppercase tracking-[0.14em]" : "tracking-wide",
      className,
    )}
  >
    {children}
  </Link>
);
