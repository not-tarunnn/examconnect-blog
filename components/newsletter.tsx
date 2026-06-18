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
    <div className="rounded-3xl border border-gray-700 bg-gray-800/40 p-8 md:p-10 backdrop-blur-sm hover:border-gray-600 transition-all duration-300">
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-full bg-blue-500/20 p-4 shrink-0">
          <MdMail className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white">Stay Ahead in Your Exams</h3>
          <p className="mt-1 text-sm md:text-base text-gray-300">Subscribe to get daily tips, study strategies, and exam updates delivered to your inbox.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-gray-600 bg-gray-700/50 px-5 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300"
          required
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3.5 px-5 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 active:scale-95"
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

      <p className="mt-4 text-xs text-gray-400 text-center">
        No spam. Unsubscribe anytime. Join 10,000+ aspirants.
      </p>
    </div>
  )
}
