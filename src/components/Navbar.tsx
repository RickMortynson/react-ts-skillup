import { FC } from 'react'
import { IoEarth } from 'react-icons/io5'

const Navbar: FC = () => {
  return (
    <nav className="flex justify-center bg-[#F55A5A] py-4 text-center font-sans text-white">
      <IoEarth className="mr-2 self-center text-xl text-[36px]" />
      <span className="self-center text-[18px] ">my travel journal.</span>
    </nav>
  )
}

export default Navbar
