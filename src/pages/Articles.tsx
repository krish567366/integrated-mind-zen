import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import article1Image from "@/assets/article1.jpeg";
import article2Image from "@/assets/article2.jpeg";
import article3Image from "@/assets/article3.jpeg";
import article4Image from "@/assets/article4.jpeg";
import article5Image from "@/assets/article5.jpeg";
import article6Image from "@/assets/article6.jpeg";
import blog1 from "@/assets/blog1.webp";

const ARTICLE_IMAGES: Record<number, string> = {
  1: article1Image,
  2: article2Image,
  3: article3Image,
  4: article4Image,
  5: article5Image,
  6: article6Image,
};

const applyFeaturedImage = (posts: BlogPost[]) =>
  posts.map((post) =>
    ARTICLE_IMAGES[post.id] ? { ...post, image: ARTICLE_IMAGES[post.id] } : post,
  );

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image?: string;
  published: boolean;
}

const Articles = () => {
  const [articles, setArticles] = useState<BlogPost[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      const posts = applyFeaturedImage(JSON.parse(savedPosts));
      setArticles(posts.filter((post: BlogPost) => post.published));
    } else {
      // Fallback to default posts if none exist
      const defaultPosts = [
        {
          id: 1,
          title: "How to attain a Tranquil mind",
          excerpt: "What to do when anxious, compulsive thoughts steal your peace and impair your quality of life? Discover the step-by-step path to cultivating a calm and balanced mind through witnessing, meditation, and equanimity.",
          content: `What to do when anxious, compulsive thoughts steal your peace and impair your quality of life?

Our mind is always going through pros and cons, brooding over this or that, arguing for and against, comparing and judging.

Can we attain a state that is free from all disturbances and argumentation, a state of tranquillity in which our mind becomes calm and balanced?

Yes, we can!



Step 1  Witness objects moving in the field of mind
Often people try to eliminate thoughts from the mind, this can be exhausting. Learn instead to be a neutral witness of the objects moving in the mind field.
To quiet the mind does not mean suppressing or repressing thoughts and emotions, rather learn the skill of witnessing and letting go.
Allow the thought patterns to flow without interruption, remain a witness, do not engage, entertain or entangle with the thoughts, watch them flow.
Here's how to do it…

Step 2  Break the habit of the mind
Stop connecting thoughts.
Our mind has a natural tendency to connect the thoughts as they arise, we mostly do that with negative thoughts, a single negative thought leads to another and another and another, soon it becomes a stream of stressful thoughts. It stirs up past memories, awakens negative emotions and before we know it we are in the grip of a thought pattern that leaves us powerless.

Step 3  Meditate for 21 minutes*
Develop a new habit, a habit of letting go of thoughts when they arise. By developing one, single new skill of simply letting the thoughts pass by when they arise you will learn to become a witness to the thoughts.

Sit in meditation and intentionally watch your thoughts moment by moment. Watch every single thought arise and consciously watch that thought drift away.

* one energy cycle is 21 mins; 21 minutes is ideal for establishing a new pattern.
 
Note: You will slip and have to start over.
This kind of experience is normal; whenever we start anything new, a new practice, habit or routine we slip and have to restart.

The first few times you practice this technique you'll fail. It's pretty much guaranteed to happen. The good news is, with a little persistence and commitment it will happen, and you'll soon start loving it. One of the damaging myth about meditation is the belief that it is difficult and requires lots of practice. It's not true, meditation is simple, easy and effortless. Drop the effort and it will just happen!

Step 4  Inspect your thoughts
Once you learn to witness the thoughts, the next skill that you will gradually develop through meditation is the ability to inspect your thoughts and decide which are helpful and which are not helpful for your growth.

The ability to inspect thought patterns is the key skill in weakening the deep impressions of unconscious negative thought patterns that normally, invisibly lead to actions that cause failure and suffering in our life.

Step 5  Promote helpful thoughts
Once you discriminate between helpful and not helpful thought patterns, reinforce useful, positive thoughts intentionally through willpower and persistence.
Powerful positive thoughts turned into action reinforce new habits of thinking and lead to positive results.

Step 6  Do nothing with that which is not useful
How do you deal with negative thoughts that do not support your growth and wellbeing?

Do nothing with them.
Simply do not engage with them, neither feed them nor push them away. By focusing on helpful thoughts attention and energy are automatically withdrawn from the negative, unhelpful thoughts, they lose power over our emotions and actions and gradually fade away.

There's more…
 
Resting on the foundation of the skills of witnessing, inspecting and promoting positive thought patterns is the greatest skill of all –
Equanimity – not allowing yourself to be disturbed in any situation. This means that even though you may evaluate a situation to be 'bad', you remain calm and do not get disturbed, similarly, if you judge the situation to be 'good', you still remain calm and do not get needlessly drawn into excitement, pride or ego. The situation by itself is neither good or bad, we make it so by our thinking.
It does not mean being emotionless, rather, the quality of not being disturbed means having a subtle balance; not getting sucked into emotion for an extended period of time and staying centered.`,
          category: "Mindfulness",
          readTime: "10 min read",
          date: "Jan 12, 2026",
          image: article1Image,
          published: true,
        },
        {
          id: 2,
          title: "5 Morning Rituals for Emotional Balance",
          excerpt: "Start your day with intention using these simple yet powerful practices that set the tone for emotional well-being.",
          content: "Full content here...",
          category: "Wellness",
          readTime: "5 min read",
          date: "Nov 25, 2024",
          image: article2Image,
          published: true,
        },
        {
          id: 3,
          title: "Understanding Cognitive Distortions",
          excerpt: "Learn to identify the common thinking patterns that create unnecessary suffering and discover how to transform them.",
          content: "Full content here...",
          category: "Cognitive Science",
          readTime: "8 min read",
          date: "Nov 18, 2024",
          image: article3Image,
          published: true,
        },
        {
          id: 4,
          title: "The Art of Compassionate Self-Talk",
          excerpt: "Transform your inner critic into an inner ally with these evidence-based techniques for self-compassion.",
          content: "Full content here...",
          category: "Self-Care",
          readTime: "6 min read",
          date: "Nov 10, 2024",
          image: article4Image,
          published: true,
        },
        {
          id: 5,
          title: "Breathwork: Your Built-In Stress Relief System",
          excerpt: "Explore powerful breathing techniques that can instantly shift your nervous system from stress to calm.",
          content: "Full content here...",
          category: "Meditation",
          readTime: "5 min read",
          date: "Nov 3, 2024",
          image: article5Image,
          published: true,
        },
        {
          id: 6,
          title: "Creating Sacred Space: Home as Sanctuary",
          excerpt: "Practical tips for transforming your living environment into a supportive space for mindfulness and healing.",
          content: "Full content here...",
          category: "Lifestyle",
          readTime: "6 min read",
          date: "Oct 27, 2024",
          image: article6Image,
          published: true,
        },
      ];
      setArticles(defaultPosts);
      localStorage.setItem("blogPosts", JSON.stringify(defaultPosts));
    }
  }, []);
  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Articles Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl bg-secondary/30 border border-foreground/10 transition-opacity duration-500 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image || blog1}
                    alt={post.title}
                    className="w-full h-full object-cover group-"
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
        </div>
      </section>

      {/* Categories */}
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
