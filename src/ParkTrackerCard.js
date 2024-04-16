import './ParkTrackerCard.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ParkTrackerCard({name}){
const [checked, setChecked] = useState(false)
const [visitedParks, setVisitedParks] = useState(0)
    function trackParks(checked){
        if(checked === true){
            setChecked(true)
        }  else {
            setChecked(false)
        }
    }
console.log('NAME:', name)
    if(checked){
         return (
        <div className='park-container'>
            <p className='park-tracker-name'>{name}</p>
            <img className='tracker-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
            <input type='checkbox' onClick={event => trackParks(event.target.checked)}/>
        </div>
     
    )
    } else {
        return (
            <div className='park-container'>
            <p>{name}</p>
            <img className='tracker-image' src="https://i.pinimg.com/564x/c1/07/12/c1071269b82e857c39c5ef6ac265d7f4.jpg"/> 
            <input type='checkbox' onClick={event => trackParks(event.target.checked)}/>
        </div>
        )
    }
}

ParkTrackerCard.propTypes = {
    name: PropTypes.string.isRequired
}