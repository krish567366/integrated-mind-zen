import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const workshops = [
  {
    title: "Mindfulness Foundations",
    date: "January 15-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Serenity Center, Mindful City",
    spots: 12,
    price: "$495",
    description: "A transformative 3-day immersion into the core practices of mindfulness meditation.",
    tag: "Beginner Friendly",
  },
  {
    title: "Emotional Intelligence Workshop",
    date: "February 8, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Online via Zoom",
    spots: 20,
    price: "$195",
    description: "Develop deep emotional awareness and learn to navigate feelings with wisdom.",
    tag: "Popular",
  },
  {
    title: "Weekend Meditation Retreat",
    date: "March 21-23, 2025",
    time: "All Day",
    location: "Mountain Haven Retreat Center",
    spots: 8,
    price: "$795",
    description: "A silent weekend retreat for deepening your meditation practice in nature.",
    tag: "Limited Spots",
  },
  {
    title: "Cognitive Clarity Bootcamp",
    date: "April 5-6, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Serenity Center, Mindful City",
    spots: 15,
    price: "$395",
    description: "Intensive training in cognitive techniques for clearer thinking and better decisions.",
    tag: "New",
  },
];

const Workshops = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Received!",
      description: "We'll contact you shortly with more details about the workshop.",
    });
    setFormData({ name: "", email: "", workshop: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 pt-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 animate-reveal">
              Workshops & Retreats
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-reveal delay-reveal-200">
              Immersive experiences designed to deepen your practice, expand your awareness, 
              and connect with a community of like-minded seekers.
            </p>
          </div>
        </div>
      </section>

      {/* Link to full Pricing & Schedule page */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button variant="outline" asChild>
            <Link to="/workshops/pricing-schedule" className="gap-2">
              View Full Pricing & Schedule
            </Link>
          </Button>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <div
                key={workshop.title}
                className="p-8 rounded-3xl bg-secondary/30 border border-foreground/10 transition-opacity duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-primary text-xs font-medium">
                    {workshop.tag}
                  </span>
                  <span className="font-heading text-2xl font-normal text-primary">
                    {workshop.price}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-normal text-foreground mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {workshop.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    {workshop.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {workshop.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    {workshop.spots} spots available
                  </div>
                </div>
                <Button variant="hero" className="w-full gap-2" asChild>
                  <a href="#register">
                    Register Now
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-normal text-foreground mb-4">
                Register for a Workshop
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you with all the details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl bg-background ">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Workshop
                </label>
                <select
                  value={formData.workshop}
                  onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                >
                  <option value="">Select a workshop</option>
                  {workshops.map((w) => (
                    <option key={w.title} value={w.title}>
                      {w.title} - {w.date}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any questions or special requirements?"
                  rows={4}
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default Workshops;
