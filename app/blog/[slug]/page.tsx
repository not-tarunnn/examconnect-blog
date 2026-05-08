import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  )
}

export default async function BlogPost({ params }: any) {
  const post = await getPost(params.slug)

  return (
    <article className="mx-auto max-w-4xl px-4 py-20">
      <div className="mb-6 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
        {post.category}
      </div>

      <h1 className="text-5xl font-black leading-tight">
        {post.title}
      </h1>

      <p className="mt-6 text-xl text-zinc-400">
        {post.excerpt}
      </p>

      <div className="prose prose-invert mt-12 max-w-none">
        <PortableText value={post.content} />
      </div>
    </article>
  )
}