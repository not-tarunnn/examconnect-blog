import { client } from "@/sanity/lib/client"
import { NextRequest } from "next/server"

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
`

type Context = {
  params: Promise<{ slug: string }>
}

export async function GET(
  _request: NextRequest,
  context: Context
) {
  const { slug } = await context.params

  try {
    const post = await client.fetch(postQuery, { slug })

    if (!post) {
      return Response.json(
        { error: "Post not found" },
        { status: 404 }
      )
    }

    return Response.json(post)
  } catch (error) {
    console.error("Error fetching post:", error)

    return Response.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    )
  }
}