import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: ReactNode
}

function MyPortal({ children }: Props) {
  const _rootDom = document.body

  return createPortal(children, _rootDom)
}
