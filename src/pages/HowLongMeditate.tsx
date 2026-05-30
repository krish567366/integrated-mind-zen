import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Brain, Heart, Sparkles } from "lucide-react";

const HowLongMeditate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 pt-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 animate-reveal">
              HOW LONG SHOULD I MEDITATE?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-reveal delay-reveal-200">
              Understanding the art of awareness and how to integrate meditation into your daily life.
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
                It is important to understand that meditation is learning the art of being "aware". It is the ability of simply being aware of what is happening both within and around us.
              </p>

              <p className="leading-relaxed mb-8">
                There are two kinds of meditation. The first is where you need to spend a particular time, like an hour in the morning or any other convenient time, sitting in silent awareness. The second is bringing the 'truth' or 'awareness' into your life; this is supposed to be done all twenty-four hours a day. It is not part of the routine; it should become the very quality of your life. You may be doing anything, like writing, reading, cooking, talking but the thread of awareness should be happening in parallel, like an undercurrent.
              </p>

              <p className="leading-relaxed mb-8">
                Developing "awareness" forms the basis of all the transformative therapies, it will help you to identify and release the old conditioning and negative thought patterns that trigger overwhelming emotions in you. Learning the knack for "watching" what is going on rather than being immersed in it takes practice and persistence. Once you start meditating the real truths start revealing themselves to you. All that you thought you were, all the desires, all the fears, all the worries are shaken and you start going through a big change.
              </p>

              <p className="leading-relaxed mb-12">
                Eventually, you will become grounded in the truth that you are not your emotions; you will be able to identify and release old thought patterns and suppressed emotions that are controlling your life. You will learn to rise above your emotions and self-limiting patterns and become more present, centred, and self-aware.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-secondary/30 border border-foreground/10">
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-normal text-foreground mb-4">
                  Structured Meditation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicate specific time each day for formal meditation practice. Start with 20-30 minutes and gradually increase as you become more comfortable with the practice.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-secondary/30 border border-foreground/10">
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-normal text-foreground mb-4">
                  24/7 Awareness
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cultivate mindfulness throughout your daily activities. Bring awareness to everyday tasks like eating, walking, and interacting with others.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-16">
              <h2 className="font-heading text-3xl font-normal text-foreground mb-8 text-center">
                Benefits of Consistent Practice
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Emotional Freedom
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Release old conditioning and negative thought patterns that trigger overwhelming emotions.
                  </p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Self-Awareness
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Develop the ability to watch your thoughts and emotions without being immersed in them.
                  </p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-secondary/30 border border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Inner Peace
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Become more present, centred, and grounded in your true self beyond emotions and patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-normal text-foreground mb-4">
                  Ready to Begin Your Meditation Journey?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Start with just 10 minutes a day and gradually build your practice. Remember, consistency is more important than duration.
                </p>
              </div>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Get Personalized Guidance
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

export default HowLongMeditate;