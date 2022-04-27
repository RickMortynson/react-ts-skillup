import { FC } from 'react'
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare
} from 'react-icons/fa'

const DigitalFooter: FC = () => {
  return (
    <div className="w-full aspect-[1/0.1924] bg-[#161619] text-white rounded-b-md absolute bottom-0">
      <div className="h-full flex px-10 justify-between items-center">
        <FaTwitterSquare size={20} fill="#918E9B" />
        <FaFacebookSquare size={20} fill="#918E9B" />
        <FaInstagramSquare size={20} fill="#918E9B" />
        <FaGithubSquare size={20} fill="#918E9B" />
      </div>
    </div>
  )
}

export default DigitalFooter
