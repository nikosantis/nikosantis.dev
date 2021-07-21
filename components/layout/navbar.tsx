import Link from 'next/link'
import { useRouter } from 'next/router'
import cs from 'classnames'

import Collapse from 'components/collapse'
import Container from 'components/layout/container'

type Props = {
  isOpen: boolean
}

export default function Navbar({ isOpen }: Props) {
  const router = useRouter()

  return (
    <Collapse navbar isOpen={isOpen}>
      <nav role='navigation'>
        <Container>
          <div className='links'>
            <Link href='/'>
              <a
                className={cs('link', {
                  active: router.pathname === '/'
                })}
                aria-label='Ir al inicio'>
                Inicio
              </a>
            </Link>
            <Link href='/sobre-mi'>
              <a
                className={cs('link', {
                  active: router.pathname === '/sobre-mi'
                })}
                aria-label='Ir a Sobre mí'>
                Sobre mi
              </a>
            </Link>
            <Link href='/blog'>
              <a
                className={cs('link', {
                  active: router.pathname === '/blog'
                })}
                aria-label='Ir al blog'>
                Blog
              </a>
            </Link>
          </div>
        </Container>
        <style jsx>
          {`
            nav {
              flex: 1;
              padding: 0 12px;
            }
            .links {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              flex-direction: column;
              margin-top: 1.125rem;
              @media (min-width: 992px) {
                flex-direction: row;
                margin: 0;
              }
            }
            .link {
              padding: 20px 22px;
              transition: background 0.2s ease;
              text-transform: uppercase;
              color: var(--ns-navbar-link);
              border-radius: 8px;
              font-weight: 500;
              & :hover {
                background: var(--ns-light);
                color: var(--ns-navbar-link-hover);
              }
            }
            .active {
              color: var(--ns-navbar-link-hover);
            }
          `}
        </style>
      </nav>
    </Collapse>
  )
}
