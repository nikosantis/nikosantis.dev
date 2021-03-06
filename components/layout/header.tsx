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
    <header>
      <Container>
        <div className='box'>
          <Link href='/'>
            <a>
              <div className='brand'>
                <span className='logo'>
                  <Logo />
                </span>
                <span className='text'>nikosantis.dev</span>
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
      <style jsx>
        {`
          header {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            @media (min-width: 992px) {
              padding: 0.5rem 1rem;
            }
          }
          .box {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            @media (min-width: 992px) {
              justify-content: space-between;
            }
          }
          .brand {
            display: flex;
            align-items: center;
            height: 50px;
          }
          .logo {
            margin-right: 15px;
            font-size: 0;
          }
          .text {
            line-height: 1;
            font-size: 1rem;
            font-weight: 600;
            color: var(--ns-logo);
            @media (min-width: 576px) {
              font-size: 1.2rem;
            }
          }
          h1 {
            font-size: 1.5rem;
          }
        `}
      </style>
    </header>
  )
}
