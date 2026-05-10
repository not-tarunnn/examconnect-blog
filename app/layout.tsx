import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ThemeProvider from '@/components/theme-provider'

import type { Metadata } from 'next'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from "next/script";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

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
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >

         <head>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RZMB0EDDN6"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());
            gtag('config', 'G-RZMB0EDDN6');
          `}
        </Script>

      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}