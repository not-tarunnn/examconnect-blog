'use client'

import { useEffect, useState } from 'react'

export default function AnimatedGradientText() {
  const [hue, setHue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 2) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(${hue}, 100%, 50%), hsl(${(hue + 120) % 360}, 100%, 50%), hsl(${(hue + 240) % 360}, 100%, 50%))`,
      }}
    >
      EXAMCONNECT
    </span>
  )
}
