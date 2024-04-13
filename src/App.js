import NavBar from './NavBar';
import './App.css';
import Regions from './Regions';
import RegionParks from './RegionParks';
import { Routes, Route } from 'react-router-dom';
import ParkDetails from './ParkDetails';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Regions />}/>
        <Route path='/:region' element={<RegionParks />} />
        <Route path='/region/:park' element={<ParkDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
