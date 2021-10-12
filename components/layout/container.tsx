import { ReactNode } from 'react'
import cx from 'clsx'

type Props = {
  className?: string
  children: ReactNode
}

function Container({ className, children }: Props) {
  return (
    <div
      className={cx(
        'w-full mx-auto p-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[880px]',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
