import { useEffect, useRef } from "react";

type ParallaxOptions = {
  // Positive values move slower than scroll; negative values move opposite
  speed?: number; // default 0.2
  maxTranslate?: number; // in px, default 60
};

/**
 * Hook to apply a simple translateY parallax effect to a DOM element.
 * Usage:
 * const ref = useParallax({ speed: 0.2 });
 * <div ref={ref} />
 */
export function useParallax(options?: ParallaxOptions) {
  const elementRef = useRef<HTMLElement | null>(null);
  const speed = options?.speed ?? 0.2;
  const maxTranslate = options?.maxTranslate ?? 60;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let rafId = 0;

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        // progress: 0 when top hits viewport top, 1 when bottom hits viewport bottom
        const progress = (rect.top + rect.height / 2) / viewportHeight;
        const translateY = Math.max(
          -Math.abs(maxTranslate),
          Math.min(
            Math.abs(maxTranslate),
            (progress - 0.5) * 2 * maxTranslate * speed
          )
        );
        element.style.transform = `translate3d(0, ${translateY.toFixed(
          2
        )}px, 0)`;
        element.style.willChange = "transform";
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", onScroll as EventListener);
    };
  }, [maxTranslate, speed]);

  return elementRef as React.RefObject<HTMLElement>;
}
