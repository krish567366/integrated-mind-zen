import { Layout } from "@/components/layout/Layout";
import { Newsletter } from "@/components/Newsletter";
import { TextMarquee } from "@/components/TextMarquee";
import {
  BleedImage,
  EditorialBody,
  EditorialH2,
  EditorialSection,
  InsetWide,
} from "@/components/editorial/Editorial";
import { EditorialPillLink } from "@/components/editorial/EditorialPillLink";
import heroImage from "@/assets/hero.jpeg";
import contemplativeImage from "@/assets/contemplative.jpeg";
import pathImage from "@/assets/path.jpeg";
import article4Image from "@/assets/article4.jpeg";

const Index = () => {
  return (
    <Layout overlayHeader>
      {/* ① Hero image — edge to edge, sits under fixed header */}
      <BleedImage src={heroImage} alt="" />

      {/* ② Hero copy */}
      <EditorialSection>
        <InsetWide className="space-y-4 md:space-y-6">
          <EditorialH2>Integrated Mind</EditorialH2>
          <p className="font-body text-[clamp(1.125rem,2vw,1.5rem)] font-light leading-[1.6] text-foreground/80 max-w-3xl">
            Understanding the patterns of the mind where suffering begins and clarity naturally emerges.
          </p>
          <EditorialPillLink to="/contact" uppercase className="mt-6">
            Let's Begin
          </EditorialPillLink>
        </InsetWide>
      </EditorialSection>

      {/* ③ Introduction */}
      <EditorialSection tight>
        <InsetWide align="center" className="space-y-10">
          <EditorialH2 center>A contemplative space for inner exploration.</EditorialH2>
          <p className="text-foreground/40 text-xl leading-none">✦</p>
          <EditorialBody className="text-center max-w-2xl mx-auto">
            <p>
              Integrated Mind offers a contemplative space for exploring the patterns of the mind and
              the experiences that shape our lives.
            </p>
            <p>
              Many of the difficulties people face — anxiety, inner conflict, emotional overwhelm, or a
              sense of disconnection — are often sustained by repetitive patterns of thought, reaction,
              and conditioning.
            </p>
            <p>
              When these patterns are gently observed with awareness and understanding, the mind can begin
              to settle into greater clarity, balance, and ease.
            </p>
          </EditorialBody>
        </InsetWide>
      </EditorialSection>

      <BleedImage src={contemplativeImage} alt="" />

      {/* ④ Approach */}
      <EditorialSection>
        <InsetWide className="space-y-10">
          <EditorialH2>
            A deeper exploration of <em>inner experience.</em>
          </EditorialH2>
          <EditorialBody>
            <p>
              Rather than focusing only on surface-level solutions, this approach invites a deeper
              exploration of one's inner experience.
            </p>
            <p>
              Through reflective dialogue and compassionate inquiry, it becomes possible to gain insight
              into the movement of the mind and the patterns that shape our responses to life.
            </p>
          </EditorialBody>
        </InsetWide>
      </EditorialSection>

      <BleedImage src={pathImage} alt="" />

      {/* ⑤ Invitation */}
      <EditorialSection>
        <InsetWide className="space-y-10">
          <EditorialH2>
            A thoughtful and supportive space for <em>inner transformation.</em>
          </EditorialH2>
          <EditorialBody>
            <p>
              Integrated Mind offers a thoughtful and supportive space for those who wish to understand
              themselves more deeply and explore the possibility of meaningful inner transformation
              through awareness, insight, and compassionate understanding.
            </p>
          </EditorialBody>
          <EditorialPillLink to="/about" className="mt-2">
            learn more
          </EditorialPillLink>
        </InsetWide>
      </EditorialSection>

      <BleedImage src={article4Image} alt="" />

      {/* ⑥ Pull quote */}
      <EditorialSection>
        <InsetWide className="space-y-10">
          <EditorialH2 className="italic font-normal">
            When patterns are gently observed with awareness, clarity naturally <em>emerges.</em>
          </EditorialH2>
          <EditorialBody>
            <p>
              The mind does not need to be forced into stillness. Through understanding — not suppression
              — it can settle into greater balance and ease.
            </p>
          </EditorialBody>
        </InsetWide>
      </EditorialSection>

      <TextMarquee
        phrases={[
          "Clarity naturally emerges",
          "Awareness and understanding",
          "Compassionate inquiry",
          "Patterns of the mind",
        ]}
      />

      {/* ⑧ Services */}
      <EditorialSection>
        <InsetWide align="center" className="space-y-8">
          <EditorialH2 center>Begin your exploration</EditorialH2>
          <p className="font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light leading-[1.85] text-foreground/80 max-w-xl mx-auto">
            Transformational dialogue, group circles, retreats, and workplace programs — each offering a
            supportive space for reflective dialogue and compassionate inquiry.
          </p>
          <EditorialPillLink to="/services">
            Explore all services
          </EditorialPillLink>
        </InsetWide>
      </EditorialSection>

      <Newsletter />
    </Layout>
  );
};

export default Index;
