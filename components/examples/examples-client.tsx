"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
  {
    title: "Skin & Laser Centre",
    subtitle: "Dermatology • Ernakulam",
    href: "https://68c27bf409d8488df3918e04--loquacious-kulfi-836669.netlify.app/",
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F7eb0d38b9b744bef98b5ccd4f565460c",
      "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F6100a091acbe4210989f04123b3b3958",
      "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F44c34518470f404ab762203a7a21d144",
      "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F825096872a4f4de99ea9bcf00ba888e6",
      "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F47fd9528288d48058bcb6d627668b848",
      "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F32cccde8156349cca3893c3090f1ab4f",
    ],
  },
  {
    title: "Vision Eye Care",
    subtitle: "Eye Care • Thrissur",
    href: "https://ayurvedic-spa-demo.netlify.app/",
    images: [
      "https://images.pexels.com/photos/6187639/pexels-photo-6187639.jpeg",
      "https://images.pexels.com/photos/6045199/pexels-photo-6045199.jpeg",
      "https://images.pexels.com/photos/2833312/pexels-photo-2833312.jpeg",
      "https://images.pexels.com/photos/3543680/pexels-photo-3543680.jpeg",
      "https://images.pexels.com/photos/6220707/pexels-photo-6220707.jpeg",
      "https://images.pexels.com/photos/7148527/pexels-photo-7148527.jpeg",
    ],
  },
]

function ExampleCard({ example }: { example: Example }) {
  const { title, subtitle, href, images } = example
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [])

  const startCycle = () => {
    if (!images || images.length <= 1) return
    setIndex((i) => (i + 1) % images.length)
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 900)
  }

  const stopCycle = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIndex(0)
  }

  return (
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
}

export default function ExamplesClient() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
        {examples.map((ex) => (
          <ExampleCard key={ex.title} example={ex} />
        ))}
      </div>
    </div>
  )
}
