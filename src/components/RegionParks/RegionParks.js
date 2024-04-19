
import { useParams, Link } from 'react-router-dom';
import Park from '../Park/Park';
import './RegionParks.css';
import State from '../State/State';
import { useState, useEffect } from 'react';
import FilteredParks from '../FilteredParks/FilteredParks';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types'; 

export default function RegionParks({parks}){

    const [states, setStates] = useState([])
    const [filterStates, setFilterStates] = useState(null)
    const [error, setError] = useState(null)
    console.log(states)
    const area = useParams().region
    const parkByRegion = parks.filter(location => {
        return location.region === area
    })

    useEffect(() => {
        const uniqueStates = new Set(parkByRegion.map(region => region.state))
        setStates([...uniqueStates])
    }, [parks])
   
    function filterParks(state){
        const filteredParks = parkByRegion.filter(park => park.state === state)
        setFilterStates(filteredParks)
    }
  
    function resetStates(){
        setFilterStates(parkByRegion)
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
                filterStates={filterStates}
                />
            </Link>        
        )
    })

    if(error){
        return (
            <ErrorMessage error={error} /> 
        )
    }

    if(!states){
        return (
            <Loading />
        )
    }

    return (
        <main>
            <State states={states} parkByRegion={parkByRegion} filterParks={filterParks}/>
                <div className='button-styling'>
                    {states.length > 1 && <button className='state-button' onClick={resetStates}>Reset States</button>}
                </div>
            <div className='park-grid'>
                {filterStates ? <FilteredParks filterStates={filterStates}/> : nationalPark}
            </div> 
        </main> 
    )
}

RegionParks.propTypes = {
    parks: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.number.isRequired, 
           name: PropTypes.string.isRequired,
           state: PropTypes.string.isRequired,
           region: PropTypes.string.isRequired,
           city: PropTypes.string.isRequired,
           image: PropTypes.string.isRequired,
           visited: PropTypes.bool
        })
    )
}