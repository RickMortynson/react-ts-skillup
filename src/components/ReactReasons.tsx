import { FC } from 'react'

const ReactReasons: FC = () => {
  return (
    <main className="bg-[#272c34] flex-auto flex flex-col bg-[url('images/slicedLogo.png')] bg-no-repeat bg-right">
      <span className="text-4xl font-bold mt-12 ml-10 text-white">
        Fun facts about React
      </span>
      <ul className="ml-10 mt-12 list-disc list-inside marker:text-[#61dafc] marker:text-3xl children:text-white children:font-semibold">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

export default ReactReasons
