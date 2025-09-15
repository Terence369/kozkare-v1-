"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Examples — Kozkare",
}

type Example = {
  title: string
  subtitle?: string
  href?: string
  images?: string[]
}

const examples: Example[] = [
  {
    title: "Downtown Dental Clinic",
    subtitle: "Dental Clinic • Kochi",
    href: "https://dental-template.framer.website/",
    images: [
      "https://framerusercontent.com/images/QZcT8U16OIs9tqgJachnJ2ZZZH0.png",
      "https://framerusercontent.com/images/zyLihMsmSSdiL5g5jHJn4e6zQ.jpg",
      "https://framerusercontent.com/images/0YT123QRbremRM1AgxCueBx7IRY.jpg",
      "https://framerusercontent.com/images/yWUGDZMAYtE216zWWnYBZ0LBoRo.jpg",
      "https://framerusercontent.com/images/BcSdxaffL9NSUbnZMFbwTXGgdcc.jpg",
      "https://framerusercontent.com/images/puGp4Hi5DUcsbLLVVYEhrdP1lg.jpg",
    ],
  },
  { title: "Skin & Laser Centre", subtitle: "Dermatology • Ernakulam" },
  { title: "Vision Eye Care", subtitle: "Eye Care • Thrissur" },
]

function ExampleCard({ example }: { example: Example }) {
  const { title, subtitle, href, images } = example
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const isHovering = useRef(false)

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [])

  const startCycle = () => {
    if (!images || images.length <= 1) return
    isHovering.current = true
    // immediately advance to the next image for instant feedback
    setIndex((i) => (i + 1) % images.length)
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 900)
  }

  const stopCycle = () => {
    isHovering.current = false
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIndex(0)
  }

  const content = (
    <Card
      className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onMouseEnter={startCycle}
      onFocus={startCycle}
      onMouseLeave={stopCycle}
      onBlur={stopCycle}
    >
      <div className="space-y-4">
        <div className="relative h-44 w-full rounded-lg overflow-hidden bg-muted">
          {images && images.length ? (
            <img
              src={images[index]}
              alt={`${title} preview ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-muted-foreground">No image</div>
          )}

          {/* thumbnails on hover for keyboard & desktop users */}
          {images && images.length > 1 && (
            <div className="absolute left-3 bottom-3 right-3 hidden group-hover:flex gap-2 items-center justify-center">
              {images.slice(0, 5).map((src, i) => (
                <button
                  key={src}
                  onMouseEnter={() => setIndex(i)}
                  onFocus={() => setIndex(i)}
                  className={`h-12 w-20 rounded-md overflow-hidden ring-1 ring-border/40 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-opacity ${
                    i === index ? "opacity-100" : "opacity-70"
                  }`}
                >
                  <img src={src} alt={`${title} thumb ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-3">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="sm" className="w-full">
                Open Demo
              </Button>
            </a>
          ) : (
            <Button size="sm" className="w-full" asChild>
              <span>View Demo</span>
            </Button>
          )}

          <Button variant="outline" size="sm" className="w-full">
            Use Template
          </Button>
        </div>
      </div>
    </Card>
  )

  return content
}

export default function ExamplesPage() {
  return (
    <main className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">Clinic Website Examples</h1>
            <p className="text-muted-foreground mt-2">Real layouts we build for clinics — responsive, conversion-focused pages.</p>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Templates</Badge>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((ex) => (
            <ExampleCard key={ex.title} example={ex} />
          ))}
        </div>
      </div>
    </main>
  )
}
