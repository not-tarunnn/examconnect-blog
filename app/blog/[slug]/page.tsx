import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

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
        name
      },
      mainImage,
      body
    }`,
    { slug }
  )
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

  return (
    <article className="mx-auto max-w-4xl px-4 py-20">
      {post.category && (
        <div className="mb-6 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
          {post.category.title}
        </div>
      )}

      <h1 className="text-5xl font-black leading-tight">
        {post.title}
      </h1>

      {post.excerpt && (
        <p className="mt-6 text-xl text-zinc-400">
          {post.excerpt}
        </p>
      )}

      <div className="prose prose-invert mt-12 max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}