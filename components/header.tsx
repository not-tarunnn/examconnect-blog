'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="gradient bg-clip-text text-transparent">
            ExamConnect
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/studio">Studio</Link>
        </nav>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>

          <SheetContent side="right" className="bg-black text-white">
            <div className="mt-10 flex flex-col gap-6 text-lg">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/studio">Studio</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}