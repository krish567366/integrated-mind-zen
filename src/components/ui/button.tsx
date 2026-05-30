import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground uppercase tracking-widest text-xs transition-colors duration-500 ease-in-out hover:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground transition-colors duration-500 ease-in-out hover:bg-destructive/80",
        outline:
          "border border-primary bg-transparent text-primary transition-colors duration-500 ease-in-out hover:bg-primary/10",
        secondary:
          "bg-secondary text-secondary-foreground transition-colors duration-500 ease-in-out hover:bg-secondary/80",
        ghost: "transition-opacity duration-500 ease-in-out hover:opacity-70",
        link: "text-primary underline-offset-4 transition-opacity duration-500 ease-in-out hover:underline hover:opacity-80",
        hero:
          "bg-primary text-primary-foreground uppercase tracking-widest text-xs font-medium transition-colors duration-500 ease-in-out hover:bg-primary/80",
        "hero-outline":
          "link-underline bg-transparent text-foreground rounded-none px-0 h-auto py-1 font-heading font-normal tracking-wide border-0 shadow-none transition-opacity duration-500 ease-in-out hover:opacity-80",
        inline:
          "link-underline bg-transparent text-foreground rounded-none px-0 h-auto py-1 font-heading font-normal tracking-wide border-0 shadow-none transition-opacity duration-500 ease-in-out hover:opacity-80",
      },
      size: {
        default: "h-10 px-8 py-4",
        sm: "h-9 px-4",
        lg: "h-12 px-8 py-4 text-sm",
        xl: "h-14 px-10 py-4 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
