# Integrated Mind — Design System

> Spiritual wellness brand design language inspired by elegant, soulful, and minimalist somatic-healing spaces.

---

## Brand Essence

**Tagline:** Reimagine. Reclaim. Rebirth.

**Tone:** Deeply calming, intuitive, spacious, and grounded. The layout completely avoids cluttered grids, harsh dark panels, and complex color combinations, opting instead for a minimalist canvas where typography and imagery create emotional breathing room.

**Audience:** Seekers of somatic healing, nervous system regulation, and intentional living.

---

## Color Palette

The color strategy swaps high-contrast greens and golds for an earthy, gentle, and feminine palette that feels organic, airy, and soft.

### Core Brand Colors

| Token | Hex | HSL | Usage |
|-------|-----|-----|-------|
| **Clay** | `#B87D6B` | `14 36% 57%` | Primary accent, primary titles, elegant links, core CTAs |
| **Blush** | `#E5D4CD` | `17 24% 85%` | Subtle container backgrounds, light button states, section fills |
| **Cream** | `#FAF7F2` | `38 34% 96%` | Main page background. Never stark white — a warm, natural linen tone |
| **Charcoal** | `#2B2A29` | `30 3% 16%` | Soft text contrast. Replaces harsh black to maintain a gentle appearance |

### Semantic Tokens (CSS Variables)

Defined in `src/index.css`:

```
--background      Warm linen cream (#FAF7F2)
--foreground      Soft charcoal black (#2B2A29)
--primary         Warm terracotta clay (#B87D6B)
--secondary       Soft blush neutral (#E5D4CD)
--muted           Muted taupe/sand for soft copy
--border          Ultra-faint warm tint border
```

### Tailwind Usage

```tsx
// Backgrounds
className="bg-background"       // Main warm cream canvas
className="bg-secondary/30"     // Alternating soft blush sections

// Text
className="text-foreground"     // Soft charcoal body text
className="text-primary"        // Terracotta for highlighted titles or links
```

### Visual Styling Rules

- **No Gradients:** Remove all multi-color linear gradients (`bg-gradient-hero`, `text-gradient-gold`). Color fills must be flat, clean, and organic.
- **No Pure White or Pure Black:** Pure white (`#FFFFFF`) is explicitly banned. Text must remain charcoal rather than heavy black.

---

## Typography

The typography balances clean, effortless modernism with a historic, timeless serif aesthetic.

### Font Families

| Role | Font | Tailwind Class | Style Notes |
|------|------|----------------|-------------|
| Headings | Playfair Display (or Garamond) | `font-heading` | Refined, literary serif for poetry and flow |
| Body | Nunito (or Inter/Lato) | `font-body` | Clean, minimalist sans-serif with light weight |

### Type Scale & Treatment

| Element | Classes | Usage |
|---------|---------|-------|
| Hero H1 | `font-heading text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-foreground` | Large, quiet, poetic phrase |
| Section H2 | `font-heading text-3xl md:text-4xl font-normal text-foreground mb-6` | Clear header sections |
| Card H3 | `font-heading text-xl text-foreground font-normal` | Program/offering options |
| Body | `font-body text-base text-foreground/80 leading-relaxed font-light tracking-wide` | General copy with breathing room |

---

## Spacing, Layout & Motion

The site mimics a premium Squarespace layout: wide margins, large spacing blocks, and minimal columns.

### Section Rhythm

Use aggressive vertical padding to make sections feel open and light. Avoid cramming information.

```tsx
<section className="py-32 bg-background first:pt-40">
```

### Layout Patterns

- **Avoid Complex Grids:** Replace 4-column grids with clean vertical stacks or spacious 2-column blocks.
- **The Text Marquee:** A continuous, slow-scrolling horizontal marquee ticker for soft testimonials or core beliefs (see Animation section).

---

## Animation, Motion & Interaction

### Core Motion Philosophy

The motion profile must mirror a state of nervous system regulation — calm, unhurried, and continuous.

- **No Snap, No Bounce:** Remove all bouncy transitions, aggressive springs, and rapid transformations (`duration-200` or `scale-105` are banned for content interactions).
- **Fluid Fades & Glides:** Elements must gracefully materialize using a clean cubic-bezier easing curve that mimics natural deceleration.
- **Ambient Movement:** The interface relies on constant, sub-perceptual movement (slow looping marquees or breathing imagery) to make the space feel alive and intentional.

### 1. Entrance & Scroll Animations (Scroll-Driven Reveal)

As the user scrolls, sections, headings, and text blocks gently drift upward into view.

```css
/* src/index.css */
@keyframes softGlideUp {
  0% { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-reveal {
  animation: softGlideUp 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
```

Use `ScrollReveal` (intersection observer at 15% viewport threshold) for below-the-fold content. Stagger child elements 200ms apart so the eye is led down the page organically.

