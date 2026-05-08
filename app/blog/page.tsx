import Hero from '@/components/hero'
import AdBanner from '@/components/ad-banner'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(_createdAt desc)[0...6]`)
}

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={urlFor(post.coverImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  {post.category}
                </div>

                <h3 className="text-2xl font-bold">{post.title}</h3>

                <p className="mt-3 line-clamp-3 text-zinc-400">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <AdBanner />
      </section>
    </main>
  )
}