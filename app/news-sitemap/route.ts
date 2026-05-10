import { client } from "@/sanity/lib/client";

export const revalidate = 3600;

export async function GET() {
  const posts = await client.fetch(`
    *[_type == "post" && defined(publishedAt)]
    | order(publishedAt desc)[0...30]{
      title,
      publishedAt,
      "slug": slug.current
    }
  `);

  const siteUrl = "https://blog.examconnect.co.in";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">

${posts.map((post: any) => `
  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>

    <news:news>
      <news:publication>
        <news:name>ExamConnect Blog</news:name>
        <news:language>en</news:language>
      </news:publication>

      <news:publication_date>${post.publishedAt}</news:publication_date>

      <news:title><![CDATA[${post.title}]]></news:title>
    </news:news>

  </url>
`).join("")}

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}