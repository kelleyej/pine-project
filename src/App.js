import NavBar from './NavBar';
import './App.css';
import Regions from './Regions';
import RegionParks from './RegionParks';
import { Routes, Route } from 'react-router-dom';
import ParkDetails from './ParkDetails';
import ParkTracker from './ParkTracker';
import StateCard from './State';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Regions />}/>
        <Route path='/:region' element={<RegionParks />} />
        <Route path='/region/:park' element={<ParkDetails />} />
        <Route path='/parks/tracker' element={<ParkTracker />} />
        <Route path='/states/:state' element={<StateCard />} />
        {/* <Route path='*' element={<ErrorMessage />} /> */}
      </Routes>
      
    </div>
  );
}
 
export default App;
