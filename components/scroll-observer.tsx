"use client";

import { useEffect, useState } from "react";

export function ScrollObserver() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Scroll progress tracker for top reading indicator
    const handleScroll = () => {
      const scrollElement = document.documentElement;
      const totalScroll = scrollElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. IntersectionObserver for [data-motion] elements across the page
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            // Unobserve once revealed to keep rendering optimal
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Initial query
    const elements = document.querySelectorAll("[data-motion]");
    elements.forEach((el) => observer.observe(el));

    // Mutation observer to capture dynamically mounted sections / tabs
    const mutationObserver = new MutationObserver(() => {
      const pendingElements = document.querySelectorAll(
        "[data-motion]:not([data-visible='true'])"
      );
      pendingElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="scroll-progress-container"
      title="Scroll Progress"
    >
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
