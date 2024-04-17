import locations from './LocationInfo';
import ParkTrackerCard from './ParkTrackerCard';
import './ParkTracker.css';
import { useState } from 'react'

export default function ParkTracker(){

        const parks = locations.map(area => {
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
            {parks}
        </div> 
        </div>
      
    )
}