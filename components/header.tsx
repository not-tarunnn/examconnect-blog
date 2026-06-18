'use client'

import Link from 'next/link'
import { Menu, Moon, Sun, BookOpen, Zap, Users } from 'lucide-react'
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
        <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
          <Link href="https://www.examconnect.co.in/" className="flex items-center">
            <span className="text-2xl font-black tracking-wider text-foreground hover:text-primary transition-colors">
              ExamConnect
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="h-5 w-20" />
            <div className="h-5 w-20" />
            <div className="h-5 w-20" />
            <div className="h-5 w-20" />
          </div>

          <div className="flex items-center gap-3">
            <button
              className="rounded-full w-10 h-10 font-medium cursor-pointer transition-colors duration-300 border-0 bg-muted hover:bg-muted/80 hidden md:inline-flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <div className="h-5 w-5" />
            </button>

            <button className="p-2 rounded-md border border-border bg-muted hover:bg-muted/80 transition-colors md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <Link href="https://www.examconnect.co.in/" className="flex items-center">
          <span className="text-2xl font-black tracking-wider text-foreground hover:text-primary transition-colors">
            ExamConnect
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Resources
          </Link>
          <Link
            href="/blog"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Blogs
          </Link>
          <Link
            href="https://examconnect.co.in/about"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Courses
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full w-10 h-10 font-medium cursor-pointer transition-colors duration-300 border-0 bg-muted hover:bg-muted/80 hidden md:inline-flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <Sheet>
            <SheetTrigger className="p-2 rounded-md border border-border bg-muted hover:bg-muted/80 transition-colors md:hidden">
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="bg-background text-foreground w-full sm:w-96">
              <div className="mt-8 flex flex-col gap-6">
                <div className="border-b border-border pb-4">
                  <Link href="/" className="block text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </div>

                <div className="border-b border-border pb-4">
                  <Link href="/" className="block text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    Resources
                  </Link>
                </div>

                <div className="border-b border-border pb-4">
                  <Link href="/blog" className="block text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    Blogs
                  </Link>
                </div>

                <div className="border-b border-border pb-4">
                  <Link href="https://www.examconnect.co.in/about" className="block text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </div>

                <div className="border-b border-border pb-4">
                  <Link href="/" className="block text-lg font-semibold text-foreground hover:text-primary transition-colors">
                    Courses
                  </Link>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-5 w-5 text-blue-500" />
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Exams</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-7">
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">JEE Main</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">JEE Advanced</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">NEET UG</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">CBSE Class 10</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">CBSE Class 12</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">CUET</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Olympiads</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">State Entrance Exams</Link>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-green-500" />
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Resources</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-7">
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">JEE Updates</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">NEET Updates</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">CBSE Updates</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Result Announcements</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Admit Card Releases</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Counselling Updates</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Previous Year Papers</Link>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-5 w-5 text-amber-500" />
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">College & Career</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-7">
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">IITs</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">NITs</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">AIIMS</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Engineering Colleges</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Medical Colleges</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Cutoffs</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Career Options After 12th</Link>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-5 w-5 text-purple-500" />
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Tools</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-7">
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Study Planner</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Pomodoro Timer</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Habit Tracker</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Sleep Tracker</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">AI Tutor</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Task Manager</Link>
                      <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors py-1">Study Analytics</Link>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 space-y-3">
                    <Link href="/" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
