import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/'],
      },
    ],

    sitemap: [
      'https://blog.examconnect.co.in/sitemap.xml',
      'https://blog.examconnect.co.in/news-sitemap.xml',
    ],
  }
}