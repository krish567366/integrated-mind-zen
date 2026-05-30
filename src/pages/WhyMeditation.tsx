import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Sparkles } from "lucide-react";

const WhyMeditation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 pt-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 animate-reveal">
              WHY MEDITATION?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-reveal delay-reveal-200">
              Discover the transformative power of meditation in cultivating awareness, consciousness, and inner peace.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-xl leading-relaxed mb-8">
                Meditation is nothing but trying to clean our being and learning to be fresh and alive and more alert. Only through meditation, only by turning inwards, only by paying attention 'awareness' can be born. Through awareness, we can know the cause of our suffering.
              </p>

              <p className="leading-relaxed mb-8">
                Mediation raises our consciousness. Anything can become meditation if it raises our consciousness. It can be a simple breathing technique; it can be chanting of a mantra, or it can be just simply sitting! In the Zen tradition, just sitting is meditation, it may seem very easy, but In fact, it is the most difficult meditation.
              </p>

              <p className="leading-relaxed mb-8">
                It is difficult, we are afraid to look inside because it hurts, but once we come to know how we create our joy and misery, we'll no longer be able to deceive ourselves.
              </p>

              <p className="leading-relaxed mb-8">
                One has to go through the process of self-discovery, of accepting the responsibility of our own misery. One has to burn in this fire of self-knowing and acceptance in order for the ignorance to burn and the gold within to shine.
              </p>

              <p className="leading-relaxed mb-8">
                In order to live a more fulfilled life, first we have to discover our potential, who we really are; meditation is the route to that knowing. It is a way of settling in oneself, at the innermost core of our being. Once we find the centre of our existence, we discover both our roots and our wings!
              </p>

              <p className="leading-relaxed mb-12">
                The roots are in existence, they make us as Integrated human being, and the wings are in the blossoming of compassion, authenticity and a tremendous feeling of blissfulness.
              </p>
            </div>

            {/* Featured Articles Section */}
            <div className="mt-16">
              <h2 className="font-heading text-3xl font-normal text-foreground mb-8 text-center">
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="group p-6 rounded-2xl bg-secondary/30 border border-foreground/10 transition-opacity duration-500">
                  <h3 className="font-heading text-xl font-normal text-foreground mb-3 group-hover:text-primary transition-colors">
                    How to attain a Tranquil mind
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Thinking Women
                  </p>
                  <p className="text-muted-foreground text-xs">Jul 8, 2019</p>
                </article>

                <article className="group p-6 rounded-2xl bg-secondary/30 border border-foreground/10 transition-opacity duration-500">
                  <h3 className="font-heading text-xl font-normal text-foreground mb-3 group-hover:text-primary transition-colors">
                    Ready To Be Exposed?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Woman Sculpture
                  </p>
                  <p className="text-muted-foreground text-xs">Feb 18, 2019</p>
                </article>

                <article className="group p-6 rounded-2xl bg-secondary/30 border border-foreground/10 transition-opacity duration-500">
                  <h3 className="font-heading text-xl font-normal text-foreground mb-3 group-hover:text-primary transition-colors">
                    The Story of our Emotions
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    boy
                  </p>
                  <p className="text-muted-foreground text-xs">Jan 16, 2019</p>
                </article>
              </div>
            </div>

            {/* Services Preview */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-secondary/30 border border-foreground/10">
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-normal text-foreground mb-4">
                  Private sessions
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Personalized therapy based on your specific needs. Helping you to overcome challenges that are impacting your relationships or emotional and physical wellbeing.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-secondary/30 border border-foreground/10">
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-normal text-foreground mb-4">
                  Transformative Therapies
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Group or individual sessions to enable you to identify, challenge and overcome undesirable thoughts, emotions and behavior and establish harmony between body, mind, and soul.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-secondary/30 border border-foreground/10">
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-normal text-foreground mb-4">
                  Online Consultation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Phone or video sessions to offer increased access for those on the go, or if it simply suits your lifestyle and counselling preference. Take a look at FAQ to see how it works and if it is the right fit for you.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mt-16 p-8 rounded-2xl bg-secondary/30 border border-primary/20">
              <div className="text-center">
                <h3 className="font-heading text-2xl font-normal text-foreground mb-4">Read</h3>
                <blockquote className="text-lg italic text-foreground mb-4">
                  "If you read silently with no thoughts, the energy comes back. It is never wasted. You never feel tired. And if you are present you reabsorb it, and are rejuvenated! - OSHO"
                </blockquote>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Book Your Session
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

export default WhyMeditation;