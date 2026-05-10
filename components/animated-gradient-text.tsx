'use client'

import { useEffect, useState } from 'react'

export default function AnimatedGradientText() {
  const [hue, setHue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 1) % 360)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(${hue}, 60%, 55%), hsl(${(hue + 120) % 360}, 55%, 60%), hsl(${(hue + 240) % 360}, 65%, 50%))`,
      }}
    >
      EXAMCONNECT
    </span>
  )
}
