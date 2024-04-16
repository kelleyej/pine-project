import './ParkTrackerCard.css';
import { useState } from 'react';

export default function ParkTrackerCard({name}){
const [checked, setChecked] = useState(false)
    function trackParks(checked){
        if(checked === true){
            setChecked(true)
        }   
    }
    
    checked ? console.log('this is working') : console.log('this is NOT working')

    return (
        <div className='park-container'>
            <p className='park-tracker-name'>{name}</p>
            <img className='tracker-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
            <input type='checkbox' onClick={event => trackParks(event.target.checked)}/>
        </div>
     
    )
}