import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import SocialShare from '@/components/social-share'
import AdSidebar from '@/components/ad-sidebar'
import TableOfContents from '@/components/table-of-contents'
import { Metadata } from 'next'

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "category": categories[0]->{
        title
      },
      "author": author->{
        name,
        image,
        bio
      },
      mainImage,
      body
    }`,
    { slug }
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://examconnect.in'}/blog/${slug}`
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : ''

return {
  title: post.title,
  description: post.excerpt,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url: postUrl,
    images: imageUrl ? [imageUrl] : [],
  },
  alternates: {
    canonical: postUrl,
  },
}
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={500}
            className="w-full rounded-lg"
            priority={false}
          />
          {value.alt && (
            <figcaption className="mt-2 text-center text-sm text-zinc-500">
              {value.alt}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="mt-8 mb-4 text-4xl font-bold leading-tight text-foreground">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="mt-6 mb-3 text-2xl font-bold leading-snug text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-5 mb-2 text-xl font-semibold leading-snug text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mt-4 mb-2 text-lg font-semibold text-foreground">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="my-4 text-base leading-relaxed text-foreground/90">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 border-primary pl-4 italic text-foreground/70">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-foreground/90">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-base leading-relaxed">{children}</li>,
  },
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://examconnect.in'}/blog/${slug}`

  return (
    <>
      {/* JSON-LD Structured Data for Google Articles */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: post.title,
            description: post.excerpt,
            image: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
            datePublished: post.publishedAt || new Date().toISOString(),
            dateModified: post.publishedAt || new Date().toISOString(),
            author: {
              '@type': 'Person',
              name: post.author?.name || 'ExamConnect',
              image: post.author?.image ? urlFor(post.author.image).width(96).height(96).url() : undefined,
            },
            publisher: {
              '@type': 'Organization',
              name: 'ExamConnect',
              logo: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://examconnect.in'}/logo.png`,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': postUrl,
            },
          }),
        }}
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        {/* Featured Image - Full Width Top */}
        {post.mainImage && (
          <div className="mb-8 overflow-hidden rounded-lg">
  <Image
    src={urlFor(post.mainImage).url()}
    alt={post.mainImage.alt || post.title}
    width={1200}
    height={800}
    className="w-full h-auto object-contain"
    priority
  />
</div>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Main Content - Left Side */}
          <div className="md:col-span-2 lg:col-span-3">
            {/* Category Badge */}
            {post.category && (
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {post.category.title}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-3 text-4xl font-bold leading-tight md:text-5xl text-foreground">
              {post.title}
            </h1>

            {/* Excerpt / Subtitle */}
            {post.excerpt && (
              <p className="mb-6 text-lg text-foreground/70">
                {post.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="mb-8 border-b border-border pb-6">
              <div className="flex flex-wrap items-center gap-6">
                {post.author && (
                  <div className="flex items-center gap-3">
                    {post.author.image && (
                      <div className="h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={urlFor(post.author.image).width(96).height(96).url()}
                          alt={post.author.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-foreground">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-foreground/60">{publishedDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents />

            {/* Article Content */}
            <div className="article-content">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Social Share */}
            <SocialShare title={post.title} url={postUrl} />

            {/* Advertisement */}
            <AdSidebar />
          </div>
        </div>
      </article>
    </>
  )
}
