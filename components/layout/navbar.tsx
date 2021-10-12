import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'clsx'

import Collapse from 'components/collapse'
import Container from 'components/layout/container'

type Props = {
  isOpen: boolean
}

export default function Navbar({ isOpen }: Props) {
  const router = useRouter()

  return (
    <Collapse navbar isOpen={isOpen}>
      <nav role='navigation' className='flex-1 px-3'>
        <div className='container mx-auto'>
          <div className='flex flex-col justify-end items-center mt-[1.125rem] lg:flex-row lg:mt-0'>
            <Link href='/'>
              <a
                className={cx(
                  'px-[22px] py-[12px] uppercase transition-colors text-gray-500 rounded-lg font-medium hover:bg-gray-100 hover:text-gray-600',
                  {
                    'text-gray-900 hover:text-gray-900 dark:text-white':
                      router.pathname === '/'
                  }
                )}
                aria-label='Ir al inicio'
              >
                Inicio
              </a>
            </Link>
            <Link href='/sobre-mi'>
              <a
                className={cx(
                  'px-[22px] py-[12px] uppercase transition-colors text-gray-500 rounded-lg font-medium hover:bg-gray-100 hover:text-gray-600',
                  {
                    'text-gray-900 hover:text-gray-900 dark:text-white':
                      router.pathname === '/sobre-mi'
                  }
                )}
                aria-label='Ir a Sobre mí'
              >
                Sobre mi
              </a>
            </Link>
            <Link href='/blog'>
              <a
                className={cx(
                  'px-[22px] py-[12px] uppercase transition-colors text-gray-500 rounded-lg font-medium hover:bg-gray-100 hover:text-gray-600',
                  {
                    'text-gray-900 hover:text-gray-900 dark:text-white':
                      router.pathname === '/blog'
                  }
                )}
                aria-label='Ir al blog'
              >
                Blog
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </Collapse>
  )
}
