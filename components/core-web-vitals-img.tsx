import Image from 'next/image'

export default function CoreWebVitalsImg() {
  return (
    <div className='w-full relative mb-8'>
      <Image
        src='/static/images/posts/lo-que-debes-saber-de-core-web-vitals/core-web-vitals.png'
        alt='Core Web Vitals'
        layout='fill'
      />
    </div>
  )
}
