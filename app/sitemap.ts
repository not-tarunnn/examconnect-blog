import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(`
    *[_type == "post"]{
      slug,
      _updatedAt
    }
  `);

  const postUrls = posts.map((post: any) => ({
    url: `https://blog.examconnect.co.in/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://blog.examconnect.co.in",
      lastModified: new Date(),
      priority: 1,
    },

    ...postUrls,
  ];
}