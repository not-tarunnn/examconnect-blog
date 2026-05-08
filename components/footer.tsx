'use client'

import Link from 'next/link'
import { MdMail } from 'react-icons/md'
import { FaYoutube, FaXTwitter, FaInstagram, FaFacebook, FaLinkedin, FaDiscord, FaReddit } from 'react-icons/fa6'
import Newsletter from '@/components/newsletter'

export default function Footer() {
 const socialLinks = [
  {
    icon: FaInstagram,
    href: 'https://instagram.com/examconnect_',
    label: 'Instagram',
    color: 'hover:text-pink-500',
  },
  {
    icon: FaYoutube,
    href: 'https://youtube.com/@examconnect',
    label: 'YouTube',
    color: 'hover:text-red-500',
  },
  {
    icon: FaDiscord,
    href: 'https://discord.gg/KS4vJDVf',
    label: 'Discord',
    color: 'hover:text-indigo-500',
  },
  {
    icon: FaReddit,
    href: 'https://www.reddit.com/r/ExamConnect/',
    label: 'Reddit',
    color: 'hover:text-orange-500',
  },
  {
    icon: FaXTwitter,
    href: 'https://x.com/examconnect_',
    label: 'Twitter',
    color: 'hover:text-blue-400',
  },
  {
    icon: FaFacebook,
    href: 'https://facebook.com/TheExamConnect',
    label: 'Facebook',
    color: 'hover:text-blue-600',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/company/examconnect',
    label: 'LinkedIn',
    color: 'hover:text-blue-600',
  },
]

  const footerLinks = [
    { label: 'About', href: 'https://www.examconnect.co.in/about' },
    { label: 'Privacy Policy', href: 'https://www.examconnect.co.in/privacy-policy' },
    { label: 'Terms & Conditions', href: 'https://www.examconnect.co.in/terms-and-conditions' },
  ]

  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* 3 Column Layout */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-3 mb-12">
          {/* Column 1: ExamConnect & Social Links */}
          <div>
            <h2 className="text-2xl font-bold">ExamConnect</h2>
            <p className="mt-2 text-muted-foreground">
              Helping aspirants crack India's toughest exams with smart preparation tools.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`rounded-full border border-border bg-muted p-3 transition-all duration-300 hover:bg-primary/10 hover:border-primary ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links & Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MdMail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <a href="mailto:helpexamconnect@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm">
                    helpexamconnect@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                JEE • NEET • UPSC Preparation Platform
              </p>
            </div>
          </div>

          {/* Column 3: Newsletter CTA */}
          <div>
            <Newsletter />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 ExamConnect. All rights reserved.</div>
          <div className="text-xs">Made with ❤️ for aspirants</div>
        </div>
      </div>
    </footer>
  )
}
