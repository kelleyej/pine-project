
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './ParkTracker.css';

export default function ParkTracker({parks}){
    const [visited, setVisited] = useState(getVisitedParks())
    const [search, setSearch] = useState('')

    const filteredParks = parks.filter(park => park.name.toLowerCase().includes(search.toLowerCase()))   
   
    function trackParks(event){
        let parkName = event.target.value
        if(event.target.checked){
            setVisited([...visited, parkName])
        } else {
            setVisited(visited.filter(park => park !== parkName))
        }
    }

    function getVisitedParks(){
        const trackedParks = localStorage.getItem('visited')
        const saved = JSON.parse(trackedParks)
        return saved || []
    }

    useEffect(() => {
        const trackedParks = JSON.stringify(visited)
        localStorage.setItem('visited', trackedParks)
    }, [visited])

  const parkDisplay = filteredParks.map(park => {
    if(visited.includes(park.name)){
        return (
            <div className='park-container'>
                <p className='park-tracker-name'>{park.name}</p>
                <img className='retro' src={park.visited} />
                <input type="checkbox" id={park.id} checked='true' value={park.name} onChange={(event) => trackParks(event)}/>
            </div>
        )
    } else {
        return (
            <div className='park-container'>
                <p className='park-tracker-name-second'>{park.name}</p>
                <img className='retro' src={park.visited} />
                <input type="checkbox" id={park.id} value={park.name} onChange={(event) => trackParks(event)}/>
            </div>
        )
    }
  })
  return (
    <div className='park-tracker-container'>   
        <h1 className='park-tracker-heading'>Park Tracker</h1>
        {visited.length === 1 ? <p className='counter'>You have visited {visited.length} National Park-- you have {63- (visited.length)} left to go!</p> : <p className='counter'>You have visited {visited.length} National Parks-- you have {63- (visited.length)} left to go!</p>}
        <input className='search-bar' type='text' placeholder='Search park by name 🔍' onChange={event => setSearch(event.target.value)} />
        <div className='tracker-grid'>
            {parkDisplay}
        </div> 
    </div>  
    )
}

ParkTracker.propTypes = {
    parks: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.number.isRequired, 
           name: PropTypes.string.isRequired,
           state: PropTypes.string.isRequired,
           region: PropTypes.string.isRequired,
           city: PropTypes.string.isRequired,
           image: PropTypes.string.isRequired,
           visited: PropTypes.string.isRequired
        })
    )
}