import locations from './LocationInfo';
import { useParams, Link } from 'react-router-dom';
import Park from './Park';
import './RegionParks.css';
import State from './State';
import { useState, useEffect } from 'react';

export default function RegionParks(){
    const [states, setStates] = useState([])

    const area = useParams().region
    const parkByRegion = locations.filter(location => {
        return location.region === area
    })
    
    const nationalPark = parkByRegion.map(park => {
        return (
            <Link to={`/region/${park.name}`}>
                <Park 
                key={park.id}
                name={park.name}
                state={park.state}
                image={park.image}
                city={park.city}
                />
            </Link>
            
        )
    })
 
        useEffect(() => {
            const allStates = new Set(nationalPark.map(park => park.props.children.props.state)) 
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