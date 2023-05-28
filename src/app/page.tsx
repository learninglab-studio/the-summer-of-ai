import Image from 'next/image'
import BigTextInTheMiddle from '@/components/layout/BigTextInTheMiddle'
import SimpleCountdown from '@/components/timers/SimpleCountdown'

export default function Home() {
  return (
    <main >
      <BigTextInTheMiddle>
        <SimpleCountdown targetDate={new Date('2023-06-21T10:57:00')} />
      </BigTextInTheMiddle>
      <p>and other stuff will be here</p>
    </main>
  )
}
