import NavBar from './NavBar';
import './App.css';
import Regions from './Regions';
import RegionParks from './RegionParks';
import { Routes, Route } from 'react-router-dom';
import ParkDetails from './ParkDetails';
import ParkTracker from './ParkTracker';
import NotFound from './NotFound';
import {useEffect} from 'react';

export default function App() {
//   useEffect(() => {
//     fetch('http://localhost:3000/api/v1/locations')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Regions />}/>
        <Route path='/parks/:region' element={<RegionParks />} />
        <Route path='/parks/region/:park' element={<ParkDetails />} />
         {/* <Route path='/states/:state' element={<StateCard />} /> */}
        <Route path='/parks/tracker' element={<ParkTracker />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}
 
