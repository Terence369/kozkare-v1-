"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

type FloodEventDetail = {
  x: number
  y: number
  href: string
  color?: string
  duration?: number
}

type Phase = "idle" | "expanding" | "fading"

export default function FloodOverlay() {
  const router = useRouter()
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const [phase, setPhase] = useState<Phase>("idle")
  const [grown, setGrown] = useState(false)
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [color, setColor] = useState<string>("var(--primary)")
  const durationRef = useRef<number>(600)
  const pendingHref = useRef<string | null>(null)
  const cleanupTimer = useRef<number | null>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<FloodEventDetail>
      const { x, y, href, color: c, duration } = ce.detail
      if (!href) return
      setCoords({ x, y })
      setColor(c || "var(--primary)")
      durationRef.current = duration || 600
      pendingHref.current = href
      setActive(true)
      setPhase("expanding")
      setGrown(false)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setGrown(true))
      })
      window.setTimeout(() => {
        if (pendingHref.current) router.push(pendingHref.current)
      }, durationRef.current * 0.75)
    }

    window.addEventListener("flood:start", handler as EventListener)
    return () => window.removeEventListener("flood:start", handler as EventListener)
  }, [router])

  useEffect(() => {
    if (!active || phase !== "expanding") return
    const t = window.setTimeout(() => setPhase("fading"), durationRef.current + 100)
    return () => window.clearTimeout(t)
  }, [active, phase])

  useEffect(() => {
    if (!active) return
    if (cleanupTimer.current) window.clearTimeout(cleanupTimer.current)
    cleanupTimer.current = window.setTimeout(() => {
      setActive(false)
      setPhase("idle")
      pendingHref.current = null
      setGrown(false)
    }, durationRef.current + 350) as unknown as number
  }, [pathname])

  if (!active) return null

  const transitionDuration = `${durationRef.current}ms`

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className={[
          "absolute rounded-full will-change-transform will-change-opacity",
          "w-[400vmax] h-[400vmax]",
          phase === "expanding" ? (grown ? "opacity-100 scale-100" : "opacity-100 scale-0") : "opacity-0 scale-100",
          "transition-[transform,opacity] ease-out",
        ].join(" ")}
        style={{
          left: coords.x,
          top: coords.y,
          background: color,
          transformOrigin: "center",
          translate: "-50% -50%",
          transitionDuration,
        }}
      />
    </div>
  )
}
