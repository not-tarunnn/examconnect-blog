'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="footer-content mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="footer-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="text-lg font-bold text-black dark:text-white">
              ExamConnect
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your guide to JEE & NEET excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="font-semibold text-black dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-legal">
            <h4 className="font-semibold text-black dark:text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="font-semibold text-black dark:text-white">
              Connect
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-gray-200 py-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} ExamConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
