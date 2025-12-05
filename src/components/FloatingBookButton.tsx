import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingBookButton = () => {
  return (
    <Button
      variant="gold"
      size="lg"
      className="fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-glow animate-pulse-soft"
      asChild
    >
      <Link to="/contact" className="flex items-center gap-2">
        <Calendar size={20} />
        <span className="hidden sm:inline">Book a Session</span>
      </Link>
    </Button>
  );
};
