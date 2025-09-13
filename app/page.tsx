"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  Users,
  TrendingUp,
  User,
  DollarSign,
  MapPin,
  Clock,
  HeartHandshake,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Zap,
  Award,
  Target,
  Lightbulb,
  Crown,
  Sparkles,
} from "lucide-react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Patient calls dropped 40% after our new website went live. They get all their answers online first!",
      author: "Dr. Priya",
      clinic: "Dental Clinic, Kochi",
      rating: 5,
    },
    {
      quote: "Kozkare's transparent pricing format helped us attract serious patients, not just curious browsers.",
      author: "Dr. Rajesh",
      clinic: "Skin Clinic, Ernakulam",
      rating: 5,
    },
    {
      quote:
        "Our appointment bookings increased by 60% within the first month. The website truly converts visitors into patients.",
      author: "Dr. Meera",
      clinic: "Eye Care Center, Thrissur",
      rating: 5,
    },
  ]

  const dentalServices = [
    {
      name: "Teeth Whitening",
      price: "From ₹3,500",
      duration: "60 minutes",
      aftercare: "Avoid staining foods 48hrs",
      description: "Professional whitening for a brighter smile",
    },
    {
      name: "Braces & Aligners",
      price: "Consultation ₹750",
      duration: "Multiple sessions",
      aftercare: "Regular follow-ups required",
      description: "Options: Metal, ceramic, invisible aligners",
    },
    {
      name: "Root Canal",
      price: "From ₹5,000",
      duration: "1-2 sessions",
      aftercare: "Pain-free process guaranteed",
      description: "Advanced endodontic treatment",
    },
    {
      name: "Dental Implants",
      price: "From ₹25,000",
      duration: "Multiple visits",
      aftercare: "Lifetime warranty available",
      description: "Permanent tooth replacement solution",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
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
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
                Examples
              </a>
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`space-y-8 ${isLoaded ? "animate-in slide-in-from-left-8 duration-700" : "opacity-0"}`}>
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/40">
                  Trusted by 200+ Medical Professionals
                </Badge>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
                  Websites that make patients <span className="text-primary">choose your clinic</span> with confidence
                </h1>

                <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                  Professional, trustworthy websites that answer patient questions upfront — reducing repetitive calls
                  while attracting qualified enquiries to grow your practice.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground animate-magnetic group"
                  asChild
                >
                  <a href="#contact" aria-label="Get Your Clinic Website">
                    Get Your Clinic Website
                    <Calendar className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  asChild
                >
                  <a href="/examples" aria-label="View Clinic Examples">View Clinic Examples</a>
                </Button>
              </div>

              {/* Trust Strip */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 ${isLoaded ? "animate-in slide-in-from-bottom-4 duration-700 delay-300" : "opacity-0"}`}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium"> Doctor-approved websites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">"From ₹" transparent pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Mobile-first, secure & fast</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className={`relative ${isLoaded ? "animate-in slide-in-from-right-8 duration-700 delay-150" : "opacity-0"}`}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern clinic interior with professional atmosphere"
                  className="rounded-2xl shadow-2xl animate-breathe"
                />

                {/* Floating Stats Cards */}
                <Card
                  className={`absolute -top-4 -left-4 p-4 bg-card/95 backdrop-blur-sm border shadow-lg ${isLoaded ? "animate-in slide-in-from-top-4 duration-700 delay-500" : "opacity-0"}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">85%</div>
                      <div className="text-xs text-muted-foreground">Fewer repetitive calls</div>
                    </div>
                  </div>
                </Card>

                <Card
                  className={`absolute -bottom-4 -right-4 p-4 bg-card/95 backdrop-blur-sm border shadow-lg ${isLoaded ? "animate-in slide-in-from-bottom-4 duration-700 delay-700" : "opacity-0"}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">24/7</div>
                      <div className="text-xs text-muted-foreground">{"Support"}</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-breathe"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-breathe"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
              Does your current website answer these <span className="text-primary">5 critical patient questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Every patient has these concerns before choosing a clinic. Your website should address them clearly to
              build trust and reduce repetitive calls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Who will treat me? */}
            <Card className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary animate-breathe">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-balance">"Who will treat me?"</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Patients want to know about their doctor's qualifications and experience before booking.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Doctor profiles with qualifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Professional clinic photos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Years of experience highlighted</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 2: What services & pricing? */}
            <Card
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-accent animate-breathe"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <DollarSign className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-balance">"What services & pricing?"</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Transparent pricing builds trust and attracts serious patients, not just browsers.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Treatment lists with "from ₹" pricing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Package deals clearly displayed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Insurance acceptance information</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 3: When & where can I visit? */}
            <Card
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-secondary animate-breathe"
              style={{ animationDelay: "1s" }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-balance">"When & where can I visit?"</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Clear timings and location details help patients plan their visit confidently.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>Operating hours & availability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>Location with parking details</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>Emergency contact information</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 4: What should I expect? */}
            <Card
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary animate-breathe"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-balance">"What should I expect?"</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Patients feel more comfortable when they know the process and what to prepare.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Simple preparation steps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Treatment duration estimates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Aftercare instructions</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Card 5: How do I contact you? */}
            <Card
              className="group p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-accent animate-breathe md:col-span-2 lg:col-span-1"
              style={{ animationDelay: "2s" }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <HeartHandshake className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-balance">"How do I contact you?"</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Make it effortless for patients to reach you when they're ready to book.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>One-click Call/WhatsApp buttons</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Quick appointment booking form</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>Multiple contact options</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              If your website doesn't clearly answer these questions, you're losing potential patients every day.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 animate-magnetic">
              Get a Website That Converts
              <TrendingUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Showcase Section */}
      <section id="services" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
              Complete <span className="text-primary">patient journey</span> for every procedure
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Every treatment page includes eligibility criteria, detailed process explanation, transparent pricing, and
              comprehensive aftercare instructions.
            </p>
          </div>

          {/* Example: Popular Dental Treatments */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 mb-4">
                Example: Popular Dental Treatments
              </Badge>
              <h3 className="text-2xl font-bold mb-4">How we present your services</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each procedure page is designed to answer patient questions upfront, reducing consultation time for
                basic inquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {dentalServices.map((service, index) => (
                <Card
                  key={service.name}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-breathe group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {service.price}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Duration
                        </div>
                        <div className="text-sm font-medium">{service.duration}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Post-care
                        </div>
                        <div className="text-sm font-medium">{service.aftercare}</div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Learn More & Book
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground italic">
                Each procedure page includes: Eligibility • Process • Aftercare • Transparent pricing
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">
                Why successful clinics <span className="text-primary">partner with Kozkare</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We don't just build websites. We create patient acquisition systems that work 24/7 for your practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Trust Building */}
              <Card className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-breathe">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4">Trust Building</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Doctor-approved content builds patient confidence before they even call your clinic.
                </p>
              </Card>

              {/* Call Efficiency */}
              <Card
                className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-breathe"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4">Call Efficiency</h4>
                <p className="text-muted-foreground leading-relaxed">
                  60% fewer "What are your charges?" calls. Patients come prepared and informed.
                </p>
              </Card>

              {/* Quality Leads */}
              <Card
                className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-breathe"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold mb-4">Quality Leads</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Attract patients who understand your services and pricing. Higher conversion rates.
                </p>
              </Card>

              {/* Minimal Effort */}
              <Card
                className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-breathe"
                style={{ animationDelay: "0.9s" }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4">Minimal Effort</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We create content, you simply review and approve. Focus on patients, not website management.
                </p>
              </Card>

              {/* Full Ownership */}
              <Card
                className="p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-breathe md:col-span-2 lg:col-span-1"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold mb-4">Full Ownership</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Your domain, your content, easy self-updates. No vendor lock-in or monthly dependencies.
                </p>
              </Card>
            </div>
          </div>

          {/* Process Preview */}
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Our proven process</h3>
              <p className="text-muted-foreground">
                From consultation to launch, we handle everything while keeping you in control.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold">Discovery Call</h4>
                <p className="text-sm text-muted-foreground">Understand your practice, patients, and goals</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto text-accent-foreground font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold">Content Creation</h4>
                <p className="text-sm text-muted-foreground">We write all content based on your expertise</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto text-secondary-foreground font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold">Design & Build</h4>
                <p className="text-sm text-muted-foreground">Professional design with your branding</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-lg">
                  4
                </div>
                <h4 className="font-semibold">Launch & Support</h4>
                <p className="text-sm text-muted-foreground">Go live with ongoing content updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 lg:py-32 bg-muted/30 hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
              Trusted by <span className="text-primary">leading clinics</span> across Kerala
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              See how medical professionals are transforming their practice with websites that actually convert visitors
              into patients.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="mb-20">
            <Card className="max-w-4xl mx-auto p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-6 left-6 text-primary/20">
                <Quote className="h-12 w-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl font-medium text-center text-balance mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="text-center">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-muted-foreground">{testimonials[currentTestimonial].clinic}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button variant="ghost" size="sm" onClick={prevTestimonial} className="hover:bg-primary/10">
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="ghost" size="sm" onClick={nextTestimonial} className="hover:bg-primary/10">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center group hover:shadow-lg transition-all duration-300 animate-breathe">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-lg font-semibold">{"Support"}</div>
                <div className="text-muted-foreground">Across Kerala and beyond</div>
              </div>
            </Card>

            <Card
              className="p-8 text-center group hover:shadow-lg transition-all duration-300 animate-breathe"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">85%</div>
                <div className="text-lg font-semibold">Reduction in Repetitive Calls</div>
                <div className="text-muted-foreground">Patients find answers online</div>
              </div>
            </Card>

            <Card
              className="p-8 text-center group hover:shadow-lg transition-all duration-300 animate-breathe"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <HeartHandshake className="h-8 w-8 text-secondary" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">60%</div>
                <div className="text-lg font-semibold">Increase in Qualified Leads</div>
                <div className="text-muted-foreground">Better patient conversion</div>
              </div>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">Trusted by medical professionals across specialties</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Dental Clinics
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Dermatology
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Eye Care
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Physiotherapy
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Ayurveda
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Diagnostics
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="bg-secondary text-secondary-foreground py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Ready to transform your practice?</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-secondary-foreground hover:bg-secondary-foreground/10">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button variant="ghost" size="sm" className="text-secondary-foreground hover:bg-secondary-foreground/10">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
              Investment plans designed for <span className="text-primary">clinic growth</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Choose the perfect package for your practice. Both plans include everything you need to start attracting
              qualified patients immediately.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Premium Clinic Website */}
            <Card className="relative p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 animate-breathe">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  <Crown className="h-4 w-4 mr-1" />
                  Most Popular
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Premium Clinic Website</h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-4xl font-bold text-primary">₹27,999</span>
                    <span className="text-muted-foreground">setup</span>
                  </div>
                  <p className="text-muted-foreground">Perfect for: Dental, Dermatology, IVF, Eye Care</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Detailed procedure pages with transparent pricing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Patient preparation & aftercare guides</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Photo galleries & doctor profiles</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mobile-optimized appointment booking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">6 months content updates included</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced SEO optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Patient testimonial system</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">WhatsApp & call integration</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 animate-magnetic group">
                  Start Premium Website
                  <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Setup within 7 days • Full ownership • No monthly fees
                  </p>
                </div>
              </div>
            </Card>

            {/* Essential Clinic Website */}
            <Card
              className="p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-breathe"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Essential Clinic Website</h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-4xl font-bold text-accent">₹13,999</span>
                    <span className="text-muted-foreground">setup</span>
                  </div>
                  <p className="text-muted-foreground">Perfect for: Physiotherapy, Ayurveda, Diagnostics</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Service packages presentation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Seasonal promotions capability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Partner/referral information</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Contact optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">3 months content updates</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic SEO setup</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mobile-responsive design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Contact form integration</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground animate-magnetic group bg-transparent"
                >
                  Start Essential Website
                  <Calendar className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Setup within 10 days • Full ownership • No monthly fees
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Money-back Guarantee */}
          

          {/* Comparison Table */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">What's included in each plan?</h3>

            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 font-semibold">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-accent">Essential</th>
                    <th className="text-center py-4 px-6 font-semibold text-primary">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-4 px-6">Professional Design</td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Mobile Responsive</td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Contact Integration</td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Content Updates</td>
                    <td className="text-center py-4 px-6 text-sm text-muted-foreground">3 months</td>
                    <td className="text-center py-4 px-6 text-sm text-primary font-semibold">6 months</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Detailed Procedure Pages</td>
                    <td className="text-center py-4 px-6 text-muted-foreground">—</td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Photo Galleries</td>
                    <td className="text-center py-4 px-6 text-muted-foreground">—</td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Advanced SEO</td>
                    <td className="text-center py-4 px-6 text-muted-foreground">Basic</td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Patient Testimonials</td>
                    <td className="text-center py-4 px-6 text-muted-foreground">—</td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <h4 className="font-semibold mb-3">Do I own the website?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, completely. Your domain, your content, your website. No vendor lock-in or monthly dependencies.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3">How long does setup take?</h4>
                <p className="text-sm text-muted-foreground">
                  Premium: 7 days, Essential: 10 days. We handle everything while keeping you informed at each step.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3">Can I update content myself?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we provide easy-to-use tools. Plus, content updates are included for 3-6 months depending on your
                  plan.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3">What if I need changes later?</h4>
                <p className="text-sm text-muted-foreground">
                  Minor updates are included in your content update period. Major changes can be discussed separately.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 hidden">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
              Trusted by <span className="text-primary">leading clinics</span> across Kerala
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              See how medical professionals are transforming their practice with websites that actually convert visitors
              into patients.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="mb-20 hidden">
            <Card className="max-w-4xl mx-auto p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-6 left-6 text-primary/20">
                <Quote className="h-12 w-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl font-medium text-center text-balance mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="text-center">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-muted-foreground">{testimonials[currentTestimonial].clinic}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button variant="ghost" size="sm" onClick={prevTestimonial} className="hover:bg-primary/10">
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="ghost" size="sm" onClick={nextTestimonial} className="hover:bg-primary/10">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center group hover:shadow-lg transition-all duration-300 animate-breathe">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">{"24/7"}</div>
                <div className="text-lg font-semibold">Support</div>
                <div className="text-muted-foreground">Across Kerala and beyond</div>
              </div>
            </Card>

            <Card
              className="p-8 text-center group hover:shadow-lg transition-all duration-300 animate-breathe"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">85%</div>
                <div className="text-lg font-semibold">Reduction in Repetitive Calls</div>
                <div className="text-muted-foreground">Patients find answers online</div>
              </div>
            </Card>

            <Card
              className="p-8 text-center group hover:shadow-lg transition-all duration-300 animate-breathe"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <HeartHandshake className="h-8 w-8 text-secondary" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">60%</div>
                <div className="text-lg font-semibold">Increase in Qualified Leads</div>
                <div className="text-muted-foreground">Better patient conversion</div>
              </div>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">Trusted by medical professionals across specialties</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Dental Clinics
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Dermatology
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Eye Care
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Physiotherapy
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Ayurveda
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Diagnostics
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="bg-secondary text-secondary-foreground py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Ready to transform your practice?</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-secondary-foreground hover:bg-secondary-foreground/10">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button variant="ghost" size="sm" className="text-secondary-foreground hover:bg-secondary-foreground/10">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 animate-breathe">
              <Clock className="h-4 w-4 mr-2" />
              Limited Time Offer
            </Badge>

            <h2 className="text-3xl lg:text-5xl font-bold text-balance leading-tight">
              Ready to <span className="text-primary">transform patient experience</span> and grow your practice?
            </h2>

            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Join successful clinics that have reduced repetitive calls by 85% while attracting more qualified patients.
            </p>

            {/* Urgency Element */}
            <Card
              className="max-w-2xl mx-auto p-6 bg-accent/5 border-accent/20 animate-breathe"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="font-semibold text-accent">Priority Setup Available</span>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <p className="text-lg font-medium mb-2">Next 10 clinics get priority setup </p>
              <p className="text-sm text-muted-foreground">Don't wait - secure your spot for faster launch</p>
            </Card>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground animate-magnetic group text-lg px-8 py-4"
              >
                Start Your Website Project
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
              >
                Schedule Discovery Call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Contact Options */}
            <div className="pt-8">
              <p className="text-muted-foreground mb-6">Prefer to talk first? Reach out directly:</p>

              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-breathe">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <p className="text-sm text-muted-foreground mb-3">Instant response</p>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                        +91-62820-54521
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-breathe"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-1">Call</h4>
                      <p className="text-sm text-muted-foreground mb-3">Direct consultation</p>
                      <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">
                        +91-62820-54521
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-breathe"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground mb-3">Detailed inquiry</p>
                      <Button variant="ghost" size="sm" className="text-secondary hover:bg-secondary/10">
                      info@kozker.com
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="pt-8 border-t border-border/50">
              
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-breathe"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-breathe"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold">Kozkare</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Premium healthcare websites that convert visitors into patients. Trusted by medical professionals across Kerala.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Premium Websites
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Essential Websites
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Content Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    SEO Optimization
                  </a>
                </li>
              </ul>
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h4 className="font-semibold">Specialties</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Dental Clinics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Dermatology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Eye Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary-foreground transition-colors">
                    Physiotherapy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>+91-62820-54521</li>
                <li>info@kozkare.com</li>
                <li>Kerala, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">© 2024 Kozkare. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
