import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, DollarSign, Users, Heart, Sparkles, Brain } from "lucide-react";

const PricingSchedule = () => {
  const workshops = [
    {
      title: "DEEP MEMORY HEALING AND EMOTIONAL TRANSFORMATION WORKSHOP",
      description: "Rejuvenate your being by dissolving the mental patterns and restrictive emotions that block the energy flow in your body and cause physical, mental and emotional imbalance. This workshop will help you uncover the negative thoughts, pain patterns, beliefs, and unfulfilled desires that are making you feel stuck and energise the energy centres.",
      location: "102, Al Woushar Street, Umm Suqeim 1, Dubai",
      price: "AED 160",
      schedule: "Every Mon 11.00 -12.30 am & Fri 6 -7.30 pm",
      icon: Heart,
    },
    {
      title: "HEAL DEEP ROOTED BLOCKAGES AND ENGRAMS THROUGH MEDITATION",
      description: "When any of the energy centres is low on energy, the system malfunctions, the mind gets restless, and the body gets diseased. Holding on to negativity affects us on the energetic level and triggers stress hormones. Releasing the emotional blockages and healing the energy centres is key to disease-free, stress-free, blissful and healthy life. These meditation sessions step by step heal the body and spirit, leaving it light, bright and blissful; not only can you resolve relationship conflicts and inner confusions but heal diseases too.",
      location: "102, Al Woushar Street, Umm Suqeim 1, Dubai",
      price: "AED 160",
      schedule: "Friday Morning/ Evening",
      sessions: [
        "Session 1: Connecting with Reality, Understanding Desires",
        "Session 2: Overcoming Fears, Panic, stress and Worry",
        "Session 3: Healing Relationships, Experiencing contentment and Bliss.",
        "Session 4: Divine connection, Self-acceptance and Going beyond Ego"
      ],
      note: "* Note: Each session is independent and complete on its own, one can register for any number of sessions in any order.",
      icon: Brain,
    },
    {
      title: "HEALING RELATIONSHIPS AND INNER CONFLICT",
      description: "Healing therapy to dig out unconscious cognitions and 'childhood wounds'. Allowing your past to heal cleanses your relationships so you can move toward a more conscious, integrated relationship with yourself and others. The process involves identifying and resolving inner conflicts that stop you from experiencing fulfilment in the inner and outer world.",
      location: "Umm Squeim",
      price: "AED 775",
      icon: Users,
    },
    {
      title: "DEATH MEDITATION PROCESS",
      description: "Consciously connect with the experience of death with this process. Pain is the doorway to our consciousness, we'll be able to live beautifully if we unravel the secret of death. The understanding of death transforms the way we exist; during this workshop, you'll shed tons of emotional baggage you carry and simply be able to move into nirvikalpa. This meditation process cleanses our mental layers that carry guilt, fear, attachment and desires. All the baggage we carry gets unloaded and our being becomes light. The quality of our life changes when our understanding and attitude towards death shifts. Simply experiencing the death meditation puts life in the right perspective, our relationships and engagement with everything become sacred and meaningful. During this meditation, you'll experience a state beyond pain and pleasure. A glimpse of perfect harmony, complete inner silence, and total peace.",
      location: "Umm Squeim",
      price: "AED 950",
      duration: "6 hrs",
      note: "*Nirvikalpa is a state of bliss and peace, where thoughts cease to exist, it is a state beyond the thinking mind.",
      icon: Sparkles,
    },
    {
      title: "TRANSFORM YOUR INNER SELF –Awaken your Spiritual Dimension",
      description: "Transcend your Ego and Personality to awaken your higher dimension. The egoic mind is responsible for our suffering and unhappiness. Just like the sea is not aware of its wave, the self is not aware of its ego. Our ego and undesirable traits are a serious impediment in our relationships- our relationship with self, others and the universe. Our unconscious patterns/motives keep the mind in turmoil and cause anguish both to us and people we live and interact with. If you desire rapid transformation and harmonious relationships, come and discover how to identify the subtle ego and undesirable personality characteristics that cause you unhappiness. Learn how to maintain calmness of body and mental state including thoughts, actions, ideas, feelings and alleviate negative emotions and reactions.",
      location: "Umm Squeim",
      price: "AED 775",
      icon: Sparkles,
    },
    {
      title: "RELEASE YOUR PAST AND FREE YOUR FUTURE",
      description: "Finish the heart's unfinished business, join this therapy workshop to release the emotional baggage, heal the pain patterns, wounds and negative memories that drain your life energy and hurt your spirit. You'll discover and heal the deeply embedded behavioural patterns that have a grip over you and run your life, specifically, those patterns which restrict you in life and cause relationship problems, stress and anxiety.",
      location: "Umm Squeim",
      price: "AED 775",
      icon: Heart,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 pt-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 animate-reveal">
              Pricing & Schedule
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-reveal delay-reveal-200">
              Discover our comprehensive range of transformative workshops and healing sessions designed to support your journey toward wholeness and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-secondary/30 border border-border/50 rounded-2xl p-8 "
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0">
                    <workshop.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl font-normal text-foreground mb-4">
                      {workshop.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {workshop.description}
                    </p>

                    {workshop.sessions && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-foreground mb-3">Sessions Include:</h3>
                        <ul className="space-y-2">
                          {workshop.sessions.map((session, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                              {session}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{workshop.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{workshop.price}</span>
                      </div>
                      {workshop.schedule && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">{workshop.schedule}</span>
                        </div>
                      )}
                      {workshop.duration && (
                        <div className="flex items-center gap-2 text-muted-foreground md:col-span-3">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">Duration: {workshop.duration}</span>
                        </div>
                      )}
                    </div>

                    {workshop.note && (
                      <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                        {workshop.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kids Enrichment Classes */}
          <div className="mt-16 bg-secondary/30 border border-border/50 rounded-2xl p-8 ">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-2xl font-normal text-foreground mb-4">
                  Kids Enrichment Classes
                </h2>

                {/* Quote */}
                <div className="mb-6 p-4 bg-secondary/30 rounded-lg border-l-4 border-primary">
                  <blockquote className="text-foreground italic">
                    "The intuitive mind is a sacred gift and the rational mind is a faithful servant. We have created a society that honors the servant and has forgotten the gift."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground mt-2 block">- Albert Einstein</cite>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Children between the age group of 6-18 are taught through self-exploration, right brain activities* and self-awareness. Learning is specifically focused on self-empowerment and practical knowledge that promotes:
                </p>

                {/* Focus Areas */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Inner Flowering</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Giving children the right inner knowledge, i.e. how do we understand ourselves as who we are so that we can be happy with ourselves and reflect it on the world around us.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Emotional Balance</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Children are given a deep understanding of different emotions and how they affect us: Love, Desire, Guilt, Fear, Pain, Worry, Stress, Comparison, and Gratitude.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Going with the Flow</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Teaching them how to flow with life instead of resisting life, awakening their ability to go beyond different negative emotions.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Seeing Beyond Logic</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The current education system is mostly logic based and misses the concepts beyond logic, and hence the right brain is suppressed. Through special games, yoga, meditation and visualization methods their right brain is activated and the kids learn to be joyful and spontaneous.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Responsibility not Rules</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Manners, behaviour and rules taught without the understanding of why they should be followed are inadequate. Teaching them to pay attention to the inner self and making them realize how their inner space is affected when they are hurt or when someone is rude or disrespectful teaches them the value of good behaviour.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Multi-dimensional Intelligence</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Children groomed with higher concepts are far more successful than children given only IQ oriented education. We give children multiple layers of understanding that transforms their very being, rewiring their brain to achieve greater success.
                    </p>
                  </div>
                </div>

                {/* Our Approach */}
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-normal text-foreground mb-4">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The program is based on inner exploration and understanding about self and relationship with others. The aim is to bring a cognitive shift in perception and connect children with their own capacity for self-improvement and personal growth by changing the way they cognize themselves, others and stressful situations. They are also taught specific meditations to manage anger, fear, low self-esteem and emotional distress.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It helps in overcoming the negative patterns of thoughts, words and action and imparts the skills to challenge and change the self-defeating behaviour.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sometimes, changes are required in the home environment as well, so as to help the child. Thus, we have special sessions designed for parents to help them gain more perspective about the child's behaviour and understand their role in their child's conscious expansion.
                  </p>
                </div>

                {/* Note */}
                <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4 mb-6">
                  *The right hemisphere of the brain tends to be creative, non-linear, non-rational, intuitive, relational and holistic.
                </p>

                <Button variant="outline" asChild>
                  <a href="mailto:info@integratedmind.me" className="gap-2">
                    Register for Classes
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healing modalities to support your transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-secondary/30 border border-foreground/10">
              <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
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
                Register for Workshops
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default PricingSchedule;