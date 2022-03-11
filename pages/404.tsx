import Container from 'components/layout/container'
import Page from 'components/layout/page'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Page title='404 - Nikolas Santis'>
      <main className='w-full h-full flex flex-1' role='main'>
        <Container>
          <div className='text-center h-full flex flex-col'>
            <p className='text-5xl mb-8'>🥴🥴🥴🥴</p>
            <h1 className='text-6xl mb-12'>❌ Error 404 ❌ - Not Found</h1>
            <h2 className='text-2xl mb-6'>
              Quizás lo que estás buscando no existe o te has equivocado de URL.
            </h2>
            <p className='text-xl mb-6'>Mejor puedes vovler al inicio.</p>
            <div className='flex justify-center'>
              <Link href='/'>
                <a
                  title='Ir al inicio'
                  className='relative inline-flex items-center justify-center cursor-pointer transition duration-200 no-underline outline-none px-[3.5rem] h-[2.81rem] text-sm text-center rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 border border-gray-900 hover:bg-white hover:border-gray-900'
                >
                  ir al inicio
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </Page>
  )
}
