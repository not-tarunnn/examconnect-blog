import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Metadata } from 'next'
import { Calendar, User, ArrowRight } from 'lucide-react'
import AdBanner from '@/components/ad-banner'

export const metadata: Metadata = {
  title: 'Blog | ExamConnect - JEE, NEET & UPSC Preparation Guide',
  description: 'Read expert articles on JEE, NEET, and UPSC preparation. Get study tips, exam strategies, PYQ solutions, and daily practice guides from top educators.',
  keywords: 'JEE blog, NEET blog, UPSC blog, exam preparation articles, study tips, exam strategies',
  openGraph: {
    title: 'Blog | ExamConnect',
    description: 'Expert articles on JEE, NEET & UPSC preparation',
    type: 'website',
  },
}

async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      category,
      _createdAt,
      author->{name},
      readingTime
    }`
  )
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getPosts()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ExamConnect Blog',
    description: 'Expert articles on JEE, NEET & UPSC preparation',
    url: 'https://examconnect.in/blog',
    blogPost: posts.map((post: any) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: urlFor(post.coverImage).url(),
      datePublished: post._createdAt,
      author: {
        '@type': 'Person',
        name: post.author?.name || 'ExamConnect',
      },
      keywords: `${post.category}, exam preparation, ${post.title}`,
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Exam Preparation <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert articles, study strategies, exam tips, and daily practice guides for JEE, NEET, and UPSC aspirants.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Filter/Category Info */}
        <div className="mb-12">
          <p className="text-muted-foreground">
            Total Articles: <span className="font-semibold text-foreground">{posts.length}</span>
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {posts.map((post: any) => (
            <article
              key={post._id}
              className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Image Container */}
              <Link href={`/blog/${post.slug.current}`} className="relative overflow-hidden h-56 w-full block">
                <Image
                  src={urlFor(post.coverImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-4 inline-block">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug.current}`}>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {/* Description */}
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post._createdAt}>
                      {formatDate(post._createdAt)}
                    </time>
                  </div>
                  {post.author && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author.name}</span>
                    </div>
                  )}
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Ad Banner */}
        <AdBanner />

        {/* SEO Content Section */}
        <section className="mt-16 pt-16 border-t border-border">
          <h2 className="text-3xl font-bold mb-6">Why Read Our Blog?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-bold mb-2 text-primary">Expert Insights</h3>
              <p className="text-sm text-muted-foreground">
                Learn from experienced educators and top exam scorers with proven strategies.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-bold mb-2 text-primary">Exam-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Get specific tips and strategies for JEE, NEET, and UPSC exams.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-bold mb-2 text-primary">Updated Regularly</h3>
              <p className="text-sm text-muted-foreground">
                Fresh content weekly with latest exam trends and preparation methods.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
