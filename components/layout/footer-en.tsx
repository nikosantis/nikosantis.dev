import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Container from 'components/layout/container'
import pckJson from 'package.json'

export default function FooterEn() {
  return (
    <footer className='h-[70px]'>
      <Container>
        <div className='h-[70px] flex justify-between items-center'>
          <div>
            <p>
              <Link href='/en' aria-label='Go to home'>
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
                aria-label='Go to Github'
              >
                <FaGithub size='24' />
              </a>
            </div>
            <div className='mr-2 last:m-0'>
              <a
                href='https://www.linkedin.com/in/nikosantis'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Go to LinkedIn'
              >
                <FaLinkedin size='24' />
              </a>
            </div>
          </div>
        </div>
        <div className='text-center text-sm'>
          <p>
            Developed with{' '}
            <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
              Next.js
            </a>{' '}
            version {pckJson.dependencies.next} and{' '}
            <a href='https://tailwindcss.com/' target='_blank' rel='noreferrer'>
              Tailwind
            </a>{' '}
            version {pckJson.devDependencies.tailwindcss} and deployed in{' '}
            <a href='https://vercel.com' target='_blank' rel='noreferrer'>
              Vercel
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  )
}
