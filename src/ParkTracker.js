import locations from './LocationInfo';
import ParkTrackerCard from './ParkTrackerCard';
import './ParkTracker.css';

export default function ParkTracker(){

        const parks = locations.map(area => {
            return (
                 <div>
          
            <ParkTrackerCard 
                name={area.name}
                key={area.id}
            />  
        </div>   
            )
        })
     console.log(parks)
    return (
        <div>

             <h1>Park Tracker</h1>
        <div className='tracker-grid'>
            
            {parks}
        </div> 
        </div>
      
    )
}