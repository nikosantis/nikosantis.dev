import Link from 'next/link'

function Footer() {
  return (
    <footer className='mt-3 pb-6 pt-3 text-center font-mono text-xs text-gray-500 dark:text-gray-400'>
      <div className='flex justify-between'>
        <p>
          Nikolas Santis (
          <Link
            href='https://www.linkedin.com/in/nikosantis/'
            target='_blank'
            title='Mi perfil en LinkedIn'
          >
            /nikosantis
          </Link>
          )
        </p>
        <p>
          <Link
            href='https://github.com/nikosantis/nikosantis.dev'
            target='_blank'
            title='nikosantis.dev source code'
            aria-labelledby='source'
          >
            source
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
