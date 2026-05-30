import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { EditorialH2, EditorialSection, InsetWide } from "@/components/editorial/Editorial";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for signing up!",
        description: "Please keep an eye out for your future love notes.",
      });
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <EditorialSection>
      <InsetWide align="center" className="space-y-8">
        <EditorialH2 center>Sign up for Mindful Notes</EditorialH2>
        <p className="font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light leading-[1.85] text-foreground/80 max-w-lg mx-auto text-center">
          Sign up to receive Mindful Notes: announcements, exclusive offers, and heart messages
          straight to your inbox.
        </p>

        {submitted ? (
          <p className="font-body text-base font-light text-foreground/75 text-center">
            Thank you for signing up! Please keep an eye out for your future love notes.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto w-full space-y-8 text-left">
            <div className="space-y-3">
              <Label htmlFor="newsletter-email" className="font-body text-sm font-light text-foreground/60">
                Email Address
              </Label>
              <Input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 bg-transparent border-0 border-b border-foreground/15 rounded-none px-0 font-body font-light shadow-none focus-visible:ring-0 focus-visible:border-foreground/40"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-block px-9 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-[0.8125rem] uppercase tracking-[0.14em] transition-opacity duration-500 hover:opacity-80"
            >
              Sign Up
            </button>
          </form>
        )}
      </InsetWide>
    </EditorialSection>
  );
};
