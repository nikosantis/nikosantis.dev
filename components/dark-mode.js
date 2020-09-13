import { useDarkMode } from 'lib/contexts/dark-mode-context'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function DarkMode () {
  const { mode, toggleDark, toggleLight } = useDarkMode()

  return (
    <div className='togle'>
      {
        mode === 'dark'
          ? (
            <button className='dark' type='button' onClick={toggleLight}>
              <span>
                <FiSun size='20' />
              </span>
            </button>
          )
          : (
            <button className='light' type='button' onClick={toggleDark}>
              <span>
                <FiMoon size='20' />
              </span>
            </button>
          )
      }
      <style jsx>
        {`
          .togle {
            padding: 0;
            margin-left: auto;
            order: 1;
            @media (min-width: 992px) {
              order: 2;
            }
          }
          button {
            width: 50px;
            height: 50px;
            cursor: pointer;
            background: none;
            border-radius: 8px;
            transition: background 0.2s ease;
          }
          .dark {
            &:hover {
              outline: none;
              background: var(--ns-light);
            }
            span {
              font-size: 0;
              color: var(--ns-fg);
            }
          }
          .light {
            &:hover {
              outline: none;
              background: var(--ns-light);
            }
            span {
              font-size: 0;
              color: var(--ns-fg);
            }
          }
        `}
      </style>
    </div>
  )
}
