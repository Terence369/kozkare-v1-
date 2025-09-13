"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initGsapAnimations() {
  // Progress bar at top reflecting scroll
  const progressEl = document.getElementById("scroll-progress")
  if (progressEl) {
    gsap.set(progressEl, { scaleX: 0 })
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.to(progressEl, { scaleX: self.progress, duration: 0.2, ease: "power1.out" })
      },
    })
  }

  // Batch reveal animations for headings and cards
  const revealSelectors = [
    "section h1",
    "section h2",
    "section h3",
    "section h4",
    "[data-slot='card']",
    "table",
  ]

  const targets = gsap.utils.toArray<HTMLElement>(revealSelectors.join(","))
  if (targets.length) {
    gsap.set(targets, { opacity: 0, y: 24 })
    ScrollTrigger.batch(targets, {
      start: "top 80%",
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: { each: 0.08, from: "start" },
        })
      },
    })
  }

  // Subtle parallax for decorative gradient layer
  const gradientEl = document.querySelector<HTMLElement>(".motion-gradient")
  if (gradientEl) {
    // Slow rotation loop
    gsap.to(gradientEl, { rotate: 360, duration: 180, ease: "none", repeat: -1, transformOrigin: "50% 50%" })

    // Mouse parallax
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 12
      gsap.to(gradientEl, { x, y, duration: 0.6, ease: "power2.out" })
    }
    window.addEventListener("mousemove", onMove)

    // Cleanup when HMR/dispose
    const cleanup = () => window.removeEventListener("mousemove", onMove)
    // @ts-ignore - Vite/Next HMR hook (no-op if not present)
    if (import.meta && (import.meta as any).hot) (import.meta as any).hot.dispose(cleanup)
  }
}
