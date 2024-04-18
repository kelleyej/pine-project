import NavBar from '../NavBar/NavBar';
import './App.css';
import Regions from '../Regions/Regions';
import RegionParks from '../RegionParks/RegionParks';
import { Routes, Route } from 'react-router-dom';
import ParkDetails from '../ParkDetails/ParkDetails';
import ParkTracker from '../ParkTracker/ParkTracker';
import NotFound from '../NotFound/NotFound';
import {useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function App() {
  const [parks, setParks] = useState([])
  const [error, setError] = useState(null)

useEffect(() => {
  fetch('http://localhost:3000/api/v1/locations')
  .then(res => {
      if(!res.ok){
        setError(`${res.status}`)
      } else {
          return res.json()
      }
  })
  .then(data => {
      setParks(data.locations)

  })
  .catch(error => setError(error.message))
}, [])


  return (
    <div className="App">
      <NavBar />
      {error && <ErrorMessage error={error} />}
      <Routes>
        <Route path='/' element={<Regions />}/>
        <Route path='/parks/:region' element={<RegionParks parks={parks} setParks={setParks}/>} />
        <Route path='/region/:park' element={<ParkDetails />} />
         {/* <Route path='/states/:state' element={<StateCard />} /> */}
        <Route path='/parks/tracker' element={<ParkTracker parks={parks} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}
 
