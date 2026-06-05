import article1Image from "@/assets/article1.jpeg";
import article2Image from "@/assets/article2.jpeg";
import article3Image from "@/assets/article3.jpeg";
import article4Image from "@/assets/article4.jpeg";
import article5Image from "@/assets/article5.jpeg";
import article6Image from "@/assets/article6.jpeg";

export interface Article {
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

export const STORAGE_KEY = "blogPosts";

const TRANQUIL_MIND_CONTENT = `What to do when anxious, compulsive thoughts steal your peace and impair your quality of life?

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
It does not mean being emotionless, rather, the quality of not being disturbed means having a subtle balance; not getting sucked into emotion for an extended period of time and staying centered.`;

const ARTICLE_IMAGES: Record<number, string> = {
  1: article1Image,
  2: article2Image,
  3: article3Image,
  4: article4Image,
  5: article5Image,
  6: article6Image,
};

export const DEFAULT_ARTICLES: Article[] = [
  {
    id: 1,
    title: "How to attain a Tranquil mind",
    excerpt:
      "What to do when anxious, compulsive thoughts steal your peace and impair your quality of life? Discover the step-by-step path to cultivating a calm and balanced mind through witnessing, meditation, and equanimity.",
    content: TRANQUIL_MIND_CONTENT,
    category: "Mindfulness",
    readTime: "10 min read",
    date: "Jan 12, 2026",
    published: true,
  },
  {
    id: 2,
    title: "5 Morning Rituals for Emotional Balance",
    excerpt:
      "Start your day with intention using these simple yet powerful practices that set the tone for emotional well-being.",
    content:
      "Start your day with intention using these simple yet powerful practices that set the tone for emotional well-being.\n\nA few quiet minutes of stillness, gentle movement, or reflective journaling can help the mind meet the day with greater steadiness. Rather than rushing into reaction, these rituals create a pause — a space to notice how you feel and choose how you wish to respond.\n\nConsistency matters more than perfection. Even one small practice, repeated with care, can gradually support emotional balance and a calmer relationship with yourself.",
    category: "Wellness",
    readTime: "5 min read",
    date: "Nov 25, 2024",
    published: true,
  },
  {
    id: 3,
    title: "Understanding Cognitive Distortions",
    excerpt:
      "Learn to identify the common thinking patterns that create unnecessary suffering and discover how to transform them.",
    content:
      "Learn to identify the common thinking patterns that create unnecessary suffering and discover how to transform them.\n\nCognitive distortions are habitual ways of thinking that bend reality — all-or-nothing thinking, catastrophising, mind-reading, and harsh self-judgment. They often operate quietly, shaping mood and behaviour before we are fully aware of them.\n\nThrough reflective awareness and compassionate inquiry, it becomes possible to notice these patterns, question their accuracy, and gradually loosen their hold on your inner life.",
    category: "Cognitive Science",
    readTime: "8 min read",
    date: "Nov 18, 2024",
    published: true,
  },
  {
    id: 4,
    title: "The Art of Compassionate Self-Talk",
    excerpt:
      "Transform your inner critic into an inner ally with these evidence-based techniques for self-compassion.",
    content:
      "Transform your inner critic into an inner ally with these evidence-based techniques for self-compassion.\n\nThe way we speak to ourselves shapes our emotional world. Harsh inner dialogue often repeats old patterns of judgment and shame, while compassionate self-talk creates room for understanding and growth.\n\nPractising kinder language toward yourself is not about denying difficulty — it is about meeting your experience with honesty and care, the same qualities you might offer someone you deeply respect.",
    category: "Self-Care",
    readTime: "6 min read",
    date: "Nov 10, 2024",
    published: true,
  },
  {
    id: 5,
    title: "Breathwork: Your Built-In Stress Relief System",
    excerpt:
      "Explore powerful breathing techniques that can instantly shift your nervous system from stress to calm.",
    content:
      "Explore powerful breathing techniques that can instantly shift your nervous system from stress to calm.\n\nThe breath is one of the most direct bridges between body and mind. Slow, conscious breathing can signal safety to the nervous system, easing tension and restoring a sense of grounded presence.\n\nSimple practices — such as lengthening the exhale or pausing gently between breaths — can be used anywhere, offering a practical tool for meeting stress with greater steadiness.",
    category: "Meditation",
    readTime: "5 min read",
    date: "Nov 3, 2024",
    published: true,
  },
  {
    id: 6,
    title: "Creating Sacred Space: Home as Sanctuary",
    excerpt:
      "Practical tips for transforming your living environment into a supportive space for mindfulness and healing.",
    content:
      "Practical tips for transforming your living environment into a supportive space for mindfulness and healing.\n\nA sanctuary does not require grandeur — only intention. A quiet corner, soft light, a comfortable seat, or a few meaningful objects can invite pause and reflection.\n\nWhen your environment supports stillness, it becomes easier to return to awareness throughout the day. The space you create outwardly can gently reinforce the inner space you are cultivating.",
    category: "Lifestyle",
    readTime: "6 min read",
    date: "Oct 27, 2024",
    published: true,
  },
];

const applyArticleImages = (articles: Article[]): Article[] =>
  articles.map((article) => ({
    ...article,
    image: ARTICLE_IMAGES[article.id] ?? article.image,
  }));

const isPlaceholderContent = (content?: string) =>
  !content?.trim() || content.trim() === "Full content here...";

const mergeWithDefaults = (saved: Article[]): Article[] => {
  const byId = new Map(DEFAULT_ARTICLES.map((article) => [article.id, { ...article }]));

  for (const post of saved) {
    const id = Number(post.id);
    if (!id) continue;

    const fallback = byId.get(id);
    if (!fallback) continue;

    byId.set(id, {
      ...fallback,
      ...post,
      id,
      title: post.title || fallback.title,
      excerpt: post.excerpt || fallback.excerpt,
      content: isPlaceholderContent(post.content) ? fallback.content : post.content,
      category: post.category || fallback.category,
      readTime: post.readTime || fallback.readTime,
      date: post.date || fallback.date,
      published: post.published !== false,
    });
  }

  return applyArticleImages(
    Array.from(byId.values()).sort((a, b) => a.id - b.id),
  );
};

export const loadArticles = (): Article[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return applyArticleImages(DEFAULT_ARTICLES);
    }

    const saved = JSON.parse(raw) as Article[];
    if (!Array.isArray(saved) || saved.length === 0) {
      return applyArticleImages(DEFAULT_ARTICLES);
    }

    return mergeWithDefaults(saved);
  } catch {
    return applyArticleImages(DEFAULT_ARTICLES);
  }
};

export const loadPublishedArticles = (): Article[] =>
  loadArticles().filter((article) => article.published);

export const loadArticleById = (id: number): Article | null =>
  loadPublishedArticles().find((article) => article.id === id) ?? null;

export const saveArticles = (articles: Article[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
};

export const seedArticlesIfEmpty = (): Article[] => {
  const articles = loadArticles();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw || (JSON.parse(raw) as Article[]).length === 0) {
      saveArticles(articles);
    }
  } catch {
    saveArticles(articles);
  }

  return articles;
};
