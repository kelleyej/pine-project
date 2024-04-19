import { useState } from 'react';

export default function ParkTrackerCard({id, name, index, parks}){
    const [visited, setVisited] = useState([])

  
    function trackParks(event){
        let parkName = event.target.value
        console.log(event.target.checked)
        if(event.target.checked){
            setVisited([...visited, parkName])
        }
    }
  console.log('visited parks:', visited)
  parks.map(park => {
      return (
        <div>
            <p>{park.name}</p>
            <input type="checkbox" id={park.id} value={park.name} onChange={(event) => trackParks(event)}/>
        </div>
    )
  })
  
}