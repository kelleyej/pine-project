import locations from './LocationInfo';
import { useParams, Link } from 'react-router-dom';
import Park from './Park';
import './RegionParks.css';
import State from './State';
import { useState, useEffect } from 'react';

export default function RegionParks(){
    const [states, setStates] = useState([])
    const [test, setTest] = useState([])

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
      
    function filterParks(state){
        const filteredParks = parkByRegion.filter(park => {
            return park.state === state 
        })
        setTest([...filteredParks])
        
        return filteredParks; 

    }
   console.log(test)
    return (
        <main>
        <State states={states} filterParks={filterParks}/>
        <div className='park-grid'>
            {nationalPark}
        </div> 
        </main>
       
    )

}