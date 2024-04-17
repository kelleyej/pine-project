import NavBar from './NavBar';
import './App.css';
import Regions from './Regions';
import RegionParks from './RegionParks';
import { Routes, Route } from 'react-router-dom';
import ParkDetails from './ParkDetails';
import ParkTracker from './ParkTracker';
import NotFound from './NotFound';
import {useEffect, useState } from 'react';

export default function App() {
  const [parks, setParks] = useState([])
  const [error, setError] = useState(null)
//   useEffect(() => {
//     fetch('http://localhost:3000/api/v1/locations')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }, [])
useEffect(() => {
  fetch('http://localhost:3000/api/v1/locations')
  .then(res => {
      if(!res.ok){
          throw new Error('Something went wrong. Please try again later.')
      } else {
          return res.json()
      }
  })
  .then(data => {
      setParks(data.locations)

  })
  .catch(error => setError(error))
}, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Regions />}/>
        <Route path='/parks/:region' element={<RegionParks parks={parks} setParks={setParks}/>} />
        <Route path='/parks/region/:park' element={<ParkDetails />} />
         {/* <Route path='/states/:state' element={<StateCard />} /> */}
        <Route path='/parks/tracker' element={<ParkTracker parks={parks} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}
 
