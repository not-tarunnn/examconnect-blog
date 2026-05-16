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

  other: {
    'google-adsense-account': 'ca-pub-6676209672905473',
  },
};

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
          <Footer />
        </ThemeProvider>

        {/* Google Analytics */}
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

        {/* AdSense script (IMPORTANT: only once, here is correct) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6676209672905473"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}