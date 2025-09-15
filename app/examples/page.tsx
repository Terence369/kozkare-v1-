import ExamplesClient from "@/components/examples/examples-client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Examples — Kozkare",
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

        <ExamplesClient />
      </div>
    </main>
  )
}
