'use client'

import Link from 'next/link'
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="https://www.examconnect.co.in/" className="flex items-center">
            <span className="text-2xl font-black tracking-wider text-foreground hover:text-primary transition-colors">
              ExamConnect
            </span>
          </Link>

          <nav className="hidden gap-8 md:flex">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
           
          </nav>

          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-md" />

            <Sheet>
              <SheetTrigger className="md:hidden">
                <Menu />
              </SheetTrigger>

              <SheetContent side="right" className="bg-background text-foreground">
                <div className="mt-10 flex flex-col gap-6 text-lg">
                  <Link href="/">Home</Link>
                  <Link href="/blog">Blog</Link>
                 
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="https://www.examconnect.co.in/" className="flex items-center">
          <span className="text-2xl font-black tracking-wider text-foreground hover:text-primary transition-colors">
            ExamConnect
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-md border border-border bg-muted p-2 hover:bg-muted/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>

            <SheetContent side="right" className="bg-background text-foreground">
              <div className="mt-10 flex flex-col gap-6 text-lg">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
               
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
