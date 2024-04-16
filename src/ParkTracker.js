import locations from './LocationInfo';
import ParkTrackerCard from './ParkTrackerCard';
import './ParkTracker.css';

export default function ParkTracker(){

        const parks = locations.map(area => {
            return (
                 <div>
          
            <ParkTrackerCard 
                name={area.name}
                state={area.state}
                city={area.city}
                image={area.image}
            />  
        </div>   
            )
        })
     
    return (
        <div>

             <h2>Park Tracker</h2>
        <div className='tracker-grid'>
            
            {parks}
        </div> 
        </div>
      
    )
}