import { useState } from 'react'
import Link from 'next/link'

import Container from 'components/layout/container'
import DarkMode from 'components/darkmode'
import Logo from 'components/logo'
import Navbar from 'components/layout/navbar'
import NavbarToggle from 'components/layout/navbar-toggle'

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false)

  return (
    <header className='w-full flex items-center flex-col lg:py-2 lg:px-4'>
      <Container>
        <div className='relative flex flex-wrap items-center lg:justify-between'>
          <Link href='/'>
            <a>
              <div className='flex items-center h-[50px]'>
                <span className='mr-4'>
                  <Logo />
                </span>
                <span className='font-semibold text-base sm:text-xl'>
                  nikosantis.dev
                </span>
              </div>
            </a>
          </Link>
          <NavbarToggle
            isOpen={openMobile}
            handleClick={() => setOpenMobile(!openMobile)}
          />
          <Navbar isOpen={openMobile} />
          <DarkMode />
        </div>
      </Container>
    </header>
  )
}
