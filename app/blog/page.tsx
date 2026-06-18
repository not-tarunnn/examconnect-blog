import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Post = {
  _id: string
  title: string
  slug?: {
    current: string
  }
  excerpt?: string
  publishedAt?: string
  category?: {
    title: string
  }
  mainImage?: any
  isLive?: boolean
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "category": categories[0]->{
        title
      },
      mainImage,
      isLive
    }`
  )
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-20 pt-40">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Blog</h1>

          <p className="mt-3 text-lg text-muted-foreground">
            Explore our latest articles and insights
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current}`}
                className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-2"
              >
                {post.mainImage && (
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2 items-center">
                    {post.isLive && (
                      <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        LIVE
                      </div>
                    )}
                    {post.category && (
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        {post.category.title}
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="mt-3 line-clamp-3 text-muted-foreground">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">
              No posts found yet.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
