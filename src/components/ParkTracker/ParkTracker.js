
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './ParkTracker.css';

export default function ParkTracker({parks}){
    const [visited, setVisited] = useState(getVisitedParks())

    function trackParks(event){
        let parkName = event.target.value
        console.log(event.target.checked)
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

  const park = parks.map(park => {
    if(visited.includes(park.name)){
             return (
        <div className='park-container'>
            <p className='park-tracker-name'>{park.name}</p>
            <img className='visited-image' src="https://cdn.pixabay.com/photo/2012/04/13/11/16/pine-31913_640.png"/> 
            <input type="checkbox" id={park.id} checked='true' value={park.name} onChange={(event) => trackParks(event)}/>
        </div>
    )
    } else {
        return (
            <div className='park-container'>
            <p className='park-tracker-name-second'>{park.name}</p>
            <img className='tracker-image' src="https://images.vexels.com/media/users/3/136584/isolated/preview/96086ee49328e64825862a853297d4e2-pine-tree-silhouette.png"/> 
            <input type="checkbox" id={park.id} value={park.name} onChange={(event) => trackParks(event)}/>
        </div>
        )
    }
 
  })
  return (

    <div className='park-tracker-container'>
    <h1 className='park-tracker-heading'>Park Tracker</h1>
    <p className='counter'>You have visited {visited.length} National Parks-- you have {63- (visited.length)} left to go!</p>
<div className='tracker-grid'>
   {park}
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
           visited: PropTypes.bool
        })
    )
}