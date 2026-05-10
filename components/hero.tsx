import { Button } from '@/components/ui/button'
import AnimatedGradientText from '@/components/animated-gradient-text'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
          India's Modern Student Platform
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Crack JEE & NEET with
          <span className="block">
            {' '}<AnimatedGradientText />
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground backdrop-blur-sm opacity-90">
          Notes, PYQs, exam updates, strategy blogs, revision plans and daily practice for aspirants.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 backdrop-blur-md opacity-85">
          <Button size="lg">Explore Blogs</Button>
          <Button variant="outline" size="lg">
            Start Learning
          </Button>
        </div>
      </div>
    </section>
  )
}
