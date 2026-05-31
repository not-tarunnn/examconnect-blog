import { MetadataRoute } from 'next'
import { sitemapClient } from '@/sanity/lib/sitemapClient'

export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sitemapClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }`
  )

  return [
    {
      url: 'https://blog.examconnect.co.in',
      lastModified: new Date(),
      priority: 1,
    },
    ...posts.map((post: { slug: string; _updatedAt: string }) => ({
      url: `https://blog.examconnect.co.in/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    })),
  ]
}