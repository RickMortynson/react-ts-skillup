import { FC } from 'react'
import avatarImage from '../images/avatar.png'
import emailIcon from '../images/email.svg'
import linkedinIcon from '../images/linkedin.svg'

const DigitalCardInfo: FC = () => {
  return (
    <>
      <img
        id="image"
        src={avatarImage}
        alt="avatar"
        className=" rounded-t-md"
      />

      <span className="text-white font-bold text-[2.4vh]  mt-1 text-center">
        Taras Bratyshchenko
      </span>
      <span className="text-[#F3BF99] text-center text-[1.8vh]">
        Fullstack Developer
      </span>
      <span className="text-white text-center text-[1.8vh] mt-1 ">
        @LoliUnicorn
      </span>

      <div className="w-full flex justify-around mt-2 children:text-[2vh]">
        <button className="bg-white rounded-md px-3 py-1 flex  justify-around items-center w-[40%]">
          <img src={emailIcon} alt="click email" />
          <span>Email</span>
        </button>
        <button className="bg-[#5093E2] rounded-md px-3 flex justify-between items-center w-[40%]">
          <img src={linkedinIcon} alt="open linkedin" />
          <span className="text-white ">LinkedIn</span>
        </button>
      </div>
    </>
  )
}

export default DigitalCardInfo
