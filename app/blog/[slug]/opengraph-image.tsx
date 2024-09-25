import { ImageResponse } from 'next/og'

import { getPosts } from '@/lib/posts'

export const runtime = 'edge'

export const alt = 'Blog post | nikosantis.dev'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  let post = getPosts().find((post) => post._meta.path === params.slug)
  const title = post?.title || 'Not found'

  const geistSemiBold = fetch(
    new URL('./Geist-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())
  const geistBold = fetch(new URL('./Geist-Bold.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )

  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '40px',
          width: '100%',
          height: '100%',
          color: 'white'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 50
          }}
        >
          <span
            style={{
              marginRight: '16px',
              color: 'white'
            }}
          >
            <svg viewBox='0 0 510 278' height='30' fill='white'>
              <path d='M69.8 21.64l2 27.25Q97 17.23 139.55 17.12 177.05 17 195.41 39t18.91 65.79l.36 152.39-63 .15-.35-150.86q-.06-20.06-8.79-29.09t-29-9q-26.6.06-39.84 22.77l.39 166.34-63 .15-.59-235.85zm286.74 170.03q0-11.55-11.49-18.18t-36.76-11.79Q224.08 144.24 224 90.39 223.9 59 249.89 37.9T318 16.7q44.91-.11 71.89 21t27.05 54.87l-63 .15q0-13.51-8.78-22.33t-27.27-8.76q-15.92 0-24.62 7.25a22.74 22.74 0 00-8.68 18.33q0 10.47 10 16.88t33.49 11q23.55 4.64 39.7 10.48 49.95 18.19 50.07 63.32.07 32.26-27.56 52.28t-71.52 20.13q-29.65.07-52.68-10.45t-36.15-28.91q-13.12-18.39-13.17-39.75l59.74-.14q.9 16.78 12.48 25.69t31 8.87q18.09 0 27.34-6.93t9.21-18.01zm71.67 34.06q0-15 10.08-24.44t25.38-9.44q15.48 0 25.64 9.31t10.19 24.4q0 14.82-10 24.11T463.83 259q-15.49 0-25.53-9.21t-10.09-24.06z' />
            </svg>
          </span>
          <span
            style={{
              fontWeight: '600'
            }}
          >
            nikosantis.dev
          </span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: '800',
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '100%'
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 24, opacity: 0.7 }}>nikosantis.dev</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: await geistSemiBold,
          style: 'normal',
          weight: 600
        },
        {
          name: 'Geist',
          data: await geistBold,
          style: 'normal',
          weight: 700
        }
      ]
    }
  )
}
