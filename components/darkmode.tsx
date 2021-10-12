import { useMounted } from 'lib/hooks/use-mounted'
import DarkmodeToggle from 'components/darkmode-toggle'

export default function Darkmode() {
  const mounted = useMounted()
  return (
    <div className='p-0 ml-auto order-1 lg:order-2'>
      {mounted ? <DarkmodeToggle /> : <div className='w-[50px] h-[50px]' />}
    </div>
  )
}
