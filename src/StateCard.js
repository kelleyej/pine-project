import './StateCard.css';
import { useState } from 'react';


export default function StateCard({location, parkByRegion, filterParks}){

    return (     
            <div onClick={event => filterParks(event.target.id)}>
            <h3 id={location} className='state'>{location}</h3>
            
        </div>  

    )
}