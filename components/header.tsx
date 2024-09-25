import Logo from '@/components/logo'
import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'

function Header() {
  return (
    <header className='sticky mb-16 mt-8'>
      <nav
        className='relative -ml-2 flex scroll-pr-6 flex-row items-center px-0 pb-0'
        id='nav'
      >
        <div className='mr-6 flex flex-row'>
          <Link href='/' title='Inicio'>
            <div className='flex h-[50px] items-center'>
              <span className='mr-4'>
                <Logo />
              </span>
              <span className='hidden text-base font-semibold sm:text-xl lg:block'>
                nikosantis.dev
              </span>
            </div>
          </Link>
        </div>
        <div className='flex flex-row'>
          {NAV_ITEMS.map((navItem) => {
            return (
              <Link
                key={navItem.id}
                href={navItem.slug}
                title={navItem.description}
                className='relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-300'
                aria-labelledby={navItem.labelledby}
              >
                {navItem.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Header
