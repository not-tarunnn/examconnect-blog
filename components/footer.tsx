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
    <footer className="bg-black dark:bg-gray-900 text-white rounded-t-[10%] border-t border-border py-16 mt-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* 3 Column Layout */}
        <div className="grid gap-8 md:gap-12 md:grid-cols-3 mb-12">
          {/* Column 1: ExamConnect & Social Links */}
          <div>
            <h2 className="text-2xl font-bold text-white">ExamConnect</h2>
            <p className="mt-2 text-gray-300">
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
                  className={`rounded-full border border-gray-700 bg-gray-800 p-3 transition-all duration-300 hover:bg-gray-700 hover:border-gray-600`}
                >
                  <Icon className="h-5 w-5 text-gray-400 hover:text-gray-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links & Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:bg-blue-900/40 px-2 py-1 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MdMail className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <a href="mailto:helpexamconnect@gmail.com" className="text-gray-300 hover:text-white hover:bg-blue-900/40 px-2 py-1 rounded transition-colors text-sm inline-block">
                    helpexamconnect@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
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
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div>© 2026 ExamConnect. All rights reserved.</div>
          <div className="text-xs">Made with ❤️ for aspirants</div>
        </div>
      </div>
    </footer>
  )
}
