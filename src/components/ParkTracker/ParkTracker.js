import locations from '../LocationInfo/LocationInfo';
import ParkTrackerCard from '../ParkTrackerCard/ParkTrackerCard';
import './ParkTracker.css';
import { useState } from 'react'

export default function ParkTracker({parks}){
console.log('PARK TRACKERRRRRR:', parks)
        const park = locations.map(area => {
            return (
                 <div>
          
            <ParkTrackerCard 
                name={area.name}
                key={area.id}
                id={area.id}
                visited={area.visited}
            />  
        </div>   
            )
        })

    return (
        <div className='park-tracker-container'>

             <h1 className='park-tracker-heading'>Park Tracker</h1>
        <div className='tracker-grid'>
            {park}
        </div> 
        </div>
      
    )
}