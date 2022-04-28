import tourInfoType from '../types/location'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Main = (props: tourInfoType): JSX.Element => {
  return (
    <div className="max-h-80 py-8 last:border-0 border-b border-[#f5f5f5] font-sans">
      <div className="w-full flex rounded-3xl shadow-md ring-1 ring-gray-500/10 ">
        <img
          src={props.imageUrl}
          alt="tour"
          className="object-cover h-64 w-48 rounded-l-3xl shadow-md"
        />

        <div className="flex flex-col p-4 self-center">
          <div className="flex items-center">
            <FaMapMarkerAlt className="fill-[#ff4a53] inline" />
            <span className="tracking-wider uppercase">{props.location}</span>
            <a href={props.googleMapsUrl}>
              <span className="text-[#918E9B] underline pl-2">
                View on Google Maps
              </span>
            </a>
          </div>

          <span className="font-bold text-5xl mt-1 mb-4">{props.title}</span>

          <span className="font-bold ">
            {props.startDate} - {props.endDate}
          </span>

          <span className="leading-normal">{props.description}</span>
        </div>
      </div>
    </div>
  )
}

export default Main
