import { useEffect, useState, type RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal(
  ref: RefObject<Element | null>,
  { threshold = 0.15, rootMargin = "0px" }: UseScrollRevealOptions = {},
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return isVisible;
}
