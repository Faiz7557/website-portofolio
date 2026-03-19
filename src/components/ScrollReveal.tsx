"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Re-runs IntersectionObserver on every route change so the
 * .reveal → .visible class transition fires correctly after
 * Next.js soft navigation.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the new page DOM render fully
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      document.querySelectorAll(".reveal").forEach((el) => {
        // Reset so items that haven't been seen yet start hidden
        el.classList.remove("visible");
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]); // re-run whenever route changes

  return null;
}
