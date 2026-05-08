'use client'

import { useState } from 'react'
import { MdMail, MdArrowForward, MdCheckCircle } from 'react-icons/md'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-10 backdrop-blur-sm hover:border-border transition-all duration-300">
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-full bg-primary/15 p-4 flex-shrink-0">
          <MdMail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">Stay Ahead in Your Exams</h3>
          <p className="mt-1 text-sm md:text-base text-muted-foreground">Subscribe to get daily tips, study strategies, and exam updates delivered to your inbox.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-border bg-background px-5 py-3.5 text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
          required
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 px-5 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
        >
          {submitted ? (
            <>
              <MdCheckCircle className="h-5 w-5" />
              <span>Successfully Subscribed!</span>
            </>
          ) : (
            <>
              <span>Subscribe Now</span>
              <MdArrowForward className="h-5 w-5" />
            </>
          )}
        </button>
      </form>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        No spam. Unsubscribe anytime. Join 10,000+ aspirants.
      </p>
    </div>
  )
}
