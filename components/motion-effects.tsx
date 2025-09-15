"use client"

import { useEffect } from "react"
import { initGsapAnimations } from "@/lib/gsapAnimations"

export default function MotionEffects() {
  useEffect(() => {
    initGsapAnimations()
  }, [])

  return (
    <>
      <div id="scroll-progress" className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full origin-left scale-x-0 bg-accent" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="motion-gradient absolute inset-[-10%] opacity-40" />
      </div>
    </>
  )
}
