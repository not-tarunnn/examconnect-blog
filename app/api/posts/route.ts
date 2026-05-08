import { client } from "@/sanity/lib/client";

const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "category": category->{ title },
    "author": author->{ name },
    mainImage
  }
`;

export async function GET() {
  try {
    const posts = await client.fetch(postsQuery);
    return Response.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return Response.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
