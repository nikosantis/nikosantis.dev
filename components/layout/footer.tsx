import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Container from 'components/layout/container'

export default function Footer() {
  return (
    <footer className='h-[70px]'>
      <Container>
        <div className='h-[70px] flex justify-between items-center'>
          <div>
            <p>
              ©{' '}
              <Link href='/' aria-label='Ir al inicio'>
                <a>Nikolas Santis</a>
              </Link>
              . Santiago, Chile.
            </p>
          </div>
          <div className='flex items-center'>
            <div className='mr-2 last:m-0'>
              <a
                href='https://github.com/nikosantis'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Ir a Github'
              >
                <FaGithub size='24' />
              </a>
            </div>
            <div className='mr-2 last:m-0'>
              <a
                href='https://www.linkedin.com/in/nikosantis'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Ir a LinkedIn'
              >
                <FaLinkedin size='24' />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
