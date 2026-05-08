import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          India's Modern Student Platform
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Crack JEE & NEET with
          <span className="gradient bg-clip-text text-transparent">
            {' '}smart preparation
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Notes, PYQs, exam updates, strategy blogs, revision plans and daily practice for aspirants.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg">Explore Blogs</Button>
          <Button variant="outline" size="lg">
            Start Learning
          </Button>
        </div>
      </div>
    </section>
  )
}