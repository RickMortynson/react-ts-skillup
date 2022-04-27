import { FC } from 'react'
import { ReactComponent as ReactLogo } from '../images/logo.svg'

const Navbar: FC = () => {
  return (
    <nav className="flex bg-[#202129] pr-[30px] pl-[10px] py-[25px] items-center shadow-md shadow-[#61dafc]/70 z-10 ">
      <ReactLogo className="w-20" fill="#61DAFB" />
      <span className="font-bold text-2xl text-[#61DAFB] mr-auto">
        ReactFacts
      </span>

      <span className="text-white font-semibold text-xl">
        React Course - Project 1
      </span>
    </nav>
  )
}

export default Navbar
