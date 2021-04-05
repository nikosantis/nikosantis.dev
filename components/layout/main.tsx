import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Main({ children }: Props) {
  return (
    <main>
      {children}
      <style jsx>
        {`
          main {
            width: 100%;
            min-height: calc(100vh - (var(--ns-header) + var(--ns-footer)));
          }
        `}
      </style>
    </main>
  )
}
