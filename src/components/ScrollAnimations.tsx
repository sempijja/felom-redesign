
import { useEffect, useRef } from "react";

const ScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Mark elements as visible immediately on first load
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    
    // Make elements visible initially
    animatedElements.forEach((element) => {
      // Add animated class to all elements initially to ensure visibility
      element.classList.add("animated");
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        animatedElements.forEach((element) => {
          observerRef.current?.unobserve(element);
        });
      }
    };
  }, []);

  return null;
};

export default ScrollAnimations;
