
import { useParams, Link } from 'react-router-dom';
import Park from '../Park/Park';
import './RegionParks.css';
import State from '../State/State';
import { useState, useEffect } from 'react';
import FilteredParks from '../FilteredParks/FilteredParks';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';

export default function RegionParks({parks, setParks}){
    const [states, setStates] = useState([])
    const [test, setTest] = useState(null)
    // const [parks, setParks] = useState([])
    const [error, setError] = useState(null)

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/v1/locations')
    //     .then(res => {
    //         if(!res.ok){
    //             throw new Error('Something went wrong. Please try again later.')
    //         } else {
    //             return res.json()
    //         }
    //     })
    //     .then(data => {
    //         setParks(data.locations)
   
    //     })
    //     .catch(error => setError(error))
    // }, [])
    

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
        setTest(filteredParks)
    }
  
      function resetStates(){
        setTest(parkByRegion)
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
            {test ? <FilteredParks test={test}/> : nationalPark}
        </div> 
        </main>
       
    )

}