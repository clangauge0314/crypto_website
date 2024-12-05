import { useEffect, useRef } from "react";

interface UseScrollToNextSectionProps {
  currentSectionId: string;
  nextSectionId: string;
  threshold?: number;
}

export const useScrollToNextSection = ({
  currentSectionId,
  nextSectionId,
  threshold = 0.3
}: UseScrollToNextSectionProps) => {
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const currentSection = document.getElementById(currentSectionId);
      const currentSectionTop = currentSection?.offsetTop || 0;
      const currentSectionHeight = currentSection?.offsetHeight || 0;
      
      const isInCurrentSection = 
        scrollHeight >= currentSectionTop && 
        scrollHeight <= (currentSectionTop + currentSectionHeight);
      
      const triggerPoint = currentSectionTop + (currentSectionHeight * threshold);

      if (isInCurrentSection && scrollHeight > triggerPoint && !hasScrolled.current) {
        hasScrolled.current = true;
        const nextSection = document.getElementById(nextSectionId);
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (scrollHeight < currentSectionTop) {
        hasScrolled.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSectionId, nextSectionId, threshold]);
}; 