import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'

import { getPosts } from '@/lib/posts'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog'
  },
  title: 'Blog de Nikolas Santis | Reflexiones y Aprendizajes',
  description:
    'Explora el blog de Nikolas Santis, donde comparte sus reflexiones, aprendizajes y mejores prácticas en el desarrollo de software fullstack. Artículos sobre React, Next.js, Node.js, y experiencias trabajando remotamente desde Chile.'
}

export default function Page() {
  let posts = getPosts()

  return (
    <div>
      <h1 className='mb-12 text-2xl font-medium tracking-tighter'>
        Mi blog 👋
      </h1>

      <div className='my-8 flex w-full flex-col space-y-4'>
        {posts.map((post) => {
          const isOld = post.isOld
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
              {!isOld && (
                <div className='absolute left-0 top-0 inline-flex bg-neutral-500 px-3 py-1 dark:bg-neutral-600'>
                  <span className='text-xxs leading-none text-white'>New</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
