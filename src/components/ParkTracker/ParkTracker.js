
import './ParkTracker.css';
import { useState, useEffect, Dispatch, SetStateAction } from 'react'

export default function ParkTracker({parks}){

const [checkedState, setCheckedState] = useState(new Array(parks.length).fill(false))



console.log(checkedState)
     function handleOnChange(position){
         const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
  
    setCheckedState(updatedCheckedState);
     }

    

let number = checkedState.filter(state => state === true)
        const park = parks.map((area, index) => {
            if(checkedState[index]) {
            return (
       
       
        <div className='park-container' key={area.key}>
            <p className='park-tracker-name'>{area.name}</p>
            <img className='visited-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
            <input id={area.id} name={area.name} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
        </div>
      
            ) } else {
                return (
                    <div className='park-container' key={area.key}> 
                    <p>{area.name}</p>
                    <img className='tracker-image' src="https://images.vexels.com/media/users/3/136584/isolated/preview/96086ee49328e64825862a853297d4e2-pine-tree-silhouette.png"/> 
                    <input id={area.id} type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
                </div>
                )
            }
        })

    return (
        <div className='park-tracker-container'>

             <h1 className='park-tracker-heading'>Park Tracker</h1>
             <p>You have visited {number.length} National Parks-- you have {63- (number.length)} left to go!</p>
        <div className='tracker-grid'>
            {park}
        </div> 
        </div>
      
    )
}