"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    id: "netlify-1",
    name: "Dentica — Dentist & Dental Clinic",
    url: "https://68c27bf409d8488df3918e04--loquacious-kulfi-836669.netlify.app/",
    image: "https://cdn.builder.io/api/v1/image/assets%2F2bdfb75c4a42464ea64f680845f3e793%2F7eb0d38b9b744bef98b5ccd4f565460c",
    highlights: ["Fast", "Mobile-first", "Clear CTAs"],
  },
  {
    id: "netlify-2",
    name: "Ayurveda Nirvana Spa | Authentic Ayurvedic Spa in Kochi, Kerala",
    url: "https://ayurvedic-spa-demo.netlify.app/",
    image: "https://images.pexels.com/photos/5374224/pexels-photo-5374224.jpeg",
    highlights: ["Wellness Theme", "Service Flow", "Trust Sections"],
  },
]

export default function ExamplesPage() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-foreground">Kozkare</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <span className="text-foreground font-medium">Examples</span>
              <Button variant="outline" size="sm" asChild><a href="/#contact">Contact</a></Button>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center">
          <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/40">Our Work</Badge>
          <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-balance leading-tight">Real examples that inspire trust and action</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Explore live projects that demonstrate clear messaging, transparent pricing, and smooth patient journeys.</p>
        </div>
      </header>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <Card key={p.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                {p.image ? (
                  <Image src={p.image} alt={`${p.name} thumbnail`} width={1200} height={700} className="h-48 w-full object-cover" />
                ) : null}
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground break-all">{p.url}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <Badge key={h} variant="outline" className="bg-primary/5 text-primary border-primary/20">{h}</Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-6">
                  <Button asChild className="w-full">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`}>Open Project</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/80">© 2024 Kozkare. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-secondary-foreground/80">
              <a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
