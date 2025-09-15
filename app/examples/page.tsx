import React from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Examples — Kozkare",
}

export default function ExamplesPage() {
  const examples = [
    { title: "Downtown Dental Clinic", subtitle: "Dental Clinic • Kochi" },
    { title: "Skin & Laser Centre", subtitle: "Dermatology • Ernakulam" },
    { title: "Vision Eye Care", subtitle: "Eye Care • Thrissur" },
  ]

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
            <Card key={ex.title} className="p-6 hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="h-36 w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Image</div>
                <div>
                  <h3 className="text-lg font-semibold">{ex.title}</h3>
                  <p className="text-sm text-muted-foreground">{ex.subtitle}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button size="sm">View Demo</Button>
                  <Button variant="outline" size="sm">Use Template</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
