import { useCallback } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import cx from 'clsx'
import { useTheme } from 'next-themes'

export default function DarkmodeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const themeClass = resolvedTheme || ''
  const handleClick = useCallback(() => {
    setTheme(resolvedTheme ? (resolvedTheme === 'dark' ? 'ligth' : 'dark') : '')
  }, [resolvedTheme, setTheme])

  return (
    <button
      className={cx(
        'w-[50px] h-[50px] cursor-pointer bg-none rounded-lg transition-colors',
        themeClass
      )}
      type='button'
      onClick={handleClick}
      aria-label='Cambiar theme'
    >
      <div className='flex justify-center items-center'>
        {resolvedTheme === 'dark' ? <FiSun size='20' /> : <FiMoon size='20' />}
      </div>
    </button>
  )
}
