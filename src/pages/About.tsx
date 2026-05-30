import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Eye, Sparkles, ArrowRight } from "lucide-react";
import founderImg from "@/assets/founder.webp";

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
      <section className="py-32 pt-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 animate-reveal">
              Hi! I'm Vibhu.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-reveal delay-reveal-200">
              It is my desire for you to experience wholeness and create peace inside and outside. 
              I invite you to release whatever is blocking you and return to your aware, peaceful and integrated nature.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're struggling in relationships or seeking emotional balance, spiritual growth, happiness and inner peace. 
              It is possible, and I'm so glad you're here!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I founded Integrated Mind to share the science of inner transformation through a unique fusion of Eastern psychotherapy, 
              self-awareness techniques, and emotional healing practices. My journey is grounded in an extensive background in art, 
              philosophy, brain science, metacognitive behavior, and sacred practices for inner awakening.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the past two decades, I have practiced and trained in various therapeutic techniques and meditative therapies, 
              which has allowed me to respond to a wide range of challenges from a holistic perspective. I have found meditation 
              to be one of the most profound ways to live a joyful and fulfilled life.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction, every session, and every moment of our work together.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-16">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-b border-foreground/10 pb-16 last:border-0 last:pb-0"
              >
                <value.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1} />
                <h3 className="font-heading text-xl font-normal text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-base text-foreground/80 leading-relaxed font-light tracking-wide">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={founderImg}
                alt="Vibhu - Founder of Integrated Mind"
                className="w-full max-w-md mx-auto rounded-3xl  object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary/50 " />
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-normal text-foreground">
                My Journey of Healing & Transformation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By letting go of the chaos of the mind and reconnecting with the essential self, we can experience true peace and healing. 
                I have had the privilege of supporting individuals through personal crises and life challenges, guiding them toward clarity, 
                healing, and a deeper sense of well-being.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you find yourself dissatisfied with where you are in life, know that integrated therapy can help uncover and heal 
                negative thought patterns, unconscious beliefs, and unfulfilled desires that may be standing in the way of your happiness.
              </p>
              <blockquote className="text-foreground italic border-l-4 border-primary pl-6 py-4 my-6 bg-background/50 rounded-r-lg">
                "Although the world is full of suffering, it is also full of the overcoming of it." 
                <br /><span className="text-sm text-muted-foreground mt-2 block">— Helen Keller</span>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                I have come to believe that pain and suffering serve as invitations to awaken, release illusions, and open the door to freedom. 
                In these moments of struggle, we catch a glimpse of the truth that can guide us toward our authentic self.
              </p>
              <blockquote className="text-foreground italic border-l-4 border-primary pl-6 py-4 my-6 bg-background/50 rounded-r-lg">
                "Your pain is the breaking of the shell that encloses your understanding."
                <br /><span className="text-sm text-muted-foreground mt-2 block">— Kahlil Gibran</span>
              </blockquote>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Join Me on This Journey
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-foreground">
              Join Me on a Journey of Transformation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The journey of self-discovery and healing is a gentle pilgrimage that begins with a single step. 
              If you feel ready to release the burdens that weigh on you, explore the deeper aspects of your being, 
              and embrace meaningful transformation, I welcome you to join me on this path.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Together, we can uncover the way to healing, peace, and a more fulfilled life.
            </p>
            <div className="pt-6">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Begin Your Journey Today
                  <ArrowRight size={20} />
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
