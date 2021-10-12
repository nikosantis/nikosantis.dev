import { FiMenu } from 'react-icons/fi'
import cx from 'clsx'

type Props = {
  isOpen: boolean
  handleClick: () => void
}

export default function NavbarToggle({ isOpen, handleClick }: Props) {
  return (
    <div className='order-2 ml-1 lg:hidden'>
      <button
        onClick={handleClick}
        aria-label='Abrir menú'
        className={cx(
          'w-[50px] h-[50px] bg-transparent cursor-pointer rounded-lg text-gray-600 border border-gray-100',
          {
            'bg-gray-100': isOpen
          }
        )}
      >
        <span className='flex justify-center items-center'>
          <FiMenu />
        </span>
      </button>
    </div>
  )
}
