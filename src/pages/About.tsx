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
      {/* Hero */}
      <section className="py-32 pt-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 animate-reveal">
              Hi! I'm Vibhu.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-reveal delay-reveal-200">
              My work is rooted in contemplative inquiry and psychological exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative lg:sticky lg:top-32">
              <img
                src={founderImg}
                alt="Vibhu — Founder of Integrated Mind"
                className="w-full max-w-md mx-auto rounded-3xl object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I founded Integrated Mind to share the science of inner transformation through a thoughtful
                integration of Eastern psychotherapy, mindfulness, self-awareness practices, and emotional
                healing. My work is informed by an extensive background in art, philosophy, brain science,
                metacognitive behaviour, and contemplative practices for inner awakening. Over the past two
                decades, I have trained in and practiced a wide range of therapeutic and meditative approaches,
                allowing me to respond to life's challenges from a holistic and grounded perspective.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At the heart of my work is the understanding that lasting change occurs when awareness,
                emotional regulation, and compassionate inquiry come together. Meditation and mindfulness have
                been central to my own journey and continue to be powerful tools in helping individuals move
                beyond mental noise, reconnect with their essential self, and cultivate clarity, resilience, and
                emotional balance. I have had the privilege of supporting individuals through personal crises,
                life transitions, anxiety, relationship difficulties, and periods of emotional overwhelm,
                guiding them toward greater self-understanding, healing, and wellbeing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you find yourself feeling stuck, dissatisfied, emotionally drained, or disconnected from
                yourself or others, integrated therapy can help gently uncover and transform unhelpful thought
                patterns, unconscious beliefs, and emotional blocks that may be limiting your sense of
                fulfilment. Alongside my work with private clients, I also facilitate workshops and group
                learning experiences focusing on relationship awareness, mental wellbeing, emotional
                intelligence, self-management, and mindfulness for sustainable balance. These sessions are
                practical and reflective, grounded in evidence-based principles, and support people in
                navigating both their personal lives and professional roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              I have come to see pain and difficulty not as failures, but as invitations — moments that ask us
              to pause, listen more deeply, and release what no longer serves us.
            </p>
            <blockquote className="text-foreground italic border-l-4 border-primary pl-6 py-4 bg-background/50 rounded-r-lg">
              "Although the world is full of suffering, it is also full of the overcoming of it."
              <span className="text-sm text-muted-foreground mt-2 block">— Helen Keller</span>
            </blockquote>
            <blockquote className="text-foreground italic border-l-4 border-primary pl-6 py-4 bg-background/50 rounded-r-lg">
              "Your pain is the breaking of the shell that encloses your understanding."
              <span className="text-sm text-muted-foreground mt-2 block">— Kahlil Gibran</span>
            </blockquote>
            <p className="text-muted-foreground leading-relaxed text-center">
              When met with awareness and care, even our struggles can guide us back to our authentic self.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-background">
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

      {/* Join Me */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-foreground">
              Join Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The journey of self-discovery and healing is a gentle pilgrimage — one that begins with a
              single step. If you feel ready to release what weighs on you, deepen your self-understanding,
              and move toward a more grounded and fulfilled way of living, I welcome you to walk this path
              with me.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Together, we can explore what supports healing, clarity, and lasting inner peace.
            </p>
            <div className="pt-6">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Join Me
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
