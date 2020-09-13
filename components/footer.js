import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Container from 'components/container'

export default function Footer () {
  return (
    <footer>
      <Container>
        <div className='wrapper'>
          <div>
            <p>
              ©{' '}
              <Link href='/'>
                <a>Nikolas Santis</a>
              </Link>.
              Santiago, Chile.
            </p>
          </div>
          <div className='social'>
            <div className='network'>
              <a href='https://github.com/nikosantis' target='_blank' rel='noopener noreferrer'>
                <FaGithub size='24' />
              </a>
            </div>
            <div className='network'>
              <a href='https://www.linkedin.com/in/nikosantis' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size='24' />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <style jsx>
        {`
          footer {
            height: var(--ns-footer);
          }
          .wrapper {
            height: var(--ns-footer);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .social {
            display: flex;
            align-items: center;
          }
          .network {
            margin-right: 8px;
            &:last-child {
              margin: 0;
            }
          }
        `}
      </style>
    </footer>
  )
}
