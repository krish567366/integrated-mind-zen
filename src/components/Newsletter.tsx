import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to our community!",
        description: "You'll receive mindful insights and updates in your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sage/30 via-background to-lavender/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 animate-fade-in-up">
            Begin Your Mindful Journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive weekly insights on meditation, mindfulness, and holistic wellness. 
            Join our community of seekers and healers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background/80 border-border/50 focus:border-sage rounded-full px-6"
              required
            />
            <Button type="submit" variant="hero" size="lg" className="gap-2">
              <Send size={18} />
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
