
import ParkTrackerCard from '../ParkTrackerCard/ParkTrackerCard';
import './ParkTracker.css';
import { useState, useEffect } from 'react'

export default function ParkTracker({parks}){

    const [checked, setChecked] = useState(false)
const [checkedState, setCheckedState] = useState(new Array(parks.length).fill(false))
const [count, setCount] = useState(0)


    const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
  
    setCheckedState(updatedCheckedState);
}

let number = checkedState.filter(state => state === true)
console.log(number.length)
        const park = parks.map((area, index) => {
            return (
       
                  
        <div className='park-container'>
            <p className='park-tracker-name'>{area.name}</p>
            <img className='tracker-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
            <input id={area.id} name={area.name} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
        </div>
 
/*           
            <ParkTrackerCard 
                name={area.name}
                key={area.id}
                id={area.id}
                visited={area.visited}
                parks={parks}
                area={area}
                index={index}
            />   */
      
            )
        })

console.log(checkedState)

    return (
        <div className='park-tracker-container'>

             <h1 className='park-tracker-heading'>Park Tracker</h1>
        <div className='tracker-grid'>
            {park}
        </div> 
        </div>
      
    )
}