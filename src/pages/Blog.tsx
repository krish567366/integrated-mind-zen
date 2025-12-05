import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Science of Mindfulness: How Meditation Changes Your Brain",
    excerpt: "Discover the neuroscience behind meditation and how regular practice can physically reshape your brain for greater peace and clarity.",
    category: "Mindfulness",
    readTime: "7 min read",
    date: "Dec 1, 2024",
    color: "bg-sage/30",
  },
  {
    id: 2,
    title: "5 Morning Rituals for Emotional Balance",
    excerpt: "Start your day with intention using these simple yet powerful practices that set the tone for emotional well-being.",
    category: "Wellness",
    readTime: "5 min read",
    date: "Nov 25, 2024",
    color: "bg-lavender/30",
  },
  {
    id: 3,
    title: "Understanding Cognitive Distortions",
    excerpt: "Learn to identify the common thinking patterns that create unnecessary suffering and discover how to transform them.",
    category: "Cognitive Science",
    readTime: "8 min read",
    date: "Nov 18, 2024",
    color: "bg-gold/20",
  },
  {
    id: 4,
    title: "The Art of Compassionate Self-Talk",
    excerpt: "Transform your inner critic into an inner ally with these evidence-based techniques for self-compassion.",
    category: "Self-Care",
    readTime: "6 min read",
    date: "Nov 10, 2024",
    color: "bg-sage/30",
  },
  {
    id: 5,
    title: "Breathwork: Your Built-In Stress Relief System",
    excerpt: "Explore powerful breathing techniques that can instantly shift your nervous system from stress to calm.",
    category: "Meditation",
    readTime: "5 min read",
    date: "Nov 3, 2024",
    color: "bg-lavender/30",
  },
  {
    id: 6,
    title: "Creating Sacred Space: Home as Sanctuary",
    excerpt: "Practical tips for transforming your living environment into a supportive space for mindfulness and healing.",
    category: "Lifestyle",
    readTime: "6 min read",
    date: "Oct 27, 2024",
    color: "bg-gold/20",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-sage/10 to-lavender/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-in-up">
              Mindful Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
              Explore articles on mindfulness, meditation, cognitive science, and holistic wellness. 
              Wisdom for your journey inward.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl bg-gradient-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden"
              >
                <div className={`h-48 ${post.color} flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center">
                    <span className="font-heading text-3xl text-forest">✦</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                    <span className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Explore Topics
            </h2>
            <p className="text-muted-foreground">
              Dive deeper into the subjects that resonate with you.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Mindfulness", "Meditation", "Cognitive Science", "Wellness", "Self-Care", "Lifestyle", "Spirituality"].map((topic) => (
              <button
                key={topic}
                className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/5 text-foreground transition-all duration-300"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default Blog;
