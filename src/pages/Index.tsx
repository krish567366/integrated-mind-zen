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
import heroImage from "@/assets/image5.jpeg";
import image2 from "@/assets/image2.webp";
import image3 from "@/assets/image3.webp";
import founderImg from "@/assets/founder.webp";

const rightPlaceItems = [
  <>
    <strong className="font-normal text-foreground">You are an empath, HSP, creative, heart-led, or intentional soul-led leader</strong>{" "}
    who desires to share your gifts in a way that nourishes you and your nervous system while also spreading more light into the world.
  </>,
  <>
    <strong className="font-normal text-foreground">You are recovering from people pleasing or playing small</strong>{" "}
    <em>to stay safe</em> and are ready to expand past old programs and patterns that are keeping you stuck.
  </>,
  <>
    <strong className="font-normal text-foreground">You are ready to feel peace and joy while doing work you love,</strong>{" "}
    but may find yourself in a soul-sucking job, relationship, or career.
  </>,
  <>
    <strong className="font-normal text-foreground">You desire deep, meaningful, juicy, soul-aligned relationships,</strong>{" "}
    where you are not holding back or hiding your true colors in any way.
  </>,
  <>
    <strong className="font-normal text-foreground">You long to attune to your most divinely aligned life</strong>, physically,
    emotionally, spiritually, and mentally, but feel something is blocking you.
  </>,
  <>
    <strong className="font-normal text-foreground">You know inside that you are no longer willing to stay stuck</strong>, frustrated,
    or exhausted one more day.
  </>,
  <>
    <strong className="font-normal text-foreground">You are a YES to your soul's expansion,</strong> stepping more into your unique
    essence and work you're here to share.
  </>,
];

