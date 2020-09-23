import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Collapse from './collapse'
import Container from 'components/container'

function Navbar ({ isOpen }) {
  const router = useRouter()

  return (
    <Collapse navbar isOpen={isOpen}>
      <nav role='navigation'>
        <Container>
          <div className='links'>
            <Link href='/'>
              <a className={cx('link', {
                active: router.pathname === '/'
              })}
              >
                Inicio
              </a>
            </Link>
            <Link href='/sobre-mi'>
              <a className={cx('link', {
                active: router.pathname === '/sobre-mi'
              })}
              >
                Sobre mi
              </a>
            </Link>
            <Link href='/blog'>
              <a className={cx('link', {
                active: router.pathname === '/blog'
              })}
              >
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

export default memo(Navbar)