```tsx
import { ScrollReveal } from "@/components/ScrollReveal";

<ScrollReveal delay={200}>
  <p>Body copy appears after the heading</p>
</ScrollReveal>
```

### 2. The Ambient Text Marquee (Continuous Loop)

Signature layout detail — visual texture without demanding mental energy. Runs indefinitely on a linear track; pauses on hover for readability.

```css
@keyframes continuousMarquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: continuousMarquee 45s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
```

### 3. Button & Link Interactivity (The Smooth Bleed)

Color fills and underlines bleed gently over 500ms — never snap.

```tsx
// Primary solid button
<Button variant="hero">Let's Begin</Button>
// → bg-primary, transition-colors duration-500, hover:bg-primary/80

// Secondary text link (underline growth)
<Button variant="hero-outline" asChild>
  <Link to="/about">Read my story</Link>
</Button>
// → link-underline class with ::after width transition
```

### 4. Image Visual Transitions (Somatic Breathing Effect)

Large imagery supports a very slow, sub-perceptual pulse when in view.

```css
@keyframes somaticBreathing {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

.animate-somatic-image {
  animation: somaticBreathing 12s ease-in-out infinite;
}
```

### Interaction Timeline

| Interaction Type | Duration | Easing Curve | Visual Behavior |
|------------------|----------|--------------|-----------------|
| Scroll Reveal | 1200ms | `cubic-bezier(0.22, 1, 0.36, 1)` | Elements float up 24px and fade in |
| Hover Transitions | 500ms | `ease-in-out` | Color shifts and underlines bleed smoothly |
| Ambient Marquee | Continuous | `linear` | Slow seamless scroll (45s+ loop) |
| Somatic Image | 12000ms | `ease-in-out` | Sub-perceptual 2% scale pulse |

### Animation Do's & Don'ts

**Do**
- Use long durations (1000ms–1500ms) for elements fading onto screen.
- Delay text columns slightly behind their header elements.
- Pause marquees on hover so users can read.

**Don't**
- Let elements bounce, jerk, scale up heavily, or track the mouse aggressively.
- Use fast transitions (`duration-150` or `duration-200`) except for minor structural utilities like dropdown toggles.

---

## Interactivity & Buttons

Buttons are subtle, geometric, and elegant. They use minimal solid fills and gentle opacity shifts.

### Custom Button Styles

| Style / Variant | Visual Implementation | Use Case |
|-----------------|----------------------|----------|
| **Primary CTA** | Solid Clay (`bg-primary`), text-cream, square/slightly rounded corners, clean uppercase text | Main actions ("LET'S BEGIN") |
| **Secondary CTA** | `border-b-2 border-primary` background-transparent, text-foreground, no container box | Inline links ("read my story") |

### Transitions & Hover Effects

- **No Scale Transforms:** Remove aggressive hover actions (`hover:-translate-y-2` or `hover:scale-105`).
- **Smooth Bleed:** Primary buttons use `transition-colors duration-500 hover:bg-primary/80`. Secondary links use growing underlines via the `link-underline` class.

```tsx
className="transition-colors duration-500 ease-in-out hover:bg-primary/80"
```

---

## Shadows & Border Radius

- **No Drop Shadows:** Strip out all card shadows (`shadow-soft`, `shadow-glow`). The site must look completely flat and editorial.
- **Restrained Corners:** Cards and buttons use sharp corners or a minimal `--radius` of 2px–4px maximum for a high-end editorial lookbook feel.

---

## Icons & Accents

- **Library:** Lucide React
- **The Four-Point Star (✦):** Used as a tiny divider or bullet alternative between minimalist text items.
- **Icon Size:** Used sparingly. 16px–20px, light stroke weight (`strokeWidth={1}`), colored in charcoal or warm terracotta.

---

## Do's & Don'ts

**Do**
- Use massive vertical padding (`py-32`) to make content feel light.
- Let text blocks float over large blocks of flat, warm cream canvas.
- Use a continuous, slow text marquee ticker for ambient movement.
- Keep layouts simple — vertical stacks or spacious 2-column rows.

**Don't**
- Use multi-colored gradients, bright gold, or glowing hover states.
- Add drop shadows or heavy modern borders to containers.
- Use full-round pill buttons (`rounded-full`) — keep corners squared or micro-rounded.
- Crowd sections with compact 4-column feature grids.

---

## File Reference

| File | Purpose |
|------|---------|
| `src/index.css` | CSS variables, motion keyframes, utility classes |
| `tailwind.config.ts` | Font families, color mappings, animation config |
| `src/components/ui/button.tsx` | Button variants with smooth bleed hovers |
| `src/components/TextMarquee.tsx` | Infinite scrolling testimonial ticker |
| `src/components/ScrollReveal.tsx` | Scroll-driven reveal wrapper |
| `src/hooks/use-scroll-reveal.ts` | Intersection observer hook (15% threshold) |
| `src/components/layout/Layout.tsx` | Page shell (Navbar + main + Footer) |