const Index = () => {
  return (
    <Layout overlayHeader>
      {/* ① Hero image — edge to edge, sits under fixed header */}
      <BleedImage src={heroImage} alt="" />

      {/* ② Hero copy — left-aligned in wide inset (matches Laura Lee h2 default) */}
      <EditorialSection>
        <InsetWide className="space-y-1 md:space-y-2">
          <EditorialH2>Reimagine.</EditorialH2>
          <EditorialH2>Reclaim. Rebirth.</EditorialH2>
          <EditorialH2>
            Unleash <em>your</em> light.
          </EditorialH2>
          <EditorialPillLink to="/contact" uppercase className="mt-10">
            Let's Begin
          </EditorialPillLink>
        </InsetWide>
      </EditorialSection>

      {/* ③ Philosophy — only this heading is centered on her site */}
      <EditorialSection tight>
        <InsetWide align="center" className="space-y-10">
          <EditorialH2 center>No one else is exactly like you and that's your magic.</EditorialH2>
          <p className="text-foreground/40 text-xl leading-none">✦</p>
          <EditorialBody className="text-center max-w-2xl mx-auto">
            <p>But in our world, it can be so easy not to trust it.</p>
            <p>To dim your light.</p>
            <p>To be mired in self-doubt.</p>
            <p>To hide your true voice.</p>
            <p>
              You can get lost in comparison, overthinking, overdoing, over-caretaking, or{" "}
              <em>should-ing</em> and shaming yourself into more. But you've been on a path of healing
              and it's helping you uncover who you are and what you're here to share.
            </p>
          </EditorialBody>
          <EditorialH2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] text-center">
            Now you are being called to <em>expand</em>.
          </EditorialH2>
          <p className="font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light leading-[1.85] text-foreground/80 text-center max-w-2xl mx-auto">
            To experience your true brand of extraordinary, deep connection, intimacy, meaning, and JOY
            in your life <em>AND</em> in the work you share with the world.
          </p>
        </InsetWide>
      </EditorialSection>

      <BleedImage src={image2} alt="" />

      {/* ④ Liberation */}
      <EditorialSection>
        <InsetWide className="space-y-10">
          <EditorialH2>
            You're being called to liberate your authentic magic <em>even more.</em>
          </EditorialH2>
          <EditorialBody>
            <p>
              Your liberation is your soul's unique medicine for yourself, your family, and a world
              that deeply needs healing.
            </p>
            <p>It's all possible.</p>
            <p>
              <strong className="font-normal text-foreground">
                You are a possibility in and of itself <em>and</em> you are a voice.
              </strong>
            </p>
            <p>
              For the past two decades, I've been supporting seekers like you to liberate themselves
              from self-doubt and come home to their soul.
            </p>
          </EditorialBody>
        </InsetWide>
      </EditorialSection>

      <BleedImage src={founderImg} alt="Vibhu" />

      {/* ⑤ Bio */}
      <EditorialSection>
        <InsetWide className="space-y-10">
          <EditorialH2>
            I'm Vibhu; Spiritual Coach and Soul Guide for entrepreneurs, empaths, creatives, and
            heart-led leaders.
          </EditorialH2>
          <EditorialBody>
            <p>
              I help you liberate yourself from doubt and distraction, expand into your soul, and do
              the work that brings you JOY.
            </p>
            <p>I believe JOY is your rebellion against the lies of shoulds and shame.</p>
            <p>
              I bring my own story of liberation and a unique blend of somatic practice,
              transformational tools, coaching, energy work, breathwork, and creative expression to{" "}
              <em>
                support you in your healing so that you can embody your light and share it with the
                world.
              </em>
            </p>
            <p className="font-heading text-[clamp(1.125rem,2vw,1.375rem)] text-foreground leading-snug">
              Let's Reimagine. Reclaim. Rebirth. And unleash <em>your</em> light.
            </p>
          </EditorialBody>
          <EditorialPillLink to="/about" className="mt-2">
            read my story
          </EditorialPillLink>
        </InsetWide>
      </EditorialSection>

      <BleedImage src={image3} alt="" />

      {/* ⑥ Right place */}
      <EditorialSection>
        <InsetWide className="space-y-12">
          <EditorialH2>You are in the right place if…</EditorialH2>
          <EditorialBody className="space-y-8">
            {rightPlaceItems.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </EditorialBody>
        </InsetWide>
      </EditorialSection>

      {/* ⑦ Testimonial */}
      <EditorialSection>
        <InsetWide className="space-y-10">
          <EditorialH2 className="italic font-normal">
            "I really and truly <em>re-wrote</em> my story! I could see it and feel it."
          </EditorialH2>
          <EditorialBody>
            <p>
              When I first began working with Vibhu, I came with the desire to finally get out of the
              belief that I'm not good enough. I knew this was my journey going in and now, it's not
              where I live anymore! When I go there, it's a brief trip and I don't stay. My old
              stories hold no validity for me now… at work and in parenting. I step back, observe,
              listen, ask, and then act.
            </p>
            <p>
              Vibhu led me through processes to rewrite, reimagine, and to create a new body memory
              from a past experience that was so powerful and shifted SO MUCH for me. I really and
              truly re-wrote the story! I could see it and feel it! Embodiment work — YES!
            </p>
            <p>
              My cup overflows with gratitude for everything about Vibhu and our work together. It's
              challenging to put into words how much he has changed my life.
            </p>
          </EditorialBody>
          <p className="font-heading text-sm tracking-[0.12em] text-foreground/55 uppercase">
            — Molly M., Teacher
          </p>
        </InsetWide>
      </EditorialSection>

      <TextMarquee
        phrases={[
          "I left feeling peaceful",
          "She speaks from her heart",
          "I could feel myself coming back to life",
        ]}
      />

      {/* ⑧ Programs — second centered heading on her site */}
      <EditorialSection>
        <InsetWide align="center" className="space-y-8">
          <EditorialH2 center>Which program is right for you?</EditorialH2>
          <p className="font-body text-[clamp(1rem,1.6vw,1.125rem)] font-light leading-[1.85] text-foreground/80 max-w-xl mx-auto">
            Offerings include highly individualized coaching, in-person retreats, and group
            experiences — all created to accelerate your soul's unique expression.
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
