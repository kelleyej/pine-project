import locations from './LocationInfo';
import { useParams } from 'react-router-dom';
import Park from './Park';
import './RegionParks.css';
import State from './State';
import { useState, useEffect } from 'react';

export default function RegionParks(){
    const [states, setStates] = useState([])
    // const parkCodes = ['acad', 'arch', 'badl', 'bibe', 'bisc', 'blca', 'brca', 'cany', 'care', 'cave', 'chis', 'cong', 
    // 'crla', 'cuva', 'deva', 'drto', 'dena', 'ever', 'jeff', 'gaar', 'glac', 'glba', 'grca', 'grte', 'grba', 'grsa', 'grsm', 
    // 'gumo', 'hale', 'havo', 'hosp', 'indu', 'isro', 'jotr', 'katm', 'kefj', 'kova', 'lacl', 'lavo', 'maca', 'meve', 
    // 'mora', 'neri', 'noca', 'npsa', 'olym', 'pefo', 'pinn', 'redw', 'romo', 'sagu', 'seki', 'shen', 'thro', 'viis', 'voya', 'whsa', 'wica', 'wrst',
    // 'yell', 'yose', 'zion']  
    
    // fetch(`https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&parkCode=${parkCodes}&limit=62`)
    // // fetch('https://developer.nps.gov/api/v1/parks/?api_key=L85BGF7lUDFAWRO9q3sz5DijJohpytxVfajv4UXu&start=150')
    // .then(res => res.json())
    // .then(data => console.log(data))
    
    const area = useParams().region
    const parkByRegion = locations.filter(location => {
        return location.region === area
    })
    
    const nationalPark = parkByRegion.map(park => {
        return (
            <Park 
            key={park.id}
            name={park.name}
            state={park.state}
            image={park.image}
            city={park.city}
            />
        )
    })
        useEffect(() => {
            const allStates = new Set(nationalPark.map(park => park.props.state)) 
        setStates([...allStates])
        }, [])
       
    
    
    return (
        <main>
        <State states={states}/>
        <div className='park-grid'>
            {nationalPark}
        </div> 
        </main>
       
    )

}