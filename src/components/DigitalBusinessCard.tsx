import { FC } from 'react'
import DigitalCardInfo from './DigitalCardInfo'
import DigitalCardAbout from './DIgitalCardAbout'
import DigitalInterests from './DigitalInterests'
import DigitalFooter from './DIgitalFooter'

const DigitalBusinessCard: FC = () => {
  return (
    <main className="flex justify-center items-center h-[80%] aspect-[1/1.58] bg-[#23252c] shadow-md z-10">
      <div
        id="card"
        className="h-[90%] aspect-[1/2.461] bg-[#1A1B21] rounded-[10px] flex flex-col relative shadow-md"
      >
        <DigitalCardInfo />
        <DigitalCardAbout />
        <DigitalInterests />
        <DigitalFooter />
      </div>
    </main>
  )
}

export default DigitalBusinessCard
