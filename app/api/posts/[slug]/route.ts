import { client } from "@/sanity/lib/client";

const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "category": category->{ title },
    "author": author->{ name },
    mainImage,
    body
  }
`;

interface RouteParams {
  params: {
    slug: string;
  };
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const post = await client.fetch(postQuery, { slug: params.slug });

    if (!post) {
      return Response.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return Response.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return Response.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
