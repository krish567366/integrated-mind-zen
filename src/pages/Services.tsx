import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Leaf, Sun, Users, ArrowRight, Check, Sparkles } from "lucide-react";
import image1 from "@/assets/image 1.webp";
import image2 from "@/assets/image2.webp";
import image3 from "@/assets/image3.webp";
import image4 from "@/assets/image4.webp";

const services = [
  {
    icon: Users,
    title: "Private Sessions",
    description: "Personalized therapy based on your specific needs. Helping you to overcome challenges that are impacting your relationships or emotional and physical wellbeing.",
    features: [
      "One-on-one personalized therapy sessions",
      "Tailored approach to your unique challenges",
      "Focus on relationships and emotional wellbeing",
      "Comprehensive support for personal growth",
    ],
    color: "bg-secondary/50",
    image: image1,
  },
  {
    icon: Sparkles,
    title: "Transformative Therapies",
    description: "Group or individual sessions to enable you to identify, challenge and overcome undesirable thoughts, emotions and behavior and establish harmony between body, mind, and soul.",
    features: [
      "Identify and challenge negative thought patterns",
      "Overcome undesirable emotions and behaviors",
      "Establish harmony between body, mind, and soul",
      "Both group and individual session options",
    ],
    color: "bg-secondary/50",
    image: image2,
  },
  {
    icon: Heart,
    title: "Online Consultation",
    description: "Phone or video sessions to offer increased access for those on the go, or if it simply suits your lifestyle and counselling preference. Take a look at FAQ to see how it works and if it is the right fit for you.",
    features: [
      "Convenient phone or video sessions",
      "Flexible scheduling for busy lifestyles",
      "Accessible from anywhere",
      "Check FAQ for detailed information",
    ],
    color: "bg-secondary/50",
    image: image3,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 pt-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 animate-reveal">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-reveal delay-reveal-200">
              Comprehensive holistic wellness offerings designed to support your journey 
              toward mental clarity, emotional balance, and spiritual growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-background">
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
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-normal text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                    className="w-full h-40 md:h-56 object-contain  rounded-3xl "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-normal text-foreground mb-4">
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
                <h3 className="font-heading text-xl font-normal text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OSHO Quote */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="max-w-4xl mx-auto">
            <p className="font-heading text-2xl md:text-3xl text-foreground italic mb-4">
              "If you read silently with no thoughts, the energy comes back to you."
            </p>
            <cite className="text-muted-foreground font-medium">- OSHO</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-normal mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-10">
            Book a free discovery call and let's explore together which services 
            would best support your unique journey.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Let's Begin</Link>
          </Button>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default Services;
