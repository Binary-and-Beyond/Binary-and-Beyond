import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;

      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = target.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }
    };

    // Add event listener to document
    document.addEventListener("click", handleSmoothScroll);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);
};

export default useSmoothScroll;
