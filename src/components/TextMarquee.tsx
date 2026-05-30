interface TextMarqueeProps {
  phrases: string[];
}

export const TextMarquee = ({ phrases }: TextMarqueeProps) => {
  const segment = phrases.map((p) => `"${p}"`).join("  •  ");
  const content = `${segment}  •  `;

  return (
    <div className="w-full overflow-hidden py-14 md:py-20 marquee-fade-edges">
      <div className="animate-marquee-track font-heading font-normal text-[clamp(1.75rem,4.5vw,3rem)] leading-none tracking-wide text-foreground/45 whitespace-nowrap">
        <span className="mx-12">{content}</span>
        <span className="mx-12" aria-hidden="true">
          {content}
        </span>
      </div>
    </div>
  );
};
