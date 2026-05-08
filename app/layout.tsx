import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ThemeProvider from '@/components/theme-provider'

import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'ExamConnect',
  description:
    'JEE, NEET & UPSC preparation platform with notes, exam updates, PYQs, strategy guides and daily practice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
