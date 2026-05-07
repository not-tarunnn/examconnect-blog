'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-wrapper sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <nav className="header-nav mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="header-logo text-2xl font-bold text-black dark:text-white">
          ExamConnect
        </Link>

        {/* Desktop Navigation */}
        <div className="header-nav-desktop hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="header-menu-btn md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="header-mobile-nav border-t border-gray-200 dark:border-gray-800 md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
