import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & LinkProps
export default function ButtonLink({ href, children, ...props }: Props) {
  return (
    <Link href={href} passHref {...props}>
      <a
        href='passHref'
        className='relative inline-flex items-center justify-center cursor-pointer transition duration-200 no-underline outline-none px-[3.5rem] h-[2.81rem] text-sm text-center rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 border border-gray-900 hover:bg-white hover:border-gray-900'
      >
        {children}
      </a>
    </Link>
  )
}
