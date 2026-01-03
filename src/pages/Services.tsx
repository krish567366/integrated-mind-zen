import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Leaf, Sun, Users, ArrowRight, Check } from "lucide-react";
import image1 from "@/assets/image 1.webp";
import image2 from "@/assets/image2.webp";
import image3 from "@/assets/image3.webp";
import image4 from "@/assets/image4.webp";

const services = [
  {
    icon: Brain,
    title: "Cognitive Thinking Sessions",
    description: "Transform limiting thought patterns and develop mental clarity through evidence-based cognitive techniques.",
    features: [
      "Identify and reframe negative thought patterns",
      "Develop problem-solving and decision-making skills",
      "Build mental resilience and cognitive flexibility",
      "Personalized strategies for lasting change",
    ],
    color: "bg-sage/30",
    image: image1,
  },
  {
    icon: Sun,
    title: "Guided Meditation Therapy",
    description: "Experience deep relaxation and inner peace through personalized meditation guidance tailored to your needs.",
    features: [
      "Custom meditation practices for your goals",
      "Breathwork and body scan techniques",
      "Visualization and guided imagery",
      "Tools for establishing a daily practice",
    ],
    color: "bg-gold/20",
    image: image2,
  },
  {
    icon: Leaf,
    title: "Mindfulness Coaching",
    description: "Integrate mindfulness into every aspect of your daily life for sustained balance and presence.",
    features: [
      "Practical mindfulness techniques",
      "Stress reduction and emotional regulation",
      "Mindful communication and relationships",
      "Creating mindful routines and habits",
    ],
    color: "bg-lavender/30",
    image: image3,
  },
  {
    icon: Heart,
    title: "Emotional Resilience Training",
    description: "Build emotional strength and learn to navigate life's challenges with grace and equanimity.",
    features: [
      "Understand and process difficult emotions",
      "Develop healthy coping mechanisms",
      "Build self-compassion and self-acceptance",
      "Strengthen emotional boundaries",
    ],
    color: "bg-sage/30",
    image: image4,
  },
  {
    icon: Users,
    title: "1:1 Consultation",
    description: "Personalized one-on-one sessions tailored to your unique needs, goals, and healing journey.",
    features: [
      "Comprehensive initial assessment",
      "Customized treatment plan",
      "Flexible scheduling options",
      "Ongoing support and guidance",
    ],
    color: "bg-gold/20",
    image: image1,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-sage/10 to-lavender/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
              Comprehensive holistic wellness offerings designed to support your journey 
              toward mental clarity, emotional balance, and spiritual growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-forest" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="gap-2">
                      Book This Service
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
                <div className={`${service.color} rounded-3xl overflow-hidden ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 md:h-56 object-contain hover:scale-105 transition-transform duration-300 rounded-3xl bg-gradient-to-br from-sage/10 to-lavender/10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Your Healing Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We walk with you every step of the way, from first consultation to lasting transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Connect", desc: "Schedule your initial consultation" },
              { step: "02", title: "Assess", desc: "We understand your unique needs" },
              { step: "03", title: "Plan", desc: "Create your personalized roadmap" },
              { step: "04", title: "Transform", desc: "Embark on your healing journey" },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Book a free discovery call and let's explore together which services 
            would best support your unique journey.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">Schedule Free Discovery Call</Link>
          </Button>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default Services;
