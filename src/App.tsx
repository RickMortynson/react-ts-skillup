import Navbar from './components/Navbar'
import TourPage from './components/Main'
import tourInfoType from './types/location'

import toursData from './data'

function App() {
  const AllTours = (toursData as tourInfoType[]).map(tour => {
    return <TourPage {...tour} />
  })
  return (
    <div>
      <Navbar />
      <div className="px-16 py-8">{AllTours}</div>
    </div>
  )
}

export default App
