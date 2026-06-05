import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Sun, Brain, ArrowRight } from "lucide-react";
import contemplativeImage from "@/assets/contemplative.jpeg";
import heroImage from "@/assets/hero.jpeg";
import pathImage from "@/assets/path.jpeg";
import image3 from "@/assets/image3.webp";

const services = [
  {
    icon: Users,
    title: "1–1 Transformational Dialogue",
    subtitle: "Deep personal inquiry and contemplative exploration",
    description:
      "A one-to-one space for exploring the patterns, questions, and experiences that shape your inner life. Through reflective dialogue and inquiry, we gently explore emotional struggles, recurring patterns, relationships, and deeper questions of meaning, helping cultivate greater self-understanding, clarity, and inner balance.",
    note: "Sessions are available ONLINE or in person.",
    image: contemplativeImage,
  },
  {
    icon: Users,
    title: "Group Circles & Workshops",
    subtitle: "Shared inquiry and guided exploration",
    description:
      "Reflective group experiences that create a space for learning, dialogue, and shared understanding. Through mindfulness, inquiry, and collective exploration, participants are invited to deepen awareness, gain fresh perspectives, and explore themes such as relationships, emotional well-being, self-understanding, and meaningful living.",
    image: heroImage,
  },
  {
    icon: Sun,
    title: "Retreats & Immersions",
    subtitle: "Stepping away to look more deeply",
    description:
      "Immersive experiences designed to create space away from the noise and pace of everyday life. Through contemplation, meditation, reflective practices, and dialogue, retreats invite a deeper connection with oneself and offer an opportunity for renewal, insight, and inner clarity.",
    image: pathImage,
  },
  {
    icon: Brain,
    title: "Mindfulness & Human Development Programs",
    subtitle: "Awareness and well-being in the workplace",
    description:
      "Programs designed for organizations that integrate mindfulness, emotional understanding, communication skills, and cognitive awareness to support personal well-being and meaningful growth at work. These sessions help individuals cultivate resilience, emotional balance, authentic relationships, and a more thoughtful way of engaging with challenges.",
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
              Through reflective dialogue and compassionate inquiry, explore the patterns of the mind and
              gain insight into the experiences that shape your responses to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-normal text-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="font-body text-sm tracking-[0.08em] uppercase text-foreground/55 mb-5">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.note && (
                    <p className="text-foreground/80 leading-relaxed mb-8 font-light">
                      {service.note}
                    </p>
                  )}
                  {!service.note && <div className="mb-8" />}
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="gap-2">
                      Book This Service
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
                <div
                  className={`rounded-3xl overflow-hidden ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-normal mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-10">
            Book a discovery call and explore which offering best supports your path toward greater
            clarity, balance, and inner understanding.
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
