import { useCallback } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import cs from 'classnames'
import { useTheme } from 'next-themes'

export default function DarkmodeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const themeClass = resolvedTheme || ''
  const handleClick = useCallback(() => {
    setTheme(resolvedTheme ? (resolvedTheme === 'dark' ? 'ligth' : 'dark') : '')
  }, [resolvedTheme, setTheme])
  return (
    <button
      className={cs('button', themeClass)}
      type='button'
      onClick={handleClick}
    >
      <div className='box-icon'>
        {resolvedTheme === 'dark' ? <FiSun size='20' /> : <FiMoon size='20' />}
      </div>

      <style jsx>
        {`
          .button {
            width: 50px;
            height: 50px;
            cursor: pointer;
            background: none;
            border-radius: 8px;
            transition: background 0.2s ease;
          }
          .box-icon {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dark {
            &:hover {
              outline: none;
              background: var(--ns-light);
            }
            .box-icon {
              font-size: 0;
              color: var(--ns-fg);
            }
          }
          .light {
            &:hover {
              outline: none;
              background: var(--ns-light);
            }
            .box-icon {
              font-size: 0;
              color: var(--ns-fg);
            }
          }
        `}
      </style>
    </button>
  )
}
