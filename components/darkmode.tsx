import { useMounted } from 'lib/hooks/use-mounted'
import DarkmodeToggle from 'components/darkmode-toggle'

export default function Darkmode() {
  const mounted = useMounted()
  return (
    <div className='toggle'>
      {mounted ? <DarkmodeToggle /> : <div className='button' />}

      <style jsx>
        {`
          .toggle {
            padding: 0;
            margin-left: auto;
            order: 1;
            @media (min-width: 992px) {
              order: 2;
            }
          }
          .button {
            width: 50px;
            height: 50px;
          }
        `}
      </style>
    </div>
  )
}
