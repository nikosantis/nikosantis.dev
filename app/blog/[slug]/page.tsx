import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRightIcon } from 'lucide-react'

import { getPosts } from '@/lib/posts'
import { CustomMDX } from '@/components/mdx'

export async function generateMetadata({
  params
}: {
  params: {
    slug: string
  }
}) {
  let post = getPosts().find((post) => post._meta.path === params.slug)
  if (!post) return notFound()

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post._meta.path}`
    },
    openGraph: {
      type: 'article',
      publishedTime: new Date(post.publishedAt).toISOString()
    }
  }
}

export async function generateStaticParams() {
  let posts = getPosts()

  return posts.map((post) => ({
    slug: post._meta.path
  }))
}

function GetLastPosts() {
  let posts = getPosts()
  return (
    <section className='mt-12'>
      <h2 className='text-xl font-medium tracking-tighter'>Últimos Posts</h2>
      <div className='my-8 flex w-full flex-col space-y-4'>
        {posts.slice(0, 3).map((post) => {
          return (
            <div className='group relative' key={post._meta.path}>
              <Link
                href={`/blog/${post._meta.path}`}
                title={post.title}
                className='flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800'
              >
                <div className='flex flex-col'>
                  <p className='font-medium text-neutral-900 dark:text-neutral-100'>
                    {post.title}
                  </p>
                </div>
                <div className='text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300'>
                  <ChevronRightIcon />
                </div>
              </Link>
              {!post.isOld && (
                <div className='absolute left-0 top-0 inline-flex bg-neutral-500 px-3 py-1 dark:bg-neutral-600'>
                  <span className='text-xxs leading-none text-white'>New</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function Blog({
  params
}: {
  params: {
    slug: string
  }
}) {
  let post = getPosts().find((post) => post._meta.path === params.slug)
  if (!post) return notFound()

  return (
    <div>
      <article className='prose prose-neutral dark:prose-invert'>
        <h1>{post.title}</h1>
        <CustomMDX code={post.mdx.body} />
      </article>
      <GetLastPosts />
    </div>
  )
}
