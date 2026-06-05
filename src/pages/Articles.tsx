import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import article1Image from "@/assets/article1.jpeg";
import { loadPublishedArticles, seedArticlesIfEmpty, type Article } from "@/data/articles";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    seedArticlesIfEmpty();
    setArticles(loadPublishedArticles());
  }, []);

  return (
    <Layout>
      <section className="py-32 pt-40 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 animate-reveal">
              Articles
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-reveal delay-reveal-200">
              Explore articles on mindfulness, meditation, cognitive science, and holistic wellness.
              Wisdom for your journey inward.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <p className="text-center text-muted-foreground">No articles available yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-3xl bg-secondary/30 border border-foreground/10 transition-opacity duration-500 overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image || article1Image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
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
                    <h3 className="font-heading text-xl font-normal text-foreground mb-3 group-hover:text-primary transition-colors duration-500 ease-in-out">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-xs">{post.date}</span>
                      <Link
                        to={`/articles/${post.id}`}
                        className="flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all duration-500 ease-in-out"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-normal text-foreground mb-4">
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
                className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/5 text-foreground transition-all duration-500 ease-in-out"
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

export default Articles;
