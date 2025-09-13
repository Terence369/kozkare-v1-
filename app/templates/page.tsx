"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FloodLink } from "@/components/ui/flood-link"

export default function TemplatesPage() {
  const templates = [
    {
      id: "trust-focused",
      title: "Trust-Focused Clinic",
      subtitle: "Build instant credibility with doctor profiles, certifications, and patient assurances.",
      features: ["Doctor Profiles", "Accreditations", "Safety Protocols"],
      image:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f5c2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "procedure-first",
      title: "Procedure-First Landing",
      subtitle: "Answer the top patient questions with transparent pricing and clear next steps.",
      features: ["Transparent Pricing", "Eligibility", "Aftercare"],
      image:
        "https://images.unsplash.com/photo-1583910290403-23b227dc7bd6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "minimalist",
      title: "Minimalist Clinic",
      subtitle: "Clean, modern layout that keeps focus on services and simple conversion paths.",
      features: ["Fast", "Mobile-first", "SEO-ready"],
      image:
        "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation (replicated for consistency) */}
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
              <a href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <span className="text-foreground font-medium">Examples</span>
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 text-center">
          <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/40">
            Curated Starter Layouts
          </Badge>
          <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-balance leading-tight">
            Explore clinic website templates designed to convert
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from proven layouts focused on trust, clarity, and patient action. Each template is fully adaptable
            to your specialty and branding.
          </p>
        </div>
      </header>

      {/* Templates Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((t, i) => (
              <Card key={t.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={t.image}
                    alt={`${t.title} preview`}
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.features.map((f) => (
                      <Badge key={f} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {f}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Button asChild className="w-full">
                      <FloodLink href="#" aria-label={`Preview ${t.title}`} floodColor="var(--primary)">
                        Preview Template
                      </FloodLink>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Want something custom? We tailor every template to match your clinic's brand, services, and patient needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/80">© 2024 Kozkare. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-secondary-foreground/80">
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
