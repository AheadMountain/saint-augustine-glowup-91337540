import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Hook that observes elements and triggers fade-up animations when they enter the viewport.
 * Returns a ref callback to attach to container elements.
 */
export function useScrollReveal(threshold = 0.15) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother class addition
            requestAnimationFrame(() => {
              entry.target.classList.add("visible");
            });
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    // Observe any already-registered elements
    elementsRef.current.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold]);

  const observe = useCallback((el: Element | null) => {
    if (el) {
      elementsRef.current.add(el);
      observerRef.current?.observe(el);
    }
  }, []);

  return observe;
}

/**
 * Hook for parallax scroll effect on an element
 */
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        if (scrolled > 0) {
          ref.current.style.transform = `translateY(${scrolled * speed}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
