import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Eye, Sparkles, ArrowRight } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every individual with deep empathy and unconditional positive regard, honoring your unique journey.",
  },
  {
    icon: Target,
    title: "Integration",
    description: "We bridge Eastern wisdom and Western science, creating holistic solutions that address mind, body, and spirit.",
  },
  {
    icon: Eye,
    title: "Awareness",
    description: "We cultivate present-moment awareness as the foundation for lasting change and authentic self-discovery.",
  },
  {
    icon: Sparkles,
    title: "Transformation",
    description: "We believe in your innate capacity for growth, healing, and becoming the fullest expression of yourself.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-sage/10 to-lavender/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-in-up">
              Where Science Meets Soul
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
              Integrated Mind was born from a vision to create a sanctuary where modern psychology 
              and ancient contemplative wisdom unite, offering a path to genuine healing and self-discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                Our Philosophy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that true wellness cannot be compartmentalized. The mind, body, and spirit 
                are intricately connected, and lasting transformation occurs when we address all dimensions 
                of our being with equal care and attention.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our integrative approach combines evidence-based cognitive behavioral techniques, 
                mindfulness-based stress reduction, somatic awareness practices, and contemplative 
                traditions from around the world. This unique synthesis creates a comprehensive 
                framework for personal growth that honors both scientific rigor and spiritual depth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're seeking relief from anxiety, greater clarity in your life's purpose, 
                or simply a deeper sense of peace, we meet you where you are and walk alongside you 
                on your journey home to yourself.
              </p>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-sage/30 to-lavender/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-heading text-6xl text-forest mb-4">∞</div>
                  <p className="font-heading text-xl text-forest italic">
                    "Healing is the return to wholeness"
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-gold/20 organic-blob -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction, every session, and every moment of our work together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-background border border-border/50 shadow-soft text-center group hover:shadow-card transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-sage/30 flex items-center justify-center mb-4 group-hover:bg-sage/50 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={founderImg}
                alt="Dr. Elena Rivers - Founder of Integrated Mind"
                className="w-full max-w-md mx-auto rounded-3xl shadow-card object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-lavender/30 organic-blob-2 -z-10" />
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                Meet Dr. Elena Rivers
              </h2>
              <p className="text-gold font-medium">Founder & Lead Practitioner</p>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Elena Rivers brings over 15 years of experience in clinical psychology, 
                mindfulness-based therapy, and contemplative studies. Her journey began with 
                her own healing process, leading her to explore the intersection of cognitive 
                science and spiritual wisdom.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trained at Harvard Medical School in mind-body medicine and certified in 
                multiple meditation traditions, Dr. Rivers has dedicated her career to making 
                transformative healing accessible to all who seek it. Her warm, intuitive 
                approach creates a safe space for deep exploration and genuine change.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "My greatest joy is witnessing the moment when someone reconnects with their 
                inherent wholeness. That spark of recognition—that's what this work is all about."
              </p>
              <Button variant="sage" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Work with Dr. Rivers
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default About;
