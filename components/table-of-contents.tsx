'use client'

import { useEffect, useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const content = document.querySelector('.article-content')
    if (!content) return

    const headingElements = content.querySelectorAll('h2, h3')
    const headingList = Array.from(headingElements)
      .map((element, index) => {
        const id = element.id || `heading-${index}`
        element.id = id
        return {
          id,
          text: element.textContent || '',
          level: parseInt(element.tagName[1]),
        }
      })

    setHeadings(headingList)
  }, [])

  if (headings.length === 0) return null

  return (
    <div className="my-8 rounded-lg border border-border bg-card p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between"
      >
        <h3 className="font-semibold text-foreground">Table of Contents</h3>
        <MdExpandMore
          className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <ul className="mt-4 space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: `${(heading.level - 2) * 1.5}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className="text-sm text-primary hover:underline"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
