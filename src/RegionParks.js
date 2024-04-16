import locations from './LocationInfo';
import { useParams, Link } from 'react-router-dom';
import Park from './Park';
import './RegionParks.css';
import State from './State';
import { useState, useEffect } from 'react';
import FilteredParks from './FilteredParks';

export default function RegionParks(){
    const [states, setStates] = useState([])
    const [test, setTest] = useState(null)

    const area = useParams().region
    const parkByRegion = locations.filter(location => {
        return location.region === area
    })


    function filterParks(state){
        const filteredParks = parkByRegion.filter(park => park.state === state)
        setTest(filteredParks)
    }

    const nationalPark = parkByRegion.map(park => {
        return (
            <Link to={`/region/${park.name}`}>
                <Park 
                key={park.id}
                name={park.name}
                state={park.state}
                image={park.image}
                city={park.city}
                test={test}
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
        <State states={states} parkByRegion={parkByRegion} filterParks={filterParks}/>
        <div className='park-grid'>
            {test ? <FilteredParks test={test}/> : nationalPark}
        </div> 
        </main>
       
    )

}