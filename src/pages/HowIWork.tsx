import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import {
  BleedImage,
  EditorialBody,
  EditorialH2,
  EditorialSection,
  InsetWide,
} from "@/components/editorial/Editorial";
import { EditorialPillLink } from "@/components/editorial/EditorialPillLink";
import contemplativeImage from "@/assets/contemplative.jpeg";
import pathImage from "@/assets/path.jpeg";

const principles = [
  {
    title: "Reflective dialogue",
    description:
      "Sessions unfold through open, unhurried conversation — a space where your experiences, questions, and inner patterns can be explored without judgment or rush.",
  },
  {
    title: "Compassionate inquiry",
    description:
      "Rather than offering quick answers, we inquire together. Gentle questioning helps uncover the thought patterns, emotional responses, and beliefs shaping your inner life.",
  },
  {
    title: "Awareness over force",
    description:
      "Lasting change arises when patterns are observed with understanding, not suppressed. The aim is clarity and balance — not fixing or forcing the mind into stillness.",
  },
  {
    title: "Holistic integration",
    description:
      "Drawing on Eastern psychotherapy, mindfulness, brain science, and contemplative practice, the work addresses mind, emotion, and lived experience as one interconnected whole.",
  },
];

const process = [
  {
    step: "01",
    title: "Connect",
    description:
      "We begin with an initial conversation to understand what brings you here — your concerns, questions, and what you hope to explore.",
  },
  {
    step: "02",
    title: "Explore",
    description:
      "Through dialogue and inquiry, we gently examine the patterns, relationships, and experiences that shape how you respond to life.",
  },
  {
    step: "03",
    title: "Understand",
    description:
      "As awareness deepens, recurring thoughts, emotional reactions, and conditioning become visible — creating room for insight and self-understanding.",
  },
  {
    step: "04",
    title: "Integrate",
    description:
      "What is discovered in session gradually informs daily life — supporting greater clarity, emotional balance, and a more grounded way of being.",
  },
];

const HowIWork = () => {
  return (
    <Layout>
      <EditorialSection>
        <InsetWide className="space-y-6">
          <EditorialH2>How I Work</EditorialH2>
          <p className="font-body text-[clamp(1.125rem,2vw,1.5rem)] font-light leading-[1.6] text-foreground/80 max-w-3xl">
            A contemplative approach rooted in inquiry, awareness, and compassionate understanding.
          </p>
        </InsetWide>
      </EditorialSection>

      <EditorialSection tight>
        <InsetWide align="center" className="space-y-10">
          <EditorialH2 center>An unhurried space for inner exploration.</EditorialH2>
          <p className="text-foreground/40 text-xl leading-none">✦</p>
          <EditorialBody className="text-center max-w-2xl mx-auto">
            <p>
              My work is not about surface-level solutions or prescribed answers. It is a thoughtful,
              collaborative process — one that invites you to look more closely at the patterns of mind
              and experience that sustain difficulty, and to discover what supports clarity and ease.
            </p>
            <p>
              Whether in one-to-one dialogue, group circles, or immersive retreats, the same spirit
              guides the work: reflective conversation, compassionate inquiry, and a deep respect for
              your own capacity to understand and transform.
            </p>
          </EditorialBody>
        </InsetWide>
      </EditorialSection>

      <BleedImage src={contemplativeImage} alt="" />

      <EditorialSection>
        <InsetWide className="space-y-16">
          <EditorialH2>Guiding principles</EditorialH2>
          <div className="space-y-12">
            {principles.map((item) => (
              <div key={item.title} className="space-y-3 border-b border-foreground/[0.06] pb-12 last:border-0 last:pb-0">
                <h3 className="font-heading text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light leading-[1.85] text-foreground/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </InsetWide>
      </EditorialSection>

      <BleedImage src={pathImage} alt="" />

      <EditorialSection>
        <InsetWide className="space-y-16">
          <EditorialH2>The process</EditorialH2>
          <div className="grid sm:grid-cols-2 gap-12">
            {process.map((item) => (
              <div key={item.step} className="space-y-4">
                <p className="font-body text-[0.6875rem] tracking-[0.18em] uppercase text-foreground/45">
                  {item.step}
                </p>
                <h3 className="font-heading text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-base font-light leading-[1.85] text-foreground/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </InsetWide>
      </EditorialSection>

      <EditorialSection>
        <InsetWide align="center" className="space-y-8">
          <EditorialH2 center>What you can expect</EditorialH2>
          <EditorialBody className="text-center max-w-2xl mx-auto">
            <p>
              Sessions are calm, confidential, and tailored to your needs. There is no performance
              expected — only a willingness to explore honestly. Over time, many people find they
              develop greater self-understanding, emotional resilience, and a more thoughtful
              relationship with their own mind.
            </p>
            <p>
              One-to-one sessions are available online or in person. Group workshops and retreats
              offer shared inquiry in a supportive, reflective environment.
            </p>
          </EditorialBody>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <EditorialPillLink to="/services">View services</EditorialPillLink>
            <EditorialPillLink to="/contact" uppercase>
              Get in touch
            </EditorialPillLink>
          </div>
        </InsetWide>
      </EditorialSection>

      <Newsletter />
    </Layout>
  );
};

export default HowIWork;
