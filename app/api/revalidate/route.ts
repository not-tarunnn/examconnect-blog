import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    revalidatePath('/')

    revalidatePath('/blog')

    revalidatePath('/sitemap.xml')

    if (body.slug) {
      revalidatePath(`/blog/${body.slug}`)
    }

    return NextResponse.json({
      revalidated: true,
    })

  } catch (err) {
    return NextResponse.json({
      error: 'Error revalidating',
    })
  }
}