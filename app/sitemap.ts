import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(`
    *[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }
  `)

  const postUrls = posts.map((post: any) => ({
    url: `https://blog.examconnect.co.in/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://blog.examconnect.co.in',
      lastModified: new Date(),
      priority: 1,
    },

    ...postUrls,
  ]
}