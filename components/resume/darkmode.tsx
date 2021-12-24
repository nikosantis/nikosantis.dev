import { useMounted } from 'lib/hooks/use-mounted'
import DarkmodeToggle from 'components/darkmode-toggle'

export default function ResumeDarkmode() {
  const mounted = useMounted()
  return (
    <div className=''>
      {mounted ? <DarkmodeToggle /> : <div className='w-[50px] h-[50px]' />}
    </div>
  )
}
