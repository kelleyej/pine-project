import './ParkTrackerCard.css';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ParkTrackerCard({name, id}){

const [checked, setChecked] = useState(false)

    if(checked){

         return (
        <div className='park-container'>
            <p className='park-tracker-name'>{name}</p>
            <img className='tracker-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
            <input id={id} name={name} type='checkbox' onClick={event => setChecked(event.target.checked)} />
        </div>
    )

    } else {

        return (
            <div className='park-container'>
            <p>{name}</p>
            <img className='tracker-image' src="https://i.pinimg.com/564x/c1/07/12/c1071269b82e857c39c5ef6ac265d7f4.jpg"/> 
            <input id={id} type='checkbox' onClick={event => setChecked(event.target.checked)} />
        </div>
        )
    }
    
}

ParkTrackerCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}