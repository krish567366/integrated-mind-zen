import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/Newsletter";
import { Brain, Heart, Leaf, Sparkles, Star, Users, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Brain,
    title: "Cognitive Clarity",
    description: "Unlock mental patterns and cultivate clear, purposeful thinking through evidence-based cognitive training.",
  },
  {
    icon: Heart,
    title: "Emotional Healing",
    description: "Release emotional blocks and nurture inner peace through compassionate therapeutic approaches.",
  },
  {
    icon: Leaf,
    title: "Mindful Living",
    description: "Integrate mindfulness into daily life for lasting balance, presence, and authentic well-being.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    description: "Explore your inner landscape and connect with deeper meaning through guided spiritual practices.",
  },
];

const testimonials = [
  {
    quote: "Integrated Mind transformed my relationship with stress. I now approach challenges with calm clarity.",
    author: "Sarah M.",
    role: "Creative Director",
  },
  {
    quote: "The meditation sessions opened a door to inner peace I didn't know existed. Truly life-changing.",
    author: "James K.",
    role: "Entrepreneur",
  },
  {
    quote: "Finally, a holistic approach that honors both science and spirituality. This is real healing.",
    author: "Priya S.",
    role: "Healthcare Professional",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 animate-fade-in-up">
              Align Your Mind.
              <span className="block text-gradient-gold">Elevate Your Life.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              Cognitive clarity, emotional healing, and spiritual transformation. 
              Begin your journey to wholeness with compassionate, holistic guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/workshops" className="gap-2">
                  Explore Workshops
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              A Holistic Path to Wellness
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our integrative approach combines cognitive science with ancient wisdom, 
              creating a unique pathway to mental, emotional, and spiritual well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-sage/30 flex items-center justify-center mb-6 group-hover:bg-sage/50 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-sage/40 to-lavender/30 organic-blob flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/30 flex items-center justify-center animate-float">
                    <Leaf className="w-12 h-12 text-forest" />
                  </div>
                  <p className="font-heading text-2xl text-forest italic">
                    "Where science meets soul"
                  </p>
                </div>
              </div>
              {/* Decorative blob */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-lavender/30 organic-blob-2 -z-10" />
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                Rooted in Wisdom, Guided by Science
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Integrated Mind, we believe true wellness emerges from the harmony of mind, 
                body, and spirit. Our approach bridges evidence-based cognitive techniques with 
                time-honored contemplative practices, creating a holistic framework for transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're seeking relief from anxiety, clarity in decision-making, or a deeper 
                connection to your authentic self, our compassionate guidance meets you exactly where you are.
              </p>
              <Button variant="sage" size="lg" asChild>
                <Link to="/about" className="gap-2">
                  Learn Our Philosophy
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Voices of Transformation
            </h2>
            <p className="text-muted-foreground">
              Real stories from our community of seekers and healers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-soft relative"
              >
                <Star className="w-8 h-8 text-gold mb-4" fill="currentColor" />
                <blockquote className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage/50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Take the first step toward a more balanced, mindful, and fulfilling life. 
            Our compassionate team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Schedule Your Consultation</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground rounded-full"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Index;
