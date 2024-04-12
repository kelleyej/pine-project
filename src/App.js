import NavBar from './NavBar'
import './App.css';
import Regions from './Regions'
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Regions />}/>
      </Routes>
      
    </div>
  );
}

export default App;
