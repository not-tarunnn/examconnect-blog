'use client'

import { MdContentCopy } from 'react-icons/md'
import { FaYoutube, FaXTwitter, FaInstagram, FaFacebook, FaLinkedin, FaDiscord, FaReddit } from 'react-icons/fa6'
import { useState } from 'react'

interface SocialShareProps {
  title: string
  url: string
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareLinks = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/examconnect_',
      color: 'hover:text-pink-500',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      href: 'https://youtube.com/@examconnect',
      color: 'hover:text-red-500',
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      href: 'https://discord.gg/KS4vJDVf',
      color: 'hover:text-indigo-500',
    },
    {
      name: 'Reddit',
      icon: FaReddit,
      href: 'https://www.reddit.com/r/ExamConnect/',
      color: 'hover:text-orange-500',
    },
    {
      name: 'X/Twitter',
      icon: FaXTwitter,
      href: 'https://x.com/examconnect_',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com/TheExamConnect',
      color: 'hover:text-blue-600',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/examconnect',
      color: 'hover:text-blue-600',
    },
  ]

  return (
    <div className="rounded-lg border border-border bg-card p-6 md:sticky md:top-24">
      <h3 className="mb-4 font-semibold text-foreground text-base">Follow Us</h3>
      <div className="space-y-2">
        {shareLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`flex items-center gap-3 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-primary/10 hover:border-primary ${link.color}`}
            >
              <Icon className="h-5 w-5" />
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          )
        })}
        <button
          onClick={handleCopy}
          className={`flex w-full items-center gap-3 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition ${copied ? 'bg-primary/10 text-primary border-primary' : 'hover:bg-muted hover:border-border'}`}
        >
          <MdContentCopy className="h-5 w-5" />
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
          <span className="sm:hidden">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </div>
  )
}
