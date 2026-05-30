import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const FloatingBookButton = () => {
  return (
    <Button
      variant="hero"
      size="default"
      className="fixed bottom-6 right-6 z-50"
      asChild
    >
      <Link to="/contact">
        <span className="hidden sm:inline">Let's Begin</span>
        <span className="sm:hidden">Begin</span>
      </Link>
    </Button>
  );
};
