import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import FloodOverlay from "@/components/flood-overlay"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Kozkare - Premium Healthcare Websites for Clinics",
  description:
    "Professional, trustworthy websites that answer patient questions upfront — reducing repetitive calls while attracting qualified enquiries to grow your practice.",
  generator: "Kozkare",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${manrope.variable} ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <FloodOverlay />
        {/* Analytics component removed */}
      </body>
    </html>
  )
}
